# [0.21.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.20.0...v0.21.0) (2020-07-02)


### Bug Fixes
* **elements:** remove obsolete popper.js dependency ([2f934feb](https://gitlab.inovex.de:2424/inovex-elements/core/commit/2f934febf5b5eff052056b43d3cf34b0d4244670))


### Feature
* **elements|ino-icon:** update names of custom properties ([efc56f15](https://gitlab.inovex.de:2424/inovex-elements/core/commit/efc56f15d0f01517d8b20640a20f265b533e0d25))


### BREAKING CHANGES
In order to apply the correct naming pattern for custom variables (a.k.a. CSS-Variables) it was necessary to rename the custom properties of the ino-icon component. The renamed variables are listed in the following table:

| Old Name        | New Name           | 
|---------------|--------------------|
| `--color`  | `--ino-icon-color-primary` or `--ino-icon-color-secondary`   |
| `--height`    | `--ino-icon-height`    |
| `--width` | `--ino-icon-width` |


# [0.20.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.19.1...v0.20.0) (2020-06-25)


### Bug Fixes

* **elements|ino-icon:** fix internally used icon not loading correctly ([cc77301](http://gitlab.inovex.de:2424/inovex-elements/core/commit/cc77301e43afc3a44052dbbb56cbcccf76a4ab58))


### Features

* **elements:** add ino-img-list component ([3c15e98](http://gitlab.inovex.de:2424/inovex-elements/core/commit/3c15e9818a46e1f5860eed8e83ad6f200262f71f))
* **elements|ino-checkbox:** add css variables ([5a38adb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5a38adb6e55ad1ac353dbd038387a4324500f1cc))



## [0.19.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.19.0...v0.19.1) (2020-06-18)


### Bug Fixes

* **elements|ino-icon:** fix svg parser typescript error ([34775b8](http://gitlab.inovex.de:2424/inovex-elements/core/commit/34775b8be60ccdfb2d97bba1019fe5858a09fe88))



# [0.19.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.18.0...v0.19.0) (2020-06-18)


### Bug Fixes

* **elements|ino-input:** fix autoFocus property not being recognized ([c5a4d6f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c5a4d6f6c988dbcbda22086238940d90f64f96c4))
* **elements|ino-list-item:** fix propagation bug ([c20ceaa](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c20ceaac7f4723954e48720b5e56afdcf4baf2b4))
* **elements|ino-option:** use min-height instead of fixed height ([21717eb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/21717eb2e9c646c034dbef467fcec4cf28309ae4))
* **elements|ino-select:** fix wrong positioning of opened select ([e05b83e](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e05b83e39c7b0ee6a2a11c6354734a4d992c14f9))
* **elements|ino-select:** truncate overflowed text in select field ([2dc54fc](http://gitlab.inovex.de:2424/inovex-elements/core/commit/2dc54fccc438bc2d3279c76e8ade46675c449b24))
* **elements|ino-sidebar:** remove the ability to close the sidebar by pressing escape ([1ae8845](http://gitlab.inovex.de:2424/inovex-elements/core/commit/1ae884565fc30a58a0bb79ac32b3580bb6a2fd27))


### Features

* **elements:** add ino-table/-row/-cell components ([fc2f778](http://gitlab.inovex.de:2424/inovex-elements/core/commit/fc2f778ada0c4153d9f67a2a8daef4250228b64f))
* **elements:** add progress-bar component ([5fbd35e](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5fbd35e9c1a8e2494bdbce4f0148e39d7794d8c0))
* **elements|ino-icon:** add property to set svg title ([e6a6b60](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e6a6b608168364186a840a1952f89afe046f4512))
* **elements|ino-icon:** add additional arrow icons ([8215b05](http://gitlab.inovex.de:2424/inovex-elements/core/commit/8215b05665e5fba9cd79edf41b4a1151d1699d26))


# [0.18.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.17.0...v0.18.0) (2020-05-20)


### Bug Fixes

* **elements|ino-datepicker:** fix parsing on keyboard input ([9ea3628](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9ea36286b600d2fd77f62090ee2513282d2463ba))
* **elements|ino-datepicker:** styles are now applied correctly ([b114ed3](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b114ed3473f7e0a7e610c235aac6acfb74818f77))
* **elements|ino-select:** fix label hint when required ([c01c4fb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c01c4fb5775f1c842568221b9789cc7b223217d1))
* **elements|ino-tooltip:** tooltip disappearing on mouseout when click trigger ([7a3859a](http://gitlab.inovex.de:2424/inovex-elements/core/commit/7a3859a68437c27632f9159fca11127066d4472c))


### Features

* **elements|ino-button:** add css variables ([9295b65](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9295b6510029e4c37ef25e535467d1ad3ce90fb2))
* **elements|ino-input:** add methods to focus and blur the input element ([9c9e863](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9c9e863b2d0fa798ab0484132855977a1634df03))
* **elements|ino-option-group:** add ino-option-group component ([6aa7a3c](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6aa7a3ca7bbe771b269b27934bea88ce021b9bc6))
* **elements|ino-select:** add css variable for custom height ([7c8966b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/7c8966b0aea80ba856ee13dd5d85295168e9d60b))
* **elements|ino-sidebar:** add css variable to specify the width ([062fe24](http://gitlab.inovex.de:2424/inovex-elements/core/commit/062fe24a1de532481e19f1f3b9aaf3ba69b8f74c))



# [0.17.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.16.0...v0.17.0) (2020-04-29)


### Bug Fixes

* **react|wrapper:** fix react types for stencil update (fixes elements 0.15.x and 0.16.x) ([4ffff06](http://gitlab.inovex.de/inovex-elements/core/commit/4ffff06dbe33bb58d250ae89bee81bbb08c9c600))


### Features

* **elements|ino-checkbox:** add selection variant ([3e74a78](http://gitlab.inovex.de/inovex-elements/core/commit/3e74a7892bdaa9dd12e1be8cf60780881a7b10d4))
* **elements|ino-icon:** unify icons & add styling options with CSS variables ([a755e69](http://gitlab.inovex.de/inovex-elements/core/commit/a755e69a656b591d869f23af818bc8a51b3718cb))
* **elements|ino-nav-drawer:** create nav-drawer element ([72dd914](http://gitlab.inovex.de/inovex-elements/core/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-nav-item:** create nav-item element ([72dd914](http://gitlab.inovex.de/inovex-elements/core/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-sidebar:** add ino-sidebar ([e9d56de](http://gitlab.inovex.de/inovex-elements/core/commit/e9d56de9abfec70139f8f1cce9f164b245040f89))
* **storybook:** add pure js example and cleanup docs ([7cc9fdb](http://gitlab.inovex.de/inovex-elements/core/commit/7cc9fdb77bf746096dcedfc769f66ecdf981d3ea))



# [0.16.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.15.1...v0.16.0) (2020-04-01)



## [0.15.1](http://gitlab.inovex.de/inovex-elements/core/compare/v0.15.0...v0.15.1) (2020-03-26)


### Bug Fixes

* **elements:** revert @stencil/core to 1.10.3 due to style issues ([376c79d](http://gitlab.inovex.de/inovex-elements/core/commit/376c79d94d45c4ab52bbf635bbfa9c446a0d7264))



# [0.15.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.14.0...v0.15.0) (2020-03-25)


### Features

* **elements|ino-button:** add property ino-loading to display a loading spinner ([7cbbce7](http://gitlab.inovex.de/inovex-elements/core/commit/7cbbce7058162e2a585ce08431d28e0113a19cf8))
* **elements|ino-header:** add component ([4c5c69f](http://gitlab.inovex.de/inovex-elements/core/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))
* **elements|ino-segment-group:** add ino-segment-group and -button ([e26478c](http://gitlab.inovex.de/inovex-elements/core/commit/e26478cf593052c23cd707ecb678997dd5cd6e85))
* **elements|ino-snackbar:** add feedback variant ([252c044](http://gitlab.inovex.de/inovex-elements/core/commit/252c0441131a97cc3c8151039c6727f48ae8809e))



# [0.14.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.13.0...v0.14.0) (2020-03-17)


### Bug Fixes

* **elements:** fix wrong index in activeTabChange event in the ino-tab-bar ([4c90881](http://gitlab.inovex.de/inovex-elements/core/commit/4c908817d62af58fc6442ebd5271c5b099ade997))


### Features

* **elements:** add option to align snackbar to the right ([eb8b8ab](http://gitlab.inovex.de/inovex-elements/core/commit/eb8b8ab39660e0f5fe4ea3a99ae5aa338b37d31a))
* **elements:** ino-fab(-set) in inovex style ([8bd1b32](http://gitlab.inovex.de/inovex-elements/core/commit/8bd1b32458f60ce2c876e005e5cbc1159e269587))



# [0.13.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.12.0...v0.13.0) (2020-02-19)


### Bug Fixes

* **elements:** add timeout to ino-tooltip to wait for host element to be rendered ([43e7b5a](http://gitlab.inovex.de/inovex-elements/core/commit/43e7b5a0c7b53138ab5600eb02ab28be66180dec))
* **elements:** throw better exception in ino-tooltip when target not found ([8c0412f](http://gitlab.inovex.de/inovex-elements/core/commit/8c0412f37828f48553432b3effcb8d44eaab4191))

### Features

* **elements:** ino-snackbar in inovex design ([f080cab6](https://gitlab.inovex.de/inovex-elements/core/commit/f080cab6dd6bc2b64809a9774ea4551730bd7837))

# [0.12.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.11.0...v0.12.0) (2020-02-12)



### Bug Fixes

* **elements:** disable click on icon when datepicker disabled ([ebb757e](http://gitlab.inovex.de/inovex-elements/core/commit/ebb757ef9fba177715cbe0c693297511d470c7e1))
* **elements:** fix layout of datepicker with disabled month arrow(s) ([2a47f9f](http://gitlab.inovex.de/inovex-elements/core/commit/2a47f9f5f12c29bffc2fe169c523ac62b9bd0ed5))


### Features

* **elements:** add option to mark inputs as optional ([6ee24de](https://gitlab.inovex.de/inovex-elements/core/commit/6ee24de3e8953967e28483a7cc2c83e136a5d0bc))
* **elements:** add ino-switch component ([23a5512](https://gitlab.inovex.de/inovex-elements/core/commit/23a55126912e218b47170b9a0442b1c2924cc3d7))
* **elements:** add month picker option to ino-datepicker ([1f796a6](https://gitlab.inovex.de/inovex-elements/core/commit/1f796a64bcd69d1dba450127589174fb1f3d0562))


# [0.11.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.10.1...v0.11.0) (2020-02-07)


### Bug Fixes

* **ino-textarea:** set inner width to 100% ([6c37996](http://gitlab.inovex.de/inovex-elements/core/commit/6c379962b7d1373d2537f17ff222548bfc4d59f5))


### Features

* **elements:** add email validation onBlur ([83a38f7](http://gitlab.inovex.de/inovex-elements/core/commit/83a38f70abe453e8a93a129ab7cb520e9f7ca295))
* **elements:** add new ino-error prop to ino-input ([3e4ae46](http://gitlab.inovex.de/inovex-elements/core/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](http://gitlab.inovex.de/inovex-elements/core/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))
* **elements:** ino-checkbox in inovex style ([5884df0](http://gitlab.inovex.de/inovex-elements/core/commit/5884df0fd950fe02636731b7b6abf29af5f7b008))
* **icons:** add new icons, update icon names, update readme ([d176efa](http://gitlab.inovex.de/inovex-elements/core/commit/d176efa3742fe51b6f3f880ec66378de5a5b31df))

### Breaking Changes
Some icons have been renamed to match the new naming convention. The new naming convention was introduced to reflect the newly added sizes and colors in the ID of each icon. The old naming convention was: `<id>-<a|b>` (e.g. `birthday-a`). The new naming convention is the following: `<id>-<size>-<grey>?` (e.g. `birthday-m`). If any of your used ino-icons has the suffix `-a` or `-b`, please search for the new id in the [ino-icon page](https://elements.inovex.de/dist/latest/storybook/?path=/story/graphic-ino-icon--default-usage) and update the `ino-icon`-Property accordingly (e.g. `birthday-a` -> `birthday-m`).

There are three different sizes: xs, s and m. The default which should be used is m. Many icons also have a grey version which has the suffix "-grey" (e.g. `birthday-m-grey`).



## [0.10.1](http://gitlab.inovex.de/inovex-elements/core/compare/v0.10.0...v0.10.1) (2019-12-09)



# [0.10.0](http://gitlab.inovex.de/inovex-elements/core/compare/v0.9.0...v0.10.0) (2019-12-09)



