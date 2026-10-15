# Approved series opening and closing

Use these bookends for Research Paper Cuts videos. Preserve the warm paper
palette, Helvetica/Avenir typography, recurring host, and scissor motif.
Do not redesign them per episode.

## Pick up these assets

| Asset | Purpose |
| --- | --- |
| `public/brand/bookends/opening.mp4` | 3-second animated opening, blank paper-title area |
| `public/brand/bookends/closing.mp4` | 4-second animated closing |
| `public/brand/bookends/opening.png` | Full-size opening still, blank paper-title area |
| `public/brand/bookends/closing.png` | Full-size closing still |
| `src/template/Bookends.tsx` | Editable React/TypeScript Remotion source |
| `src/Root.tsx` | `series-opening` and `series-closing` composition registrations |

Clips are H.264 MP4, 1080x1920, 30 fps, opaque backgrounds, no audio.
Stills are 1080x1920 PNG. These small brand assets are intentionally committed;
raw recordings and episode renders are not.

Opening copy: **Research, made clear.** Closing copy: **Follow for more.**
The closing includes **cardwizard.github.io** in large blue type.

## External editors, including Muse

1. Put `opening.mp4` over narration seconds 0-3. Start speech immediately.
2. Add the paper's concise display title below "THIS PAPER": x=96, y=1358,
   maximum width 790, Helvetica Neue/Arial bold, 48 px, line height 1.12,
   color `#242521`. Use at most two lines, ending above y=1515.
3. Put `closing.mp4` over the last 4 seconds of narration, including the
   spoken follow prompt. Do not repeat, mute, or restart the audio.
4. Keep narration captions above the screens. The free band at y=320-405
   can hold short captions; verify they do not collide with branding.

These are overlays replacing the underlying visuals, not additional timeline
segments. A 148-second narration stays 148 seconds. Never export "Paper title
goes here" or leave the opening title blank in a finished episode.

## Coding agents and Remotion

Import `OpeningScreen` and `ClosingScreen` from `src/template/Bookends`.
Both accept `paperTitle`, `audioSrc`, and `audioStartSeconds`.
Keep `audioSrc: ""` when an existing master narration track is playing.
Use the opening at frame zero and the closing at
`durationInFrames - 4 * fps`, without changing total episode duration.
Do not stack a legacy title card over the opening. For manual integration
outside the native opt-in below, disable that title card (`titleCardMs: 0`).
Existing episodes are not automatically migrated by this package.

In this repository's `EpisodeLayout`, opt in with
`bookendPaperTitle: "CausalArmor"` in the episode config. This replaces the old
title card and final visuals without moving narration or changing duration.
The old title-card settings are ignored for opted-in episodes. To avoid
collisions with the full-screen artwork, the layout uses short caption pages
at 36 px in the free band beneath the logo during the bookends, returning
to the usual presenter captions during the story.
CausalArmor and CaMeL use this opt-in.

For standalone preview with speech, `audioSrc` is relative to `public/`;
`audioStartSeconds` selects the source offset. Do not add a second copy of
the master audio track.

Run from the repository root:

```console
npm ci
npm run dev
# Customize the paperTitle prop in Studio, or render directly:
npx remotion render src/index.ts series-opening out/my-opening.mp4 --codec=h264 --pixel-format=yuv420p --props='{"paperTitle":"Defeating Prompt Injections by Design","audioSrc":"","audioStartSeconds":0}'
npx remotion render src/index.ts series-closing out/my-closing.mp4 --codec=h264 --pixel-format=yuv420p
```

To regenerate the committed neutral assets after an approved design change:

```console
npx remotion render src/index.ts series-opening public/brand/bookends/opening.mp4 --codec=h264 --pixel-format=yuv420p
npx remotion render src/index.ts series-closing public/brand/bookends/closing.mp4 --codec=h264 --pixel-format=yuv420p
npx remotion still src/index.ts series-opening public/brand/bookends/opening.png --frame=65
npx remotion still src/index.ts series-closing public/brand/bookends/closing.png --frame=75
```

Validate with `npm run lint`, inspect the longest display title on a phone-size
preview, and check exported dimensions, frame rate, durations, and absence of
audio with `ffprobe`. Keep all essential content above y=1515. Never silently
clip an overlong title: use a shorter display title and retain the full citation
elsewhere in the episode.
