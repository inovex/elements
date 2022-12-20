# Changelog
## [8.0.0](https://github.com/inovex/elements/compare/v7.1.2...v8.0.0) (2022-12-20)


### ⚠ BREAKING CHANGES

* **elements|ino-header:** We've decided to remove the `ino-header` component as it did not really provide the flexibility we wanted. To still use the inovex-elements header styles, we recommend to integrate our new stylesheet which styles all headlines from `<h1>` to `<h6>` and more. Have a look at [our integration guide](https://elements.inovex.de/version/v8.0.0/?path=/docs/docs-stylesheet--page).
* **elements|ino-chip:** As part of the design update, we've decided to remove the `color-scheme` property in all input elements. Read above for more information.
* **elements|ino-switch:** As part of the design update, we've decided to remove the `color-scheme` property in all input elements. Read above for more information.
* **elements|ino-form-row:** Since our input component provides a label on its own, this component is obsolete. That's why we've decided to remove it.
* **elements|ino-range:** As part of the design update, we've decided to remove the `color-scheme` property in all input elements. Read above for more information.
* **elements|ino-sidebar:** Since the component is just a container with a simple slide animation and does not provide any other functionality or styling, we decided to remove it.

### Features

* **elements:** provide global stylesheet ([#733](https://github.com/inovex/elements/issues/733)) ([73dfc9a](https://github.com/inovex/elements/commit/73dfc9a442d779fa1b5303a147ae6c70d0e5ed27))
* **elements|ino-switch:** support icons ([#724](https://github.com/inovex/elements/issues/724)) ([8027499](https://github.com/inovex/elements/commit/80274990c37fd2d99b51220cce23c583d18d1726))
* **landingpage:** add components section ([#784](https://github.com/inovex/elements/issues/784)) ([2932746](https://github.com/inovex/elements/commit/293274631ed1984c0e1a23e5da5b810d4fb70698))
* **landingpage:** add contact form ([#806](https://github.com/inovex/elements/issues/806)) ([e952f56](https://github.com/inovex/elements/commit/e952f566ee140062c2cab1e1da7748d97513183e))
* **landingpage:** add getting started and textual sections ([#775](https://github.com/inovex/elements/issues/775)) ([4628b4f](https://github.com/inovex/elements/commit/4628b4fc7f30de0d2078483f536b3548fe8831fa))
* **landingpage:** add new routes ([#800](https://github.com/inovex/elements/issues/800)) ([e31df54](https://github.com/inovex/elements/commit/e31df5436ede2bbb42767c593d49e25427af5690))
* **landingpage:** add team section ([#801](https://github.com/inovex/elements/issues/801)) ([867f85d](https://github.com/inovex/elements/commit/867f85d5186fb17e63f4bbdb2efd36a8e026ac0b))
* **landingpage:** finish about page ([#819](https://github.com/inovex/elements/issues/819)) ([d466954](https://github.com/inovex/elements/commit/d4669547322b85bfc458fd88da0ea8afcdf1c04d))


### Bug Fixes

* **elements-angular-example:** fix missing icons ([#783](https://github.com/inovex/elements/issues/783)) ([e8266b3](https://github.com/inovex/elements/commit/e8266b313b8acd3aa6582c616d2378b504852a4c))
* **elements-angular|ino-markdown-editor:** prevent styles from being applied in wrong places ([#780](https://github.com/inovex/elements/issues/780)) ([7bdbfc6](https://github.com/inovex/elements/commit/7bdbfc6711b73b4dfc74cb0ba41c78f4e5d6df1b))
* **elements|ino-select:** prevent the `valueChange` event from triggering initially and triggering twice ([#749](https://github.com/inovex/elements/issues/749)) ([0495d50](https://github.com/inovex/elements/commit/0495d50a59d9e99775baa5e73679240e25e6a7fc))
* **elements|ino-textarea:** unable to set dimensions ([#798](https://github.com/inovex/elements/issues/798)) ([d6c57bd](https://github.com/inovex/elements/commit/d6c57bdaace14f43404642c7f55e28fb4cad625e))
* **landingpage:** adjust image base paths ([#812](https://github.com/inovex/elements/issues/812)) ([36e7d02](https://github.com/inovex/elements/commit/36e7d029797a243d81423039bf541c7720f9f936))
* **landingpage:** make icons available ([#802](https://github.com/inovex/elements/issues/802)) ([0d74f93](https://github.com/inovex/elements/commit/0d74f930bd94be4d0bd2cc89aa9f5b1e3964869d))
* **landingpage:** styles disappearing on navigation ([#778](https://github.com/inovex/elements/issues/778)) ([a8c4fb7](https://github.com/inovex/elements/commit/a8c4fb70974cb9eeb8278fb37c3aea38ad01e123))


### Styling

* **elements|ino-chip:** inherit width ([#779](https://github.com/inovex/elements/issues/779)) ([a273530](https://github.com/inovex/elements/commit/a2735304b6e42f7e002eb37c105243bc915c215c))
* **elements|ino-chip:** update design ([#752](https://github.com/inovex/elements/issues/752)) ([26dbacd](https://github.com/inovex/elements/commit/26dbacd7cfd7d829d7ef5087b919c00c1a003455))
* **elements|ino-range:** apply new design ([#712](https://github.com/inovex/elements/issues/712)) ([11ea415](https://github.com/inovex/elements/commit/11ea4155f33fa895222afab3dd1275ff434f4ab9))
* **elements|ino-segment-button:** animate checked change ([#770](https://github.com/inovex/elements/issues/770)) ([8e92af2](https://github.com/inovex/elements/commit/8e92af2f4598d9dade1a2d06a1ac1f03994ff108))
* **landingpage:** increase width of message box ([1030a51](https://github.com/inovex/elements/commit/1030a518e7f594ab95954706fe877a8c70c0f40c))


### Refactoring

* **elements|ino-form-row:** remove component ([#718](https://github.com/inovex/elements/issues/718)) ([e609947](https://github.com/inovex/elements/commit/e609947e67e6c2dd634c618f7afae0e0cfcc4355))
* **elements|ino-header:** remove component ([#793](https://github.com/inovex/elements/issues/793)) ([a83734d](https://github.com/inovex/elements/commit/a83734de27ee64f459b14d0a08b487aab07c38ae))
* **elements|ino-sidebar:** remove component ([#669](https://github.com/inovex/elements/issues/669)) ([349b84d](https://github.com/inovex/elements/commit/349b84d3ef329174f0bdcf4acbe357b63982eb22))
* **elements|ino-switch:** remove color-scheme prop ([#717](https://github.com/inovex/elements/issues/717)) ([f051ef6](https://github.com/inovex/elements/commit/f051ef6f88b19578f3fa7eadcea2e8e04e9aca4a))
