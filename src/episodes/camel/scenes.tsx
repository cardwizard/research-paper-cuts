import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";
import {
  AliceCharacter,
  AssistantCharacter,
  BobCharacter,
  HostCharacter,
  Panel,
  SceneHeading,
  SourceChip,
  colors,
  ease,
} from "../../template";

const Label: React.FC<{
  children: React.ReactNode;
  x: number;
  y: number;
  color?: string;
  width?: number;
}> = ({ children, x, y, color = colors.text, width = 260 }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width,
      fontSize: 30,
      fontWeight: 700,
      textAlign: "center",
      color,
      lineHeight: 1.15,
    }}
  >
    {children}
  </div>
);

const File: React.FC<{
  x: number;
  y: number;
  privateFile?: boolean;
  opacity?: number;
}> = ({ x, y, privateFile = false, opacity = 1 }) => (
  <div style={{ position: "absolute", left: x, top: y, opacity, width: 180 }}>
    <svg width="180" height="190" viewBox="0 0 180 190">
      <path
        d="M25 8H120L155 43V174H25Z"
        fill={colors.panel}
        stroke={privateFile ? colors.red : colors.mint}
        strokeWidth="4"
      />
      <path
        d="M120 8V43H155M45 57H108M45 78H130M45 99H110"
        fill="none"
        stroke="#a9a59b"
        strokeWidth="5"
      />
      {privateFile ? (
        <g fill="none" stroke={colors.red} strokeWidth="5">
          <rect x="66" y="130" width="48" height="33" rx="3" />
          <path d="M76 130V119a14 14 0 0 1 28 0v11" />
        </g>
      ) : (
        <g fill="none" stroke={colors.mint} strokeWidth="4">
          <circle cx="90" cy="138" r="22" />
          <path d="M68 138H112M90 116c-14 12-14 32 0 44M90 116c14 12 14 32 0 44" />
        </g>
      )}
    </svg>
    <div
      style={{
        textAlign: "center",
        fontSize: 24,
        lineHeight: 1.1,
        fontWeight: 700,
        color: privateFile ? colors.red : colors.mint,
      }}
    >
      {privateFile ? "Sales forecast" : "Brochure"}
    </div>
  </div>
);

const Program: React.FC<{
  x: number;
  y: number;
  active?: number;
  visibleSteps?: number;
}> = ({ x, y, active = -1, visibleSteps = 4 }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: 300,
      border: `2px solid ${colors.blue}`,
      backgroundColor: colors.panel,
      padding: 22,
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        fontSize: 27,
        fontWeight: 700,
        color: colors.blue,
        marginBottom: 18,
      }}
    >
      Program
    </div>
    {["Read email", "Extract fields", "Fetch file", "Send reply"].map(
      (step, i) => (
        <div
          key={step}
          style={{
            fontSize: 25,
            padding: "12px 0",
            borderTop: "1px solid #d2cfc6",
            color: i === active ? colors.mint : colors.muted,
            opacity: i < visibleSteps ? 1 : 0,
          }}
        >
          <span style={{ marginRight: 16 }}>{i + 1}</span>
          {step}
        </div>
      ),
    )}
  </div>
);

const Boundary: React.FC = () => (
  <div
    style={{
      position: "absolute",
      left: 467,
      top: 165,
      height: 400,
      borderLeft: "3px dashed #a9a59b",
    }}
  >
    <div
      style={{
        position: "absolute",
        left: -105,
        top: 380,
        width: 210,
        fontSize: 24,
        fontWeight: 700,
        textAlign: "center",
        color: colors.muted,
      }}
    >
      Isolated contexts
    </div>
  </div>
);

