# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.3.0](https://github.com/inovex/elements/compare/v2.2.1...v2.3.0) (2021-01-27)


### Features

* **elements|ino-nav-item:** add prop for sub text ([#273](https://github.com/inovex/elements/issues/273)) ([746a7c3](https://github.com/inovex/elements/commit/746a7c35ce9c56d960c6a84b18d6990c6e62d503))
* **elements|ino-popover:** add interactive property ([#223](https://github.com/inovex/elements/issues/223)) ([bf6f0e5](https://github.com/inovex/elements/commit/bf6f0e53b5ca85230155d18ec2a21ec57d8ecc54))
* **elements|ino-textarea:** add filled style option ([#237](https://github.com/inovex/elements/issues/237)) ([81769ef](https://github.com/inovex/elements/commit/81769ef2515b50d7ba6626f2d16245e6cf478226))


### Miscellaneous

* upgrade vulnerable highlight.js package from 9.18.1 to 10.5.0 ([#269](https://github.com/inovex/elements/issues/269)) ([7a3edd8](https://github.com/inovex/elements/commit/7a3edd8b55af548a5b0bc7f6c5b726cc884a6afb))

### [2.2.1](https://github.com/inovex/elements/compare/v2.2.0...v2.2.1) (2020-12-10)

## [2.2.0](https://github.com/inovex/elements/compare/v2.1.0...v2.2.0) (2020-12-01)


### Features

* **elements|ino-chip:** add slot for icons and mark ino-icon prop as deprecated ([#189](https://github.com/inovex/elements/issues/189)) ([edca6b8](https://github.com/inovex/elements/commit/edca6b8297191db80c2b2dd378b7b931bb035d3a))
* **elements|ino-input-file:** add drag and drop window ([#199](https://github.com/inovex/elements/issues/199)) ([6ede8b0](https://github.com/inovex/elements/commit/6ede8b0b7cf1e31921d5f5ddf58c3fab91d43407))


### Bug Fixes

* **elements|ino-input:** add autofocus prop to input element ([#198](https://github.com/inovex/elements/issues/198)) ([6f5a186](https://github.com/inovex/elements/commit/6f5a186291040ca890994ba0328d7a078cf7b4f7))

## [2.1.0](https://github.com/inovex/elements/compare/v2.0.0...v2.1.0) (2020-11-24)


### Features

* **elements|ino-icon-button:** add managed option and provide customization options ([#176](https://github.com/inovex/elements/issues/176)) ([8aa55b4](https://github.com/inovex/elements/commit/8aa55b4751408be7a8b2d40e1997620693cc84c3))


### Bug Fixes

* **elements-angular:** prevent events from firing twice ([#201](https://github.com/inovex/elements/issues/201)) ([897e78f](https://github.com/inovex/elements/commit/897e78f0e8d2d2268fdaca1e50bae747e5290556))


### Miscellaneous

* build angular repo before publishing ([#168](https://github.com/inovex/elements/issues/168)) ([5caa9d1](https://github.com/inovex/elements/commit/5caa9d1fbebbadb0812bff586cf825b024bbc959))
* improve windows integration ([#172](https://github.com/inovex/elements/issues/172)) ([6fee7f4](https://github.com/inovex/elements/commit/6fee7f45eb529af0482987dfa4ce4b2124be3cd0))

## [2.0.0](https://github.com/inovex/elements/compare/v1.2.0...v2.0.0) (2020-10-20)


### ⚠ BREAKING CHANGES

* **elements-angular:** In order to use the latest elements-angular package, change the `imports: [..., InoElementsModule]` inside your `app.module.ts` to `imports: [..., InoElementsModule.forRoot()]`.
The reason for this change is, that we upgraded our internally used Angular dependencies to version 10.1.4 which required us to add some startup capabilities inside the `forRoot` function. We updated our integration guide accordingly.

### Bug Fixes

* **elements-angular:** add compatibility for ivy support ([#147](https://github.com/inovex/elements/issues/147)) ([cb095cb](https://github.com/inovex/elements/commit/cb095cb4b48a0f9bbba1ac0cef4da61248466ca0))


### Miscellaneous

* remove duplicated entries in the changelog ([#149](https://github.com/inovex/elements/issues/149)) ([9f1b565](https://github.com/inovex/elements/commit/9f1b565402c80673b9fb6e51f595378e2c0d191e))
* **elements-angular:** update internal angular version to 10.1.4 ([#138](https://github.com/inovex/elements/issues/138)) ([04a8406](https://github.com/inovex/elements/commit/04a8406aa10eb768deafaf4c94526ffef652e35b))

## [1.2.0](https://github.com/inovex/elements/compare/v1.1.0...v1.2.0) (2020-10-14)


### Features

* **elements:** add ino-carousel component ([#112](https://github.com/inovex/elements/issues/112)) ([e99b5d7](https://github.com/inovex/elements/commit/e99b5d723903a7060e0691b782d686db01480161))
* **elements|ino-card:** add property to disable hover animation ([#120](https://github.com/inovex/elements/issues/120)) ([0fac301](https://github.com/inovex/elements/commit/0fac301ab4b3fe1b078b5f4d09db97495aa2e779))
* **elements|ino-snackbar:** add property for warning and error states ([#116](https://github.com/inovex/elements/issues/116)) ([b648415](https://github.com/inovex/elements/commit/b64841571322656433ab8ed2ef1439b5cd40c23e))


### Miscellaneous

* hide refactoring commit type in changelog ([#130](https://github.com/inovex/elements/issues/130)) ([00dbf1a](https://github.com/inovex/elements/commit/00dbf1a55828aad4d2c0e29978dc3abe38ab7cbe))

## [1.1.0](https://github.com/inovex/elements/compare/v1.0.2...v1.1.0) (2020-10-07)


### Features

* **elements|ino-snackbar:** add property to set custom timeout ([#83](https://github.com/inovex/elements/issues/83)) ([d9608da](https://github.com/inovex/elements/commit/d9608daa9779acad4c1f43945a20382ca03f6d4e))


### Miscellaneous

* **deps:** bump acorn from 6.3.0 to 6.4.2 in /packages/elements-angular ([#108](https://github.com/inovex/elements/issues/108)) ([37bdb52](https://github.com/inovex/elements/commit/37bdb5204982d3a75ae16ae3d8c80991f8950444))
* **deps:** bump elliptic from 6.5.1 to 6.5.3 in /packages/elements-angular ([#104](https://github.com/inovex/elements/issues/104)) ([831b465](https://github.com/inovex/elements/commit/831b46590e96b7acae4db58b1dd41c8ebe64ca68))
* **deps:** bump handlebars from 4.4.5 to 4.7.6 in /packages/elements-angular ([#103](https://github.com/inovex/elements/issues/103)) ([4b3c815](https://github.com/inovex/elements/commit/4b3c81526eda379ee60a7267cad85a481a832c41))
* **deps:** bump http-proxy from 1.18.0 to 1.18.1 in /packages/elements-angular ([#102](https://github.com/inovex/elements/issues/102)) ([7e89575](https://github.com/inovex/elements/commit/7e89575227d85b78ac81c31269ebe5061cc5749b))
* **deps:** bump lodash from 4.17.15 to 4.17.20 in /packages/elements-angular ([#105](https://github.com/inovex/elements/issues/105)) ([df6d2a3](https://github.com/inovex/elements/commit/df6d2a32504ac15d6b6c75f9e1a5c57f8290b4ff))
* **deps:** bump npm-registry-fetch from 4.0.2 to 4.0.7 in /packages/elements-angular ([#106](https://github.com/inovex/elements/issues/106)) ([3f617b8](https://github.com/inovex/elements/commit/3f617b8b6a060e9b389881ee611d4384007b9880))
* **deps:** bump websocket-extensions from 0.1.3 to 0.1.4 in /packages/elements-angular ([#107](https://github.com/inovex/elements/issues/107)) ([1690960](https://github.com/inovex/elements/commit/1690960de95c6595775f29e3b3481cffd75fcfd9))
* **elements:** update stencil to v2.0.3 ([#85](https://github.com/inovex/elements/issues/85)) ([99b593d](https://github.com/inovex/elements/commit/99b593d0ee94b8637444a8aa036ebbd6e336490a))


### Refactoring

* **elements:** move from local font files to font package ([#82](https://github.com/inovex/elements/issues/82)) ([c04d903](https://github.com/inovex/elements/commit/c04d903f7f238f950779d9fedf972f56df9647b2))


### Documentation

* **elements-angular:** correct link to top-level readme ([#119](https://github.com/inovex/elements/issues/119)) ([4d57647](https://github.com/inovex/elements/commit/4d576471133ace5b2da67fb98bd77319ad3a504b))

### [1.0.2](https://github.com/inovex/elements/compare/v1.0.1...v1.0.2) (2020-09-22)

### [1.0.1](https://github.com/inovex/elements/compare/v1.0.0...v1.0.1) (2020-09-22)

## [1.0.0](https://github.com/inovex/elements/compare/v0.21.0...v1.0.0) (2020-09-16)


### ⚠ BREAKING CHANGES

* We changed the scopes of all our packages from `@inovex` to  `@inovex.de` in order to match our newly created NPM org. Unfortunately, `@inovex` was already taken. To use the inovex-elements beyond version 0.21.0, you have to change the scope in your dependencies from `@inovex/*` to `@inovex.de/*`. This way you will receive our new versions from the public registry of npmjs.
* **elements|ino-button:** The API of the `<ino-button>` has changed. We've replaced the `ino-icon` property.
If you want to use an `ino-icon` inside of a button, use the `ino-icon-leading` or `ino-icon-trailing` property and provide the `<ino-icon>` element as a child of the `<ino-button>` with the slot being either `ino-icon-leading` or `ino-icon-trailing`. See the example below:

    ```html
    <!-- Old -->
    <ino-button ino-icon="info">Button with leading icon</ino-button>
    
    <!-- New -->
    <ino-button ino-icon-leading>
      <ino-icon ino-icon="info" slot="ino-icon-leading"></ino-icon>
      Button with leading icon
    </ino-button>
    ```
    
    While this does seem like more work for the consumer, we implemented this change in order to have a consistent way of using the `<ino-icon>` in combination with our other components. These changes also offer much more flexibility in the use of the `<ino-icon>` as you can now utilize the whole API of the `<ino-icon>` component (e.g. using your own icons, providing your custom click handler, ...).

### Features

* **elements|ino-datepicker:** validate input based on date format ([#50](https://github.com/inovex/elements/issues/50)) ([ea4d288](https://github.com/inovex/elements/commit/ea4d2887f9d96777bf294ea66af8766511b7c505))
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
* **elements|ino-button:** replace icon property with icon slot ([#28](https://github.com/inovex/elements/issues/28)) ([388ce17](https://github.com/inovex/elements/commit/388ce17df09e8adb8b9d2c7e3a8a7025223cb5f6))

# [0.21.0](https://github.com/inovex/elements/compare/v0.20.0...v0.21.0) (2020-07-02)



# [0.20.0](https://github.com/inovex/elements/compare/v0.19.1...v0.20.0) (2020-06-25)


### Features

* **elements:** add ino-img-list component ([3c15e98](https://github.com/inovex/elements/commit/3c15e9818a46e1f5860eed8e83ad6f200262f71f))



## [0.19.1](https://github.com/inovex/elements/compare/v0.19.0...v0.19.1) (2020-06-18)



# [0.19.0](https://github.com/inovex/elements/compare/v0.18.0...v0.19.0) (2020-06-18)


### Features

* **elements:** add ino-table/-row/-cell components ([fc2f778](https://github.com/inovex/elements/commit/fc2f778ada0c4153d9f67a2a8daef4250228b64f))
* **elements:** add progress-bar component ([5fbd35e](https://github.com/inovex/elements/commit/5fbd35e9c1a8e2494bdbce4f0148e39d7794d8c0))
* **elements|ino-icon:** add property to set svg title ([e6a6b60](https://github.com/inovex/elements/commit/e6a6b608168364186a840a1952f89afe046f4512))



# [0.18.0](https://github.com/inovex/elements/compare/v0.17.0...v0.18.0) (2020-05-20)


### Features

* **elements|ino-button:** add css variables ([9295b65](https://github.com/inovex/elements/commit/9295b6510029e4c37ef25e535467d1ad3ce90fb2))
* **elements|ino-input:** add methods to focus and blur the input element ([9c9e863](https://github.com/inovex/elements/commit/9c9e863b2d0fa798ab0484132855977a1634df03))
* **elements|ino-option-group:** add ino-option-group component ([6aa7a3c](https://github.com/inovex/elements/commit/6aa7a3ca7bbe771b269b27934bea88ce021b9bc6))



# [0.17.0](https://github.com/inovex/elements/compare/v0.16.0...v0.17.0) (2020-04-29)


### Features

* **elements|ino-checkbox:** add selection variant ([3e74a78](https://github.com/inovex/elements/commit/3e74a7892bdaa9dd12e1be8cf60780881a7b10d4))
* **elements|ino-icon:** unify icons & add styling options with CSS variables ([a755e69](https://github.com/inovex/elements/commit/a755e69a656b591d869f23af818bc8a51b3718cb))
* **elements|ino-nav-drawer:** create nav-drawer element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-nav-item:** create nav-item element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-sidebar:** add ino-sidebar ([e9d56de](https://github.com/inovex/elements/commit/e9d56de9abfec70139f8f1cce9f164b245040f89))
* **storybook:** add pure js example and cleanup docs ([7cc9fdb](https://github.com/inovex/elements/commit/7cc9fdb77bf746096dcedfc769f66ecdf981d3ea))



# [0.16.0](https://github.com/inovex/elements/compare/v0.15.1...v0.16.0) (2020-04-01)



## [0.15.1](https://github.com/inovex/elements/compare/v0.15.0...v0.15.1) (2020-03-26)


### Bug Fixes

* **elements:** revert @stencil/core to 1.10.3 due to style issues ([376c79d](https://github.com/inovex/elements/commit/376c79d94d45c4ab52bbf635bbfa9c446a0d7264))



# [0.15.0](https://github.com/inovex/elements/compare/v0.14.0...v0.15.0) (2020-03-25)


### Features

* **elements|ino-button:** add property ino-loading to display a loading spinner ([7cbbce7](https://github.com/inovex/elements/commit/7cbbce7058162e2a585ce08431d28e0113a19cf8))
* **elements|ino-header:** add component ([4c5c69f](https://github.com/inovex/elements/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))
* **elements|ino-segment-group:** add ino-segment-group and -button ([e26478c](https://github.com/inovex/elements/commit/e26478cf593052c23cd707ecb678997dd5cd6e85))



# [0.14.0](https://github.com/inovex/elements/compare/v0.13.0...v0.14.0) (2020-03-17)


### Bug Fixes

* **elements:** fix wrong index in activeTabChange event in the ino-tab-bar ([4c90881](https://github.com/inovex/elements/commit/4c908817d62af58fc6442ebd5271c5b099ade997))


### Features

* **elements:** add option to align snackbar to the right ([eb8b8ab](https://github.com/inovex/elements/commit/eb8b8ab39660e0f5fe4ea3a99ae5aa338b37d31a))
* **elements:** ino-fab(-set) in inovex style ([8bd1b32](https://github.com/inovex/elements/commit/8bd1b32458f60ce2c876e005e5cbc1159e269587))



# [0.13.0](https://github.com/inovex/elements/compare/v0.12.0...v0.13.0) (2020-02-19)



# [0.12.0](https://github.com/inovex/elements/compare/v0.11.0...v0.12.0) (2020-02-12)


### Features

* **elements:** add option to mark inputs as optional ([6ee24de](https://github.com/inovex/elements/commit/6ee24de3e8953967e28483a7cc2c83e136a5d0bc))
* **elements:** add ino-switch ([23a5512](https://github.com/inovex/elements/commit/23a55126912e218b47170b9a0442b1c2924cc3d7))



# [0.11.0](https://github.com/inovex/elements/compare/v0.10.1...v0.11.0) (2020-02-07)


### Features

* **elements:** add new ino-error prop to ino-input ([3e4ae46](https://github.com/inovex/elements/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](https://github.com/inovex/elements/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))



## [0.10.1](https://github.com/inovex/elements/compare/v0.10.0...v0.10.1) (2019-12-09)



# [0.10.0](https://github.com/inovex/elements/compare/v0.9.0...v0.10.0) (2019-12-09)
