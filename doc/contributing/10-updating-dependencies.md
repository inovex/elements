# Updating Dependencies

In order to get the most mature and stable version, we have to update the dependencies regularly.

## How to Update Stencil in the Core Package

1. Go to https://github.com/ionic-team/stencil and open the `CHANGELOG`.
2. Get the current installed `@stencil/core` version from `packages/elements/package.json`.
3. Search this version in the CHANGELOG, for example `1.5.0`.
4. Go to the next minor version, in our example `1.6.0`.
5. Replace `1.5.0` with `1.6.0` in the `package.json` file.
6. Check for any note about a TypeScript or Jest upgrade between the current and last version and update these packages to the given version if necessary.
7. Run `yarn install` from within the root of the repo.
8. Run `yarn start` to check if the build succeeds, Storybook opens in the browser and
   all components are working as expected. Make sure that all tests pass before you continue.
9. If the build fails with some compiler errors of TypeScript or any type mismatchs, you may
   need to update the packages `typescript`, `@types/jest`, `jest`, and `jest-cli` as well.
   This IS the case when there are some hints in the Stencil `CHANGELOG` like:

   - `typescript: update to typescript 3.7.2`
   - `jest: bump jest versions to fix types`

10. Repeat step 2) - 7) until you reached the latest version of `@stencil/core`.

## How to update the material web components

1. Visit the [material-components-web github page](https://github.com/material-components/material-components-web)
   and open the [CHANGELOG](https://github.com/material-components/material-components-web/releases)
2. Search for the currently used material-components-web version in the `CHANGELOG`, e.g. `5.0.0`
3. If a new version is available, open the `package.json` located in the elements package directory and replace
   the current version of **every** material component with the next minor version, e.g. `5.1.0`.
4. Run `yarn install` in the root directory
5. Run `yarn start` to check if the build succeeds and the Storybook opens in the browser.
6. Go through every component and check the `CHANGELOG` for any changes. Adjust the component accordingly and
   make sure that the component works as intended, the styles have not been altered by the upgrade, and that
   all component tests pass.
7. Repeat steps 2) - 6) until you have reached the latest version.
