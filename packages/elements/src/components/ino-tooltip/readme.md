# ino-tooltip

A tooltip component that displays text when users hover over, focus on, or tap an element.

> Note: A tooltip can only display plain text. For more complex dialogs, see the [Popover](https://elements.inovex.io/dist/latest/storybook/?selectedKind=<ino-popover>&selectedStory=Default%20usage) component.

### Usage

The component can be used as follows:

```html
<ino-tooltip
  ino-for="<string>"
  ino-label="<string>"
  ino-placement="<string>"
  ino-trigger="<string>"
>
  Any desired HTML
</ino-tooltip>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoButton, InoTooltip } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoButton id="tooltip-button">Hover me to see the Tooltip!</InoButton>
      <InoTooltip inoFor="tooltip-button" inoLabel="This is the tooltip!" inoPlacement="top" inoTrigger="hover" />
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoButton, InoTooltip } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const Tooltip: React.FunctionComponent<Components.InoTooltipAttributes> = props => {
  const { inoPlacement, inoTrigger, inoFor, inoLabel } = props;

  return <InoTooltip inoFor={inoFor} inoLabel={inoLabel} inoPlacement={inoPlacement} inoTrigger={inoTrigger}>{props.children}</InoTooltip>
};

class MyComponent extends Component {
  render() {
    return (
      <InoButton id="tooltip-button">Hover me to see the Tooltip!</InoButton>
      <Tooltip inoFor="tooltip-button" inoLabel="This is the tooltip!" inoPlacement="top" inoTrigger="hover" />
    );
  }
}
```

## Additional Hints

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                             | Type                                                                                                                                                                                                                                                                                                                                   | Default              |
| ---------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `inoColorScheme` | `ino-color-scheme` | Sets the color scheme of the tooltip Valid options include: 'primary', 'secondary' 'light', 'transparent'                               | `string`                                                                                                                                                                                                                                                                                                                               | `'primary'`          |
| `inoFor`         | `ino-for`          | The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.                                    | `string`                                                                                                                                                                                                                                                                                                                               | `undefined`          |
| `inoLabel`       | `ino-label`        | The text shown in the tooltip.                                                                                                          | `string`                                                                                                                                                                                                                                                                                                                               | `undefined`          |
| `inoPlacement`   | `ino-placement`    | The placement of the tooltip. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)` | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`                                                                                                                           | `'auto'`             |
| `inoTrigger`     | `ino-trigger`      | The trigger to show the tooltip - either click, hover or focus. Multiple triggers possible by separating them with a space.             | `"click focus mouseenter" \| "click focus" \| "click mouseenter focus" \| "click mouseenter" \| "click" \| "focus click mouseenter" \| "focus click" \| "focus mouseenter click" \| "focus mouseenter" \| "focus" \| "mouseenter click focus" \| "mouseenter click" \| "mouseenter focus click" \| "mouseenter focus" \| "mouseenter"` | `'mouseenter focus'` |


## Methods

### `getTippyInstance() => Promise<any>`

Returns the internally used tippy.js instance
For more informations see: https://atomiks.github.io/tippyjs/

#### Returns

Type: `Promise<any>`




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
