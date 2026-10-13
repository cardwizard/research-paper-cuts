import { Composition, Folder } from "remotion";
import { CastSheet } from "./template/CastSheet";
import { episodes } from "./episodes";
import { EpisodeLayout, episodeDuration, FPS, HEIGHT, WIDTH } from "./template";

const episodeComponents = episodes.map((episode) => {
  const Component: React.FC = () => <EpisodeLayout episode={episode} />;
  return { episode, Component };
});

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Episodes">
        {episodeComponents.map(({ episode, Component }) => (
          <Composition
            key={episode.slug}
            id={episode.slug}
            component={Component}
            durationInFrames={episodeDuration(episode)}
            fps={FPS}
            width={WIDTH}
            height={HEIGHT}
          />
        ))}
      </Folder>
      <Folder name="Template">
        <Composition
          id="cast-sheet"
          component={CastSheet}
          durationInFrames={90}
          fps={FPS}
          width={WIDTH}
          height={HEIGHT}
        />
      </Folder>
    </>
  );
};
