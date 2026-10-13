import React from "react";
import { useCurrentFrame } from "remotion";
import {
  AliceCharacter,
  AssistantCharacter,
  HostCharacter,
  Panel,
  SceneHeading,
  ease,
} from "../../template";

// Each scene renders inside the 952×960 Panel below the presenter inset.
export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const enter = ease(frame, 0, 24);
  return (
    <Panel>
      <SceneHeading title="The setup" />
      <div
        style={{
          bottom: 120,
          display: "flex",
          gap: 80,
          justifyContent: "center",
          left: 0,
          opacity: enter,
          position: "absolute",
          right: 0,
          transform: `translateY(${(1 - enter) * 40}px)`,
        }}
      >
        <HostCharacter pose="point" size={220} talking />
        <AliceCharacter size={180} />
        <AssistantCharacter size={180} />
      </div>
    </Panel>
  );
};