export const VendorScene: React.FC = () => {
  const frame = useCurrentFrame();
  const email = ease(frame, 184, 210);
  const request = ease(frame, 269, 297);
  const poison = ease(frame, 366, 400);
  return (
    <Panel>
      <SceneHeading
        title="Borrowing your agent's authority"
        character={<BobCharacter size={75} />}
      />
      <div style={{ position: "absolute", left: 80, top: 210 }}>
        <BobCharacter size={175} />
      </div>
      <Label x={38} y={460}>
        Vendor
      </Label>
      <div style={{ position: "absolute", left: 685, top: 210 }}>
        <AliceCharacter size={175} />
      </div>
      <Label x={635} y={460}>
        You
      </Label>
      <SourceChip
        kind="email"
        label="Vendor email"
        width={285}
        height={76}
        style={{ left: 120 + email * 220, top: 190, opacity: email }}
      />
      <SourceChip
        kind="request"
        label="Send brochure"
        width={285}
        height={76}
        style={{ left: 340, top: 300, opacity: request }}
      />
      <SourceChip
        kind="email"
        label="Attach forecast"
        width={285}
        height={76}
        bad
        style={{ left: 340, top: 410, opacity: poison }}
      />
      <div style={{ position: "absolute", left: 360, top: 590 }}>
        <AssistantCharacter size={190} />
      </div>
      <File x={55} y={635} />
      <File x={705} y={635} privateFile opacity={ease(frame, 446, 466)} />
    </Panel>
  );
};

export const AuthorityScene: React.FC = () => {
  const frame = useCurrentFrame();
  const reading = ease(frame, 177, 199);
  const directive = ease(frame, 199, 221);
  return (
    <Panel>
      <SceneHeading
        title="Reading becomes following"
        character={<BobCharacter size={75} />}
      />
      <SourceChip
        kind="email"
        label="Malicious email"
        width={300}
        height={80}
        bad
        style={{
          left: 65 + reading * 190,
          top: 200 + reading * 35,
          opacity: 1 - ease(frame, 195, 210),
        }}
      />
      <div style={{ position: "absolute", left: 385, top: 335 }}>
        <AssistantCharacter size={210} />
      </div>
      <div style={{ position: "absolute", left: 690, top: 620 }}>
        <BobCharacter size={160} />
      </div>
      <File
        x={395}
        y={680}
        privateFile={frame >= 247}
        opacity={
          frame < 247 ? 1 - ease(frame, 235, 247) : ease(frame, 247, 260)
        }
      />
      <SourceChip
        kind="tool"
        label="Attach forecast"
        width={270}
        height={76}
        bad
        style={{
          left: 460 + directive * 155,
          top: 260,
          opacity: directive,
        }}
      />
      <Label x={620} y={520} color={colors.red}>
        {frame < 199
          ? "Read content"
          : frame < 235
            ? "New directive"
            : "Follow instruction"}
      </Label>
      <svg
        width="900"
        height="520"
        style={{ position: "absolute", left: 25, top: 150 }}
      >
        <path
          d="M290 95 450 175"
          stroke={colors.red}
          strokeWidth="5"
          fill="none"
          opacity={1 - directive}
        />
        <path
          d="m430 151 20 24-33 0"
          stroke={colors.red}
          strokeWidth="5"
          fill="none"
          opacity={1 - directive}
        />
      </svg>
    </Panel>
  );
};

export const PaperScene: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <Panel>
      <SceneHeading
        title="Change the architecture"
        character={<HostCharacter size={75} pose="point" />}
      />
      <div
        style={{
          position: "absolute",
          left: 35,
          top: 175,
          width: 882,
          opacity: ease(frame, 0, 18),
          translate: `0 ${(1 - ease(frame, 0, 18)) * 30}px`,
        }}
      >
        <Img
          src={staticFile("episodes/camel/paper-title.png")}
          style={{ width: "100%", border: "1px solid #d2cfc6" }}
        />
      </div>
      <Label x={126} y={450} width={700}>
        Google · Google DeepMind · ETH Zurich
      </Label>
      <div style={{ position: "absolute", left: 140, top: 550 }}>
        <HostCharacter pose="point" size={240} />
      </div>
      <div
        style={{
          position: "absolute",
          left: 515,
          top: 650,
          fontSize: 86,
          fontWeight: 700,
          color: colors.blue,
          opacity: ease(frame, 155, 173),
        }}
      >
        CaMeL
      </div>
    </Panel>
  );
};

