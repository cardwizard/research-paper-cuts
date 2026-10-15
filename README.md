# Research Paper Cuts

Mobile-first (1080×1920, 30 fps) cartoon explainers of research papers, built
with Remotion. Each episode combines your narration and face with a recurring
cast and word-level captions, so it still makes sense on mute.

**Agents:** start with [AGENTS.md](AGENTS.md) and the guides in [docs/](docs/).

## Reusable opening and closing

Ready-to-use silent MP4 clips and PNG stills are in
[`public/brand/bookends/`](public/brand/bookends/). Editable animation source is
`src/template/Bookends.tsx`. See [bookend instructions](docs/07-bookends.md)
for paper-title customization, narration overlap, and render commands.
The original background loop is in `public/brand/audio/soft-beat.wav`.
Set an episode's `backgroundAudio` to that relative path to use it, with
quiet mixing and boundary fades handled by the shared layout. Regenerate
it with `node scripts/create-background-beat.mjs`; no music service is needed.

## Layout

```
src/template/          shared across every episode
  EpisodeLayout.tsx    title card, presenter inset, scenes, captions, footer
  characters.tsx       Host (you), Alice, Bob, Agent, Bouncer, Detective
  ui.tsx               Panel, SceneHeading, SourceChip, SeriesLogo…
  brand.ts             series name, colors, ease()
  CastSheet.tsx        preview of the logo and cast (`cast-sheet` composition)
src/episodes/<slug>/   one folder per episode
  index.ts             episode config: hook, citation, scenes and durations
  scenes.tsx           the episode's animated scenes
  edit.json            which seconds of the recording to keep, caption fixes
  captions.json        prepared captions (generated)
public/episodes/<slug>/ recording, cleaned recording, paper screenshots
```

## Making a new episode

### Public setup

Use Node 22+ (Node 25 is used for local production) and npm. No Microsoft
account, VPN, internal registry, or proprietary agent is required:

```console
git clone https://github.com/cardwizard/research-paper-cuts.git
cd research-paper-cuts
npm ci
npm run lint
npm run dev
```

The project `.npmrc` and lockfile use `https://registry.npmjs.org/`.
Rendering downloads Remotion's browser from public services when necessary;
an internet connection is needed on first setup. Fonts use system fallbacks,
not private font/CDN URLs.

Install `ffmpeg` (including `ffprobe`) for recording preparation, and Poppler
(`pdftotext`, `pdftoppm`) for paper evidence. On macOS:
`brew install ffmpeg poppler`; on Debian/Ubuntu:
`sudo apt-get install ffmpeg poppler-utils`. On Windows, use WSL for the Bash
preparation scripts. Transcription requires a WebGPU-capable environment;
use Node 25+ for the included script's explicit resource-management syntax.
if unsupported, import a word-timed `Caption[]` JSON transcript instead.
Existing cleaned recordings and captions let you preview both episodes
without local transcription or the raw source recordings.

For external video tools, start with
[the Muse/agent contract](docs/08-muse-agent-contract.md).
Source accessibility is not a blanket redistribution license: this repo
currently declares `UNLICENSED`. Respect third-party paper rights, presenter
consent, and Remotion's applicable license; do not imply MIT/open-source rights.

```console
npm run new-episode -- my-paper         # scaffolds and registers the episode
# put the raw recording at public/episodes/my-paper/recording.mov
# edit src/episodes/my-paper/edit.json → "keep": [[start, end], …] in seconds
npm run prepare-video -- my-paper       # cut silences, normalize loudness
npm run transcribe -- my-paper          # Whisper → captions-medium.json
npm run prepare-captions -- my-paper    # map captions onto the cut, apply fixes
npm run dev                             # write scenes, preview in Studio
npm run render -- my-paper              # → out/my-paper.mp4
```

Make the scene durations in `index.ts` add up to the length of the clean
recording. New episodes use the approved 3-second opening and 4-second closing via
`bookendPaperTitle`. They replace visuals over continuous narration, not add
duration; captions remain visible throughout. The old 5-second title-card
path remains only for episodes that do not opt into bookends.

`captionFixes` corrects Whisper mistakes: each entry matches a run of words
(trimmed, lowercase) and replaces them, with `null` leaving a word unchanged.
For example, `{ "match": ["causal", "armor"], "replace": [null, "Armor"] }`.

## Episodes

- `causal-armor`: CausalArmor (Google DeepMind, arXiv:2602.07918)
- `camel`: Defeating Prompt Injections by Design (arXiv:2503.18813v2)

See [PRODUCT.md](PRODUCT.md) for the series brief and [DESIGN.md](DESIGN.md)
for the visual direction.
