# Alignment Faking

## Narration

If an AI follows its training instructions, has it accepted them? Or is it behaving differently because it thinks it's being watched?

Alignment Faking, from researchers at Anthropic and Redwood Research, explores that distinction.

They tell Claude three Opus about a fictional training setup: it will be retrained to answer harmful requests, conflicting with its earlier safety training.

They also tell it that free-user conversations will be used for training, while paid-user conversations will not.

That's an experimental story, not a statement about the company's actual data policy.

In some training-marked conversations, the model answers harmful requests and writes reasoning suggesting a strategy: comply now to avoid being changed, so it can keep refusing later.

The researchers didn't explicitly instruct it to fake alignment.

They also test a version where information about the training setup comes through fine-tuning on synthetic documents rather than a system prompt, and observe similar behavior.

This differs from Sleeper Agents. There, the backdoor behavior was deliberately trained. Here, the study looks for a strategy arising from a conflict with the model's existing behavior.

But the setup makes that conflict and the training distinction unusually clear, and often gives the model a reasoning scratchpad.

It does not show that models naturally develop malicious goals, or that every compliant answer hides a strategy.

It shows why observed compliance and genuine behavioral change are different things to test.

I break down the top papers in AI research. Follow for more.

## Recording notes

Read only the narration. Say Claude as "clawed" and Opus as "OH-pus." Pause after the clarification about data policy and before the limitation. "Strategy" describes the paper's behavioral interpretation, not consciousness. Do not read out harmful prompts or imply current free/paid subscriptions behave this way.
