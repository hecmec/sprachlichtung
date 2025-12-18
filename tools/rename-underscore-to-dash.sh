#!/usr/bin/env bash
# Rename all files and directories under the specified root directory,
# replacing underscores (_) with dashes (-) in their names.
# Skips names starting with an underscore (_) or _category_.
# Usage: ./rename-underscore-to-dash.sh [--dry-run|-n] 
# ./tools/rename-underscore-to-dash.sh --dry-run ./docs/kritisches-denken/010-einfuehrung-ins-kritische-denken/
set -euo pipefail

DRY_RUN=0
if [[ "${1:-}" == "--dry-run" || "${1:-}" == "-n" ]]; then
  DRY_RUN=1
fi

ROOT="${2:-.}"

# Rename entries bottom-up to avoid breaking parent paths
find "$ROOT" -depth -name '*_*' | while IFS= read -r path; do
  base="$(basename "$path")"
  dir="$(dirname "$path")"

  # Skip if the file/dir name starts with an underscore
  if [[ "$base" == _* ]]; then
    continue
  fi

  # Skip if the file/dir name starts with _category_
  if [[ "$base" == _category_* ]]; then
    continue
  fi

  new_base="${base//_/-}"
  new_path="$dir/$new_base"

  if [[ "$path" == "$new_path" ]]; then
    continue
  fi

  if [[ -e "$new_path" ]]; then
    echo "SKIP: target exists -> $new_path"
    continue
  fi

  if [[ "$DRY_RUN" -eq 1 ]]; then
    echo "DRY: mv -- '$path' '$new_path'"
  else
    echo "mv -- '$path' '$new_path'"
    mv -- "$path" "$new_path"
  fi
done

echo "Done."