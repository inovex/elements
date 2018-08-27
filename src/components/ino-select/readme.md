# ino-select
A component providing single-option select menus. It functions as a wrapper around the material design's [select](https://github.com/material-components/material-components-web/tree/master/packages/mdc-select) component.


### Usage
The component can be used as follows:

```html
<ino-select
  autofocus="<boolean>"
  disabled="<boolean>"
  form="<string>"
  name="<string>"
  required="<boolean>"
  ino-prepend-default="<boolean>"
  ino-label="<string>"
  ino-outline="<boolean>">
  
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  ...

</ino-select>
```

The select items are (so far) no custom inovex elements but native HTML `option`-elements. The `ino-label` attribute sets an optional floating label for this element.

**Empty default**: `ino-prepend-default` adds an option in the form of `<option disabled selected value=""></option>` to the select. Furthermore, the label is positioned as placeholder and floats to the top after an option has been selected.

### Event Behaviour
The component behaves like a native select with additional features. Thus, the component bubbles events triggered by the native [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement) like `change`.



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                                              | Type      |
| ------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `autofocus`         | `autofocus`           | Marks this element as autofocused.                                                                                                       | `boolean` |
| `disabled`          | `disabled`            | Disables this element.                                                                                                                   | `boolean` |
| `form`              | `form`                | The form this element belongs to.                                                                                                        | `string`  |
| `inoLabel`          | `ino-label`           | The label of this element                                                                                                                | `string`  |
| `inoOutline`        | `ino-outline`         | Styles this select box as outlined element.                                                                                              | `boolean` |
| `inoPrependDefault` | `ino-prepend-default` | Prepends a selected, empty and disabled option.  The label is positioned as placeholder and floats to the top after selecting an option. | `boolean` |
| `name`              | `name`                | The name of this element.                                                                                                                | `string`  |
| `required`          | `required`            | Marks this element as required.                                                                                                          | `boolean` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
