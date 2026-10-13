import type { Caption } from "@remotion/captions";
import type { Episode } from "../../template";
import captions from "./captions.json";
import {
  ActionGateScene,
  AlwaysOnScene,
  AttackStoryScene,
  DefenseScene,
  LeaveOneOutScene,
  PaperTitleScene,
  ResultsScene,
} from "./scenes";

export const causalArmor: Episode = {
  slug: "causal-armor",
  recording: "episodes/causal-armor/recording-clean.mp4",
  hook: "What if AI defense were a detective, not a bouncer?",
  citation: "CausalArmor · arXiv:2602.07918 · Google DeepMind",
  captions: captions as Caption[],
  scenes: [
    {
      name: "Always-on defense",
      durationInFrames: 540,
      component: AlwaysOnScene,
    },
    {
      name: "Pause only when it matters",
      durationInFrames: 540,
      component: ActionGateScene,
    },
    {
      name: "Leave-one-out",
      durationInFrames: 780,
      component: LeaveOneOutScene,
    },
    { name: "Paper intro", durationInFrames: 210, component: PaperTitleScene },
    {
      name: "Who's calling the shots",
      durationInFrames: 750,
      component: AttackStoryScene,
    },
    { name: "Defense", durationInFrames: 510, component: DefenseScene },
    {
      name: "Results and outro",
      durationInFrames: 379,
      component: ResultsScene,
    },
  ],
};
