import React from "react";
import { useCurrentFrame } from "remotion";
import { colors } from "./brand";
import { LAYOUT } from "./types";
import { DetectiveCharacter } from "./characters";

export const SmallLabel: React.FC<{
  children: React.ReactNode;
  color?: string;
}> = ({ children, color = colors.muted }) => (
  <div
    style={{
      color,
      fontFamily: "Helvetica Neue, Arial, sans-serif",
      fontSize: 19,
      fontWeight: 700,
      letterSpacing: 0.8,
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);

const cardStyle: React.CSSProperties = {
  border: "1px solid transparent",
  boxSizing: "border-box",
  padding: 0,
};

export type SourceKind = "request" | "tool" | "web" | "email" | "calendar";

export const sourceColor: Record<SourceKind, string> = {
  request: colors.blue,
  tool: colors.text,
  web: colors.orange,
  email: colors.blue,
  calendar: colors.mint,
};

export const SourceIcon: React.FC<{
  kind: SourceKind;
  size?: number;
  color: string;
}> = ({ kind, size = 34, color }) => {
  const paths: Record<SourceKind, string> = {
    request: "M6 8h28v18H18l-8 7v-7H6z",
    tool: "M5 7h30v26H5zM11 15l5 4-5 4M20 24h9",
    web: "M4 7h32v26H4zM4 14h32",
    email: "M5 10h30v21H5zM5 11l15 12 15-12",
    calendar: "M6 9h28v25H6zM6 16h28M13 5v7M27 5v7",
  };
  return (
    <svg
      aria-hidden="true"
      height={size}
      viewBox="0 0 40 40"
      width={size}
      style={{ display: "block", flexShrink: 0 }}
    >
      <path
        d={paths[kind]}
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};

export const SourceChip: React.FC<{
  kind: SourceKind;
  label: string;
  width: number;
  height: number;
  bad?: boolean;
  fontSize?: number;
  style?: React.CSSProperties;
}> = ({ kind, label, width, height, bad = false, fontSize = 25, style }) => {
  const color = bad ? colors.red : sourceColor[kind];
  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: bad ? "#f6e6e1" : colors.panel,
        border: `2px solid ${color}`,
        boxSizing: "border-box",
        color: colors.text,
        display: "flex",
        fontFamily: "Helvetica Neue, Arial, sans-serif",
        fontSize,
        fontWeight: 700,
        gap: 12,
        height,
        overflow: "hidden",
        padding: "0 16px",
        lineHeight: 1.05,
        position: "absolute",
        width,
        ...style,
      }}
    >
      <SourceIcon color={color} kind={kind} size={fontSize * 1.35} />
      <span style={{ flexShrink: 1, minWidth: 0 }}>{label}</span>
    </div>
  );
};

export const SeriesLogoMark: React.FC<{ size?: number }> = ({ size = 96 }) => (
  <svg aria-hidden="true" height={size} viewBox="0 0 100 100" width={size}>
    <g stroke="#242521" strokeLinejoin="round" strokeWidth="4">
      <path d="M22 90H78V38L22 64Z" fill="#fffdf8" />
      <g transform="translate(-5 -6) rotate(-5 50 40)">
        <path d="M22 10H64L78 24V32L22 58Z" fill="#fffdf8" />
        <path d="M64 10V24H78" fill="none" />
      </g>
    </g>
    <g stroke="#a9a59b" strokeLinecap="round" strokeWidth="4">
      <path d="M32 74H68M32 82H56" />
      <g transform="translate(-5 -6) rotate(-5 50 40)">
        <path d="M30 22H54M30 30H64M30 38H46" />
      </g>
    </g>
    <path
      d="M14 68 86 34"
      stroke={colors.red}
      strokeDasharray="6 5"
      strokeLinecap="round"
      strokeWidth="3"
    />
    <g fill="none" stroke={colors.red} strokeWidth="3.5">
      <circle cx="91" cy="22" r="5" />
      <circle cx="96" cy="36" r="5" />
      <path d="M87 26 74 41M92 32 76 36" strokeLinecap="round" />
    </g>
  </svg>
);

export const SeriesLogo: React.FC<{ size?: number; color?: string }> = ({
  size = 96,
  color = colors.text,
}) => (
  <div style={{ alignItems: "center", display: "flex", gap: size * 0.18 }}>
    <SeriesLogoMark size={size} />
    <div style={{ color, lineHeight: 0.95 }}>
      <div
        style={{
          fontSize: size * 0.24,
          fontWeight: 700,
          letterSpacing: size * 0.04,
          textTransform: "uppercase",
        }}
      >
        Research
      </div>
      <div
        style={{
          fontSize: size * 0.46,
          fontWeight: 800,
          letterSpacing: -size * 0.01,
          whiteSpace: "nowrap",
        }}
      >
        Paper Cuts
      </div>
    </div>
  </div>
);

export const Panel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <div
    style={{
      ...cardStyle,
      backgroundColor: colors.panel,
      border: "1px solid #d2cfc6",
      height: LAYOUT.panel.height,
      left: LAYOUT.panel.left,
      overflow: "hidden",
      position: "absolute",
      top: LAYOUT.panel.top,
      width: LAYOUT.panel.width,
    }}
  >
    {children}
  </div>
);

export const SceneHeading: React.FC<{
  title: string;
  subtitle?: string;
  character?: React.ReactNode;
}> = ({ title, subtitle, character }) => {
  const frame = useCurrentFrame();
  return (
    <>
      <div
        style={{
          color: colors.text,
          fontFamily: "Helvetica Neue, Arial, sans-serif",
          fontSize: 46,
          fontWeight: 700,
          left: 38,
          lineHeight: 1.08,
          opacity: Math.min(1, frame / 12),
          position: "absolute",
          top: 42,
          width: 750,
        }}
      >
        {title}
      </div>
      {subtitle ? (
        <div
          style={{
            color: colors.muted,
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontSize: 26,
            left: 40,
            lineHeight: 1.35,
            opacity: Math.min(1, frame / 18),
            position: "absolute",
            top: 108,
            width: 750,
          }}
        >
          {subtitle}
        </div>
      ) : null}
      <div
        style={{
          left: 820,
          position: "absolute",
          top: 14,
        }}
      >
        {character ?? <DetectiveCharacter />}
      </div>
    </>
  );
};
