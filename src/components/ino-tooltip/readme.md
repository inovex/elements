# ino-tooltip
A tooltip component that displays text when users hover over, focus on, or tap an element.

> Note: A tooltip can only display plain text. For more complex dialogs, see the [Popover](https://elements.inovex.io/dist/latest/storybook/?selectedKind=<ino-popover>&selectedStory=Default%20usage) component.

### Usage
The component can be used as follows:

```html
<ino-tooltip
  ino-for="<string>"
  ino-label="<string>"
  ino-placement="<string"
  ino-trigger="<string>">

  Any desired HTML 

</ino-tooltip>
```


<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                             | Type                                                                                                                                                                                                                                                                            | Default         |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `inoFor`       | `ino-for`       | The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.                                    | `string`                                                                                                                                                                                                                                                                        | `undefined`     |
| `inoLabel`     | `ino-label`     | The text shown in the tooltip.                                                                                                          | `string`                                                                                                                                                                                                                                                                        | `undefined`     |
| `inoPlacement` | `ino-placement` | The placement of the tooltip. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)` | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`                                                                    | `'auto'`        |
| `inoTrigger`   | `ino-trigger`   | The trigger to show the tooltip - either click, hover or focus. Multiple triggers possible by separating them with a space.             | `"click focus hover" \| "click focus" \| "click hover focus" \| "click hover" \| "click" \| "focus click hover" \| "focus click" \| "focus hover click" \| "focus hover" \| "focus" \| "hover click focus" \| "hover click" \| "hover focus click" \| "hover focus" \| "hover"` | `'hover focus'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
