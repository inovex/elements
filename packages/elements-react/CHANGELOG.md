# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [8.0.0](https://github.com/BenPag/elements/compare/v7.1.0...v8.0.0) (2022-10-05)


### ⚠ BREAKING CHANGES

* **elements|ino-form-row:** Since our input component provides a label on its own, this component is obsolete. That's why we've decided to remove it.
* **elements|ino-sidebar:** Since the component is just a container with a simple slide animation and does not provide any other functionality or styling, we decided to remove it.

### Refactoring

* **elements|ino-form-row:** remove component ([#718](https://github.com/BenPag/elements/issues/718)) ([e609947](https://github.com/BenPag/elements/commit/e609947e67e6c2dd634c618f7afae0e0cfcc4355))
* **elements|ino-sidebar:** remove component ([#669](https://github.com/BenPag/elements/issues/669)) ([349b84d](https://github.com/BenPag/elements/commit/349b84d3ef329174f0bdcf4acbe357b63982eb22))

### [7.1.2](https://github.com/inovex/elements/compare/v7.1.1...v7.1.2) (2022-09-20)

## 7.1.1 (2022-08-19)

**Note:** Version bump only for package @inovex.de/elements-react





# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.1.1](https://github.com/inovex/elements/compare/v7.1.0...v7.1.1) (2022-08-19)

## [7.1.0](https://github.com/inovex/elements/compare/v7.0.0...v7.1.0) (2022-07-18)

## [7.0.0](https://github.com/inovex/elements/compare/v6.2.0...v7.0.0) (2022-05-23)


### ⚠ BREAKING CHANGES

* **elements-react:** We've updated the way we build the `elements-react` package. In order to be future-proof, we have to drop the support for React Versions < 17.

### Refactoring

* **elements-react:** use stencils react-output-target ([#537](https://github.com/inovex/elements/issues/537)) ([b797052](https://github.com/inovex/elements/commit/b7970520d9da7d055ffa5ec608f68871de2eb471))

## [6.2.0](https://github.com/inovex/elements/compare/v6.1.0...v6.2.0) (2022-04-22)

## [6.1.0](https://github.com/inovex/elements/compare/v6.0.0...v6.1.0) (2022-03-10)

## [6.0.0](https://github.com/inovex/elements/compare/v5.1.0...v6.0.0) (2022-03-02)


### ⚠ BREAKING CHANGES

* **elements|ino-table:** Due to performance reasons we have removed the components `<ino-table-row>` and `<ino-table-cell>`. The `<ino-table>` has been reworked to work with the native table elements (`<tr>` and `<td>`). Additionally, a new component `<ino-table-header-cell>` was provided to be used instead of the `<th>` element to implement functionalities like filtering and sorting. For extensive examples, check out the respective stories.
* **elements:** * `ino-progress-bar`: Removed `reversed` property as it is no longer supported by our underlying library
* `ino-chip-set`: Has been removed because it was only a wrapper, whose logic does not demand a component of its own.
* `ino-chip`: This component has undergone an extensive rework. We removed the already deprecated `icon` property (use slots instead). The event `removeChip` has been renamed to `chipRemoved` to be consistent with our naming scheme. The event now emits `value` as its detail instead of the element itself (element can still be accessed by `event.target`).
* `ino-switch`: All CSS-Vars have been removed in order to keep a more consistent look across the library and also to reduce the maintenance cost.
* **elements|ino-currency-input:** Move currency input functionality of `<ino-input>` to a separate component `<ino-currency-input>` to reduce the complexity of the input component. In the course of this, we removed the properties `decimalPlaces` and `thousandsSeparator` from the `<ino-input>`. The new component supports these functionalities by providing the respective locale.

### Features

* **elements-react:** upgrade to typescript 4.1 ([#500](https://github.com/inovex/elements/issues/500)) ([e0448bc](https://github.com/inovex/elements/commit/e0448bc9c006e3b0c74c2968ef250c3c348be653))
* **elements|ino-currency-input:** add component ([#481](https://github.com/inovex/elements/issues/481)) ([bd1ab55](https://github.com/inovex/elements/commit/bd1ab5551e8776a0c4d4f037425f9c5bb2aa5cbe))
* **elements|ino-markdown-editor:** add new component ([#471](https://github.com/inovex/elements/issues/471)) ([8803083](https://github.com/inovex/elements/commit/88030835d52ed638d0a467fdfa90d2bd57ec631b))
* **elements|ino-table:** rework the component along with all the related elements ([#459](https://github.com/inovex/elements/issues/459)) ([a3141e3](https://github.com/inovex/elements/commit/a3141e348b1088832c8a8cdde07922ed4b4a3374))


### Miscellaneous

* **elements:** update mdc packages to v13 ([#349](https://github.com/inovex/elements/issues/349)) ([77452bf](https://github.com/inovex/elements/commit/77452bf4f97862c7ee0a576a071c0649d67fc30b))

## [5.1.0](https://github.com/inovex/elements/compare/v5.0.0...v5.1.0) (2021-11-30)


### Miscellaneous

* update readmes ([#445](https://github.com/inovex/elements/issues/445)) ([2784a2c](https://github.com/inovex/elements/commit/2784a2c51a94369dd2229bbe619e8d04b4422179))

## [5.0.0](https://github.com/inovex/elements/compare/v4.1.1...v5.0.0) (2021-10-18)

### [4.1.1](https://github.com/inovex/elements/compare/v4.1.0...v4.1.1) (2021-09-06)

## [4.1.0](https://github.com/inovex/elements/compare/v4.0.0...v4.1.0) (2021-08-11)


### Features

* **elements:** add new component `<ino-autocomplete>` ([#402](https://github.com/inovex/elements/issues/402)) ([e93b20f](https://github.com/inovex/elements/commit/e93b20f7ac05500a11dbbeefbbcd382da6146ef3))


### Bug Fixes

* **elements-react:** add missing components ([#407](https://github.com/inovex/elements/issues/407)) ([d886c2a](https://github.com/inovex/elements/commit/d886c2a5c5aced430fdc533c052a83cd5f202369))

## [4.0.0](https://github.com/inovex/elements/compare/v3.0.0...v4.0.0) (2021-07-05)


### Bug Fixes

* fix git hook error message ([#372](https://github.com/inovex/elements/issues/372)) ([4716c32](https://github.com/inovex/elements/commit/4716c32974eee4ab38a12e6743de005b9666a203))


### Miscellaneous

* migrate from tslint to eslint ([#283](https://github.com/inovex/elements/issues/283)) ([19a4bf6](https://github.com/inovex/elements/commit/19a4bf65fe02649ef4b701f61b329c48b90f3b06))
* publish v3.0.1 ([ca7a24d](https://github.com/inovex/elements/commit/ca7a24d68944c06c78d88f58ec5151966c0210a6))

### [3.0.1](https://github.com/inovex/elements/compare/v3.0.0...v3.0.1) (2021-04-22)

## [3.0.0](https://github.com/inovex/elements/compare/v2.3.0...v3.0.0) (2021-04-13)


### ⚠ BREAKING CHANGES

* **elements|ino-icon:** We have changed our internal icon handling to make working with them more intuitive.
If you are currently using the elements with Vue.js, you need to update your icon import like this:

**From**: `import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';`

**To**: `import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/ino-icon/index.esm.js';`

### Refactoring

* **elements|ino-icon:** avoid duplicate icon files ([#255](https://github.com/inovex/elements/issues/255)) ([cb6da53](https://github.com/inovex/elements/commit/cb6da5315c6a132f4d754d325b0aa19b06f9a6a6))

## [2.3.0](https://github.com/inovex/elements/compare/v2.2.1...v2.3.0) (2021-01-27)

### [2.2.1](https://github.com/inovex/elements/compare/v2.2.0...v2.2.1) (2020-12-10)

## [2.2.0](https://github.com/inovex/elements/compare/v2.1.0...v2.2.0) (2020-12-01)

## [2.1.0](https://github.com/inovex/elements/compare/v2.0.0...v2.1.0) (2020-11-24)


### Bug Fixes

* **elements-react:** export ino-carousel/-slide components ([#182](https://github.com/inovex/elements/issues/182)) ([4062809](https://github.com/inovex/elements/commit/4062809a08094576b3fac1256f9f884a9ff6cec6))


### Miscellaneous

* improve windows integration ([#172](https://github.com/inovex/elements/issues/172)) ([6fee7f4](https://github.com/inovex/elements/commit/6fee7f45eb529af0482987dfa4ce4b2124be3cd0))

## [2.0.0](https://github.com/inovex/elements/compare/v1.2.0...v2.0.0) (2020-10-20)


### Miscellaneous

* remove duplicated entries in the changelog ([#149](https://github.com/inovex/elements/issues/149)) ([9f1b565](https://github.com/inovex/elements/commit/9f1b565402c80673b9fb6e51f595378e2c0d191e))

## [1.2.0](https://github.com/inovex/elements/compare/v1.1.0...v1.2.0) (2020-10-14)


### Miscellaneous

* hide refactoring commit type in changelog ([#130](https://github.com/inovex/elements/issues/130)) ([00dbf1a](https://github.com/inovex/elements/commit/00dbf1a55828aad4d2c0e29978dc3abe38ab7cbe))

## [1.1.0](https://github.com/inovex/elements/compare/v1.0.2...v1.1.0) (2020-10-07)


### Miscellaneous

* **deps:** bump elliptic from 6.5.1 to 6.5.3 in /packages/elements-react ([#101](https://github.com/inovex/elements/issues/101)) ([e311586](https://github.com/inovex/elements/commit/e311586d36ab8e64b1183050fece4b570a5b948e))
* **deps:** bump lodash from 4.17.15 to 4.17.20 in /packages/elements-react ([#100](https://github.com/inovex/elements/issues/100)) ([7bf8779](https://github.com/inovex/elements/commit/7bf8779e001a841f45e1873b5be62cab935f2564))
* **deps:** bump minimist from 1.2.0 to 1.2.5 in /packages/elements-react ([#99](https://github.com/inovex/elements/issues/99)) ([3c0fbf4](https://github.com/inovex/elements/commit/3c0fbf4da7c4af587a45babb73b9b4f06b5bcfbc))
* **elements:** update stencil to v2.0.3 ([#85](https://github.com/inovex/elements/issues/85)) ([99b593d](https://github.com/inovex/elements/commit/99b593d0ee94b8637444a8aa036ebbd6e336490a))

### [1.0.2](https://github.com/inovex/elements/compare/v1.0.1...v1.0.2) (2020-09-22)

### [1.0.1](https://github.com/inovex/elements/compare/v1.0.0...v1.0.1) (2020-09-22)

## [1.0.0](https://github.com/inovex/elements/compare/v0.21.0...v1.0.0) (2020-09-16)


### ⚠ BREAKING CHANGES

* We changed the scopes of all our packages from `@inovex` to  `@inovex.de` in order to match our newly created NPM org. Unfortunately, `@inovex` was already taken. To use the inovex-elements beyond version 0.21.0, you have to change the scope in your dependencies from `@inovex/*` to `@inovex.de/*`. This way you will receive our new versions from the public registry of npmjs.

### Features

* **elements|ino-dialog:** add dialog component ([da53a5a](https://github.com/inovex/elements/commit/da53a5a9c9f57a7fb7be91ced04c8a3db8c8ecc7))


### Documentation

* update url's of storybook ([#12](https://github.com/inovex/elements/issues/12)) ([791c8da](https://github.com/inovex/elements/commit/791c8daed3e774b31fb41259bf1410176f63fdaa))


### Miscellaneous

* add heading for refactor commit type ([#54](https://github.com/inovex/elements/issues/54)) ([c5e0bdc](https://github.com/inovex/elements/commit/c5e0bdc793f5a26bd82166475ecd27a17f99f9d9))
* list additional commit types in generated changelogs ([#5](https://github.com/inovex/elements/issues/5)) ([7f7c7bf](https://github.com/inovex/elements/commit/7f7c7bff2cb4f795d7df30d3e0a86ffb12bef419))
* update references to new repository in changelogs ([#16](https://github.com/inovex/elements/issues/16)) ([06f83f1](https://github.com/inovex/elements/commit/06f83f1acd0aef1cf5941766ebc17203648cda52))
* update release workflow ([#13](https://github.com/inovex/elements/issues/13)) ([14b9578](https://github.com/inovex/elements/commit/14b9578fb437b2801a68e478007f581805ea34ef))
* update repository references in packages ([#15](https://github.com/inovex/elements/issues/15)) ([2b38cc5](https://github.com/inovex/elements/commit/2b38cc51f5c76851f127b9618ed3fda475c351a6))


### Refactoring

* change scope from (at)inovex to (at)inovex.de ([#66](https://github.com/inovex/elements/issues/66)) ([96186c2](https://github.com/inovex/elements/commit/96186c2b6f42eb202acf69cd7e0da6280b831864))

# [0.21.0](https://github.com/inovex/elements/compare/v0.20.0...v0.21.0) (2020-07-02)



# [0.20.0](https://github.com/inovex/elements/compare/v0.19.1...v0.20.0) (2020-06-25)


### Features

* **elements:** add ino-img-list component ([3c15e98](https://github.com/inovex/elements/commit/3c15e9818a46e1f5860eed8e83ad6f200262f71f))



## [0.19.1](https://github.com/inovex/elements/compare/v0.19.0...v0.19.1) (2020-06-18)



# [0.19.0](https://github.com/inovex/elements/compare/v0.18.0...v0.19.0) (2020-06-18)


### Features

* **elements:** add ino-table/-row/-cell components ([fc2f778](https://github.com/inovex/elements/commit/fc2f778ada0c4153d9f67a2a8daef4250228b64f))



# [0.18.0](https://github.com/inovex/elements/compare/v0.17.0...v0.18.0) (2020-05-20)


### Features

* **elements|ino-option-group:** add ino-option-group component ([6aa7a3c](https://github.com/inovex/elements/commit/6aa7a3ca7bbe771b269b27934bea88ce021b9bc6))



# [0.17.0](https://github.com/inovex/elements/compare/v0.16.0...v0.17.0) (2020-04-29)


### Bug Fixes

* **react|wrapper:** fix react types for stencil update (fixes elements 0.15.x and 0.16.x) ([4ffff06](https://github.com/inovex/elements/commit/4ffff06dbe33bb58d250ae89bee81bbb08c9c600))


### Features

* **elements-react|ino-option:** add component ([dbfc1e4](https://github.com/inovex/elements/commit/dbfc1e4dd6fd3ebc0f55d257948b88f422b520be))
* **elements|ino-checkbox:** add selection variant ([3e74a78](https://github.com/inovex/elements/commit/3e74a7892bdaa9dd12e1be8cf60780881a7b10d4))
* **elements|ino-icon:** unify icons & add styling options with CSS variables ([a755e69](https://github.com/inovex/elements/commit/a755e69a656b591d869f23af818bc8a51b3718cb))
* **elements|ino-nav-drawer:** create nav-drawer element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-nav-item:** create nav-item element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-sidebar:** add ino-sidebar ([e9d56de](https://github.com/inovex/elements/commit/e9d56de9abfec70139f8f1cce9f164b245040f89))
* **storybook:** add pure js example and cleanup docs ([7cc9fdb](https://github.com/inovex/elements/commit/7cc9fdb77bf746096dcedfc769f66ecdf981d3ea))



# [0.16.0](https://github.com/inovex/elements/compare/v0.15.1...v0.16.0) (2020-04-01)



## [0.15.1](https://github.com/inovex/elements/compare/v0.15.0...v0.15.1) (2020-03-26)



# [0.15.0](https://github.com/inovex/elements/compare/v0.14.0...v0.15.0) (2020-03-25)


### Bug Fixes

* **elements-react|ino-control-item:** add missing component ([9f29b68](https://github.com/inovex/elements/commit/9f29b68095b5286368533aa359a491580c7e848d))


### Features

* **elements|ino-header:** add component ([4c5c69f](https://github.com/inovex/elements/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))



# [0.14.0](https://github.com/inovex/elements/compare/v0.13.0...v0.14.0) (2020-03-17)



# [0.13.0](https://github.com/inovex/elements/compare/v0.12.0...v0.13.0) (2020-02-19)



# [0.12.0](https://github.com/inovex/elements/compare/v0.11.0...v0.12.0) (2020-02-12)


### Features

* **elements-react:** add ino-switch ([23a5512](https://github.com/inovex/elements/commit/23a55126912e218b47170b9a0442b1c2924cc3d7))



# [0.11.0](https://github.com/inovex/elements/compare/v0.10.1...v0.11.0) (2020-02-07)


### Features

* **elements-react:** add ino-radio-group component ([2500449](https://github.com/inovex/elements/commit/2500449b7368e0184667c9fd32550a450618c4dd))



## [0.10.1](https://github.com/inovex/elements/compare/v0.10.0...v0.10.1) (2019-12-09)



# [0.10.0](https://github.com/inovex/elements/compare/v0.9.0...v0.10.0) (2019-12-09)
