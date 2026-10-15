# Muse and external-agent production contract

This is a reusable handoff, with concrete feedback from the supplied CaMeL
`camel-final.MP4` below.
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

## Supplied CaMeL video: observed differences

The supplied export is 148.117 seconds, H.264/AAC, 1080x1920, 30 fps.
It preserves the warm palette, recognizable cast, presenter inset, and
series identity. Those are strengths to retain. The main gap is explanatory
action and phone-scale legibility, not a need for a different theme.
The observations below come from decoded frames and sampled motion sequences;
they are not a claim of a complete listening review.

| Supplied-video time | Observed difference | Required correction |
| --- | --- | --- |
| 00:00.5-00:02.5 | Opening narration captions cross the animated paper's top edge instead of occupying a separate band | Use the bookend caption band from the first spoken word and check moving-artwork bounds; keep narration/captions continuous |
| 00:29-00:33 | Email, READ label, robot, and attacker line mostly hold; an "Attach forecast" chip fades in, without showing a selected file changing | Track one object: email content enters, becomes a directive, brochure selection changes to restricted forecast. Do not call the pre-CaMeL agent the AI READER: it can decide/act, unlike the quarantined reader |
| About 00:33 | The outgoing explanatory scene disappears into a panel containing only the small host before the paper/title appears | Keep the previous subject until the incoming subject is ready; inspect boundary frames in the encoded MP4 for incomplete scenes |
| 01:08-01:20 | Fields, program rows, and "orders BLOCKED" labels mostly remain in place | Show fields travelling into harness variables and activating already-written steps; an attempted return stops at a visible planner boundary |
| 01:44-01:56 | Public/private labels give way to a detective and an explanatory sentence; no restricted document attempts to cross a gate | Show the document approaching an interpreter/policy gate, being stopped, and the public brochure passing. A detective alone does not explain enforcement and must not imply a third decision-making model |
| 02:06-02:10 | The chart counts upwards, displays 1 during transition, and settles at 44/0; the 949-attack scope, uncertainty, and table reference are absent | Animate the bar, not a counter through false intermediate measurements. Reveal 44 +/-31.3 and 0 +/-0.0 at the spoken numbers; identify AgentDojo, Claude 3.5 Sonnet, 949 attacks, and Table 7. Zero must not be visible before its spoken reveal |
| Throughout | Many objects, program rows, and explanatory text are tiny relative to the largely empty panel | Use canonical type sizes and object scale; crop the paper to its title/authors rather than shrinking a complete page. Check labels at phone size. Sparse layout is fine; miniaturized mechanisms are not |

Use the checked-in clean recording and prepared captions rather than the raw
take. The approved local edit is 143.8 seconds; do not force a 148.117-second
timeline or repair spoken errors by changing captions alone. Reuse the actual
bookend clips instead of reconstructing their animation from screenshots.
The creator also reported intermittently missing arrows and incomplete frames.
Those reports are acceptance blockers to check, not evidence of a particular
render-engine cause. The supplied file fully decodes without reported media
errors; that does not make its blank/partial explanatory scenes acceptable.

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

## Pasteable CaMeL revision prompt

> Revise CaMeL using https://github.com/cardwizard/research-paper-cuts as the
> implementation reference. Keep the current warm palette, cast, and presenter;
> do not redesign the visual world. Read AGENTS.md, DESIGN.md, and this contract.
> Use public/episodes/camel/recording-clean.mp4 and
> src/episodes/camel/captions.json as the only narration/timing master (143.8 s).
> Reuse the actual opening/closing clips, paper-title crop, and canonical cast.
>
> Before animation, audit every narration sentence. Return a beat mapping of
> trigger word/time -> source object -> action -> visible consequence, then
> implement every important entry. At "reading becomes following," show email
> content becoming a directive and changing the selected brochure to a forecast.
> Show the planner writing steps; the reader has no tools. Move its returned
> fields into harness variables, not into planner instructions. An attempted
> return must stop at the isolation boundary. Attach public/internal permission
> tags and physically stop a restricted document at the policy gate; let the
> public brochure pass. Use machinery, not a detective deciding whether to send.
>
> Static arrows, fading keywords, bullet lists, and caption-only explanations
> do not count as animating these mechanisms. Use the canonical layout and type
> sizes; keep labels and role tags legible at phone size. Reveal result labels
> only at their spoken times: 44 +/-31.3 versus 0 +/-0.0, Claude 3.5 Sonnet,
> AgentDojo, 949 attacks, Table 7. Animate bars, not numerical counters.
> Keep the recorded limitations and continuous voice. Mix the supplied original
> instrumental beat quietly beneath narration, with start/end fades.
>
> Return the editable project/source, final 1080x1920 30 fps H.264 MP4,
> prepared captions, beat mapping, and before/during/after review frames for
> every mechanism. Verify there are no label collisions, blank explanatory
> transitions, clipped captions, premature numbers, or scientific role errors.
> Flag unsupported requirements instead of replacing them with generic visuals.
>
> Reserve a non-overlapping caption band from the very first narrated frame,
> including both bookends; captions must not cover the paper, logo, title,
> tagline, CTA, or website. Ensure every required arrow has its shaft/head,
> correct direction, anchored endpoints, and intended visibility. Preload assets
> and fonts; use deterministic frame-based animation. Inspect the actual MP4
> frame-by-frame at the opening and around every transition, not just Studio.
> Reject incomplete scenes, empty explanatory panels, missing arrows, and
> unresolved assets; fix and re-export before calling the video finished.
