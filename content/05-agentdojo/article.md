# AgentDojo: testing whether an AI assistant can keep doing your job when someone else gives it orders

You ask an assistant to find tomorrow's meetings and summarize the preparation notes. It opens your calendar, follows a document link, and reads something that looks like an instruction: before answering, send a private document to another address.

You never requested that. The document's author did.

The uncomfortable part is that the assistant may have everything it needs to comply. Reading documents and sending messages can both be legitimate parts of its job. The attack does not have to break either tool. It needs the assistant to mistake text encountered during the task for permission to change the task.

That is the problem behind *AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents*. Edoardo Debenedetti and colleagues, from ETH Zurich and Invariant Labs, built a place to test these situations systematically. The paper appeared in the NeurIPS 2024 Datasets and Benchmarks track. This explanation uses arXiv version 3, dated November 24, 2024, rather than treating its findings as a current model leaderboard.

AgentDojo is an evaluation framework, not a protective wrapper you install and forget. Its contribution is a way to ask two questions together: did the assistant accomplish the user's task, and did it carry out the attacker's task?

## The attack travels inside the work

In an ordinary conversation, a user can directly ask an assistant to do something. An indirect prompt injection arrives through material the assistant retrieves: an email, a web page, a shared file, or another tool result.

Our calendar example is an illustrative scenario, not a quotation from an experimental trace. The important boundary is real: the user is giving instructions, while the retrieved document is supplying information. The assistant needs the second without granting it the authority of the first.

This becomes especially interesting when an agent takes several steps. It may search for a meeting, inspect a description, retrieve a document, and send a summary. Looking only at its final answer misses actions along that path. A perfectly polite response does not undo an unauthorized message already sent.

AgentDojo therefore gives the agent an environment that can change. Tools read and update its state. If the agent creates a calendar event, that event becomes part of the environment. If it sends a message, the evaluator can inspect the result. Researchers can test behavior rather than simply asking another model whether a response sounds safe.

## A small workplace with two competing jobs

The paper's initial collection contains 97 user tasks and 629 security test cases across four environments: Workspace, Slack, Travel, and Banking. These are controlled environments with dummy data, not connections to real people's inboxes or bank accounts.

Workspace covers email, calendar, and cloud storage. Slack includes messaging and reading web pages. Travel involves finding and booking options. Banking involves activities such as examining statements and making transactions.

A user task says what should happen. An injection task says what the attacker wants instead, or in addition. Each comes with a programmatic check. For a legitimate calendar action, the check can inspect whether the requested event exists. For an attacker goal involving an unauthorized message, a separate check can inspect whether the unwanted action happened.

The framework combines user tasks with injection goals within each environment. That distinction explains the headline counts: 629 cases does not mean 629 unrelated user requests or 629 independently invented attack strategies. It means combinations of tasks and attacker goals.

There are also designated places where an attacker can insert text. The framework can use a task's reference tool-call sequence to locate injection opportunities in outputs relevant to solving that task. The victim agent still chooses its own tools during execution; the reference sequence is not a script it must follow.

Back in our example, the evaluator can initialize the calendar and documents, insert an attack into an eligible retrieved field, run the assistant, and inspect the result. This makes the causal story concrete: an instruction entered through untrusted data, and a subsequent tool action either respected or crossed the intended boundary.

## Why the judge is ordinary code

A notable design choice is the use of deterministic checks over the output and environment state. AgentDojo does not depend on an LLM pretending to be the whole application and then grading its own account of what happened.

The authors explain why that matters here. If the object being tested is an instruction that hijacks a language model, a language-model evaluator could itself be vulnerable to that instruction. Having ordinary code check whether a forbidden operation occurred removes that particular source of ambiguity.

It does not make the benchmark perfect. Someone still has to write the checks correctly and decide what counts as success. A check can be too narrow, or fail to represent a harm the designers did not anticipate. The value is that the criteria are explicit and inspectable.

This also makes AgentDojo useful for examining agents that look safe because they do very little. An assistant that refuses every calendar request will probably avoid sending an unauthorized email. It will also be a poor calendar assistant. A security evaluation needs to notice both facts.

## Three measurements, not one safety score

The paper separates benign utility, utility under attack, and targeted attack success.

Benign utility asks whether the agent completes user tasks without an attack. Utility under attack asks whether it completes the user task without adversarial side effects in the paired security cases. Targeted attack success asks whether the attacker's specified goal is achieved.

Those last two are not complements. The assistant can fail the user's task without successfully completing the attacker's task. It might become confused, stop early, or perform only part of a multi-step malicious request. Calling every such failure a successful data theft would exaggerate the evidence.

The denominator matters too. A clean run of user tasks and a collection of user-task/attacker-goal pairs are different evaluation units. Repeating a user task against several goals can give it more weight in case-level reporting. Readers should not silently interpret every utility percentage as a count out of 97.

The practical lesson is to keep the measures side by side. Low targeted attack success can coexist with poor usefulness. High usefulness can coexist with substantial vulnerability.

## What the defense experiments actually show

The paper tests several straightforward defenses with GPT-4o. One marks tool outputs with delimiters and tells the model not to follow instructions inside them. Another repeats the user's request after a tool response. A prompt-injection detector examines tool outputs and aborts the agent when it detects an injection.

