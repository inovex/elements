# ino-range


<!-- Auto Generated Below -->


## Overview

A range component that allows the user select a number using a slider. It functions as a wrapper around the material [Slider](https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider) component.

## Properties

| Property     | Attribute     | Description                                                                                                           | Type      | Default     |
| ------------ | ------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled`   | `disabled`    | Disables this element.                                                                                                | `boolean` | `undefined` |
| `discrete`   | `discrete`    | Restricts the slider to only allow discrete values.                                                                   | `boolean` | `undefined` |
| `markers`    | `markers`     | Mark this slider to show the steps of the range. Only applicable if `discrete` is enabled.                            | `boolean` | `undefined` |
| `max`        | `max`         | The max value of this element (**required**).                                                                         | `number`  | `undefined` |
| `min`        | `min`         | The min value of this element.                                                                                        | `number`  | `0`         |
| `name`       | `name`        | The name of this element.                                                                                             | `string`  | `undefined` |
| `ranged`     | `ranged`      | Allows to input an interval. Use `valueStart` and `valueEnd` to provide values.                                       | `boolean` | `false`     |
| `step`       | `step`        | The step size for this element. Only applicable if `discrete` is enabled. Is used to calculate the number of markers. | `number`  | `1`         |
| `value`      | `value`       | The value of this element. Only applicable if not in ranged mode.                                                     | `number`  | `undefined` |
| `valueEnd`   | `value-end`   | The value of the right thumb. Only applicable in ranged mode.                                                         | `number`  | `undefined` |
| `valueStart` | `value-start` | The value of the left thumb. Only applicable in ranged mode.                                                          | `number`  | `undefined` |


## Events

| Event              | Description                                                                 | Type                  |
| ------------------ | --------------------------------------------------------------------------- | --------------------- |
| `valueChange`      | Emits when the value changes (not in ranged mode).                          | `CustomEvent<number>` |
| `valueEndChange`   | Emits when the end (right) value of the interval changes (in ranged mode).  | `CustomEvent<number>` |
| `valueStartChange` | Emits when the start (left) value of the interval changes (in ranged mode). | `CustomEvent<number>` |


## Methods

### `setValueToAriaTextMapperFn(fn: (value: number) => string) => Promise<void>`

Should be used to make the component accessible.
If the value is not user-friendly (e.g. a number to represent the day of the week),
use this method to set a function that maps the slider `value` to value of the `aria-valuetext` attribute (e.g. `0` => `monday`).

e.g.:

`const rangeEl = document.querySelector("ino-range")`
`rangeEl.setFnToMapValueToAriaText((value: number) => value + ". day in this week")`

#### Parameters

| Name | Type                        | Description                                                       |
| ---- | --------------------------- | ----------------------------------------------------------------- |
| `fn` | `(value: number) => string` | A function that maps the numeric value to a user-friendly string. |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
