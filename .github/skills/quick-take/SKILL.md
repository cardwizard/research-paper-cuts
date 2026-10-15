---
name: quick-take
description: Turn an unscripted on-camera reaction to a release, announcement, or new idea into a Research Paper Cuts video with verified claims and word-timed visuals. Use for quick takes, release reactions, news explainers, or record-first videos without a research paper.
---

# Quick take

Use this skill for record-first videos, not just paper explainers. The creator
provides an on-camera recording and optionally a release URL or topic.
Keep the existing Research Paper Cuts brand, real voice, presenter inset,
captions, and bookends. A paper is not required.

Read `AGENTS.md`, `DESIGN.md`, `docs/09-quick-takes.md`, and
`docs/05-qa-checklist.md` from the repository root. Follow the shared
animation and external-tool contract; this is a different editorial mode,
not a second rendering system.

1. Scaffold with `npm run new-episode -- <slug> --quick-take`. Inspect the
   recording, transcribe it, and prepare edits/captions using the existing
   pipeline. Never overwrite an existing episode or upload recordings to an
   external service without authorization.
2. Preserve the creator's wording and intent. Remove only dead air, mistakes,
   and redundant retakes. Listen to ambiguous words; captions must match the
   actual speech. No generated voice, invented quotations, or rewritten
   narration.
3. Verify factual claims against primary release notes, official docs, or
   the paper if relevant. Capture date/version/access restrictions and exact
   evidence in `sources.md`. Separate vendor claims, independently measured
   facts, opinions, and predictions. If no link is provided, find official
   evidence using available search tools; never fabricate a source. If
   evidence is inaccessible or speech conflicts with it, flag the affected
   timestamp and request the missing evidence or a correction. Do not
   silently contradict the voice with captions.
4. Build `storyboard.md` from the cleaned word timestamps. Map each important
   sentence to a concrete action and visible consequence. Pick the form that
   explains it: character action, process flow, before/after transformation,
   sourced comparison, annotated real screenshot, or restrained timeline.
   Do not turn the transcript into bullet slides or random animated labels.
5. Implement the storyboard in the existing episode layout. Reuse shared
   cast/components when they help; do not force security characters into
   unrelated topics. Put reusable components in `src/template/`.
   `bookendPaperTitle` accepts the release/topic title despite its legacy
   name; no new branding or fake paper citation is needed.
6. Inspect before/during/after frames for every action, captions at bookend
   boundaries, arrow integrity, presenter crop, and continuous audio.
   Run `npm run lint`, review Studio, and leave it paused. Export only when
   requested; review the actual encoded video and audio before delivery.

Deliver the preview plus concise factual blockers, if any. A scaffold is not
a finished visualization. Keep one-off feedback and prompts out of shared
rules; never commit raw recordings or renders.
