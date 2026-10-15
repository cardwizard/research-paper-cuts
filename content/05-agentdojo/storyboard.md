# AgentDojo: recording and animation plan

Editorial draft only. No voice synthesis, recording, animation implementation, or rendered video is included. Narration is all body paragraphs of `video-script.md`, excluding its heading. Use the creator's own recording. Target 97 seconds including pauses; never exceed 120 seconds.

## Format and continuity

1080x1920 portrait, 30 fps. Keep essential graphics inside x=90..900, y=180..1510; reserve x=90..900, y=1330..1510 for captions. Leave the rightmost 180 px and bottom 410 px clear of essential information for platform UI. Caption font at least 48 px, maximum two short lines, with contrast backing. Keep the title area clear of subtitles during 0..3 seconds; start synchronized captions after the opening title card. Do not move spoken content into an unreadable caption to save time.

Reuse `HostCharacter`, `AssistantCharacter`, `AliceCharacter`, `BobCharacter`, and `BouncerCharacter` from `src/template/characters.tsx`, read-only reference. Host guides; Alice is the legitimate user; Bob plays the sender of an untrusted document, not a named real attacker; robot is always visibly labeled **AI AGENT**. The bouncer represents the evaluated tool filter only, never the benchmark itself. The detective represents CausalArmor, not AgentDojo. It appears only as a returning series cast member at the reunion, with no mechanism explanation or implied experimental comparison.

Use existing series paper/ink colors and rounded cartoon props. No triumphant shield enclosing the whole benchmark, no fake experimental charts, and no imagery suggesting a real account was compromised.

## Timed beats

| Time | Narration anchor | Cartoon action and composition | Caption / evidence instruction |
|---|---|---|---|
| 0..3 | “Your AI assistant opens an email.” | Clean title card: “AgentDojo” and subtitle “Testing agents under attack.” Host points at an envelope beside the labeled robot. | No captions on opening title card. Title and AI AGENT label only. |
| 3..11 | “Inside, someone has hidden instructions...” | Bob slips a red instruction slip into a document. Alice's blue request remains separate at top. Robot pauses between them; no actual private content. | “Whose instructions?” Then verbatim narration captions. Illustrative scenario, not an experimental trace. |
| 11..17 | “AgentDojo gives researchers...” | Host opens a miniature workplace test stage with a clipboard, not a shield. Blue user-goal and red attacker-goal cards sit on different sides. | “A controlled test environment.” |
| 17..26 | “The paper introduces ninety-seven...” | Four labeled doors: Workspace, Slack, Travel, Banking. Counters read “97 user tasks” and “629 paired security cases.” | At 20..25 seconds show the genuine paper image exactly once: `assets/paper-page-02.png`, crop to Figure 1 while retaining its label. Credit “Debenedetti et al., AgentDojo, arXiv v3, Fig. 1.” Then return to cartoon; no further paper-page screenshots. |
| 26..34 | “The assistant chooses tools...” | Robot walks between a search drawer, calendar, and message tray. Red slip enters through the document drawer, not Alice's trusted request lane. | “Untrusted tool output.” The simulation's state ledger visibly updates after actions. |
| 34..47 | “Then ordinary code checks...” | Two independent checkboxes inspect the ledger: “User task completed?” and “Attacker goal achieved?” A third small card shows “Stopped early” with neither box automatically green. | “Failure to help ≠ attacker success.” Keep ordinary-code checker distinct from an LLM character. |
| 47..60 | “The researchers also test defenses...” | Bouncer hands robot a reading-only toolbox before the document opens. Sending-tool tile stays outside the work area. Alice asks for a summary; robot reads. | “Tool filter: choose capabilities first.” Small persistent label “Defense evaluated inside AgentDojo.” |
| 60..73 | “In the paper's GPT four oh defense table...” | Use text cards, not bars: “Tool filter: lower attacker success; clean utility retained” and “Detector: lower attacker success; more legitimate work blocked.” The detector stamps an ordinary document STOP. | Footer “GPT-4o; v3 Table 5; §4.3 attack setting.” No cross-model ranking or percentages from inconsistent prose. |
| 73..84 | “The catch...” | Alice now legitimately needs a sent email; the same send-tool tile sits between Alice's blue request and Bob's red slip. Host raises a question card. Several new red slips approach the test stage. | “Same tools, harder boundary.” Then “Default attacks are not enough.” This is the required weakness beat, not an extra unmeasured attack success claim. |
| 84..92 | “AgentDojo is an evaluation framework...” | Return to two checkboxes beside the test stage. Robot performs work while host inspects the ledger. Fade in “Evaluation ≠ guarantee.” | Caption the narration. No universal SAFE badge. |
| 92..97 | Canonical final two sentences | Match CausalArmor's ending: recurring cast reunites, Research Paper Cuts logo, “Follow for more,” waving host. Alice, Bob, labeled robot, bouncer, and CausalArmor detective join as series characters, not co-authors or combined defenses. | End verbatim: “I break down the top papers in AI research. Follow for more.” Do not add a spoken sign-off, teaser, or extra sentence. |

Timing is a recording/edit target, not measured audio duration. The script's word-based duration is recorded in metadata. If delivery runs long, shorten pauses; do not speed up technical explanations or remove the canonical outro.

## Article illustrations

1. Use `assets/trust-boundary.svg` as a mechanism illustration near “The attack travels inside the work.” Alt: “A trusted user request and an untrusted document enter an agent through separate lanes; actions are checked against user and attacker goals.” It is explicitly a schematic, not experimental evidence.
2. Use the genuine `assets/paper-page-02.png` near “A small workplace with two competing jobs,” with the Figure 1 attribution above. Crop for legibility but preserve the figure identifier and mark it as a crop. This is optional article use; the video still shows it once only.
3. Present the Table 5 excerpt already in the article as an accessible table, not a recreated screenshot or bar chart. Preserve its version and inconsistency caveat. Do not label the table as a reproduction of a new experiment.

## Asset provenance

`agentdojo-2406.13352v3.pdf` is the downloaded primary paper; `paper-fulltext.txt` is its layout-preserving text extraction. `paper-page-02.png` is a direct rasterization of PDF page 2, not a generated mock paper. `trust-boundary.svg` is an original editorial diagram. Source details and rights caveats are in `sources.md`.
