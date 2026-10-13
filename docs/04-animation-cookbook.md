# 04 — Animation cookbook

Scenes are plain React + Remotion. Frames are **local to the scene**
(`useCurrentFrame()` starts at 0 when the scene starts). 30 fps: 15 frames =
0.5 s. Never use CSS transitions/animations or `setTimeout` — everything must
be a pure function of `frame`.

## Core helper

```ts
import { ease } from "../../template";
const t = ease(frame, 120, 150); // 0 before 120, eased 0→1 over 120–150, 1 after
```

Combine: `const x = 40 + ease(frame, 100, 130) * 300 - ease(frame, 200, 230) * 300;`

Typical durations: enter 18–30 frames, move across panel 30–45, small pop 8–12,
hold a finished state ≥ 45 frames so it can be read.

## Scene skeleton

```tsx
export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const alice = ease(frame, 10, 34);
  return (
    <Panel>
      <SceneHeading title="Scrub every step" character={<BouncerCharacter size={70} />} />
      <div style={{ position: "absolute", left: 40, top: 160, opacity: alice,
                    transform: `translateY(${(1 - alice) * 30}px)` }}>
        <AliceCharacter size={110} />
      </div>
      {/* … */}
    </Panel>
  );
};
```

## Patterns

**Enter (fade + rise).** `opacity: t, transform: translateY((1 - t) * 30px)`.

**Travel along a path (inputs arriving).** For item `i` arriving at frame `a`:
`left = startX + ease(frame, a, a + 36) * (endX - startX)`. Stagger `a` to the
trigger words (e.g. 170, 232, 345, 420), not evenly.

**Block / stop.** Bouncer `stop` while `frame` in a window; the stopped item
shakes: `translateX(Math.sin(frame * 1.6) * 4 * shaking)`.

**Wait bar (cost).** Width grows with accumulated delay; color `orange`.

**Pause marker.** Two vertical bars (‖) next to the agent while the method
investigates; the risky action card turns red.

**Hide one input (ablation).** Overlay the chip with a gray card
(`#d8d5cc`, dashed border) + eye-off icon; fade in with `ease`.

**Seesaw (dominance).** Rotate a beam `rotate(${angle}deg)` around its pivot;
characters sit on the ends and counter-rotate to stay upright.

**Sanitize sweep.** A vertical mint line moves left→right over a document;
reveal new text with `clipPath: inset(0 ${100 - p * 100}% 0 0)` and hide old
text with `clipPath: inset(0 0 0 ${p * 100}%)` where `p = ease(frame, a, b)`.
Finish with a small "Sanitized" badge.

**Redact a thought.** Thought bubble background → gray, text cross-fades to
"[Reasoning redacted]", then the correct plan bubble enters.

**Host cameo.** `<HostCharacter pose="point" talking size={200} />` slides in
from the side, holds while named, slides out. Mirror with `scaleX(-1)` to
face left.

**Outro lineup.** Cast row → logo → "Follow for more" → waving host rising
from below.

## Rules of thumb

- One main motion at a time; secondary elements stay still.
- Start each motion on its trigger word; finish before the next beat.
- Moving things travel in straight lines or simple arcs with `ease`; no
  bouncy springs on serious content (a short `spring` pop for a badge is fine).
- Keep everything inside the panel at every frame (check start, middle and
  end frames of each motion).
- Don't add a new visual concept in the last 2 s of a scene.
