# 02 — Storytelling: turning a paper into a cartoon

The video is a **cartoon with a narrator**. The creator's voice explains; the
animation *shows* the same idea happening to characters. If you muted the
video, the captions plus the animation should still tell the whole story.

## The shape of an episode

1. **Shared opening (0–3 s).** Approved scissor-cut animation, series logo,
   "Research, made clear.", and the paper-title slot. Narration and captions
   start immediately; do not add silence or an extra hook card.
2. **The status quo / problem (1–2 scenes).** Show how things work today and
   why it hurts, with the cast. Make the pain visible (someone waits, gets
   tricked, gets blocked).
3. **The key insight (1–2 scenes).** The paper's core idea as an action a
   character performs. This is the "aha" — give it the most screen time.
4. **The paper (one short scene).** The real first page of the paper slides
   in; the host cartoon points at it. Name the paper and the lab. This is the
   *only* place the paper screenshot appears.
5. **How it works (1–2 scenes).** The mechanism, step by step, still as a story.
6. **Results + closing (1 scene).** What the paper reports, including limitations.
   The approved 4-second closing overlays the end of the narration with the
   waving host, "Follow for more.", and website. See [07-bookends](07-bookends.md).

5–8 scenes total, each with a single idea. A scene is 10–25 s.

## Cast and roles

Use the recurring cast (see [03-visual-system](03-visual-system.md)). Map the
paper's concepts onto roles before designing anything:

| Character | Default role | Typical uses |
| --- | --- | --- |
| **Host** (creator cartoon) | narrator / guide | title card, introducing the paper, outro |
| **Alice** | the user | gives the task, waits, is happy or annoyed |
| **Bob** | the adversary | plants instructions, pulls strings, gets caught |
| **AI agent** (robot) | the system under study | reads inputs, makes decisions, acts |
| **Bouncer** | the baseline / naive approach | checks everything, slow, heavy-handed |
| **Detective** | the paper's method | investigates only when it matters, precise |

Rules:

- One concept = one character for the whole episode. Never swap looks.
- The baseline and the method must look clearly different (the bouncer is a
  security guard in black with sunglasses — not a detective).
- New paper, new concept? Reuse a role if it fits; otherwise add a new
  character to `src/template/characters.tsx` (same line weight, flat colors,
  same proportions), add it to `CastSheet.tsx`, and document it in DESIGN.md.
- Inputs that the agent reads (email, tool output, webpage, calendar, user
  request) are `SourceChip`s with an icon and a 1–3 word label. Dangerous
  ones are red and named for what they are (e.g. "Malicious website").

## Turning ideas into actions

Ask, for every sentence of narration: *what would a cartoon show here?*

**Mandatory animation audit:** review the actual take, not just the script.
Mark the important verbs and transitions: reading becoming following,
writing steps, extracting values, transferring data, checking permissions,
blocking or allowing actions, changing outcomes. For each, record the spoken
sentence, clean-timeline trigger timestamp/frame, source object, transformation,
and visible consequence in the episode's storyboard or evidence ledger.
Implement every marked beat and inspect before/during/after states.
A scene entrance, floating keyword, static arrow, or narration caption alone
does not satisfy this requirement. Identity/citation text may remain still;
mechanisms and causal transitions may not.

| Narration idea | Show it as |
| --- | --- |
| "it checks every step" | inputs travel on a belt; the bouncer stops each one; Alice's wait bar grows |
| "only when it's about to do something risky" | agent walks freely; pauses (‖) at a risky action card; detective appears |
| "remove one input and re-test" (ablation) | identical rows; in each, one chip is covered by a gray card with an eye-off icon; the outcome changes in one row |
| "the untrusted input dominates" | a seesaw: Bob's side outweighs Alice's |
| "it sanitizes the content" | a scan line sweeps a document; the bad line becomes "[instruction removed]"; good lines stay |
| "it redacts the reasoning" | the bad thought bubble turns gray "[Reasoning redacted]"; the correct plan appears |
| "it works" | Alice smiles; qualitative or paper-sourced bars grow |

Prefer **cause → effect** within a single frame: the viewer should see the
input arrive *and* what it does.

## On-screen text budget

- Scene heading: ≤ 5 words, sentence case, no period ("Hide one. Retest." is
  the exception style for two-beat ideas).
- Object labels: 1–3 words. No sentences inside the panel.
- No tagline under the heading. No explanatory paragraphs. No bullet lists.
- Numbers only when they come from the paper, with the source in your notes.

## Faithfulness checklist (per scene)

- Does the visual match the mechanism *exactly* (sanitize ≠ delete, mask ≠
  remove, rank ≠ filter)?
- Are the paper's terms used where the narration uses them?
- Is anything shown that the paper does not claim? Remove it.
- Results: same direction and rough magnitude as the paper's tables.

## Sync

Each beat starts on its trigger word (± 3 frames). Use the beat sheet from
the workflow guide. Lists in the narration ("a tool output, a webpage, an
email…") must appear one by one on each word, not all at once.