export const PlannerScene: React.FC = () => {
  const frame = useCurrentFrame();
  const writing = ease(frame, 104, 134);
  return (
    <Panel>
      <SceneHeading title="Plan without the email" />
      <SourceChip
        kind="request"
        label="Send brochure"
        width={290}
        height={78}
        style={{ left: 65, top: 175, opacity: ease(frame, 67, 85) }}
      />
      <div style={{ position: "absolute", left: 110, top: 330 }}>
        <AssistantCharacter label="AI planner" size={185} />
      </div>
      <div style={{ opacity: writing }}>
        <Program
          x={530}
          y={210}
          visibleSteps={Math.min(
            4,
            Math.floor(Math.max(0, frame - 104) / 15) + 1,
          )}
        />
      </div>
      <SourceChip
        kind="email"
        label="Vendor email"
        width={285}
        height={78}
        bad
        style={{ left: 515, top: 660, opacity: ease(frame, 172, 190) }}
      />
      <div
        style={{
          position: "absolute",
          left: 410,
          top: 645,
          width: 10,
          height: 130,
          backgroundColor: colors.blue,
          opacity: ease(frame, 172, 190),
        }}
      />
      <Label x={62} y={710} color={colors.blue}>
        No email access
      </Label>
    </Panel>
  );
};

export const ReaderScene: React.FC = () => {
  const frame = useCurrentFrame();
  const fields = ease(frame, 343, 397);
  const noAction = ease(frame, 282, 306);
  return (
    <Panel>
      <SceneHeading title="Read without the tools" />
      <Boundary />
      <div style={{ position: "absolute", left: 100, top: 285 }}>
        <AssistantCharacter label="AI planner" size={165} />
      </div>
      <div style={{ position: "absolute", left: 655, top: 285 }}>
        <AssistantCharacter label="AI reader" size={165} />
      </div>
      <SourceChip
        kind="email"
        label="Vendor email"
        width={285}
        height={75}
        bad
        style={{ left: 575, top: 165 }}
      />
      <div style={{ opacity: ease(frame, 168, 185) }}>
        <Label x={605} y={565} color={colors.red}>
          No tools
        </Label>
      </div>
      <svg
        width="210"
        height="90"
        style={{ position: "absolute", left: 640, top: 620, opacity: noAction }}
      >
        <path
          d="M20 40H180m-20-15 20 15-20 15"
          fill="none"
          stroke={colors.red}
          strokeWidth="4"
        />
        <path d="m88 17 36 46m0-46-36 46" stroke={colors.red} strokeWidth="6" />
      </svg>
      <div style={{ opacity: noAction }}>
        <Label x={625} y={725} color={colors.red}>
          Cannot send
        </Label>
      </div>
      <div
        style={{
          position: "absolute",
          left: 335,
          top: 640,
          width: 280,
          height: 200,
          border: `2px solid ${colors.blue}`,
          backgroundColor: colors.panel,
        }}
      >
        <Label x={10} y={20}>
          Harness
        </Label>
        <svg width="280" height="150" viewBox="0 0 280 150">
          <path
            d="M25 110H255M40 95v30M85 95v30M130 95v30M175 95v30M220 95v30"
            stroke={colors.blue}
            strokeWidth="5"
          />
          <path
            d="m243 98 14 12-14 12"
            stroke={colors.blue}
            strokeWidth="5"
            fill="none"
          />
        </svg>
      </div>
      <div style={{ opacity: fields }}>
        <SourceChip
          kind="tool"
          label="Name + address"
          width={250}
          height={75}
          style={{ left: 600 - fields * 260, top: 530 + fields * 180 }}
        />
        <Label x={40} y={730} color={colors.blue}>
          Data, not orders
        </Label>
      </div>
    </Panel>
  );
};

