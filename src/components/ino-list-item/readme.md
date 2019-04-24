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
  <ino-checkbox slot="ino-trailing" ...></ino-checkbox>
</ino-list-item>
```

**Two lines:** For items having two lines, provide an `ino-secondary-text` and make sure you set the `ino-two-lines` attribute in the respective parent component (only available for `ino-list`).

**Leading items:** Add an item with the slot-attribute `ino-leading` to add a first column in the list item in LTR languages. Typically an icon or image.

**Trailing items:** Add an item with the slot-attribute `ino-trailing` to add a last column in the list item in LTR languages. Typically small text, icon or image.

<!-- Auto Generated Below -->

## Properties

| Property               | Attribute            | Description                                                                                                                                        | Type      | Default     |
| ---------------------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoActivated`         | `ino-activated`      | Styles the row in an activated style. In contrast to `inoSelected`, use this for only one item and to mark it as permantently activated.           | `boolean` | `undefined` |
| `inoSecondaryText`     | `ino-secondary-text` | Sets the secondary text of this list item. Requires `ino-two-lines` on the parent `ino-list` element.                                              | `string`  | `undefined` |
| `inoSelected`          | `ino-selected`       | Styles the row in a selected style. In contrast to `inoActivated`, use this option to select one or multiple items that are likely to change soon. | `boolean` | `undefined` |
| `inoText` _(required)_ | `ino-text`           | The primary text of this list item (required).                                                                                                     | `string`  | `undefined` |

## Events

| Event     | Description                                                                        | Type                |
| --------- | ---------------------------------------------------------------------------------- | ------------------- |
| `clickEl` | Emits when the list item is clicked. Contains the element itself in `event.detail` | `CustomEvent<void>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
