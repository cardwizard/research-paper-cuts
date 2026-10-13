import React from "react";
import { useCurrentFrame } from "remotion";
import { colors } from "./brand";

export const DetectiveCharacter: React.FC<{ size?: number }> = ({
  size = 92,
}) => {
  const frame = useCurrentFrame();
  const lensShift = Math.sin(frame / 12) * 2;

  return (
    <svg
      aria-hidden="true"
      height={size * 1.18}
      viewBox="0 0 128 152"
      width={size}
      style={{
        display: "block",
        overflow: "visible",
        transform: `translateY(${Math.sin(frame / 16) * 1.5}px)`,
      }}
    >
      <path
        d="M20 151c2-26 14-39 34-43l11 10 12-10c21 4 34 17 36 43"
        fill="#355f83"
        stroke="#242521"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path d="m48 108 17 16 17-16-8-9H55z" fill="#faf9f6" />
      <path d="M56 111h17l-4 20h-9z" fill="#9b4141" />
      <path
        d="M40 45c0-21 11-32 25-32s26 11 26 32v26c0 20-12 31-26 31S40 91 40 71z"
        fill="#e9b995"
        stroke="#242521"
        strokeWidth="4"
      />
      <path
        d="M39 51c-3-29 9-43 28-43 15 0 26 10 28 29-12-2-23-8-30-17-5 12-14 19-26 21z"
        fill="#38332f"
        stroke="#242521"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M51 62h7m18 0h7"
        stroke="#242521"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M61 81c4 3 9 3 13 0"
        fill="none"
        stroke="#9b4141"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="m35 26 31-15 32 15-4 9H39z"
        fill="#2e684d"
        stroke="#242521"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <g transform={`translate(${lensShift} 0)`}>
        <circle
          cx="94"
          cy="99"
          r="18"
          fill="#faf9f6"
          fillOpacity=".35"
          stroke="#8a5100"
          strokeWidth="5"
        />
        <path
          d="m106 112 13 16"
          stroke="#8a5100"
          strokeLinecap="round"
          strokeWidth="7"
        />
        <path
          d="m87 93 7-4"
          stroke="#fffdf7"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};

/**
 * The AI agent. Shows an "AI agent" name tag under its feet by default so it is
 * recognizable on mute; pass `label={false}` (e.g. where a caption already names it).
 */
export const AssistantCharacter: React.FC<{
  size?: number;
  label?: string | false;
}> = ({ size = 82, label = "AI agent" }) => {
  const frame = useCurrentFrame();
  const blink = frame % 93 < 5;

  return (
    <div style={{ height: size * 1.14, position: "relative", width: size }}>
      <AssistantBody blink={blink} size={size} />
      {label ? (
        <div
          style={{
            backgroundColor: "#355f83",
            borderRadius: 999,
            color: "#faf9f6",
            fontFamily: "Helvetica Neue, Arial, sans-serif",
            fontSize: Math.max(17, size * 0.2),
            fontWeight: 800,
            left: "50%",
            letterSpacing: 0.5,
            padding: "3px 10px",
            position: "absolute",
            textTransform: "uppercase",
            top: "100%",
            transform: "translate(-50%, 6px)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </div>
      ) : null}
    </div>
  );
};

const AssistantBody: React.FC<{ size: number; blink: boolean }> = ({
  size,
  blink,
}) => {
  return (
    <svg
      aria-hidden="true"
      height={size * 1.14}
      viewBox="0 0 112 128"
      width={size}
      style={{ display: "block" }}
    >
      <path
        d="M56 10v12m-9-2a9 9 0 1 1 18 0"
        fill="none"
        stroke="#355f83"
        strokeWidth="5"
      />
      <path
        d="M20 47c0-16 12-27 36-27s36 11 36 27v29c0 16-12 26-36 26S20 92 20 76z"
        fill="#faf9f6"
        stroke="#242521"
        strokeWidth="4"
      />
      <path
        d="M27 48c0-12 10-20 29-20s29 8 29 20"
        fill="none"
        stroke="#355f83"
        strokeWidth="5"
      />
      <path
        d={blink ? "M38 62h10m16 0h10" : "M43 62h1m20 0h1"}
        stroke="#242521"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M47 78c5 4 13 4 18 0"
        fill="none"
        stroke="#2e684d"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M30 103v15m52-15v15M42 102l-7 18m35-18 7 18"
        fill="none"
        stroke="#355f83"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d="M23 119h66"
        stroke="#242521"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
};

export const AliceCharacter: React.FC<{
  size?: number;
  mood?: "happy" | "annoyed";
}> = ({ size = 92, mood = "happy" }) => {
  const frame = useCurrentFrame();
  const blink = frame % 87 < 4;
  return (
    <svg
      aria-hidden="true"
      height={size * 1.18}
      viewBox="0 0 128 152"
      width={size}
      style={{ display: "block", overflow: "visible" }}
    >
      <path
        d="M30 62c0-34 16-52 34-52s34 18 34 52v48H30z"
        fill="#5a3825"
        stroke="#242521"
        strokeWidth="4"
      />
      <path
        d="M22 151c2-26 15-39 42-42 27 3 40 16 42 42"
        fill="#5f86ad"
        stroke="#242521"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <rect fill="#e2b08c" height="18" width="16" x="56" y="92" />
      <ellipse
        cx="64"
        cy="60"
        fill="#f0c4a0"
        rx="27"
        ry="32"
        stroke="#242521"
        strokeWidth="4"
      />
      <path
        d="M37 54c4-20 16-30 28-30s24 9 27 28c-14-2-24-9-30-18-5 10-14 17-25 20z"
        fill="#5a3825"
      />
      <path
        d={blink ? "M49 62h8m14 0h8" : "M53 62h1m19 0h1"}
        stroke="#242521"
        strokeLinecap="round"
        strokeWidth="6"
      />
      {mood === "annoyed" ? (
        <path
          d="M47 52l10 4m24-4-10 4"
          stroke="#242521"
          strokeLinecap="round"
          strokeWidth="3"
        />
      ) : (
        <>
          <circle cx="46" cy="72" fill="#e69a8f" opacity=".5" r="5" />
          <circle cx="82" cy="72" fill="#e69a8f" opacity=".5" r="5" />
        </>
      )}
      <path
        d={mood === "annoyed" ? "M55 80c5-4 13-4 18 0" : "M55 75c5 6 13 6 18 0"}
        fill="none"
        stroke="#9b4141"
        strokeLinecap="round"
        strokeWidth="3.5"
      />
    </svg>
  );
};

export const BobCharacter: React.FC<{
  size?: number;
  mood?: "sneaky" | "caught";
}> = ({ size = 92, mood = "sneaky" }) => {
  const frame = useCurrentFrame();
  const caught = mood === "caught";
  return (
    <svg
      aria-hidden="true"
      height={size * 1.18}
      viewBox="0 0 128 152"
      width={size}
      style={{
        display: "block",
        overflow: "visible",
        transform: caught
          ? `translateX(${Math.sin(frame * 1.3) * 1.5}px)`
          : undefined,
      }}
    >
      <path
        d="M28 68c0-36 16-56 36-56s36 20 36 56v34H28z"
        fill="#9b4141"
        stroke="#242521"
        strokeWidth="4"
      />
      <path
        d="M18 151c2-28 16-42 46-44 30 2 44 16 46 44"
        fill="#9b4141"
        stroke="#242521"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M56 108v16m16-16v16"
        stroke="#f1efe9"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <ellipse
        cx="64"
        cy="66"
        fill="#d9a57c"
        rx="24"
        ry="28"
        stroke="#242521"
        strokeWidth="4"
      />
      <path
        d="M38 74c0-28 11-42 26-42s26 14 26 42"
        fill="none"
        stroke="#7a2f2f"
        strokeWidth="6"
      />
      {caught ? (
        <>
          <path
            d="M55 64h1m16 0h1"
            stroke="#242521"
            strokeLinecap="round"
            strokeWidth="7"
          />
          <path
            d="M57 82c5-4 10-4 15 0"
            fill="none"
            stroke="#242521"
            strokeLinecap="round"
            strokeWidth="3.5"
          />
          <path d="M92 46c4 6 5 10 0 12-5-2-4-6 0-12z" fill="#6aa6d6" />
        </>
      ) : (
        <>
          <path
            d="M51 57l10 3m18-3-10 3"
            stroke="#242521"
            strokeLinecap="round"
            strokeWidth="3"
          />
          <path
            d="M52 66h8m10 0h8"
            stroke="#242521"
            strokeLinecap="round"
            strokeWidth="5"
          />
          <path
            d="M55 78c7 4 13 3 18-4"
            fill="none"
            stroke="#242521"
            strokeLinecap="round"
            strokeWidth="3.5"
          />
        </>
      )}
    </svg>
  );
};

export const BouncerCharacter: React.FC<{ size?: number; stop?: boolean }> = ({
  size = 92,
  stop = false,
}) => {
  const frame = useCurrentFrame();
  const glint = (frame % 70) / 70;

  return (
    <svg
      aria-hidden="true"
      height={size * 1.125}
      viewBox="0 0 160 180"
      width={size}
      style={{ display: "block", overflow: "visible" }}
    >
      <path
        d="M8 179c2-46 22-66 72-70 50 4 70 24 72 70z"
        fill="#242521"
        stroke="#242521"
        strokeWidth="4"
      />
      <rect fill="#b9805d" height="22" width="30" x="65" y="92" />
      <ellipse
        cx="80"
        cy="60"
        fill="#c98e6a"
        rx="31"
        ry="37"
        stroke="#242521"
        strokeWidth="4"
      />
      <path
        d="M54 52h22v12H58zM84 52h22l-4 12H84zM76 56h8"
        fill="#242521"
        stroke="#242521"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d={`M${58 + glint * 14} 54l4 0`}
        stroke="#f1efe9"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M69 82h22"
        stroke="#242521"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d="M111 62c9 8 7 20-1 30"
        fill="none"
        stroke="#595b55"
        strokeWidth="3"
      />
      <text
        fill="#f1efe9"
        fontFamily="Helvetica Neue, Arial, sans-serif"
        fontSize="12"
        fontWeight="700"
        letterSpacing="2"
        textAnchor="middle"
        x="80"
        y="134"
      >
        SECURITY
      </text>
      {stop ? (
        <>
          <path
            d="M132 124c10-22 16-44 18-64"
            fill="none"
            stroke="#242521"
            strokeLinecap="round"
            strokeWidth="18"
          />
          <circle
            cx="151"
            cy="48"
            fill="#c98e6a"
            r="15"
            stroke="#242521"
            strokeWidth="4"
          />
        </>
      ) : (
        <path
          d="M34 146h92a13 13 0 0 1 0 26H34a13 13 0 0 1 0-26z"
          fill="#3a3b37"
          stroke="#242521"
          strokeWidth="4"
        />
      )}
    </svg>
  );
};

export const Check: React.FC<{ size?: number; color?: string }> = ({
  size = 30,
  color = colors.mint,
}) => (
  <svg
    aria-hidden="true"
    height={size}
    viewBox="0 0 30 30"
    width={size}
    style={{ display: "block" }}
  >
    <circle cx="15" cy="15" fill={color} r="14" />
    <path
      d="m8 15 5 5 9-10"
      fill="none"
      stroke="#fffaf4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.5"
    />
  </svg>
);

export type HostPose = "neutral" | "wave" | "point" | "think";

/**
 * The series host: a cartoon of the creator. Reuse in every episode
 * (title card, outro, and as an on-screen guide).
 */
export const HostCharacter: React.FC<{
  size?: number;
  pose?: HostPose;
  talking?: boolean;
}> = ({ size = 120, pose = "neutral", talking = false }) => {
  const frame = useCurrentFrame();
  const blink = frame % 93 < 4;
  const skin = "#c68d68";
  const skinShade = "#ad7656";
  const hair = "#1f1a17";
  const beard = "#3d2f28";
  const shirt = "#7d5a55";
  const ink = "#242521";
  const wave = Math.sin(frame / 4) * 12;
  const mouthOpen = talking && Math.floor(frame / 4) % 2 === 0;

  return (
    <svg
      aria-hidden="true"
      height={size * 1.18}
      viewBox="0 0 128 152"
      width={size}
      style={{ display: "block", overflow: "visible" }}
    >
      {pose === "wave" ? (
        <g transform={`rotate(${wave} 104 118)`}>
          <path
            d="M100 122 112 76"
            stroke={shirt}
            strokeLinecap="round"
            strokeWidth="15"
          />
          <circle
            cx="113"
            cy="70"
            fill={skin}
            r="10"
            stroke={ink}
            strokeWidth="4"
          />
        </g>
      ) : null}
      {pose === "point" ? (
        <g>
          <path
            d="M98 126 132 112"
            stroke={shirt}
            strokeLinecap="round"
            strokeWidth="15"
          />
          <circle
            cx="136"
            cy="110"
            fill={skin}
            r="9"
            stroke={ink}
            strokeWidth="4"
          />
          <path
            d="M142 108h10"
            stroke={ink}
            strokeLinecap="round"
            strokeWidth="5"
          />
        </g>
      ) : null}
      <path
        d="M18 151c2-28 17-41 46-43 29 2 44 15 46 43"
        fill={shirt}
        stroke={ink}
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M50 108l14 14 14-14"
        fill="none"
        stroke={ink}
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path d="M64 122v18" stroke={ink} strokeLinecap="round" strokeWidth="3" />
      <rect fill={skinShade} height="16" width="18" x="55" y="92" />
      <ellipse
        cx="64"
        cy="60"
        fill={skin}
        rx="28"
        ry="33"
        stroke={ink}
        strokeWidth="4"
      />
      <path
        d="M37 64c1 20 12 33 27 33s26-13 27-33c-4 8-9 12-15 12-4-3-8-4-12-4s-8 1-12 4c-6 0-11-4-15-12z"
        fill={beard}
      />
      <path
        d="M52 76c4-4 8-4 12-2 4-2 8-2 12 2"
        fill="none"
        stroke={hair}
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M34 52c-4-20 8-36 22-38 6-6 18-6 24 0 14 2 22 16 16 34-4-8-10-12-16-12-6-6-14-6-22-2-8-2-18 4-24 18z"
        fill={hair}
        stroke={ink}
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M47 50c4-3 9-3 13 0m8 0c4-3 9-3 13 0"
        fill="none"
        stroke={hair}
        strokeLinecap="round"
        strokeWidth="4"
      />
      <path
        d={blink ? "M48 60h9m14 0h9" : "M52 60h1m19 0h1"}
        stroke={ink}
        strokeLinecap="round"
        strokeWidth="6"
      />
      <path
        d="M64 62c-2 6-3 9 1 10"
        fill="none"
        stroke={skinShade}
        strokeLinecap="round"
        strokeWidth="3"
      />
      {mouthOpen ? (
        <ellipse cx="64" cy="84" fill="#f6efe6" rx="7" ry="4" />
      ) : (
        <path
          d="M56 82c4 4 12 4 16 0"
          fill="#f6efe6"
          stroke="#f6efe6"
          strokeLinecap="round"
          strokeWidth="3"
        />
      )}
      {pose === "think" ? (
        <g>
          <path
            d="M44 140 52 102"
            stroke={shirt}
            strokeLinecap="round"
            strokeWidth="15"
          />
          <circle
            cx="54"
            cy="94"
            fill={skin}
            r="9"
            stroke={ink}
            strokeWidth="4"
          />
        </g>
      ) : null}
    </svg>
  );
};
