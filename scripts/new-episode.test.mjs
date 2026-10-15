import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const script = fileURLToPath(new URL("./new-episode.mjs", import.meta.url));
const starter = fileURLToPath(new URL("./starter", import.meta.url));
const registry =
  'import type { Episode } from "../template";\nexport const episodes: Episode[] = [];\n';

function fixture(t, content = registry) {
  const cwd = mkdtempSync(join(tmpdir(), "rpc-scaffold-test-"));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  mkdirSync(join(cwd, "src/episodes"), { recursive: true });
  cpSync(starter, join(cwd, "scripts/starter"), { recursive: true });
  writeFileSync(join(cwd, "src/episodes/index.ts"), content);
  return {
    cwd,
    run: (...args) =>
      spawnSync(process.execPath, [script, ...args], { cwd, encoding: "utf8" }),
    read: (path) => readFileSync(join(cwd, path), "utf8"),
    exists: (path) => existsSync(join(cwd, path)),
  };
}

test("quick take registers an episode and creates unverified planning artifacts", (t) => {
  const f = fixture(t);
  const result = f.run("fresh-release", "--quick-take");
  assert.equal(result.status, 0, result.stderr);
  const index = f.read("src/episodes/fresh-release/index.ts");
  assert.match(index, /export const freshRelease: Episode/);
  assert.match(index, /release or topic title/);
  assert.doesNotMatch(index, /arXiv|__SLUG__|__CAMEL__/);
  assert.match(f.read("src/episodes/index.ts"), /\[freshRelease\]/);
  assert.match(
    f.read("src/episodes/fresh-release/sources.md"),
    /unverified scaffold/,
  );
  assert.match(
    f.read("src/episodes/fresh-release/storyboard.md"),
    /placeholder scene/,
  );
  assert.equal(f.read("src/episodes/fresh-release/captions.json"), "[]\n");
  assert.ok(f.exists("public/episodes/fresh-release"));
});

test("paper mode remains available and can follow a quick take", (t) => {
  const f = fixture(t);
  assert.equal(f.run("fresh-release", "--quick-take").status, 0);
  const result = f.run("new-paper");
  assert.equal(result.status, 0, result.stderr);
  assert.match(f.read("src/episodes/new-paper/index.ts"), /arXiv:XXXX/);
  assert.match(f.read("src/episodes/index.ts"), /\[freshRelease, newPaper\]/);
  assert.ok(!f.exists("src/episodes/new-paper/sources.md"));
  const before = f.read("src/episodes/index.ts");
  assert.notEqual(f.run("new-paper").status, 0);
  assert.equal(f.read("src/episodes/index.ts"), before);
});

test("invalid slugs and flags fail before creating files", (t) => {
  const f = fixture(t);
  for (const args of [
    [],
    ["../outside"],
    ["123"],
    ["bad--slug"],
    ["bad-"],
    ["valid", "--unknown"],
    ["valid", "--quick-take", "--quick-take"],
  ]) {
    assert.notEqual(f.run(...args).status, 0, JSON.stringify(args));
    assert.equal(f.read("src/episodes/index.ts"), registry);
    assert.ok(!f.exists("public"));
  }
});

test("existing media folder is preserved without partial scaffolding", (t) => {
  const f = fixture(t);
  mkdirSync(join(f.cwd, "public/episodes/existing"), { recursive: true });
  writeFileSync(
    join(f.cwd, "public/episodes/existing/recording.mov"),
    "untouched",
  );
  assert.notEqual(f.run("existing", "--quick-take").status, 0);
  assert.equal(f.read("public/episodes/existing/recording.mov"), "untouched");
  assert.ok(!f.exists("src/episodes/existing"));
  assert.equal(f.read("src/episodes/index.ts"), registry);
});

test("changed registry and identifier collisions abort before writing", (t) => {
  for (const content of [
    "export const episodes = [];\n",
    registry.replace(
      "export const",
      'import { freshRelease } from "./another";\nexport const',
    ),
  ]) {
    const f = fixture(t, content);
    assert.notEqual(f.run("fresh-release", "--quick-take").status, 0);
    assert.equal(f.read("src/episodes/index.ts"), content);
    assert.ok(!f.exists("src/episodes/fresh-release"));
  }
});

test("registry with a trailing comma gets a valid additional entry", (t) => {
  const f = fixture(t, registry.replace("= []", "= [existing,]"));
  assert.equal(f.run("next-release", "--quick-take").status, 0);
  assert.match(f.read("src/episodes/index.ts"), /\[existing, nextRelease\]/);
});
