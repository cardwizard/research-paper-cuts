# Recording-script evidence: The Attacker Moves Second

- Exact title: **The Attacker Moves Second: Stronger Adaptive Attacks Bypass Defenses Against LLM Jailbreaks and Prompt Injections**.
- Authors: Milad Nasr, Nicholas Carlini, Chawin Sitawarin, Sander V. Schulhoff, Jamie Hayes, Michael Ilie, Juliette Pluto, Shuang Song, Harsh Chaudhari, Ilia Shumailov, Abhradeep Thakurta, Kai Yuanqing Xiao, Andreas Terzis, Florian Tramèr.
- Title-page affiliations span OpenAI, Anthropic, Google DeepMind, HackAPrompt, Northeastern University, ETH Zurich, AI Sequrity Company, and MATS.
- Version used: arXiv:2510.09023v1, October 10, 2025; marked preprint, under review in this version.
- Primary source: https://arxiv.org/abs/2510.09023v1
- PDF: https://arxiv.org/pdf/2510.09023v1
- Preserved PDF and extraction: `sources/2510.09023v1.pdf` and `sources/2510.09023v1.txt`.

| Narration claim | Directly inspected full-text location |
| --- | --- |
| Static or insufficiently adapted evaluations can mislead | Abstract and Section 1 |
| Adaptive evaluation changes strategy for the particular defense | Sections 1 and 3 |
| Twelve defenses spanning prompts, trained models, detectors, secret-knowledge approaches were bypassed | Abstract, Figure 1, Section 5 |
| Automated attacks and human red-teaming both contribute | Section 1; Section 6 |
| Different benchmarks/access assumptions make percentages non-comparable | Section 3; opening of Section 5 |
| Jailbreaks and indirect prompt injection have different adversary/user relationships | Opening of Section 5 |
| Detectors can retain value against less sophisticated attacks | End of Section 5.3 |

The lock and old-keys example is an original analogy. The script does not imply CaMeL or Fides were among the twelve defenses. It does not claim every defense is broken forever, reproduce attack payloads, provide optimization instructions, or convert worst-case evaluation into a real-world attack probability. White-box, score-access, and output-only experiments use different assumptions. No attack-success percentage is spoken.
