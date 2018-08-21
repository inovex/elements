# ino-datepicker
A datepicker is a ui component to select dates and times. It behaves like a native `input` but uses the [flatpickr](https://github.com/flatpickr/flatpickr) library for a better ui experience.

### Usage
This component can be used as follows:

```html
<ino-datepicker
  accesskey="<string>"
  autofocus="<string>"
  disabled="<boolean>"
  name="<string>"
  placeholder="<string>"
  required="<boolean>"
  tabindex="<string>"
  value="<string>"
  min="<string>"
  max="<string>"

  ino-type="<date|datetime|time>"
  ino-date-format="<string>"
  ino-default-hour="<number>"
  ino-default-minute="<number>"
  ino-twelf-hour-time="<boolean>">
</ino-datepicker>
```

### Examples
The picker can be used as date picker
```html
<ino-datepicker ino-type="date" placeholder="Enter a date"></ino-datepicker>
```

or as time picker
```html
<ino-datepicker ino-type="time" placeholder="Enter a time"></ino-datepicker>
```

or as datetime picker
```html
<ino-datepicker ino-type="datetime" placeholder="Enter a date and time"></ino-datepicker>
```

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute             | Description                                                                             | Type             |
| ------------------ | --------------------- | --------------------------------------------------------------------------------------- | ---------------- |
| `accesskey`        | `accesskey`           | The accesskey of this element.                                                          | `string`         |
| `autofocus`        | `autofocus`           | Autofocuses this element.                                                               | `boolean`        |
| `disabled`         | `disabled`            | Disables this element.                                                                  | `boolean`        |
| `inoDefaultDate`   | `ino-default-date`    | A simple date string that sets the default date.                                        | `string`         |
| `inoDefaultHour`   | `ino-default-hour`    | A number containing the initial hour in the date-time picker.                           | `number`         |
| `inoDefaultMinute` | `ino-default-minute`  | A number containing the initial minute in the date-time picker.                         | `number`         |
| `inoTwelfHourTime` | `ino-twelf-hour-time` | If true, displays time picker in 12 hour mode with AM/PM selection.                     | `boolean`        |
| `inoType`          | `ino-type`            | The type (`date`, `datetime` or `time`) of this date picker element. Default is `date`. | `DatepickerType` |
| `max`              | `max`                 | The maximum date that a user can pick to (inclusive).                                   | `string`         |
| `min`              | `min`                 | The minimum date that a user can start picking from (inclusive).                        | `string`         |
| `name`             | `name`                | The input name of this element.                                                         | `string`         |
| `placeholder`      | `placeholder`         | Defines the input placeholder for this element.                                         | `string`         |
| `required`         | `required`            | Marks this element as required.                                                         | `boolean`        |
| `tabindex`         | `tabindex`            | The tabindex of this element.                                                           | `string`         |
| `value`            | `value`               | The value of this element.                                                              | `string`         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
