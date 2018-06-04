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
  ino-secondary="<boolean>"
  ino-icon-left="<string>"
  ino-icon-right="<string>">
 Button Content
</ino-button>
```

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


#### inoIconLeft

string

Appends an icon before the text.


#### inoIconRight

string

Prepends an icon after the text.


#### inoSecondary

boolean

Sets a secondary button style


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


#### ino-icon-left

string

Appends an icon before the text.


#### ino-icon-right

string

Prepends an icon after the text.


#### ino-secondary

boolean

Sets a secondary button style


#### name

string

The name of the element.


#### type

string

The type of this form.

Can either be `button`, `submit` or `reset`.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
