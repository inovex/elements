# ino-nav-menu-section

<!-- Auto Generated Below -->


## Overview

This component is designed to construct sections specifically intended
for use with the `ino-nav-menu` component.

## Properties

| Property                   | Attribute      | Description                                                                | Type      | Default     |
| -------------------------- | -------------- | -------------------------------------------------------------------------- | --------- | ----------- |
| `sectionId`                | `section-id`   | Optional: ID of the section. Defaults to `sectionName` if not set.         | `string`  | `undefined` |
| `sectionName` _(required)_ | `section-name` | Name of the section that is shown within the `ino-nav-menu`.               | `string`  | `undefined` |
| `showTitle`                | `show-title`   | If true, renders the `sectionName` as a `<h2>` element within the section. | `boolean` | `true`      |


## Events

| Event          | Description                                                                                                 | Type                |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ------------------- |
| `sectionReady` | Emits the section ID on finished loading. Is used internally to register the section to the `ino-nav-menu`. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
