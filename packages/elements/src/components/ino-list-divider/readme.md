# ino-list-divider



<!-- Auto Generated Below -->


## Overview

A list divider component that either divides two lists or list items. It functions as a wrapper around the material [list divider](https://github.com/material-components/material-components-web/blob/master/packages/mdc-divider/) capabilities.

This component is used as child of `ino-list` and `ino-menu` components.

## Properties

| Property       | Attribute       | Description                                                                                                                          | Type      | Default     |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `betweenLists` | `between-lists` | Marks the divider as a separator between two `ino-list` instead of `ino-list-item` elements.                                         | `boolean` | `undefined` |
| `inset`        | `inset`         | Increases leading margin to match leading column in `ino-list-item`.  Only applicable if `betweenList` is `false`.                   | `boolean` | `undefined` |
| `padded`       | `padded`        | Increases margin on each side of the divider to match meta content in `ino-list-item`.  Only applicable if `betweenList` is `false`. | `boolean` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
