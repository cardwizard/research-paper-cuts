# Muse and external-agent production contract

This is a reusable production handoff. Keep one-off export reviews,
timestamped defect reports, and episode-specific revision prompts in chat
or local review files, not in the repository's shared instructions.
The creator approves narrative/content changes; agents may implement motion
and correct transcription spelling, but must not silently rewrite speech.
Treat MUST as acceptance requirements, not optional inspiration.

## Read and use, in order

1. `AGENTS.md`, `DESIGN.md`, and this document.
2. `docs/03-visual-system.md` for exact geometry and tokens.
3. `docs/07-bookends.md` for ready-made assets and audio continuity.
4. The episode's `content/<package>/sources.md`, script, actual recording,
   `src/episodes/<slug>/edit.json`, and word-timed `captions.json`.
5. `src/template/characters.tsx` and `public/brand/cast-sheet.png`.

Do not assume the written script matches the actual take. Caption timestamps
use the cleaned recording timeline, not raw time. Raw files are private/local;
cleaned reference recordings are checked in for these approved episodes.
Canonical paper links are in authored evidence ledgers; local PDF caches
are not required for setup and are not automatically licensed for redistribution.

## Ready artifacts

| Artifact | Required use |
| --- | --- |
| `public/brand/bookends/opening.mp4` | First 3 seconds; add the paper title in its slot |
| `public/brand/bookends/closing.mp4` | Last 4 seconds over the spoken follow prompt |
| Same-folder PNG stills | Still-image fallback/reference, not a replacement for motion |
| `public/brand/cast-sheet.png` | Match canonical cast silhouettes, colors, faces, roles |
| `src/template/` | Reuse source assets for exact geometry and animation |
| `public/episodes/<slug>/recording-clean.mp4` | Narration + presenter reference; do not speed up by default |
| `src/episodes/<slug>/captions.json` | Word timing and spoken content |
| `public/brand/audio/soft-beat.wav` | Optional original 90 BPM percussion bed, mixed quietly beneath voice |

MP4 assets: H.264, 1080x1920, 30 fps; bookends are silent with opaque
backgrounds. PNGs are full resolution. These are not transparent overlays:
they replace picture, while the master narration stays uninterrupted.
An empty paper-title slot must be filled before final export.

## What the video MUST look and feel like

Warm paper and ink; flat cartoon characters performing the explanation.
No photorealistic AI assets, new mascot, neon, purple/blue glow, generic
dashboard layout, slide deck, kinetic-text-only video, or stock-footage montage.
Keep the presenter inset, safe zones, caption styling, and brand asset scale.
Use the exact semantic colors in DESIGN.md. Text carries identity and evidence;
motion carries explanation. Do not repeat narration inside explanatory cards.

Map the concept to a concrete action before rendering:

| Narrated idea | Required action | Unacceptable substitute |
| --- | --- | --- |
| A vendor plants instructions | Vendor inserts a red directive into an incoming email | Floating word "injection" |
| Reading becomes following | Email content moves into the agent; a directive emerges and changes its selected file | Static arrow into a robot |
| Planner isolated from email | Request reaches planner; email remains on reader side of a visible boundary | Two unlabeled identical robots |
| Reader returns data | Filename/address move into harness variables; no free-form arrow back to planner | Reader issuing orders or sending a file |
| Permission check blocks leak | Restricted file approaches gate, stops; vendor reacts; public brochure can pass | Shield icon without an attempted transfer |
| CausalArmor sanitizes a source | Suspect content changes while legitimate content survives | Whole document deleted |

Use narration word times, not evenly spaced scene changes. Important actions
must begin within +/-3 frames of their introducing word. Travel 18-45 frames,
one primary action at a time; hold the result long enough to read.
Do not animate unrelated flourishes while the viewer needs to understand a step.
No text or document may cover the AI role tag, face, captions, or other labels.

### Captions, arrows, and complete frames: hard requirements

- Reserve an exclusive caption band from the first narrated frame, including
  opening and closing. Do not reuse the normal story caption position over
  bookend artwork. In the current source, bookends use the small band near
  y=342 instead of the story's y=405 placement; reuse the native layout.
  Check real text bounds through the artwork's motion. Captions must never
  overwrite the logo, paper, tagline, title, CTA, or website. Repaginate long
  phrases to fit; do not hide words or delay narration/captions to avoid collisions.
