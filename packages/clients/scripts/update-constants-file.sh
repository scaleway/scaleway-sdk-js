#!/usr/bin/env bash

set -e

echo "Updating version in constants.ts"

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PACKAGE_PATH="${SCRIPT_DIR}/../package.json"
CONSTANTS_PATH="${SCRIPT_DIR}/../src/scw/constants.ts"

# Search for the new version
NEW_VERSION=$(node -e "console.log(require('${PACKAGE_PATH}').version);")
[ -z "${NEW_VERSION}" ] && echo "New version cannot be found, abording" && exit 1
echo "Found version: ${NEW_VERSION}"

# Replace the old version with the new one
OLD_LINE_EXP="\(^export const version.*$\)"
NEW_LINE="export const version = 'v${NEW_VERSION}'"
NEW_FILE=$( cat "${CONSTANTS_PATH}" | sed -e "s/${OLD_LINE_EXP}/${NEW_LINE}/" )
if [[ "$NEW_FILE" != *"$NEW_LINE"* ]]; then
  echo "New file content doesn't contain expected version:"
  echo "${NEW_FILE}"
  exit 2
fi

# Copy content to file
echo "${NEW_FILE}" > "${CONSTANTS_PATH}"
echo "Updated version in constants file"

# Add change to commit
git add "${CONSTANTS_PATH}"
