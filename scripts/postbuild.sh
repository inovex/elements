#!/bin/bash
set -euxo pipefail

# We first link the @inovex/elements package locally, so we can import from "@inovex/elements".
# This is necessary as we need this package at build time without publishing it the registry.

# make @inovex/elements locally available to import within this /react project from it
yarn link

# create the react folder in the /dist directory and switch into it
mkdir -p ./dist/react
cd react

# install all the dependencies from this /react project
yarn install

# use the previously built elements in this project
yarn link @inovex/elements

# finally, build the react wrapper
yarn build

# as we copy the files from /dist -> ../dist/react, we also need to manually replace all occurences
#
#   @inovex/elements/dist/loader  -> ../loader
#   @inovex/elements              -> ../..
#
sed -i'' -e 's/@inovex\/elements\/dist\/loader/..\/loader/g' ./dist/components/index.js
sed -i'' -e 's/@inovex\/elements/..\/..\/types\/components/g' ./dist/components/index.d.ts
mv ./dist/* ../dist/react
