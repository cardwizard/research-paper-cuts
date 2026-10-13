# 01 — Episode workflow (recording → published video)

Follow these steps in order. Each step lists its input, output and how to
verify it. `<slug>` is a short kebab-case id for the paper, e.g. `causal-armor`.

## 0. Prerequisites

- Node ≥ 20 (tested on Node 25), `ffmpeg`/`ffprobe`, `pdftotext` (poppler).
- `npm install` once. Remotion Studio: `npm run dev` → http://localhost:3000.
- Transcription uses `@remotion/whisper-webgpu`; it needs a WebGPU-capable
  machine (Apple Silicon macOS works). If it is unavailable, ask the creator
  for a transcript or use another Whisper build that outputs word timestamps
  in Remotion `Caption` format (`text`, `startMs`, `endMs`, `timestampMs`,
  `confidence`).

## 1. Scaffold

```console
npm run new-episode -- <slug>
```

Creates `src/episodes/<slug>/{index.ts,scenes.tsx,edit.json,captions.json}`
and `public/episodes/<slug>/`, and registers the episode in
`src/episodes/index.ts`. The composition id equals the slug.

Put inputs in `public/episodes/<slug>/`:

- `recording.mov` (or `.mp4`) — the raw on-camera narration. Git-ignored.
- `<paper>.pdf` — the paper.
- `paper-page-1.png` — a screenshot of the paper's first page (title +
  authors) for the single "this is the paper" moment. Make it with:
  `pdftoppm -png -r 110 -f 1 -l 1 paper.pdf paper-page` (then rename).

## 2. Read the paper (do not skip)

```console
pdftotext -layout public/episodes/<slug>/<paper>.pdf /tmp/paper.txt
```

Write yourself a short fact sheet (in your scratch space, not the repo):

- Problem in one sentence. Who is hurt and how.
- The method's mechanism, step by step, using the paper's own terms.
- What exactly happens to data/inputs (removed? sanitized? masked? ranked?).
- Baselines the paper compares against, and what they cost.
- Reported results **with table/figure numbers**. Do not round into new claims.
- Limitations the authors state.

Every visual you design must map to a line in this fact sheet.

## 3. Cut the recording (`edit.json`)

Find silences, false starts and retakes:

```console
ffmpeg -hide_banner -i public/episodes/<slug>/recording.mov \
  -af silencedetect=noise=-35dB:d=0.6 -f null - 2>&1 | grep silence_
```

Listen around each long silence (and to the transcript, step 4, if you need
to locate retakes). Write the segments to **keep**, in source seconds:

```json
{
  "keep": [[1.1, 100.6], [102.14, 126.27]],
  "captionFixes": []
}
```

- Trim leading/trailing dead air. Remove pauses > ~0.8 s and flubbed takes.
- Cut inside silences, never mid-word; leave ~0.1 s of air at each edge.
- Keep the creator's natural rhythm — do not jump-cut every breath.

```console
npm run prepare-video -- <slug>     # → public/episodes/<slug>/recording-clean.mp4
ffprobe -v error -show_entries format=duration -of csv=p=0 public/episodes/<slug>/recording-clean.mp4
```

The clean duration × 30 = the total frames your scenes must add up to.

## 4. Captions

```console
npm run transcribe -- <slug>         # raw recording → captions-medium.json (source timings)
npm run prepare-captions -- <slug>   # → captions.json (clean-video timings)
```

Read `captions.json` text in order and fix misheard words with
`captionFixes` in `edit.json`. Each fix matches consecutive tokens (trimmed,
lower-cased) and replaces them; `null` keeps a token unchanged. Keep the
leading space that Whisper tokens carry:

```json
{ "match": ["causal", "armor"], "replace": [null, "Armor"] },
{ "match": ["2", "marina"], "replace": [" Doom", "Arena"] }
```

Re-run `prepare-captions` after editing fixes. Proper nouns, paper names and
benchmark names must be spelled exactly as in the paper.

Captions only show after the title card (`titleCardMs`, default 5000 ms).

## 5. Build a beat sheet from the transcript

Print the transcript with frame numbers to plan scenes:

```console
node -e 'for (const c of require("./src/episodes/<slug>/captions.json")) console.log(String(Math.round(c.startMs/1000*30)).padStart(5), c.text)'
```

Group the narration into 5–8 **scenes** (one idea each, ~10–25 s) and, inside
each scene, list **beats**: the word that triggers each visual change and its
frame. Scene boundaries should land on sentence boundaries. Example:

| Scene | Frames | Beats (local frame → event) |
| --- | --- | --- |
| Always-on defense | 0–540 | 170 email arrives · 232 tool output · 345 malicious website caught · 420 Alice waits |

Local frame = global frame − scene start. See [02-storytelling](02-storytelling.md)
for how to choose what each scene shows.

## 6. Configure the episode (`index.ts`)

```ts
export const myPaper: Episode = {
  slug: "my-paper",
  recording: "episodes/my-paper/recording-clean.mp4",
  hook: "What if AI defense were a detective, not a bouncer?", // ≤ 10 words, a question
  citation: "PaperName · arXiv:XXXX.XXXXX · Lab",
  captions: captions as Caption[],
  facePosition: "50% 24%",      // CSS object-position for the face crop (optional)
  // hookCharacter: <DetectiveCharacter size={140} />, // default: waving host
  scenes: [
    { name: "The problem", durationInFrames: 540, component: ProblemScene },
    // ...
  ],
};
```

The sum of `durationInFrames` must equal the clean recording length in frames
(round the last scene to absorb the remainder). The composition length is
derived from it.

## 7. Write scenes (`scenes.tsx`)

Each scene is a `React.FC` that returns `<Panel>…</Panel>` with a
`<SceneHeading title=… character=… />` and animated characters. Use
`useCurrentFrame()` (local to the scene) and `ease(frame, start, end)`.
Patterns: [04-animation-cookbook](04-animation-cookbook.md). Layout and cast:
[03-visual-system](03-visual-system.md).

Iterate in Studio (`npm run dev`) or with stills:

```console
rm -rf /tmp/rpc-bundle && npx remotion bundle --out-dir /tmp/rpc-bundle
mkdir -p /tmp/st
for f in 120 300 480; do npx remotion still /tmp/rpc-bundle <slug> /tmp/st/f$f.png --frame=$f --scale=0.4 & done; wait
ffmpeg -y -i /tmp/st/f120.png -i /tmp/st/f300.png -i /tmp/st/f480.png -filter_complex hstack=3 /tmp/sheet.png
```

`remotion still` must be run from the project root.

## 8. QA, render, deliver

Run everything in [05-qa-checklist](05-qa-checklist.md), then:

```console
npm run render -- <slug>   # → out/<slug>.mp4
ffprobe -v error -show_entries stream=width,height,r_frame_rate:format=duration -of csv=p=0 out/<slug>.mp4
```

Expect `1080,1920,30/1` and the clean recording's duration. Upload the same
file to Instagram Reels and LinkedIn.
