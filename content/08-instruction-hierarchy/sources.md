# Recording-script evidence: The Instruction Hierarchy

- Exact title: **The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions**.
- Authors: Eric Wallace, Kai Xiao, Reimar Leike, Lilian Weng, Johannes Heidecke, Alex Beutel.
- Title-page affiliation: OpenAI.
- Version used: arXiv:2404.13208v1, April 19, 2024.
- Primary source: https://arxiv.org/abs/2404.13208v1
- PDF: https://arxiv.org/pdf/2404.13208v1
- Preserved PDF and extraction: `sources/2404.13208v1.pdf` and `sources/2404.13208v1.txt`.

| Narration claim | Directly inspected full-text location |
| --- | --- |
| Basketball-result injection illustrates untrusted data acquiring authority | Introduction and Figure 1 |
| System instructions outrank user instructions, which outrank tool outputs | Figure 1; Section 3 |
| Compatible lower-priority requests should be followed rather than universally rejected | Sections 3.1-3.2 |
| Context synthesis distributes compatible instructions across levels | Section 3.2 |
| Context ignorance trains the response as though conflicting lower-priority instructions were absent | Section 3.2 |
| Improved tested robustness, including held-out attack types | Section 4, Figures 2-3 |
| Evaluations use fine-tuned GPT-3.5 Turbo with capabilities-data baseline | Section 4, experimental setup |
| Over-refusal regressions and anticipated residual adversarial vulnerability | Section 4, Figure 4; Section 6 |

This is learned hierarchical behavior, not an enforced access-control boundary. The script's application/user/tool summary is intentionally shorter than Figure 1, which also locates model outputs in the hierarchy. Do not substitute the current product's message hierarchy or claim the paper established security for modern production models. No improvement percentage is spoken.
