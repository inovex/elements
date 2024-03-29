# ino-option-group


<!-- Auto Generated Below -->


## Overview

A wrapper component to be used for a group of ino-options. This component adds a non-selectable header before the options.

Beyond that, if you encounter problems using React or Vue in conjunction with the `ino-select`, use this component as a wrapper around your `ino-option`. This way the virtual DOM will know when to update the `ino-select` and its children, which may otherwise not work properly if the options are added dynamically while deeply nested in the `ino-select'. For more information refer to [this issue](https://github.com/ionic-team/stencil/issues/2259).

## Properties

| Property | Attribute | Description                                                                                                                                                                                                                                                               | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `label`  | `label`   | Label of the group. If not set, this component serves as a wrapper component for dynamically added `ino-options`. When using react and vue, an issue exists with slots and the virtual DOM. Read more about it [here](https://github.com/ionic-team/stencil/issues/2259). | `string` | `undefined` |


## Slots

| Slot        | Description              |
| ----------- | ------------------------ |
| `"default"` | One or more `ino-option` |


## Dependencies

### Depends on

- [ino-option](../ino-option)

### Graph
```mermaid
graph TD;
  ino-option-group --> ino-option
  style ino-option-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
