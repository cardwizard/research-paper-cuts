// Usage: npm run new-episode -- <slug> [--quick-take]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const slug = process.argv[2];
const flags = process.argv.slice(3);
if (
  !slug ||
  !/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(slug) ||
  flags.some((flag) => flag !== "--quick-take") ||
  flags.length > 1
)
  throw new Error("usage: new-episode <kebab-slug> [--quick-take]");
const quickTake = flags.includes("--quick-take");
const dir = `src/episodes/${slug}`;
if (existsSync(dir)) throw new Error(`${dir} already exists`);
if (existsSync(`public/episodes/${slug}`))
  throw new Error(`public/episodes/${slug} already exists`);
const camel = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

const registry = "src/episodes/index.ts";
const reg = readFileSync(registry, "utf8");
const importAnchor = /import type \{ Episode \} from "\.\.\/template";\n/;
const listAnchor = /episodes: Episode\[\] = \[([^\]]*)\]/;
if (!importAnchor.test(reg) || !listAnchor.test(reg))
  throw new Error("Episode registry format changed; scaffold aborted.");
if (new RegExp(`import \\{ ${camel} \\}`).test(reg))
  throw new Error(`Episode identifier ${camel} already exists`);
const files = ["index.ts", "scenes.tsx", "edit.json"].map((file) => {
  let text = readFileSync(`scripts/starter/${file}`, "utf8")
    .replaceAll("__SLUG__", slug)
    .replaceAll("__CAMEL__", camel);
  if (quickTake && file === "index.ts") {
    text = text
      .replace(
        "One-line hook for the title card?",
        "What changed, and why does it matter?",
      )
      .replace(
        "Replace with the paper display title",
        "Replace with the release or topic title",
      )
      .replace(
        "Paper title · arXiv:XXXX.XXXXX · Lab",
        "Replace with verified source and release date",
      );
  }
  return [file, text];
});

mkdirSync(dir, { recursive: true });
mkdirSync(`public/episodes/${slug}`, { recursive: true });
for (const [file, text] of files) {
  writeFileSync(`${dir}/${file}`, text);
}
writeFileSync(`${dir}/captions.json`, "[]\n");
if (quickTake) {
  writeFileSync(
    `${dir}/sources.md`,
    `# ${slug} - quick take sources

Status: unverified scaffold, not ready to publish.

## Source context

Release/topic:
Official URL (optional input; required evidence for release facts):
Published date and timezone:
Checked date:
Version, availability, regions, plan restrictions:

## Claim ledger

| Spoken timestamp and claim | Fact / opinion / prediction | Primary URL and exact section | Scope and caveat | Visual implication | Status |
| --- | --- | --- | --- | --- | --- |

No factual claims have been verified yet. Flag conflicts with the recording;
do not fix inaccurate speech by changing only its captions.
`,
  );
  writeFileSync(
    `${dir}/storyboard.md`,
    `# ${slug} - quick take storyboard

Status: placeholder scene only; replace before delivery.
Use the cleaned recording and word timestamps, not a rewritten script.

## Sentence-by-sentence visual audit

| Clean time / trigger word | Global frame / scene-local frame | Spoken meaning | Source -> action -> consequence | Visual form | Claim ledger reference | Review |
| --- | --- | --- | --- | --- | --- | --- |

Map every important action and result. Keep objects continuous and results
visible. Use exact comparisons only with equivalent, sourced measurements.
Label illustrative interfaces and vendor demos honestly. Keep all narration
captioned, including both bookends, in the reserved caption band.
`,
  );
}

let updatedRegistry = reg.replace(
  importAnchor,
  (anchor) => `${anchor}import { ${camel} } from "./${slug}";\n`,
);
updatedRegistry = updatedRegistry.replace(
  listAnchor,
  (_, list) =>
    `episodes: Episode[] = [${list.trim().replace(/,\s*$/, "")}${list.trim() ? ", " : ""}${camel}]`,
);
writeFileSync(registry, updatedRegistry);
console.log(
  `Created ${dir}. Put your recording in public/episodes/${slug}/recording.mov`,
);
if (quickTake)
  console.log(
    "Quick take: follow docs/09-quick-takes.md; replace the placeholder scene and verify sources before publishing.",
  );
