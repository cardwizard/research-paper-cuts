---
name: Research Paper Cuts
description: Research, made clear.
colors:
  background: "#f1efe9"
  paper: "#faf9f6"
  ink: "#242521"
  muted: "#595b55"
  system-blue: "#355f83"
  safe-green: "#2e684d"
  risk-red: "#9b4141"
  caution-ochre: "#8a5100"
  border: "#d2cfc6"
  danger-paper: "#f6e6e1"
  document-lines: "#a9a59b"
  caption-white: "#fffdf7"
  legacy-title-backdrop: "#171817"
typography:
  heading:
    fontFamily: "Helvetica Neue, Arial, sans-serif"
    fontSize: "46px"
    fontWeight: 700
    lineHeight: 1.08
  caption:
    fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif"
    fontSize: "52px"
    fontWeight: 700
    lineHeight: 1.16
---

## Overview

**An editorial cartoon with a narrator, not a narrated slide deck.**
The visual signature is warm paper, dark ink, a restrained scissor motif,
and a recognizable recurring cast. A viewer must see *what happens* and
*why*, even on mute. Cleverness belongs in the explanatory action, not
decorative effects. Preserve this identity in Remotion, Muse, or any editor.

Normative implementation: `src/template/brand.ts`, `characters.tsx`,
`ui.tsx`, `types.ts`, and `Bookends.tsx`. Use those assets, not approximations
generated from a text description. `docs/08-muse-agent-contract.md` is the
production handoff and acceptance checklist.

## Colors

Use the exact tokens above. Blue means system/trusted request, green means
allowed/public/safe, red means attacker/restricted/blocked, ochre means
caution/cost/delay. Do not color every object with a different accent.
Character clothing remains its canonical color regardless of scene state.
Danger chips use `#f6e6e1`; borders use `#d2cfc6`.
Color must reinforce a label, icon, or action rather than carry meaning alone.

## Typography

Helvetica Neue with Arial fallback for UI; Avenir Next with Helvetica/Arial
fallback for captions. Do not require a private font or font-download service.
Scene heading 46 px bold, at most five words. Object labels generally
24-30 px, at most three words; source notes may be smaller but never below
17 px at full resolution. Captions are 52 px bold, at most two lines,
off-white `#fffdf7`, 2.5 px dark outline, restrained shadow, no backing panel.
Bookend captions use 36 px and shorter pages in their reserved free band.
Do not put paragraphs, narration duplicates, or bullet walls inside scenes.

## Layout

1080x1920, 30 fps. Essential material stays between y=80 and y=1515;
social UI can cover the bottom ~400 px and lower right edge.
Presenter: x=370, y=80, 340x320; preserve face/hair and stable eye line.
Caption area: x=40, y=405, 1000x145.
Scene panel: x=64, y=555, 952x960. Use local panel coordinates;
keep 30 px internal margins and reserve the first 130 px for the heading.
Nonessential footer starts at y=1540. Do not fill the lower safe-zone reserve
just because it looks empty on a desktop.

Approved opening: 3 seconds, shared logo, animated cut page, host,
"Research, made clear.", paper-title slot. Approved closing: 4 seconds,
rejoining page, waving host, "Follow for more.", large blue website.
Both cover existing narration; no silence, extra duration, or repeated voice.
See `docs/07-bookends.md`. Only the opening's paper title changes per episode.

## Elevation & Depth

Flat editorial illustration. Use outlines and object placement, not floating
dashboard cards or glossy depth. No gradients, neon, glows, glassmorphism,
ambient animated backgrounds, fake 3D robots, or dramatic drop shadows.
Caption shadow is a readability treatment, not decorative elevation.

## Shapes

Simple SVG-like geometry, consistent dark outlines, flat fills, expressive
faces, familiar document/envelope/tool silhouettes. Do not turn characters
into stick figures, emoji, stock photos, or unrelated AI mascots.
Avoid pill-shaped everything and rounded startup-dashboard styling.
The red scissors/cut line is series branding; in technical scenes red still
means risk, not decorative emphasis.

