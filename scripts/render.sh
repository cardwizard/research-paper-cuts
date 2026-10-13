#!/usr/bin/env bash
# Usage: npm run render -- <slug>   →  out/<slug>.mp4
set -euo pipefail
slug="${1:?usage: render <slug>}"
npx remotion render src/index.ts "$slug" "out/$slug.mp4"
