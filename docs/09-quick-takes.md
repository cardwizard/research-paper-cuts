# 09 - Quick takes: record first, visualize second

This mode covers a new release, announcement, or idea explained spontaneously
on camera. It uses the same brand and rendering pipeline as paper episodes,
but follows the recording's argument instead of imposing a paper summary.
No advance script or PDF is required.
For this mode, release-source verification replaces paper-specific evidence
requirements in the shared guides; all other design and QA rules still apply.

## Inputs and invocation

Provide a recording and, if available, an official release URL. A topic/date
helps identify an announcement but is not permission to invent its details.
Example agent request:

> Use the quick-take skill on my recording about this release. Preserve my
> words and voice, verify the facts from the official announcement, and build
> flexible visuals in our existing brand. Show me the Studio preview.

Agents can discover the skill at `.github/skills/quick-take/SKILL.md`.
For tools that do not load project skills, supply that file and this guide.

```console
npm run new-episode -- my-release --quick-take
# Place recording.mov (or recording.mp4) in public/episodes/my-release/.
# Inspect/transcribe the raw recording and author keep segments in edit.json.
npm run prepare-video -- my-release
npm run transcribe -- my-release
npm run prepare-captions -- my-release
npm run dev
# Replace placeholder scenes; set durations from the clean recording.
npm run lint
node --test scripts/new-episode.test.mjs # scaffold regression checks
# Only when an MP4 is requested:
npm run render -- my-release
```

The scaffold registers a normal episode and adds `sources.md` and
`storyboard.md`. Its ten-second starter scene and empty captions are
placeholders, not a finished or fact-checked video. The normal
`new-episode -- my-paper` workflow remains available.
Use the release/topic title in `bookendPaperTitle` and a concise, verified
official-source/date citation; never create an arXiv identifier for a release.

## Preserve the take

Listen to the actual recording before planning. Use the creator's natural
argument, pacing, enthusiasm, and caveats. Trim dead air and flubbed retakes
without cutting words or changing meaning. Do not require rerecording into a
fixed format; organize visuals around the points already made.
Use the clean recording's word timestamps for every visual trigger.
Transcription corrections fix recognition errors, not inaccurate speech.

For a factual error, flag the exact spoken timestamp and source discrepancy.
Ask for a replacement take, approval to remove the affected passage, or an
explicit correction treatment. Do not publish a known error, rewrite the
voice, or hide the contradiction in tiny text.

## Evidence appropriate to an announcement

Read primary release notes, official documentation, or the original paper
when one exists. Record exact URLs/sections, publication and checked dates,
version, rollout status, region/plan restrictions, and limitations.
Distinguish "announced", "available", and "we tested". Attribute vendor
benchmarks as vendor-reported; show metrics only with their conditions.
Treat the creator's opinions and predictions as such, not established facts.
No supplied URL is fine; no verified evidence for a factual claim is not.
If browsing or sources are unavailable, mark claims unverified and stop
publication of those claims rather than presenting guesses as facts.

Keep a claim ledger in the episode's `sources.md`. A launch screenshot is
not proof of every claim, and a stylized mockup is not a product demonstration.
Label illustrative UI and vendor-provided demos; do not fabricate screenshots,
hands-on results, access, capabilities, dates, or numerical comparisons.
Respect asset rights and do not expose private account details in captures.

## Flexible visuals, one coherent brand

Choose a visual grammar based on the spoken meaning:

| Meaning | Suitable visualization |
| --- | --- |
| A capability or mechanism | An input moves through a process to a persistent result |
| Something changed | Matched before/after states with the difference animated |
| A real interface | Legible, sourced crop with a word-timed pointer/highlight |
| A comparison | Consistent scale and conditions, exact supported values |
| Rollout or sequence | A simple timeline that distinguishes dates from forecasts |
| Consequence, concern, opinion | A concrete scenario, clearly illustrative |

Use the established cast when roles genuinely fit; an announcement does not
automatically need a villain, detective, or bouncer. Avoid generic card decks,
logo parades, decorative waveforms, headline-only scenes, and animated bullet
lists. A release page can establish provenance briefly but cannot carry the
whole video.

Audit the narration sentence by sentence in `storyboard.md`: trigger word,
clean time, global and scene-local frame, source -> action -> consequence,
visual form, claim reference, and review status. Every important transfer,
change, decision, failure, and result needs an implemented action.
Objects should arrive, transform, and land, not disappear before their
consequence. Arrows must remain anchored and readable.

## Acceptance

Apply the existing design, animation, audio, and export QA contracts.
The real voice and presenter remain continuous, bookends overlap rather
than extend the recording, and captions have their own safe band from frame
one through the close. Choose beats only where they reinforce spoken events;
do not sacrifice intelligibility for background sound.

Check caption wording by listening, proper names against sources, and page
boundaries for repeats or omissions. Review each important action before,
during, and after; check readability at phone size, screenshots, connectors,
and complete scene composition. Run lint and review Studio. If exporting,
check duration/resolution/fps and decode/review the final MP4, including audio.
Do not claim an auditory review unless one was performed.

No automatic publishing or Git push is part of the skill. Commit reusable
workflow changes only when requested; keep raw footage, renders, one-off
review prompts, and scratch notes out of shared rules.
