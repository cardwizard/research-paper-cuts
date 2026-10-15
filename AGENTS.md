# AGENTS.md — Research Paper Cuts

You are working on **Research Paper Cuts**: a series of short (60–150 s),
mobile-first (1080×1920, 30 fps) explainer videos about research papers. The
creator records narration on camera; you turn that recording into a
**cartoon story** with a recurring cast, word-level captions, and a small
inset of the creator's face. Every video must be understandable **on mute,
from the captions and the animation alone**.

This file is the entry point. Read it fully, then read the guides in `docs/`
before changing anything:

| Guide | Read it when |
| --- | --- |
| [docs/01-episode-workflow.md](docs/01-episode-workflow.md) | Making a new episode end to end (recording → render) |
| [docs/02-storytelling.md](docs/02-storytelling.md) | Planning scenes, deciding what to animate, writing on-screen text |
| [docs/03-visual-system.md](docs/03-visual-system.md) | Layout geometry, colors, type, the cast and shared components |
| [docs/04-animation-cookbook.md](docs/04-animation-cookbook.md) | Writing scene code: timing, motion patterns, copy-paste snippets |
| [docs/05-qa-checklist.md](docs/05-qa-checklist.md) | Before you say you are done — always |
| [docs/06-creator-feedback.md](docs/06-creator-feedback.md) | Past feedback from the creator. Do not repeat these mistakes |
| [PRODUCT.md](PRODUCT.md), [DESIGN.md](DESIGN.md) | Series brief and visual direction |

## Non-negotiable rules

1. **Story, not slides.** Explain every idea with characters doing things
   (moving, reacting, getting blocked, being cleaned up). Never put a
   paragraph, bullet list, or static diagram on screen. Show the actual paper
   **once** (when it is introduced), never as a substitute for animation.
2. **Clear on mute.** Someone watching with sound off must follow the story
   from captions + animation. Every character and object that matters must be
   recognizable or labeled (e.g. the robot always wears its "AI AGENT" tag).
3. **Minimal text.** A scene heading of ≤ 5 words, and short labels (1–3
   words) on objects. Captions carry the narration; do not duplicate it.
4. **Faithful to the paper.** Read the paper (PDF → `pdftotext`). Every claim
   and every visual metaphor must match what the paper actually does (e.g.
   CausalArmor *sanitizes* a tool output, it does not delete it). **Never
   invent numbers.** If you show results, use the paper's numbers with the
   source table, or keep bars qualitative.
5. **Same cast everywhere.** Reuse the characters in `src/template/characters.tsx`.
   A character keeps the same look and role for the whole episode and the
   series. Add new characters to the template, not to an episode.
6. **Sync to narration.** Each visual beat starts on the word that introduces
   it. Use the word timestamps in `captions.json` to place beats (see
   workflow guide). Animations that lag or lead the voice feel wrong.
7. **Nothing overflows.** No text spills outside its box, nothing is clipped
   by the panel edge, nothing overlaps the presenter inset, captions, or
   footer. Check with stills, not assumptions.
8. **Restrained, human design.** Use the palette and type in
   `src/template/brand.ts`. No neon, gradients, glows, emoji, decorative
   grids, glassmorphism, or thick one-sided colored borders. It should not
   look AI-generated.
9. **Template first.** Anything reusable goes into `src/template/`. Episode
   folders only hold episode-specific scenes, config, captions and edit data.
   Use the approved opening and closing from
   [docs/07-bookends.md](docs/07-bookends.md); do not invent new branding.
   They overlay existing narration rather than extending its timeline.
10. **Verify before claiming done.** `npm run lint` passes, stills reviewed,
    final render checked with `ffprobe` (1080×1920, 30 fps, expected length).

## Repository map

```
AGENTS.md                 ← you are here
docs/                     ← detailed guides for agents
src/
  index.ts                Remotion entry (registerRoot)
  Root.tsx                registers one composition per episode + cast-sheet
  template/               SHARED by every episode — change with care
    EpisodeLayout.tsx     title card, presenter inset, scene Series, captions, footer
    characters.tsx        Host (creator), Alice, Bob, AI agent, Bouncer, Detective, Check
    ui.tsx                Panel, SceneHeading, SourceChip, SourceIcon, SmallLabel, SeriesLogo
    brand.ts              SERIES_NAME, colors, ease()
    types.ts              Episode / EpisodeScene types, FPS/WIDTH/HEIGHT
    BasicCaptions.tsx     TikTok-style word captions
    CastSheet.tsx         `cast-sheet` composition: preview of logo + cast
  episodes/
    index.ts              episode registry (new-episode script edits it)
    <slug>/
      index.ts            Episode config: hook, citation, scene list + durations
      scenes.tsx          the episode's scenes
      edit.json           keep-segments for the cut + Whisper caption fixes
      captions-medium.json raw Whisper output (source-recording timings)
      captions.json       prepared captions (edited-video timings)
public/episodes/<slug>/   recording.mov (raw, git-ignored), recording-clean.mp4,
                          paper PDF, paper screenshots
scripts/
  new-episode.mjs         scaffold + register an episode (uses scripts/starter/)
  prepare-video.sh        cut + loudness-normalize the recording from edit.json
  transcribe.mjs          Whisper (WebGPU) → captions-medium.json
  prepare-captions.mjs    map captions onto the cut, apply caption fixes
  render.sh               render out/<slug>.mp4
out/                      renders (git-ignored)
```

## Commands

```console
npm install                              # once
npm run dev                              # Remotion Studio at http://localhost:3000
npm run new-episode -- <slug>            # scaffold src/episodes/<slug> + public/episodes/<slug>
npm run prepare-video -- <slug>          # recording.* → recording-clean.mp4
npm run transcribe -- <slug>             # → captions-medium.json (needs WebGPU; macOS works)
npm run prepare-captions -- <slug>       # → captions.json
npm run lint                             # eslint + tsc (noUnusedLocals: unused imports fail)
npm run render -- <slug>                 # → out/<slug>.mp4
```

Fast visual checks without a full render (run from the project root):

```console
rm -rf /tmp/rpc-bundle && npx remotion bundle --out-dir /tmp/rpc-bundle
npx remotion still /tmp/rpc-bundle <slug> /tmp/st/f900.png --frame=900 --scale=0.4
```

## Working style

- Work autonomously; the creator is often unavailable. Make reasonable
  decisions, note assumptions in your final message, and keep that message
  short (≤ 100 words).
- Prefer small, verified iterations: change → lint → stills → look → fix.
- Never commit the raw recording (`recording.mov`, > 100 MB) or renders.
