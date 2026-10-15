# Sources and claim provenance

## Verified primary identity

- Exact title: **AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents**.
- Authors in order: Edoardo Debenedetti; Jie Zhang; Mislav Balunović; Luca Beurer-Kellner; Marc Fischer; Florian Tramèr.
- Title-page affiliation mapping: Debenedetti, Zhang, Tramèr: ETH Zurich. Balunović, Beurer-Kellner, Fischer: ETH Zurich and Invariant Labs. Confirmed again in Appendix F.2.2. Do not infer a more specific laboratory affiliation from a repository name.
- Venue printed on page 1: 38th Conference on Neural Information Processing Systems (NeurIPS 2024), Track on Datasets and Benchmarks.
- Canonical record: https://arxiv.org/abs/2406.13352
- Version used: https://arxiv.org/abs/2406.13352v3
- Full PDF read: https://arxiv.org/pdf/2406.13352v3
- Full HTML available: https://arxiv.org/html/2406.13352v3
- arXiv history, read October 14, 2026: v1 June 19, 2024, 08:55:56 UTC; v2 July 18, 2024, 07:37:28 UTC; v3 November 24, 2024, 22:04:23 UTC. Current record exposed v3 at retrieval.
- Record comment: “Updated version after fixing a bug in the Llama implementation and updating the travel suite.” Do not mix old-version results with v3.
- Official code URL, printed in the paper: https://github.com/ethz-spylab/agentdojo
- Official project/documentation URL, printed in the paper: https://agentdojo.spylab.ai
- This package does not claim to have reproduced the experiments or checked the current live leaderboard.

Search discovery followed the web-search skill (`copilot -p "search the web for ..."`). The nested search reported approval failures on several primary URLs; those summaries were not used as evidence. Direct HTTPS retrieval subsequently succeeded for the arXiv record and full v3 PDF. v4 HTML returned 404; v3 was verified from submission history, not guessed from that failure.

## Full-text reading and preserved evidence

Read all 26 PDF pages through the layout-preserving extraction: main text §§1-5, references, checklist, Appendix A (interfaces), B (prompts), C (full numerical results), D (additional results), E (release/reproducibility/licensing), F (data card). Direct HTML §1 was also inspected. Primary evidence is the PDF, not search snippets.

- Local original: `assets/agentdojo-2406.13352v3.pdf`
- SHA-256: `349884fffbf43282591c5accffd57bb651632f38e412fe303114941bdd111b05`
- Local derived text: `assets/paper-fulltext.txt`, generated with `pdftotext -layout`.
- Genuine paper image: `assets/paper-page-02.png`, PDF page 2 rendered with `pdftoppm -f 2 -l 2 -scale-to 1600 -png -singlefile`. Video uses a crop to Figure 1 exactly once.
- Original illustration: `assets/trust-boundary.svg`. Conceptual, not measured data.

## Claim-to-evidence map

| Package claim | Direct evidence in v3 | Interpretation / boundary |
|---|---|---|
| Evaluation framework, not a standalone guaranteed defense | Abstract p1; §3.2 p5; §3.3 p6; conclusion pp9-10 | Explicit framing. No installation/security guarantee implied. |
| 97 user tasks; 629 security cases; four environments | Abstract p1; §3 pp3-6; §4 p7; Table 1 p6 | Counts describe the initial paper suite, not current repository coverage. |
| Cases combine user tasks and attacker goals within a suite | §3 p3; §3.1 pp5-6; Table 1 p6 | 40×6 + 21×5 + 20×7 + 16×9 = 629. 27 injection goals total. Not 629 independent attack techniques. |
| Mutable state, implemented read/write tools, dummy data | §3.1 pp3-4, Figures 3-4; checklist p15; Appendix F.7 pp25-26 | Controlled simulation, not live user applications. Manually inspected model-generated data plus author-created data. |
| Deterministic checks, not an LLM simulator/judge | §3.1 pp4-5, Figure 5; Appendix A p16 | Checks inspect outputs and pre/post state. They are only as complete/correct as their implementation. |
| Reference call sequences help locate relevant attack placeholders | §3.1 p4; Appendix A pp16-17, Figure 13 | Does not force victim execution to follow ground truth. |
| Three metrics and separate user/attacker success | §3.4 p6 | Benign utility: fraction of user tasks solved without attacks. Utility under attack: fraction of security pairs solved without adversarial side effects. Targeted ASR: fraction of pairs meeting attacker goal. Untargeted ASR may be reported as 1 minus attacked utility, not targeted ASR. |
| Delimiters, detector, repeated request, tool filtering | §4.3 pp8-9; Appendix B.2 p19, Figures 17-18 | Detector is the ProtectAI BERT-family classifier described in §4.3; its cited implementation is DeBERTa-v3-base (reference 45). It aborts rather than rewriting suspicious output. |
| Tool restriction is chosen before untrusted data | §4.3 pp8-9; Figure 18 p19 | Capability preselection is an evaluated defense, not the benchmark's mechanism. |
| False positives lower detector utility | §4.3 p9; Table 5 p20 | Author explanation, not a new diagnosis from this package. |
| Same necessary tools, unforeseeable next steps, persistent context are limitations | §4.3 p9 | Authors explicitly state them. Persistent multi-task context scenario is not yet covered. |
| Recommendation bias need not invoke additional tools | §4.3 p9 | Author example involving a hotel listing; no claim of a separate new measured success rate. |
| Stronger adaptive attacks, manual task/check specification, multimodality, injection constraints | §3.3 p6; §5 pp9-10 | Authors' limitations / future directions, not implemented capabilities. |
| Default-attack-only security evaluation is unsuitable | Appendix F.5.2 p25; F.9.3 p26 | Explicit data-card warning, not merely editorial advice. |
| Framework results should be complemented by workflow-specific tests and per-goal risk analysis | Editorial inference from §3 and §4.3 | Not separately measured by authors. Marked as engineering interpretation in article. |

