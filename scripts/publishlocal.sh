#!/bin/bash
set -euxo pipefail

#link @inovex/elements dependency
if [ $# -gt 0 ]; then
    lerna exec --scope=@inovex/elements-react --scope=@inovex/elements-angular -- yalc add $1 @inovex/elements
else
    lerna exec --scope=@inovex/elements-react --scope=@inovex/elements-angular -- yalc add @inovex/elements
fi &&

#build packages
yarn build &&

#publish all packages (ignore @inovex/elements-angular) to yalc store
lerna exec --ignore=@inovex/elements-angular -- yalc publish --no-sig &&

#move local .yalc dependency to dist folder
lerna exec --scope=@inovex/elements-angular -- mv .yalc yalc.lock ../dist &&

#publish ignore @inovex/elements-angular to yalc store
yalc publish --no-sig ./packages/elements-angular/dist/ &&

#push all packages (ignore @inovex/elements-angular) to yalc store
lerna exec --ignore=@inovex/elements-angular -- yalc push --changed &&

#explicitly push @inovex/elements-angular due to angular library project structure
yalc push --changed ./packages/elements-angular/dist/ &&

#unlink @inovex/elements dependency
lerna exec --scope=@inovex/elements-react --scope=@inovex/elements-angular -- yalc remove @inovex/elements;