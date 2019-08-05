# ino-datepicker

A datepicker is a ui component to select dates and times. It behaves like a native `input` but uses the [flatpickr](https://github.com/flatpickr/flatpickr) library for a better ui experience.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-datepicker')
  .addEventListener('valueChange', e =>
    alert(`The new datepicker value is: ${e.detail}`)
  );
```

```html
<ino-datepicker
  accesskey="<string>"
  autofocus
  disabled
  name="<string>"
  required
  tabindex="<string>"
  value="<string>"
  min="<string>"
  max="<string>"
  minute-step="<number>"
  hour-step="<number>"
  ino-range
  ino-outline
  ino-label="<string>"
  ino-pattern="<string>"
  ino-date-format="<string>"
  ino-default-date="<string>"
  ino-default-hour="<number>"
  ino-default-minute="<number>"
  ino-twelf-hour-time
  ino-helper="<string>"
  ino-helper-persistent
  ino-helper-validation
>
</ino-datepicker>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoDatepicker } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  valueChange(e: any) {
    alert(`The new value is ${e.detail}`);
  }

  render() {
    return (
      <InoDatepicker
        inoLabel="Select a date"
        inoHelper="Choose a date"
        onValueChange={valueChange}
      />
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoDatepicker } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const Datepicker: React.FunctionComponent<Components.InoDatepickerAttributes> = props => {
  const { inoLabel, inoHelper } = props;

  const valueChange = (e: any) => {
    alert(`The new value is ${e.detail}`);
  };

  return (
    <InoDatepicker
      inoLabel={inoLabel}
      inoHelper={inoHelper}
      onValueChange={valueChange}
    />
  );
};

class MyComponent extends Component {
  render() {
    return <Datepicker inoLabel="Select a date" inoHelper="Choose a date" />;
  }
}
```

## Additional Hints

### Examples

The correct picker is automatically chosen based on the `ino-date-format`.

The picker can be used as date picker

```html
<ino-datepicker ino-date-format="d-m-Y" ino-label="Date"></ino-datepicker>
```

or as time picker

```html
<ino-datepicker ino-date-format="H:i" ino-label="Time"></ino-datepicker>
```

or as datetime picker

```html
<ino-datepicker
  ino-date-format="d-m-Y H:i"
  ino-label="Datetime"
></ino-datepicker>
```

## Demo

<!-- Auto Generated Below -->

## Properties

| Property              | Attribute               | Description                                                                                                                                                                                                                                              | Type                 | Default     |
| --------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----------- |
| `accesskey`           | `accesskey`             | The accesskey of this element.                                                                                                                                                                                                                           | `string`             | `undefined` |
| `autofocus`           | `autofocus`             | Autofocuses this element.                                                                                                                                                                                                                                | `boolean`            | `undefined` |
| `disabled`            | `disabled`              | Disables this element.                                                                                                                                                                                                                                   | `boolean`            | `undefined` |
| `hourStep`            | `hour-step`             | Adjusts the step for the hour input (incl. scrolling) Default is 1                                                                                                                                                                                       | `number`             | `1`         |
| `inoDateFormat`       | `ino-date-format`       | A string to change the date format. The format decides which calendar is needed (date, time, or datetime). Possible values are listed [here](https://flatpickr.js.org/formatting/). The default value is `d-m-Y` which accepts values like `01.01.2019`. | `string`             | `'d-m-Y'`   |
| `inoDefaultDate`      | `ino-default-date`      | A string/array containing the initial date of the datepicker overlay. If you're using `inoRange = true` provide an array.                                                                                                                                | `string \| string[]` | `undefined` |
| `inoDefaultHour`      | `ino-default-hour`      | A number containing the initial hour in the date-time picker overlay. The default is `12`                                                                                                                                                                | `number`             | `12`        |
| `inoDefaultMinute`    | `ino-default-minute`    | A number containing the initial minute in the date-time picker overlay. The default is `0`                                                                                                                                                               | `number`             | `0`         |
| `inoHelper`           | `ino-helper`            | The helper text.                                                                                                                                                                                                                                         | `string`             | `undefined` |
| `inoHelperPersistent` | `ino-helper-persistent` | Displays the helper permanently.                                                                                                                                                                                                                         | `boolean`            | `undefined` |
| `inoHelperValidation` | `ino-helper-validation` | Styles the helper text as a validation message.                                                                                                                                                                                                          | `boolean`            | `undefined` |
| `inoLabel`            | `ino-label`             | Defines the label for this element.                                                                                                                                                                                                                      | `string`             | `undefined` |
| `inoOutline`          | `ino-outline`           | Styles the datepicker as outlined element.                                                                                                                                                                                                               | `boolean`            | `undefined` |
| `inoPattern`          | `ino-pattern`           | A pattern to check the input field on                                                                                                                                                                                                                    | `string`             | `undefined` |
| `inoRange`            | `ino-range`             | If true, enables the user to choose two dates as an interval                                                                                                                                                                                             | `boolean`            | `undefined` |
| `inoTwelfHourTime`    | `ino-twelf-hour-time`   | If true, displays time picker in 12 hour mode with AM/PM selection.                                                                                                                                                                                      | `boolean`            | `undefined` |
| `max`                 | `max`                   | The maximum date that a user can pick to (inclusive).                                                                                                                                                                                                    | `string`             | `undefined` |
| `min`                 | `min`                   | The minimum date that a user can start picking from (inclusive).                                                                                                                                                                                         | `string`             | `undefined` |
| `minuteStep`          | `minute-step`           | Adjusts the step for the minute input (incl. scrolling) Default is 5                                                                                                                                                                                     | `number`             | `5`         |
| `name`                | `name`                  | The input name of this element.                                                                                                                                                                                                                          | `string`             | `undefined` |
| `required`            | `required`              | Marks this element as required.                                                                                                                                                                                                                          | `boolean`            | `undefined` |
| `tabindex`            | `tabindex`              | The tabindex of this element.                                                                                                                                                                                                                            | `string`             | `undefined` |
| `value`               | `value`                 | The currently selected date shown in the input field **unmanaged**. The given value will not be formatted as date.                                                                                                                                       | `string`             | `''`        |

## Events

| Event         | Description                                                                              | Type                  |
| ------------- | ---------------------------------------------------------------------------------------- | --------------------- |
| `valueChange` | Emits when the value of the datepicker changes. The value can be found in `event.detail` | `CustomEvent<string>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
