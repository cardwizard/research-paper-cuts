// Usage: npm run new-episode -- <slug>
import {
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";

const slug = process.argv[2];
if (!slug || !/^[a-z0-9-]+$/.test(slug))
  throw new Error("usage: new-episode <kebab-slug>");
const dir = `src/episodes/${slug}`;
if (existsSync(dir)) throw new Error(`${dir} already exists`);
const camel = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

mkdirSync(dir, { recursive: true });
mkdirSync(`public/episodes/${slug}`, { recursive: true });
for (const file of ["index.ts", "scenes.tsx", "edit.json"]) {
  const text = readFileSync(`scripts/starter/${file}`, "utf8")
    .replaceAll("__SLUG__", slug)
    .replaceAll("__CAMEL__", camel);
  writeFileSync(`${dir}/${file}`, text);
}
writeFileSync(`${dir}/captions.json`, "[]\n");

const registry = "src/episodes/index.ts";
let reg = readFileSync(registry, "utf8");
reg = reg.replace(
  /(import type \{ Episode \} from "\.\.\/template";\n)/,
  `$1import { ${camel} } from "./${slug}";\n`,
);
reg = reg.replace(
  /episodes: Episode\[\] = \[([^\]]*)\]/,
  (_, list) => `episodes: Episode[] = [${list.trim()}, ${camel}]`,
);
writeFileSync(registry, reg);
console.log(
  `Created ${dir}. Put your recording in public/episodes/${slug}/recording.mov`,
);
