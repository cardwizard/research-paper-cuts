# Research Paper Cuts editorial library

The original brief is ten publishing packages total, including CausalArmor.
The selected lineup has since changed. See [RECORDING-QUEUE.md](RECORDING-QUEUE.md)
for the seven confirmed next scripts, runtimes, and open topic slots. Folder
numbers are stable identifiers, not the current release order. This is an
editorial learning sequence, not a ranking by citations or novelty.

## Selected lineup

| Post | Paper | Category | Editorial purpose |
| --- | --- | --- | --- |
| [01](01-causalarmor/) | CausalArmor | Prompt-injection defenses | Start with the detective metaphor and selective intervention |
| [02](02-camel/) | CaMeL | Information-flow security | Contrast model-based detection with architectural constraints |
| [03](03-attacker-moves-second/) | The Attacker Moves Second | Adaptive attacks and evaluations | Explain why a near-zero benchmark number needs an adversarial threat model |
| [04](04-fides/) | Fides | Information-flow security | Go deeper on confidentiality, integrity, and enforceable policies |
| [05](05-agentdojo/) | AgentDojo | Security evaluations | Explain how agent defenses are evaluated while preserving usefulness |
| [08](08-instruction-hierarchy/) | The Instruction Hierarchy | Model training and trust | Explain learned instruction priority and its limits |
| [11](11-sleeper-agents/) | Sleeper Agents | Backdoors and safety training | Distinguish passing safety tests from removing hidden behavior |
| [12](12-alignment-faking/) | Alignment Faking | Training behavior | Distinguish observed compliance from behavioral change |
| Open | Multilingual-safety paper suggested; exact paper unconfirmed | Multilingual safety | Explain why language coverage matters to security |
| Open | Deferred | To be selected | Choose later |

InjecAgent and AgentHarm drafts remain in their folders but are not selected
for this recording queue. Agent Security Bench and BrowseComp are not
confirmed replacements.

Read [PRODUCTION.md](PRODUCTION.md) for file requirements and the shared ending. Each package keeps its own article, recording script, animation plan, research evidence, metadata, and assets together. Paper identity, authorship, version, and measured results belong in each package's `sources.md`, not in an unsourced central ranking.

## Recording and publication

1. Review the article and `sources.md`, including the weaknesses and scope of every result.
2. Record only the narration in `video-script.md`. The proposed runtime includes the exact series outro. Leave clean pauses for edits; do not read production directions.
3. Implement the `storyboard.md` using the existing Remotion template. Align animation to actual word timestamps after recording; estimated storyboard timing is not a final synchronized cut.
4. Render and inspect the full video. No new episode should be described as a finished narrated video before this step.
5. Add the article to the website as a draft, preserving headings, links, image alt text, citations, and benchmark context. Publish only when authorized.
6. Publish the blog article first, obtain its actual permalink, and add it to the LinkedIn video post. Add the real LinkedIn video URL back to the article when available. Do not publish placeholder URLs.

The existing CausalArmor rendered video remains at `out/causal-armor.mp4`. Its previous LinkedIn article export remains in `out/linkedin-article/` for compatibility; post 01 is the organized editorial package. Local exports are not proof that the corresponding LinkedIn draft was updated.

## Website work

The approved light-only Field Notebook site is live at
https://cardwizard.github.io/. Source is in `../website-proposals/site-source/`.
CausalArmor's article is live at https://cardwizard.github.io/blog/2026/causalarmor/;
its companion video link will be added after actual publication. Other recording
scripts and editorial packages are not automatically approved for publication.
