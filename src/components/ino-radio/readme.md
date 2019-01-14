# ino-radio
A radio component that allows the user to select one option from a set. with label. around the material [radio](https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio) component.

### Usage

The component can be used as follows:

```html
<ino-radio
  checked="<boolean>"
  disabled="<boolean>"
  name="<string>"
  tabindex="<string>"
  value="<string>">
    Label
</ino-radio>
```

### Control flow
The input has a controlled (unmanaged) attribute `checked`. For this reason, listen to `checkedChanges`, sync it with your local state and pass the new value to the component again to change the value of input.

```html
<ino-radio
  checked={this.state.checked}
  checkedChanges={e => this.state.checked = e.detail}>
</ino-radio>
```


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                    | Type      | Default     |
| ------------- | -------------- | ---------------------------------------------- | --------- | ----------- |
| `checked`     | `checked`      | Marks this element as checked (**unmanaged**). | `boolean` | `false`     |
| `disabled`    | `disabled`     | Disables this element.                         | `boolean` | `undefined` |
| `inoId`       | `ino-id`       | The id of this element.                        | `string`  | `undefined` |
| `inoTabindex` | `ino-tabindex` | The tabIndex of this element.                  | `number`  | `undefined` |
| `name`        | `name`         | The name of this element.                      | `string`  | `undefined` |
| `value`       | `value`        | The value of this element.                     | `string`  | `undefined` |


## Events

| Event            | Description                                                                        | Type                |
| ---------------- | ---------------------------------------------------------------------------------- | ------------------- |
| `checkedChanges` | Emits when the user enters some keystrokes. Contains typed input in `event.detail` | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
