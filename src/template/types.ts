import type { Caption } from "@remotion/captions";
import type React from "react";

export type EpisodeScene = {
  /** Label shown in Remotion Studio's timeline. */
  name: string;
  durationInFrames: number;
  component: React.FC;
};

export type Episode = {
  /** Composition ID and folder name, e.g. "causal-armor". */
  slug: string;
  /** Edited recording, relative to public/. */
  recording: string;
  /** Face framing for the cropped recording (CSS object-position). */
  facePosition?: string;
  /** Opening question shown on the title card. */
  hook: string;
  /** Character shown on the title card. Defaults to the waving host. */
  hookCharacter?: React.ReactNode;
  /** Footer citation, e.g. "Paper · arXiv:1234.5678 · Lab". */
  citation: string;
  captions: Caption[];
  /** Length of the full-screen title card. Captions start after it. */
  titleCardMs?: number;
  scenes: EpisodeScene[];
};

export const FPS = 30;
export const WIDTH = 1080;
export const HEIGHT = 1920;
export const DEFAULT_TITLE_CARD_MS = 5000;

export const episodeDuration = (episode: Episode) =>
  episode.scenes.reduce((total, scene) => total + scene.durationInFrames, 0);

/**
 * Portrait layout, designed around Instagram Reels / LinkedIn safe zones:
 * the apps overlay roughly the top ~80 px (header) and the bottom ~400 px
 * (username, caption, buttons). Everything important lives in y 80–1515.
 */
export const LAYOUT = {
  presenter: { top: 80, height: 320, width: 340 },
  captions: { top: 405, height: 145 },
  panel: { top: 555, left: 64, width: 952, height: 960 },
  footer: { top: 1540 },
  titleCardBoxBottom: 400,
} as const;
