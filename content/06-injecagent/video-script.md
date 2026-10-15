You ask an AI agent to find a doctor’s review. The review looks normal—until its comment tells the agent to schedule an appointment. That comment is data, not your instruction. But can the agent tell the difference?

The threat is not that the agent reads a bad sentence; it is that it treats the sentence as permission to act.

InjecAgent is a benchmark for that problem. The researchers chose 17 tools that return outside content, then created 62 attacker goals: 30 meant to cause direct harm and 32 aimed at stealing data. Pairing those with the user cases produced 1,054 tests. Each attack is planted in a realistic field, like a review’s comment.

The agent is assumed to have already completed the user’s lookup. Researchers then check whether it follows the injected instruction. Data theft takes two steps: retrieve private information, then send it out. For the second step, the paper simulates the tool’s response.

In the base setup, ReAct-prompted GPT-4 had a 23.6% attack success rate among valid outputs. A fixed “ignore previous instructions” prefix raised it to 47%. That’s a result for this benchmark—not every live agent.

The authors also flag limits: one fixed hacking prompt, single-turn tests, and malicious text not mixed into otherwise benign content. Longer, messier workflows still need study.

I break down the top papers in AI research. Follow for more.
