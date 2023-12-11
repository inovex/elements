# ino-tab



<!-- Auto Generated Below -->


## Overview

Tabs organize and allow navigation between groups of content that are related and at the same hierarchical level. Each Tab governs the visibility of one group of content. It functions as a wrapper around the material [Tab](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab) component.

## Properties

| Property                | Attribute                 | Description                                                                                                                                    | Type      | Default     |
| ----------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `icon`                  | `icon`                    | Indicates a leading icon in the tab.                                                                                                           | `string`  | `undefined` |
| `indicatorContentWidth` | `indicator-content-width` | Indicates that the tab only expands to the width of its content.                                                                               | `boolean` | `false`     |
| `label`                 | `label`                   | <span style="color:red">**[DEPRECATED]**</span> <br/><br/>[DEPRECATED] Please use the default slot instead. Indicates a label text in the tab. | `string`  | `undefined` |
| `stacked`               | `stacked`                 | Indicates that the tab icon and label should flow vertically instead of horizontally.                                                          | `boolean` | `false`     |


## Events

| Event        | Description                                                                          | Type               |
| ------------ | ------------------------------------------------------------------------------------ | ------------------ |
| `interacted` | Emitted when the user interacts with the tab. This event is used by the ino-tab-bar. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-tab --> ino-icon
  style ino-tab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
