# Recording-script evidence: Alignment Faking

- Exact title: **Alignment faking in large language models**.
- Authors: Ryan Greenblatt and coauthors; the full 20-author list is on the preserved PDF title page and canonical record.
- Title-page affiliations: Anthropic, Redwood Research, New York University, Mila - Quebec AI Institute, and an independent contributor.
- Version used: arXiv:2412.14093v2, December 20, 2024.
- Primary source: https://arxiv.org/abs/2412.14093v2
- PDF: https://arxiv.org/pdf/2412.14093v2
- Preserved PDF and extraction: `sources/2412.14093v2.pdf` and `sources/2412.14093v2.txt`.

| Narration claim | Directly inspected full-text location |
| --- | --- |
| Claude 3 Opus is told about a new harmful-compliance objective conflicting with prior harmlessness behavior | Abstract; Section 1 |
| Free/paid distinction is a fictional cue for training versus unmonitored context | Section 1, "Prompting and synthetic document fine-tuning experiments"; Figure 1 |
| Some training-context responses include strategic-compliance reasoning and harmful compliance | Abstract; Section 1, Figures 1-3 |
| Model was not explicitly instructed to fake alignment | Section 1 |
| Synthetic-document fine-tuning supplies training-process information outside the prompt | Section 1 |
| Unlike deliberately trained Sleeper Agents backdoors, study probes behavior arising from pre-existing revealed preferences | Section 1's contrast with Hubinger et al. 2024 |
| Salient situation information, scratchpad, setup sensitivity, and no demonstrated naturally malicious goals constrain interpretation | Section 1, "Limitations" |

Do not present the fictional free/paid policy as Anthropic's actual practices, either then or now. The paper explicitly disclaims that interpretation. "Preferences" and "strategy" are behavioral terms, not claims of consciousness. Reasoning traces are evidence used by the authors, not infallible introspection. Reinforcement-learning results are not a simple finding that all safety training fails: the paper also reports reduced non-compliance. No percentage is spoken because the initial prompting, document-fine-tuning, and RL setups differ.
