# 05 — QA checklist (run before saying "done")

## Automated

- [ ] `npm run lint` passes (eslint + `tsc`; unused imports fail).
- [ ] Scene durations sum to the clean recording length × 30.
- [ ] `npx prettier --write src` was run.

## Visual (stills)

Render a contact sheet with at least 3 frames per scene (start + 20 frames,
middle, end − 10 frames), plus both bookends and the stages of each important
cause-and-effect animation:

```console
rm -rf /tmp/rpc-bundle && npx remotion bundle --out-dir /tmp/rpc-bundle && mkdir -p /tmp/st
for f in 60 300 600 900; do npx remotion still /tmp/rpc-bundle <slug> /tmp/st/f$f.png --frame=$f --scale=0.4 & done; wait
ffmpeg -y -i /tmp/st/f60.png -i /tmp/st/f300.png -i /tmp/st/f600.png -i /tmp/st/f900.png -filter_complex hstack=4 /tmp/sheet.png
```

Safe-zone overlay (red = covered by app UI; at scale 0.4 → top 32, bottom 160):

```console
ffmpeg -y -i /tmp/st/f300.png -vf "drawbox=y=0:w=iw:h=32:color=red@0.25:t=fill,drawbox=y=ih-160:w=iw:h=160:color=red@0.25:t=fill" /tmp/safe.png
```

Look at every image and check:

- [ ] No text overflows its box; no clipped characters; nothing touches the panel edge.
- [ ] Nothing overlaps the presenter inset, captions, or another element.
- [ ] Nothing important in the red safe-zone bands.
- [ ] Every character is recognizable; the agent shows its "AI AGENT" tag.
- [ ] Panel text ≤ heading + short labels. No paragraphs.
- [ ] Colors follow meaning (red = danger only).
- [ ] Captions are spelled correctly (names, paper title, benchmarks).
- [ ] Captions run throughout approved bookends in their reserved band.

## Story

- [ ] Actual narration reviewed sentence by sentence; every important action
      has a timestamped animation entry in the episode's beat mapping.
- [ ] Every mapped entry is implemented: inspect its before, transition, and
      consequence. Reject static diagrams or text-only substitutes.
- [ ] Watch on mute: is the story clear from captions + animation alone?
- [ ] Each beat starts on its trigger word (spot-check 5 beats in Studio).
- [ ] Every visual matches the paper's mechanism; no invented numbers.
- [ ] The paper screenshot appears exactly once.
- [ ] Background audio, if used, is instrumental, quiet below narration,
      loop-safe, and faded at the boundaries; voice remains intelligible.

## Final render

- Export only when the creator requests it; preview-only work stops after
  the automated, visual, and story checks above.
- [ ] `npm run render -- <slug>`; `ffprobe` shows `1080,1920,30/1` and expected duration.
- [ ] Spot-check 3 frames from the final MP4 with
      `ffmpeg -ss <sec> -i out/<slug>.mp4 -frames:v 1 /tmp/x.png`.
