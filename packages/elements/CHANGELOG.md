# [0.16.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.15.1...v0.16.0) (2020-04-01)



## [0.15.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.15.0...v0.15.1) (2020-03-26)


### Bug Fixes

* **elements:** revert @stencil/core to 1.10.3 due to style issues ([376c79d](http://gitlab.inovex.de:2424/inovex-elements/core/commit/376c79d94d45c4ab52bbf635bbfa9c446a0d7264))



# [0.15.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.14.0...v0.15.0) (2020-03-25)


### Features

* **elements|ino-button:** add property ino-loading to display a loading spinner ([7cbbce7](http://gitlab.inovex.de:2424/inovex-elements/core/commit/7cbbce7058162e2a585ce08431d28e0113a19cf8))
* **elements|ino-header:** add component ([4c5c69f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))
* **elements|ino-segment-group:** add ino-segment-group and -button ([e26478c](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e26478cf593052c23cd707ecb678997dd5cd6e85))
* **elements|ino-snackbar:** add feedback variant ([252c044](http://gitlab.inovex.de:2424/inovex-elements/core/commit/252c0441131a97cc3c8151039c6727f48ae8809e))



# [0.14.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.13.0...v0.14.0) (2020-03-17)


### Bug Fixes

* **elements:** fix wrong index in activeTabChange event in the ino-tab-bar ([4c90881](http://gitlab.inovex.de:2424/inovex-elements/core/commit/4c908817d62af58fc6442ebd5271c5b099ade997))


### Features

* **elements:** add option to align snackbar to the right ([eb8b8ab](http://gitlab.inovex.de:2424/inovex-elements/core/commit/eb8b8ab39660e0f5fe4ea3a99ae5aa338b37d31a))
* **elements:** ino-fab(-set) in inovex style ([8bd1b32](http://gitlab.inovex.de:2424/inovex-elements/core/commit/8bd1b32458f60ce2c876e005e5cbc1159e269587))



# [0.13.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.12.0...v0.13.0) (2020-02-19)


### Bug Fixes

* **elements:** add timeout to ino-tooltip to wait for host element to be rendered ([43e7b5a](http://gitlab.inovex.de:2424/inovex-elements/core/commit/43e7b5a0c7b53138ab5600eb02ab28be66180dec))
* **elements:** throw better exception in ino-tooltip when target not found ([8c0412f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/8c0412f37828f48553432b3effcb8d44eaab4191))

### Features

* **elements:** ino-snackbar in inovex design ([f080cab6](https://gitlab.inovex.de/inovex-elements/core/commit/f080cab6dd6bc2b64809a9774ea4551730bd7837))

# [0.12.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.11.0...v0.12.0) (2020-02-12)



### Bug Fixes

* **elements:** disable click on icon when datepicker disabled ([ebb757e](http://gitlab.inovex.de:2424/inovex-elements/core/commit/ebb757ef9fba177715cbe0c693297511d470c7e1))
* **elements:** fix layout of datepicker with disabled month arrow(s) ([2a47f9f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/2a47f9f5f12c29bffc2fe169c523ac62b9bd0ed5))


### Features

* **elements:** add option to mark inputs as optional ([6ee24de](https://gitlab.inovex.de/inovex-elements/core/commit/6ee24de3e8953967e28483a7cc2c83e136a5d0bc))
* **elements:** add ino-switch component ([23a5512](https://gitlab.inovex.de/inovex-elements/core/commit/23a55126912e218b47170b9a0442b1c2924cc3d7))
* **elements:** add month picker option to ino-datepicker ([1f796a6](https://gitlab.inovex.de/inovex-elements/core/commit/1f796a64bcd69d1dba450127589174fb1f3d0562))


# [0.11.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.10.1...v0.11.0) (2020-02-07)


### Bug Fixes

* **ino-textarea:** set inner width to 100% ([6c37996](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6c379962b7d1373d2537f17ff222548bfc4d59f5))


### Features

* **elements:** add email validation onBlur ([83a38f7](http://gitlab.inovex.de:2424/inovex-elements/core/commit/83a38f70abe453e8a93a129ab7cb520e9f7ca295))
* **elements:** add new ino-error prop to ino-input ([3e4ae46](http://gitlab.inovex.de:2424/inovex-elements/core/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))
* **elements:** ino-checkbox in inovex style ([5884df0](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5884df0fd950fe02636731b7b6abf29af5f7b008))
* **icons:** add new icons, update icon names, update readme ([d176efa](http://gitlab.inovex.de:2424/inovex-elements/core/commit/d176efa3742fe51b6f3f880ec66378de5a5b31df))

### Breaking Changes
Some icons have been renamed to match the new naming convention. The new naming convention was introduced to reflect the newly added sizes and colors in the ID of each icon. The old naming convention was: `<id>-<a|b>` (e.g. `birthday-a`). The new naming convention is the following: `<id>-<size>-<grey>?` (e.g. `birthday-m`). If any of your used ino-icons has the suffix `-a` or `-b`, please search for the new id in the [ino-icon page](https://elements.inovex.io/dist/latest/storybook/?path=/story/ino-icon--default-usage) and update the `ino-icon`-Property accordingly (e.g. `birthday-a` -> `birthday-m`).

There are three different sizes: xs, s and m. The default which should be used is m. Many icons also have a grey version which has the suffix "-grey" (e.g. `birthday-m-grey`).



## [0.10.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.10.0...v0.10.1) (2019-12-09)



# [0.10.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.9.0...v0.10.0) (2019-12-09)



