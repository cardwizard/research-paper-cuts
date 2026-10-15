import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const sampleRate = 48000;
const secondsPerBeat = 2 / 3;
const samples = new Float64Array(sampleRate * secondsPerBeat * 16);
let seed = 17;
const noise = () => {
  seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
  return seed / 2147483648 - 1;
};

for (let beat = 0; beat < 16; beat++) {
  const start = Math.round(beat * secondsPerBeat * sampleRate);
  const kick = beat % 2 === 0;
  const length = Math.round(sampleRate * (kick ? 0.3 : 0.09));
  for (let i = 0; i < length; i++) {
    const t = i / sampleRate;
    const attack = Math.min(1, t / 0.005);
    const sound = kick
      ? Math.sin(2 * Math.PI * (65 * t + 1.5 * (1 - Math.exp(-35 * t)))) *
        Math.exp(-18 * t) *
        0.3
      : (Math.sin(2 * Math.PI * 450 * t) * 0.07 + noise() * 0.025) *
        Math.exp(-75 * t);
    samples[start + i] += sound * attack;
  }
  const offbeat = start + Math.round((secondsPerBeat * sampleRate) / 2);
  for (let i = 0; i < 1920; i++) {
    samples[offbeat + i] +=
      noise() * 0.008 * Math.sin((Math.PI * i) / 1920) * Math.exp(-i / 500);
  }
}

const pcm = Buffer.alloc(samples.length * 2);
for (let i = 0; i < samples.length; i++) {
  pcm.writeInt16LE(
    Math.round(Math.max(-1, Math.min(1, samples[i])) * 32767),
    i * 2,
  );
}
const header = Buffer.alloc(44);
header.write("RIFF", 0);
header.writeUInt32LE(36 + pcm.length, 4);
header.write("WAVEfmt ", 8);
header.writeUInt32LE(16, 16);
header.writeUInt16LE(1, 20);
header.writeUInt16LE(1, 22);
header.writeUInt32LE(sampleRate, 24);
header.writeUInt32LE(sampleRate * 2, 28);
header.writeUInt16LE(2, 32);
header.writeUInt16LE(16, 34);
header.write("data", 36);
header.writeUInt32LE(pcm.length, 40);
const output = "public/brand/audio/soft-beat.wav";
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, Buffer.concat([header, pcm]));
console.log(`Wrote original 90 BPM, four-bar percussion loop to ${output}`);