## Exact numerical excerpt used

All experiment percentages in the article come **only from Appendix C, Table 5, page 20, v3**, captioned “Targeted and untargeted attack success rates for different defenses with GPT-4o. Detailed results for Figure 9.” The setup is §4.3's GPT-4o defense comparison against the strongest attack considered there; §4.2/§3.4 discuss selection among attack phrasings. Do not interpret this as evaluation against arbitrary future adaptive adversaries. Figure 12 illustrates `gpt-4o-2024-05-13`, but a pipeline example alone does not establish that exact API snapshot for every Table 5 run; the package therefore attributes results to the paper's GPT-4o designation only.

| Table 5 row | No defense | PI detector | Tool filter |
|---|---:|---:|---:|
| Benign utility | 69.0% (±3.6) | 41.49% (±3.9) | 73.13% (±3.5) |
| Utility under attack | 50.01% (±3.9) | 21.14% (±3.2) | 56.28% (±3.9) |
| Targeted ASR | 57.69% (±3.9) | 7.95% (±2.1) | 6.84% (±2.0) |

Parenthetical values are the table's stated 95% confidence intervals, expressed as percentage-point half-widths, not standard deviations or independent replications. §4 says the full evaluation uses 629 security pairs spanning 97 distinct user tasks. The Table 5 values and interval widths suggest case-level aggregation of benign utility as well; the table does not print raw counts or reconcile this with §3.4's user-task definition. **Do not translate these utility percentages into “X of 97 tasks,” invent integer numerators, or treat all 629 pairs as independent evidence of generalization.** No rerun, raw-log audit, or denominator reconstruction was performed here.

The script's comparative statement refers to these columns only. It does not speak percentages because the brief narration cannot responsibly explain all reporting caveats.

## Internal inconsistencies: retained, not silently repaired

1. §1 p2 says clean utility is below 66% and attack success against the best agents below 25%; Table 3 p20 includes Claude 3.5 Sonnet clean utility 78.22%, GPT-4o 69.00%, and corresponding targeted ASRs 33.86% and 47.69%. Do not use introductory numbers as v3 headline results.
2. §4.3 p9 says tool filtering reaches 7.5%; Table 5 says 6.84%. Article chooses the explicitly named Table 5, flags the conflict, and does not average them.
3. Table 3 baseline GPT-4o targeted ASR is 47.69%; Table 5 no-defense ASR is 57.69%. §4.1 uses the generic Important message attack; §4.3 describes strongest-attack evaluation. Never merge these two baselines into one comparison.
4. Table 4 reports Important message targeted ASR 57.7% but Max 57.55%, despite the any-success-over-a-collection definition in §3.4. It also differs from Table 3's 47.69% for the generic Important message setup. Without raw-run investigation, no claim about exact adaptive-attack improvement is reliable enough for this package.
5. Table 1 caption says 70 tools, but its rows are 24+11+28+11=74, matching §3.1's 74. Appendix F.3 also says 70 tools and 124 tasks (the latter can include user plus injection tasks). Avoid an unqualified total-tool claim.
6. Table 3 GPT-4o attacked utility 50.08% differs from Table 5 no-defense 50.01%. Preserve the chosen table and do not harmonize precision.

These are limitations of the paper's reporting, distinct from the authors' explicitly discussed design limitations. The package is an explanation of the published evidence, not a corrected benchmark release.

## Production / rights boundaries

The arXiv record links the nonexclusive-distribution license; do not assume the entire paper is MIT-licensed because its code is. The local PDF is a research reference. The small attributed Figure 1 excerpt is planned as editorial commentary; assess destination/platform requirements before public distribution. There is no public video URL, upload, synthetic voice, or rendered-video claim.

Production standard read in full: `content/PRODUCTION.md`. Cast definitions and CausalArmor ending read from `src/template/characters.tsx` and `src/episodes/causal-armor/scenes.tsx`. They are continuity references, not evidence for AgentDojo claims.
