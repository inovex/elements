# ino-tab-bar



<!-- Auto Generated Below -->


## Overview

Tabs organize and allow navigation between groups of content that are related and at the same hierarchical level. The Tab Bar contains the Tab Scroller and Tab components. It functions as a wrapper around the material [Tab Bar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar) component.

## Properties

| Property    | Attribute    | Description                                           | Type      | Default |
| ----------- | ------------ | ----------------------------------------------------- | --------- | ------- |
| `activeTab` | `active-tab` | Activates the tab at the given index (**unmanaged**). | `number`  | `0`     |
| `autoFocus` | `auto-focus` | Autofocus of tab on activation.                       | `boolean` | `false` |


## Events

| Event             | Description                                                                         | Type               |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------ |
| `activeTabChange` | Emits when a tab changes. Contains the index of the activated tab in `event.detail` | `CustomEvent<any>` |


## Slots

| Slot        | Description           |
| ----------- | --------------------- |
| `"default"` | One or more `ino-tab` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
