# ino-segment-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                                                                                                 | Type      | Default     |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Activates the button                                                                                                                        | `boolean` | `false`     |
| `dense`    | `dense`    | Slightly decreases the size of the button                                                                                                   | `boolean` | `false`     |
| `disabled` | `disabled` | Disables the button                                                                                                                         | `boolean` | `false`     |
| `name`     | `name`     | Name of the element                                                                                                                         | `string`  | `undefined` |
| `type`     | `type`     | The type of the internal button in the element. This can be 'submit', 'reset', or 'button'. If not specified, the default type is 'submit'. | `string`  | `undefined` |
| `value`    | `value`    | Value of the element                                                                                                                        | `string`  | `undefined` |


## Events

| Event           | Description                                                                                                       | Type               |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------ |
| `checkedChange` | Emits if the user interacts with the button. If the button is disabled or checked, the event will not be emitted. | `CustomEvent<any>` |


## Slots

| Slot        | Description                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------- |
| `"default"` | Label of the button  A button component that can be used in combination with the ino-segment-group component. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
