# ino-list-item
A list item component that displays a single instance of choice in a list or menu. It functions as a wrapper around the material [list item](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) capabilities.

This component is used as child of `ino-list` and `ino-menu` components.

### Usage
The component can be used as follows:

```html
<ino-list-item
  ino-activated="<boolean>"
  ino-leading-icon="<string>"
  ino-text="<string>"
  ino-secondary-text="<string>"
  ino-selected="<boolean>">
</ino-list-item>
```

**Two lines:** For items having two lines, provide an `ino-secondary-text` and make sure you set the `ino-two-lines` attribute in the respective parent component (only available for `ino-list`).

**Leading icon:** Provide the name of an `ino-icon` in `ino-leading-icon` to prepend an icon.



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                                                                                                                      | Type      |
| ------------------ | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | --------- |
| `inoActivated`     | `ino-activated`      | Styles the row in an activated style.  In contrast to `inoSelected`, use this for only one item and to mark it as permantently activated.        | `boolean` |
| `inoLeadingIcon`   | `ino-leading-icon`   | The name of the leading icon of this list item.                                                                                                  | `string`  |
| `inoSecondaryText` | `ino-secondary-text` | Sets the secondary text of this list item.  Requires `ino-two-lines` on the parent `ino-list` element.                                           | `string`  |
| `inoSelected`      | `ino-selected`       | Styles the row in a selected style.  In contrast to `inoActivated`, use this option to select one or multiple items that are likely change soon. | `boolean` |
| `inoText`          | `ino-text`           | The primary text of this list item (required).                                                                                                   | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
