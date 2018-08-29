# ino-popover
A Popover is a dialog which is bound to a specific element and appears on top of the current page. It is based on [tooltip.js](https://github.com/FezVrasta/popper.js#tooltipjs) to position the popover.

The Popover and [Tooltip](https://elements.inovex.io/master/storybook/?selectedKind=<ino-tooltip>&selectedStory=Default%20usage) components are very similar. However, whereas tooltips can only display plain text, popovers are complex dialogs with many HTML elements.

### Usage
The component can be used as follows:

```html
<ino-popover
  ino-for="<string>"
  ino-placement="<string"
  ino-trigger="<string>">

  Any desired HTML 

</ino-popover>
```


<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                              | Type        |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `inoFor`       | `ino-for`       | The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.                                     | `string`    |
| `inoPlacement` | `ino-placement` | The placement of this popover. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)` | `Placement` |
| `inoTrigger`   | `ino-trigger`   | The trigger to show the tooltip - either click, hover or focus. Multiple triggers are possible by separating them with a space.          | `string`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
