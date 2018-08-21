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
  value="<string>">
    Label
</ino-checkbox>
```

By default, the label is always shown right after the checkbox.


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                    | Type      |
| ---------- | ----------- | ------------------------------ | --------- |
| `checked`  | `checked`   | Marks this element as checked. | `boolean` |
| `disabled` | `disabled`  | Disables this element.         | `boolean` |
| `id`       | `id`        | The id of this element.        | `string`  |
| `name`     | `name`      | The name of this element.      | `string`  |
| `tabIndex` | `tab-index` | The tab index of this element. | `number`  |
| `value`    | `value`     | The value of this element.     | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
