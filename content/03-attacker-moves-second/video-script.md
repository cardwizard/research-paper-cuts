# The Attacker Moves Second

## Narration

Imagine testing a lock with a box of old keys. None opens it. Does that mean nobody can break in?

Not if the attacker gets to study the lock and try something new.

That's the argument in The Attacker Moves Second, a paper about evaluating language-model defenses.

Many defenses are tested against a fixed collection of attacks, or an automated attacker that wasn't designed for that particular defense.

The researchers instead adapt their attacks to the system being tested, using automated search and human red-teamers.

They examine twelve defenses, including prompts, specially trained models, and detectors. Every one is bypassed in their evaluations.

But this isn't a single leaderboard. The experiments use different benchmarks and access assumptions, so their percentages shouldn't be lined up as if every defense took the same exam.

The paper also separates two problems: a malicious user trying to bypass a model's restrictions, and an outside source redirecting an innocent user's agent.

The common lesson is about the test, not just the attack. A reassuring score against familiar examples can hide weaknesses an adaptive adversary will find.

That doesn't make every guardrail useless. The authors note that detectors can still block less sophisticated attacks.

It means a security claim needs to explain who the attacker is, what they know, and how hard they were allowed to try.

I break down the top papers in AI research. Follow for more.

## Recording notes

Read only the narration. "Red-teamers" means people testing a system adversarially. Pause after the opening question and after "single leaderboard." The lock is an analogy, not the paper's experimental setup. Do not add a universal attack-success percentage; the experiments are not directly comparable.
