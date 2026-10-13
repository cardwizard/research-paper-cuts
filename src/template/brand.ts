import { Easing, interpolate } from "remotion";

export const SERIES_NAME = "Research Paper Cuts";

export const colors = {
  background: "#f1efe9",
  panel: "#faf9f6",
  text: "#242521",
  muted: "#595b55",
  mint: "#2e684d",
  orange: "#8a5100",
  red: "#9b4141",
  blue: "#355f83",
};

/** 0→1 eased progress between two frames, clamped. */
export const ease = (frame: number, start: number, end: number) =>
  interpolate(frame, [start, end], [0, 1], {
    easing: Easing.inOut(Easing.cubic),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
