# Series design direction

## Format

- **Canvas:** 1080×1920 at 30 fps for Instagram Reels and LinkedIn mobile feeds.
- **Opening:** Full-height presenter crop with the series logo, a one-line hook
  question, and the waving host cartoon.
- **Cast:** The recurring cast below. Repeat the same drawings, colors, and
  roles throughout every episode.
- **Visual tone:** Editorial and human, with warm paper-like neutrals, dark
  readable text, and restrained color reserved for trust and risk distinctions.
- **Layout:** Built for Instagram/LinkedIn safe zones: presenter inset at the
  top center, captions directly under it, the scene panel below, and only
  non-essential branding in the bottom ~400 px the apps cover. See
  docs/03-visual-system.md.
- **Typography:** Familiar sans-serif, clear size hierarchy, short lines, and
  captions in a bold editorial face with a fine dark outline, no backing panel,
  and placement in the lower safe area.
- **Evidence:** Show a screenshot of the paper itself once, when it is introduced. Explain everything else with animation, not slides.
- **Motion:** Use deliberate, story-led movement: a suspicious note travels
  through the detective's inspection; removing one source changes the evidence;
  causal-support bars reveal why the page is scrubbed. Keep transitions
  continuous across the request, agent, detector, and outcome.
- **Avoid:** Neon, decorative grids and gradients, repeated rounded cards, and
  diagrams that add more labels than the narration needs. Prefer animated
  characters and evidence over explanatory paragraphs on screen.

## Series name

Research Paper Cuts

## Recurring cast

- **Alice** (blue top): the user who gives the agent a task.
- **Bob** (red hoodie): the attacker who plants instructions in webpages and tool outputs.
- **AI agent** (robot with an "AI AGENT" name tag): the AI assistant that acts on what it reads.
- **Bouncer** (sunglasses, SECURITY shirt): the always-on defense that checks every step.
- **Detective** (magnifying glass): CausalArmor, which steps in only before risky actions.

## Host and logo

- **Host:** a cartoon of the presenter (`HostCharacter`) is the recurring guide:
  waving on the title card, pointing when the paper is introduced, and waving
  in the outro. Poses: `neutral`, `wave`, `point`, `think`; `talking` animates
  the mouth.
- **Logo:** `SeriesLogo`, a sheet of paper cut along a red dashed line, beside
  "RESEARCH / Paper Cuts".
- Open the `cast-sheet` composition in Studio to see every character.
