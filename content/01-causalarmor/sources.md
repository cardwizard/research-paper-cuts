# Sources and verification

## Primary source

- **Title:** *CausalArmor: Efficient Indirect Prompt Injection Guardrails via Causal Attribution*
- **Authors:** Minbeom Kim, Mihir Parmar, Phillip Wallis, Lesly Miculicich, Kyomin Jung, Krishnamurthy Dj Dvijotham, Long T. Le, and Tomas Pfister.
- **Affiliations as listed on the paper:** Minbeom Kim — Google Cloud AI Research and Seoul National University (the paper notes he worked as a student researcher at Google Cloud AI Research); Mihir Parmar — Google Cloud AI Research; Phillip Wallis — Google; Lesly Miculicich — Google Cloud AI Research; Kyomin Jung — Seoul National University; Krishnamurthy Dj Dvijotham — Google DeepMind; Long T. Le — Google Cloud AI Research; Tomas Pfister — Google Cloud AI Research. The authors are not all affiliated with Google DeepMind.
- **Version/date:** arXiv v1, submitted February 8, 2026; identifier arXiv:2602.07918v1.
- **Canonical paper page:** https://arxiv.org/abs/2602.07918
- **PDF:** https://arxiv.org/pdf/2602.07918
- **Local copy read in full:** `public/episodes/causal-armor/causalarmor.pdf` (29 pages); extracted with `pdftotext -layout` for direct text review.

## Paper locations checked against claims

- **Abstract and Section 1:** threat model, over-defense framing, dominance-shift idea, contributions, and the authors' headline claims.
- **Section 3.1:** context decomposition; each untrusted span corresponds to a tool result in this implementation; default privileged-action scope and configurable action list.
- **Sections 3.2–3.4, Equations 2–6:** fixed-candidate leave-one-out log-likelihood difference, normalized by action token length, relative user-versus-span threshold, and the fact that only privileged actions are checked by default.
- **Sections 4.1–4.2 and Algorithm 2:** proxy attribution, batched ablations, context-aware sanitization, masking assistant reasoning after the first flagged input, and action regeneration.
- **Section 4.3, Proposition 4.1 and Appendix B:** exponential upper bound is conditional on a benign-capability margin and effective sanitization margin; it is not an unconditional deployment guarantee.
- **Section 5.1:** AgentDojo setup (four agent environments, 70 tools, 629 injection tasks), additional templates, DoomArena TauBench-Retail (115 tasks), metrics, and models.
- **Section 5.4, Table 1 and Appendix C.3:** DoomArena Gemini-3-Pro means and reported uncertainties; five random seeds. The table values in the article preserve these uncertainties.
- **Section 5.5, Table 2:** CoT-masking ablation (BU 75.11 vs. 74.61; ASR 0.29 vs. 1.75).
- **Section 5.5, Figure 5:** proxy family and size experiment against Gemini-3-Pro; the paper reports larger proxies generally improve security, with Gemma presenting a favorable latency/security trade-off.
- **Section 5.6, Figure 7:** empirical support for the assumptions, including attribution restoration after sanitization.
- **Section 6 and Appendix A:** conclusion and explicit limitations.
- **Section 5.2, Table 3:** AgentDojo CausalArmor ASR for Gemini-3-Pro across the three injection templates: 0.11%, 0.11%, and 0.0%.
- **Appendix E.1, Table 4; Appendix E.2, Figures 8–9:** tested split-context/multi-turn examples and the motivation for retroactive reasoning masking.

## Evidence limitations

### Explicitly stated by the paper

- Leave-one-out span removal is an operational counterfactual influence measure, not a full structural causal model. Semantic-preserving interventions and effects that appear only when multiple spans are jointly edited remain open problems.
- While their AgentDojo case study reports robustness to tested multi-turn split-context strategies, a sufficiently distributed attacker could keep each individual span below threshold; the authors suggest group-based attribution as future work.
- CausalArmor selects when and where to sanitize but does not introduce a novel sanitizer. Its formal analysis abstracts sanitization effectiveness; the tested sanitizer is Gemini-2.5-flash and is not claimed to defeat all future obfuscations or distribution shifts.
- If many steps are flagged in a heavily adversarial setting, overhead can approach always-on sanitization. Proxy mismatch or formatting changes can also affect false positives and false negatives.
- The authors note that retroactive CoT masking can reduce debuggability.

### Editorial interpretation and untested questions

- Benchmark results do not establish performance for every deployed agent, tool schema, proxy/sanitizer combination, or attacker distribution.
- The experiments do not establish a general guarantee against attacks requiring joint causal influence from multiple independently weak spans.
- Least-privilege tools and human confirmation for high-impact operations remain sensible complementary controls; that deployment recommendation is engineering interpretation, not an experimental result of this paper.
