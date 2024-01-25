# ino-radio-group



<!-- Auto Generated Below -->


## Overview

A wrapper component to be used for a group of ino-radio-buttons. This component manages the single selection functionality of a group of ino-radio-buttons.

## Properties

| Property               | Attribute                | Description                                                                                                                                                | Type                         | Default        |
| ---------------------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------- |
| `alignment`            | `alignment`              | Sets the alignment of the radios to either vertical or horizontal.                                                                                         | `"horizontal" \| "vertical"` | `'horizontal'` |
| `disabled`             | `disabled`               | Disables this element.                                                                                                                                     | `boolean`                    | `undefined`    |
| `error`                | `error`                  | Displays the range input as invalid if set to true. This functionality might be useful if the input validation is (additionally) handled by the backend.   | `boolean`                    | `undefined`    |
| `helperText`           | `helper-text`            | The optional helper text.                                                                                                                                  | `string`                     | `undefined`    |
| `helperTextPersistent` | `helper-text-persistent` | Displays the helper permanently.                                                                                                                           | `boolean`                    | `undefined`    |
| `helperTextValidation` | `helper-text-validation` | Styles the helper text as a validation message.                                                                                                            | `boolean`                    | `undefined`    |
| `required`             | `required`               | Marks this element as required.                                                                                                                            | `boolean`                    | `undefined`    |
| `value`                | `value`                  | The value of the radio group. If there is an ino-radio child with the given value, the radio-button will be checked and the other radio-buttons unchecked. | `number \| string`           | `undefined`    |


## Events

| Event         | Description                                                                                                                                                 | Type                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `valueChange` | Emits if the user clicks or navigates (via keyboard) to a `<ino-radio>` element within the radio group. Contains the `value` of the selected `<ino-radio>`. | `CustomEvent<number \| string>` |


## Methods

### `setBlur() => Promise<void>`

Sets blur on the native element.
Use this method instead of the global `input.blur()`.

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets focus on the native element.
Use this method instead of the global `input.focus()`.

#### Returns

Type: `Promise<void>`




## Slots

| Slot        | Description             |
| ----------- | ----------------------- |
| `"default"` | One or more `ino-radio` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
