#!/bin/bash
set -euxo pipefail

# Build current elements version
lerna exec --scope=@inovex/elements -- yarn install &&
lerna exec --scope=@inovex/elements -- yarn build &&
lerna exec --scope=@inovex/elements -- yalc publish --no-sig &&

#link @inovex/elements dependency
lerna exec --scope=@inovex/elements-react -- yalc add @inovex/elements &&

lerna exec --scope=@inovex/elements-react -- yarn install &&

# build packages
lerna exec --scope=@inovex/elements-react -- yarn build &&

#publish all packages (ignore @inovex/elements-angular) to yalc store
lerna exec --scope=@inovex/elements-react -- yalc publish --no-sig --push &&

# Cleanup
lerna exec --scope=@inovex/elements-react -- yalc remove @inovex/elements
