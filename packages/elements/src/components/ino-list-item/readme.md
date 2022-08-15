# ino-list-item

A list item component that displays a single instance of choice in a list or menu. It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.

This component is used as child of `ino-list` and `ino-menu` components.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-list-item')
  .addEventListener('clickEl', (e) =>
    console.log(
      'The new list-item was clicked, the element itself is:',
      e.detail,
    ),
  );
```

```html
<ino-list-item
  activated
  text="<string>"
  secondary-text="<string>"
  selected
  onclickel="handleClickEl()"
>
  <ino-icon slot="leading" ...></ino-icon>
  <a slot="primary" href="www.inovex.de">...</a>
  <ino-icon slot="trailing" ...></ino-icon>
</ino-list-item>
```

**Ino Primary/Secondary (slot):** If you want to use different elements instead of text, you can use the `primary` or `secondary` slot. To do so, just set the `slot`-attribute of your custom element to `primary` or `secondary`.

**Two lines:** For items having two lines, provide an `secondary-text` and make sure you set the `two-lines` attribute in the respective parent component (only available for `ino-list`).

**Leading items:** Add an item with the slot-attribute `leading` to add a leading column to the list item in LTR languages. Typically, an icon or image.

**Trailing items:** Add an item with the slot-attribute `trailing` to add a trailing column to the list item in LTR languages. Typically, small text, icon or image.

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                      | Type                                   | Default      |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------- | ------------ |
| `activated`     | `activated`      | Styles the row in an activated style.  In contrast to `selected`, use this for only one item and to mark it as permanently activated.            | `boolean`                              | `undefined`  |
| `avatar`        | `avatar`         | Configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger.               | `boolean`                              | `false`      |
| `dense`         | `dense`          | Styles the list more dense, making it appear more compact.                                                                                       | `boolean`                              | `undefined`  |
| `disabled`      | `disabled`       | Styles the row in a disabled style.                                                                                                              | `boolean`                              | `undefined`  |
| `role`          | `role`           | For a11y: If list item is interactive then set role type                                                                                         | `"listitem" \| "menuitem" \| "option"` | `'listitem'` |
| `secondaryText` | `secondary-text` | Sets the secondary text of this list item.  Requires `two-lines` on the parent `ino-list` element.                                               | `string`                               | `undefined`  |
| `selected`      | `selected`       | Styles the row in a selected style.  In contrast to `activated`, use this option to select one or multiple items that are likely to change soon. | `boolean`                              | `undefined`  |
| `text`          | `text`           | The primary text of this list item.                                                                                                              | `string`                               | `undefined`  |
| `twoLines`      | `two-lines`      | Marks this element as list with items having two lines.                                                                                          | `boolean`                              | `undefined`  |


## Events

| Event     | Description                                                                                                                                     | Type               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `clickEl` | Emits when the list item is clicked or the enter/space key if pressed while the item is in focus. Contains the element itself in `event.detail` | `CustomEvent<any>` |


## Slots

| Slot          | Description                                        |
| ------------- | -------------------------------------------------- |
| `"leading"`   | For the element to be prepended                    |
| `"primary"`   | For the (text) element                             |
| `"secondary"` | For the secondary text element in a two-lined list |
| `"trailing"`  | For the element to be appended                     |


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
