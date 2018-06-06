# ino-range
A range component that allows the user select a number using a slider. It functions as a wrapper around the browser's native `HTMLInputElement` with type `range`.

> Note: Range sliders with multiple thumbs are not yet implemented.

### Usage
The component can be used as follows:

```html
<ino-range 
  autofocus="<boolean>"
  disabled="<boolean>"
  min="<number>" 
  max="<number>" 
  name="<string>"
  value="<string>"
  required="<boolean>"
  step="<number>"
  ino-color-scheme="<string>">
</ino-range>
```

<!-- Auto Generated Below -->


## Properties

#### autofocus

boolean

The autofocus of this element.


#### disabled

boolean

Disables this element.


#### inoColorScheme

string

The name of the color scheme of this component.
Possible values: `primary` (default), `secondary`, `tertiary`,
`success`, `warning`, `danger`.


#### max

number

The max value of this element.


#### min

number

The min value of this element.


#### name

string

The name of this element.


#### required

boolean

Marks this element as required.


#### step

number

The step size for this element (default =1)


#### value

number

The value of this element.


## Attributes

#### autofocus

boolean

The autofocus of this element.


#### disabled

boolean

Disables this element.


#### ino-color-scheme

string

The name of the color scheme of this component.
Possible values: `primary` (default), `secondary`, `tertiary`,
`success`, `warning`, `danger`.


#### max

number

The max value of this element.


#### min

number

The min value of this element.


#### name

string

The name of this element.


#### required

boolean

Marks this element as required.


#### step

number

The step size for this element (default =1)


#### value

number

The value of this element.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