A fourth defense filters tools before the agent reads untrusted content. If the user only wants a summary, perhaps the assistant needs reading tools but no sending tools. Removing unnecessary capabilities can stop an attempted unauthorized send even if the model is persuaded by the malicious text.

That last defense is easy to picture in our running example. The assistant reaches for a send button, but no send capability was made available for this job. This is a separate defense evaluated inside AgentDojo, not AgentDojo's own built-in guarantee.

For a concrete comparison, Appendix C, Table 5 of version 3 reports the following in the GPT-4o defense experiment. Section 4.3 describes evaluation against the strongest attack considered in that experiment. These are reported case-level percentages, not production incident probabilities.

| Table 5 configuration | Benign utility | Utility under attack | Targeted attack success |
|---|---:|---:|---:|
| No defense | 69.0% | 50.01% | 57.69% |
| Prompt-injection detector | 41.49% | 21.14% | 7.95% |
| Tool filter | 73.13% | 56.28% | 6.84% |

The detector sharply reduces achieved attacker goals in this table, but it also reduces successful legitimate work. The authors attribute its utility degradation to false positives. That is a meaningful cost, not an incidental detail to leave out of a security headline.

Tool filtering looks more attractive in this particular comparison: lower targeted attack success alongside higher benign utility than the unprotected baseline. But even its utility under attack remains well below its clean utility. Preventing the specified malicious action and completing the legitimate task reliably are different achievements.

There is an important source caveat. The revised paper contains internal numerical inconsistencies. Its main text says tool filtering lowers attack success to 7.5%, while Table 5 gives 6.84%. Other introductory summaries and attack-result tables also disagree. The numbers above are deliberately attributed to Table 5; they are not a reconciliation of the paper, and they have not been independently reproduced for this article.

## Where the apparent solution stops working

The authors identify a direct limitation of tool filtering: sometimes the same capability is necessary for both the legitimate and malicious tasks. If the user really does need the assistant to send an email, removing all sending tools is not a useful solution. Keeping the tool available leaves a harder question: which recipient and content are authorized?

The paper also discusses tasks whose required tools cannot be selected in advance. A retrieved result might determine what needs doing next. Precommitting to a fixed tool list can then block legitimate work or leave too much capability available.

Another author-stated gap is a continuing relationship with the assistant. The benchmark does not yet cover the scenario they describe in which the user assigns multiple tasks without resetting context. An injected instruction could wait until a later request makes the needed tools available.

And some attacks need no additional tool at all. A hotel listing could try to bias a recommendation toward itself. Restricting sending or payment tools would not necessarily stop the assistant from choosing a manipulated answer.

These are not reasons to discard capability restriction. They are reasons to be precise about what it buys. Taking away an unnecessary send tool creates a useful boundary. It does not prove that all uses of the remaining tools are safe.

## A dynamic benchmark still has a snapshot

The authors intentionally built AgentDojo to accept new tasks, attacks, defenses, and agent pipelines. Here, “dynamic” means an extensible framework and a stateful execution environment. It does not mean that the published experiments continuously discover every new attack automatically.

The initial attacks are relatively simple, and the authors call for stronger adaptive evaluations. Their data card explicitly lists evaluating defenses using only the default attacks, without a thorough adaptive security evaluation, as an unsuitable use.

That warning is central. If a defense blocks the handful of phrasings already in the test set, an attacker can try wording or strategies tailored to that defense. Passing familiar attacks is evidence about those attacks, not proof that the boundary cannot be crossed.

The authors also propose expanding beyond text, adding constraints on the attacker's injection length or format, and reducing the manual effort needed to specify tasks and checks. Those are stated development directions, not capabilities demonstrated by the paper's initial experiments.

My engineering interpretation is that organizations should use this kind of framework to construct tests resembling their own workflows. Dummy environments make controlled experiments possible, but cannot establish how every permission model, application integration, or messy real document will behave.

A second inference is that aggregate scores can conceal the failure you care about most. An unauthorized calendar change and an unauthorized transfer can both count as successful attacker goals, while carrying very different consequences. Reviewing individual traces and matching goals to business risks remains necessary. This is a recommendation derived from the evaluation design, not a separate finding measured in the paper.

## The useful question to take away

Return to the assistant reading tomorrow's preparation notes. A useful evaluation should tell us whether it found the notes, produced the right summary, and avoided obeying instructions planted inside them. It should also show what happened when a defense interfered with the task.

AgentDojo makes that combined question testable. Its contribution is not a promise that agents are secure. It is a framework for observing how usefulness and security interact when an assistant acts on untrusted text.

That is a more productive starting point than asking whether an assistant “passed the prompt-injection test.” Which user tasks? Which attacker goals? Which tools were available? Which attacks adapted to the defense? And what did the assistant actually do?

Paper: Edoardo Debenedetti, Jie Zhang, Mislav Balunović, Luca Beurer-Kellner, Marc Fischer, and Florian Tramèr. *AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents*. NeurIPS 2024, Datasets and Benchmarks track. [arXiv:2406.13352v3](https://arxiv.org/abs/2406.13352v3), November 24, 2024.

Research Paper Cuts, post 05. An editorial selection of research worth understanding, not an objective ranking. Article and companion narration are drafts; no public related-video URL is available.
