#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
output_dir="$project_dir/dist"

rm -rf "$output_dir"
mkdir -p "$output_dir/assets"

cp "$project_dir/index.html" "$output_dir/index.html"
cp "$project_dir/styles.css" "$output_dir/styles.css"
cp "$project_dir/app.js" "$output_dir/app.js"
cp "$project_dir/robots.txt" "$output_dir/robots.txt"
cp "$project_dir/.nojekyll" "$output_dir/.nojekyll"
cp -R "$project_dir/assets/." "$output_dir/assets/"
