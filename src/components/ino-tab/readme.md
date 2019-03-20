# ino-tab

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. Each Tab governs the visibility of one group of content. It functions as a wrapper around the material [Tab](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab) component.

### Usage

The component can be used as follows:

```js
document.querySelector('ino-tab').addEventListener('leadEl', e => {
  // ...
});

document.querySelector('ino-tab').addEventListener('unloadEl', e => {
  // ...
});
```

```html
<ino-tab
  ino-label="<string>"
  ino-icon="<string>"
  ino-indicator-content-width="<boolean>"
  ino-stacked="<boolean>"
>
</ino-tab>
```

**Content**: Provide the text of a Tab and, if desired, an icon of the tab in `ino-icon`.

<!-- Auto Generated Below -->


## Properties

| Property                   | Attribute                     | Description                                                                           | Type      | Default     |
| -------------------------- | ----------------------------- | ------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoIcon`                  | `ino-icon`                    | Indicates a leading icon in the tab.                                                  | `string`  | `undefined` |
| `inoIndicatorContentWidth` | `ino-indicator-content-width` | Indicates that the tab only expands to the width of its content.                      | `boolean` | `false`     |
| `inoLabel`                 | `ino-label`                   | Indicates a label text in the tab.                                                    | `string`  | `undefined` |
| `inoStacked`               | `ino-stacked`                 | Indicates that the tab icon and label should flow vertically instead of horizontally. | `boolean` | `false`     |


## Events

| Event      | Description                      | Type                |
| ---------- | -------------------------------- | ------------------- |
| `loadEl`   | Emitted when the tab did load.   | `CustomEvent<void>` |
| `unloadEl` | Emitted when the tab did unload. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
