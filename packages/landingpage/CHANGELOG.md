# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## 6.1.3 (2022-03-18)

**Note:** Version bump only for package @inovex.de/elements-landingpage





# Changelog
## [6.1.0](https://github.com/inovex/elements/compare/v6.0.0...v6.1.0) (2022-03-10)


### Features

* **elements|ino-select:** add helper text props ([#553](https://github.com/inovex/elements/issues/553)) ([b117525](https://github.com/inovex/elements/commit/b117525dfa6f5158911718fe766e5e2b098fab96))


### Miscellaneous

* **elements:** add stencil linter ([#547](https://github.com/inovex/elements/issues/547)) ([1c28f62](https://github.com/inovex/elements/commit/1c28f629efb7544e0cdf998bc6dc58c3a7d42529))

## [6.0.0](https://github.com/inovex/elements/compare/v5.1.0...v6.0.0) (2022-03-02)


### ⚠ BREAKING CHANGES

* **elements|ino-table:** Due to performance reasons we have removed the components `<ino-table-row>` and `<ino-table-cell>`. The `<ino-table>` has been reworked to work with the native table elements (`<tr>` and `<td>`). Additionally, a new component `<ino-table-header-cell>` was provided to be used instead of the `<th>` element to implement functionalities like filtering and sorting. For extensive examples, check out the respective stories.
* **elements:** * `ino-progress-bar`: Removed `reversed` property as it is no longer supported by our underlying library
* `ino-chip-set`: Has been removed because it was only a wrapper, whose logic does not demand a component of its own.
* `ino-chip`: This component has undergone an extensive rework. We removed the already deprecated `icon` property (use slots instead). The event `removeChip` has been renamed to `chipRemoved` to be consistent with our naming scheme. The event now emits `value` as its detail instead of the element itself (element can still be accessed by `event.target`).
* `ino-switch`: All CSS-Vars have been removed in order to keep a more consistent look across the library and also to reduce the maintenance cost.
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
* **deps:** bump shelljs from 0.8.4 to 0.8.5 ([#491](https://github.com/inovex/elements/issues/491)) ([fedeaf5](https://github.com/inovex/elements/commit/fedeaf5809e37f07e1ff0fe9e6424aa2a655de8e))
* **deps:** bump shelljs from 0.8.4 to 0.8.5 ([#504](https://github.com/inovex/elements/issues/504)) ([264f611](https://github.com/inovex/elements/commit/264f61184742d25d001b2ccd8b99d6665493e545))
* **deps:** bump storybook from 6.3.2 to 6.4.9 ([#475](https://github.com/inovex/elements/issues/475)) ([f1d1f3f](https://github.com/inovex/elements/commit/f1d1f3f8203eb85d32f8a190dd547ceffa537ef9))
* **deps:** bump trim-off-newlines from 1.0.1 to 1.0.3 ([#496](https://github.com/inovex/elements/issues/496)) ([eb591c3](https://github.com/inovex/elements/commit/eb591c3a5f9367b91849a3bc27c8540ed2206165))
* **deps:** bump trim-off-newlines from 1.0.1 to 1.0.3 ([#507](https://github.com/inovex/elements/issues/507)) ([e0d61ca](https://github.com/inovex/elements/commit/e0d61ca8b58b5e27700b20d6c3ad4a5483c2ac2d))
* **deps:** bump url-parse from 1.5.7 to 1.5.10 ([#540](https://github.com/inovex/elements/issues/540)) ([76dac86](https://github.com/inovex/elements/commit/76dac86e21feeb21c0e711c220f00167627f53e5))
* **elements:** update mdc packages to v13 ([#349](https://github.com/inovex/elements/issues/349)) ([77452bf](https://github.com/inovex/elements/commit/77452bf4f97862c7ee0a576a071c0649d67fc30b))
* create placeholder for workflow ([9cce255](https://github.com/inovex/elements/commit/9cce255e0d440398b1583943de6c58f4645b0f77))
* create placeholder for workflow ([5109e93](https://github.com/inovex/elements/commit/5109e93708f4d301130ab6c2c7f916db6b59b669))
* create placeholder for workflow ([4aaa373](https://github.com/inovex/elements/commit/4aaa373d007092ea391da398f72c071c93e5effd))
* remove fonts hosted by google ([#539](https://github.com/inovex/elements/issues/539)) ([cec388a](https://github.com/inovex/elements/commit/cec388a40b85d950ae7a73c8050aad661c424440))
* **elements:** enable source-maps in dev mode ([#538](https://github.com/inovex/elements/issues/538)) ([7e7816b](https://github.com/inovex/elements/commit/7e7816b5a856952f7f7d168bac595ac9ff0b01c2))
* use setup-node v2 für canary release ([#509](https://github.com/inovex/elements/issues/509)) ([239a39e](https://github.com/inovex/elements/commit/239a39e2d7f629c0f977d26ba1c2aa8cc10cc9d9))
* set engine to node@>=14.17 ([#493](https://github.com/inovex/elements/issues/493)) ([a2b06ea](https://github.com/inovex/elements/commit/a2b06eaefb10f81207446e89c9adf7de6a83f624))
* **deps:** bump ajv from 6.12.2 to 6.12.6 ([#517](https://github.com/inovex/elements/issues/517)) ([cc3fefd](https://github.com/inovex/elements/commit/cc3fefd70df4899404d2fc74a040b118960f3036))
* **deps:** bump engine.io from 4.1.1 to 4.1.2 ([#489](https://github.com/inovex/elements/issues/489)) ([a74610e](https://github.com/inovex/elements/commit/a74610e4497b3e1e3fbea2183a9eeb661ea8a28c))
* **deps:** bump follow-redirects from 1.11.0 to 1.14.8 ([#521](https://github.com/inovex/elements/issues/521)) ([fa5cf8c](https://github.com/inovex/elements/commit/fa5cf8c8c0e288df5d0bbee6979981b29a5b6712))
* **deps:** bump lodash from 4.17.15 to 4.17.21 ([#484](https://github.com/inovex/elements/issues/484)) ([db242ad](https://github.com/inovex/elements/commit/db242ad1840b991af499e06c83b1783f44e2e57e))
* **deps:** bump lodash from 4.17.15 to 4.17.21 ([#505](https://github.com/inovex/elements/issues/505)) ([ea5b5e8](https://github.com/inovex/elements/commit/ea5b5e88ef4bf37f7194250afba8d9e9ee8476fe))
* **deps:** bump log4js from 6.3.0 to 6.4.0 ([#494](https://github.com/inovex/elements/issues/494)) ([a088a30](https://github.com/inovex/elements/commit/a088a30feb9b35196cc5b4eaf9f0f87118f2ae7a))
* **deps:** bump node-fetch from 2.6.0 to 2.6.7 ([#497](https://github.com/inovex/elements/issues/497)) ([43a79df](https://github.com/inovex/elements/commit/43a79dfa96a3c2b1385e52d2cc31884f0a27c0ce))
* **deps:** bump tmpl from 1.0.4 to 1.0.5 ([#468](https://github.com/inovex/elements/issues/468)) ([24e0b4c](https://github.com/inovex/elements/commit/24e0b4c629061a7d893378efa81699a4dcabad0a))
* **deps:** bump url-parse from 1.4.7 to 1.5.7 ([#527](https://github.com/inovex/elements/issues/527)) ([9db7cab](https://github.com/inovex/elements/commit/9db7cab1f0f949eb6df623b56fcbaa59607fb9bf))
* **deps:** upgrade deps to support M1 chips ([#523](https://github.com/inovex/elements/issues/523)) ([e5429f1](https://github.com/inovex/elements/commit/e5429f1c63214f522c986e2bc9a8c8f7a1efdaa4))
* create placeholder for workflow ([6d2336c](https://github.com/inovex/elements/commit/6d2336c0d05aa9a12cee32123def7c3b8f3a0fc0))
* **deps:** bump ws from 5.2.2 to 5.2.3 ([#469](https://github.com/inovex/elements/issues/469)) ([95b0c44](https://github.com/inovex/elements/commit/95b0c44401cf624074d5d8c1a8b081f18ced12e5))
