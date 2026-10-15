import type { Caption } from "@remotion/captions";
import { createTikTokStyleCaptions } from "@remotion/captions";
import React, { useMemo } from "react";
import {
  Interactive,
  useCurrentFrame,
  useVideoConfig,
  type InteractiveTransformProps,
  type InteractivitySchema,
  type SequenceProps,
} from "remotion";

type BasicCaptionsProps = InteractiveTransformProps &
  Pick<SequenceProps, "width"> & {
    readonly captions: Caption[];
    readonly combineTokensWithinMilliseconds?: number;
    readonly fontSize?: number;
  };

const defaultCombineTokensWithinMilliseconds = 3000;
const defaultWidth = 900;

const basicCaptionsSchema = {
  ...Interactive.captionsSchema,
  width: {
    type: "number",
    min: 1,
    step: 1,
    default: undefined,
    description: "Caption area width",
    hiddenFromList: false,
  },
  combineTokensWithinMilliseconds: {
    type: "number",
    min: 0,
    step: 50,
    default: defaultCombineTokensWithinMilliseconds,
    description: "Time between caption pages",
    hiddenFromList: false,
  },
  fontSize: {
    type: "number",
    min: 17,
    step: 1,
    default: 52,
    description: "Caption font size",
    hiddenFromList: false,
  },
} as const satisfies InteractivitySchema;

const BasicCaptionsContent: React.FC<BasicCaptionsProps> = ({
  captions,
  combineTokensWithinMilliseconds = defaultCombineTokensWithinMilliseconds,
  style,
  width = defaultWidth,
  fontSize = 52,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pages = useMemo(
    () =>
      createTikTokStyleCaptions({
        captions,
        combineTokensWithinMilliseconds,
      }).pages,
    [captions, combineTokensWithinMilliseconds],
  );
  const currentTimeMs = (frame / fps) * 1000;
  const page = pages.find(
    (candidate) =>
      currentTimeMs >= candidate.startMs &&
      currentTimeMs < candidate.startMs + candidate.durationMs,
  );

  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        width,
        ...style,
      }}
    >
      {page ? (
        <div
          style={{
            color: "#fffdf7",
            fontFamily: "Avenir Next, Helvetica Neue, Arial, sans-serif",
            fontSize,
            fontWeight: 700,
            letterSpacing: -0.4,
            lineHeight: 1.16,
            padding: "8px 12px",
            paintOrder: "stroke fill",
            textAlign: "center",
            textShadow: "0 2px 8px rgba(0,0,0,0.55)",
            textWrap: "balance",
            WebkitTextStroke: "2.5px #242521",
            whiteSpace: "pre-wrap",
          }}
        >
          {page.text.trim()}
        </div>
      ) : null}
    </div>
  );
};

export const BasicCaptions = Interactive.withSchema({
  Component: BasicCaptionsContent,
  componentName: "<BasicCaptions>",
  schema: basicCaptionsSchema,
  wrapInSequence: true,
});
