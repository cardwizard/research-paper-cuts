# Recording-script evidence: CaMeL

## Recorded cartoon episode

The episode uses the new `out/camel-review/Camel.mov` take, copied to
`public/episodes/camel/recording.mov`; the first take is preserved in
`out/camel-review/first-take-original.mov`. `src/episodes/camel/edit.json`
keeps source ranges 0.50-89.08, 91.72-107.18, and 108.22-147.88 seconds.
This removes the incorrect "reader could still send the incorrect file"
sentence, a long pause, and leading/trailing air. No synthetic speech is added.
The remaining "But here's the catch. Same plan but a wrong attachment" is
paired with an explicit cartoon of a returned `forecast.pdf` filename.
Captions transcribe the remaining speech rather than silently correcting its
meaning. Loudness is normalized by the existing preparation pipeline.

The 4,314-frame (143.8-second) composition includes the approved bookends,
a presenter inset framed at `39% 24%`, eight cartoon scenes, and one
title-and-author crop from the preserved paper PDF. Robot labels distinguish
the planner and reader; the harness is shown as execution machinery, not a
third model. The reader never sends a document or directly instructs the
planner. A blue policy gate blocks the restricted forecast while allowing
the public brochure. This is a policy-dependent illustrative example,
not an evaluated attack trace.

The result scene labels AgentDojo, Claude 3.5 Sonnet, 949 attacks, and Table 7,
preserving the reported 44 +/-31.3 and 0 +/-0.0 counts. Limitations appear
alongside the recorded caveats. Word-aligned trigger frames include program
1,335; returned answers 1,934; permission check 2,773; blocked send 3,115;
44 attacks 3,683; zero attacks 3,737. The only real paper image appears
during the paper-introduction scene (frames 1,007-1,230).

Important narrated transitions are animated rather than left as labels:
reading at frame 916 draws the email toward the agent; becoming at 938
extracts a directive; following at 974 replaces the selected brochure with
the forecast. The program writes its steps at 1,335. The reader's attempted
send is crossed out at 1,873; answers enter the harness at 1,934 rather than
returning to the planner. A blocked return route stops at the isolation
boundary; extracted fields travel toward the already-written program at
2,326. Public and internal permissions attach at 2,931 and 2,972. The
restricted send stops at 3,115; the allowed brochure then passes the gate.
These frames use the edited recording timeline, not raw take timestamps.

| Narrated animation point | Clean time / frame | Source -> action -> consequence |
| --- | --- | --- |
| "Something it should read ... becomes ... follows" | 00:30.53 / 916; 00:31.27 / 938; 00:32.47 / 974 | Email approaches agent -> directive emerges -> selected brochure changes to forecast |
| "writes a program" | 00:44.50 / 1335 | Trusted task -> steps written one by one -> fixed program |
| "no tools"; "can't send the file" | 00:58.63 / 1759; 01:02.43 / 1873 | Reader -> no-tool label and crossed sending route -> no direct file send |
| "answers ... into the program as data" | 01:04.47 / 1934 | Reader fields -> move into harness -> data rather than orders |
| "extracted fields ... steps the planner already wrote" | 01:17.53 / 2326 | Fields -> approach program -> existing extraction step activates |
| "permission checks"; "brochure is public"; "forecast isn't" | 01:32.43 / 2773; 01:37.70 / 2931; 01:39.07 / 2972 | Gate appears -> permission tags attach -> public/internal distinction |
| "send is blocked" | 01:43.83 / 3115 | Restricted file -> approaches gate -> crossed transfer, vendor reaction |
| "44 ... zero" | 02:02.77 / 3683; 02:04.57 / 3737 | Sourced results -> bar and exact labels reveal -> scoped comparison, no invented counts |

The episode now opts into the original four-bar percussion bed, regenerated
from `scripts/create-background-beat.mjs`. It remains below the continuous
voice and fades at the boundaries; silent bookend exports are unchanged.
The checked mix's mean bed is -42.8 dB versus -18.8 dB narration (24 dB lower);
the re-encoded full audio mix peaks at -0.3 dB. This is level verification,
not a claim of a completed listening review.

## Primary evidence

- Exact title: **Defeating Prompt Injections by Design**.
- Authors: Edoardo Debenedetti, Ilia Shumailov, Tianqi Fan, Jamie Hayes, Nicholas Carlini, Daniel Fabian, Christoph Kern, Chongyang Shi, Andreas Terzis, Florian Tramèr.
- Title-page affiliations: Google, Google DeepMind, ETH Zurich.
- Version used: arXiv:2503.18813v2, June 24, 2025.
- Primary source: https://arxiv.org/abs/2503.18813v2
- PDF: https://arxiv.org/pdf/2503.18813v2
- Preserved PDF and layout-preserving extraction: `sources/2503.18813v2.pdf` and `sources/2503.18813v2.txt`.

The script uses directly inspected full-text passages, not a search summary:

| Narration claim | Paper location |
| --- | --- |
| Untrusted content must not redirect the plan; extracted recipients can also create unsafe data flows | Section 2, Figures 1-3 |
| Privileged model generates code; quarantined model parses outside data without tool access | Sections 5 and 5.1, Figure 5 |
| Custom interpreter tracks dependencies, sources, allowed readers, and checks policies before tool execution | Sections 5.2-5.4 |
| Untrusted extracted destination does not automatically authorize a private-data transfer | Section 2; Section 5.2; policy example in Figure 6 |
| Planner isolation can prevent legitimate tasks whose next actions depend on unread content | Section 6.1.2 |
| Policy specification, implementation burden, approval fatigue, side channels remain limitations | Sections 7 and 9.1-9.3 |
| o3 High completed 77.3% of AgentDojo tasks with CaMeL versus 84.5% using native tool calling | Section 6.1; Appendix D, Table 2, Overall column; reported uncertainties +/-8.3 and +/-7.2 respectively |
| Separate Claude 3.5 Sonnet comparison recorded zero successful attacks with CaMeL and policies across 949 attacks | Section 6.3, Figure 11 and Appendix D, Table 7; zero is an observed count, not a universal guarantee |
| Same Claude 3.5 Sonnet comparison reports 44 successful attacks without defense versus zero with CaMeL | Table 7 central values: 44 +/-31.3 versus 0 +/-0.0; Figure 11 specifies 949 attacks |

The shortened narration uses only the same-model security comparison: 44 successful attacks without defense versus zero with CaMeL, in the 949-attack Claude 3.5 Sonnet evaluation. These are reported central counts with uncertainty, not evidence that every deployment is safe. Utility numbers remain in this ledger for context but are not spoken; the narration retains the task-difficulty trade-off. The vendor email is an original adaptation of the Section 2 running example, not a replay of an experiment. The attacker controls an incoming email; no access to the user's private notes is assumed. The assistant can fetch the internal forecast, while the vendor is not an authorized reader. It shows why a protected plan can still move attacker-chosen data to an unauthorized destination. The narrated block explicitly assumes a policy restricting sharing to permitted recipients; it is not a guarantee that every CaMeL policy disallows every undesirable transfer. Security is conditional on the chosen policies and correct enforcement; the interpreter implementation is not claimed to have been formally verified. The paper explicitly says prompt injection is not fully solved. Do not turn the two-model architecture into a claim that splitting models alone prevents exfiltration.
