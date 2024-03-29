# ino-icon-button



<!-- Auto Generated Below -->


## Overview

A rounded button component that contains an icon. It functions as a wrapper around the material [icon-button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button) component.

## Additional Hints
**Toggle Button**: To use the ino-icon-button as a toggle button the user can listen to the native `click`-Event and change the icon in the `icon`-Attribute.

## Properties

| Property    | Attribute   | Description                                                                                                                                        | Type                                                     | Default     |
| ----------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | ----------- |
| `activated` | `activated` | Marks the icon button as activated.  Useful in cases where an external state controls the icon button activation. Makes the component **managed**. | `boolean`                                                | `undefined` |
| `attrs`     | --          | Allows the specification of native HTML attributes on the underlying HTML element                                                                  | `HTMLAttributes<HTMLButtonElement> & Partial<ARIAMixin>` | `undefined` |
| `autoFocus` | `autofocus` | Sets the autofocus for this element.                                                                                                               | `boolean`                                                | `undefined` |
| `disabled`  | `disabled`  | Disables this element.                                                                                                                             | `boolean`                                                | `undefined` |
| `filled`    | `filled`    | Styles this element as filled icon button with the `ino-color-scheme` as background color.                                                         | `boolean`                                                | `undefined` |
| `icon`      | `icon`      | The name of the icon of this element.                                                                                                              | `string`                                                 | `undefined` |
| `type`      | `type`      | The type of this form.  Can either be `button`, `submit` or `reset`.                                                                               | `"button" \| "reset" \| "submit"`                        | `'button'`  |


## Events

| Event     | Description                                                                                                        | Type               |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `clickEl` | Event that emits as soon as the user clicks on the icon. The event only emits if the property `clickable` is true. | `CustomEvent<any>` |


## Slots

| Slot        | Description  |
| ----------- | ------------ |
| `"default"` | `<ino-icon>` |


## CSS Custom Properties

| Name                                          | Description                                    |
| --------------------------------------------- | ---------------------------------------------- |
| `--ino-icon-button-background-active-color`   | base color of the active background            |
| `--ino-icon-button-background-color`          | default color of the background                |
| `--ino-icon-button-background-disabled-color` | base color of the background in disabled state |
| `--ino-icon-button-icon-active-color`         | color of the active icon itself                |
| `--ino-icon-button-icon-color`                | default color of the icon itself               |
| `--ino-icon-button-icon-disabled-color`       | color of the icon itself in disabled state     |
| `--ino-icon-button-icon-size`                 | size of the icon itself                        |
| `--ino-icon-button-size`                      | size of the entire button                      |


## Dependencies

### Used by

 - [ino-carousel](../ino-carousel)
 - [ino-dialog](../ino-dialog)
 - [ino-markdown-editor](../ino-markdown-editor)
 - [ino-nav-drawer](../ino-nav-drawer)
 - [ino-snackbar](../ino-snackbar)
 - [ino-table-header-cell](../ino-table-header-cell)

### Depends on

- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-icon-button --> ino-icon
  ino-carousel --> ino-icon-button
  ino-dialog --> ino-icon-button
  ino-markdown-editor --> ino-icon-button
  ino-nav-drawer --> ino-icon-button
  ino-snackbar --> ino-icon-button
  ino-table-header-cell --> ino-icon-button
  style ino-icon-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
