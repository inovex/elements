# ino-nav-menu-section

<!-- Auto Generated Below -->


## Overview

This component is designed to construct sections specifically intended
for use with the `ino-nav-menu` component.

## Properties

| Property                     | Attribute        | Description                                                                                                                 | Type      | Default     |
| ---------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `orderPosition` _(required)_ | `order-position` | Is used to determine the position of this section inside of ino-nav-menu                                                    | `number`  | `undefined` |
| `sectionId`                  | `section-id`     | Optional: ID of the section referenced by the `ino-nav-menu` component on your own. Defaults to the sectionName if not set. | `string`  | `''`        |
| `sectionName` _(required)_   | `section-name`   | Name of the section referenced by the `ino-nav-menu` component.                                                             | `string`  | `undefined` |
| `showTitle`                  | `show-title`     | If true, the section name will be presented as title (h2 element) within the section.                                       | `boolean` | `true`      |


## Events

| Event          | Description                               | Type                             |
| -------------- | ----------------------------------------- | -------------------------------- |
| `sectionReady` | Emits the section ID on finished loading. | `CustomEvent<SectionReadyEvent>` |


## Methods

### `sectionEl() => Promise<HTMLElement>`



#### Returns

Type: `Promise<HTMLElement>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
