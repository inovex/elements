# ino-datepicker



<!-- Auto Generated Below -->


## Overview

A datepicker is a ui component to select dates and times. It behaves like a native `input` but uses the [flatpickr](https://github.com/flatpickr/flatpickr) library for a better ui experience.

#### Types
This datepicker can be used as a picker for different types:
- date
- time
- datetime
- month

## Properties

| Property           | Attribute           | Description                                                                                                                                                                       | Type                                        | Default     |
| ------------------ | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ----------- |
| `appendTo`         | `append-to`         | Optional id of an element to append the datepicker to. Default is:  * the host element for inline pickers  * body for collapsable pickers                                         | `string`                                    | `undefined` |
| `attachToBody`     | `attach-to-body`    | Attach calendar overlay to body (true) or Position the calendar inside the wrapper and inside the ino-datepicker (false)                                                          | `boolean`                                   | `true`      |
| `autoFocus`        | `autofocus`         | Autofocuses this element.                                                                                                                                                         | `boolean`                                   | `undefined` |
| `dateFormat`       | `date-format`       | A string to change the date format. Possible values are listed [here](https://flatpickr.js.org/formatting/). The default value is `d-m-Y` which accepts values like `01-01-2019`. | `string`                                    | `'d-m-Y'`   |
| `defaultDate`      | `default-date`      | A string/array containing the initial date of the datepicker overlay. If you're using `inoRange = true` provide an array. If a `value` is given, this will be ignored.            | `string \| string[]`                        | `undefined` |
| `defaultHour`      | `default-hour`      | A number containing the initial hour in the date-time picker overlay. If a `value` is given, this will be ignored.                                                                | `number`                                    | `12`        |
| `defaultMinute`    | `default-minute`    | A number containing the initial minute in the date-time picker overlay. If a `value` is given, this will be ignored.                                                              | `number`                                    | `0`         |
| `disabled`         | `disabled`          | Disables this element.                                                                                                                                                            | `boolean`                                   | `undefined` |
| `error`            | `error`             | Displays the datepicker as invalid if set to true. If the property is not set or set to false, the validation is handled by the default validation.                               | `boolean`                                   | `undefined` |
| `helper`           | `helper`            | The helper text.                                                                                                                                                                  | `string`                                    | `undefined` |
| `helperPersistent` | `helper-persistent` | Displays the helper permanently.                                                                                                                                                  | `boolean`                                   | `undefined` |
| `helperValidation` | `helper-validation` | Styles the helper text as a validation message.                                                                                                                                   | `boolean`                                   | `undefined` |
| `hourStep`         | `hour-step`         | Adjusts the step for the hour input (incl. scrolling) Default is 1                                                                                                                | `number`                                    | `1`         |
| `inline`           | `inline`            | Displays the datepicker inlined.                                                                                                                                                  | `boolean`                                   | `undefined` |
| `label`            | `label`             | Defines the label for this element.                                                                                                                                               | `string`                                    | `undefined` |
| `max`              | `max`               | The maximum date that a user can pick to (inclusive).                                                                                                                             | `string`                                    | `undefined` |
| `min`              | `min`               | The minimum date that a user can start picking from (inclusive).                                                                                                                  | `string`                                    | `undefined` |
| `minuteStep`       | `minute-step`       | Adjusts the step for the minute input (incl. scrolling) Default is 5                                                                                                              | `number`                                    | `5`         |
| `name`             | `name`              | The input name of this element.                                                                                                                                                   | `string`                                    | `undefined` |
| `outline`          | `outline`           | Styles the datepicker as outlined element.                                                                                                                                        | `boolean`                                   | `undefined` |
| `placeholder`      | `placeholder`       | The placeholder of the input element.                                                                                                                                             | `string`                                    | `undefined` |
| `range`            | `range`             | If true, enables the user to choose two dates as an interval. Only works with `type="date"`                                                                                       | `boolean`                                   | `undefined` |
| `required`         | `required`          | Marks this element as required.                                                                                                                                                   | `boolean`                                   | `undefined` |
| `showLabelHint`    | `show-label-hint`   | If true, an *optional* message is displayed if not required, otherwise a * marker is displayed if required                                                                        | `boolean`                                   | `undefined` |
| `twelveHourTime`   | `twelve-hour-time`  | If true, displays time picker in 12 hour mode with AM/PM selection.                                                                                                               | `boolean`                                   | `undefined` |
| `type`             | `type`              | Selects the correct picker corresponding to the given type.                                                                                                                       | `"date" \| "datetime" \| "month" \| "time"` | `'date'`    |
| `value`            | `value`             | The currently selected date shown in the input field **unmanaged**. The given value will not be formatted as date.                                                                | `string`                                    | `''`        |


## Events

| Event         | Description                                                                              | Type                  |
| ------------- | ---------------------------------------------------------------------------------------- | --------------------- |
| `valueChange` | Emits when the value of the datepicker changes. The value can be found in `event.detail` | `CustomEvent<string>` |


## Methods

### `redraw() => Promise<void>`

Redraws the datepicker.

#### Returns

Type: `Promise<void>`



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

| Slot              | Description                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| `"icon-leading"`  | Leading `ino-icon` of the underyling ino-input (only for inline pickers)  |
| `"icon-trailing"` | Trailing `ino-icon` of the underyling ino-input (only for inline pickers) |


## Dependencies

### Depends on

- [ino-input](../ino-input)
- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-datepicker --> ino-input
  ino-datepicker --> ino-icon
  ino-input --> ino-label
  ino-input --> ino-icon
  style ino-datepicker fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
