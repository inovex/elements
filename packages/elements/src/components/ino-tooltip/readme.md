# ino-tooltip



<!-- Auto Generated Below -->


## Overview

A tooltip component that displays text when users hover over, focus on, or tap an element.

> Note: A tooltip can only display plain text. For more complex dialogs, see the [Popover](https://elements.inovex.de/dist/latest/storybook/?path=/story/notification-ino-popover--default-usage) component.

## Properties

| Property      | Attribute      | Description                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                   | Default              |
| ------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `arrow`       | `arrow`        | Shows an arrow                                                                                                                                                                                                                                                           | `boolean`                                                                                                                                                                                                                                                                                                                              | `false`              |
| `colorScheme` | `color-scheme` | Sets the color scheme of the tooltip.  Valid options include: `light`, `dark` or `primary`                                                                                                                                                                               | `"dark" \| "light" \| "primary"`                                                                                                                                                                                                                                                                                                       | `'primary'`          |
| `delay`       | `delay`        | The delay in milliseconds before `ino-tooltip` shows up or hides.  If only one number is given, the show and hide delay get the given delay duration.  If two numbers are given e.g. `[500, 200]` the show delay is 500ms and the hide delay is 200ms.  Defaults to 0ms. | `[number, number] \| number`                                                                                                                                                                                                                                                                                                           | `0`                  |
| `disabled`    | `disabled`     | Disables the `ino-tooltip`                                                                                                                                                                                                                                               | `boolean`                                                                                                                                                                                                                                                                                                                              | `false`              |
| `for`         | `for`          | The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.                                                                                                                                                                     | `string`                                                                                                                                                                                                                                                                                                                               | `undefined`          |
| `headerText`  | `header-text`  | Adds an optional header text to the `ino-tooltip`                                                                                                                                                                                                                        | `string`                                                                                                                                                                                                                                                                                                                               | `undefined`          |
| `label`       | `label`        | <span style="color:red">**[DEPRECATED]**</span> <br/><br/>The text shown in the tooltip.  [DEPRECATED] Please use the default slot instead                                                                                                                               | `string`                                                                                                                                                                                                                                                                                                                               | `undefined`          |
| `placement`   | `placement`    | The placement of the tooltip. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)`                                                                                                                                  | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`                                                                                                                           | `'auto'`             |
| `trigger`     | `trigger`      | The trigger to show the tooltip - either `click`, `hover` or `focus`. Multiple triggers possible by separating them with a space.                                                                                                                                        | `"click focus mouseenter" \| "click focus" \| "click mouseenter focus" \| "click mouseenter" \| "click" \| "focus click mouseenter" \| "focus click" \| "focus mouseenter click" \| "focus mouseenter" \| "focus" \| "mouseenter click focus" \| "mouseenter click" \| "mouseenter focus click" \| "mouseenter focus" \| "mouseenter"` | `'mouseenter focus'` |


## Methods

### `getTippyInstance() => Promise<any>`

Returns the internally used tippy.js instance
For more information see: https://atomiks.github.io/tippyjs/

#### Returns

Type: `Promise<any>`




## Slots

| Slot                                       | Description |
| ------------------------------------------ | ----------- |
| `"default The text shown in the tooltip."` |             |


## Dependencies

### Used by

 - [ino-fab](../ino-fab)

### Graph
```mermaid
graph TD;
  ino-fab --> ino-tooltip
  style ino-tooltip fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