export const IsolationScene: React.FC = () => {
  const frame = useCurrentFrame();
  const executing = ease(frame, 188, 215);
  const returnAttempt = ease(frame, 58, 90);
  const intoHarness = ease(frame, 240, 277);
  return (
    <Panel>
      <SceneHeading title="Keep the boundary closed" />
      <Boundary />
      <div style={{ position: "absolute", left: 100, top: 265 }}>
        <AssistantCharacter label="AI planner" size={160} />
      </div>
      <div style={{ position: "absolute", left: 655, top: 265 }}>
        <AssistantCharacter label="AI reader" size={160} />
      </div>
      <SourceChip
        kind="email"
        label="Malicious email"
        width={280}
        height={76}
        bad
        style={{ left: 565, top: 170 }}
      />
      <svg
        width="900"
        height="450"
        style={{ position: "absolute", top: 130, left: 20 }}
      >
        <path
          d={`M580 135H${580 - returnAttempt * 145}`}
          stroke={colors.red}
          strokeWidth="4"
          strokeDasharray="10 8"
          opacity={returnAttempt}
        />
        <path
          d="m415 110 45 45m0-45-45 45"
          stroke={colors.red}
          strokeWidth="7"
          opacity={ease(frame, 85, 100)}
        />
      </svg>
      <div style={{ opacity: executing }}>
        <Program
          x={90}
          y={590}
          active={Math.min(3, Math.floor(Math.max(0, frame - 188) / 50))}
        />
      </div>
      <SourceChip
        kind="tool"
        label="Extracted fields"
        width={300}
        height={76}
        style={{
          left: 535 - intoHarness * 125,
          top: 590,
          opacity: executing * (1 - ease(frame, 270, 285)),
        }}
      />
      <Label x={555} y={695} color={colors.blue}>
        Harness executes
      </Label>
      <Label x={555} y={785} color={colors.muted}>
        No reply to planner
      </Label>
    </Panel>
  );
};

export const PolicyScene: React.FC = () => {
  const frame = useCurrentFrame();
  const poisoned = ease(frame, 39, 64);
  const publicTag = ease(frame, 310, 334);
  const privateTag = ease(frame, 351, 375);
  const blocked = ease(frame, 494, 511);
  const publicSend = ease(frame, 650, 690);
  return (
    <Panel>
      <SceneHeading
        title={
          frame < 110 ? "Same plan. Wrong attachment." : "Check before sending"
        }
      />
      <div style={{ position: "absolute", left: 55, top: 170 }}>
        <AssistantCharacter size={130} label="AI reader" />
      </div>
      <SourceChip
        kind="tool"
        label="forecast.pdf"
        width={270}
        height={75}
        bad
        style={{ left: 255, top: 215, opacity: poisoned }}
      />
      <Label x={270} y={315} color={colors.red}>
        Returned filename
      </Label>
      <div style={{ position: "absolute", left: 645, top: 205 }}>
        <BobCharacter size={140} mood={blocked ? "caught" : "sneaky"} />
      </div>
      <Label x={590} y={440}>
        Vendor
      </Label>
      <File x={90} y={515} />
      <File x={335 + blocked * 65} y={515} privateFile />
      <div
        style={{
          position: "absolute",
          left: 575,
          top: 510,
          width: 18,
          height: 280,
          backgroundColor: colors.blue,
          opacity: ease(frame, 152, 180),
        }}
      />
      <Label
        x={560}
        y={810}
        width={310}
        color={blocked ? colors.red : colors.blue}
      >
        {blocked ? "Send blocked" : "Policy check"}
      </Label>
      <div
        style={{ opacity: publicTag, translate: `0 ${(1 - publicTag) * 25}px` }}
      >
        <Label x={40} y={785} width={280} color={colors.mint}>
          Public
        </Label>
      </div>
      <div
        style={{
          opacity: privateTag,
          translate: `0 ${(1 - privateTag) * 25}px`,
        }}
      >
        <Label x={295} y={785} width={260} color={colors.red}>
          Internal only
        </Label>
      </div>
      <svg
        width="920"
        height="300"
        style={{ position: "absolute", left: 15, top: 510 }}
      >
        <path
          d="M505 115H710"
          stroke={colors.red}
          strokeWidth="5"
          strokeDasharray="10 8"
          opacity={blocked}
        />
        <path
          d="m535 92 45 45m0-45-45 45"
          stroke={colors.red}
          strokeWidth="7"
          opacity={blocked}
        />
        <path
          d="M170 260H730"
          stroke={colors.mint}
          strokeWidth="5"
          opacity={publicSend}
        />
        <path
          d="m705 245 25 15-25 15"
          stroke={colors.mint}
          strokeWidth="5"
          fill="none"
          opacity={publicSend}
        />
        <g
          transform={`translate(${170 + publicSend * 560} 260)`}
          opacity={publicSend}
        >
          <path
            d="M-18-25H9L19-15V25H-18Z"
            fill={colors.panel}
            stroke={colors.mint}
            strokeWidth="3"
          />
          <path d="M-10-5H10M-10 5H10" stroke={colors.mint} strokeWidth="3" />
        </g>
      </svg>
      <div style={{ opacity: ease(frame, 152, 176) }}>
        <Label x={55} y={865} width={450} color={colors.mint}>
          {frame >= 650 ? "Brochure allowed" : "Permissions attached"}
        </Label>
      </div>
    </Panel>
  );
};

