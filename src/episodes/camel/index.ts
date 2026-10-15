import type { Caption } from "@remotion/captions";
import type { Episode } from "../../template";
import captions from "./captions.json";
import {
  AuthorityScene,
  IsolationScene,
  PaperScene,
  PlannerScene,
  PolicyScene,
  ReaderScene,
  ResultsScene,
  VendorScene,
} from "./scenes";

export const camel: Episode = {
  slug: "camel",
  recording: "episodes/camel/recording-clean.mp4",
  hook: "Can an email steal a file?",
  bookendPaperTitle: "Defeating Prompt Injections by Design",
  backgroundAudio: "brand/audio/soft-beat.wav",
  facePosition: "39% 24%",
  citation: "CaMeL · arXiv:2503.18813v2",
  captions: captions as Caption[],
  scenes: [
    {
      name: "The vendor's email",
      durationInFrames: 739,
      component: VendorScene,
    },
    {
      name: "Reading becomes following",
      durationInFrames: 268,
      component: AuthorityScene,
    },
    { name: "The paper", durationInFrames: 224, component: PaperScene },
    { name: "Planner", durationInFrames: 360, component: PlannerScene },
    { name: "Reader", durationInFrames: 495, component: ReaderScene },
    {
      name: "Isolation and harness",
      durationInFrames: 535,
      component: IsolationScene,
    },
    {
      name: "Poisoned data and permissions",
      durationInFrames: 905,
      component: PolicyScene,
    },
    {
      name: "Evidence and limits",
      durationInFrames: 788,
      component: ResultsScene,
    },
  ],
};
