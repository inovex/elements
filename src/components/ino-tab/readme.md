# ino-tab
Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. Each Tab governs the visibility of one group of content. It functions as a wrapper around the material [Tab](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab) component.


### Usage
The component can be used as follows:

```html
<ino-tab
  ino-label="<string>"
  ino-icon="<string>"
  ino-indicator-content-width="<boolean>"
  ino-stacked="<boolean>">
</ino-tab>
```

**Content**: Provide the text of a Tab and, if desired, an icon of the tab in `ino-icon`.


<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                     | Description                                                                           | Type      |
| -------------------------- | ----------------------------- | ------------------------------------------------------------------------------------- | --------- |
| `inoIcon`                  | `ino-icon`                    | Indicates a leading icon in the tab.                                                  | `string`  |
| `inoIndicatorContentWidth` | `ino-indicator-content-width` | Indicates that the tab only expands to the width of its content.                      | `boolean` |
| `inoLabel`                 | `ino-label`                   | Indicates a label text in the tab.                                                    | `string`  |
| `inoStacked`               | `ino-stacked`                 | Indicates that the tab icon and label should flow vertically instead of horizontally. | `boolean` |


## Events

| Event             | Description                      |
| ----------------- | -------------------------------- |
| `inoTabDidLoad`   | Emitted when the tab did load.   |
| `inoTabDidUnLoad` | Emitted when the tab did unload. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