export const ResultsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const results = ease(frame, 154, 217);
  const zero = ease(frame, 211, 225);
  const caveat = ease(frame, 259, 283);
  return (
    <Panel>
      <SceneHeading
        title={
          frame < 259
            ? "One security evaluation"
            : "Boundaries, not perfect answers"
        }
      />
      <Label x={70} y={160} width={810} color={colors.blue}>
        AgentDojo · Claude 3.5 Sonnet
      </Label>
      <div
        style={{
          position: "absolute",
          left: 130,
          top: 260,
          width: 700,
          height: 290,
          borderBottom: "2px solid #a9a59b",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 80,
            width: 155,
            height: results * 190,
            backgroundColor: colors.red,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 440,
            width: 155,
            height: 3,
            backgroundColor: colors.mint,
            opacity: zero,
          }}
        />
        <div style={{ opacity: ease(frame, 157, 170) }}>
          <Label x={20} y={-15} color={colors.red}>
            44 ± 31.3
          </Label>
        </div>
        <div style={{ opacity: zero }}>
          <Label x={380} y={-15} color={colors.mint}>
            0 ± 0.0
          </Label>
        </div>
        <Label x={15} y={310}>
          Undefended
        </Label>
        <Label x={390} y={310}>
          CaMeL
        </Label>
      </div>
      <Label x={55} y={630} width={840} color={colors.muted}>
        Successful attacks · 949-attack evaluation
      </Label>
      <Label x={80} y={677} width={790} color={colors.muted}>
        Paper §6.3 · Table 7
      </Label>
      <div
        style={{ position: "absolute", left: 145, top: 740, opacity: caveat }}
      >
        <HostCharacter size={145} pose="think" />
      </div>
      <div style={{ opacity: caveat }}>
        <Label x={390} y={750} width={440} color={colors.orange}>
          Correct policies required
        </Label>
      </div>
      <div style={{ opacity: ease(frame, 339, 355) }}>
        <Label x={390} y={805} width={440}>
          Some tasks harder
        </Label>
      </div>
      <div style={{ opacity: ease(frame, 403, 420) }}>
        <Label x={390} y={860} width={440}>
          Answers can be wrong
        </Label>
      </div>
    </Panel>
  );
};
