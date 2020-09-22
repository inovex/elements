# Changelog
### [1.0.2](https://github.com/inovex/elements/compare/v1.0.1...v1.0.2) (2020-09-22)

### [1.0.1](https://github.com/inovex/elements/compare/v1.0.0...v1.0.1) (2020-09-22)


### Bug Fixes

* **storybook:** fix showcase urls ([#74](https://github.com/inovex/elements/issues/74)) ([60de0ff](https://github.com/inovex/elements/commit/60de0ffc3051d713d49cb07e4a00bc9de4cbf27a))

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
* **elements-react|ino-option-group:** use as vdom wrapper for ino-option ([#23](https://github.com/inovex/elements/issues/23)) ([9b96512](https://github.com/inovex/elements/commit/9b965120f91b12030eb63dc4a108b77ed32d9cd3))
* **elements|ino-datepicker:** validate input based on date format ([#50](https://github.com/inovex/elements/issues/50)) ([ea4d288](https://github.com/inovex/elements/commit/ea4d2887f9d96777bf294ea66af8766511b7c505))
* **elements|ino-dialog:** add dialog component ([da53a5a](https://github.com/inovex/elements/commit/da53a5a9c9f57a7fb7be91ced04c8a3db8c8ecc7))
* **elements|ino-icon:** add report icon ([27d3ea5](https://github.com/inovex/elements/commit/27d3ea58664fdfc6fe4c740b59ddb2e94af8e143))
* **elements|ino-input:** use native email validation ([#29](https://github.com/inovex/elements/issues/29)) ([6291bcb](https://github.com/inovex/elements/commit/6291bcbaa14466c8a2f14e757c8d47a3d7367b23))
* **storybook:** display favicon in production storybook ([#19](https://github.com/inovex/elements/issues/19)) ([5423671](https://github.com/inovex/elements/commit/54236710264c7872f658c606459d16d5eebae24a))


### Bug Fixes

* **elements|ino-button:** fix invisible loading spinner ([#10](https://github.com/inovex/elements/issues/10)) ([50dd530](https://github.com/inovex/elements/commit/50dd5308226e68e53ac4268b7c11996eeedb80ef))
* **elements|ino-fab-set:** remove blue bar below dial button ([#58](https://github.com/inovex/elements/issues/58)) ([c89f40f](https://github.com/inovex/elements/commit/c89f40fa24651e43d436a69ca52a6625f260de51))
* **elements|ino-icon:** use correct css variable for special icons ([9b3cbe6](https://github.com/inovex/elements/commit/9b3cbe67df8a6d6abc40287178362cd52d6d5540))
* **elements|ino-input:** fix too large number arrows ([#33](https://github.com/inovex/elements/issues/33)) ([c60e9a6](https://github.com/inovex/elements/commit/c60e9a67529f3826a7170e0f3dd16c6483a08ed2))
* **elements|ino-select:** fix ellipsis for required selects in chrome ([#31](https://github.com/inovex/elements/issues/31)) ([47ee3b6](https://github.com/inovex/elements/commit/47ee3b660b54f380cc11dc03625d899980740d51))
* **storybook|ino-img-list:** fix example images not loading in story ([#20](https://github.com/inovex/elements/issues/20)) ([5158e86](https://github.com/inovex/elements/commit/5158e86d3ae38c9a36f34c4b0af9f2a39054abc4))


* **elements:** update style guide and colors according to the design specifications ([#7](https://github.com/inovex/elements/issues/7)) ([786c630](https://github.com/inovex/elements/commit/786c630b62cd2a9b0949afabd22af81a59e57192))


### Miscellaneous

* **storybook:** upgrade Storybook to v6 ([#51](https://github.com/inovex/elements/issues/51)) ([68b359c](https://github.com/inovex/elements/commit/68b359cdf6a8ca426b5fe08afd5b38215723468b))
* add heading for refactor commit type ([#54](https://github.com/inovex/elements/issues/54)) ([c5e0bdc](https://github.com/inovex/elements/commit/c5e0bdc793f5a26bd82166475ecd27a17f99f9d9))
* **elements|ino-icon:** remove icoMoon dependency ([#49](https://github.com/inovex/elements/issues/49)) ([aa05f5b](https://github.com/inovex/elements/commit/aa05f5b6e690ca6abe0d39be92061fd383163fd7))
* ensure at least one semantic commit in PR ([#8](https://github.com/inovex/elements/issues/8)) ([72c71e3](https://github.com/inovex/elements/commit/72c71e3dfdbae620065567a258b5017b32dfee6c))
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

* add license file ([#11](https://github.com/inovex/elements/issues/11)) ([55a36a9](https://github.com/inovex/elements/commit/55a36a916c0ebbe1ef5576f3570f970a025a4c70))
* add license to readme ([#53](https://github.com/inovex/elements/issues/53)) ([45b4e51](https://github.com/inovex/elements/commit/45b4e51bae5b6d6a78bcf8a61a11c78072dc326d))
* link to github issues instead of jira ([#39](https://github.com/inovex/elements/issues/39)) ([5f2276d](https://github.com/inovex/elements/commit/5f2276d0ed5ba23a77395618cdb94ccc37ef0876))
* move html content out of knob ([#6](https://github.com/inovex/elements/issues/6)) ([7380b34](https://github.com/inovex/elements/commit/7380b345d4529c360c02551c12730d49ec321f9b))
* update all Gitlab occurrences ([#70](https://github.com/inovex/elements/issues/70)) ([2d58428](https://github.com/inovex/elements/commit/2d5842886ff5530e223b2d902d8fb296bc91c7eb))
* update integration instructions ([#63](https://github.com/inovex/elements/issues/63)) ([e54f3b0](https://github.com/inovex/elements/commit/e54f3b096983fc6b954397c732cc1878c71bd0db))
* update url's of storybook ([#12](https://github.com/inovex/elements/issues/12)) ([791c8da](https://github.com/inovex/elements/commit/791c8daed3e774b31fb41259bf1410176f63fdaa))
* use self-hosted fonts ([#61](https://github.com/inovex/elements/issues/61)) ([6af692b](https://github.com/inovex/elements/commit/6af692b05baa80357ea2febf24632d8110fba706))
* **elements|ino-header:** fix wrong header in README ([655154c](https://github.com/inovex/elements/commit/655154cbba0b35e01b23a9fdbc9b956a8e05d493))

# [0.21.0](https://github.com/inovex/elements/compare/v0.20.0...v0.21.0) (2020-07-02)


### Bug Fixes
* **elements:** remove obsolete popper.js dependency ([2f934feb](https://github.com/inovex/elements/commit/2f934febf5b5eff052056b43d3cf34b0d4244670))


### Feature
* **elements|ino-icon:** update names of custom properties ([efc56f15](https://github.com/inovex/elements/commit/efc56f15d0f01517d8b20640a20f265b533e0d25))


### BREAKING CHANGES
In order to apply the correct naming pattern for custom variables (a.k.a. CSS-Variables) it was necessary to rename the custom properties of the ino-icon component. The renamed variables are listed in the following table:

| Old Name        | New Name           | 
|---------------|--------------------|
| `--color`  | `--ino-icon-color-primary` or `--ino-icon-color-secondary`   |
| `--height`    | `--ino-icon-height`    |
| `--width` | `--ino-icon-width` |



# [0.20.0](https://github.com/inovex/elements/compare/v0.19.1...v0.20.0) (2020-06-25)


### Bug Fixes

* **elements|ino-icon:** fix internally used icon not loading correctly ([cc77301](https://github.com/inovex/elements/commit/cc77301e43afc3a44052dbbb56cbcccf76a4ab58))


### Features

* **elements:** add ino-img-list component ([3c15e98](https://github.com/inovex/elements/commit/3c15e9818a46e1f5860eed8e83ad6f200262f71f))
* **elements|ino-checkbox:** add css variables ([5a38adb](https://github.com/inovex/elements/commit/5a38adb6e55ad1ac353dbd038387a4324500f1cc))



## [0.19.1](https://github.com/inovex/elements/compare/v0.19.0...v0.19.1) (2020-06-18)


### Bug Fixes

* **elements|ino-icon:** fix svg parser typescript error ([34775b8](https://github.com/inovex/elements/commit/34775b8be60ccdfb2d97bba1019fe5858a09fe88))



# [0.19.0](https://github.com/inovex/elements/compare/v0.18.0...v0.19.0) (2020-06-18)


### Bug Fixes

* **elements|ino-input:** fix autoFocus property not being recognized ([c5a4d6f](https://github.com/inovex/elements/commit/c5a4d6f6c988dbcbda22086238940d90f64f96c4))
* **elements|ino-list-item:** fix propagation bug ([c20ceaa](https://github.com/inovex/elements/commit/c20ceaac7f4723954e48720b5e56afdcf4baf2b4))
* **elements|ino-option:** use min-height instead of fixed height ([21717eb](https://github.com/inovex/elements/commit/21717eb2e9c646c034dbef467fcec4cf28309ae4))
* **elements|ino-select:** fix wrong positioning of opened select ([e05b83e](https://github.com/inovex/elements/commit/e05b83e39c7b0ee6a2a11c6354734a4d992c14f9))
* **elements|ino-select:** truncate overflowed text in select field ([2dc54fc](https://github.com/inovex/elements/commit/2dc54fccc438bc2d3279c76e8ade46675c449b24))
* **elements|ino-sidebar:** remove the ability to close the sidebar by pressing escape ([1ae8845](https://github.com/inovex/elements/commit/1ae884565fc30a58a0bb79ac32b3580bb6a2fd27))


### Features

* **elements:** add ino-table/-row/-cell components ([fc2f778](https://github.com/inovex/elements/commit/fc2f778ada0c4153d9f67a2a8daef4250228b64f))
* **elements:** add progress-bar component ([5fbd35e](https://github.com/inovex/elements/commit/5fbd35e9c1a8e2494bdbce4f0148e39d7794d8c0))
* **elements|ino-icon:** add property to set svg title ([e6a6b60](https://github.com/inovex/elements/commit/e6a6b608168364186a840a1952f89afe046f4512))
* **elements|ino-icon:** add additional arrow icons ([8215b05](https://github.com/inovex/elements/commit/8215b05665e5fba9cd79edf41b4a1151d1699d26))



# [0.18.0](https://github.com/inovex/elements/compare/v0.17.0...v0.18.0) (2020-05-20)


### Bug Fixes

* **elements|ino-datepicker:** fix parsing on keyboard input ([9ea3628](https://github.com/inovex/elements/commit/9ea36286b600d2fd77f62090ee2513282d2463ba))
* **elements|ino-datepicker:** styles are now applied correctly ([b114ed3](https://github.com/inovex/elements/commit/b114ed3473f7e0a7e610c235aac6acfb74818f77))
* **elements|ino-select:** fix label hint when required ([c01c4fb](https://github.com/inovex/elements/commit/c01c4fb5775f1c842568221b9789cc7b223217d1))
* **elements|ino-sidebar:** fix icons in sidebar story ([e6c6a57](https://github.com/inovex/elements/commit/e6c6a5776493c9e3b5acecfc2f5cfc012e36857f))
* **elements|ino-tooltip:** tooltip disappearing on mouseout when click trigger ([7a3859a](https://github.com/inovex/elements/commit/7a3859a68437c27632f9159fca11127066d4472c))


### Features

* **elements|ino-button:** add css variables ([9295b65](https://github.com/inovex/elements/commit/9295b6510029e4c37ef25e535467d1ad3ce90fb2))
* **elements|ino-input:** add methods to focus and blur the input element ([9c9e863](https://github.com/inovex/elements/commit/9c9e863b2d0fa798ab0484132855977a1634df03))
* **elements|ino-option-group:** add ino-option-group component ([6aa7a3c](https://github.com/inovex/elements/commit/6aa7a3ca7bbe771b269b27934bea88ce021b9bc6))
* **elements|ino-select:** add css variable for custom height ([7c8966b](https://github.com/inovex/elements/commit/7c8966b0aea80ba856ee13dd5d85295168e9d60b))
* **elements|ino-sidebar:** add css variable to specify the width ([062fe24](https://github.com/inovex/elements/commit/062fe24a1de532481e19f1f3b9aaf3ba69b8f74c))

### BREAKING CHANGES
* **ino-button:** The color-scheme has been changed to match the designer's specification. Possible values are now: `primary`, `secondary`, `white` and `grey`. While `primary` and `secondary` can be used with any fill-type, `white` and `grey` only work with the `ino-fill="outline"`. The Fill-Types (`ino-fill`) have also been changed. Possible values are now: `solid`, `outline` and the new `inverse` which reverses the currently used color-scheme.

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

### BREAKING CHANGES
* **ino-select:** To implement the new design of the Select component, the component has been reworked. It is no longer based on the native Select element. The `inoPrependDefault ` has been removed, as no option is now automatically selected by default. Also, the `ino-option` element is now required instead of the native option element.  The `autofocus' and `form' properties have been removed because they were not used internally.
* **ino-icon:** The 'ino-icon' component has also been updated. The naming scheme `<icon>-<s|m>' has been discarded. Each icon now only has its own ID without the size suffix. The width and height, as well as the color can now be changed using the new CSS variables. The default color of the icons is now blue.

All icons have been unified. Also the following icons have been renamed, removed and new ones added:

| Added         | Removed            | Renamed                                             |
|---------------|--------------------|-----------------------------------------------------|
| `back-arrow`  | `equalizer`        | `abwesend` -> `status_abwesend`                     |
| `chart`       | `equal`            | `aktuell` -> `time`                                 |
| `chat`        | `favorite_border`  | `delete` -> `remove`                                |
| `checkmark`   | `greater_or_equal` | `date_range` -> `calendar`                          |
| `copy`        | `less_or_equal`    | `file_upload` -> `upload`                           |
| `developer`   | `info-outline`     | `future` -> `status_zukuenftige`                    |
| `logout`      | `star-border`      | `gear` -> `settings`                                |
| `message`     |                    | `gps` -> `location`                                 |
| `offboarding` |                    | `onboarding_laufen` -> `status_onboarding_laufend`  |
| `partner`     |                    | `offboarding_laufen` -> `status_onboarding_laufend` |
| `warning`     |                    | `past` -> `status_vergangene`                       |
| `web`         |                    | `person` | `employee` -> `user`                     |
|               |                    | `sort_AZ` -> `sort_az`                              |
|               |                    | `sort_ZA` -> `sort_za`                              |
|               |                    | `users` -> `employees`                              |



# [0.16.0](https://github.com/inovex/elements/compare/v0.15.1...v0.16.0) (2020-04-01)


### Bug Fixes

* **storybook:** show elements logo also in storybook ([14cc38d](https://github.com/inovex/elements/commit/14cc38dccb50efb01e8fc842edef9254696e0980))


### Features

* **storybook:** integrate stackblitz code examples ([a4b0e8d](https://github.com/inovex/elements/commit/a4b0e8d7abaaca1753672b809ef48827113a1281))



## [0.15.1](https://github.com/inovex/elements/compare/v0.15.0...v0.15.1) (2020-03-26)


### Bug Fixes

* **elements:** revert @stencil/core to 1.10.3 due to style issues ([376c79d](https://github.com/inovex/elements/commit/376c79d94d45c4ab52bbf635bbfa9c446a0d7264))



# [0.15.0](https://github.com/inovex/elements/compare/v0.14.0...v0.15.0) (2020-03-25)


### Bug Fixes

* **elements-react|ino-control-item:** add missing component ([9f29b68](https://github.com/inovex/elements/commit/9f29b68095b5286368533aa359a491580c7e848d))


### Features

* **elements|ino-button:** add property ino-loading to display a loading spinner ([7cbbce7](https://github.com/inovex/elements/commit/7cbbce7058162e2a585ce08431d28e0113a19cf8))
* **elements|ino-header:** add component ([4c5c69f](https://github.com/inovex/elements/commit/4c5c69f5f97f43beb462197aad0c62ffab2e80b6))
* **elements|ino-segment-group:** add ino-segment-group and -button ([e26478c](https://github.com/inovex/elements/commit/e26478cf593052c23cd707ecb678997dd5cd6e85))
* **elements|ino-snackbar:** add feedback variant ([252c044](https://github.com/inovex/elements/commit/252c0441131a97cc3c8151039c6727f48ae8809e))

### BREAKING CHANGES
We updated our dependencies, which resulted in conflicts with the `autofocus` property. If you use the typed version of the elements package, you need to change all appearances of `autofocus` to `autoFocus`. If you use the web components you don't need to change anything.

# [0.14.0](https://github.com/inovex/elements/compare/v0.13.0...v0.14.0) (2020-03-17)


### Bug Fixes

* **elements:** fix wrong index in activeTabChange event in the ino-tab-bar ([4c90881](https://github.com/inovex/elements/commit/4c908817d62af58fc6442ebd5271c5b099ade997))


### Features

* **elements:** add option to align snackbar to the right ([eb8b8ab](https://github.com/inovex/elements/commit/eb8b8ab39660e0f5fe4ea3a99ae5aa338b37d31a))
* **elements:** ino-fab(-set) in inovex style ([8bd1b32](https://github.com/inovex/elements/commit/8bd1b32458f60ce2c876e005e5cbc1159e269587))



# [0.13.0](https://github.com/inovex/elements/compare/v0.12.0...v0.13.0) (2020-02-19)

### Bug Fixes

* **elements:** add timeout to ino-tooltip to wait for host element to be rendered ([43e7b5a](https://github.com/inovex/elements/commit/43e7b5a0c7b53138ab5600eb02ab28be66180dec))
* **elements:** throw better exception in ino-tooltip when target not found ([8c0412f](https://github.com/inovex/elements/commit/8c0412f37828f48553432b3effcb8d44eaab4191))

### Features

* **elements:** ino-snackbar in inovex design ([f080cab6](https://github.com/inovex/elements/commit/f080cab6dd6bc2b64809a9774ea4551730bd7837))

# [0.12.0](https://github.com/inovex/elements/compare/v0.11.0...v0.12.0) (2020-02-12)


### Bug Fixes

* **elements:** disable click on icon when datepicker disabled ([ebb757e](https://github.com/inovex/elements/commit/ebb757ef9fba177715cbe0c693297511d470c7e1))
* **elements:** fix layout of datepicker with disabled month arrow(s) ([2a47f9f](https://github.com/inovex/elements/commit/2a47f9f5f12c29bffc2fe169c523ac62b9bd0ed5))
* **elements:** set correct parameters for latest symbolic link ([2a6a888](https://github.com/inovex/elements/commit/2a6a8888e60098b3ff5950cdd2f8a038195d63ca))


### Features

* **elements:** add option to mark inputs as optional ([6ee24de](https://github.com/inovex/elements/commit/6ee24de3e8953967e28483a7cc2c83e136a5d0bc))
* **elements:** add ino-switch component ([23a5512](https://github.com/inovex/elements/commit/23a55126912e218b47170b9a0442b1c2924cc3d7))
* **elements:** add month picker option to ino-datepicker ([1f796a6](https://github.com/inovex/elements/commit/1f796a64bcd69d1dba450127589174fb1f3d0562))



# [0.11.0](https://github.com/inovex/elements/compare/v0.10.1...v0.11.0) (2020-02-07)


### Bug Fixes

* **elements-storybook:** fix icon search input not updating it's value ([64c7ad5](https://github.com/inovex/elements/commit/64c7ad5beee6015509e55760c9b08bc32ec3d7e3))
* **ino-textarea:** set inner width to 100% ([6c37996](https://github.com/inovex/elements/commit/6c379962b7d1373d2537f17ff222548bfc4d59f5))


### Features

* **elements:** add email validation onBlur ([83a38f7](https://github.com/inovex/elements/commit/83a38f70abe453e8a93a129ab7cb520e9f7ca295))
* **elements:** add new ino-error prop to ino-input ([3e4ae46](https://github.com/inovex/elements/commit/3e4ae46b5cc26f57dd0c43ffac3b1d1d47d1d626))
* **elements:** add thousands sep., decimal places, unit to ino-input ([a7df4cb](https://github.com/inovex/elements/commit/a7df4cbe13e12c8069fddf29e760df080ccbcfd6))
* **elements:** ino-checkbox in inovex style ([5884df0](https://github.com/inovex/elements/commit/5884df0fd950fe02636731b7b6abf29af5f7b008))
* **elements-react:** add ino-radio-group component ([2500449](https://github.com/inovex/elements/commit/2500449b7368e0184667c9fd32550a450618c4dd))
* **icons:** add new icons, update icon names, update readme ([d176efa](https://github.com/inovex/elements/commit/d176efa3742fe51b6f3f880ec66378de5a5b31df))

### Breaking Changes
Some icons have been renamed to match the new naming convention. The new naming convention was introduced to reflect the newly added sizes and colors in the ID of each icon. The old naming convention was: `<id>-<a|b>` (e.g. `birthday-a`). The new naming convention is the following: `<id>-<size>-<grey>?` (e.g. `birthday-m`). If any of your used ino-icons has the suffix `-a` or `-b`, please search for the new id in the [ino-icon page](https://elements.inovex.de/dist/latest/storybook/?path=/story/graphic-ino-icon--default-usage) and update the `ino-icon`-Property accordingly (e.g. `birthday-a` -> `birthday-m`).

There are three different sizes: xs, s and m. The default which should be used is m. Many icons also have a grey version which has the suffix "-grey" (e.g. `birthday-m-grey`).


## [0.10.1](https://github.com/inovex/elements/compare/v0.10.0...v0.10.1) (2019-12-09)


### Bug Fixes

* pipeline ([e237d00](https://github.com/inovex/elements/commit/e237d00ae7d9925fd231e476746adf09384056a4))



# [0.10.0](https://github.com/inovex/elements/compare/v0.9.0...v0.10.0) (2019-12-09)


### Bug Fixes

* reset native input properly ([c397da0](https://github.com/inovex/elements/commit/c397da01cdc46b30e5e507f2fab5ab7798c2ff5b))


### Features

* **angular:** inital project ([df78166](https://github.com/inovex/elements/commit/df78166498a76f1b752727a8ba57b6dfa1ee4434))
* **ino-icon:** add james icons, improve stories, add search functionality ([d67db75](https://github.com/inovex/elements/commit/d67db758b539e5f99e0c1b412bfdebb079a4f162))



# [0.9.0](https://github.com/inovex/elements/compare/v0.8.0...v0.9.0) (2019-10-11)


### Bug Fixes

* **ino-datepicker:** fix overlapping label ([0e29ecd](https://github.com/inovex/elements/commit/0e29ecd))
* **ino-datepicker:** remove internal static option ([abffbcc](https://github.com/inovex/elements/commit/abffbcc))
* **ino-input:** autofocus ([cc70866](https://github.com/inovex/elements/commit/cc70866))
* **ino-tooltip:** fix misplacement ([2e4f2f8](https://github.com/inovex/elements/commit/2e4f2f8))


### Features

* **ino-datepicker:** inovex design ([b956bab](https://github.com/inovex/elements/commit/b956bab))
* **ino-input:** add 'any' as step option ([77b1f74](https://github.com/inovex/elements/commit/77b1f74))



# [0.8.0](https://github.com/inovex/elements/compare/v0.7.0...v0.8.0) (2019-09-06)


### Features

* **ino-select:** add prop to enable/disable prepended empty element ([e38c9b8](https://github.com/inovex/elements/commit/e38c9b8))



# [0.7.0](https://github.com/inovex/elements/compare/v0.6.6...v0.7.0) (2019-08-16)


### Bug Fixes

* **ino-select:** prevent change of inoPrependDefault to avoid layout problems ([a12eac1](https://github.com/inovex/elements/commit/a12eac1))
* **ino-textarea:** add black border on hover ([ff0d1c5](https://github.com/inovex/elements/commit/ff0d1c5))


### Features

* **ino-control-item:** add component ([da8cc86](https://github.com/inovex/elements/commit/da8cc86))
* **ino-input:** add datalist ([6c4e495](https://github.com/inovex/elements/commit/6c4e495))



## [0.6.6](https://github.com/inovex/elements/compare/v0.6.5...v0.6.6) (2019-08-09)


### Bug Fixes

* **ino-chip-set:** add timeout for ino-chip-set-test ([574e86a](https://github.com/inovex/elements/commit/574e86a))
* **ino-datepicker:** keep input focus as long as picker is opened ([bec1190](https://github.com/inovex/elements/commit/bec1190))



## [0.6.5](https://github.com/inovex/elements/compare/v0.6.4...v0.6.5) (2019-08-06)



## [0.6.4](https://github.com/inovex/elements/compare/v0.6.3...v0.6.4) (2019-08-05)


### Bug Fixes

* **ino-fab:** wrong rendering condition for ino-tooltip within ino-fab ([3c45eff](https://github.com/inovex/elements/commit/3c45eff))


### Features

* **ino-chip:** new default color ([4458b17](https://github.com/inovex/elements/commit/4458b17))
* **ino-input:** add ino-blur und ino-focus events ([013004b](https://github.com/inovex/elements/commit/013004b))



## [0.6.3](https://github.com/inovex/elements/compare/v0.6.2...v0.6.3) (2019-07-29)


### Bug Fixes

* **ino-input:** add mdc-disabled class dynamically ([dda5c9a](https://github.com/inovex/elements/commit/dda5c9a))



## [0.6.2](https://github.com/inovex/elements/compare/v0.6.1...v0.6.2) (2019-07-24)



## [0.6.1](https://github.com/inovex/elements/compare/v0.6.0...v0.6.1) (2019-07-24)


### Bug Fixes

* **ino-snackbar:** always show snackbar to avoid internal state ([acfb1ac](https://github.com/inovex/elements/commit/acfb1ac))



# [0.6.0](https://github.com/inovex/elements/compare/v0.5.6...v0.6.0) (2019-07-23)


### Bug Fixes

* **icons:** add icon support for react components ([7ca10fa](https://github.com/inovex/elements/commit/7ca10fa))
* **ino-input:** DOM-Exception error when using email-type ([4f8a8f1](https://github.com/inovex/elements/commit/4f8a8f1))


### Features

* **mdc-components:** update to version 3.0.0 ([6250abe](https://github.com/inovex/elements/commit/6250abe))



<a name="0.5.6"></a>
## [0.5.6](https://github.com/inovex/elements/compare/v0.5.5...v0.5.6) (2019-05-16)

### Features

* **webpack:** re-add webpack-plugin for webpack projects ([bf5ac07](https://github.com/inovex/elements/commit/bf5ac07))

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

## [0.5.5](https://github.com/inovex/elements/compare/v0.5.4...v0.5.5) (2019-05-02)


### Bug Fixes

* **react:** add Fragment wrapper around children ([35ce49b](https://github.com/inovex/elements/commit/35ce49b))



## [0.5.4](https://github.com/inovex/elements/compare/v0.5.3...v0.5.4) (2019-04-30)


### Bug Fixes

* **postbuild:** fix wrong path ([b1291b0](https://github.com/inovex/elements/commit/b1291b0))



## [0.5.3](https://github.com/inovex/elements/compare/v0.5.2...v0.5.3) (2019-04-29)


### Bug Fixes

* **ino-datepicker:** replace ino-type with newer ino-date-format attribute in readme ([db92e69](https://github.com/inovex/elements/commit/db92e69))
* **react:** export InoInputFile, was missing and export InoListDivider as InoListDivider instead exporting it as InoDivider ([8e310a6](https://github.com/inovex/elements/commit/8e310a6))

### Features

* add react examples to every component readme ([2314dd6](https://github.com/inovex/elements/commit/2314dd6))



## [0.5.2](https://github.com/inovex/elements/compare/v0.5.1...v0.5.2) (2019-04-11)


### Bug Fixes

* **ino-datepicker:** datepicker will now open on input click ([842d21b](https://github.com/inovex/elements/commit/842d21b))
* **postinstall:** remove postinstall from released package ([9b0d202](https://github.com/inovex/elements/commit/9b0d202))
* **storybook:** remove tsx for syntax highlight ([f1dbfb9](https://github.com/inovex/elements/commit/f1dbfb9))



## [0.5.1](https://github.com/inovex/elements/compare/v0.5.0...v0.5.1) (2019-03-26)

### Bug Fixes

* **postinstall:** remove postinstall from released package ([9b0d202](https://github.com/inovex/elements/commit/9b0d202))
* **storybook:** remove tsx for syntax highlight ([f1dbfb9](https://github.com/inovex/elements/commit/f1dbfb9))

## [0.5.0](https://github.com/inovex/elements/compare/v0.4.0...v0.5.0) (2019-03-21)

* **events:** rename (most of) event names ([ed04d98](https://github.com/inovex/elements/commit/ed04d98))
* **ino-datepicker:** fix too many tabs to skip datepicker ([3e25361](https://github.com/inovex/elements/commit/3e25361))
* **ino-input:** Emit new value ([5af46f9](https://github.com/inovex/elements/commit/5af46f9))
* **ino-input:** fix validation bug ([6c2c904](https://github.com/inovex/elements/commit/6c2c904))
* **ino-textarea:** change event listening ([1340af4](https://github.com/inovex/elements/commit/1340af4))
* **text-area:** lower case of event ([3a9194d](https://github.com/inovex/elements/commit/3a9194d))

### Features

* **ino-button:** add constants ([cea66f3](https://github.com/inovex/elements/commit/cea66f3))
* **ino-card:** add image, action buttons and action icons ([5e1c59d](https://github.com/inovex/elements/commit/5e1c59d))
* **ino-checkbox:** change to controlled component ([171e12b](https://github.com/inovex/elements/commit/171e12b))
* **ino-datepicker:** controlled component ([26e2c74](https://github.com/inovex/elements/commit/26e2c74))
* **ino-fab, ino-fab-set:** add components ([589b176](https://github.com/inovex/elements/commit/589b176))
* **ino-icon:** add more icons ([0ade6ee](https://github.com/inovex/elements/commit/0ade6ee))
* **ino-icon:** allow to use custom icons ([9abe27c](https://github.com/inovex/elements/commit/9abe27c))
* **ino-icon-button:** change to controlled component ([dd52485](https://github.com/inovex/elements/commit/dd52485))
* **ino-input:** change to controlled component ([19541c3](https://github.com/inovex/elements/commit/19541c3))
* **ino-input-file:** change to controlled-component ([5054e88](https://github.com/inovex/elements/commit/5054e88))
* **ino-list:** change to controlled component ([f2ba19e](https://github.com/inovex/elements/commit/f2ba19e))
* **ino-menu:** controlled component ([392c7f5](https://github.com/inovex/elements/commit/392c7f5))
* **ino-radio:** make checked attribute unmanaged ([489f32f](https://github.com/inovex/elements/commit/489f32f))
* **ino-range:** change to controlled component ([e9938eb](https://github.com/inovex/elements/commit/e9938eb))
* **ino-range:** switch to MDC components implementation ([b3ac281](https://github.com/inovex/elements/commit/b3ac281))
* **ino-select:** change to controlled component ([5318824](https://github.com/inovex/elements/commit/5318824))
* **ino-tab-bar:** change to controlled component ([5800088](https://github.com/inovex/elements/commit/5800088))
* **ino-textarea:** change to controlled component ([b6b6678](https://github.com/inovex/elements/commit/b6b6678))
* **ino-textarea:** optional autogrow to display all content ([55a8034](https://github.com/inovex/elements/commit/55a8034))
* **react:** add react wrapper ([10e1127](https://github.com/inovex/elements/commit/10e1127))
* **storybook:** add syntax-highlighting ([7f92b40](https://github.com/inovex/elements/commit/7f92b40))
* **types:** add types for certain properties ([6e42f9f](https://github.com/inovex/elements/commit/6e42f9f))

### BREAKING CHANGES

* We switched over to controlled components which means that our inovex element components are now controlled by you,
the consumer. All the state of the component is derived from the props the component exposes. The input component
will no longer update its value when the user types. Instead you must listen to the `valueChange` event and set the
`value` manually.
* The integration in React projects is now much easier, you no longer need to use `ref="..."` to get a reference to
the element, you're now able to use the exposed callbacks from our react wrapper. Please see the setup instructions
for React in Storybook to see how you can migrate.
* Most of the event names have changed, please check all the components for new event names when upgrading.

## [0.4.1](https://github.com/inovex/elements/compare/v0.4.0...v0.4.1) (2018-10-23)

### Bug Fixes

- **events:** rename (most of) event names ([ed04d98](https://github.com/inovex/elements/commit/ed04d98))
- **ino-datepicker:** fix too many tabs to skip datepicker ([3e25361](https://github.com/inovex/elements/commit/3e25361))
- **ino-input:** Emit new value ([5af46f9](https://github.com/inovex/elements/commit/5af46f9))
- **ino-input:** fix validation bug ([6c2c904](https://github.com/inovex/elements/commit/6c2c904))
- **ino-textarea:** change event listening ([1340af4](https://github.com/inovex/elements/commit/1340af4))
- **text-area:** lower case of event ([3a9194d](https://github.com/inovex/elements/commit/3a9194d))

### Features

- **ino-button:** add constants ([cea66f3](https://github.com/inovex/elements/commit/cea66f3))
- **ino-card:** add image, action buttons and action icons ([5e1c59d](https://github.com/inovex/elements/commit/5e1c59d))
- **ino-checkbox:** change to controlled component ([171e12b](https://github.com/inovex/elements/commit/171e12b))
- **ino-datepicker:** controlled component ([26e2c74](https://github.com/inovex/elements/commit/26e2c74))
- **ino-fab, ino-fab-set:** add components ([589b176](https://github.com/inovex/elements/commit/589b176))
- **ino-icon:** add more icons ([0ade6ee](https://github.com/inovex/elements/commit/0ade6ee))
- **ino-icon:** allow to use custom icons ([9abe27c](https://github.com/inovex/elements/commit/9abe27c))
- **ino-icon-button:** change to controlled component ([dd52485](https://github.com/inovex/elements/commit/dd52485))
- **ino-input:** change to controlled component ([19541c3](https://github.com/inovex/elements/commit/19541c3))
- **ino-input-file:** change to controlled-component ([5054e88](https://github.com/inovex/elements/commit/5054e88))
- **ino-list:** change to controlled component ([f2ba19e](https://github.com/inovex/elements/commit/f2ba19e))
- **ino-menu:** controlled component ([392c7f5](https://github.com/inovex/elements/commit/392c7f5))
- **ino-radio:** make checked attribute unmanaged ([489f32f](https://github.com/inovex/elements/commit/489f32f))
- **ino-range:** change to controlled component ([e9938eb](https://github.com/inovex/elements/commit/e9938eb))
- **ino-range:** switch to MDC components implementation ([b3ac281](https://github.com/inovex/elements/commit/b3ac281))
- **ino-select:** change to controlled component ([5318824](https://github.com/inovex/elements/commit/5318824))
- **ino-tab-bar:** change to controlled component ([5800088](https://github.com/inovex/elements/commit/5800088))
- **ino-textarea:** change to controlled component ([b6b6678](https://github.com/inovex/elements/commit/b6b6678))
- **ino-textarea:** optional autogrow to display all content ([55a8034](https://github.com/inovex/elements/commit/55a8034))
- **react:** add react wrapper ([10e1127](https://github.com/inovex/elements/commit/10e1127))
- **storybook:** add syntax-highlighting ([7f92b40](https://github.com/inovex/elements/commit/7f92b40))
- **types:** add types for certain properties ([6e42f9f](https://github.com/inovex/elements/commit/6e42f9f))

### BREAKING CHANGES

- We switched over to controlled components which means that our inovex element components are now controlled by you,
  the consumer. All the state of the component is derived from the props the component exposes. The input component
  will no longer update its value when the user types. Instead you must listen to the `valueChange` event and set the
  `value` manually.
- The integration in React projects is now much easier, you no longer need to use `ref="..."` to get a reference to
  the element, you're now able to use the exposed callbacks from our react wrapper. Please see the setup instructions
  for React in Storybook to see how you can migrate.
- Most of the event names have changed, please check all the components for new event names when upgrading.

## [0.4.0](https://github.com/inovex/elements/compare/v0.3.0...v0.4.0) (2018-09-25)

## [0.4.0](https://github.com/inovex/elements/compare/v0.3.0...v0.4.0) (2018-09-25)

### Bug Fixes

- **ino-button:** background color was not applied for raised property ([b70930f](https://github.com/inovex/elements/commit/b70930f))
- **ino-message-box, ino-spinner:** disable modal functionality if value of property is false ([de10b7d](https://github.com/inovex/elements/commit/de10b7d))
- **storybook:** fix icon import and naming issue ([0cb1231](https://github.com/inovex/elements/commit/0cb1231))

### Features

- **ino-checkbox:** add indeterminate status ([5d858e3](https://github.com/inovex/elements/commit/5d858e3))
- **ino-chip-set:** add component ([e356839](https://github.com/inovex/elements/commit/e356839))
- **ino-input-file:** add component ([03021ab](https://github.com/inovex/elements/commit/03021ab))
- **ino-list:** add meta- and graphic-support ([a0c05b9](https://github.com/inovex/elements/commit/a0c05b9))
- **ino-snackbar:** add component ([4b5d47f](https://github.com/inovex/elements/commit/4b5d47f))
- **ino-tab, ino-tab-bar:** add component ([ffeb083](https://github.com/inovex/elements/commit/ffeb083))
- **storybook:** migrate to plain html ([1ae48b3](https://github.com/inovex/elements/commit/1ae48b3))
- **storybook:** show version of elements ([9a85dc0](https://github.com/inovex/elements/commit/9a85dc0))

### Reverts

- feat(ino-message-box): add message box ([4911def](https://github.com/inovex/elements/commit/4911def))

### BREAKING CHANGES

- The <ino-message-box> component has been removed because the use case is provided by the newly introduced ino-card component and ino-snackbar component. Please switch to that components instead

## [0.3.0](https://github.com/inovex/elements/compare/v0.2.0...v0.3.0) (2018-09-11)

### Bug Fixes

- use BEM conform css class names ([3d5350f](https://github.com/inovex/elements/commit/3d5350f))
- **ino-icon:** fix svg loading error ([0994d68](https://github.com/inovex/elements/commit/0994d68))

### Features

- **ino-card:** add alternatives in color brands ([a46102b](https://github.com/inovex/elements/commit/a46102b))
- **ino-input, ino-range, ino-datepicker:** add step attribute ([9e13a3b](https://github.com/inovex/elements/commit/9e13a3b))
- **ino-menu, ino-list, ino-list-item, ino-list-divider:** add component ([4514db7](https://github.com/inovex/elements/commit/4514db7))

## [0.2.0](https://github.com/inovex/elements/compare/v0.1.2...v0.2.0) (2018-08-28)

### Bug Fixes

- **ino-form-row:** use correct readme in story ([ba65f3e](https://github.com/inovex/elements/commit/ba65f3e))

### Features

- Add react wrapper elements and improve attribute typings ([70d5064](https://github.com/inovex/elements/commit/70d5064))
- **datepicker:** Add button and new input attributes ([643c052](https://github.com/inovex/elements/commit/643c052))
- **ino-datepicker:** add 'range' option to DatepickerType in order to extend 'inoType' ([b2e64e0](https://github.com/inovex/elements/commit/b2e64e0))
- **ino-icon:** renew component without inline SVGs ([6b9f049](https://github.com/inovex/elements/commit/6b9f049))
- **ino-icon-button:** add component ([66719b0](https://github.com/inovex/elements/commit/66719b0))
- **ino-input:** add helper text ([41c8ecd](https://github.com/inovex/elements/commit/41c8ecd))
- **ino-input:** add leading and trailing icon ([bf75880](https://github.com/inovex/elements/commit/bf75880))
- **tooltip:** open on tab and close on escape ([c31826c](https://github.com/inovex/elements/commit/c31826c))

## [0.1.2](https://github.com/inovex/elements/compare/v0.1.1...v0.1.2) (2018-08-10)

### Bug Fixes

- Allow arbitrary attributes on inovex elements components ([73d2cdb](https://github.com/inovex/elements/commit/73d2cdb))
- **message-box:** fix style-leaks because of similar classnames ([9b10a88](https://github.com/inovex/elements/commit/9b10a88))

### Features

- **ino-datepicker:** Disable browser autocomplete ([22b7dfe](https://github.com/inovex/elements/commit/22b7dfe))
- **ino-select:** Upgrade dependencies and ensure outlined version ([0b3db30](https://github.com/inovex/elements/commit/0b3db30))
- **ino-textarea:** Add new element ([6f619dc](https://github.com/inovex/elements/commit/6f619dc))

## [0.1.1](https://github.com/inovex/elements/compare/v0.1.0...v0.1.1) (2018-07-05)

## [0.1.0](https://github.com/inovex/elements/compare/v0.0.2...v0.1.0) (2018-07-05)

### Bug Fixes

- **ino-popover, ino-tooltip:** Set z-index ([3e6f283](https://github.com/inovex/elements/commit/3e6f283))

### Features

- **landing page:** add landing page ([a3a5a57](https://github.com/inovex/elements/commit/a3a5a57))

## [0.0.2](https://github.com/inovex/elements/compare/10c2882...v0.0.2) (2018-06-23)

### Bug Fixes

- **ino-datepicker:** Restore native required behaviour ([46d343b](https://github.com/inovex/elements/commit/46d343b))
- **tslint:** Allow type declaration and initialization ([cc43ebb](https://github.com/inovex/elements/commit/cc43ebb))

### Features

* **ino-button:** Add properties ino-color-scheme and ino-fill ([2327d38](https://github.com/inovex/elements/commit/2327d38))
* **ino-button:** Implement first draft of ino-button ([23c81e3](https://github.com/inovex/elements/commit/23c81e3))
* **ino-card:** Implement first version of ino-card ([b9eb4de](https://github.com/inovex/elements/commit/b9eb4de))
* **ino-checkbox:** Implement first simple checkbox element ([c8c0665](https://github.com/inovex/elements/commit/c8c0665))
* **ino-chip:** Add new element ([08970e1](https://github.com/inovex/elements/commit/08970e1))
* **ino-datepicker:** Add date and timepicker ([10036e8](https://github.com/inovex/elements/commit/10036e8))
* **ino-datepicker:** Add stories and enable usage in relative contexts ([60ca4d7](https://github.com/inovex/elements/commit/60ca4d7))
* **ino-form-row:** Add new element ([26ba6b6](https://github.com/inovex/elements/commit/26ba6b6))
* **ino-icon:** Add first icon element ([e648963](https://github.com/inovex/elements/commit/e648963))
* **ino-img:** add ino-img component ([cd1f7d1](https://github.com/inovex/elements/commit/cd1f7d1))
* **ino-input:** Add first version of an input element including tests ([10c2882](https://github.com/inovex/elements/commit/10c2882))
* **ino-input:** Add stories ([e950f16](https://github.com/inovex/elements/commit/e950f16))
* **ino-message-box:** Add new element ([b512282](https://github.com/inovex/elements/commit/b512282))
* **ino-popover:** add new element ([1cec4e4](https://github.com/inovex/elements/commit/1cec4e4))
* **ino-radio:** Add Storybook stories ([54e8c8d](https://github.com/inovex/elements/commit/54e8c8d))
* **ino-radio:** Implement first version of ino-radio ([8d57bfd](https://github.com/inovex/elements/commit/8d57bfd))
* **ino-range:** Add new element ([11df04e](https://github.com/inovex/elements/commit/11df04e))
* **ino-select:** Implement first draft of select element ([c76547a](https://github.com/inovex/elements/commit/c76547a))
* **ino-spinner:** Add new element ([5d7e7e1](https://github.com/inovex/elements/commit/5d7e7e1))
* **ino-tooltip:** Implement first purpose of tooltip element ([18f176b](https://github.com/inovex/elements/commit/18f176b))
* **ino-tooltip, ino-popover:** Add stories ([43d9081](https://github.com/inovex/elements/commit/43d9081))
* **storybook:** Add global stylesheets and integrate material design font ([982336b](https://github.com/inovex/elements/commit/982336b))
* **storybook:** Add playground directly in the readme ([7a61007](https://github.com/inovex/elements/commit/7a61007))
* **storybook:** Initial commit ([fbfc58c](https://github.com/inovex/elements/commit/fbfc58c))
* **storybook:** Several improvements and refactoring ([6bf3919](https://github.com/inovex/elements/commit/6bf3919))
