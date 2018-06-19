# ino-button
A button component with different styles and icon capability. It functions as a wrapper around the material [button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-button) component.

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
  ino-dense="<boolean>"
  ino-fill="<string>"
  ino-icon="<string>"
  ino-icon-prepend="<boolean>">
 Button Content
</ino-button>
```

The button style can be customised as follows. The attribute `ino-color-scheme` sets the color of the button, `ino-fill` enables outlined, raised and transparent buttons. With `ino-dense`, the button is made slightly smaller. See the respective attribute docs for more details.

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


#### inoDense

boolean

Makes the button text and container slightly smaller.


#### inoFill

string

The fill type of this element.
Possible values: `solid` (default), `outline`, `raised` or `transparent`.


#### inoIcon

string

Adds an icon to the button.
The icon is appended before the text. Use `inoIconPrepend` to place it after the text.


#### inoIconPrepend

boolean

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


#### ino-dense

boolean

Makes the button text and container slightly smaller.


#### ino-fill

string

The fill type of this element.
Possible values: `solid` (default), `outline`, `raised` or `transparent`.


#### ino-icon

string

Adds an icon to the button.
The icon is appended before the text. Use `inoIconPrepend` to place it after the text.


#### ino-icon-prepend

boolean

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
