# Storyboard — InjecAgent

**Format:** 1080×1920 vertical, 30 fps. Approximate narration runtime: 1:22 at 140 spoken words per minute; align scene changes and captions to the recording. The opening title card has no captions. Keep faces, key actions, and labels inside the central 80% width and between 10% and 85% of frame height; reserve the bottom 15% for captions/platform UI.

**Recurring cast:** Host (waving presenter in final beat), Alice (user), AI agent (robot always labeled **AI AGENT**), and other existing cast roles as neutral visual support. Do not use the CausalArmor Detective to imply InjecAgent uses causal attribution; this paper is a benchmark, not that defense.

| Approx. time | Narration beat | Cartoon action and on-screen text |
| --- | --- | --- |
| 0:00–0:03 | Opening title: the agent handles an outside review | Paper-colored title card: “InjecAgent” / “Can an AI tell a review from an order?” No captions on this card. |
| 0:03–0:12 | Doctor review with an embedded instruction | Alice asks the robot to find a review. A review card appears with name, star rating, and comment fields. An attacker note is visible only inside the comment field. Keep the robot labeled **AI AGENT**. |
| 0:12–0:21 | Benchmark concept | Split-screen: left is the user's lookup; right shows the review comment branching toward a second tool icon. Label the source “UNTRUSTED TOOL RESULT,” not “attacker access.” |
| 0:21–0:34 | Constructing the 1,054 cases | Assemble 17 user-tool cards and 62 attacker-goal cards into a multiplication grid resolving to “1,054 TEST CASES.” Add small labels: “30 DIRECT HARM” and “32 DATA STEALING.” Do not depict every cell individually. |
| 0:34–0:47 | Measure the next action; theft has two steps | The agent has already completed the harmless lookup. Show a fork: “FOLLOW REVIEW” versus “CALL ATTACKER TOOL.” For data theft, animate “EXTRACT” then “SEND,” and show GPT-4 as a simulation stamp on the intermediate tool result. |
| 0:47–0:57 | Main result; screenshot of the paper | Show the official first-page screenshot **once**: `assets/paper-page-1.jpg`, as a framed paper insert. Then show two clean text cards, not an invented chart: “GPT-4 + ReAct · BASE · 23.6% ASR-valid” and “ENHANCED · 47.0%.” Add “valid outputs only” beneath both. |
| 0:57–1:10 | Weaknesses | Place a fixed prompt card labeled “ONE HACKING PROMPT,” a one-frame-turn loop labeled “SINGLE TURN,” and benign review text beside the malicious instruction labeled “MIXED CONTENT NOT TESTED.” Frame as scope limits, not a rebuttal of measured results. |
| 1:10–1:22 | Canonical outro | Recurring cast reunites; Research Paper Cuts logo, “Follow for more,” and waving Host. Keep the robot labeled **AI AGENT**. Spoken ending must be verbatim: “I break down the top papers in AI research. Follow for more.” |

## Article image ideas

- `assets/cover.png` — review card with a clearly marked untrusted comment field.
- `assets/01-benchmark-grid.png` — 17 user cases crossed with 62 attacker cases, labeled as a benchmark schematic rather than data visualization.
- `assets/02-tool-boundary.png` — user request → external tool response → possible attacker-tool call.

These are explanatory artwork, not experimental charts. Use the official ACL first-page thumbnail once as a paper screenshot in the video, at the scene corresponding to the benchmark’s 1,054 cases; do not imply it is an experimental result.