- Required connectors must show both shaft and arrowhead, correct direction,
  attached endpoints, and continuous visibility for the intended beat.
  Connectors move with their objects. Missing arrows, detached heads, arrows
  pointing at empty space, or unexplained disappearances fail acceptance.
  An isolated arrow is still not a substitute for the mechanism's animation.
- Complete every explanatory frame. Keep the outgoing subject visible until
  the incoming subject is ready. An intentional entrance is not a defect;
  a blank panel under an explanation or a partially assembled mechanism is.
  Preload media and fonts; calculate animation from frame/time values,
  never wall-clock timers, unseeded randomness, or playback-dependent state.
- Inspect the final encoded MP4, not only preview screenshots: opening
  frame-by-frame, both sides of every scene boundary, before/during/after
  every important action, and closing. Verify complete media decoding,
  frame cadence/count, timeline coverage, and visual completeness separately.
  Fix and re-export any missing arrow, unresolved asset, collision, or
  incomplete frame before delivery; do not deliver it as a finished video.

MUST audit the actual narration sentence by sentence for animation points.
Record each important sentence's trigger word/time, source object, action,
and consequence in the beat mapping. Implement each entry and verify its
before/during/after states; static arrows, keyword pop-ins, and captions
alone are not accepted as animations of mechanisms.

If adding a background beat, use the original `public/brand/audio/soft-beat.wav`
or appropriately licensed instrumental audio. Keep its mean level at least
18 dB below narration; no vocals or dramatic drops. Fade the bed at the
boundaries, preserve the master voice, and check combined peaks for clipping.

## Scientific truth and editing

Show the paper once at its spoken introduction. Charts must preserve units,
benchmark, model, source table, uncertainty, and scope. CaMeL's 44 +/-31.3 to
0 +/-0.0 is a particular Claude 3.5 Sonnet AgentDojo comparison, not "all
prompt injection solved." Show trade-offs with the recorded limitations.
The reader has no tool authority; the harness/interpreter enforces policy.
Two isolated roles may use one backbone model. Distinguish planner errors,
poisoned data, unsafe tool use, and misleading summaries.

Cut restarts and wrong sentences at natural pauses. Do not alter captions
to conceal wrong speech; request a pickup or remove the sentence coherently.
Do not synthesize the creator's voice. Normalize loudness without clipping
or aggressive noise processing; preserve natural conversational rhythm.

## Deliverables and acceptance

MUST provide:

- Editable source or native project, referencing portable relative asset paths.
- Final H.264 MP4, 1080x1920 at 30 fps, narration retained, audio peaks safe.
- Full-duration caption file (word-timed JSON; SRT optional for external editors).
- Brief scene/beat mapping with narration timestamps and source claims.
- Opening/closing placement, paper-title value, and documented edits.
- Review stills at scene start/middle/end, plus both bookends at phone scale.

Reject the delivery if any of these fail: cast/palette drift; text walls;
static mechanisms; captions clipped or mistimed; role swaps; early result
reveals; overlapping labels; more than one real paper image; invented evidence;
reader shown sending a file; narration restart under closing; extra silent intro;
essential text below y=1515; placeholder title; missing editable artifacts.
Also reject opening-caption collisions, missing/detached required arrows,
and incomplete explanatory frames even when the video file decodes normally.

For Remotion, run `npm run lint`, render review stills, and verify output with
`ffprobe`. Watch the complete export with sound, then on mute. State any
unperformed listening/review honestly; never substitute stills for audio review.
When comparing a supplied Muse video, report timestamp, observed difference,
contract violated, and exact fix. Do not criticize features you have not seen.

## Pasteable Muse kickoff

> Build this episode as a Research Paper Cuts cartoon story, not a slide deck.
> Follow DESIGN.md and docs/08-muse-agent-contract.md as acceptance criteria.
> Use the supplied cast, exact palette/layout, opening and closing assets.
> Keep the master narration continuous and add the paper title to the opening.
> Animate source -> processing -> consequence on the recorded word timestamps.
> Show the real paper only at its introduction. Preserve benchmark scope and
> limitations. Return an editable project, final portrait MP4, captions, and
> scene review stills. If something cannot be matched, flag it rather than
> substituting a generic design or inventing speech.
