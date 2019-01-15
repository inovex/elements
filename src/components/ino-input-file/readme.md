# ino-input-file
An input component for files. It functions as a wrapper around the native input capabilities having the [`type="file"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).

This component replaces the native behaviour with a custom `ino-button` with logic.

### Usage
The component can be used as follows:

```js
document
  .querySelector('ino-input-file')
  .addEventListener('valueChanges', (e) => {
    // ...
  });
```

```html
<ino-input-file
  accept="<string>"
  autofocus
  disabled
  multiple
  name="<string>"
  required

  ino-label="<string>"
  ino-label-selected
</ino-input>
```

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute   | Description                                              | Type      | Default         |
| ----------- | ----------- | -------------------------------------------------------- | --------- | --------------- |
| `accept`    | `accept`    | The types of files accepted by the server.               | `string`  | `undefined`     |
| `autofocus` | `autofocus` | The autofocus of this element.                           | `boolean` | `undefined`     |
| `disabled`  | `disabled`  | Disables this element.                                   | `boolean` | `undefined`     |
| `inoLabel`  | `ino-label` | Sets the label of the select files button.               | `string`  | `'Select file'` |
| `multiple`  | `multiple`  | Indicates whether the user can enter one or more values. | `boolean` | `undefined`     |
| `name`      | `name`      | The name of this input field.                            | `string`  | `undefined`     |
| `required`  | `required`  | Marks this element as required.                          | `boolean` | `undefined`     |


## Events

| Event          | Description                   | Type                                         |
| -------------- | ----------------------------- | -------------------------------------------- |
| `valueChanges` | Emits when the value changes. | `CustomEvent<{ e: Event, files: object[] }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
