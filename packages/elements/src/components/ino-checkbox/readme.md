# ino-checkbox

A checkbox that allows the user to select one or more items from a set of options.

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                                                                                                                                                                                                                                                                                                                                                          | Type      | Default     |
| --------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`       | `checked`       | Marks this element as checked. (**unmanaged**)                                                                                                                                                                                                                                                                                                                                                       | `boolean` | `false`     |
| `disabled`      | `disabled`      | Disables this element.                                                                                                                                                                                                                                                                                                                                                                               | `boolean` | `undefined` |
| `indeterminate` | `indeterminate` | Marks this element as indeterminate. It indicates that a user is indeterminate without changing the checked state. If a checkbox is unchecked and indeterminate then it will lose the indeterminate state on click and change to checked. For more information, see [Documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes). | `boolean` | `undefined` |
| `name`          | `name`          | The name of this element.                                                                                                                                                                                                                                                                                                                                                                            | `string`  | `undefined` |
| `selection`     | `selection`     | Styles the checkbox as a selection variant that has a larger radius. While checkboxes are mainly used in lists, the selection should be used as a single, independent UI element. The indeterminate state is not supported here.                                                                                                                                                                     | `boolean` | `undefined` |
| `value`         | `value`         | The value of this element.                                                                                                                                                                                                                                                                                                                                                                           | `string`  | `undefined` |


## Events

| Event           | Description                                                                                                    | Type               |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------------------ |
| `checkedChange` | Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`. | `CustomEvent<any>` |


## Slots

| Slot        | Description           |
| ----------- | --------------------- |
| `"default"` | Label of the checkbox |


## Dependencies

### Used by

 - [ino-control-item](../ino-control-item)

### Graph
```mermaid
graph TD;
  ino-control-item --> ino-checkbox
  style ino-checkbox fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
