import React from "react";
import { AbsoluteFill } from "remotion";
import { colors } from "./brand";
import {
  AliceCharacter,
  AssistantCharacter,
  BobCharacter,
  BouncerCharacter,
  DetectiveCharacter,
  HostCharacter,
} from "./characters";
import { SeriesLogo, SmallLabel } from "./ui";

const Cell: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div
    style={{
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      justifyContent: "flex-end",
      width: 300,
    }}
  >
    {children}
    <SmallLabel>{label}</SmallLabel>
  </div>
);

/** Reference sheet of the reusable cast. Not part of any episode. */
export const CastSheet: React.FC = () => (
  <AbsoluteFill
    style={{
      alignItems: "center",
      backgroundColor: colors.background,
      color: colors.text,
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      gap: 70,
      justifyContent: "center",
    }}
  >
    <SeriesLogo size={120} />
    <div style={{ display: "flex", gap: 20 }}>
      <Cell label="Host · neutral">
        <HostCharacter size={180} />
      </Cell>
      <Cell label="Host · wave">
        <HostCharacter pose="wave" size={180} />
      </Cell>
      <Cell label="Host · think">
        <HostCharacter pose="think" size={180} />
      </Cell>
    </div>
    <div style={{ display: "flex", gap: 20 }}>
      <Cell label="Host · point">
        <HostCharacter pose="point" size={180} />
      </Cell>
      <Cell label="Alice · user">
        <AliceCharacter size={150} />
      </Cell>
      <Cell label="Bob · attacker">
        <BobCharacter size={150} />
      </Cell>
    </div>
    <div style={{ display: "flex", gap: 20 }}>
      <Cell label="Agent">
        <AssistantCharacter label={false} size={150} />
      </Cell>
      <Cell label="Bouncer">
        <BouncerCharacter size={170} />
      </Cell>
      <Cell label="Detective">
        <DetectiveCharacter size={190} />
      </Cell>
    </div>
  </AbsoluteFill>
);
