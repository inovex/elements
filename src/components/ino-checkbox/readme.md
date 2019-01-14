# ino-checkbox
A checkbox that allows the user to select one or more items from a set. It functions as a wrapper around the material [checkbox](https://github.com/material-components/material-components-web/tree/master/packages/mdc-checkbox) component.



### Usage
The component can be used as follows:

```html
<ino-checkbox
  checked="<boolean>"
  disabled="<boolean>"
  id="<string>"
  name="<string>"
  tabIndex="<number>"
  value="<string>"
  indeterminate="<boolean>">
    Label
</ino-checkbox>
```

By default, the label is always shown right after the checkbox.

**Indeterminate:** The indeterminate status is set by the user. It indicates that a user is indeterminate without changing the checked state. If a checkbox is set unchecked and indeterminate then it will lose the indeterminate state on click and change to checked. [Documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)

### Control flow
The input has a controlled (unmanaged) attribute `checked` and `indeterminate`. For this reason listen to `checkedChanges`,
sync it with your local state and pass the new value to the component again to change value and indeterminate state of input.

```js
document
  .querySelector('ino-checkbox')
  .addEventListener('checkedChanges', (e) => {
    this.state.checked = e.detail
  });
```

```html
<ino-checkbox
  checked={this.state.checked}
  indeterminate={this.state.indeterminate}
  checkedChanges={e => this.state.checked = e.detail}>
</ino-checkbox>
```


<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                         | Type      | Default     |
| --------------- | --------------- | --------------------------------------------------- | --------- | ----------- |
| `checked`       | `checked`       | Marks this element as checked. (**unmanaged**)      | `boolean` | `false`     |
| `disabled`      | `disabled`      | Disables this element.                              | `boolean` | `undefined` |
| `indeterminate` | `indeterminate` | Marks this element as indeterminate (**unmanaged**) | `boolean` | `undefined` |
| `inoId`         | `ino-id`        | The id of this element.                             | `string`  | `undefined` |
| `inoTabindex`   | `ino-tabindex`  | The tab index of this element.                      | `number`  | `undefined` |
| `name`          | `name`          | The name of this element.                           | `string`  | `undefined` |
| `value`         | `value`         | The value of this element.                          | `string`  | `undefined` |


## Events

| Event            | Description                                                                                                    | Type                |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | ------------------- |
| `checkedChanges` | Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
