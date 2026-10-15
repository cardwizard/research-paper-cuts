import React from "react";
import { Audio } from "@remotion/media";
import {
  AbsoluteFill,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { colors, ease } from "./brand";
import { HostCharacter } from "./characters";
import { SeriesLogo } from "./ui";

export type BookendProps = {
  paperTitle: string;
  audioSrc: string;
  audioStartSeconds: number;
};

const PaperCut: React.FC<{ closing?: boolean }> = ({ closing = false }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = ease(frame, fps * 0.15, fps * 1.2);
  const split = closing ? 1 - progress : progress;
  return (
    <svg width="700" height="650" viewBox="0 0 700 650" aria-hidden="true">
      <g transform="translate(150 42)" stroke={colors.text} strokeWidth="4">
        <g
          transform={`translate(${-split * 26} ${-split * 26}) rotate(${-split * 7} 200 230)`}
        >
          <path d="M0 0H310L400 90V225L0 385Z" fill={colors.panel} />
          <path d="M310 0V90H400" fill="none" />
          <path
            d="M48 66H255M48 105H290M48 146H260M48 187H195"
            stroke="#a9a59b"
            strokeWidth="9"
          />
          <path d="M48 230H160" stroke={colors.blue} strokeWidth="12" />
        </g>
        <g
          transform={`translate(${split * 26} ${split * 32}) rotate(${split * 5} 200 420)`}
        >
          <path d="M0 385 400 225V535H0Z" fill={colors.panel} />
          <path d="M48 430H330M48 470H250" stroke="#a9a59b" strokeWidth="9" />
        </g>
      </g>
      <path
        d="M125 435 580 250"
        fill="none"
        stroke={colors.red}
        strokeWidth="5"
        strokeDasharray="10 10"
        pathLength="1"
        opacity={closing ? 1 - progress : 1}
        strokeDashoffset={0}
        style={{ clipPath: `inset(0 ${100 - progress * 100}% 0 0)` }}
      />
      <g
        transform={`translate(${130 + progress * 450} ${430 - progress * 183}) rotate(-22)`}
        fill="none"
        stroke={colors.red}
        strokeWidth="6"
        opacity={closing ? 0 : 1 - ease(frame, fps * 1.25, fps * 1.5)}
      >
        <circle cx="0" cy="-16" r="14" />
        <circle cx="0" cy="22" r="14" />
        <path d="M12-10 65 10M12 16 65-8" />
      </g>
    </svg>
  );
};

const Bookend: React.FC<BookendProps & { closing: boolean }> = ({
  paperTitle,
  audioSrc,
  audioStartSeconds,
  closing,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = ease(frame, 0, fps * 0.35);
  const reveal = ease(frame, fps * 0.4, fps * 0.85);
  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: "Helvetica Neue, Arial, sans-serif",
      }}
    >
      {audioSrc ? (
        <Audio
          src={staticFile(audioSrc)}
          trimBefore={Math.round(audioStartSeconds * fps)}
          premountFor={fps}
        />
      ) : null}
      <div
        style={{
          position: "absolute",
          left: 96,
          top: 160,
          opacity: enter,
          translate: `0 ${(1 - enter) * 20}px`,
        }}
      >
        <SeriesLogo size={180} />
      </div>
      <div style={{ position: "absolute", left: 140, top: 410 }}>
        <PaperCut closing={closing} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 570,
          top: 805,
          opacity: reveal,
          translate: `${(1 - reveal) * 35}px 0`,
        }}
      >
        <HostCharacter size={240} pose={closing ? "wave" : "point"} />
      </div>
      {closing ? (
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 1160,
            width: 790,
            opacity: reveal,
            translate: `0 ${(1 - reveal) * 24}px`,
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
          }}
        >
          Follow for more.
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            left: 96,
            top: 1160,
            width: 790,
            opacity: reveal,
            translate: `0 ${(1 - reveal) * 24}px`,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: -1.5,
          }}
        >
          Research, made clear.
        </div>
      )}
      {closing ? (
        <div
          style={{
            position: "absolute",
            top: 1390,
            left: 96,
            fontSize: 54,
            fontWeight: 700,
            color: colors.blue,
            opacity: reveal,
          }}
        >
          cardwizard.github.io
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: 1300,
            left: 96,
            width: 790,
            opacity: reveal,
            borderTop: "2px solid #d2cfc6",
            paddingTop: 22,
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 2,
              color: colors.muted,
            }}
          >
            THIS PAPER
          </div>
          <div
            style={{
              marginTop: 12,
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.12,
              overflowWrap: "anywhere",
            }}
          >
            {paperTitle}
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

export const OpeningScreen: React.FC<BookendProps> = (props) => (
  <Bookend {...props} closing={false} />
);

export const ClosingScreen: React.FC<BookendProps> = (props) => (
  <Bookend {...props} closing />
);
