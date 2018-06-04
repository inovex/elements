# ino-select
A component providing single- or multiple-option select menus. It functions as a wrapper around the browser's native `HTMLSelectElement`.


### Usage
The component can be used as follows:

```html
<ino-select
  autofocus="<boolean>"
  disabled="<boolean>"
  form="<string>"
  multiple="<boolean>"
  name="<string>"
  required="<boolean>"
  size="<number>">
  
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  ...

</ino-select>
```

The select items are (so far) no custom inovex elements but native HTML `option`-elements.

### Event Behaviour
The component behaves like a native select with additional features. Thus, the component bubbles events triggered by the native [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) like `change`.



<!-- Auto Generated Below -->


## Properties

#### autofocus

boolean

Marks this element as autofocused.


#### disabled

boolean

Disables this element.


#### form

string

The form this element belongs to.


#### multiple

boolean

If true, enables multiple select options.


#### name

string

The name of this element.


#### required

boolean

Marks this element as required.


#### size

number

The size of this element.


## Attributes

#### autofocus

boolean

Marks this element as autofocused.


#### disabled

boolean

Disables this element.


#### form

string

The form this element belongs to.


#### multiple

boolean

If true, enables multiple select options.


#### name

string

The name of this element.


#### required

boolean

Marks this element as required.


#### size

number

The size of this element.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
