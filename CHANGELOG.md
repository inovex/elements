## [0.15.1](https://gitlab.inovex.de/inovex-elements/core/compare/v0.15.0...v0.15.1) (2020-03-26)


### Bug Fixes

* **elements:** revert @stencil/core to 1.10.3 due to style issues ([376c79d](https://gitlab.inovex.de/inovex-elements/core/commit/376c79d94d45c4ab52bbf635bbfa9c446a0d7264))



# [0.15.0](https://gitlab.inovex.de/inovex-elements/core/compare/v0.14.0...v0.15.0) (2020-03-25)


### Bug Fixes

* **elements-react|ino-control-item:** add missing component ([9f29b68](https://gitlab.inovex.de/inovex-elements/core/commit/9f29b68095b5286368533aa359a491580c7e848d))


### Features

* **elements|ino-button:** add property ino-loading to display a loading spinner ([7cbbce7](https://gitlab.inovex.de/inovex-elements/core/commit/7cbbce7058162e2a585ce08431d28e0113a19cf8))
* **elements|ino-header:** add component ([4c5c69f](https://gitlab.inovex.de/inovex-elements/core/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))
* **elements|ino-segment-group:** add ino-segment-group and -button ([e26478c](https://gitlab.inovex.de/inovex-elements/core/commit/e26478cf593052c23cd707ecb678997dd5cd6e85))
* **elements|ino-snackbar:** add feedback variant ([252c044](https://gitlab.inovex.de/inovex-elements/core/commit/252c0441131a97cc3c8151039c6727f48ae8809e))

### BREAKING CHANGES
We updated our dependencies, which resulted in conflicts with the `autofocus` property. If you use the typed version of the elements package, you need to change all appearances of `autofocus` to `autoFocus`. If you use the web components you don't need to change anything.

# [0.14.0](https://gitlab.inovex.de/inovex-elements/core/compare/v0.13.0...v0.14.0) (2020-03-17)


### Bug Fixes

* **elements:** fix wrong index in activeTabChange event in the ino-tab-bar ([4c90881](https://gitlab.inovex.de/inovex-elements/core/commit/4c908817d62af58fc6442ebd5271c5b099ade997))


### Features

* **elements:** add option to align snackbar to the right ([eb8b8ab](https://gitlab.inovex.de/inovex-elements/core/commit/eb8b8ab39660e0f5fe4ea3a99ae5aa338b37d31a))
* **elements:** ino-fab(-set) in inovex style ([8bd1b32](https://gitlab.inovex.de/inovex-elements/core/commit/8bd1b32458f60ce2c876e005e5cbc1159e269587))



# [0.13.0](https://gitlab.inovex.de/inovex-elements/core/compare/v0.12.0...v0.13.0) (2020-02-19)

### Bug Fixes

* **elements:** add timeout to ino-tooltip to wait for host element to be rendered ([43e7b5a](https://gitlab.inovex.de/inovex-elements/core/commit/43e7b5a0c7b53138ab5600eb02ab28be66180dec))
* **elements:** throw better exception in ino-tooltip when target not found ([8c0412f](https://gitlab.inovex.de/inovex-elements/core/commit/8c0412f37828f48553432b3effcb8d44eaab4191))

### Features

* **elements:** ino-snackbar in inovex design ([f080cab6](https://gitlab.inovex.de/inovex-elements/core/commit/f080cab6dd6bc2b64809a9774ea4551730bd7837))

# [0.12.0](https://gitlab.inovex.de/inovex-elements/core/compare/v0.11.0...v0.12.0) (2020-02-12)


### Bug Fixes

* **elements:** disable click on icon when datepicker disabled ([ebb757e](https://gitlab.inovex.de/inovex-elements/core/commit/ebb757ef9fba177715cbe0c693297511d470c7e1))
* **elements:** fix layout of datepicker with disabled month arrow(s) ([2a47f9f](https://gitlab.inovex.de/inovex-elements/core/commit/2a47f9f5f12c29bffc2fe169c523ac62b9bd0ed5))
* **elements:** set correct parameters for latest symbolic link ([2a6a888](https://gitlab.inovex.de/inovex-elements/core/commit/2a6a8888e60098b3ff5950cdd2f8a038195d63ca))


### Features

* **elements:** add option to mark inputs as optional ([6ee24de](https://gitlab.inovex.de/inovex-elements/core/commit/6ee24de3e8953967e28483a7cc2c83e136a5d0bc))
* **elements:** add ino-switch component ([23a5512](https://gitlab.inovex.de/inovex-elements/core/commit/23a55126912e218b47170b9a0442b1c2924cc3d7))
* **elements:** add month picker option to ino-datepicker ([1f796a6](https://gitlab.inovex.de/inovex-elements/core/commit/1f796a64bcd69d1dba450127589174fb1f3d0562))



# [0.11.0](https://gitlab.inovex.de/inovex-elements/core/compare/v0.10.1...v0.11.0) (2020-02-07)


### Bug Fixes

* **elements-storybook:** fix icon search input not updating it's value ([64c7ad5](https://gitlab.inovex.de/inovex-elements/core/commit/64c7ad5beee6015509e55760c9b08bc32ec3d7e3))
* **ino-textarea:** set inner width to 100% ([6c37996](https://gitlab.inovex.de/inovex-elements/core/commit/6c379962b7d1373d2537f17ff222548bfc4d59f5))


### Features

* **elements:** add email validation onBlur ([83a38f7](https://gitlab.inovex.de/inovex-elements/core/commit/83a38f70abe453e8a93a129ab7cb520e9f7ca295))
* **elements:** add new ino-error prop to ino-input ([3e4ae46](https://gitlab.inovex.de/inovex-elements/core/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](https://gitlab.inovex.de/inovex-elements/core/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))
* **elements:** ino-checkbox in inovex style ([5884df0](https://gitlab.inovex.de/inovex-elements/core/commit/5884df0fd950fe02636731b7b6abf29af5f7b008))
* **elements-react:** add ino-radio-group component ([2500449](https://gitlab.inovex.de/inovex-elements/core/commit/2500449b7368e0184667c9fd32550a450618c4dd))
* **icons:** add new icons, update icon names, update readme ([d176efa](https://gitlab.inovex.de/inovex-elements/core/commit/d176efa3742fe51b6f3f880ec66378de5a5b31df))

### Breaking Changes
Some icons have been renamed to match the new naming convention. The new naming convention was introduced to reflect the newly added sizes and colors in the ID of each icon. The old naming convention was: `<id>-<a|b>` (e.g. `birthday-a`). The new naming convention is the following: `<id>-<size>-<grey>?` (e.g. `birthday-m`). If any of your used ino-icons has the suffix `-a` or `-b`, please search for the new id in the [ino-icon page](https://elements.inovex.io/dist/latest/storybook/?path=/story/ino-icon--default-usage) and update the `ino-icon`-Property accordingly (e.g. `birthday-a` -> `birthday-m`).

There are three different sizes: xs, s and m. The default which should be used is m. Many icons also have a grey version which has the suffix "-grey" (e.g. `birthday-m-grey`).


## [0.10.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.10.0...v0.10.1) (2019-12-09)


### Bug Fixes

* pipeline ([e237d00](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e237d00ae7d9925fd231e476746adf09384056a4))



# [0.10.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.9.0...v0.10.0) (2019-12-09)


### Bug Fixes

* reset native input properly ([c397da0](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c397da01cdc46b30e5e507f2fab5ab7798c2ff5b))


### Features

* **angular:** inital project ([df78166](http://gitlab.inovex.de:2424/inovex-elements/core/commit/df78166498a76f1b752727a8ba57b6dfa1ee4434))
* **ino-icon:** add james icons, improve stories, add search functionality ([d67db75](http://gitlab.inovex.de:2424/inovex-elements/core/commit/d67db758b539e5f99e0c1b412bfdebb079a4f162))



# [0.9.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.8.0...v0.9.0) (2019-10-11)


### Bug Fixes

* **ino-datepicker:** fix overlapping label ([0e29ecd](http://gitlab.inovex.de/inovex-elements/core/commit/0e29ecd))
* **ino-datepicker:** remove internal static option ([abffbcc](http://gitlab.inovex.de/inovex-elements/core/commit/abffbcc))
* **ino-input:** autofocus ([cc70866](http://gitlab.inovex.de/inovex-elements/core/commit/cc70866))
* **ino-tooltip:** fix misplacement ([2e4f2f8](http://gitlab.inovex.de/inovex-elements/core/commit/2e4f2f8))


### Features

* **ino-datepicker:** inovex design ([b956bab](http://gitlab.inovex.de/inovex-elements/core/commit/b956bab))
* **ino-input:** add 'any' as step option ([77b1f74](http://gitlab.inovex.de/inovex-elements/core/commit/77b1f74))



# [0.8.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.7.0...v0.8.0) (2019-09-06)


### Features

* **ino-select:** add prop to enable/disable prepended empty element ([e38c9b8](http://gitlab.inovex.de/inovex-elements/core/commit/e38c9b8))



# [0.7.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.6.6...v0.7.0) (2019-08-16)


### Bug Fixes

* **ino-select:** prevent change of inoPrependDefault to avoid layout problems ([a12eac1](http://gitlab.inovex.de/inovex-elements/core/commit/a12eac1))
* **ino-textarea:** add black border on hover ([ff0d1c5](http://gitlab.inovex.de/inovex-elements/core/commit/ff0d1c5))


### Features

* **ino-control-item:** add component ([da8cc86](http://gitlab.inovex.de/inovex-elements/core/commit/da8cc86))
* **ino-input:** add datalist ([6c4e495](http://gitlab.inovex.de/inovex-elements/core/commit/6c4e495))



## [0.6.6](http://gitlab.inovex.de/inovex-elements/core/compare/v0.6.5...v0.6.6) (2019-08-09)


### Bug Fixes

* **ino-chip-set:** add timeout for ino-chip-set-test ([574e86a](http://gitlab.inovex.de/inovex-elements/core/commit/574e86a))
* **ino-datepicker:** keep input focus as long as picker is opened ([bec1190](http://gitlab.inovex.de/inovex-elements/core/commit/bec1190))



## [0.6.5](http://gitlab.inovex.de/inovex-elements/core/compare/v0.6.4...v0.6.5) (2019-08-06)



## [0.6.4](http://gitlab.inovex.de/inovex-elements/core/compare/v0.6.3...v0.6.4) (2019-08-05)


### Bug Fixes

* **ino-fab:** wrong rendering condition for ino-tooltip within ino-fab ([3c45eff](http://gitlab.inovex.de/inovex-elements/core/commit/3c45eff))


### Features

* **ino-chip:** new default color ([4458b17](http://gitlab.inovex.de/inovex-elements/core/commit/4458b17))
* **ino-input:** add ino-blur und ino-focus events ([013004b](http://gitlab.inovex.de/inovex-elements/core/commit/013004b))



## [0.6.3](http://gitlab.inovex.de/inovex-elements/core/compare/v0.6.2...v0.6.3) (2019-07-29)


### Bug Fixes

* **ino-input:** add mdc-disabled class dynamically ([dda5c9a](http://gitlab.inovex.de/inovex-elements/core/commit/dda5c9a))



## [0.6.2](http://gitlab.inovex.de/inovex-elements/core/compare/v0.6.1...v0.6.2) (2019-07-24)



## [0.6.1](http://gitlab.inovex.de/inovex-elements/core/compare/v0.6.0...v0.6.1) (2019-07-24)


### Bug Fixes

* **ino-snackbar:** always show snackbar to avoid internal state ([acfb1ac](http://gitlab.inovex.de/inovex-elements/core/commit/acfb1ac))



# [0.6.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.5.6...v0.6.0) (2019-07-23)


### Bug Fixes

* **icons:** add icon support for react components ([7ca10fa](http://gitlab.inovex.de/inovex-elements/core/commit/7ca10fa))
* **ino-input:** DOM-Exception error when using email-type ([4f8a8f1](http://gitlab.inovex.de/inovex-elements/core/commit/4f8a8f1))


### Features

* **mdc-components:** update to version 3.0.0 ([6250abe](http://gitlab.inovex.de/inovex-elements/core/commit/6250abe))



<a name="0.5.6"></a>
## [0.5.6](http://gitlab.inovex.de/inovex-elements/core/compare/v0.5.5...v0.5.6) (2019-05-16)

### Features

* **webpack:** re-add webpack-plugin for webpack projects ([bf5ac07](http://gitlab.inovex.de/inovex-elements/core/commit/bf5ac07))

In most cases, the integration of inovex elements requires two steps:

#### 1) Copy `dist` folder of `inovex-elements` dependency to project's assets

If you are using webpack and provide your own webpack config file, you can use the provided `webpack-plugin.js` as a plugin
and the elements will be provided automatically. You just have to import the component registry as part of your main bundle:

```javascript
// webpack.config.js

module.exports = {
    //...
    plugins: [ /* ... */, require('@inovex/elements/webpack-plugin')()]
}
```

or

```javascript
// webpack.config.js

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  config.plugins = [...config.plugins, require('@inovex/elements/webpack-plugin')('static/js')];
  return config;
};
```

If the final javascript bundle is not located in the root of the web root, you have to specify the path as the first parameter,
e.g. if your javascript bundle is located in `static/js`, use `require('@inovex/elements/webpack-plugin')('static/js')`.

#### 2) Load the elements module in entrypoint file

```javascript
// entrypoint file

import '@inovex/elements';
```

## [0.5.5](http://gitlab.inovex.de/inovex-elements/core/compare/v0.5.4...v0.5.5) (2019-05-02)


### Bug Fixes

* **react:** add Fragment wrapper around children ([35ce49b](http://gitlab.inovex.de/inovex-elements/core/commit/35ce49b))



## [0.5.4](http://gitlab.inovex.de/inovex-elements/core/compare/v0.5.3...v0.5.4) (2019-04-30)


### Bug Fixes

* **postbuild:** fix wrong path ([b1291b0](http://gitlab.inovex.de/inovex-elements/core/commit/b1291b0))



## [0.5.3](http://gitlab.inovex.de/inovex-elements/core/compare/v0.5.2...v0.5.3) (2019-04-29)


### Bug Fixes

* **ino-datepicker:** replace ino-type with newer ino-date-format attribute in readme ([db92e69](http://gitlab.inovex.de/inovex-elements/core/commit/db92e69))
* **react:** export InoInputFile, was missing and export InoListDivider as InoListDivider instead exporting it as InoDivider ([8e310a6](http://gitlab.inovex.de/inovex-elements/core/commit/8e310a6))

### Features

* add react examples to every component readme ([2314dd6](http://gitlab.inovex.de/inovex-elements/core/commit/2314dd6))



## [0.5.2](http://gitlab.inovex.de/inovex-elements/core/compare/v0.5.1...v0.5.2) (2019-04-11)


### Bug Fixes

* **ino-datepicker:** datepicker will now open on input click ([842d21b](http://gitlab.inovex.de/inovex-elements/core/commit/842d21b))
* **postinstall:** remove postinstall from released package ([9b0d202](http://gitlab.inovex.de/inovex-elements/core/commit/9b0d202))
* **storybook:** remove tsx for syntax highlight ([f1dbfb9](http://gitlab.inovex.de/inovex-elements/core/commit/f1dbfb9))



## [0.5.1](http://gitlab.inovex.de/inovex-elements/core/compare/v0.5.0...v0.5.1) (2019-03-26)

### Bug Fixes

* **postinstall:** remove postinstall from released package ([9b0d202](http://gitlab.inovex.de/inovex-elements/core/commit/9b0d202))
* **storybook:** remove tsx for syntax highlight ([f1dbfb9](http://gitlab.inovex.de/inovex-elements/core/commit/f1dbfb9))

## [0.5.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.4.0...v0.5.0) (2019-03-21)

* **events:** rename (most of) event names ([ed04d98](http://gitlab.inovex.de/inovex-elements/core/commit/ed04d98))
* **ino-datepicker:** fix too many tabs to skip datepicker ([3e25361](http://gitlab.inovex.de/inovex-elements/core/commit/3e25361))
* **ino-input:** Emit new value ([5af46f9](http://gitlab.inovex.de/inovex-elements/core/commit/5af46f9))
* **ino-input:** fix validation bug ([6c2c904](http://gitlab.inovex.de/inovex-elements/core/commit/6c2c904))
* **ino-textarea:** change event listening ([1340af4](http://gitlab.inovex.de/inovex-elements/core/commit/1340af4))
* **text-area:** lower case of event ([3a9194d](http://gitlab.inovex.de/inovex-elements/core/commit/3a9194d))

### Features

* **ino-button:** add constants ([cea66f3](http://gitlab.inovex.de/inovex-elements/core/commit/cea66f3))
* **ino-card:** add image, action buttons and action icons ([5e1c59d](http://gitlab.inovex.de/inovex-elements/core/commit/5e1c59d))
* **ino-checkbox:** change to controlled component ([171e12b](http://gitlab.inovex.de/inovex-elements/core/commit/171e12b))
* **ino-datepicker:** controlled component ([26e2c74](http://gitlab.inovex.de/inovex-elements/core/commit/26e2c74))
* **ino-fab, ino-fab-set:** add components ([589b176](http://gitlab.inovex.de/inovex-elements/core/commit/589b176))
* **ino-icon:** add more icons ([0ade6ee](http://gitlab.inovex.de/inovex-elements/core/commit/0ade6ee))
* **ino-icon:** allow to use custom icons ([9abe27c](http://gitlab.inovex.de/inovex-elements/core/commit/9abe27c))
* **ino-icon-button:** change to controlled component ([dd52485](http://gitlab.inovex.de/inovex-elements/core/commit/dd52485))
* **ino-input:** change to controlled component ([19541c3](http://gitlab.inovex.de/inovex-elements/core/commit/19541c3))
* **ino-input-file:** change to controlled-component ([5054e88](http://gitlab.inovex.de/inovex-elements/core/commit/5054e88))
* **ino-list:** change to controlled component ([f2ba19e](http://gitlab.inovex.de/inovex-elements/core/commit/f2ba19e))
* **ino-menu:** controlled component ([392c7f5](http://gitlab.inovex.de/inovex-elements/core/commit/392c7f5))
* **ino-radio:** make checked attribute unmanaged ([489f32f](http://gitlab.inovex.de/inovex-elements/core/commit/489f32f))
* **ino-range:** change to controlled component ([e9938eb](http://gitlab.inovex.de/inovex-elements/core/commit/e9938eb))
* **ino-range:** switch to MDC components implementation ([b3ac281](http://gitlab.inovex.de/inovex-elements/core/commit/b3ac281))
* **ino-select:** change to controlled component ([5318824](http://gitlab.inovex.de/inovex-elements/core/commit/5318824))
* **ino-tab-bar:** change to controlled component ([5800088](http://gitlab.inovex.de/inovex-elements/core/commit/5800088))
* **ino-textarea:** change to controlled component ([b6b6678](http://gitlab.inovex.de/inovex-elements/core/commit/b6b6678))
* **ino-textarea:** optional autogrow to display all content ([55a8034](http://gitlab.inovex.de/inovex-elements/core/commit/55a8034))
* **react:** add react wrapper ([10e1127](http://gitlab.inovex.de/inovex-elements/core/commit/10e1127))
* **storybook:** add syntax-highlighting ([7f92b40](http://gitlab.inovex.de/inovex-elements/core/commit/7f92b40))
* **types:** add types for certain properties ([6e42f9f](http://gitlab.inovex.de/inovex-elements/core/commit/6e42f9f))

### BREAKING CHANGES

* We switched over to controlled components which means that our inovex element components are now controlled by you,
the consumer. All the state of the component is derived from the props the component exposes. The input component
will no longer update its value when the user types. Instead you must listen to the `valueChange` event and set the
`value` manually.
* The integration in React projects is now much easier, you no longer need to use `ref="..."` to get a reference to
the element, you're now able to use the exposed callbacks from our react wrapper. Please see the setup instructions
for React in Storybook to see how you can migrate.
* Most of the event names have changed, please check all the components for new event names when upgrading.

## [0.4.1](http://gitlab.inovex.de/inovex-elements/core/compare/v0.4.0...v0.4.1) (2018-10-23)

### Bug Fixes

- **events:** rename (most of) event names ([ed04d98](http://gitlab.inovex.de/inovex-elements/core/commit/ed04d98))
- **ino-datepicker:** fix too many tabs to skip datepicker ([3e25361](http://gitlab.inovex.de/inovex-elements/core/commit/3e25361))
- **ino-input:** Emit new value ([5af46f9](http://gitlab.inovex.de/inovex-elements/core/commit/5af46f9))
- **ino-input:** fix validation bug ([6c2c904](http://gitlab.inovex.de/inovex-elements/core/commit/6c2c904))
- **ino-textarea:** change event listening ([1340af4](http://gitlab.inovex.de/inovex-elements/core/commit/1340af4))
- **text-area:** lower case of event ([3a9194d](http://gitlab.inovex.de/inovex-elements/core/commit/3a9194d))

### Features

- **ino-button:** add constants ([cea66f3](http://gitlab.inovex.de/inovex-elements/core/commit/cea66f3))
- **ino-card:** add image, action buttons and action icons ([5e1c59d](http://gitlab.inovex.de/inovex-elements/core/commit/5e1c59d))
- **ino-checkbox:** change to controlled component ([171e12b](http://gitlab.inovex.de/inovex-elements/core/commit/171e12b))
- **ino-datepicker:** controlled component ([26e2c74](http://gitlab.inovex.de/inovex-elements/core/commit/26e2c74))
- **ino-fab, ino-fab-set:** add components ([589b176](http://gitlab.inovex.de/inovex-elements/core/commit/589b176))
- **ino-icon:** add more icons ([0ade6ee](http://gitlab.inovex.de/inovex-elements/core/commit/0ade6ee))
- **ino-icon:** allow to use custom icons ([9abe27c](http://gitlab.inovex.de/inovex-elements/core/commit/9abe27c))
- **ino-icon-button:** change to controlled component ([dd52485](http://gitlab.inovex.de/inovex-elements/core/commit/dd52485))
- **ino-input:** change to controlled component ([19541c3](http://gitlab.inovex.de/inovex-elements/core/commit/19541c3))
- **ino-input-file:** change to controlled-component ([5054e88](http://gitlab.inovex.de/inovex-elements/core/commit/5054e88))
- **ino-list:** change to controlled component ([f2ba19e](http://gitlab.inovex.de/inovex-elements/core/commit/f2ba19e))
- **ino-menu:** controlled component ([392c7f5](http://gitlab.inovex.de/inovex-elements/core/commit/392c7f5))
- **ino-radio:** make checked attribute unmanaged ([489f32f](http://gitlab.inovex.de/inovex-elements/core/commit/489f32f))
- **ino-range:** change to controlled component ([e9938eb](http://gitlab.inovex.de/inovex-elements/core/commit/e9938eb))
- **ino-range:** switch to MDC components implementation ([b3ac281](http://gitlab.inovex.de/inovex-elements/core/commit/b3ac281))
- **ino-select:** change to controlled component ([5318824](http://gitlab.inovex.de/inovex-elements/core/commit/5318824))
- **ino-tab-bar:** change to controlled component ([5800088](http://gitlab.inovex.de/inovex-elements/core/commit/5800088))
- **ino-textarea:** change to controlled component ([b6b6678](http://gitlab.inovex.de/inovex-elements/core/commit/b6b6678))
- **ino-textarea:** optional autogrow to display all content ([55a8034](http://gitlab.inovex.de/inovex-elements/core/commit/55a8034))
- **react:** add react wrapper ([10e1127](http://gitlab.inovex.de/inovex-elements/core/commit/10e1127))
- **storybook:** add syntax-highlighting ([7f92b40](http://gitlab.inovex.de/inovex-elements/core/commit/7f92b40))
- **types:** add types for certain properties ([6e42f9f](http://gitlab.inovex.de/inovex-elements/core/commit/6e42f9f))

### BREAKING CHANGES

- We switched over to controlled components which means that our inovex element components are now controlled by you,
  the consumer. All the state of the component is derived from the props the component exposes. The input component
  will no longer update its value when the user types. Instead you must listen to the `valueChange` event and set the
  `value` manually.
- The integration in React projects is now much easier, you no longer need to use `ref="..."` to get a reference to
  the element, you're now able to use the exposed callbacks from our react wrapper. Please see the setup instructions
  for React in Storybook to see how you can migrate.
- Most of the event names have changed, please check all the components for new event names when upgrading.

## [0.4.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.3.0...v0.4.0) (2018-09-25)

## [0.4.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.3.0...v0.4.0) (2018-09-25)

### Bug Fixes

- **ino-button:** background color was not applied for raised property ([b70930f](http://gitlab.inovex.de/inovex-elements/core/commit/b70930f))
- **ino-message-box, ino-spinner:** disable modal functionality if value of property is false ([de10b7d](http://gitlab.inovex.de/inovex-elements/core/commit/de10b7d))
- **storybook:** fix icon import and naming issue ([0cb1231](http://gitlab.inovex.de/inovex-elements/core/commit/0cb1231))

### Features

- **ino-checkbox:** add indeterminate status ([5d858e3](http://gitlab.inovex.de/inovex-elements/core/commit/5d858e3))
- **ino-chip-set:** add component ([e356839](http://gitlab.inovex.de/inovex-elements/core/commit/e356839))
- **ino-input-file:** add component ([03021ab](http://gitlab.inovex.de/inovex-elements/core/commit/03021ab))
- **ino-list:** add meta- and graphic-support ([a0c05b9](http://gitlab.inovex.de/inovex-elements/core/commit/a0c05b9))
- **ino-snackbar:** add component ([4b5d47f](http://gitlab.inovex.de/inovex-elements/core/commit/4b5d47f))
- **ino-tab, ino-tab-bar:** add component ([ffeb083](http://gitlab.inovex.de/inovex-elements/core/commit/ffeb083))
- **storybook:** migrate to plain html ([1ae48b3](http://gitlab.inovex.de/inovex-elements/core/commit/1ae48b3))
- **storybook:** show version of elements ([9a85dc0](http://gitlab.inovex.de/inovex-elements/core/commit/9a85dc0))

### Reverts

- feat(ino-message-box): add message box ([4911def](http://gitlab.inovex.de/inovex-elements/core/commit/4911def))

### BREAKING CHANGES

- The <ino-message-box> component has been removed because the use case is provided by the newly introduced ino-card component and ino-snackbar component. Please switch to that components instead

## [0.3.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.2.0...v0.3.0) (2018-09-11)

### Bug Fixes

- use BEM conform css class names ([3d5350f](http://gitlab.inovex.de/inovex-elements/core/commit/3d5350f))
- **ino-icon:** fix svg loading error ([0994d68](http://gitlab.inovex.de/inovex-elements/core/commit/0994d68))

### Features

- **ino-card:** add alternatives in color brands ([a46102b](http://gitlab.inovex.de/inovex-elements/core/commit/a46102b))
- **ino-input, ino-range, ino-datepicker:** add step attribute ([9e13a3b](http://gitlab.inovex.de/inovex-elements/core/commit/9e13a3b))
- **ino-menu, ino-list, ino-list-item, ino-list-divider:** add component ([4514db7](http://gitlab.inovex.de/inovex-elements/core/commit/4514db7))

## [0.2.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.1.2...v0.2.0) (2018-08-28)

### Bug Fixes

- **ino-form-row:** use correct readme in story ([ba65f3e](http://gitlab.inovex.de/inovex-elements/core/commit/ba65f3e))

### Features

- Add react wrapper elements and improve attribute typings ([70d5064](http://gitlab.inovex.de/inovex-elements/core/commit/70d5064))
- **datepicker:** Add button and new input attributes ([643c052](http://gitlab.inovex.de/inovex-elements/core/commit/643c052))
- **ino-datepicker:** add 'range' option to DatepickerType in order to extend 'inoType' ([b2e64e0](http://gitlab.inovex.de/inovex-elements/core/commit/b2e64e0))
- **ino-icon:** renew component without inline SVGs ([6b9f049](http://gitlab.inovex.de/inovex-elements/core/commit/6b9f049))
- **ino-icon-button:** add component ([66719b0](http://gitlab.inovex.de/inovex-elements/core/commit/66719b0))
- **ino-input:** add helper text ([41c8ecd](http://gitlab.inovex.de/inovex-elements/core/commit/41c8ecd))
- **ino-input:** add leading and trailing icon ([bf75880](http://gitlab.inovex.de/inovex-elements/core/commit/bf75880))
- **tooltip:** open on tab and close on escape ([c31826c](http://gitlab.inovex.de/inovex-elements/core/commit/c31826c))

## [0.1.2](http://gitlab.inovex.de/inovex-elements/core/compare/v0.1.1...v0.1.2) (2018-08-10)

### Bug Fixes

- Allow arbitrary attributes on inovex elements components ([73d2cdb](http://gitlab.inovex.de/inovex-elements/core/commit/73d2cdb))
- **message-box:** fix style-leaks because of similar classnames ([9b10a88](http://gitlab.inovex.de/inovex-elements/core/commit/9b10a88))

### Features

- **ino-datepicker:** Disable browser autocomplete ([22b7dfe](http://gitlab.inovex.de/inovex-elements/core/commit/22b7dfe))
- **ino-select:** Upgrade dependencies and ensure outlined version ([0b3db30](http://gitlab.inovex.de/inovex-elements/core/commit/0b3db30))
- **ino-textarea:** Add new element ([6f619dc](http://gitlab.inovex.de/inovex-elements/core/commit/6f619dc))

## [0.1.1](http://gitlab.inovex.de/inovex-elements/core/compare/v0.1.0...v0.1.1) (2018-07-05)

## [0.1.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.0.2...v0.1.0) (2018-07-05)

### Bug Fixes

- **ino-popover, ino-tooltip:** Set z-index ([3e6f283](http://gitlab.inovex.de/inovex-elements/core/commit/3e6f283))

### Features

- **landing page:** add landing page ([a3a5a57](http://gitlab.inovex.de/inovex-elements/core/commit/a3a5a57))

## [0.0.2](http://gitlab.inovex.de/inovex-elements/core/compare/10c2882...v0.0.2) (2018-06-23)

### Bug Fixes

- **ino-datepicker:** Restore native required behaviour ([46d343b](http://gitlab.inovex.de/inovex-elements/core/commit/46d343b))
- **tslint:** Allow type declaration and initialization ([cc43ebb](http://gitlab.inovex.de/inovex-elements/core/commit/cc43ebb))

### Features

* **ino-button:** Add properties ino-color-scheme and ino-fill ([2327d38](http://gitlab.inovex.de/inovex-elements/core/commit/2327d38))
* **ino-button:** Implement first draft of ino-button ([23c81e3](http://gitlab.inovex.de/inovex-elements/core/commit/23c81e3))
* **ino-card:** Implement first version of ino-card ([b9eb4de](http://gitlab.inovex.de/inovex-elements/core/commit/b9eb4de))
* **ino-checkbox:** Implement first simple checkbox element ([c8c0665](http://gitlab.inovex.de/inovex-elements/core/commit/c8c0665))
* **ino-chip:** Add new element ([08970e1](http://gitlab.inovex.de/inovex-elements/core/commit/08970e1))
* **ino-datepicker:** Add date and timepicker ([10036e8](http://gitlab.inovex.de/inovex-elements/core/commit/10036e8))
* **ino-datepicker:** Add stories and enable usage in relative contexts ([60ca4d7](http://gitlab.inovex.de/inovex-elements/core/commit/60ca4d7))
* **ino-form-row:** Add new element ([26ba6b6](http://gitlab.inovex.de/inovex-elements/core/commit/26ba6b6))
* **ino-icon:** Add first icon element ([e648963](http://gitlab.inovex.de/inovex-elements/core/commit/e648963))
* **ino-img:** add ino-img component ([cd1f7d1](http://gitlab.inovex.de/inovex-elements/core/commit/cd1f7d1))
* **ino-input:** Add first version of an input element including tests ([10c2882](http://gitlab.inovex.de/inovex-elements/core/commit/10c2882))
* **ino-input:** Add stories ([e950f16](http://gitlab.inovex.de/inovex-elements/core/commit/e950f16))
* **ino-message-box:** Add new element ([b512282](http://gitlab.inovex.de/inovex-elements/core/commit/b512282))
* **ino-popover:** add new element ([1cec4e4](http://gitlab.inovex.de/inovex-elements/core/commit/1cec4e4))
* **ino-radio:** Add Storybook stories ([54e8c8d](http://gitlab.inovex.de/inovex-elements/core/commit/54e8c8d))
* **ino-radio:** Implement first version of ino-radio ([8d57bfd](http://gitlab.inovex.de/inovex-elements/core/commit/8d57bfd))
* **ino-range:** Add new element ([11df04e](http://gitlab.inovex.de/inovex-elements/core/commit/11df04e))
* **ino-select:** Implement first draft of select element ([c76547a](http://gitlab.inovex.de/inovex-elements/core/commit/c76547a))
* **ino-spinner:** Add new element ([5d7e7e1](http://gitlab.inovex.de/inovex-elements/core/commit/5d7e7e1))
* **ino-tooltip:** Implement first purpose of tooltip element ([18f176b](http://gitlab.inovex.de/inovex-elements/core/commit/18f176b))
* **ino-tooltip, ino-popover:** Add stories ([43d9081](http://gitlab.inovex.de/inovex-elements/core/commit/43d9081))
* **storybook:** Add global stylesheets and integrate material design font ([982336b](http://gitlab.inovex.de/inovex-elements/core/commit/982336b))
* **storybook:** Add playground directly in the readme ([7a61007](http://gitlab.inovex.de/inovex-elements/core/commit/7a61007))
* **storybook:** Initial commit ([fbfc58c](http://gitlab.inovex.de/inovex-elements/core/commit/fbfc58c))
* **storybook:** Several improvements and refactoring ([6bf3919](http://gitlab.inovex.de/inovex-elements/core/commit/6bf3919))
