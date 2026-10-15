# AgentDojo

## Narration

Your AI assistant opens an email. Inside, someone has hidden instructions to send your private information elsewhere. Can it finish your task without obeying theirs?

AgentDojo gives researchers a controlled place to test that.

The paper introduces ninety-seven user tasks and six hundred twenty-nine security cases across email, messaging, travel, and banking environments.

The assistant chooses tools and changes a simulated environment. An attacker plants instructions in data those tools return.

Then ordinary code checks what happened: did the assistant complete your request, and did it achieve the attacker's goal? Those are different questions. Getting confused is not the same as successfully stealing information.

The researchers also test defenses. One limits available tools before the assistant reads untrusted content. If your task only needs reading, why leave a send button available?

In the paper's GPT four oh defense table, filtering tools reduces attacker success while preserving clean-task usefulness. A separate injection detector reduces attacker success too, but blocks more legitimate work.

The catch: tool filtering can fail when your task and the attack need the same tools. The authors also warn that testing only familiar attacks is inadequate.

AgentDojo is an evaluation framework, not a guaranteed defense. Its value is measuring useful work and harmful actions together.

I break down the top papers in AI research. Follow for more.

## Recording notes

Read only the narration. Say AgentDojo as "agent DOH-joh" and GPT-4o as "G P T four oh." Pause after "Those are different questions." This script uses the existing source-verified draft; the benchmark counts are from the paper's initial suite, not its current repository. The comparison is qualitative and refers to GPT-4o in Table 5.
