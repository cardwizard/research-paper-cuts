import { registerMediabunnyServer } from "@mediabunny/server";
import {
  WHISPER_WEBGPU_SAMPLE_RATE,
  canUseWhisperWebGpu,
  downloadWhisperModel,
  loadWhisperModel,
  toCaptions,
  transcribe,
} from "@remotion/whisper-webgpu";
import {
  ALL_FORMATS,
  Conversion,
  FilePathSource,
  Input,
  NullTarget,
  Output,
  WavOutputFormat,
} from "mediabunny";
import { writeFile } from "node:fs/promises";

// Usage: npm run transcribe -- <slug>
const slug = process.argv[2];
if (!slug) throw new Error("usage: transcribe <slug>");
const { readdirSync } = await import("node:fs");
const recording = readdirSync(`public/episodes/${slug}`).find(
  (f) => f.startsWith("recording.") && !f.includes("clean"),
);
const inputPath = `public/episodes/${slug}/${recording}`;
const outputPath = `src/episodes/${slug}/captions-medium.json`;
registerMediabunnyServer();

const support = await canUseWhisperWebGpu();
if (!support.supported) {
  throw new Error(support.detailedReason);
}

const chunks = [];
using input = new Input({
  formats: ALL_FORMATS,
  source: new FilePathSource(inputPath),
});
const audioTrack = await input.getPrimaryAudioTrack();
if (audioTrack === null) {
  throw new Error("The recording does not contain an audio track.");
}

const conversion = await Conversion.init({
  input,
  output: new Output({
    format: new WavOutputFormat(),
    target: new NullTarget(),
  }),
  video: { discard: true },
  audio: (track) => {
    if (track.id !== audioTrack.id) {
      return { discard: true };
    }

    return {
      codec: "pcm-f32",
      forceTranscode: true,
      numberOfChannels: 1,
      sampleFormat: "f32",
      sampleRate: WHISPER_WEBGPU_SAMPLE_RATE,
      process: (sample) => {
        const waveform = new Float32Array(
          sample.allocationSize({ format: "f32", planeIndex: 0 }) /
            Float32Array.BYTES_PER_ELEMENT,
        );
        sample.copyTo(waveform, { format: "f32", planeIndex: 0 });
        chunks.push({
          startFrame: Math.round(sample.timestamp * WHISPER_WEBGPU_SAMPLE_RATE),
          waveform,
        });
        return sample;
      },
    };
  },
});

if (!conversion.isValid) {
  throw new Error("The recording's audio track cannot be decoded.");
}

await conversion.execute();
const waveformLength = chunks.reduce(
  (max, chunk) => Math.max(max, chunk.startFrame + chunk.waveform.length),
  0,
);
const channelWaveform = new Float32Array(waveformLength);
for (const chunk of chunks) {
  const destinationStart = Math.max(0, chunk.startFrame);
  const sourceStart = Math.max(0, -chunk.startFrame);
  const availableLength = Math.min(
    chunk.waveform.length - sourceStart,
    channelWaveform.length - destinationStart,
  );

  if (availableLength > 0) {
    channelWaveform.set(
      chunk.waveform.subarray(sourceStart, sourceStart + availableLength),
      destinationStart,
    );
  }
}

const model = process.env.WHISPER_MODEL ?? "small.en";
await downloadWhisperModel({ model });
await using modelHandle = await loadWhisperModel({ model });
const transcription = await transcribe({ channelWaveform, model });
const { captions } = toCaptions({ whisperWebGpuOutput: transcription });
for (let index = 0; index < captions.length; index++) {
  if (captions[index].endMs <= captions[index].startMs) {
    captions[index].endMs = captions[index].startMs + 250;
  }

  if (
    index < captions.length - 1 &&
    captions[index + 1].startMs - captions[index].endMs > 1200
  ) {
    captions[index].pageBreakAfter = true;
  }
}
await writeFile(outputPath, JSON.stringify(captions, null, 2));
console.log(`Wrote ${captions.length} caption tokens to ${outputPath}`);
