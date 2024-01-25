# ino-switch



<!-- Auto Generated Below -->


## Overview

Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.

## Properties

| Property               | Attribute                | Description                                                                                                                                         | Type      | Default     |
| ---------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`              | `checked`                | Marks this element as checked. (**unmanaged**)                                                                                                      | `boolean` | `false`     |
| `disabled`             | `disabled`               | Disables this element.                                                                                                                              | `boolean` | `undefined` |
| `error`                | `error`                  | Displays the switch as invalid if set to true. This functionality might be useful if the input validation is (additionally) handled by the backend. | `boolean` | `undefined` |
| `helperText`           | `helper-text`            | The optional helper text.                                                                                                                           | `string`  | `undefined` |
| `helperTextPersistent` | `helper-text-persistent` | Displays the helper permanently.                                                                                                                    | `boolean` | `undefined` |
| `helperTextValidation` | `helper-text-validation` | Styles the helper text as a validation message.                                                                                                     | `boolean` | `undefined` |
| `label`                | `label`                  | The label of this switch.                                                                                                                           | `string`  | `undefined` |
| `name`                 | `name`                   | The name of this element.                                                                                                                           | `string`  | `undefined` |


## Events

| Event           | Description                                                                                                    | Type               |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------------------ |
| `checkedChange` | Emits when the user clicks on the switch to change the `checked` state. Contains the status in `event.detail`. | `CustomEvent<any>` |


## Methods

### `setBlur() => Promise<void>`

Sets blur on the native `input`.
Use this method instead of the global `input.blur()`.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the native `input`.
Use this method instead of the global `input.focus()`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot         | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| `"default"`  | Label of the switch                                                               |
| `"icon-off"` | Icon used for the unchecked state. The colors of the `color-scheme` will be used. |
| `"icon-on"`  | Icon used for the checked state. The colors of the `color-scheme` will be used.   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
