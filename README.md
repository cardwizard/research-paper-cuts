# Research Paper Cuts

Mobile-first (1080×1920, 30 fps) cartoon explainers of research papers, built
with Remotion. Each episode combines your narration and face with a recurring
cast and word-level captions, so it still makes sense on mute.

**Agents:** start with [AGENTS.md](AGENTS.md) and the guides in [docs/](docs/).

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
recording. Captions start after the title card (5 s by default).

`captionFixes` corrects Whisper mistakes: each entry matches a run of words
(trimmed, lowercase) and replaces them, with `null` leaving a word unchanged.
For example, `{ "match": ["causal", "armor"], "replace": [null, "Armor"] }`.

## Episodes

- `causal-armor`: CausalArmor (Google DeepMind, arXiv:2602.07918)

See [PRODUCT.md](PRODUCT.md) for the series brief and [DESIGN.md](DESIGN.md)
for the visual direction.
