# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
* **elements:** The `tertiary` option for ino-color-scheme has been removed to match the colors specified by our design team

### Features

* **elements:** add component overview ([#68](https://github.com/inovex/elements/issues/68)) ([80c51b6](https://github.com/inovex/elements/commit/80c51b6084faaceaf904a12641d32ab90e802e3d))
* **elements|ino-datepicker:** validate input based on date format ([#50](https://github.com/inovex/elements/issues/50)) ([ea4d288](https://github.com/inovex/elements/commit/ea4d2887f9d96777bf294ea66af8766511b7c505))
* **elements|ino-dialog:** add dialog component ([da53a5a](https://github.com/inovex/elements/commit/da53a5a9c9f57a7fb7be91ced04c8a3db8c8ecc7))
* **elements|ino-icon:** add report icon ([27d3ea5](https://github.com/inovex/elements/commit/27d3ea58664fdfc6fe4c740b59ddb2e94af8e143))
* **elements|ino-input:** use native email validation ([#29](https://github.com/inovex/elements/issues/29)) ([6291bcb](https://github.com/inovex/elements/commit/6291bcbaa14466c8a2f14e757c8d47a3d7367b23))
* **storybook:** display favicon in production storybook ([#19](https://github.com/inovex/elements/issues/19)) ([5423671](https://github.com/inovex/elements/commit/54236710264c7872f658c606459d16d5eebae24a))


### Bug Fixes

* **storybook|ino-img-list:** fix example images not loading in story ([#20](https://github.com/inovex/elements/issues/20)) ([5158e86](https://github.com/inovex/elements/commit/5158e86d3ae38c9a36f34c4b0af9f2a39054abc4))


* **elements:** update style guide and colors according to the design specifications ([#7](https://github.com/inovex/elements/issues/7)) ([786c630](https://github.com/inovex/elements/commit/786c630b62cd2a9b0949afabd22af81a59e57192))


### Miscellaneous

* **storybook:** upgrade Storybook to v6 ([#51](https://github.com/inovex/elements/issues/51)) ([68b359c](https://github.com/inovex/elements/commit/68b359cdf6a8ca426b5fe08afd5b38215723468b))
* add heading for refactor commit type ([#54](https://github.com/inovex/elements/issues/54)) ([c5e0bdc](https://github.com/inovex/elements/commit/c5e0bdc793f5a26bd82166475ecd27a17f99f9d9))
* **elements|ino-icon:** remove icoMoon dependency ([#49](https://github.com/inovex/elements/issues/49)) ([aa05f5b](https://github.com/inovex/elements/commit/aa05f5b6e690ca6abe0d39be92061fd383163fd7))
* list additional commit types in generated changelogs ([#5](https://github.com/inovex/elements/issues/5)) ([7f7c7bf](https://github.com/inovex/elements/commit/7f7c7bff2cb4f795d7df30d3e0a86ffb12bef419))
* update references to new repository in changelogs ([#16](https://github.com/inovex/elements/issues/16)) ([06f83f1](https://github.com/inovex/elements/commit/06f83f1acd0aef1cf5941766ebc17203648cda52))
* update release workflow ([#13](https://github.com/inovex/elements/issues/13)) ([14b9578](https://github.com/inovex/elements/commit/14b9578fb437b2801a68e478007f581805ea34ef))
* update repository references in packages ([#15](https://github.com/inovex/elements/issues/15)) ([2b38cc5](https://github.com/inovex/elements/commit/2b38cc51f5c76851f127b9618ed3fda475c351a6))
* **storybook:** update storybook to 5.3.0 ([#9](https://github.com/inovex/elements/issues/9)) ([b8854a0](https://github.com/inovex/elements/commit/b8854a0c5b6cf20e67b45a9200e43a0158542a00))


### Refactoring

* change scope from (at)inovex to (at)inovex.de ([#66](https://github.com/inovex/elements/issues/66)) ([96186c2](https://github.com/inovex/elements/commit/96186c2b6f42eb202acf69cd7e0da6280b831864))
* **elements|ino-button:** replace icon property with icon slot ([#28](https://github.com/inovex/elements/issues/28)) ([388ce17](https://github.com/inovex/elements/commit/388ce17df09e8adb8b9d2c7e3a8a7025223cb5f6))
* **storybook:** remove deprecated addon-options ([#21](https://github.com/inovex/elements/issues/21)) ([ef27b02](https://github.com/inovex/elements/commit/ef27b02dadca41c2d635352f19b5cbae54db0b7c))


### Documentation

* link to github issues instead of jira ([#39](https://github.com/inovex/elements/issues/39)) ([5f2276d](https://github.com/inovex/elements/commit/5f2276d0ed5ba23a77395618cdb94ccc37ef0876))
* move html content out of knob ([#6](https://github.com/inovex/elements/issues/6)) ([7380b34](https://github.com/inovex/elements/commit/7380b345d4529c360c02551c12730d49ec321f9b))
* update url's of storybook ([#12](https://github.com/inovex/elements/issues/12)) ([791c8da](https://github.com/inovex/elements/commit/791c8daed3e774b31fb41259bf1410176f63fdaa))
* use self-hosted fonts ([#61](https://github.com/inovex/elements/issues/61)) ([6af692b](https://github.com/inovex/elements/commit/6af692b05baa80357ea2febf24632d8110fba706))

# [0.21.0](https://github.com/inovex/elements/compare/v0.20.0...v0.21.0) (2020-07-02)



# [0.20.0](https://github.com/inovex/elements/compare/v0.19.1...v0.20.0) (2020-06-25)


### Bug Fixes

* **elements|ino-icon:** fix internally used icon not loading correctly ([cc77301](https://github.com/inovex/elements/commit/cc77301e43afc3a44052dbbb56cbcccf76a4ab58))


### Features

* **elements:** add ino-img-list component ([3c15e98](https://github.com/inovex/elements/commit/3c15e9818a46e1f5860eed8e83ad6f200262f71f))



## [0.19.1](https://github.com/inovex/elements/compare/v0.19.0...v0.19.1) (2020-06-18)



# [0.19.0](https://github.com/inovex/elements/compare/v0.18.0...v0.19.0) (2020-06-18)


### Features

* **elements:** add ino-table/-row/-cell components ([fc2f778](https://github.com/inovex/elements/commit/fc2f778ada0c4153d9f67a2a8daef4250228b64f))
* **elements:** add progress-bar component ([5fbd35e](https://github.com/inovex/elements/commit/5fbd35e9c1a8e2494bdbce4f0148e39d7794d8c0))
* **elements|ino-icon:** add property to set svg title ([e6a6b60](https://github.com/inovex/elements/commit/e6a6b608168364186a840a1952f89afe046f4512))
* **elements|ino-icon:** add additional arrow icons ([8215b05](https://github.com/inovex/elements/commit/8215b05665e5fba9cd79edf41b4a1151d1699d26))



# [0.18.0](https://github.com/inovex/elements/compare/v0.17.0...v0.18.0) (2020-05-20)


### Bug Fixes

* **elements|ino-datepicker:** styles are now applied correctly ([b114ed3](https://github.com/inovex/elements/commit/b114ed3473f7e0a7e610c235aac6acfb74818f77))
* **elements|ino-sidebar:** fix icons in sidebar story ([e6c6a57](https://github.com/inovex/elements/commit/e6c6a5776493c9e3b5acecfc2f5cfc012e36857f))


### Features

* **elements|ino-button:** add css variables ([9295b65](https://github.com/inovex/elements/commit/9295b6510029e4c37ef25e535467d1ad3ce90fb2))
* **elements|ino-option-group:** add ino-option-group component ([6aa7a3c](https://github.com/inovex/elements/commit/6aa7a3ca7bbe771b269b27934bea88ce021b9bc6))
* **elements|ino-select:** add css variable for custom height ([7c8966b](https://github.com/inovex/elements/commit/7c8966b0aea80ba856ee13dd5d85295168e9d60b))
* **elements|ino-sidebar:** add css variable to specify the width ([062fe24](https://github.com/inovex/elements/commit/062fe24a1de532481e19f1f3b9aaf3ba69b8f74c))



# [0.17.0](https://github.com/inovex/elements/compare/v0.16.0...v0.17.0) (2020-04-29)


### Features

* **elements|ino-checkbox:** add selection variant ([3e74a78](https://github.com/inovex/elements/commit/3e74a7892bdaa9dd12e1be8cf60780881a7b10d4))
* **elements|ino-icon:** unify icons & add styling options with CSS variables ([a755e69](https://github.com/inovex/elements/commit/a755e69a656b591d869f23af818bc8a51b3718cb))
* **elements|ino-nav-drawer:** create nav-drawer element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-nav-item:** create nav-item element ([72dd914](https://github.com/inovex/elements/commit/72dd9143c3859a9b173a779de4d1ef9114d3f65c))
* **elements|ino-sidebar:** add ino-sidebar ([e9d56de](https://github.com/inovex/elements/commit/e9d56de9abfec70139f8f1cce9f164b245040f89))
* **storybook:** add pure js example and cleanup docs ([7cc9fdb](https://github.com/inovex/elements/commit/7cc9fdb77bf746096dcedfc769f66ecdf981d3ea))



# [0.16.0](https://github.com/inovex/elements/compare/v0.15.1...v0.16.0) (2020-04-01)


### Bug Fixes

* **storybook:** show elements logo also in storybook ([14cc38d](https://github.com/inovex/elements/commit/14cc38dccb50efb01e8fc842edef9254696e0980))


### Features

* **storybook:** integrate stackblitz code examples ([a4b0e8d](https://github.com/inovex/elements/commit/a4b0e8d7abaaca1753672b809ef48827113a1281))



## [0.15.1](https://github.com/inovex/elements/compare/v0.15.0...v0.15.1) (2020-03-26)



# [0.15.0](https://github.com/inovex/elements/compare/v0.14.0...v0.15.0) (2020-03-25)


### Features

* **elements|ino-button:** add property ino-loading to display a loading spinner ([7cbbce7](https://github.com/inovex/elements/commit/7cbbce7058162e2a585ce08431d28e0113a19cf8))
* **elements|ino-header:** add component ([4c5c69f](https://github.com/inovex/elements/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))
* **elements|ino-segment-group:** add ino-segment-group and -button ([e26478c](https://github.com/inovex/elements/commit/e26478cf593052c23cd707ecb678997dd5cd6e85))
* **elements|ino-snackbar:** add feedback variant ([252c044](https://github.com/inovex/elements/commit/252c0441131a97cc3c8151039c6727f48ae8809e))



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
* **elements:** add month picker option to ino-datepicker ([1f796a6](https://github.com/inovex/elements/commit/1f796a64bcd69d1dba450127589174fb1f3d0562))



# [0.11.0](https://github.com/inovex/elements/compare/v0.10.1...v0.11.0) (2020-02-07)


### Bug Fixes

* **elements-storybook:** fix icon search input not updating it's value ([64c7ad5](https://github.com/inovex/elements/commit/64c7ad5beee6015509e55760c9b08bc32ec3d7e3))
* **ino-textarea:** set inner width to 100% ([6c37996](https://github.com/inovex/elements/commit/6c379962b7d1373d2537f17ff222548bfc4d59f5))


### Features

* **elements:** add new ino-error prop to ino-input ([3e4ae46](https://github.com/inovex/elements/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](https://github.com/inovex/elements/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))
* **elements:** ino-checkbox in inovex style ([5884df0](https://github.com/inovex/elements/commit/5884df0fd950fe02636731b7b6abf29af5f7b008))
* **icons:** add new icons, update icon names, update readme ([d176efa](https://github.com/inovex/elements/commit/d176efa3742fe51b6f3f880ec66378de5a5b31df))



## [0.10.1](https://github.com/inovex/elements/compare/v0.10.0...v0.10.1) (2019-12-09)



# [0.10.0](https://github.com/inovex/elements/compare/v0.9.0...v0.10.0) (2019-12-09)
