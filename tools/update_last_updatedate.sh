#!/bin/bash
# This script updates the last-update date in a markdown file.
# It expects the file path as an argument and checks if the file is a markdown file in the sprachlichtung folder.
# It is called by the emeraldwalk.runonsave extension in VSCode.

# Print a message indicating we are updating the date
echo "Updating the last-update date in the markdown file..."
echo "File to update: $1"

# Check if argument is provided
if [ -z "$1" ]; then
    echo "Error: No file specified."
    echo "Usage: $0 path/to/markdown/file.md"
    exit 1
fi

# Check if the file is a markdown file and in the sprachlichtung folder
if [[ ! "$1" =~ \.md$ ]] || [[ ! "$1" =~ sprachlichtung ]]; then
    echo "Error: File must be a markdown file (.md) and in the sprachlichtung folder."
    echo "Provided file: $1"
    exit 1
fi

# Check if file exists
if [ ! -f "$1" ]; then
    echo "Error: File does not exist: $1"
    exit 1
fi

# Get the current date in yyyy-mm-dd format
current_date=$(date +%Y-%m-%d)

# Update the last-update date in the markdown file
sed -i "s/  date: [0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}/  date: $current_date/" "$1"