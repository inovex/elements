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

### Control flow
The select has a controlled (unmanaged) attribute `value`. For this reason, the value doesn't change on user interaction but on updates of `value`. Listen to `valueChanges`, sync it with your local state and pass the new value to the component again to change value of select.

```html
document.querySelector('ino-select').addEventListener('valueChanges', e => this.state.value = e.detail);

<ino-select
  value={this.state.value}>
</ino-select>
```


### Event Behaviour
The component behaves like a native select with additional features. The native `input'` and `change` event is not bubbled. Only `valueChanges` will be emitted when the user selects another option.



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                                                                                                                              | Type      | Default     |
| ------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `autofocus`         | `autofocus`           | Marks this element as autofocused.                                                                                                       | `boolean` | `undefined` |
| `disabled`          | `disabled`            | Disables this element.                                                                                                                   | `boolean` | `undefined` |
| `form`              | `form`                | The form this element belongs to.                                                                                                        | `string`  | `undefined` |
| `inoLabel`          | `ino-label`           | The label of this element                                                                                                                | `string`  | `undefined` |
| `inoOutline`        | `ino-outline`         | Styles this select box as outlined element.                                                                                              | `boolean` | `undefined` |
| `inoPrependDefault` | `ino-prepend-default` | Prepends a selected, empty and disabled option.  The label is positioned as placeholder and floats to the top after selecting an option. | `boolean` | `undefined` |
| `name`              | `name`                | The name of this element.                                                                                                                | `string`  | `undefined` |
| `required`          | `required`            | Marks this element as required.                                                                                                          | `boolean` | `undefined` |
| `value`             | `value`               | The value of this element. (**unmanaged**)                                                                                               | `string`  | `''`        |


## Events

| Event          | Description                                                           | Type                  |
| -------------- | --------------------------------------------------------------------- | --------------------- |
| `valueChanges` | Emits when a selection changes. Contains new value in `event.detail`. | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
