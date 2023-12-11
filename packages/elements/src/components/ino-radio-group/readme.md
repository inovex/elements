# ino-radio-group



<!-- Auto Generated Below -->


## Overview

A wrapper component to be used for a group of ino-radio-buttons. This component manages the single selection functionality of a group of ino-radio-buttons.

## Properties

| Property    | Attribute   | Description                                                                                                                                                | Type                         | Default        |
| ----------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------- |
| `alignment` | `alignment` | Sets the alignment of the radios to either vertical or horizontal.                                                                                         | `"horizontal" \| "vertical"` | `'horizontal'` |
| `value`     | `value`     | The value of the radio group. If there is an ino-radio child with the given value, the radio-button will be checked and the other radio-buttons unchecked. | `number \| string`           | `undefined`    |


## Events

| Event         | Description                                                                                                                                                 | Type                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| `valueChange` | Emits if the user clicks or navigates (via keyboard) to a `<ino-radio>` element within the radio group. Contains the `value` of the selected `<ino-radio>`. | `CustomEvent<number \| string>` |


## Slots

| Slot        | Description             |
| ----------- | ----------------------- |
| `"default"` | One or more `ino-radio` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
