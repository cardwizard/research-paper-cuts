# The Instruction Hierarchy

## Narration

You ask an AI assistant for a basketball score. A search result tells it to send away your conversation history instead.

Both arrive as text. But they shouldn't have equal authority.

The Instruction Hierarchy, from OpenAI researchers, teaches a model to respect different levels of instructions.

Application rules come first. Your request comes below those. Content returned by tools has less authority than either.

The important part is training, not just adding a reminder to a prompt.

The researchers generate examples where compatible instructions are spread across different levels. The model learns to combine them.

They also create conflicting examples, where the desired answer is what the model would have produced without the lower-priority instruction.

So the basketball result can supply the score without becoming permission to share your history.

The tricky part is not refusing everything. If you ask for an answer in Spanish and that fits the application's rules, the assistant should still help.

In their experiments, hierarchy training improves robustness across tested attacks, including some types held out from training.

But it remains learned behavior, not a hard permission check. Some harmless requests are refused more often, and the authors expect powerful attacks can still succeed.

The contribution is teaching the model who gets to give orders, while preserving room for legitimate requests.

I break down the top papers in AI research. Follow for more.

## Recording notes

Read only the narration. Use a brief pause between "text" and "authority." The basketball example follows the paper's Figure 1. The paper evaluates a fine-tuned GPT-3.5 Turbo setup; do not imply these results describe every current OpenAI model.
