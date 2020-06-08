#!/bin/bash
set -euxo pipefail

# Build current elements version
lerna exec --scope=@inovex/elements -- yarn install &&
lerna exec --scope=@inovex/elements -- yarn build &&
lerna exec --scope=@inovex/elements -- yalc publish --no-sig &&

#link @inovex/elements dependency
lerna exec --scope=@inovex/elements-angular -- yalc add @inovex/elements &&

lerna exec --scope=@inovex/elements-angular -- yarn install &&

# build packages
lerna exec --scope=@inovex/elements-angular-builder -- yarn build

#move local .yalc dependency to dist folder
lerna exec --scope=@inovex/elements-angular -- mv .yalc yalc.lock ../dist &&

#explicitly push @inovex/elements-angular due to angular library project structure
yalc publish --no-sig --push ./packages/elements-angular/dist/ &&

#Cleanup
lerna exec --scope=@inovex/elements-angular -- yalc remove @inovex/elements

