# ino-list-item

A list item component that displays a single instance of choice in a list or menu. It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.

This component is used as child of `ino-list` and `ino-menu` components.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-list-item')
  .addEventListener('clickEl', e =>
    console.log(
      'The new list-item was clicked, the element itself is:',
      e.detail
    )
  );
```

```html
<ino-list-item
  ino-activated
  ino-text="<string>"
  ino-secondary-text="<string>"
  ino-selected
  onclickel="handleClickEl()"
>
  <ino-icon slot="ino-leading" ...></ino-icon>
  <a slot="ino-primary" href="www.inovex.de">...</a>
  <ino-icon slot="ino-trailing" ...></ino-icon>
</ino-list-item>
```
**Ino Primary/Secondary (slot):** If you want to use different elements instead of text, you can use the `ino-primary` or `ino-secondary` slot. To do so, just set the `slot`-attribute of your custom element to `ino-primary` or `ino-secondary`.

**Two lines:** For items having two lines, provide an `ino-secondary-text` and make sure you set the `ino-two-lines` attribute in the respective parent component (only available for `ino-list`).

**Leading items:** Add an item with the slot-attribute `ino-leading` to add a leading column to the list item in LTR languages. Typically an icon or image.

**Trailing items:** Add an item with the slot-attribute `ino-trailing` to add a trailing column to the list item in LTR languages. Typically small text, icon or image.

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                         | Type      | Default     |
| ------------------ | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoActivated`     | `ino-activated`      | Styles the row in an activated style.  In contrast to `inoSelected`, use this for only one item and to mark it as permantently activated.           | `boolean` | `undefined` |
| `inoDisabled`      | `ino-disabled`       | Styles the row in a disabled style.                                                                                                                 | `boolean` | `undefined` |
| `inoSecondaryText` | `ino-secondary-text` | Sets the secondary text of this list item.  Requires `ino-two-lines` on the parent `ino-list` element.                                              | `string`  | `undefined` |
| `inoSelected`      | `ino-selected`       | Styles the row in a selected style.  In contrast to `inoActivated`, use this option to select one or multiple items that are likely to change soon. | `boolean` | `undefined` |
| `inoText`          | `ino-text`           | The primary text of this list item.                                                                                                                 | `string`  | `undefined` |


## Events

| Event     | Description                                                                        | Type               |
| --------- | ---------------------------------------------------------------------------------- | ------------------ |
| `clickEl` | Emits when the list item is clicked. Contains the element itself in `event.detail` | `CustomEvent<any>` |


## CSS Custom Properties

| Name                                                 | Description                                           |
| ---------------------------------------------------- | ----------------------------------------------------- |
| `--ino-list-item-deselected-background-color`        | Background color of a deselected list item            |
| `--ino-list-item-deselected-background-color-active` | Background color of a deselected list item if active  |
| `--ino-list-item-deselected-background-color-focus`  | Background color of a deselected list item if focused |
| `--ino-list-item-deselected-background-color-hover`  | Background color of a deselected list item on hover   |
| `--ino-list-item-deselected-color`                   | Text color of a deselected list item                  |
| `--ino-list-item-selected-background-color`          | Background color of a selected list item              |
| `--ino-list-item-selected-background-color-active`   | Background color of a selected list item if active    |
| `--ino-list-item-selected-background-color-focus`    | Background color of a selected list item if focused   |
| `--ino-list-item-selected-background-color-hover`    | Background color of a selected list item on hover     |
| `--ino-list-item-selected-color`                     | Text color of a selected list item                    |


## Dependencies

### Used by

 - [ino-control-item](../ino-control-item)
 - [ino-nav-item](../ino-nav-item)

### Graph
```mermaid
graph TD;
  ino-control-item --> ino-list-item
  ino-nav-item --> ino-list-item
  style ino-list-item fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
