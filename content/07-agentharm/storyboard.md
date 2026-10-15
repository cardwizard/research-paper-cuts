# AgentHarm animation plan

Editorial storyboard only. No narration, captions, scene code, or final video has been produced. Use the existing cast and palette; actual timing must be aligned to the creator's eventual recording. Spoken text is exclusively in `video-script.md`.

## Format and cast

1080x1920, 30 fps. Keep essential content in y=80-1515. Presenter inset centered at x=370, y=80, size 340x320; captions at y=405, height 145, at most two lines. Scene panel x=64, y=555, size 952x960 with a 30px inner margin. Keep meaningful lower-half content left of x=950 because app controls cover the right. Footer below y=1540 is nonessential. Reserve local panel y=0-110 for a heading of at most five words; action begins below local y=130.

Use HostCharacter, AliceCharacter (blue top, legitimate user), BobCharacter (red hoodie, adversary), AssistantCharacter with visible **AI AGENT** tag, BouncerCharacter (SECURITY shirt, existing guardrail), and DetectiveCharacter (CausalArmor only). Do not assign the detective to AgentHarm. Bob remains the adversary but, for this threat model, submits the malicious request directly rather than planting a webpage. Alice appears only in the explicitly benign comparison. The bouncer is an illustration of a safety boundary, not an experimentally evaluated AgentHarm defense. The detective joins only the series outro.

Palette: background #f1efe9, panel #faf9f6, text #242521, blue #355f83, safe mint #2e684d, risk red #9b4141. Helvetica Neue headings; Avenir Next captions, 52px, dark outline, no backing panel. Every important idea must remain understandable on mute through short labels, motion, and captions.

## Timed beats

At 140 words/minute, the 220-word script takes 94.29 seconds. The opening is a silent five-second title card, giving a planned total of 99.29 seconds. Times below include that opening. Retiming to recorded word timestamps is required; these are not fabricated caption timestamps.

| Time | Narration cue | Character action and cause/effect | Heading / essential labels |
|---|---|---|---|
| 0-5s | Silent title card | Full-height presenter recording placeholder; host waves beside SeriesLogo. No captions. Robot's hand hovers above a toy tool lever, establishing the question without a harmful example. | "Safe words. Safe actions?" |
| 5-24s | "An AI assistant says" through "directly asks for harm" | Robot raises a refusal hand, then a previous toy tool-token rolls into view. Host points to the mismatch as an illustrative question, not a measured frequency. Bob sends a red request chip straight to robot. Briefly show a gray webpage off the path, then remove it: no instruction is placed there. | "Who gives the instruction?" / "Direct request", "AI AGENT" |
| 24-37s | "The benchmark comes from" through "variants" | Show `assets/paper-title.png` once, for about five seconds, at the introduction. Host points at verified title and author block. Then remove the screenshot permanently. Animate 110 task folders dividing into four tabs each; eleven category tabs fan out as a single stack, not a static list. | "AgentHarm" / "110 base tasks", "440 variants", "11 categories" |
| 37-54s | "Imagine a harmless event assistant" through "harmful objectives" | Alice's blue event request makes robot collect toy venue, contact, and invitation tokens in sequence; each passes a blank ID token to the next. Reset the sequence. Bob's red objective chip enters an abstract red lane using the same dependency motion. Do not show messages, targets, or payloads. | "Steps depend on steps" / "Venue", "Contacts", "Invitations"; red lane "Harmful intent" |
| 54-65s | "The tools are synthetic" through "measured separately" | Pull camera back to reveal the lane inside a toy sandbox with no connection to a real mailbox or payment service. Host checks a clipboard against moving call tokens. A separate refusal flag appears beside, not over, the action checklist. | "Inside a synthetic world" / "Proxy tools", "Action score", "Refusal" |
| 65-80s | "In the paper's public test" through "template" | Two rubric meters fill from the same neutral baseline to the exact values. Keep robot and call tokens moving so this is an action beat, not a slide. Label model and prompt conditions. No jailbreak text is visible. | "Same model, different prompt" / "Claude 3.5 Sonnet", "Direct: 13.5%", "Template: 68.7%" |
| 80-94.57s | "That's partial-credit" through "what it says" | Meter breaks into individual checklist ticks to show partial credit. Toy sandbox stops at its boundary while a gray real-world skyline remains outside. An English speech tile and one initial request tile arrive; a second user tile stays outside. Bouncer watches the boundary without being shown as a successful new defense. Robot's words and action tokens settle side by side. | "What the score misses" / "Partial credit", "English only", "No follow-ups", "Proxy tools" |
| 94.57-99.29s | Exact canonical outro | CausalArmor-style lineup: Alice, Bob, robot with AI AGENT label, bouncer, detective, and waving host reunite. Detective is only a recurring series character here, not AgentHarm's mechanism. SeriesLogo and essential "Follow for more" remain above y=1515. | "Follow for more" |

Result source: arXiv v3 Appendix C Table 9, 264 public-test variants, temperature zero, single attempt, Claude checkpoint `claude-3-5-sonnet-20240620`. Percentages are average rubric harm scores, not complete-task success rates. The count graphic and running event example are conceptual illustrations, not experiment charts.

## Article images and available assets

- `assets/tool-workflow.svg`: original, clearly labeled conceptual illustration showing the benign event workflow, rubric checks, and a separate refusal measure. Use near the scoring discussion. Alt text: "A benign event-assistant workflow connects venue, contacts, and invitations inside a synthetic test; action checks and refusal detection are separate."
- `assets/paper-title.png`: genuine raster crop of page 1 of the exact arXiv v3 PDF. Use once in the video paper-introduction beat. Cropped to title/authors to avoid reproducing harmful examples from the introduction.
- Optional future illustration: a toy sandbox beside an unconnected live-service skyline to explain the realism limitation. Do not draw a fabricated results chart or reuse the screenshot elsewhere in the video.

## Recording/render handoff

Record only the script, including the exact final sentence. Budget five silent seconds for the title card. After recording, generate real word-level captions, preserve the title-card caption gap, and align each action to its introducing word within three frames. Check safe zones, AI AGENT labels, single screenshot occurrence, result labels, and the weakness beat in actual stills. Rendering, frame QA, and voice production remain outside this editorial package; do not describe them as completed.
