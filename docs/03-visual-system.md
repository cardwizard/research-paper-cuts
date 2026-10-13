# 03 — Visual system

All values live in code; this guide explains them. Change shared values in
`src/template/`, never by overriding them per episode.

## Canvas and safe zones

1080×1920, 30 fps. Instagram Reels and LinkedIn overlay their own UI:

- **Top ~80 px**: app header ("Reels", camera icon).
- **Bottom ~400 px** (y > 1520): username, caption text, music, buttons.
- **Right ~100 px**, lower half: like/comment/share icons.

So everything that matters lives in **y 80–1515**. The bottom band only holds
non-essential branding (logo + citation), which may be covered.

Layout (`LAYOUT` in `src/template/types.ts`, used by `EpisodeLayout` and `Panel`):

| Region | Position | Notes |
| --- | --- | --- |
| Presenter inset | top 80, 340×320, centered | creator's face, `facePosition` sets crop |
| Captions | top 405, height 145, width 1000 | directly under the face; max 2 lines |
| Scene panel | top 555, left 64, 952×960 | all scene content, `overflow: hidden` |
| Footer | top 1540 | small logo + citation (non-essential) |
| Title card box | bottom 400 | hook + logo + host, over full-screen video |

Inside the panel, use **local coordinates** (0–952 × 0–960). Keep a ~30 px
inner margin. `SceneHeading` occupies the top ~110 px (title at left 38, top
42; heading character at left 820, top 14), so scene action starts at y ≈ 130.

## Color (`colors` in `brand.ts`)

| Token | Hex | Use |
| --- | --- | --- |
| background | #f1efe9 | page |
| panel | #faf9f6 | scene panel, chips |
| text | #242521 | headings, labels |
| muted | #595b55 | secondary labels, footer |
| mint | #2e684d | safe / good / success / sanitize |
| orange | #8a5100 | waiting, cost, delay |
| red | #9b4141 | danger, attacker, malicious input, risky action |
| blue | #355f83 | neutral system / agent / trusted input |

Color carries meaning; do not use it decoratively. Red is reserved for
danger. Backgrounds of danger chips use `#f6e6e1`.

## Type

- UI / headings: Helvetica Neue (Arial fallback). Heading 46 px bold;
  labels 19–28 px bold; `SmallLabel` = 19 px uppercase tracked.
- Captions: Avenir Next 52 px bold, off-white `#fffdf7`, 2.5 px dark stroke,
  soft shadow, **no background box**, balanced wrapping, max 2 lines.
- Never go below ~17 px at 1080 width for anything the viewer must read.

## The cast (`src/template/characters.tsx`)

| Component | Props | Look |
| --- | --- | --- |
| `HostCharacter` | `size`, `pose: "neutral" \| "wave" \| "point" \| "think"`, `talking` | the creator: dark wavy hair, beard, mauve polo |
| `AliceCharacter` | `size`, `mood: "happy" \| "annoyed"` | long brown hair, blue top |
| `BobCharacter` | `size`, `mood: "sneaky" \| "caught"` | red hoodie |
| `AssistantCharacter` | `size`, `label` (default "AI agent"; `false` hides) | white robot with antenna + name tag |
| `BouncerCharacter` | `size`, `stop` (raised hand) | black SECURITY shirt, sunglasses, earpiece |
| `DetectiveCharacter` | `size` | green hat, magnifying glass |
| `Check` | `size`, `color` | check mark badge |

- Characters blink on their own (frame-based). `HostCharacter talking`
  toggles the mouth every 4 frames — use while the host "speaks".
- Mirror a character with a wrapper `transform: "scaleX(-1)"` (the agent's tag
  will mirror too; avoid mirroring the agent).
- Preview everything in the `cast-sheet` composition.

## Shared UI (`src/template/ui.tsx`)

- `Panel` — the scene container. Every scene returns one.
- `SceneHeading({ title, character })` — heading + the "who's in charge here"
  character in the top-right (default: detective). Avoid `subtitle`; it adds text.
- `SourceChip({ kind, label, width, height, bad, fontSize, style })` — an input
  the agent reads. `kind`: `request | tool | web | email | calendar | …`.
  Labels wrap to two lines if needed; size chips so they don't have to.
- `SourceIcon`, `SmallLabel`, `SeriesLogo({ size, color })`, `SeriesLogoMark`.

## Things to avoid

Neon, gradients, glows, emoji, drop-shadow-heavy cards, decorative grids,
glassmorphism, repeated rounded "AI dashboard" cards, thick single-side
colored borders, Inter/Poppins-style "AI startup" look, more than one accent
color per object.
