# Updating Dependencies

In order to get the most mature and stable version, we have to update the dependencies regularly.

## How to Update Stencil in the Core Package

1. Goto https://github.com/ionic-team/stencil and open the `CHANGELOG`.
2. Get the current installed `@stencil/core` version from `packages/elements/package.json`.
3. Search this version in the CHANGELOG, for example `1.5.0`.
4. Goto the next minor version, in our example `1.6.0`.
5. Replace `1.5.0` with `1.6.0` in the `package.json` file.
6. Check if between this version and the last version are any notes about a TypeScript or Jest
   upgrade and update these packages to the given version.
7. Run `yarn install` from within the root of the repo.
8. Run `yarn start` to check if the build succeeds, Storybook opens in the browser and
   all components are working as expected. Make sure that all tests pass before you continue.
9.  If the build fails with some compiler errors of TypeScript or any type mismatchs you may
   need to update the packages `typescript`, `@types/jest`, `jest` and `jest-cli` as well.
   This IS the case when there are some hints in the Stencil `CHANGELOG` like:

   - `typescript: update to typescript 3.7.2`
   - `jest: bump jest versions to fix types`
11. Repeat step 2) - 7) until you reached the latest version of `@stencil/core`.
