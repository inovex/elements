## [0.5.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.5.0...v0.5.1) (2019-03-26)


### Bug Fixes

* **postinstall:** remove postinstall from released package ([9b0d202](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9b0d202))
* **storybook:** remove tsx for syntax highlight ([f1dbfb9](http://gitlab.inovex.de:2424/inovex-elements/core/commit/f1dbfb9))



# [0.5.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.4.0...v0.5.0) (2019-03-21)

## [0.4.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.4.0...v0.4.1) (2018-10-23)

### Bug Fixes

- **events:** rename (most of) event names ([ed04d98](http://gitlab.inovex.de:2424/inovex-elements/core/commit/ed04d98))
- **ino-datepicker:** fix too many tabs to skip datepicker ([3e25361](http://gitlab.inovex.de:2424/inovex-elements/core/commit/3e25361))
- **ino-input:** Emit new value ([5af46f9](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5af46f9))
- **ino-input:** fix validation bug ([6c2c904](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6c2c904))
- **ino-textarea:** change event listening ([1340af4](http://gitlab.inovex.de:2424/inovex-elements/core/commit/1340af4))
- **text-area:** lower case of event ([3a9194d](http://gitlab.inovex.de:2424/inovex-elements/core/commit/3a9194d))

### Features

- **ino-button:** add constants ([cea66f3](http://gitlab.inovex.de:2424/inovex-elements/core/commit/cea66f3))
- **ino-card:** add image, action buttons and action icons ([5e1c59d](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5e1c59d))
- **ino-checkbox:** change to controlled component ([171e12b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/171e12b))
- **ino-datepicker:** controlled component ([26e2c74](http://gitlab.inovex.de:2424/inovex-elements/core/commit/26e2c74))
- **ino-fab, ino-fab-set:** add components ([589b176](http://gitlab.inovex.de:2424/inovex-elements/core/commit/589b176))
- **ino-icon:** add more icons ([0ade6ee](http://gitlab.inovex.de:2424/inovex-elements/core/commit/0ade6ee))
- **ino-icon:** allow to use custom icons ([9abe27c](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9abe27c))
- **ino-icon-button:** change to controlled component ([dd52485](http://gitlab.inovex.de:2424/inovex-elements/core/commit/dd52485))
- **ino-input:** change to controlled component ([19541c3](http://gitlab.inovex.de:2424/inovex-elements/core/commit/19541c3))
- **ino-input-file:** change to controlled-component ([5054e88](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5054e88))
- **ino-list:** change to controlled component ([f2ba19e](http://gitlab.inovex.de:2424/inovex-elements/core/commit/f2ba19e))
- **ino-menu:** controlled component ([392c7f5](http://gitlab.inovex.de:2424/inovex-elements/core/commit/392c7f5))
- **ino-radio:** make checked attribute unmanaged ([489f32f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/489f32f))
- **ino-range:** change to controlled component ([e9938eb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e9938eb))
- **ino-range:** switch to MDC components implementation ([b3ac281](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b3ac281))
- **ino-select:** change to controlled component ([5318824](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5318824))
- **ino-tab-bar:** change to controlled component ([5800088](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5800088))
- **ino-textarea:** change to controlled component ([b6b6678](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b6b6678))
- **ino-textarea:** optional autogrow to display all content ([55a8034](http://gitlab.inovex.de:2424/inovex-elements/core/commit/55a8034))
- **react:** add react wrapper ([10e1127](http://gitlab.inovex.de:2424/inovex-elements/core/commit/10e1127))
- **storybook:** add syntax-highlighting ([7f92b40](http://gitlab.inovex.de:2424/inovex-elements/core/commit/7f92b40))
- **types:** add types for certain properties ([6e42f9f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6e42f9f))

### BREAKING CHANGES

- We switched over to controlled components which means that our inovex element components are now controlled by you,
  the consumer. All the state of the component is derived from the props the component exposes. The input component
  will no longer update its value when the user types. Instead you must listen to the `valueChange` event and set the
  `value` manually.
- The integration in React projects is now much easier, you no longer need to use `ref="..."` to get a reference to
  the element, you're now able to use the exposed callbacks from our react wrapper. Please see the setup instructions
  for React in Storybook to see how you can migrate.
- Most of the event names have changed, please check all the components for new event names when upgrading.

# [0.4.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.3.0...v0.4.0) (2018-09-25)

# [0.4.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.3.0...v0.4.0) (2018-09-25)

### Bug Fixes

- **ino-button:** background color was not applied for raised property ([b70930f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b70930f))
- **ino-message-box, ino-spinner:** disable modal functionality if value of property is false ([de10b7d](http://gitlab.inovex.de:2424/inovex-elements/core/commit/de10b7d))
- **storybook:** fix icon import and naming issue ([0cb1231](http://gitlab.inovex.de:2424/inovex-elements/core/commit/0cb1231))

### Features

- **ino-checkbox:** add indeterminate status ([5d858e3](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5d858e3))
- **ino-chip-set:** add component ([e356839](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e356839))
- **ino-input-file:** add component ([03021ab](http://gitlab.inovex.de:2424/inovex-elements/core/commit/03021ab))
- **ino-list:** add meta- and graphic-support ([a0c05b9](http://gitlab.inovex.de:2424/inovex-elements/core/commit/a0c05b9))
- **ino-snackbar:** add component ([4b5d47f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/4b5d47f))
- **ino-tab, ino-tab-bar:** add component ([ffeb083](http://gitlab.inovex.de:2424/inovex-elements/core/commit/ffeb083))
- **storybook:** migrate to plain html ([1ae48b3](http://gitlab.inovex.de:2424/inovex-elements/core/commit/1ae48b3))
- **storybook:** show version of elements ([9a85dc0](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9a85dc0))

### Reverts

- feat(ino-message-box): add message box ([4911def](http://gitlab.inovex.de:2424/inovex-elements/core/commit/4911def))

### BREAKING CHANGES

- The <ino-message-box> component has been removed because the use case is provided by the newly introduced ino-card component and ino-snackbar component. Please switch to that components instead

<<<<<<< HEAD
<a name="0.3.0"></a>
=======

# [0.3.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.2.0...v0.3.0) (2018-09-11)

> > > > > > > origin

# [0.3.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.2.0...v0.3.0) (2018-09-11)

### Bug Fixes

- use BEM conform css class names ([3d5350f](http://gitlab.inovex.de:2424/inovex-elements/core/commit/3d5350f))
- **ino-icon:** fix svg loading error ([0994d68](http://gitlab.inovex.de:2424/inovex-elements/core/commit/0994d68))

### Features

- **ino-card:** add alternatives in color brands ([a46102b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/a46102b))
- **ino-input, ino-range, ino-datepicker:** add step attribute ([9e13a3b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9e13a3b))
- **ino-menu, ino-list, ino-list-item, ino-list-divider:** add component ([4514db7](http://gitlab.inovex.de:2424/inovex-elements/core/commit/4514db7))

<<<<<<< HEAD
<a name="0.2.0"></a>
=======

# [0.2.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.1.2...v0.2.0) (2018-08-28)

> > > > > > > origin

# [0.2.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.1.2...v0.2.0) (2018-08-28)

### Bug Fixes

- **ino-form-row:** use correct readme in story ([ba65f3e](http://gitlab.inovex.de:2424/inovex-elements/core/commit/ba65f3e))

### Features

- Add react wrapper elements and improve attribute typings ([70d5064](http://gitlab.inovex.de:2424/inovex-elements/core/commit/70d5064))
- **datepicker:** Add button and new input attributes ([643c052](http://gitlab.inovex.de:2424/inovex-elements/core/commit/643c052))
- **ino-datepicker:** add 'range' option to DatepickerType in order to extend 'inoType' ([b2e64e0](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b2e64e0))
- **ino-icon:** renew component without inline SVGs ([6b9f049](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6b9f049))
- **ino-icon-button:** add component ([66719b0](http://gitlab.inovex.de:2424/inovex-elements/core/commit/66719b0))
- **ino-input:** add helper text ([41c8ecd](http://gitlab.inovex.de:2424/inovex-elements/core/commit/41c8ecd))
- **ino-input:** add leading and trailing icon ([bf75880](http://gitlab.inovex.de:2424/inovex-elements/core/commit/bf75880))
- **tooltip:** open on tab and close on escape ([c31826c](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c31826c))

<<<<<<< HEAD
<a name="0.1.2"></a>
=======

## [0.1.2](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.1.1...v0.1.2) (2018-08-10)

> > > > > > > origin

## [0.1.2](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.1.1...v0.1.2) (2018-08-10)

### Bug Fixes

- Allow arbitrary attributes on inovex elements components ([73d2cdb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/73d2cdb))
- **message-box:** fix style-leaks because of similar classnames ([9b10a88](http://gitlab.inovex.de:2424/inovex-elements/core/commit/9b10a88))

### Features

- **ino-datepicker:** Disable browser autocomplete ([22b7dfe](http://gitlab.inovex.de:2424/inovex-elements/core/commit/22b7dfe))
- **ino-select:** Upgrade dependencies and ensure outlined version ([0b3db30](http://gitlab.inovex.de:2424/inovex-elements/core/commit/0b3db30))
- **ino-textarea:** Add new element ([6f619dc](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6f619dc))

<<<<<<< HEAD
<a name="0.1.1"></a>
=======

## [0.1.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.1.0...v0.1.1) (2018-07-05)

> > > > > > > origin

## [0.1.1](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.1.0...v0.1.1) (2018-07-05)

<<<<<<< HEAD
<a name="0.1.0"></a>
=======

# [0.1.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.0.2...v0.1.0) (2018-07-05)

> > > > > > > origin

# [0.1.0](http://gitlab.inovex.de:2424/inovex-elements/core/compare/v0.0.2...v0.1.0) (2018-07-05)

### Bug Fixes

- **ino-popover, ino-tooltip:** Set z-index ([3e6f283](http://gitlab.inovex.de:2424/inovex-elements/core/commit/3e6f283))

### Features

- **landing page:** add landing page ([a3a5a57](http://gitlab.inovex.de:2424/inovex-elements/core/commit/a3a5a57))

<<<<<<< HEAD
<a name="0.0.2"></a>
=======

## [0.0.2](http://gitlab.inovex.de:2424/inovex-elements/core/compare/10c2882...v0.0.2) (2018-06-23)

> > > > > > > origin

## [0.0.2](http://gitlab.inovex.de:2424/inovex-elements/core/compare/10c2882...v0.0.2) (2018-06-23)

### Bug Fixes

- **ino-datepicker:** Restore native required behaviour ([46d343b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/46d343b))
- **tslint:** Allow type declaration and initialization ([cc43ebb](http://gitlab.inovex.de:2424/inovex-elements/core/commit/cc43ebb))

### Features

<<<<<<< HEAD

- **ino-button:** Add properties ino-color-scheme and ino-fill ([2327d38](http://gitlab.inovex.de:2424/inovex-elements/core/commit/2327d38))
- **ino-button:** Implement first draft of ino-button ([23c81e3](http://gitlab.inovex.de:2424/inovex-elements/core/commit/23c81e3))
- **ino-card:** Implement first version of ino-card ([b9eb4de](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b9eb4de))
- **ino-checkbox:** Implement first simple checkbox element ([c8c0665](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c8c0665))
- **ino-chip:** Add new element ([08970e1](http://gitlab.inovex.de:2424/inovex-elements/core/commit/08970e1))
- **ino-datepicker:** Add date and timepicker ([10036e8](http://gitlab.inovex.de:2424/inovex-elements/core/commit/10036e8))
- **ino-datepicker:** Add stories and enable usage in relative contexts ([60ca4d7](http://gitlab.inovex.de:2424/inovex-elements/core/commit/60ca4d7))
- **ino-form-row:** Add new element ([26ba6b6](http://gitlab.inovex.de:2424/inovex-elements/core/commit/26ba6b6))
- **ino-icon:** Add first icon element ([e648963](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e648963))
- **ino-img:** add ino-img component ([cd1f7d1](http://gitlab.inovex.de:2424/inovex-elements/core/commit/cd1f7d1))
- **ino-input:** Add first version of an input element including tests ([10c2882](http://gitlab.inovex.de:2424/inovex-elements/core/commit/10c2882))
- **ino-input:** Add stories ([e950f16](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e950f16))
- **ino-message-box:** Add new element ([b512282](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b512282))
- **ino-popover:** add new element ([1cec4e4](http://gitlab.inovex.de:2424/inovex-elements/core/commit/1cec4e4))
- **ino-radio:** Add Storybook stories ([54e8c8d](http://gitlab.inovex.de:2424/inovex-elements/core/commit/54e8c8d))
- **ino-radio:** Implement first version of ino-radio ([8d57bfd](http://gitlab.inovex.de:2424/inovex-elements/core/commit/8d57bfd))
- **ino-range:** Add new element ([11df04e](http://gitlab.inovex.de:2424/inovex-elements/core/commit/11df04e))
- **ino-select:** Implement first draft of select element ([c76547a](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c76547a))
- **ino-spinner:** Add new element ([5d7e7e1](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5d7e7e1))
- **ino-tooltip:** Implement first purpose of tooltip element ([18f176b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/18f176b))
- **ino-tooltip, ino-popover:** Add stories ([43d9081](http://gitlab.inovex.de:2424/inovex-elements/core/commit/43d9081))
- **storybook:** Add global stylesheets and integrate material design font ([982336b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/982336b))
- **storybook:** Add playground directly in the readme ([7a61007](http://gitlab.inovex.de:2424/inovex-elements/core/commit/7a61007))
- **storybook:** Initial commit ([fbfc58c](http://gitlab.inovex.de:2424/inovex-elements/core/commit/fbfc58c))
- # **storybook:** Several improvements and refactoring ([6bf3919](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6bf3919))

* **ino-button:** Add properties ino-color-scheme and ino-fill ([2327d38](http://gitlab.inovex.de:2424/inovex-elements/core/commit/2327d38))
* **ino-button:** Implement first draft of ino-button ([23c81e3](http://gitlab.inovex.de:2424/inovex-elements/core/commit/23c81e3))
* **ino-card:** Implement first version of ino-card ([b9eb4de](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b9eb4de))
* **ino-checkbox:** Implement first simple checkbox element ([c8c0665](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c8c0665))
* **ino-chip:** Add new element ([08970e1](http://gitlab.inovex.de:2424/inovex-elements/core/commit/08970e1))
* **ino-datepicker:** Add date and timepicker ([10036e8](http://gitlab.inovex.de:2424/inovex-elements/core/commit/10036e8))
* **ino-datepicker:** Add stories and enable usage in relative contexts ([60ca4d7](http://gitlab.inovex.de:2424/inovex-elements/core/commit/60ca4d7))
* **ino-form-row:** Add new element ([26ba6b6](http://gitlab.inovex.de:2424/inovex-elements/core/commit/26ba6b6))
* **ino-icon:** Add first icon element ([e648963](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e648963))
* **ino-img:** add ino-img component ([cd1f7d1](http://gitlab.inovex.de:2424/inovex-elements/core/commit/cd1f7d1))
* **ino-input:** Add first version of an input element including tests ([10c2882](http://gitlab.inovex.de:2424/inovex-elements/core/commit/10c2882))
* **ino-input:** Add stories ([e950f16](http://gitlab.inovex.de:2424/inovex-elements/core/commit/e950f16))
* **ino-message-box:** Add new element ([b512282](http://gitlab.inovex.de:2424/inovex-elements/core/commit/b512282))
* **ino-popover:** add new element ([1cec4e4](http://gitlab.inovex.de:2424/inovex-elements/core/commit/1cec4e4))
* **ino-radio:** Add Storybook stories ([54e8c8d](http://gitlab.inovex.de:2424/inovex-elements/core/commit/54e8c8d))
* **ino-radio:** Implement first version of ino-radio ([8d57bfd](http://gitlab.inovex.de:2424/inovex-elements/core/commit/8d57bfd))
* **ino-range:** Add new element ([11df04e](http://gitlab.inovex.de:2424/inovex-elements/core/commit/11df04e))
* **ino-select:** Implement first draft of select element ([c76547a](http://gitlab.inovex.de:2424/inovex-elements/core/commit/c76547a))
* **ino-spinner:** Add new element ([5d7e7e1](http://gitlab.inovex.de:2424/inovex-elements/core/commit/5d7e7e1))
* **ino-tooltip:** Implement first purpose of tooltip element ([18f176b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/18f176b))
* **ino-tooltip, ino-popover:** Add stories ([43d9081](http://gitlab.inovex.de:2424/inovex-elements/core/commit/43d9081))
* **storybook:** Add global stylesheets and integrate material design font ([982336b](http://gitlab.inovex.de:2424/inovex-elements/core/commit/982336b))
* **storybook:** Add playground directly in the readme ([7a61007](http://gitlab.inovex.de:2424/inovex-elements/core/commit/7a61007))
* **storybook:** Initial commit ([fbfc58c](http://gitlab.inovex.de:2424/inovex-elements/core/commit/fbfc58c))
* **storybook:** Several improvements and refactoring ([6bf3919](http://gitlab.inovex.de:2424/inovex-elements/core/commit/6bf3919))
