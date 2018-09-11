# ino-input-file
An input component for files. It functions as a wrapper around the native input capabilities having the [`type="file"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file).

This component replaces the native behaviour with a custom `ino-button` with logic.

### Usage
The component can be used as follows:

```html
<ino-input-file
  accept="<string>"
  autofocus="<boolean>"
  disabled="<boolean>"
  multiple="<boolean>"
  name="<string>"
  required="<boolean>"

  ino-label="<string>"
  ino-label-selected="<boolean>">
</ino-input>
```

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                              | Type      |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `accept`           | `accept`             | The types of files accepted by the server.                                                                                                               | `string`  |
| `autofocus`        | `autofocus`          | The autofocus of this element.                                                                                                                           | `boolean` |
| `disabled`         | `disabled`           | Disables this element.                                                                                                                                   | `boolean` |
| `inoLabelSelected` | `ino-label-selected` | Sets the phrase of the select button when selecting multiple files. Example: `selected` results in `x selected`.  Only applicable if `multiple` is true. | `string`  |
| `inoLabel`         | `ino-label`          | Sets the label of the select files button.                                                                                                               | `string`  |
| `multiple`         | `multiple`           | Indicates whether the user can enter one or more values.                                                                                                 | `boolean` |
| `name`             | `name`               | The name of this input field.                                                                                                                            | `string`  |
| `required`         | `required`           | Marks this element as required.                                                                                                                          | `boolean` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
