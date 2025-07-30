#!/bin/bash

# Note: idealy, we should try clean & format 2-3 times before abording the whole script.
# However, if an error occurs, we want to make sure no unformatted code could be pushed.
set -e

# Check dependencies.
if [[ $(command -v pnpm | wc -c) -eq 0 ]]; then
  echo "pnpm is not installed, enabling corepack."
  corepack enable
fi

# INPUT_DIR=""
# FLAG="package"
VERBOSE=false

# Parse and check arguments.
while getopts i:f::v:: flag
do
    case "${flag}" in
        i) INPUT_DIR=${OPTARG};;
        f) FLAG=${OPTARG:-1};;
        v) VERBOSE=${OPTARG:-1};;
    esac
done

if [ -z "$INPUT_DIR" ] || [ ! -d "$INPUT_DIR" ]; then
    echo "Please specify a valid directory path (-i ./path/to/directory)." ; exit 1
fi

# Install packages.
pnpm install

echo "INPUT_DIR:  $INPUT_DIR"

# Clean & Format!
# // TODO: Remove this line once all js script have migrated to packages per products
 if [ "$FLAG" == "new-package" ] ; then
       ENTRY_POINT="$INPUT_DIR" pnpm tsx ./formatting/generatePackages.ts
   else
       ENTRY_POINT="$INPUT_DIR" pnpm tsx ./formatting/generate.ts
fi

pnpm eslint --quiet --fix --config ./formatting/eslint.config.mjs "$INPUT_DIR/**/*.ts" 
pnpm biome check  --linter-enabled=false --write "$INPUT_DIR"
pnpm prettier --write "$INPUT_DIR/**/*.ts"
