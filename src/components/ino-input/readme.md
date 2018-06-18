# ino-input
An input component with styles. It functions as a wrapper around the material [textfield](https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield) component.


Use this element for **simple types** like `text`, `password`, `number` or `email`. For more complex types, there are elements like a [Radio Button](../ino-radio), a [Checkbox](../ino-checkbox), a [Datepicker](../ino-datepicker) and many more.


### Usage
The component can be used as follows:

```html
<ino-input
  accesskey="<string>"
  autocomplete="<string>"
  autofocus="<boolean>"
  disabled="<boolean>"
  min="<number>"
  max="<number>"
  name="<string>"
  pattern="<string>"
  placeholder="<string>"
  required="<boolean>"
  size="<number>"
  tabindex="<string>"
  type="<string>"
  value="<string>"
  ino-outline="<boolean>"
  ino-label="<string>"
</ino-input>
```

**Labels**: The component shows a floating label containing the value of `ino-label`.

**Outlined**: The component is by default a box component with ripple underline. Provide `ino-outline` to use the material outline design.

### Event Behaviour
The component behaves like a native input with additional features. Thus, the component bubbles events triggered by the native [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) like `keyup` or `change`.


<!-- Auto Generated Below -->


## Properties

#### accesskey

string

The accesskey of this native element.


#### autocomplete

string

The autocomplete property of this element.


#### autofocus

boolean

The autofocus of this element.


#### disabled

boolean

Disables this element.


#### inoLabel

string

The optional floating label of this input field.


#### inoOutline

boolean

Styles the input field as outlined element.


#### max

string

The max value of this element.


#### min

string

The min value of this element.


#### name

string

The name of this element.


#### pattern

string

The validation pattern of this element.


#### placeholder

string

The placeholder of this element.


#### required

boolean

Marks this element as required.


#### size

number

The size of this element.


#### tabindex

string

The tabindex of this element.


#### type

string

The type of this element (default = text).


#### value

string

The value of this element.


## Attributes

#### accesskey

string

The accesskey of this native element.


#### autocomplete

string

The autocomplete property of this element.


#### autofocus

boolean

The autofocus of this element.


#### disabled

boolean

Disables this element.


#### ino-label

string

The optional floating label of this input field.


#### ino-outline

boolean

Styles the input field as outlined element.


#### max

string

The max value of this element.


#### min

string

The min value of this element.


#### name

string

The name of this element.


#### pattern

string

The validation pattern of this element.


#### placeholder

string

The placeholder of this element.


#### required

boolean

Marks this element as required.


#### size

number

The size of this element.


#### tabindex

string

The tabindex of this element.


#### type

string

The type of this element (default = text).


#### value

string

The value of this element.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
