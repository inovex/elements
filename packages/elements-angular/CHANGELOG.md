# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [5.1.0](https://github.com/inovex/elements/compare/v5.0.0...v5.1.0) (2021-11-30)


### Features

* **elements:** add focus and blur methods to input elements ([#306](https://github.com/inovex/elements/issues/306)) ([c2de9a0](https://github.com/inovex/elements/commit/c2de9a0c50eae893edee7ea4fd9f6cd829cdf869))


### Miscellaneous

* add linux support for `publish:yalc` ([#448](https://github.com/inovex/elements/issues/448)) ([0a12f8c](https://github.com/inovex/elements/commit/0a12f8c9979e7dc0f85e0656ef19d27508e5e57c))
* update readmes ([#445](https://github.com/inovex/elements/issues/445)) ([2784a2c](https://github.com/inovex/elements/commit/2784a2c51a94369dd2229bbe619e8d04b4422179))

## [5.0.0](https://github.com/inovex/elements/compare/v4.1.1...v5.0.0) (2021-10-18)


### ⚠ BREAKING CHANGES

* **elements|ino-autocomplete:** - rename event `optionSelected` to `valueChange` for consistency sake
- remove slot `list`, now only takes an `<ino-input>` in the `input` slot and `<ino-option>`s in the default slot
* **elements|ino-snackbar:** remove types `primary` & `warning` and add new types `info` (default) & `success`; remove alignment properties

The snackbar has received a new design, which features the three cases info, success, and error. Also, as part of the new design, we have decided that the snackbar will now be displayed in the top right corner by default. Since we want to get away from offering properties that only make changes to the CSS in the background, we have removed the alignment properties and instead introduced CSS variables that can be used to configure the absolute position of the snackbar. For more information, have a look at its storybook page.
* **elements|ino-snackbar:** rename property `alignment` to `horizontalAlignment` in order to improve clarity

### Features

* **elements|ino-datepicker:** provide error property ([#429](https://github.com/inovex/elements/issues/429)) ([43f37ef](https://github.com/inovex/elements/commit/43f37efd0c4dfe9748d7b12101732d8c47cd672d))
* **elements|ino-select:** add property `error` to display error state ([#424](https://github.com/inovex/elements/issues/424)) ([f3b97c6](https://github.com/inovex/elements/commit/f3b97c60807599a66a2763e5358c7f2bc48c073d))
* **elements|ino-snackbar:** add new property `verticalAlignment` ([#427](https://github.com/inovex/elements/issues/427)) ([1c34299](https://github.com/inovex/elements/commit/1c34299ed97405e3e47800d2ca6c037a6d7f6fd9))
* **elements|ino-snackbar:** rework snackbar ([#431](https://github.com/inovex/elements/issues/431)) ([76911a3](https://github.com/inovex/elements/commit/76911a34ce4d5c5588dcacdf612441b5c54e5693))


### Refactoring

* **elements|ino-autocomplete:** provide better angular support ([#435](https://github.com/inovex/elements/issues/435)) ([bb3853c](https://github.com/inovex/elements/commit/bb3853c092c3ac462d3ab8c604667feea3f0bbaf))

### [4.1.1](https://github.com/inovex/elements/compare/v4.1.0...v4.1.1) (2021-09-06)

## [4.1.0](https://github.com/inovex/elements/compare/v4.0.0...v4.1.0) (2021-08-11)


### Features

* **elements:** add new component `<ino-autocomplete>` ([#402](https://github.com/inovex/elements/issues/402)) ([e93b20f](https://github.com/inovex/elements/commit/e93b20f7ac05500a11dbbeefbbcd382da6146ef3))
* **elements|ino-tab-bar:** add autoFocus property ([#408](https://github.com/inovex/elements/issues/408)) ([03dc76a](https://github.com/inovex/elements/commit/03dc76ac8d45f15ad33441802c93d3854237566b))

## [4.0.0](https://github.com/inovex/elements/compare/v3.0.0...v4.0.0) (2021-07-05)


### ⚠ BREAKING CHANGES

* **elements-angular:** Angular 12 only works with Webpack 5, so we had to adapt our previous way of importing icons. To keep using our `ino-icon` it is necessary that you add the elements via Angular CLI: `ng add @inovex.de/elements-angular`. This also applies if the Elements are already installed. For more detailed instructions, check out our Angular integration guide.
* **storybook:** We decided to remove the `ino` prefixes of all component properties. Originally, they were a convenience to distinguish between native and custom properties. Nowadays the prefixes just make for unnecessarily longer code.

So to upgrade to the latest version it is necessary to remove these prefixes. As an example: `ino-loading` or `inoLoading` becomes `loading`.
To assist with this, here is a regex that can be used to search and replace these properties: `(?:\s)(ino)`.

### Features

* **elements|ino-img:** add fallback img ([#339](https://github.com/inovex/elements/issues/339)) ([6caec70](https://github.com/inovex/elements/commit/6caec708d4f61a64cd34dbebc119c9f70c9cd135))
* **elements|ino-snackbar:** add property to make snackbar stay visible on hover ([#365](https://github.com/inovex/elements/issues/365)) ([bf6b702](https://github.com/inovex/elements/commit/bf6b7023cd9fe9caf4761f6eb57b4f2cc63bc577))
* **storybook:** upgrade storybook to v6 ([#316](https://github.com/inovex/elements/issues/316)) ([dcd7260](https://github.com/inovex/elements/commit/dcd7260fd105339afbc8fd64c1557e9cc5fd723e))


### Bug Fixes

* fix git hook error message ([#372](https://github.com/inovex/elements/issues/372)) ([4716c32](https://github.com/inovex/elements/commit/4716c32974eee4ab38a12e6743de005b9666a203))


### Miscellaneous

* **elements-angular:** update angular to work with version 12 ([#386](https://github.com/inovex/elements/issues/386)) ([c9d123e](https://github.com/inovex/elements/commit/c9d123ecc19f4ffe1de906645bef6de6310b7c19))
* migrate from tslint to eslint ([#283](https://github.com/inovex/elements/issues/283)) ([19a4bf6](https://github.com/inovex/elements/commit/19a4bf65fe02649ef4b701f61b329c48b90f3b06))
* publish v3.0.1 ([ca7a24d](https://github.com/inovex/elements/commit/ca7a24d68944c06c78d88f58ec5151966c0210a6))

### [3.0.1](https://github.com/inovex/elements/compare/v3.0.0...v3.0.1) (2021-04-22)

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
* **elements|ino-menu:** emit new closeMenu event on click ([#244](https://github.com/inovex/elements/issues/244)) ([372b15a](https://github.com/inovex/elements/commit/372b15a037a2aa9a0a676e354096f5c42d6a168b))
* **elements|ino-popover:** add functionality to control component ([#292](https://github.com/inovex/elements/issues/292)) ([df7757b](https://github.com/inovex/elements/commit/df7757bf2b2ea13a69661ae1d889cd92a29a0b6c))
* **elements|ino-popover:** add prop `ino-distance` to define offset ([#299](https://github.com/inovex/elements/issues/299)) ([ea03f3d](https://github.com/inovex/elements/commit/ea03f3dc242beb379e70e19406eb2d7e11429086))


* **elements|ino-button:** inherit width ([#278](https://github.com/inovex/elements/issues/278)) ([75aca81](https://github.com/inovex/elements/commit/75aca81b3efe9b3ccf09b5f357d2eece85753125))


### Refactoring

* **elements:** remove ino-leading/trailing properties ([#277](https://github.com/inovex/elements/issues/277)) ([558d41f](https://github.com/inovex/elements/commit/558d41ff6b85d33976d02fbfb52c78bc9081e6d8))
* **elements|ino-icon:** avoid duplicate icon files ([#255](https://github.com/inovex/elements/issues/255)) ([cb6da53](https://github.com/inovex/elements/commit/cb6da5315c6a132f4d754d325b0aa19b06f9a6a6))
* **elements|ino-menu:** replace underlying mdc-menu with ino-popover ([#347](https://github.com/inovex/elements/issues/347)) ([68de0bd](https://github.com/inovex/elements/commit/68de0bd8758da5090e22cf793ad72150a243c33e))

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
