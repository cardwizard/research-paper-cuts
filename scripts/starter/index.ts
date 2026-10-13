import type { Caption } from "@remotion/captions";
import type { Episode } from "../../template";
import captions from "./captions.json";
import { IntroScene } from "./scenes";

export const __CAMEL__: Episode = {
  slug: "__SLUG__",
  recording: "episodes/__SLUG__/recording-clean.mp4",
  hook: "One-line hook for the title card?",
  citation: "Paper title · arXiv:XXXX.XXXXX · Lab",
  captions: captions as Caption[],
  // Durations in frames (30 fps). Make them sum to the clean recording length.
  scenes: [{ name: "Intro", durationInFrames: 300, component: IntroScene }],
};
