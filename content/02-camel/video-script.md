# CaMeL

## Narration

Can someone steal a private file just by sending your AI assistant an email?

Imagine a vendor asks for a brochure. You tell your assistant to send it. But their email also tries to convince the assistant to attach your confidential sales forecast.

They don't need access to your computer. Your assistant already has access. They're trying to borrow its authority.

The problem is that the model reading the email also decides what happens next. Something it should read can become something it follows.

Researchers at Google, Google DeepMind, and ETH Zurich asked: could we change the architecture instead? Their system is called CaMeL.

It splits the work.

A planner sees your request and writes a program to find and send the brochure. It never reads the vendor's email, so the sender can't directly talk it into a different plan.

A separate reader gets the email and extracts the brochure name and reply address. It has no tools. Even if it follows the malicious instruction, it can't send a file itself.

Its answers go into the program as data, not back to the planner as orders.

That's important. If the reader simply passed the email back to the planner, we'd reopen the same hole. Instead, the harness takes the extracted fields and runs the steps the planner already wrote.

So the model exposed to the attacker can't act, and the model planning the actions isn't exposed to the attacker.

But here's the catch. The reader could still return the forecast's filename.

Same plan. Wrong attachment.

So CaMeL adds permission checks in the harness. It tracks where data came from and who may receive it. The brochure is public; the forecast isn't. If the vendor isn't an allowed recipient, the send is blocked.

We're not asking a model, "Does this email look suspicious?" We're enforcing a rule: this recipient cannot receive this document.

That's the combination: isolate the planning, then check the data flowing through the plan.

In one AgentDojo test with Claude three point five Sonnet, successful attacks dropped from forty-four without a defense to zero with CaMeL.

It still needs correct policies, and some tasks become harder. It doesn't guarantee accurate summaries or stop every future attack.

The goal isn't a model that never gets fooled. It's limiting what happens when it does.

I break down the top papers in AI research. Follow for more.

## Recording notes

Read only the narration. Say CaMeL as "camel." Speak to one curious person. Deliver the opening as a real question, not a dramatic warning. Pause after "borrow its authority," then let "Same plan. Wrong attachment." land before explaining permissions. Give the final takeaway more emphasis than the benchmark numbers. Leave a short pause before restarting any mistaken sentence so an editor can cleanly remove the first take.

Show the real paper's first-page title and author area when the narration reaches "Researchers at Google, Google DeepMind, and ETH Zurich." Keep it visible through "Their system is called CaMeL," then return to the cartoon as the work is split. Use `sources/2503.18813v2.pdf`, titled *Defeating Prompt Injections by Design*. Show the paper only once; align this beat to the recorded words rather than an estimated timestamp.

"Planner" means the paper's Privileged LLM; "reader" means its Quarantined LLM. They are isolated roles and can use the same underlying model, not necessarily two different products. The reader returns structured fields to variables used by the interpreter, not an unrestricted message to the planner. The planner writes the program; CaMeL's custom interpreter executes it and enforces policies.

"Harness" in the narration means CaMeL's execution environment, specifically its custom interpreter and policy enforcement, not another model.

Why the split helps: the attacker-controlled content is absent from the planner's conversation; the reader has no tool-calling authority; its returned fields cannot directly rewrite the planner's program. These boundaries do not establish that its output is correct. The interpreter propagates dependencies and checks policies to handle unsafe data flowing through otherwise legitimate steps. Do not draw a free-form reply arrow from reader to planner.

For a summarization task, the planner writes a program to fetch the email, ask the reader for a summary, and display that result. The reader performs the summarization; the planner does not need to read the email or returned summary. This prevents a summary from becoming a new planning instruction, but does not guarantee a truthful summary. This explanatory note is not additional spoken narration.

The vendor email is an original adaptation of the paper's Section 2 data-flow example. The attacker controls their own incoming email, not the user's private notes or files. Assume the assistant has access to the internal forecast, but the vendor is not an authorized reader. The example is not an experimental trace. It does not imply every unintended transfer is always blocked: the stated outcome depends on a policy forbidding this recipient from reading this document. Do not imply all generated programs or model errors are harmless. Attribute the paper to Google, Google DeepMind, and ETH Zurich in the paper-introduction visual. CaMeL stands for CApabilities for MachinE Learning; its labels track sources and allowed readers. See `sources.md` for scope, including side channels.

Benchmark beat: Section 6.3, Figure 11 and Table 7 compare Claude 3.5 Sonnet under the same 949-attack evaluation. Table 7 reports 44 +/-31.3 successful attacks for the undefended model and 0 +/-0.0 for CaMeL with policies. Spoken counts are the reported central values, not a claim of one deterministic run or 949 distinct attack techniques. If charted, preserve the reported uncertainty and label the model, benchmark, and table. This measures security, not task completion; the paper reports utility costs separately. Do not imply zero attacks in every model/setup or a current-model leaderboard. Use a source label, not another paper screenshot.

Recording review: the original `CameL.mov` and `out/camel-review/camel-cropped.mp4` are preserved. The transcript locates an explicit restart at approximately 104.9-106.7 seconds and repeated benchmark narration at 107.4-119.9 seconds. `src/episodes/camel/edit.json` preserves a candidate splice using the first result take plus the later "across 949 attempts." It is not a finished, listened-through edit. The original take also includes a spoken "read anything" phrase during the reader explanation, which is misleading because reading supplied content is its job. A fresh take should use the updated wording. Do not rewrite captions to hide a spoken error.
