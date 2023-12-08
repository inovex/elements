# ino-chip



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                                                                               | Type                   | Default     |
| ------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------- |
| `clickable`  | `clickable`  | Marks this element as clickable and displays all interactions like hover-effects, click-effects, pointer-cursor,...                       | `boolean`              | `true`      |
| `disabled`   | `disabled`   | Disables all interactions.                                                                                                                | `boolean`              | `false`     |
| `fill`       | `fill`       | The fill type of this element.                                                                                                            | `"outline" \| "solid"` | `'solid'`   |
| `label`      | `label`      | <span style="color:red">**[DEPRECATED]**</span> <br/><br/>[DEPRECATED] Please use the default slot instead  The content of the component. | `string`               | `undefined` |
| `removable`  | `removable`  | Adds a close icon on the right side of this chip which emits the `removeChip` event on click.                                             | `boolean`              | `false`     |
| `selectable` | `selectable` | Makes the chip selectable.                                                                                                                | `boolean`              | `false`     |
| `selected`   | `selected`   | Marks this element as selected (**works only in conjunction with `selectable`**)                                                          | `boolean`              | `false`     |
| `value`      | `value`      | The value of this chip. Is emitted by the `chipClicked` and `chipRemoved` events.                                                         | `string`               | `undefined` |


## Events

| Event         | Description                                                                                                                     | Type                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `chipClicked` | Event that emits the `value` as soon as the user clicks on the chip.                                                            | `CustomEvent<string>` |
| `chipRemoved` | Event that emits the `value` as soon as the user clicks on the remove icon.  Listen to this event to hide or destroy this chip. | `CustomEvent<string>` |


## Slots

| Slot              | Description                                                                                                                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `"default"`       | The label text of the chip                                                                                                                |
| `"icon-leading"`  | For the icon to be prepended                                                                                                              |
| `"icon-trailing"` | For the icon to be appended - disables the `removable` property  The ino-chip component displays the provided content and icon as a chip. |


## Dependencies

### Depends on

- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-chip --> ino-icon
  style ino-chip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
