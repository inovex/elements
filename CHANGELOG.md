# Changelog
## [8.0.0](https://github.com/BenPag/elements/compare/v7.1.0...v8.0.0) (2022-10-05)


### ⚠ BREAKING CHANGES

* **elements|ino-switch:** As part of the design update, we've decided to remove the `color-scheme` property in all input elements. Read above for more information.
* **elements|ino-form-row:** Since our input component provides a label on its own, this component is obsolete. That's why we've decided to remove it.
* **elements|ino-range:** As part of the design update, we've decided to remove the `color-scheme` property in all input elements. Read above for more information.
* **elements|ino-sidebar:** Since the component is just a container with a simple slide animation and does not provide any other functionality or styling, we decided to remove it.

### Features

* **elements:** provide global stylesheet ([#733](https://github.com/BenPag/elements/issues/733)) ([73dfc9a](https://github.com/BenPag/elements/commit/73dfc9a442d779fa1b5303a147ae6c70d0e5ed27))
* **elements-angular:** support disable state handling in ControlValueAccessors ([#664](https://github.com/BenPag/elements/issues/664)) ([18a02b3](https://github.com/BenPag/elements/commit/18a02b3d40c4a9654e911745ec89f738e7297a37))


### Bug Fixes

* **elements|ino-select:** prevent the `valueChange` event from triggering initially and triggering twice ([#749](https://github.com/BenPag/elements/issues/749)) ([0495d50](https://github.com/BenPag/elements/commit/0495d50a59d9e99775baa5e73679240e25e6a7fc))
* changelog entries for new projects ([7a682d6](https://github.com/BenPag/elements/commit/7a682d68d8170d11a733bda6283d68c1f0b3a1bf))
* **elements|ino-datepicker:** run initial validation before load ([#700](https://github.com/BenPag/elements/issues/700)) ([38d91ae](https://github.com/BenPag/elements/commit/38d91aee9deaa6006fcbef27dd82e710377893d9))
* **landingpage:** fix meta title typo ([#739](https://github.com/BenPag/elements/issues/739)) ([8aa32fd](https://github.com/BenPag/elements/commit/8aa32fdf2a77dc066c09faead6f66462de21a225))
* **landingpage:** use correct base url ([15bbe62](https://github.com/BenPag/elements/commit/15bbe62f0e9f006027a9b4bf67a8768c3c51afe6))


### Documentation

* **storybook:** add dev documentation about custom properties ([#730](https://github.com/BenPag/elements/issues/730)) ([7b976bf](https://github.com/BenPag/elements/commit/7b976bfbb850170c9918ed2ec36c0e81a3144cb7))
* **storybook:** add react starter guide ([#663](https://github.com/BenPag/elements/issues/663)) ([a1883ce](https://github.com/BenPag/elements/commit/a1883ce87f7ce681a75e75e4bf24e2ceb10e5bf5))
* **storybook:** collapse component roots by default ([#734](https://github.com/BenPag/elements/issues/734)) ([90b4283](https://github.com/BenPag/elements/commit/90b4283aeba7c6ac26f870d19653b78ec27943cb))


### Styling

* **elements|ino-button:** make outlined background transparent ([#714](https://github.com/BenPag/elements/issues/714)) ([fc99a8b](https://github.com/BenPag/elements/commit/fc99a8bb094bb5e3464dc882d3fd98c53c901245))
* **elements|ino-checkbox:** update design ([#695](https://github.com/BenPag/elements/issues/695)) ([217d248](https://github.com/BenPag/elements/commit/217d248a32818e7667addd86c1e925785c3d32c1))
* **elements|ino-radio:** update design ([#699](https://github.com/BenPag/elements/issues/699)) ([3375065](https://github.com/BenPag/elements/commit/3375065de9c98acc63e61df4df726913cd2fba3d))
* **elements|ino-range:** apply new design ([#712](https://github.com/BenPag/elements/issues/712)) ([11ea415](https://github.com/BenPag/elements/commit/11ea4155f33fa895222afab3dd1275ff434f4ab9))
* **elements|ino-segment-button:** update design ([#705](https://github.com/BenPag/elements/issues/705)) ([f1c03bb](https://github.com/BenPag/elements/commit/f1c03bb051a8250fff25ec5d87c09125e47cd0cb))
* **elements|ino-switch:** update design ([#697](https://github.com/BenPag/elements/issues/697)) ([be20f31](https://github.com/BenPag/elements/commit/be20f316493ad913892ce06ad1f05fb4f038c316))


### Refactoring

* **elements|ino-form-row:** remove component ([#718](https://github.com/BenPag/elements/issues/718)) ([e609947](https://github.com/BenPag/elements/commit/e609947e67e6c2dd634c618f7afae0e0cfcc4355))
* **elements|ino-sidebar:** remove component ([#669](https://github.com/BenPag/elements/issues/669)) ([349b84d](https://github.com/BenPag/elements/commit/349b84d3ef329174f0bdcf4acbe357b63982eb22))
* **elements|ino-switch:** remove color-scheme prop ([#717](https://github.com/BenPag/elements/issues/717)) ([f051ef6](https://github.com/BenPag/elements/commit/f051ef6f88b19578f3fa7eadcea2e8e04e9aca4a))

### [7.1.2](https://github.com/inovex/elements/compare/v7.1.1...v7.1.2) (2022-09-20)


### Bug Fixes

* changelog entries for new projects ([7a682d6](https://github.com/inovex/elements/commit/7a682d68d8170d11a733bda6283d68c1f0b3a1bf))
* **landingpage:** fix meta title typo ([#739](https://github.com/inovex/elements/issues/739)) ([8aa32fd](https://github.com/inovex/elements/commit/8aa32fdf2a77dc066c09faead6f66462de21a225))
* **landingpage:** use correct base url ([15bbe62](https://github.com/inovex/elements/commit/15bbe62f0e9f006027a9b4bf67a8768c3c51afe6))


### Miscellaneous

* **deps:** bump jszip from 3.4.0 to 3.10.1 ([#726](https://github.com/inovex/elements/issues/726)) ([8f8e276](https://github.com/inovex/elements/commit/8f8e27675e8b0d9e94a64c7ea86c3d51b94c0f24))


### Documentation

* **storybook:** add dev documentation about custom properties ([#730](https://github.com/inovex/elements/issues/730)) ([7b976bf](https://github.com/inovex/elements/commit/7b976bfbb850170c9918ed2ec36c0e81a3144cb7))
* **storybook:** collapse component roots by default ([#734](https://github.com/inovex/elements/issues/734)) ([90b4283](https://github.com/inovex/elements/commit/90b4283aeba7c6ac26f870d19653b78ec27943cb))

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
* **elements|ino-button:** We've updated the design of the `<ino-button>`. In order to have a consistent look and feel across all of our components, we've decided to get rid of the `colorScheme` property and most of our CSS-Variables. If you need to customize the button, you can do that just like any other HTML Element as we removed the Shadow-DOM of the component. Furthermore, we removed/reworked some old props on our way. The `fill` property has been renamed to `variant` and features the options `filled` (previously known as `solid`), `outlined`, and `text` (replacement of `inverse`). The property `edgeMirrored` has been removed as its use case was very specific.
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

## [6.2.0](https://github.com/inovex/elements/compare/v6.1.0...v6.2.0) (2022-04-22)


### Features

* **elements|ino-popover:** add option to attach popover to body ([#575](https://github.com/inovex/elements/issues/575)) ([6b18745](https://github.com/inovex/elements/commit/6b18745b866ab498993ce5057488790703c6c8c0))


### Bug Fixes

* **elements|ino-chip:** fix `chipRemoved` event not firing in some cases ([#565](https://github.com/inovex/elements/issues/565)) ([aa15ea7](https://github.com/inovex/elements/commit/aa15ea740d6054c500aab9a079cb7903687655e3))
* **elements|ino-datepicker:** fix datepicker hiding after input ([#555](https://github.com/inovex/elements/issues/555)) ([1b30c16](https://github.com/inovex/elements/commit/1b30c1604d5b1fd3edc069be7105728d8cf4c5f9))
* **elements|ino-list-item:** fix vertical alignment of trailing element ([#564](https://github.com/inovex/elements/issues/564)) ([71d9b93](https://github.com/inovex/elements/commit/71d9b9310fff0de5e728da30603b235511674fac))


### Documentation

* **elements:** revise docs of ino-header and ino-datepicker ([#560](https://github.com/inovex/elements/issues/560)) ([b286ad4](https://github.com/inovex/elements/commit/b286ad4fad4dc5291d220618930fa7ecea9d9db1))


### Miscellaneous

* add svgo to minimize icons and autoadd currentColor ([#562](https://github.com/inovex/elements/issues/562)) ([7e078f5](https://github.com/inovex/elements/commit/7e078f5280b46b474715c6394b18876750906521))

## [6.1.0](https://github.com/inovex/elements/compare/v6.0.0...v6.1.0) (2022-03-10)


### Features

* **elements|ino-select:** add helper text props ([#553](https://github.com/inovex/elements/issues/553)) ([b117525](https://github.com/inovex/elements/commit/b117525dfa6f5158911718fe766e5e2b098fab96))


### Miscellaneous

* **elements:** add stencil linter ([#547](https://github.com/inovex/elements/issues/547)) ([1c28f62](https://github.com/inovex/elements/commit/1c28f629efb7544e0cdf998bc6dc58c3a7d42529))

## [6.0.0](https://github.com/inovex/elements/compare/v5.1.0...v6.0.0) (2022-03-02)


### ⚠ BREAKING CHANGES

* **elements|ino-table:** Due to performance reasons we have removed the components `<ino-table-row>` and `<ino-table-cell>`. The `<ino-table>` has been reworked to work with the native table elements (`<tr>` and `<td>`). Additionally, a new component `<ino-table-header-cell>` was provided to be used instead of the `<th>` element to implement functionalities like filtering and sorting. For extensive examples, check out the respective stories.
* **elements|ino-progress-bar**: Removed `reversed` property as it is no longer supported by our underlying library
* **elements|ino-chip-set**: Has been removed because it was only a wrapper, whose logic does not demand a component of its own.
* **elements|ino-chip**: This component has undergone an extensive rework. We removed the already deprecated `icon` property (use slots instead). The event `removeChip` has been renamed to `chipRemoved` to be consistent with our naming scheme. The event now emits `value` as its detail instead of the element itself (element can still be accessed by `event.target`).
* **elements|ino-switch**: All CSS-Vars have been removed in order to keep a more consistent look across the library and also to reduce the maintenance cost.
* **elements|ino-dialog:** In order to provide better flexibility, we removed all named slots. Now there is only the default slot that can be used to provide your own header and footer beside the content. Furthermore, the `openChange` event has been renamed to `close` which emits whenever the user closes the dialog. Added an option to make non-critical dialogs dismissible by pressing `esc` or clicking outside the dialog.
* **elements|ino-currency-input:** Move currency input functionality of `<ino-input>` to a separate component `<ino-currency-input>` to reduce the complexity of the input component. In the course of this, we removed the properties `decimalPlaces` and `thousandsSeparator` from the `<ino-input>`. The new component supports these functionalities by providing the respective locale.

### Features

* **elements:** add global configuration ([#460](https://github.com/inovex/elements/issues/460)) ([ffac7fe](https://github.com/inovex/elements/commit/ffac7fe5b8df8c67cda83cff60ffc441bddf06c7))
* **elements-angular:** remove obsolet event fix and upgrade stencil target generator ([#486](https://github.com/inovex/elements/issues/486)) ([a1bc55c](https://github.com/inovex/elements/commit/a1bc55c301875743fda5f8d9c58ae14c7e8565aa))
* **elements-react:** upgrade to typescript 4.1 ([#500](https://github.com/inovex/elements/issues/500)) ([e0448bc](https://github.com/inovex/elements/commit/e0448bc9c006e3b0c74c2968ef250c3c348be653))
* **elements|ino-currency-input:** add component ([#481](https://github.com/inovex/elements/issues/481)) ([bd1ab55](https://github.com/inovex/elements/commit/bd1ab5551e8776a0c4d4f037425f9c5bb2aa5cbe))
* **elements|ino-datepicker:** add new property `attachToBody` ([#510](https://github.com/inovex/elements/issues/510)) ([e970e92](https://github.com/inovex/elements/commit/e970e9222e09055f9d842ede592a04d84c3ace01))
* **elements|ino-dialog:** rework the dialog component ([#483](https://github.com/inovex/elements/issues/483)) ([c69a23e](https://github.com/inovex/elements/commit/c69a23eb4f0ca70bf89cbf696da947c2d65fae7f))
* **elements|ino-markdown-editor:** add new component ([#471](https://github.com/inovex/elements/issues/471)) ([8803083](https://github.com/inovex/elements/commit/88030835d52ed638d0a467fdfa90d2bd57ec631b))
* **elements|ino-table:** rework the component along with all the related elements ([#459](https://github.com/inovex/elements/issues/459)) ([a3141e3](https://github.com/inovex/elements/commit/a3141e348b1088832c8a8cdde07922ed4b4a3374))
* **landingpage:** migrate landingpage to repo and update deployment ([#473](https://github.com/inovex/elements/issues/473)) ([80f45e4](https://github.com/inovex/elements/commit/80f45e4449626359f12834593e26d06a4d3991f9))
* **storybook:** extract story description from doc string and improve docs ([#482](https://github.com/inovex/elements/issues/482)) ([f1a6517](https://github.com/inovex/elements/commit/f1a65171e03df183d7ef9e70c4a184bd063d8eda))


### Bug Fixes

* **elements|ino-autocomplete:** fix menu positioning while scrolling ([#503](https://github.com/inovex/elements/issues/503)) ([2cee3cf](https://github.com/inovex/elements/commit/2cee3cf6967df3ee41d8dfc183e727afa40b5cb1))
* **elements|ino-datepicker:** prevent undefined ref on mount ([#499](https://github.com/inovex/elements/issues/499)) ([4a51d6e](https://github.com/inovex/elements/commit/4a51d6e6b76031ac3acc7cddabba6ef7e157b103))
* **elements|ino-datepicker:** reattach on DOM update ([#518](https://github.com/inovex/elements/issues/518)) ([91b8cb3](https://github.com/inovex/elements/commit/91b8cb3e349a2b7bfcc80086ab0fc6995cd1929d))
* **elements|ino-input:** prevent undefined reference on error set ([#498](https://github.com/inovex/elements/issues/498)) ([23c9ac5](https://github.com/inovex/elements/commit/23c9ac5171659394db46549dc6b4b474c2c56335))
* **elements|ino-input:** prevent value from being set internally ([#528](https://github.com/inovex/elements/issues/528)) ([4bc5dad](https://github.com/inovex/elements/commit/4bc5dad45a8cfc2699d819001f7b4dfe52713be5))
* **elements|ino-markdown-editor:** fix focus state in preview mode ([#511](https://github.com/inovex/elements/issues/511)) ([cdb61fa](https://github.com/inovex/elements/commit/cdb61fa476b4bbc3a9d64657a478fb3101602d8d))
* **elements|ino-markdown-editor:** handle change of `initialValue` ([#529](https://github.com/inovex/elements/issues/529)) ([eb23150](https://github.com/inovex/elements/commit/eb2315075eccb1fe56240d564f4f6ec8d9bd71f1))
* **elements|ino-select:** update on ino-option change ([#520](https://github.com/inovex/elements/issues/520)) ([43c56b6](https://github.com/inovex/elements/commit/43c56b6c6f8f3d250d6aa3f225c4ec33a392650b))
* **elements|ino-switch:** do not update switches on same page ([#525](https://github.com/inovex/elements/issues/525)) ([3092783](https://github.com/inovex/elements/commit/309278396ec148a10681ea69a1bc1c2655c99247))
* **storybook|ino-nav-drawer:** provide image as local source ([#501](https://github.com/inovex/elements/issues/501)) ([c6017e7](https://github.com/inovex/elements/commit/c6017e70511ad63e8b1184b548ed88f9833c8a18))


### Documentation

* **elements:** update javascript integration to cdn usage ([6ceb1d6](https://github.com/inovex/elements/commit/6ceb1d610a55d577f733736349232f3446510a01))
* **elements-angular:** fix assets path ([#502](https://github.com/inovex/elements/issues/502)) ([9a9dcd8](https://github.com/inovex/elements/commit/9a9dcd8bf795e4246c7dfc86990d8d715d173a61))


### Miscellaneous

* fix canary release pipeline ([#508](https://github.com/inovex/elements/issues/508)) ([2073bb7](https://github.com/inovex/elements/commit/2073bb769f467bd00e4cc81ce7cf33910f73e9f2))
* **deps:** bump engine.io from 4.1.1 to 4.1.2 ([#506](https://github.com/inovex/elements/issues/506)) ([7e0363b](https://github.com/inovex/elements/commit/7e0363b2c81fd03fae4e205f4f829c1a962285a0))
* **deps:** bump handlebars from 4.7.6 to 4.7.7 ([#516](https://github.com/inovex/elements/issues/516)) ([5421e52](https://github.com/inovex/elements/commit/5421e52d23de002055a7b58709cd3a168672c841))
* **deps:** bump karma from 6.3.4 to 6.3.14 ([#515](https://github.com/inovex/elements/issues/515)) ([34aeabd](https://github.com/inovex/elements/commit/34aeabdd0afe77bd2c263df237a7e7af22c7fe74))
* **deps:** bump nanoid from 3.1.23 to 3.2.0 ([#495](https://github.com/inovex/elements/issues/495)) ([46f8020](https://github.com/inovex/elements/commit/46f8020738dab50cec25aea5a4f91daae9f79202))
* **deps:** bump shelljs from 0.8.4 to 0.8.5 ([#504](https://github.com/inovex/elements/issues/504)) ([264f611](https://github.com/inovex/elements/commit/264f61184742d25d001b2ccd8b99d6665493e545))
* **deps:** bump storybook from 6.3.2 to 6.4.9 ([#475](https://github.com/inovex/elements/issues/475)) ([f1d1f3f](https://github.com/inovex/elements/commit/f1d1f3f8203eb85d32f8a190dd547ceffa537ef9))
* **deps:** bump trim-off-newlines from 1.0.1 to 1.0.3 ([#496](https://github.com/inovex/elements/issues/496)) ([eb591c3](https://github.com/inovex/elements/commit/eb591c3a5f9367b91849a3bc27c8540ed2206165))
* **deps:** bump url-parse from 1.5.7 to 1.5.10 ([#540](https://github.com/inovex/elements/issues/540)) ([76dac86](https://github.com/inovex/elements/commit/76dac86e21feeb21c0e711c220f00167627f53e5))
* **elements:** update mdc packages to v13 ([#349](https://github.com/inovex/elements/issues/349)) ([77452bf](https://github.com/inovex/elements/commit/77452bf4f97862c7ee0a576a071c0649d67fc30b))
* create placeholder for workflow ([4aaa373](https://github.com/inovex/elements/commit/4aaa373d007092ea391da398f72c071c93e5effd))
* remove fonts hosted by google ([#539](https://github.com/inovex/elements/issues/539)) ([cec388a](https://github.com/inovex/elements/commit/cec388a40b85d950ae7a73c8050aad661c424440))
* **elements:** enable source-maps in dev mode ([#538](https://github.com/inovex/elements/issues/538)) ([7e7816b](https://github.com/inovex/elements/commit/7e7816b5a856952f7f7d168bac595ac9ff0b01c2))
* use setup-node v2 für canary release ([#509](https://github.com/inovex/elements/issues/509)) ([239a39e](https://github.com/inovex/elements/commit/239a39e2d7f629c0f977d26ba1c2aa8cc10cc9d9))
* set engine to node@>=14.17 ([#493](https://github.com/inovex/elements/issues/493)) ([a2b06ea](https://github.com/inovex/elements/commit/a2b06eaefb10f81207446e89c9adf7de6a83f624))
* **deps:** bump ajv from 6.12.2 to 6.12.6 ([#517](https://github.com/inovex/elements/issues/517)) ([cc3fefd](https://github.com/inovex/elements/commit/cc3fefd70df4899404d2fc74a040b118960f3036))
* **deps:** bump engine.io from 4.1.1 to 4.1.2 ([#489](https://github.com/inovex/elements/issues/489)) ([a74610e](https://github.com/inovex/elements/commit/a74610e4497b3e1e3fbea2183a9eeb661ea8a28c))
* **deps:** bump follow-redirects from 1.11.0 to 1.14.8 ([#521](https://github.com/inovex/elements/issues/521)) ([fa5cf8c](https://github.com/inovex/elements/commit/fa5cf8c8c0e288df5d0bbee6979981b29a5b6712))
* **deps:** bump lodash from 4.17.15 to 4.17.21 ([#484](https://github.com/inovex/elements/issues/484)) ([db242ad](https://github.com/inovex/elements/commit/db242ad1840b991af499e06c83b1783f44e2e57e))
* **deps:** bump log4js from 6.3.0 to 6.4.0 ([#494](https://github.com/inovex/elements/issues/494)) ([a088a30](https://github.com/inovex/elements/commit/a088a30feb9b35196cc5b4eaf9f0f87118f2ae7a))
* **deps:** bump node-fetch from 2.6.0 to 2.6.7 ([#497](https://github.com/inovex/elements/issues/497)) ([43a79df](https://github.com/inovex/elements/commit/43a79dfa96a3c2b1385e52d2cc31884f0a27c0ce))
* **deps:** bump tmpl from 1.0.4 to 1.0.5 ([#468](https://github.com/inovex/elements/issues/468)) ([24e0b4c](https://github.com/inovex/elements/commit/24e0b4c629061a7d893378efa81699a4dcabad0a))
* **deps:** bump url-parse from 1.4.7 to 1.5.7 ([#527](https://github.com/inovex/elements/issues/527)) ([9db7cab](https://github.com/inovex/elements/commit/9db7cab1f0f949eb6df623b56fcbaa59607fb9bf))
* **deps:** upgrade deps to support M1 chips ([#523](https://github.com/inovex/elements/issues/523)) ([e5429f1](https://github.com/inovex/elements/commit/e5429f1c63214f522c986e2bc9a8c8f7a1efdaa4))
* **deps:** bump ws from 5.2.2 to 5.2.3 ([#469](https://github.com/inovex/elements/issues/469)) ([95b0c44](https://github.com/inovex/elements/commit/95b0c44401cf624074d5d8c1a8b081f18ced12e5))

## [5.1.0](https://github.com/inovex/elements/compare/v5.0.0...v5.1.0) (2021-11-30)


### Features

* **elements:** add focus and blur methods to input elements ([#306](https://github.com/inovex/elements/issues/306)) ([c2de9a0](https://github.com/inovex/elements/commit/c2de9a0c50eae893edee7ea4fd9f6cd829cdf869))
* **elements|ino-autocomplete:** provide keyboard support to open menu ([#449](https://github.com/inovex/elements/issues/449)) ([ec0139f](https://github.com/inovex/elements/commit/ec0139f10165d6d1a5b6b8a62dc8884b81fcbf2d))
* **elements|ino-icon:** add icon `request` ([#447](https://github.com/inovex/elements/issues/447)) ([8419cb3](https://github.com/inovex/elements/commit/8419cb3f07f764a29baa4ff3f06267f5e220543d))


### Bug Fixes

* **elements|ino-autocomplete:** fix option selection in filtered list ([#444](https://github.com/inovex/elements/issues/444)) ([02ab09e](https://github.com/inovex/elements/commit/02ab09e83e51545fea14114c1ea62cccb4c319e4))
* **elements|ino-autocomplete:** set value on initialization ([#461](https://github.com/inovex/elements/issues/461)) ([0bfce6d](https://github.com/inovex/elements/commit/0bfce6d4fdfcb569cd1af1181f4f45662889c0bb))


### Miscellaneous

* add linux support for `publish:yalc` ([#448](https://github.com/inovex/elements/issues/448)) ([0a12f8c](https://github.com/inovex/elements/commit/0a12f8c9979e7dc0f85e0656ef19d27508e5e57c))
* update readmes ([#445](https://github.com/inovex/elements/issues/445)) ([2784a2c](https://github.com/inovex/elements/commit/2784a2c51a94369dd2229bbe619e8d04b4422179))

## [5.0.0](https://github.com/inovex/elements/compare/v4.1.1...v5.0.0) (2021-10-18)


### ⚠ BREAKING CHANGES

* **elements|ino-autocomplete:** 
  - rename event `optionSelected` to `valueChange` for consistency sake
  - remove slot `list`, now only takes an `<ino-input>` in the `input` slot and `<ino-option>`s in the default slot
* **elements|ino-snackbar:** remove types `primary` & `warning` and add new types `info` (default) & `success`; remove alignment properties

The snackbar has received a new design, which features the three cases info, success, and error. Also, as part of the new design, we have decided that the snackbar will now be displayed in the top right corner by default. Since we want to get away from offering properties that only make changes to the CSS in the background, we have removed the alignment properties and instead introduced CSS variables that can be used to configure the absolute position of the snackbar. For more information, have a look at its storybook page.

### Features

* **elements|ino-datepicker:** provide error property ([#429](https://github.com/inovex/elements/issues/429)) ([43f37ef](https://github.com/inovex/elements/commit/43f37efd0c4dfe9748d7b12101732d8c47cd672d))
* **elements|ino-dialog:** enable extend styling support ([#425](https://github.com/inovex/elements/issues/425)) ([aceea36](https://github.com/inovex/elements/commit/aceea367802a34fe37272febf1d89dd5fb735486))
* **elements|ino-fab-set:** add ability to provide custom icons ([#437](https://github.com/inovex/elements/issues/437)) ([f37b4a2](https://github.com/inovex/elements/commit/f37b4a2e35ffbe7c952c55c530fd029b51ea321a))
* **elements|ino-icon:** add new icon `option_dotted` ([#430](https://github.com/inovex/elements/issues/430)) ([cb9ada3](https://github.com/inovex/elements/commit/cb9ada30b2ed1dab333c966f21f576cc6db113d1))
* **elements|ino-select:** add property `error` to display error state ([#424](https://github.com/inovex/elements/issues/424)) ([f3b97c6](https://github.com/inovex/elements/commit/f3b97c60807599a66a2763e5358c7f2bc48c073d))
* **elements|ino-snackbar:** add new property `verticalAlignment` ([#427](https://github.com/inovex/elements/issues/427)) ([1c34299](https://github.com/inovex/elements/commit/1c34299ed97405e3e47800d2ca6c037a6d7f6fd9))
* **elements|ino-snackbar:** rework snackbar ([#431](https://github.com/inovex/elements/issues/431)) ([76911a3](https://github.com/inovex/elements/commit/76911a34ce4d5c5588dcacdf612441b5c54e5693))


### Bug Fixes

* **elements|ino-list-item:** fix icon alignment ([#433](https://github.com/inovex/elements/issues/433)) ([3f95ded](https://github.com/inovex/elements/commit/3f95dede6fb778a9a23dde86ad08d97ae73bd188))


### Refactoring

* **elements|ino-autocomplete:** provide better angular support ([#435](https://github.com/inovex/elements/issues/435)) ([bb3853c](https://github.com/inovex/elements/commit/bb3853c092c3ac462d3ab8c604667feea3f0bbaf))

### [4.1.1](https://github.com/inovex/elements/compare/v4.1.0...v4.1.1) (2021-09-06)


### Bug Fixes

* **elements|ino-input-file:** prevent drag and drop when set to false ([#420](https://github.com/inovex/elements/issues/420)) ([06ca871](https://github.com/inovex/elements/commit/06ca87194ebc16511295fbac1784ff6d695ba6fb))
* **elements|ino-select:** hide input used for form validation ([#416](https://github.com/inovex/elements/issues/416)) ([0b02c3b](https://github.com/inovex/elements/commit/0b02c3b7e9653569952e708bce4a02e1a387d201))
* **storybook:** scope all story styles ([#422](https://github.com/inovex/elements/issues/422)) ([62ce093](https://github.com/inovex/elements/commit/62ce093788928af472685bc8493987e6a2db02e4))


### Miscellaneous

* replace local commit linting with new component script ([#412](https://github.com/inovex/elements/issues/412)) ([81aa33d](https://github.com/inovex/elements/commit/81aa33d37c4417f64e216fab397e02280a52c5a7))

## [4.1.0](https://github.com/inovex/elements/compare/v4.0.0...v4.1.0) (2021-08-11)


### Features

* **elements:** add new component `<ino-autocomplete>` ([#402](https://github.com/inovex/elements/issues/402)) ([e93b20f](https://github.com/inovex/elements/commit/e93b20f7ac05500a11dbbeefbbcd382da6146ef3))
* **elements|ino-select:** add slot for leading icon ([#317](https://github.com/inovex/elements/issues/317)) ([2a656e6](https://github.com/inovex/elements/commit/2a656e646bd5ee8c52d217d07d9e0c59eba199a4))
* **elements|ino-tab-bar:** add autoFocus property ([#408](https://github.com/inovex/elements/issues/408)) ([03dc76a](https://github.com/inovex/elements/commit/03dc76ac8d45f15ad33441802c93d3854237566b))


### Bug Fixes

* **elements-react:** add missing components ([#407](https://github.com/inovex/elements/issues/407)) ([d886c2a](https://github.com/inovex/elements/commit/d886c2a5c5aced430fdc533c052a83cd5f202369))
* **elements|ino-list-item:** fix checkbox positioning ([#335](https://github.com/inovex/elements/issues/335)) ([4c642d4](https://github.com/inovex/elements/commit/4c642d44c88d3b00c735ab4b777bd5925d8e722a))
* **elements|ino-nav-drawer:** emit `openChange` event on `esc` press ([#336](https://github.com/inovex/elements/issues/336)) ([5f558cf](https://github.com/inovex/elements/commit/5f558cfbfdcf22925fdf857ca55badec85af457f))
* **elements|ino-select:** fix form validation ([#355](https://github.com/inovex/elements/issues/355)) ([8eba403](https://github.com/inovex/elements/commit/8eba403f3aff575c1e73110a5cfba18159226d98))
* **elements|ino-tab-bar:** prevent autofocus on creation ([#406](https://github.com/inovex/elements/issues/406)) ([5167724](https://github.com/inovex/elements/commit/5167724116b44e8d384852b56a42177878dab59c))
* **storybook:** restore missing fav icon ([#411](https://github.com/inovex/elements/issues/411)) ([ef86527](https://github.com/inovex/elements/commit/ef865270003ccbf2c66f8eb9eafb340f824eadad))

## [4.0.0](https://github.com/inovex/elements/compare/v3.0.0...v4.0.0) (2021-07-05)


### ⚠ BREAKING CHANGES

* **elements-angular:** Angular 12 only works with Webpack 5, so we had to adapt our previous way of importing icons. To keep using our `ino-icon` it is necessary that you add the elements via Angular CLI: `ng add @inovex.de/elements-angular`. This also applies if the Elements are already installed. For more detailed instructions, check out our Angular integration guide.
* **storybook:** We decided to remove the `ino` prefixes of all component properties. Originally, they were a convenience to distinguish between native and custom properties. Nowadays the prefixes just make for unnecessarily longer code.

So to upgrade to the latest version it is necessary to remove these prefixes. As an example: `ino-loading` or `inoLoading` becomes `loading`.
To assist with this, here is a regex that can be used to search and replace these properties: `(?:\s)(ino)`.

### Features

* **elements:** allow lists with both single and double lines ([#338](https://github.com/inovex/elements/issues/338)) ([07609e4](https://github.com/inovex/elements/commit/07609e46e1c15d919eee57e130975b36401e2c5b))
* **elements|ino-datepicker:** validate if first < second date ([#396](https://github.com/inovex/elements/issues/396)) ([37673b2](https://github.com/inovex/elements/commit/37673b2b02670fdc8c84b92c5b6f505c9c5450dd))
* **elements|ino-img:** add fallback img ([#339](https://github.com/inovex/elements/issues/339)) ([6caec70](https://github.com/inovex/elements/commit/6caec708d4f61a64cd34dbebc119c9f70c9cd135))
* **elements|ino-snackbar:** add property to make snackbar stay visible on hover ([#365](https://github.com/inovex/elements/issues/365)) ([bf6b702](https://github.com/inovex/elements/commit/bf6b7023cd9fe9caf4761f6eb57b4f2cc63bc577))
* **storybook:** upgrade storybook to v6 ([#316](https://github.com/inovex/elements/issues/316)) ([dcd7260](https://github.com/inovex/elements/commit/dcd7260fd105339afbc8fd64c1557e9cc5fd723e))


### Bug Fixes

* **elements|ino-datepicker:** max validation leads to recursion ([#395](https://github.com/inovex/elements/issues/395)) ([41d8b63](https://github.com/inovex/elements/commit/41d8b63171e0af76fb7f6dd1000b36f6ef2dcba9))
* **elements|ino-datepicker:** only validate if value is set ([#357](https://github.com/inovex/elements/issues/357)) ([a518aa1](https://github.com/inovex/elements/commit/a518aa16671804fcd7aad70b7e85dc9e181b8152))
* **elements|ino-select:** fix initialization error ([#385](https://github.com/inovex/elements/issues/385)) ([0b4b2fb](https://github.com/inovex/elements/commit/0b4b2fbc355fe7b0b6a08a2ebaf71fedb5d94111))
* **elements|ino-sidebar:** fix initialization error ([#383](https://github.com/inovex/elements/issues/383)) ([70c25b6](https://github.com/inovex/elements/commit/70c25b6edcb937fc24482212aac081319264e69a))
* fix canary-releases ([#359](https://github.com/inovex/elements/issues/359)) ([7bdc0b8](https://github.com/inovex/elements/commit/7bdc0b8dadbf5e47471e985ee3d4fd35b454f16c))
* fix git hook error message ([#372](https://github.com/inovex/elements/issues/372)) ([4716c32](https://github.com/inovex/elements/commit/4716c32974eee4ab38a12e6743de005b9666a203))
* **storybook|ino-snackbar:** avoid multiple snackbar instances ([#367](https://github.com/inovex/elements/issues/367)) ([ad386c9](https://github.com/inovex/elements/commit/ad386c9476e9aa8e6592798cd0aebab16d62886c))
* run canary release action only in master branch ([#361](https://github.com/inovex/elements/issues/361)) ([e59d273](https://github.com/inovex/elements/commit/e59d273a517502ae2f575ed92024af7340d0066c))
* **storybook|ino-snackbar:** fix incorrect knob options ([#312](https://github.com/inovex/elements/issues/312)) ([741cd65](https://github.com/inovex/elements/commit/741cd659ed5004c0309b6ba3f6ffbc4644b7f44c))


### Miscellaneous

* **elements:** expose custom types ([#397](https://github.com/inovex/elements/issues/397)) ([bf6381e](https://github.com/inovex/elements/commit/bf6381e521cd1545a3622359cb317acf11ff323d))
* **elements-angular:** update angular to work with version 12 ([#386](https://github.com/inovex/elements/issues/386)) ([c9d123e](https://github.com/inovex/elements/commit/c9d123ecc19f4ffe1de906645bef6de6310b7c19))
* add checklist to pull request template ([#382](https://github.com/inovex/elements/issues/382)) ([d2b6cc6](https://github.com/inovex/elements/commit/d2b6cc66228ad2c32a68d9d41f101e4fda928a93))
* migrate from tslint to eslint ([#283](https://github.com/inovex/elements/issues/283)) ([19a4bf6](https://github.com/inovex/elements/commit/19a4bf65fe02649ef4b701f61b329c48b90f3b06))
* publish v3.0.1 ([ca7a24d](https://github.com/inovex/elements/commit/ca7a24d68944c06c78d88f58ec5151966c0210a6))

### [3.0.1](https://github.com/inovex/elements/compare/v3.0.0...v3.0.1) (2021-04-22)


### Bug Fixes

* **elements|ino-datepicker:** only validate if value is set ([#357](https://github.com/inovex/elements/issues/357)) ([a518aa1](https://github.com/inovex/elements/commit/a518aa16671804fcd7aad70b7e85dc9e181b8152))
* run canary release action only in master branch ([#361](https://github.com/inovex/elements/issues/361)) ([e59d273](https://github.com/inovex/elements/commit/e59d273a517502ae2f575ed92024af7340d0066c))
* **storybook|ino-snackbar:** fix incorrect knob options ([#312](https://github.com/inovex/elements/issues/312)) ([741cd65](https://github.com/inovex/elements/commit/741cd659ed5004c0309b6ba3f6ffbc4644b7f44c))
* fix canary-releases ([#359](https://github.com/inovex/elements/issues/359)) ([7bdc0b8](https://github.com/inovex/elements/commit/7bdc0b8dadbf5e47471e985ee3d4fd35b454f16c))

## [3.0.0](https://github.com/inovex/elements/compare/v2.3.0...v3.0.0) (2021-04-13)


### ⚠ BREAKING CHANGES

* **elements|ino-menu:** We have reworked the `ino-menu` so that it is now a composition of the `ino-popover` and `ino-list`. It now acts as a smart component that manages its own state. As a result, fewer properties need to be specified. If more complex functionality is required, one can easily build this using the `ino-popover` and the `ino-list`.

To be specific, the `ino-open`, as well as the `ino-for` property has been removed. The parent node of the `ino-menu` now automatically acts as an anchor element for the menu. Since the state is now managed by the component, the `ino-open` property and the `menuClose` event are obsolete. The menu now opens on anchor click and closes on outside click.

Before:
```jsx
<button id="my-anchor" onClick={() => this.setState({ isMenuOpen: true })}>Open Menu</button>
<InoMenu ino-open={this.state.isMenuOpen} ino-for="my-anchor" onMenuClose={() => this.setState({ isMenuOpen: false })}>
  <InoListItem>...</InoListItem>
</InoMenu>
```
After:
```jsx
<button>
  Open Menu
  <InoMenu>
    <InoListItem>...</InoListItem>
  </InoMenu>
</button>
```

For more information, have a look at the [storybook page of the ino-menu](https://elements.inovex.de/dist/latest/storybook/?path=/story/structure-ino-menu--default-usage).
* **elements|ino-button:** We have removed the property `ino-full-width` of the `ino-button` as this styling should be achieved by simple css.

e.g.:
```css
ino-button {
  width: 100%;
}
```
* **elements|ino-icon:** We have changed our internal icon handling to make working with them more intuitive.
If you are currently using the elements with Vue.js, you need to update your icon import like this:

**From**: `import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';`

**To**: `import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/ino-icon/index.esm.js';`
* **elements:** Previously, we used certain properties as flags to indicate that a slot was in use. 
We wrote our own utility to check the contents of the slot at runtime, making these properties obsolete. 
For this reason, we removed the following properties which can safely be removed:
- `inoIconLeading`
- `inoIconTrailing`

These properties occurred in the following components:
- `ino-button`
- `ino-chip`
- `ino-input`

### Features

* **elements-angular|ino-textarea:** handle onTouched in TextValueAccessor ([#287](https://github.com/inovex/elements/issues/287)) ([c020582](https://github.com/inovex/elements/commit/c02058217cce7a96353a7d19ff2cb574b2bdc913))
* **elements|ino-chip:** add slot for trailing icon ([#221](https://github.com/inovex/elements/issues/221)) ([8b91f4e](https://github.com/inovex/elements/commit/8b91f4e51abf5a920ccf3718ccc54e13802768f1))
* **elements|ino-datepicker:** add language support ([#272](https://github.com/inovex/elements/issues/272)) ([85e129e](https://github.com/inovex/elements/commit/85e129e95bd1b696d13712611f67bc816d46446a))
* **elements|ino-fab:** add slot for leading icon ([#286](https://github.com/inovex/elements/issues/286)) ([6762544](https://github.com/inovex/elements/commit/6762544ceb83e2fa93fd60070af56a8e9336ef3c))
* **elements|ino-menu:** emit new closeMenu event on click ([#244](https://github.com/inovex/elements/issues/244)) ([372b15a](https://github.com/inovex/elements/commit/372b15a037a2aa9a0a676e354096f5c42d6a168b))
* **elements|ino-popover:** add functionality to control component ([#292](https://github.com/inovex/elements/issues/292)) ([df7757b](https://github.com/inovex/elements/commit/df7757bf2b2ea13a69661ae1d889cd92a29a0b6c))
* **elements|ino-popover:** add prop `ino-distance` to define offset ([#299](https://github.com/inovex/elements/issues/299)) ([ea03f3d](https://github.com/inovex/elements/commit/ea03f3dc242beb379e70e19406eb2d7e11429086))


### Bug Fixes

* **elements|ino-datepicker:** fix default date ([#343](https://github.com/inovex/elements/issues/343)) ([16718ac](https://github.com/inovex/elements/commit/16718ac44b5337dcad91559191fcb9388c62c1f2))
* **elements|ino-datepicker:** select default date according to prop ([#345](https://github.com/inovex/elements/issues/345)) ([38a5824](https://github.com/inovex/elements/commit/38a58245dbcfb3f5abb846eb1c494019b90b7359))
* **elements|ino-datepicker:** validate on min/max date changes ([#313](https://github.com/inovex/elements/issues/313)) ([f14da32](https://github.com/inovex/elements/commit/f14da32cf4855199c4fc30ea1ce8aea89d333163))
* **elements|ino-tooltip:** updating `ino-label` leads to non-styled text ([#301](https://github.com/inovex/elements/issues/301)) ([ce8569a](https://github.com/inovex/elements/commit/ce8569a1b5ef384d2dfb803133a7c924766e0c43))


* **elements|ino-button:** inherit width ([#278](https://github.com/inovex/elements/issues/278)) ([75aca81](https://github.com/inovex/elements/commit/75aca81b3efe9b3ccf09b5f357d2eece85753125))


### Miscellaneous

* **elements:** update stencil/core and stencil/sass ([#285](https://github.com/inovex/elements/issues/285)) ([313a5b1](https://github.com/inovex/elements/commit/313a5b1b72594d0a11c46ca5d52faa7c38f2082f))
* **storybook:** bump marked from 1.2.0 to 2.0.1 ([#304](https://github.com/inovex/elements/issues/304)) ([c45bebd](https://github.com/inovex/elements/commit/c45bebdc1176dadebe6a5554e3c1857195b43a93))


### Refactoring

* **elements:** remove ino-leading/trailing properties ([#277](https://github.com/inovex/elements/issues/277)) ([558d41f](https://github.com/inovex/elements/commit/558d41ff6b85d33976d02fbfb52c78bc9081e6d8))
* **elements|ino-icon:** avoid duplicate icon files ([#255](https://github.com/inovex/elements/issues/255)) ([cb6da53](https://github.com/inovex/elements/commit/cb6da5315c6a132f4d754d325b0aa19b06f9a6a6))
* **elements|ino-menu:** replace underlying mdc-menu with ino-popover ([#347](https://github.com/inovex/elements/issues/347)) ([68de0bd](https://github.com/inovex/elements/commit/68de0bd8758da5090e22cf793ad72150a243c33e))

## [2.3.0](https://github.com/inovex/elements/compare/v2.2.1...v2.3.0) (2021-01-27)


### Features

* **elements|ino-nav-item:** add prop for sub text ([#273](https://github.com/inovex/elements/issues/273)) ([746a7c3](https://github.com/inovex/elements/commit/746a7c35ce9c56d960c6a84b18d6990c6e62d503))
* **elements|ino-popover:** add interactive property ([#223](https://github.com/inovex/elements/issues/223)) ([bf6f0e5](https://github.com/inovex/elements/commit/bf6f0e53b5ca85230155d18ec2a21ec57d8ecc54))
* **elements|ino-textarea:** add filled style option ([#237](https://github.com/inovex/elements/issues/237)) ([81769ef](https://github.com/inovex/elements/commit/81769ef2515b50d7ba6626f2d16245e6cf478226))


### Bug Fixes

* **elements:** replace deprecated componentWillUnload lifecycle method ([#242](https://github.com/inovex/elements/issues/242)) ([7b266f8](https://github.com/inovex/elements/commit/7b266f8c19b1916ed1ee73d37aa6105652059997))
* **elements-angular|ino-button:** fix invisible loading spinner ([#240](https://github.com/inovex/elements/issues/240)) ([6f79e68](https://github.com/inovex/elements/commit/6f79e6891417e6e97f1f5ea2c624376b105ee9a4))
* **elements|ino-datepicker:** prevent interaction with disabled datepicker and fix validation ([#245](https://github.com/inovex/elements/issues/245)) ([ba0db4f](https://github.com/inovex/elements/commit/ba0db4f1221ce3ac56e461343809de4d1d2fb8cc))
* **elements|ino-list-item:** fix text alignment ([#239](https://github.com/inovex/elements/issues/239)) ([9689530](https://github.com/inovex/elements/commit/96895304c8cf09049e3568f2f92ae1473973354c))
* **elements|ino-list-item:** prevent destruction on unmount ([#274](https://github.com/inovex/elements/issues/274)) ([13c644d](https://github.com/inovex/elements/commit/13c644db63e1513e397dfec69e20f55b67f14734))
* **elements|ino-progress-bar:** restore buffer dots ([#258](https://github.com/inovex/elements/issues/258)) ([1ff451a](https://github.com/inovex/elements/commit/1ff451a6496e1e1edabf2aac49dcfda54b9f22d1))
* **storybook|ino-icon:** fix icon search ([#238](https://github.com/inovex/elements/issues/238)) ([26aad57](https://github.com/inovex/elements/commit/26aad57f9cd3eb6bba054cfa1d03be9bfd758420))


### Miscellaneous

* upgrade vulnerable highlight.js package from 9.18.1 to 10.5.0 ([#269](https://github.com/inovex/elements/issues/269)) ([7a3edd8](https://github.com/inovex/elements/commit/7a3edd8b55af548a5b0bc7f6c5b726cc884a6afb))


### Documentation

* **storybook|ino-progress-bar:** add customization options and examples ([#265](https://github.com/inovex/elements/issues/265)) ([16fba26](https://github.com/inovex/elements/commit/16fba264e5b46bf531a37b5c7feb5e72760b0f1d))

### [2.2.1](https://github.com/inovex/elements/compare/v2.2.0...v2.2.1) (2020-12-10)


### Bug Fixes

* **elements|ino-datepicker:** use date format to improve validation ([#226](https://github.com/inovex/elements/issues/226)) ([90a990c](https://github.com/inovex/elements/commit/90a990c32c92c0ebd1ad88613aafa99513d54d70))


### Documentation

* **elements|ino-range:** add hint that step prop only works on discrete range ([#220](https://github.com/inovex/elements/issues/220)) ([6d553f0](https://github.com/inovex/elements/commit/6d553f07081488e754490ea5106d2b34e5e68831))

## [2.2.0](https://github.com/inovex/elements/compare/v2.1.0...v2.2.0) (2020-12-01)


### Features

* **elements|ino-chip:** add slot for icons and mark ino-icon prop as deprecated ([#189](https://github.com/inovex/elements/issues/189)) ([edca6b8](https://github.com/inovex/elements/commit/edca6b8297191db80c2b2dd378b7b931bb035d3a))
* **elements|ino-input-file:** add drag and drop window ([#199](https://github.com/inovex/elements/issues/199)) ([6ede8b0](https://github.com/inovex/elements/commit/6ede8b0b7cf1e31921d5f5ddf58c3fab91d43407))


### Bug Fixes

* **elements|ino-fab:** restore disabled color ([#217](https://github.com/inovex/elements/issues/217)) ([2b07e6a](https://github.com/inovex/elements/commit/2b07e6a362ec9400a5a40b17bf273f04337ab660))
* **elements|ino-input:** add autofocus prop to input element ([#198](https://github.com/inovex/elements/issues/198)) ([6f5a186](https://github.com/inovex/elements/commit/6f5a186291040ca890994ba0328d7a078cf7b4f7))


### Miscellaneous

* add npm release script ([#208](https://github.com/inovex/elements/issues/208)) ([04e5926](https://github.com/inovex/elements/commit/04e5926352917a94c99ddc57cc0e0d283b433b33))

## [2.1.0](https://github.com/inovex/elements/compare/v2.0.0...v2.1.0) (2020-11-24)


### Features

* **elements|ino-checkbox:** add indeterminate state for selection checkbox ([#173](https://github.com/inovex/elements/issues/173)) ([da44ee4](https://github.com/inovex/elements/commit/da44ee48ec39f1527aa64f0d8a463e3765533447))
* **elements|ino-icon:** add icons opportunity, pin and save ([#179](https://github.com/inovex/elements/issues/179)) ([d50aa37](https://github.com/inovex/elements/commit/d50aa379042f9e1386c93801b4de56b9594b729d))
* **elements|ino-icon-button:** add managed option and provide customization options ([#176](https://github.com/inovex/elements/issues/176)) ([8aa55b4](https://github.com/inovex/elements/commit/8aa55b4751408be7a8b2d40e1997620693cc84c3))


### Bug Fixes

* **elements:** allow setting of box-sizing to border-box ([#174](https://github.com/inovex/elements/issues/174)) ([832ddd6](https://github.com/inovex/elements/commit/832ddd6700f5c4a3b66579cb0d006a0ad9d7451b))
* **elements-angular:** prevent events from firing twice ([#201](https://github.com/inovex/elements/issues/201)) ([897e78f](https://github.com/inovex/elements/commit/897e78f0e8d2d2268fdaca1e50bae747e5290556))
* **elements-react:** export ino-carousel/-slide components ([#182](https://github.com/inovex/elements/issues/182)) ([4062809](https://github.com/inovex/elements/commit/4062809a08094576b3fac1256f9f884a9ff6cec6))
* **elements|ino-card:** render slots only when used ([#207](https://github.com/inovex/elements/issues/207)) ([1c9dfc1](https://github.com/inovex/elements/commit/1c9dfc1f5ea77bab6fab320389b36be1d5ddbec4))
* **elements|ino-datepicker:** fix validation if no value is provided ([#141](https://github.com/inovex/elements/issues/141)) ([92d0f49](https://github.com/inovex/elements/commit/92d0f49c51d2ac763acef994dae04f5f39de589d))
* **elements|ino-fab:** ensure creation of tooltip after fab loaded ([#156](https://github.com/inovex/elements/issues/156)) ([27de7b7](https://github.com/inovex/elements/commit/27de7b7c7e87d0cb1c17cb704cda42b68443c505))
* **elements|ino-img:** fix rendering issue if dimensions are not set ([#191](https://github.com/inovex/elements/issues/191)) ([c7bbc19](https://github.com/inovex/elements/commit/c7bbc19c20feb15fe0c7b4e3e77c66580f4f3f75))
* **elements|ino-select:** fix positioning while scrolling ([#123](https://github.com/inovex/elements/issues/123)) ([5eaf86a](https://github.com/inovex/elements/commit/5eaf86a83796a7e3969e699fd5e6a71d6c976c89))
* **elements|ino-table:** disable shadow dom ([#163](https://github.com/inovex/elements/issues/163)) ([a0c5b48](https://github.com/inovex/elements/commit/a0c5b48582ba3953c3d17064b852fe7590caedc5))


### Miscellaneous

* build angular repo before publishing ([#168](https://github.com/inovex/elements/issues/168)) ([5caa9d1](https://github.com/inovex/elements/commit/5caa9d1fbebbadb0812bff586cf825b024bbc959))
* improve windows integration ([#172](https://github.com/inovex/elements/issues/172)) ([6fee7f4](https://github.com/inovex/elements/commit/6fee7f45eb529af0482987dfa4ce4b2124be3cd0))
* **elements:** bump material-components to 8.0.0 ([#171](https://github.com/inovex/elements/issues/171)) ([82eea25](https://github.com/inovex/elements/commit/82eea25089785029d0d4b02f26224e8121b80bc3))


### Documentation

* **elements|ino-card:** update deprecated examples ([#190](https://github.com/inovex/elements/issues/190)) ([17c87cd](https://github.com/inovex/elements/commit/17c87cd4cbde6cbb22e16b4bf1b34f87372563ac))
* **elements|ino-table:** update outdated readme ([#193](https://github.com/inovex/elements/issues/193)) ([c16db80](https://github.com/inovex/elements/commit/c16db80a503b4be3118dcd022d0f5d705984d3e1))
* update angular usage docs ([#183](https://github.com/inovex/elements/issues/183)) ([a33d666](https://github.com/inovex/elements/commit/a33d666efb1cedfb67216760d0f20b4bc402a2f6))

## [2.0.0](https://github.com/inovex/elements/compare/v1.2.0...v2.0.0) (2020-10-20)


### ⚠ BREAKING CHANGES

* **elements-angular:** In order to use the latest elements-angular package, change the `imports: [..., InoElementsModule]` inside your `app.module.ts` to `imports: [..., InoElementsModule.forRoot()]`.
The reason for this change is, that we upgraded our internally used Angular dependencies to version 10.1.4 which required us to add some startup capabilities inside the `forRoot` function. We updated our integration guide accordingly.

### Bug Fixes

* **elements-angular:** add compatibility for ivy support ([#147](https://github.com/inovex/elements/issues/147)) ([cb095cb](https://github.com/inovex/elements/commit/cb095cb4b48a0f9bbba1ac0cef4da61248466ca0))
* **elements|ino-fab:** fix an issue causing the tooltip not to be styled correctly ([#88](https://github.com/inovex/elements/issues/88)) ([ab8f3da](https://github.com/inovex/elements/commit/ab8f3dad2a13486eb45a130988af7a9fccd10966))
* **elements|ino-list:** only call destroy if mdc instance was created ([#144](https://github.com/inovex/elements/issues/144)) ([fa826a9](https://github.com/inovex/elements/commit/fa826a9a6c13ec9c0ab0d24fe43df0ef2e1c869d))


### Documentation

* **elements:** update auto generated docs of ino-card and -fab ([#152](https://github.com/inovex/elements/issues/152)) ([719ebd9](https://github.com/inovex/elements/commit/719ebd95f36bc6a9695b4d08421ee97ee0f2bc9b))
* **storybook:** update ino-fab and ino-card documentation ([#139](https://github.com/inovex/elements/issues/139)) ([3437cc7](https://github.com/inovex/elements/commit/3437cc71efffe6e7e159cb207db56a577aec984d))


### Miscellaneous

* remove duplicated entries in the changelog ([#149](https://github.com/inovex/elements/issues/149)) ([9f1b565](https://github.com/inovex/elements/commit/9f1b565402c80673b9fb6e51f595378e2c0d191e))
* use node-version 14.x in ci ([#151](https://github.com/inovex/elements/issues/151)) ([6ad0693](https://github.com/inovex/elements/commit/6ad0693c212ec1c23f406983bfadb4cd3582f18c))
* **deps:** upgrade material components to 7.0 ([#145](https://github.com/inovex/elements/issues/145)) ([dfdc0e4](https://github.com/inovex/elements/commit/dfdc0e4a9f599b1ba87d15de1addf32142639015))
* **elements:** remove relative css import path ([#150](https://github.com/inovex/elements/issues/150)) ([0efed78](https://github.com/inovex/elements/commit/0efed7893272919e739781fd396081ecc525661d))
* **elements-angular:** update internal angular version to 10.1.4 ([#138](https://github.com/inovex/elements/issues/138)) ([04a8406](https://github.com/inovex/elements/commit/04a8406aa10eb768deafaf4c94526ffef652e35b))

## [1.2.0](https://github.com/inovex/elements/compare/v1.1.0...v1.2.0) (2020-10-14)


### Features

* **elements:** add ino-carousel component ([#112](https://github.com/inovex/elements/issues/112)) ([e99b5d7](https://github.com/inovex/elements/commit/e99b5d723903a7060e0691b782d686db01480161))
* **elements|ino-card:** add property to disable hover animation ([#120](https://github.com/inovex/elements/issues/120)) ([0fac301](https://github.com/inovex/elements/commit/0fac301ab4b3fe1b078b5f4d09db97495aa2e779))
* **elements|ino-icon:** add refresh icon ([#136](https://github.com/inovex/elements/issues/136)) ([2953f0a](https://github.com/inovex/elements/commit/2953f0a7089fee9a529b0da63e118d4361a68964))
* **elements|ino-snackbar:** add property for warning and error states ([#116](https://github.com/inovex/elements/issues/116)) ([b648415](https://github.com/inovex/elements/commit/b64841571322656433ab8ed2ef1439b5cd40c23e))


### Bug Fixes

* **elements:** fix deprecated integration ([#126](https://github.com/inovex/elements/issues/126)) ([3045c23](https://github.com/inovex/elements/commit/3045c2394312d2efebac47af6e31a7d170ee3760))
* **storybook|ino-nav-drawer:** fix broken link ([#124](https://github.com/inovex/elements/issues/124)) ([4c6845d](https://github.com/inovex/elements/commit/4c6845de5ddddef053bcfee10c7af8d0f3464c5c))


### Documentation

* **storybook:** add links to examples projects in codesandbox ([#129](https://github.com/inovex/elements/issues/129)) ([f51acda](https://github.com/inovex/elements/commit/f51acda25dbba9461a1b521b8e2ca48a3cc47883))


### Miscellaneous

* **deps:** bump marked from 0.6.3 to 1.2.0 in /packages/storybook ([#133](https://github.com/inovex/elements/issues/133)) ([323b844](https://github.com/inovex/elements/commit/323b844dff5c2d6dab26ac5d3cd30cb15615950a))
* hide refactoring commit type in changelog ([#130](https://github.com/inovex/elements/issues/130)) ([00dbf1a](https://github.com/inovex/elements/commit/00dbf1a55828aad4d2c0e29978dc3abe38ab7cbe))

## [1.1.0](https://github.com/inovex/elements/compare/v1.0.2...v1.1.0) (2020-10-07)


### Features

* **elements|ino-header:** add css variables ([#89](https://github.com/inovex/elements/issues/89)) ([3ab4e53](https://github.com/inovex/elements/commit/3ab4e534e0eccd6d7103294ac249d16547a65719))
* **elements|ino-icon:** add question mark icon ([#80](https://github.com/inovex/elements/issues/80)) ([4f06fa9](https://github.com/inovex/elements/commit/4f06fa995f6c63081fc32fe9b424b4908e72a1f2))
* **elements|ino-list-item:** add css variables ([#44](https://github.com/inovex/elements/issues/44)) ([fbf6fdc](https://github.com/inovex/elements/commit/fbf6fdc451498d6dd7c6ef2101a7964392981270))
* **elements|ino-option:**  add css variables ([#41](https://github.com/inovex/elements/issues/41)) ([0ed6aec](https://github.com/inovex/elements/commit/0ed6aecb77b5d384e400f5cd06aefbbf99f24e49))
* **elements|ino-segment-button:** add css variables ([#38](https://github.com/inovex/elements/issues/38)) ([69e84e1](https://github.com/inovex/elements/commit/69e84e121f65e819b308091a732602908564d7b1))
* **elements|ino-snackbar:** add property to set custom timeout ([#83](https://github.com/inovex/elements/issues/83)) ([d9608da](https://github.com/inovex/elements/commit/d9608daa9779acad4c1f43945a20382ca03f6d4e))


### Bug Fixes

* **elements|ino-switch:** fix color-schemes not working correctly ([#118](https://github.com/inovex/elements/issues/118)) ([e02e40a](https://github.com/inovex/elements/commit/e02e40a08181041aadd4b594ea9705bcfddab13d))


### Miscellaneous

* add simple pull request template ([#109](https://github.com/inovex/elements/issues/109)) ([2c15cc8](https://github.com/inovex/elements/commit/2c15cc8d44a2191ec4dd356f33e39ed75e7ae35f))
* **deps:** bump acorn from 6.3.0 to 6.4.2 in /packages/elements-angular ([#108](https://github.com/inovex/elements/issues/108)) ([37bdb52](https://github.com/inovex/elements/commit/37bdb5204982d3a75ae16ae3d8c80991f8950444))
* **deps:** bump elliptic from 6.5.1 to 6.5.3 in /packages/elements-angular ([#104](https://github.com/inovex/elements/issues/104)) ([831b465](https://github.com/inovex/elements/commit/831b46590e96b7acae4db58b1dd41c8ebe64ca68))
* **deps:** bump elliptic from 6.5.1 to 6.5.3 in /packages/elements-react ([#101](https://github.com/inovex/elements/issues/101)) ([e311586](https://github.com/inovex/elements/commit/e311586d36ab8e64b1183050fece4b570a5b948e))
* **deps:** bump handlebars from 4.4.5 to 4.7.6 in /packages/elements-angular ([#103](https://github.com/inovex/elements/issues/103)) ([4b3c815](https://github.com/inovex/elements/commit/4b3c81526eda379ee60a7267cad85a481a832c41))
* **deps:** bump handlebars from 4.5.1 to 4.7.6 in /packages/storybook ([#92](https://github.com/inovex/elements/issues/92)) ([1804d2c](https://github.com/inovex/elements/commit/1804d2c3dbe7d8c36aebbe88b37502a1a39201d1))
* **deps:** bump http-proxy from 1.18.0 to 1.18.1 in /packages/elements-angular ([#102](https://github.com/inovex/elements/issues/102)) ([7e89575](https://github.com/inovex/elements/commit/7e89575227d85b78ac81c31269ebe5061cc5749b))
* **deps:** bump lodash from 4.17.15 to 4.17.20 in /packages/elements ([#98](https://github.com/inovex/elements/issues/98)) ([b9e8a69](https://github.com/inovex/elements/commit/b9e8a69697c800de802a9342a6f4f563a64114db))
* **deps:** bump lodash from 4.17.15 to 4.17.20 in /packages/elements-angular ([#105](https://github.com/inovex/elements/issues/105)) ([df6d2a3](https://github.com/inovex/elements/commit/df6d2a32504ac15d6b6c75f9e1a5c57f8290b4ff))
* **deps:** bump lodash from 4.17.15 to 4.17.20 in /packages/elements-react ([#100](https://github.com/inovex/elements/issues/100)) ([7bf8779](https://github.com/inovex/elements/commit/7bf8779e001a841f45e1873b5be62cab935f2564))
* **deps:** bump minimist from 0.0.8 to 1.2.5 in /packages/elements ([#94](https://github.com/inovex/elements/issues/94)) ([063ddcf](https://github.com/inovex/elements/commit/063ddcf3bd4983c086e0210cff1d0e683752c988))
* **deps:** bump minimist from 1.2.0 to 1.2.5 in /packages/elements-react ([#99](https://github.com/inovex/elements/issues/99)) ([3c0fbf4](https://github.com/inovex/elements/commit/3c0fbf4da7c4af587a45babb73b9b4f06b5bcfbc))
* **deps:** bump node-fetch from 1.7.3 to 2.6.1 in /packages/storybook ([#90](https://github.com/inovex/elements/issues/90)) ([58ae792](https://github.com/inovex/elements/commit/58ae7928377e0013e84ba0bc5c14cd90455dcfd9))
* **deps:** bump npm-registry-fetch from 4.0.2 to 4.0.7 in /packages/elements-angular ([#106](https://github.com/inovex/elements/issues/106)) ([3f617b8](https://github.com/inovex/elements/commit/3f617b8b6a060e9b389881ee611d4384007b9880))
* **deps:** bump websocket-extensions from 0.1.3 to 0.1.4 in /packages/elements-angular ([#107](https://github.com/inovex/elements/issues/107)) ([1690960](https://github.com/inovex/elements/commit/1690960de95c6595775f29e3b3481cffd75fcfd9))
* add deps as valid scope for dependabot ([#93](https://github.com/inovex/elements/issues/93)) ([42c527a](https://github.com/inovex/elements/commit/42c527ae2a951884cff88e2689dca118efbc5835))
* **elements:** update stencil to v2.0.3 ([#85](https://github.com/inovex/elements/issues/85)) ([99b593d](https://github.com/inovex/elements/commit/99b593d0ee94b8637444a8aa036ebbd6e336490a))


### Refactoring

* **elements:** move from local font files to font package ([#82](https://github.com/inovex/elements/issues/82)) ([c04d903](https://github.com/inovex/elements/commit/c04d903f7f238f950779d9fedf972f56df9647b2))


### Documentation

* **elements-angular:** correct link to top-level readme ([#119](https://github.com/inovex/elements/issues/119)) ([4d57647](https://github.com/inovex/elements/commit/4d576471133ace5b2da67fb98bd77319ad3a504b))
* improve documentation ([#86](https://github.com/inovex/elements/issues/86)) ([82451d6](https://github.com/inovex/elements/commit/82451d6401750abc520e54f3734f075903ea3396))
* link to explanation for pull request title ([#117](https://github.com/inovex/elements/issues/117)) ([bce3bb3](https://github.com/inovex/elements/commit/bce3bb346de91269deb8b8c6ccd8ab4ea4bf5e66))

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
