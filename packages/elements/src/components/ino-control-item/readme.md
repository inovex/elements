# ino-list-item

A list item component that displays a single instance of choice in a list or menu with a control element (radio-button or checkbox). It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.

This component is used as child of `ino-list` and `ino-menu` components.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-control-item')
  .addEventListener('checkedChange', (e) =>
    console.log(
      'The element itself or the checkbox was clicked. Its new value is:',
      e.detail,
    ),
  );
```

```html
<ino-control-item
  role="checkbox|radio"
  checked="<boolean>"
  disabled="<boolean>"
  name="<string>"
  value="<string>"
  tab-index="<number>"
  id="<string>"
  activated
  text="<string>"
  secondary-text="<string>"
  selected="<boolean>"
  indeterminate="<boolean>"
  oncheckedchange="handleCheckChange()"
  trailing="<boolean>"
>
  ...
</ino-control-item>
```

**Slot:** This component supports icons and text as children. Just declare your icon or text inside of the `ino-control-item`-Element and it will be placed according to the `trailing`-Property.

**Two lines:** For items having two lines, provide an `secondary-text` and make sure you set the `two-lines` attribute in the respective parent component (only available for `ino-list`).

**Trailing:** Positions the control element at the end of the line

### Restrictions

Please note that only text is supported as a trailing element. However, your icons can be placed at the leading position. To do so, use the `trailing`-Property and declare your icon inside of the element as shown below.

```html
<ino-control-item
  role="checkbox"
  trailing
  text="Checkbox-Item with a leading icon"
>
  <ino-icon icon="add" />
</ino-control-item>

<ino-control-item
  role="checkbox"
  text="Checkbox-Item with trailing metadata"
>
  <p>Some Metadata</p>
</ino-control-item>
```

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute        | Description                                                                                                                                      | Type                    | Default     |
| ---------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ----------- |
| `activated`            | `activated`      | Styles the row in an activated style.  In contrast to `selected`, use this for only one item and to mark it as permanently activated.            | `boolean`               | `undefined` |
| `checked`              | `checked`        | Marks this element as checked. (**unmanaged**)                                                                                                   | `boolean`               | `false`     |
| `disabled`             | `disabled`       | Disables this element.                                                                                                                           | `boolean`               | `undefined` |
| `indeterminate`        | `indeterminate`  | Marks this element as indeterminate (**unmanaged**) Checkbox only                                                                                | `boolean`               | `undefined` |
| `inoRole` _(required)_ | `ino-role`       | The type of control element                                                                                                                      | `"checkbox" \| "radio"` | `undefined` |
| `name`                 | `name`           | The name of this element.                                                                                                                        | `string`                | `undefined` |
| `secondaryText`        | `secondary-text` | Sets the secondary text of this list item.  Requires `two-lines` on the parent `ino-list` element.                                               | `string`                | `undefined` |
| `selected`             | `selected`       | Styles the row in a selected style.  In contrast to `activated`, use this option to select one or multiple items that are likely to change soon. | `boolean`               | `undefined` |
| `text` _(required)_    | `text`           | The primary text of this list item (required).                                                                                                   | `string`                | `undefined` |
| `trailing`             | `trailing`       | Places the checkbox at the end of the item                                                                                                       | `boolean`               | `undefined` |
| `value`                | `value`          | The value of this element.                                                                                                                       | `string`                | `undefined` |


## Events

| Event           | Description                                                                                                                     | Type               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `checkedChange` | Emits when the user clicks on the checkbox or the list item to change the checked state. Contains the status in `event.detail`. | `CustomEvent<any>` |


## Slots

| Slot        | Description |
| ----------- | ----------- |
| `"default"` | Any element |


## Dependencies

### Depends on

- [ino-list-item](../ino-list-item)
- [ino-checkbox](../ino-checkbox)
- [ino-radio](../ino-radio)

### Graph
```mermaid
graph TD;
  ino-control-item --> ino-list-item
  ino-control-item --> ino-checkbox
  ino-control-item --> ino-radio
  style ino-control-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
