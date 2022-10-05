# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [8.0.0](https://github.com/BenPag/elements/compare/v7.1.0...v8.0.0) (2022-10-05)


### Bug Fixes

* changelog entries for new projects ([7a682d6](https://github.com/BenPag/elements/commit/7a682d68d8170d11a733bda6283d68c1f0b3a1bf))

### [7.1.2](https://github.com/inovex/elements/compare/v7.1.1...v7.1.2) (2022-09-20)


### Bug Fixes

* changelog entries for new projects ([7a682d6](https://github.com/inovex/elements/commit/7a682d68d8170d11a733bda6283d68c1f0b3a1bf))

## 7.1.1 (2022-08-19)

**Note:** Version bump only for package elements-vue-example





# Changelog
### [7.1.1](https://github.com/inovex/elements/compare/v7.1.0...v7.1.1) (2022-08-19)


### Features

* **elements-angular:** support disable state handling in ControlValueAccessors ([#664](https://github.com/inovex/elements/issues/664)) ([18a02b3](https://github.com/inovex/elements/commit/18a02b3d40c4a9654e911745ec89f738e7297a37))


### Bug Fixes

* **elements|ino-datepicker:** run initial validation before load ([#700](https://github.com/inovex/elements/issues/700)) ([38d91ae](https://github.com/inovex/elements/commit/38d91aee9deaa6006fcbef27dd82e710377893d9))


### Miscellaneous

* **deps:** bump terser from 4.7.0 to 4.8.1 ([#666](https://github.com/inovex/elements/issues/666)) ([7aabfd3](https://github.com/inovex/elements/commit/7aabfd329ffcfa4bc463fe906186ae0e7876f898))
* add release pipeline ([#561](https://github.com/inovex/elements/issues/561)) ([f3386dd](https://github.com/inovex/elements/commit/f3386dd8ac309862da522bce5e5ca762103f38a5))


### Documentation

* **storybook:** add react starter guide ([#663](https://github.com/inovex/elements/issues/663)) ([a1883ce](https://github.com/inovex/elements/commit/a1883ce87f7ce681a75e75e4bf24e2ceb10e5bf5))

## 7.1.1 (2022-08-19)

**Note:** Version bump only for package elements-vue-example





# Changelog
## [7.1.0](https://github.com/inovex/elements/compare/v7.0.0...v7.1.0) (2022-07-18)


### Features

* **elements|ino-carousel:** add `valueChange` event to inform about slide changes on arrow click ([#650](https://github.com/inovex/elements/issues/650)) ([6f98a31](https://github.com/inovex/elements/commit/6f98a317294c9789d5fed72e9210d5f2adf5dacf))
* **elements|ino-markdown-editor:** support task lists ([#660](https://github.com/inovex/elements/issues/660)) ([47a71c2](https://github.com/inovex/elements/commit/47a71c25faea9042987706badb5f00e36d021d53))
* **elements|ino-radio-group:** add option to align radios vertically & horizontally ([#652](https://github.com/inovex/elements/issues/652)) ([2106dfd](https://github.com/inovex/elements/commit/2106dfdd85abd0a93b3325eb82216bddd1e4ea2b))
* add angular example project ([#601](https://github.com/inovex/elements/issues/601)) ([b860b56](https://github.com/inovex/elements/commit/b860b56b4e7c37ccd55481e14889242d694cb8b5))
* add react example project ([#519](https://github.com/inovex/elements/issues/519)) ([e420ac9](https://github.com/inovex/elements/commit/e420ac9796f982960f1d6ab19000f9701f918b67))
* **elements|ino-icon-button:** add support for custom icons via default slot ([#600](https://github.com/inovex/elements/issues/600)) ([e2dae7d](https://github.com/inovex/elements/commit/e2dae7dd8b03664d07c7535f573b33cd4075f933))
* **elements|ino-radio-group:** support keyboard navigation ([#644](https://github.com/inovex/elements/issues/644)) ([b0bf72f](https://github.com/inovex/elements/commit/b0bf72f860fed2bb64d3d7c6589737a01bb59f2b))
* **elements|ino-range:** support input of intervals ([#605](https://github.com/inovex/elements/issues/605)) ([2f7d8fd](https://github.com/inovex/elements/commit/2f7d8fdb42fab55402adc8913502046a4e043453))


### Miscellaneous

* **deps:** bump eventsource from 1.0.7 to 1.1.1 ([#623](https://github.com/inovex/elements/issues/623)) ([82cc7f6](https://github.com/inovex/elements/commit/82cc7f6d953bd68ecc8237c5f2aefa6053888315))
* **deps:** bump moment from 2.29.2 to 2.29.4 ([#658](https://github.com/inovex/elements/issues/658)) ([c414401](https://github.com/inovex/elements/commit/c4144019c597619b5383decee32f8c90459f889a))
* **storybook:** update storybook to 6.5 ([#648](https://github.com/inovex/elements/issues/648)) ([a9ed814](https://github.com/inovex/elements/commit/a9ed814aa1434614492c1b406fab91d38c51da74))

## [7.0.0](https://github.com/inovex/elements/compare/v6.2.0...v7.0.0) (2022-05-23)


### ⚠ BREAKING CHANGES

* **elements:** To be more consistent with our API across all components, we've decided to migrate from `label` properties to default slots. This also provides more flexibility as the text element is provided by the user. As the changes are significant, they will not break anything yet. We've added warning messages to help you migrate until the next major version will be released. The components affected are the following: `<ino-snackbar>`, `<ino-header>`, `<ino-tab>`, `<ino-tooltip>, `<ino-chip>`.
* **elements|ino-input:** Remove the `size` property of the `<ino-input>` as it has no effect. Use `width` and `height` to change the dimensions of the element.
* **elements-react:** We've updated the way we build the `elements-react` package. In order to be future-proof, we have to drop the support for React Versions < 17.
* **elements|ino-button:** We've updated the design of the `<ino-button>`. In order to have a consistent look and feel across all of our components, we've decided to get rid of the `colorScheme` property and most of our CSS-Variables. If you need to customize the button, you can do that just like any other HTML Element as we removed the Shadow-DOM of the component. Furthermore, we removed/reworked some old props on our way. The `fill` property has been renamed to `variant` and features the options `filled` (previously known as `solid), `outlined`, and `text` (replacement of `inverse`). The property `edgeMirrored` has been removed as its use case was very specific.
* **elements|ino-icon:** rename the icon `request` to `share`

### Features

* **elements:** add support for Vue3 ([#554](https://github.com/inovex/elements/issues/554)) ([dc05299](https://github.com/inovex/elements/commit/dc05299dce07fdfce73192969e863cb0c4a123cb))
* **elements|ino-popover:** add follow cursor option ([#577](https://github.com/inovex/elements/issues/577)) ([dc76d3c](https://github.com/inovex/elements/commit/dc76d3c942f00deed72af15e3a2619f65d420cae))


### Bug Fixes

* **elements|ino-autocomplete:** fix wrong menu positioning if helper text exists ([#586](https://github.com/inovex/elements/issues/586)) ([0f5ce14](https://github.com/inovex/elements/commit/0f5ce147b03af7035703d4e183d421e5bbc87f26))
* **elements|ino-currency-input:** allow `0` in `value` ([#584](https://github.com/inovex/elements/issues/584)) ([081d82c](https://github.com/inovex/elements/commit/081d82c71b3b4812b343d4cd9cb34aaa15057f0b))
* **elements|ino-icon-button:** improve button styling in disabled state ([#596](https://github.com/inovex/elements/issues/596)) ([594a49a](https://github.com/inovex/elements/commit/594a49aaedae5cbfdabea84bc8b3b113804bcb2e))
* **storybook:** stories not being sorted correctly ([#580](https://github.com/inovex/elements/issues/580)) ([f618f35](https://github.com/inovex/elements/commit/f618f359e76175f451cc95d4fb8fdbfabf7e7db0))


### Documentation

* update component development docs ([#567](https://github.com/inovex/elements/issues/567)) ([543dd01](https://github.com/inovex/elements/commit/543dd0103a7486fa8a763884cafdac7d6798c658))


### Miscellaneous

* update pull request template ([#582](https://github.com/inovex/elements/issues/582)) ([16b04cf](https://github.com/inovex/elements/commit/16b04cfb9f4e11912bfd7407072a468a7b392a24))
* **deps:** bump async from 2.6.3 to 2.6.4 ([#576](https://github.com/inovex/elements/issues/576)) ([550bd17](https://github.com/inovex/elements/commit/550bd17f5fc0c4d3ca9487bf2eb1730d9e44f2b4))
* **deps:** bump minimist from 1.2.5 to 1.2.6 ([#563](https://github.com/inovex/elements/issues/563)) ([5c4df85](https://github.com/inovex/elements/commit/5c4df858f75271c4ed04dd0b09abfd6b5977d940))
* **deps:** bump moment from 2.26.0 to 2.29.2 ([#568](https://github.com/inovex/elements/issues/568)) ([befee4f](https://github.com/inovex/elements/commit/befee4fec89d428a856db00e53ab719d9351c2c9))


* **elements|ino-button:** update styling ([#571](https://github.com/inovex/elements/issues/571)) ([0867d86](https://github.com/inovex/elements/commit/0867d86f095e3f13e91aef2362f25c97cdb8453a))


### Refactoring

* **elements:** use default slot for labels instead of properties ([#607](https://github.com/inovex/elements/issues/607)) ([a934fde](https://github.com/inovex/elements/commit/a934fde471ab8ff778d7ddbfa216f1313dc76183))
* **elements-react:** use stencils react-output-target ([#537](https://github.com/inovex/elements/issues/537)) ([b797052](https://github.com/inovex/elements/commit/b7970520d9da7d055ffa5ec608f68871de2eb471))
* **elements|ino-icon:** rename icon `request` to `share` ([#556](https://github.com/inovex/elements/issues/556)) ([da2940e](https://github.com/inovex/elements/commit/da2940ea547b69d5596314da00e880358b08b821))
* **elements|ino-input:** remove size property ([#557](https://github.com/inovex/elements/issues/557)) ([d69af55](https://github.com/inovex/elements/commit/d69af5529134ec3d0b697635cae224e30b01cbca))
