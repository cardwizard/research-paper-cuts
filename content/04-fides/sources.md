# Recording-script evidence: Fides

- Exact title: **Securing AI Agents with Information-Flow Control**.
- Authors: Manuel Costa, Boris Köpf, Aashish Kolluri, Andrew Paverd, Mark Russinovich, Ahmed Salem, Shruti Tople, Lukas Wutschitz, Santiago Zanella-Béguelin.
- Title-page affiliation: Microsoft.
- Version used: arXiv:2505.23643v2, September 3, 2025.
- Primary source: https://arxiv.org/abs/2505.23643v2
- PDF: https://arxiv.org/pdf/2505.23643v2
- Preserved PDF and extraction: `sources/2505.23643v2.pdf` and `sources/2505.23643v2.txt`.
- Author tutorial: https://github.com/microsoft/fides

| Narration claim | Directly inspected full-text location |
| --- | --- |
| Integrity and confidentiality are distinct dimensions | Section 1; Section 4.1 |
| Labels propagate through tool outputs and model context; tool calls are checked deterministically | Sections 4.1-4.3 |
| Correct labeling relies on trusted tool wrappers | Section 4.1, "Attaching labels to data" |
| Directly reading restricted content taints context and restricts future calls | Opening of Section 5 |
| Selective variable hiding keeps results out of planner context when they would raise its label | Section 5.1 |
| Isolated model and constrained decoding return typed results; labels retain policy relevance | Section 5.2 |
| Evaluated policies do not stop every attacker-influenced final text response | Section 8.1 |

The opening is an original example grounded in the paper's email scenario. A Boolean response has bounded information capacity, not guaranteed correctness or universal immunity to manipulation. It is an explicit policy choice whether such outputs may affect consequential actions. The confidentiality guarantee is explicit secrecy, not elimination of implicit flows. Do not say "zero successful injections": Table 1 includes a raw benchmark success for Fides with policy checks that the authors classify as outside their policy scope. No numerical result is spoken.
