# ino-datepicker
A datepicker is a ui component to select dates and times. It behaves like a native `input` but uses the [flatpickr](https://github.com/flatpickr/flatpickr) library for a better ui experience.

### Usage
This component can be used as follows:

```html
<ino-datepicker 
  accesskey="<string"
  autofocus="<string>"
  disabled="<boolean"
  name="<string"
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
The picker can be used as date-picker
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

For more complex examples, check out the storybook.


<!-- Auto Generated Below -->


## Properties

#### accesskey

string

Sets the accesskey of this element.


#### autofocus

boolean

Autofocuses this element.


#### disabled

boolean

Disables this element.


#### inoDateFormat

string

A string of characters which are used to define how the date will be
displayed in the input field. If used with time, also provide an format for
the time. More details [here](https://flatpickr.js.org/formatting/).


#### inoDefaultDate

string

A simple date string that sets the default date.


#### inoDefaultHour

number

A number containing the initial hour in the date-time picker.


#### inoDefaultMinute

number

A number containing the initial minute in the date-time picker.


#### inoTwelfHourTime

boolean

If true, displays time picker in 12 hour mode with AM/PM selection.


#### inoType

string

The type (`date`, `datetime` or `time`) of this date picker element.
Default is `date`.


#### max

string

The maximum date that a user can pick to (inclusive).


#### min

string

The minimum date that a user can start picking from (inclusive).


#### name

string

Sets the input name of this element.


#### placeholder

string

Defines the input placeholder for this element.


#### required

boolean

Marks this element as required.


#### tabindex

string

Sets the tabindex of this element.


#### value

string

Contains the value of this element.


## Attributes

#### accesskey

string

Sets the accesskey of this element.


#### autofocus

boolean

Autofocuses this element.


#### disabled

boolean

Disables this element.


#### ino-date-format

string

A string of characters which are used to define how the date will be
displayed in the input field. If used with time, also provide an format for
the time. For more details see [here](https://flatpickr.js.org/formatting/).


#### ino-default-date

string

A simple date string that sets the default date.


#### ino-default-hour

number

A number containing the initial hour in the date-time picker.


#### ino-default-minute

number

A number containing the initial minute in the date-time picker.


#### ino-twelf-hour-time

boolean

If true, displays time picker in 12 hour mode with AM/PM selection.


#### ino-type

string

The type (`date`, `datetime` or `time`) of this date picker element.
Default is `date`.


#### max

string

The maximum date that a user can pick to (inclusive).


#### min

string

The minimum date that a user can start picking from (inclusive).


#### name

string

Sets the input name of this element.


#### placeholder

string

Defines the input placeholder for this element.


#### required

boolean

Marks this element as required.


#### tabindex

string

Sets the tabindex of this element.


#### value

string

Contains the value of this element.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
