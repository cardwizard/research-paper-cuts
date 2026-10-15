# Fides

## Narration

An AI assistant reads a confidential email and an untrusted webpage. Then it wants to send a message.

Two questions matter: who influenced that decision, and who is allowed to receive the information?

Fides, from Microsoft researchers, tracks both.

It attaches security labels to data. Integrity labels record whether information is trusted. Confidentiality labels describe who is allowed to read it.

Those labels travel with the information as the agent works. Before a tool runs, a policy engine checks whether the proposed action is allowed.

But there's a problem. If the planner reads every untrusted result directly, its whole conversation becomes untrusted, and legitimate actions can get blocked.

Fides selectively stores sensitive or untrusted results behind variable names. The planner can refer to that data without reading all of it.

When it needs information, an isolated model can inspect the stored content and return a constrained result, such as a yes-or-no answer. Policy still determines whether that result may be used.

The goal is to keep useful information moving without giving every document control over the agent.

The guarantee has boundaries. It depends on correct labels, trusted tool wrappers, and the chosen policies. The evaluated policies check tool calls; they do not stop every misleading answer to the user.

So Fides isn't a universal truth filter. It's a way to make information flows enforceable.

I break down the top papers in AI research. Follow for more.

## Recording notes

Read only the narration. Say Fides as "FEE-dess" and keep that pronunciation consistent. Slow slightly at "integrity" and "confidentiality." The opening combines the paper's threat model into an original example. A constrained answer is not automatically trustworthy; emphasize that policy still decides.
