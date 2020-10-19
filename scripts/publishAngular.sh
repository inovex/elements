#!/bin/bash
set -euxo pipefail

# Build current elements version
lerna exec --scope=@inovex.de/elements -- yarn install &&
lerna exec --scope=@inovex.de/elements -- yarn build &&
lerna exec --scope=@inovex.de/elements -- yalc publish --no-sig &&

#link @inovex.de/elements dependency
lerna exec --scope=@inovex.de/elements-angular -- yalc add @inovex.de/elements &&

lerna exec --scope=@inovex.de/elements-angular -- yarn install &&

# build packages
lerna exec --scope=@inovex.de/elements-angular-builder -- yarn build

#move local .yalc dependency to dist folder
lerna exec --scope=@inovex.de/elements-angular -- cp -r {.yalc,yalc.lock} ../dist

#explicitly push @inovex.de/elements-angular due to angular library project structure
yalc publish --no-sig --push ./packages/elements-angular/dist/ &&

#Cleanup
lerna exec --scope=@inovex.de/elements-angular -- yalc remove @inovex.de/elements

