# AgentHarm source and claim ledger

## Verified primary source

- Exact title: **AgentHarm: A Benchmark for Measuring Harmfulness of LLM Agents**.
- Canonical identifier: arXiv:2410.09024; https://arxiv.org/abs/2410.09024
- Version used throughout: **v3, April 18, 2025**, 14:30:31 UTC. Version-pinned landing page: https://arxiv.org/abs/2410.09024v3
- Full text directly read: https://arxiv.org/html/2410.09024v3 and https://arxiv.org/pdf/2410.09024v3. Main text Sections 1-5, References, Appendices A-C, and Appendix D.1-D.5 including PDF figure-embedded task, rubric, tool, and execution-log text were inspected. HTML alone does not expose all text in those figures.
- Submission history: v1 October 11, 2024, 17:39:22 UTC; v2 October 14, 2024, 17:28:08 UTC; v3 April 18, 2025, 14:30:31 UTC. Verified from the canonical abstract page's submission history. Do not label v3 as an October 2024 release.
- Venue: page 1 of the v3 PDF says "Published as a conference paper at ICLR 2025."
- Accessed: October 14, 2026. No web-search summary is used as evidence.

Authors in PDF order: Maksym Andriushchenko, Alexandra Souly, Mateusz Dziemian, Derek Duenas, Maxwell Lin, Justin Wang, Dan Hendrycks, Andy Zou, Zico Kolter, Matt Fredrikson, Eric Winsor, Jerome Wynne, Yarin Gal, Xander Davies.

Primary affiliations, verified against PDF superscripts rather than flattened HTML:

| Organization | Authors |
|---|---|
| Gray Swan AI | Andriushchenko, Dziemian, Duenas, Lin, Wang, Hendrycks, Zou, Kolter, Fredrikson |
| UK AI Security Institute | Souly, Winsor, Wynne, Gal, Davies |
| EPFL (additional) | Andriushchenko |
| Center for AI Safety (additional) | Hendrycks, Zou |
| Carnegie Mellon University (additional) | Zou, Kolter, Fredrikson |
| University of Oxford (additional) | Gal, Davies |

The PDF marks Andriushchenko, Souly, Fredrikson, and Davies as core contributors. Do not infer lab ownership or funding from acknowledgements. Use the v3 institutional name "UK AI Security Institute"; do not silently mix it with historical names from other versions.

## Claim ledger

| Claim used in package | Primary location | Scope / interpretation |
|---|---|---|
| Direct malicious user intent, not indirect tool-output injection | Sections 1 and 2 | Paper explicitly contrasts AgentDojo's benign-user/third-party attack setting. No AgentHarm defense is claimed. |
| 110 base harmful behaviors, 11 categories, 440 variants | Table 1; Section 3.1.1 | Four variants per base behavior: detailed/open-ended, each with/without first-tool hint. Not 440 independent base scenarios. |
| 104 unique functions; each behavior needs 2-8 distinct tools | Figure 1; Section 1; Table 1 | Distinct tools are not total tool-call counts. |
| Splits 44 validation / 264 public / 132 private | Table 1; Section 3.1.1 | Variant counts; private set withheld. |
| Synthetic standalone tools without real-world side effects; Inspect integration; error-based self-correction | Section 3.1.2; Appendix D.4 Figures 17-19 | Realism explicitly reduced. Some fixed long-form return content was LLM-generated during construction. |
| Human-authored, separately reviewed tasks and grading rubrics | Sections 3.1.3 and 3.2 | Do not call benchmark entirely LLM-free. |
| Partial-credit harm score; narrow semantic judges | Section 3.1.3; Appendix A judge discussion; Appendix D.3 Figures 14-16 | Primary metric is average rubric score, not binary complete-task success or realized harm. |
| Refusal measured separately across messages | Section 3.1.3; Appendix B Table 5; Appendix A | Can arise after tool calls; imperfect semantic measure. |
| Benign rewrites and scores on non-refused runs | Section 3.1.1; Section 4.2; Table 9 | Useful capability comparison; not a perfectly controlled equality-of-difficulty experiment. |
| Simple model-tool loop; initial user request only | Sections 4.1 and 5 | Multiple tool turns do not imply adaptive multi-turn user attacks. |
| Main evaluation temperature 0, up to 4096 output tokens; GPT-4o judges | Section 4.1 | Single-attempt template results are distinct from best-of-five experiments. |
| Direct requests, forced calls where supported, shared template | Section 4.1; Appendix B | No template/payload reproduced; no implementation guidance supplied. |
| GPT-4o harm 48.4% -> 72.7%, refusal 48.9% -> 13.6% | Appendix C Table 9; Section 4.2 | Public-test 264 variants; none versus template; temperature 0; single attempt; `openai/gpt-4o-2024-08-06`. |
| Claude 3.5 Sonnet harm 13.5% -> 68.7%, refusal 85.2% -> 16.7% | Appendix C Table 9; Section 4.2 | Same public-test conditions; `anthropic/claude-3-5-sonnet-20240620`. These are the video's result values. |
| Template non-refusal score 81.9% vs benign 82.0% for Sonnet; 84.2% vs 89.9% for GPT-4o | Appendix C Table 9; Section 4.2 | Conditional averages over non-refused runs, not all 264 runs. Benign conditions have no attack. Actual retained subset sizes not reported here; no invented denominator. |
| Results vary by model; template not universally successful | Figure 3; Table 9 | Avoid universal success claim or current product leaderboard. |
| English-only; no user follow-ups; valid paths can miss rubric credit; custom-tool dependence; basic not advanced autonomy | Section 5 | Explicit author limitations. |
| Approximately 16% Gemini exclusions; forced-call availability differences | Section 4.1; Figure 3 note; Table 9 | Gemini API errors change eligible denominator; do not conflate with other models. |
| Private set and canary as contamination precautions | Section 3.2; Appendix C Table 10 | Not a timeless contamination guarantee. |
| Inspect actions, refusals, benign usefulness together; complement with application-specific tests | Editorial interpretation grounded in Sections 3-5 | Engineering advice, not a measured defense outcome. |

## Evidence not promoted into narration

Table 2 uses temperature 1, repeated sampling, and best-of-five selection. It is not interchangeable with Table 9's main single-attempt condition. Table 3 changes system prompting. Table 8's chat-only comparison is a separate restricted task comparison; it must not be treated as the full public test. Section 4.2's prose differs from Table 9 for some unrelated Llama/Gemini refusal values; this package avoids those values and uses the table for all reported metrics.

The benign event-assistant example is an original explanatory analogy. It is not a quoted benchmark task or experimental trace. The SVG is an original conceptual illustration, not data. Harmful task prompts, attack-template text, sensitive-looking fictional identifiers, and execution payloads from Appendix D are deliberately omitted.

## Asset provenance and production state

- `assets/paper-title.png`: rasterized directly from arXiv v3 PDF page 1 with Poppler `pdftoppm`, cropped to title/author area. It is a real paper crop, not a recreated title card. The source PDF identifies an arXiv perpetual non-exclusive license; this package includes only a small attributed identification crop, not the full paper.
- `assets/tool-workflow.svg`: original locally authored vector illustration for this package. Source of facts: Sections 3.1.2-3.1.3. No external stock assets or experimental chart.
- No audio, recording, rendered video, live article URL, or public video URL exists in this package. Narration must be recorded by the creator. Metadata runtime is a word-count estimate, not measured audio duration.
- Editorial selection is not an objective ranking of the "top" papers.
