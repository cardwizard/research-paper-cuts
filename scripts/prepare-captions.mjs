// Usage: npm run prepare-captions -- <slug>
// Maps the raw transcript (captions-medium.json, source-recording timings) onto
// the edited video using the "keep" segments and "captionFixes" in edit.json.
import { readFile, writeFile } from "node:fs/promises";

const slug = process.argv[2];
if (!slug) throw new Error("usage: prepare-captions <slug>");
const dir = `src/episodes/${slug}`;
const { keep, captionFixes = [] } = JSON.parse(
  await readFile(`${dir}/edit.json`, "utf8"),
);
const source = JSON.parse(
  await readFile(`${dir}/captions-medium.json`, "utf8"),
);

const norm = (text) => text.trim().toLowerCase();
for (let index = 0; index < source.length; index++) {
  for (const { match, replace } of captionFixes) {
    const hit = match.every(
      (word, k) => source[index + k] && norm(source[index + k].text) === word,
    );
    if (!hit) continue;
    replace.forEach((text, k) => {
      if (text !== null) source[index + k].text = text;
    });
    break;
  }
}

const segments = [];
let offset = 0;
for (const [s, e] of keep) {
  segments.push({ start: s * 1000, end: e * 1000, offset });
  offset += (e - s) * 1000;
}

const captions = [];
for (const original of source) {
  const caption = { ...original };
  const seg =
    segments.find(
      (g) => caption.startMs >= g.start && caption.startMs < g.end,
    ) ??
    (caption.startMs < segments[0].start && caption.endMs > segments[0].start
      ? segments[0]
      : null);
  if (!seg) continue;
  caption.startMs =
    Math.max(caption.startMs, seg.start) - seg.start + seg.offset;
  caption.endMs = Math.min(caption.endMs, seg.end) - seg.start + seg.offset;
  if (caption.endMs <= caption.startMs) continue;
  caption.timestampMs = Math.round((caption.startMs + caption.endMs) / 2);
  delete caption.pageBreakAfter;
  captions.push(caption);
}

for (let index = 0; index < captions.length - 1; index++) {
  if (captions[index + 1].startMs - captions[index].endMs > 1200) {
    captions[index].pageBreakAfter = true;
  }
}

await writeFile(`${dir}/captions.json`, JSON.stringify(captions, null, 2));
console.log(`Wrote ${captions.length} caption tokens to ${dir}/captions.json`);