## Components

**Cast:** Host (mauve polo, dark wavy hair/beard) guides; Alice (blue top)
is the user; Bob (red hoodie) is the attacker; the white antenna robot is
the AI agent and always has a readable role tag. Bouncer (black SECURITY
shirt, sunglasses) and Detective (green hat, lens) are visually distinct.
Their defense roles are episode-specific: do not present the detective as
an actual third LLM. CaMeL uses the same robot drawing tagged AI PLANNER
and AI READER, with isolated contexts and separate responsibilities.
Use `public/brand/cast-sheet.png` for visual matching.

**Objects:** reuse `SourceChip`, `SourceIcon`, document glyphs, labels,
and explicit public/private icons. Values should travel from source to
consumer; a policy check must visibly affect the attempted action.
Never show sanitization as deletion, returned data as a new planner order,
or a reader with no tools actually sending a document.

**Motion:** all movement expresses cause -> consequence. One primary
action at a time. Enter/travel motions typically take 18-45 frames;
hold a resolved state at least 45 frames when narration permits.
Start each beat within three frames of its introducing word; stop
before the next beat. Characters react when outcomes change.
Animate the transformation in "something it reads becomes something
it follows": content enters, becomes a directive, then changes the action.
A static arrow is not enough.

Before implementing scenes, audit the actual narration sentence by sentence
for animation points. Each important causal verb or transition MUST have
a timestamped source -> action -> consequence entry and an implemented
animation. Inspect before/during/after states and reject label-only substitutes.
Keep the mapping with the episode's storyboard or evidence ledger.

**Frame completeness:** captions occupy an exclusive band from the first
narrated frame through closing. Use the bookend-specific layout, not the
normal story caption position on full-screen artwork. Fit or repaginate
captions without deleting spoken words; validate actual bounding boxes
against logo, title, tagline, paper, cast, and website across motion.
Required arrows include visible shafts and heads, correct direction, and
anchors that follow their source/destination. An arrow may end only when
its explanatory beat ends; no unexplained missing connectors or detached
arrowheads. Essential scene elements must be ready before outgoing content
disappears. Intentional entrances are allowed; half-built mechanisms and
accidental empty transitions during explanation are not.
Evaluate motion from frame numbers, not clocks, random state, or playback
history. Inspect the encoded output at the opening, every transition/beat,
and closing; a correct Studio screenshot is not proof of a complete export.

**Background sound:** optional, original or appropriately licensed,
instrumental and restrained. No vocals, dramatic drops, or loud transitions.
Maintain narration at least 18 dB above the bed's mean level, verify combined
peaks remain below clipping, and fade the bed at the start/end. The shared
`public/brand/audio/soft-beat.wav` is an original four-bar, 90 BPM percussion
loop; regenerate with `node scripts/create-background-beat.mjs`. Episodes opt
in using `backgroundAudio`; approved bookend assets remain silent.

**Evidence:** one readable real-paper screenshot at the introduction,
not a deck of figures. Elsewhere use cartoon action. Charts are acceptable
only for sourced results: show benchmark/model, units, source table,
and reported uncertainty. No fabricated numbers or universal safety claims.

## Do's and Don'ts

- Do show the same object through source, processing, and consequence.
- Do keep readable labels and narration captions synchronized.
- Do preserve the creator's voice; cut flubs, never fabricate a pickup.
- Do document claim provenance, role mapping, and policy assumptions.
- Do provide editable source/project and portable media, not just a video URL.
- Do reject clipped labels, overlapping cast, hidden role tags, or mid-word cuts.
- Don't replace animated mechanisms with static diagrams or text cards.
- Don't reinvent the opening, closing, cast, fonts, or palette for each paper.
- Don't imply every generated plan is harmless or every answer is true.
- Don't call a draft "finished" without timing and full-export review.
