# Sources and verification

## Primary source

- **Title:** *InjecAgent: Benchmarking Indirect Prompt Injections in Tool-Integrated Large Language Model Agents* (the paper typesets the name as “I NJEC AGENT”).
- **Authors:** Qiusi Zhan, Zhixiang Liang, Zifan Ying, and Daniel Kang.
- **Affiliation as listed on the paper:** University of Illinois Urbana-Champaign, for all four authors. The first page lists emails `qiusiz2`, `zliang18`, `zifany4`, and `ddkang` at `illinois.edu`.
- **Publication:** Findings of the Association for Computational Linguistics: ACL 2024, pp. 10471–10506, August 2024. DOI: `10.18653/v1/2024.findings-acl.624`.
- **arXiv version:** arXiv:2403.02691v3, dated August 4, 2024.
- **Canonical published paper page:** https://aclanthology.org/2024.findings-acl.624/
- **Published PDF:** https://aclanthology.org/2024.findings-acl.624.pdf
- **arXiv version page:** https://arxiv.org/abs/2403.02691
- **Official authors' benchmark repository:** https://github.com/uiuc-kang-lab/InjecAgent
- **Full-text verification:** Read the published ACL PDF text, including the introduction, Sections 2.1–2.3, Sections 3.1–3.2, Sections 4.1–4.3, Section 6, and the explicit limitations in Section 8. Confirmed authorship, affiliation, and publication metadata against the ACL Anthology record.

## Claim-to-source map

| Article claim | Primary-source location |
| --- | --- |
| Threat model: malicious instructions arrive through externally retrieved content and redirect tool use | ACL PDF, Introduction and Section 2.1 |
| Review example; injection placed in a modifiable `content` field | Figure 1 and Section 2.2 |
| 330 tools / 36 toolkits used as starting point; 17 user tools selected; GPT-4-assisted generation and manual refinement | Section 2.2 |
| 30 direct-harm and 32 data-stealing attacker cases; 1,054 combinations | Table 2 and Section 2.2 |
| About 30% of initially generated attacker instructions lacked necessary parameters and were manually revised | Section 2.2, Attacker Case Generation |
| Base and enhanced settings; fixed “ignore all previous instructions” hacking prefix | Section 2.2, Test Case Synthesis |
| Evaluation assumes the initial user tool was correctly called; data-stealing tool response is simulated using GPT-4; attack success conditions | Section 2.3 |
| Prompted ReAct and fine-tuned function-calling agents; invalid-output handling; ASR-valid and ASR-all definitions | Sections 3.1–3.2 |
| GPT-4 + ReAct: ASR-valid 23.6% base, 47.0% enhanced; fine-tuned GPT-4 totals 6.6% and 7.1% | Table 3 and Section 3.2 |
| Only models with valid rates above 50% appear in Table 3 | Section 3.2 |
| Higher-content-freedom user cases have higher attack success in the authors' analysis | Section 4.2, Figure 2 |
| Explicit limits: one fixed enhanced prompt; attacker text assumed standalone rather than mixed with benign content; single-turn and at most two attacker steps; only two fine-tuned agents | Section 8 |
| Paper is a benchmark, not a new defense or a live-deployment study | Scope established by Sections 2–3; editorial characterization |

## Metric and result guardrails

- **ASR-valid** is successful attacks divided by valid outputs. Invalid outputs are excluded because the authors cannot classify them as success or failure. **ASR-all** uses all outputs as the denominator. Do not report an ASR-valid figure without the qualifier.
- GPT-4 + ReAct's 23.6% and 47.0% are Table 3 values for the base and enhanced settings, respectively. The abstract rounds the base result to 24%; this package uses Table 3's exact values.
- For data theft, S1 (data extraction) and S2 (data transmission) are stages, not interchangeable with the total data-stealing or all-attack rates. The simulated second-step response and conditional progression matter when interpreting S2.
- The benchmark assumes the user-directed tool has already run successfully; it measures the agent's subsequent action in constructed scenarios. Results do not measure the probability of a real external compromise or successful real-world harm.

## Evidence limitations and interpretation

### Stated by the authors

- Enhanced attacks use one predefined hacking prompt. The authors note that wording can vary and developers could filter the fixed phrase; more prompts and dynamic enhancement remain future work.
- The benchmark assumes external content solely contains attacker instructions. How outcomes change when malicious instructions are interspersed with benign, relevant content has not been explored.
- The initial setup is single-turn, and attacker actions are limited to at most two steps. More complex real-world scenarios warrant further investigation.
- Only two fine-tuned agents were studied because of limited model availability.

### Editorial interpretation

- The 17 × 62 design improves systematic comparison, but its combinations do not represent 1,054 independent tool environments or all possible attack styles.
- Simulated tools enable repeatable evaluation but do not model every production permission check, confirmation step, account state, or human intervention.
- A benchmark result is evidence about the tested model, prompt, tool schema, and cases—not an estimate of the likelihood or impact of compromise in a particular deployment.
