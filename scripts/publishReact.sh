#!/bin/bash
set -euxo pipefail

# Build current elements version
lerna exec --scope=@inovex.de/elements -- yarn install &&
lerna exec --scope=@inovex.de/elements -- yarn build &&
lerna exec --scope=@inovex.de/elements -- yalc publish --no-sig &&

#link @inovex.de/elements dependency
lerna exec --scope=@inovex.de/elements-react -- yalc add @inovex.de/elements &&

lerna exec --scope=@inovex.de/elements-react -- yarn install &&

# build packages
lerna exec --scope=@inovex.de/elements-react -- yarn build &&

#publish all packages (ignore @inovex.de/elements-angular) to yalc store
lerna exec --scope=@inovex.de/elements-react -- yalc publish --no-sig --push &&

# Cleanup
lerna exec --scope=@inovex.de/elements-react -- yalc remove @inovex.de/elements
