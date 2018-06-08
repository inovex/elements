# ino-button
A button component with different styles and icon capability.

### Usage
The component can be used as follows (custom properties have an `ino`-prefix):
```html
<ino-button
  autofocus="<boolean>"
  disabled="<boolean>"
  name="<string>"
  form="<string>"
  type="<string>"
  ino-color-scheme="<string>"
  ino-fill="<string>"
  ino-icon-left="<string>"
  ino-icon-right="<string>">
 Button Content
</ino-button>
```

The button style can be customised as follows. The attribute `ino-color-scheme` sets the color of the button (see attribute docs for more details), `ino-fill` enables outlined or transparent buttons.

### Event Behaviour
The component behaves like a native button with additional features (see prefixed properties / attributes). Thus, the component bubbles events triggered by the native [HTMLButtonElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement) like `click`, `submit` and `reset`.

Events can be catched as usal with event listeners on the `ino-button` element like:

```js
document.querySelector('ino-button').addEventListener('<event>', ...)
```

The declarative version is supported as well, for example:

```html
<ino-button onclick="handler()"></ino-button>
```


<!-- Auto Generated Below -->


## Properties

#### autofocus

boolean

Sets the autofocus for this element.


#### disabled

boolean

Disables this element.


#### form

string

The form id this element origins to.


#### inoColorScheme

string

The name of the color scheme which is used
to style the background and outline of this component.
Possible values: `primary` (default),  `secondary`, `tertiary`,
`success`, `warning`, `error`, `light`, `dark`.


#### inoFill

string

The fill type of this element.
Possible values: `solid` (default), `outline` or `transparent`.


#### inoIconLeft

string

Appends an icon before the text.


#### inoIconRight

string

Prepends an icon after the text.


#### name

string

The name of the element.


#### type

string

The type of this form.

Can either be `button`, `submit` or `reset`.


## Attributes

#### autofocus

boolean

Sets the autofocus for this element.


#### disabled

boolean

Disables this element.


#### form

string

The form id this element origins to.


#### ino-color-scheme

string

The name of the color scheme which is used
to style the background and outline of this component.
Possible values: `primary` (default),  `secondary`, `tertiary`,
`success`, `warning`, `error`, `light`, `dark`.


#### ino-fill

string

The fill type of this element.
Possible values: `solid` (default), `outline` or `transparent`.


#### ino-icon-left

string

Appends an icon before the text.


#### ino-icon-right

string

Prepends an icon after the text.


#### name

string

The name of the element.


#### type

string

The type of this form.

Can either be `button`, `submit` or `reset`.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
