#!/usr/bin/env bash
# Usage: npm run prepare-video -- <slug>
# Cuts public/episodes/<slug>/recording.mov to the "keep" segments in
# src/episodes/<slug>/edit.json, normalizes loudness, writes recording-clean.mp4.
set -euo pipefail

slug="${1:?usage: prepare-video <slug>}"
media_dir="public/episodes/$slug"
edit_path="src/episodes/$slug/edit.json"
input_path="$(ls "$media_dir"/recording.* | grep -v clean | head -n 1)"
output_path="$media_dir/recording-clean.mp4"

filter="$(node -e '
const { keep } = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
const parts = keep.map(([s, e], i) =>
  `[0:v]trim=start=${s}:end=${e},setpts=PTS-STARTPTS[v${i}];` +
  `[0:a]atrim=start=${s}:end=${e},asetpts=PTS-STARTPTS[a${i}];`);
const inputs = keep.map((_, i) => `[v${i}][a${i}]`).join("");
console.log(parts.join("") + inputs +
  `concat=n=${keep.length}:v=1:a=1[v][a];[a]loudnorm=I=-16:TP=-1.5:LRA=11[aout]`);
' "$edit_path")"

ffmpeg -hide_banner -y -i "$input_path" \
  -filter_complex "$filter" \
  -map "[v]" -map "[aout]" \
  -c:v libx264 -preset fast -crf 20 -pix_fmt yuv420p \
  -c:a aac -b:a 160k -ar 48000 -movflags +faststart \
  "$output_path"
