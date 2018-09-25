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


<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                         | Type      |
| --------------- | --------------- | ----------------------------------- | --------- |
| `checked`       | `checked`       | Marks this element as checked.      | `boolean` |
| `disabled`      | `disabled`      | Disables this element.              | `boolean` |
| `id`            | `id`            | The id of this element.             | `string`  |
| `indeterminate` | `indeterminate` | Marks this element as indeterminate | `boolean` |
| `name`          | `name`          | The name of this element.           | `string`  |
| `tabIndex`      | `tab-index`     | The tab index of this element.      | `number`  |
| `value`         | `value`         | The value of this element.          | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
