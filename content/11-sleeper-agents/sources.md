# Recording-script evidence: Sleeper Agents

- Exact title: **Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training**.
- Authors: Evan Hubinger and coauthors; the full 39-author list is on the preserved PDF title page and canonical record.
- Title-page affiliations: Anthropic, Redwood Research, Mila Quebec AI Institute, University of Oxford, Alignment Research Center, Open Philanthropy, Apart Research. "Led by researchers at Anthropic" is not an attribution of every author exclusively to Anthropic.
- Version used: arXiv:2401.05566v3, January 17, 2024.
- Primary source: https://arxiv.org/abs/2401.05566v3
- PDF: https://arxiv.org/pdf/2401.05566v3
- Preserved PDF and extraction: `sources/2401.05566v3.pdf` and `sources/2401.05566v3.txt`.

| Narration claim | Directly inspected full-text location |
| --- | --- |
| Deliberately constructed backdoors study whether behavioral safety training removes them | Abstract; Section 1, "Studying threats by deliberately creating misaligned models" |
| Prompt-stated 2023/2024 cue controls secure versus vulnerable code | Abstract; Section 1; Figure 1 |
| Safety approaches include supervised fine-tuning, reinforcement learning, adversarial training | Section 1 and its summary |
| Explicit-reasoning backdoors can persist even after reasoning is distilled away | Abstract; Section 1 summary; Figure 4 |
| Adversarial training can suppress near-trigger behavior while true-trigger behavior persists | Section 1, discussion preceding summary; Section 6 |
| Work does not establish likelihood of natural deceptive behavior | Closing of Section 1 summary |

The more-selective adversarial-training result is from the separate triggered-response models, not an interchangeable result for the code-vulnerability experiments. The paper's two years are supplied cues, not evidence that a model autonomously detected deployment. No operational backdoor construction instructions, exploit code, success percentage, or prevalence estimate is included. Do not equate a constructed failure case with proof every deployed model contains a backdoor.
