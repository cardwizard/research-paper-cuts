import { Video } from "@remotion/media";
import React from "react";
import {
  AbsoluteFill,
  Sequence,
  Series,
  staticFile,
  useVideoConfig,
} from "remotion";
import { BasicCaptions } from "./BasicCaptions";
import { colors } from "./brand";
import { HostCharacter } from "./characters";
import { DEFAULT_TITLE_CARD_MS, LAYOUT, type Episode } from "./types";
import { SeriesLogo } from "./ui";

/**
 * Shared frame for every episode: presenter inset, scene panel, footer
 * citation, full-screen title card and captions.
 */
export const EpisodeLayout: React.FC<{ episode: Episode }> = ({ episode }) => {
  const { fps } = useVideoConfig();
  const titleCardMs = episode.titleCardMs ?? DEFAULT_TITLE_CARD_MS;
  const facePosition = episode.facePosition ?? "50% 24%";

  return (
    <AbsoluteFill
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        fontFamily: "Helvetica Neue, Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          border: "1px solid #d2cfc6",
          height: LAYOUT.presenter.height,
          left: (1080 - LAYOUT.presenter.width) / 2,
          overflow: "hidden",
          position: "absolute",
          top: LAYOUT.presenter.top,
          width: LAYOUT.presenter.width,
        }}
      >
        <Video
          src={staticFile(episode.recording)}
          premountFor={fps}
          objectFit="cover"
          style={{
            height: "100%",
            objectPosition: facePosition,
            width: "100%",
          }}
        />
      </div>
      <Series>
        {episode.scenes.map((scene) => (
          <Series.Sequence
            key={scene.name}
            name={scene.name}
            durationInFrames={scene.durationInFrames}
            premountFor={fps}
          >
            <scene.component />
          </Series.Sequence>
        ))}
      </Series>
      <div
        style={{
          alignItems: "center",
          color: colors.muted,
          display: "flex",
          fontSize: 20,
          justifyContent: "space-between",
          left: LAYOUT.panel.left,
          position: "absolute",
          top: LAYOUT.footer.top,
          width: LAYOUT.panel.width,
        }}
      >
        <SeriesLogo size={44} color={colors.muted} />
        <span>{episode.citation}</span>
      </div>
      <Sequence
        name="Title card"
        durationInFrames={Math.round((titleCardMs / 1000) * fps)}
      >
        <AbsoluteFill
          style={{ backgroundColor: "#171817", overflow: "hidden" }}
        >
          <Video
            src={staticFile(episode.recording)}
            objectFit="cover"
            volume={0}
            style={{
              height: "100%",
              objectPosition: facePosition,
              width: "100%",
            }}
          />
          <div
            style={{
              alignItems: "center",
              backgroundColor: "rgba(241,239,233,0.97)",
              bottom: LAYOUT.titleCardBoxBottom,
              display: "flex",
              gap: 18,
              left: 48,
              padding: "32px 36px 38px",
              position: "absolute",
              right: 48,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ marginBottom: 22 }}>
                <SeriesLogo size={84} />
              </div>
              <div
                style={{
                  color: colors.text,
                  fontSize: 58,
                  fontWeight: 700,
                  letterSpacing: -1,
                  lineHeight: 1.08,
                }}
              >
                {episode.hook}
              </div>
            </div>
            {episode.hookCharacter ?? <HostCharacter pose="wave" size={140} />}
          </div>
        </AbsoluteFill>
      </Sequence>
      <BasicCaptions
        name="Narration captions"
        premountFor={fps}
        width={1000}
        style={{
          height: LAYOUT.captions.height,
          left: 40,
          position: "absolute",
          top: LAYOUT.captions.top,
        }}
        captions={episode.captions.filter(
          (caption) => caption.startMs >= titleCardMs,
        )}
      />
    </AbsoluteFill>
  );
};
