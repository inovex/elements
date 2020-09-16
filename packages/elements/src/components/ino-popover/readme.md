# ino-popover

A Popover is a dialog which is bound to a specific element and appears on top of the current page. It uses [tippy.js](https://atomiks.github.io/tippyjs/) to position the popover correctly.

The Popover and [Tooltip](https://elements.inovex.de/dist/latest/storybook/?path=/story/notification-ino-tooltip--default-usage) components are very similar. 
However, popovers are complex dialogs consisting of several HTML elements, while tooltips can only display plain text.

### Usage

The component can be used as follows:

```html
<ino-popover ino-for="<string>" ino-placement="<string" ino-trigger="<string>">
  Any desired HTML
</ino-popover>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoPopover } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoPopover inoPlacement="left" inoFor="popover-positions-target">
        This is a simple popover on the left
      </InoPopover>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoPopover } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const Popover: React.FunctionComponent<Components.InoPopoverAttributes> = props => {
  const { inoPlacement, inoFor } = props;

  return (
    <InoPopover inoPlacement={inoPlacement} inoFor={inoFor}>
      {props.children}
    </InoPopover>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Popover inoPlacement="left" inoFor="popover-positions-target">
        This is a simple popover on the left
      </Popover>
    );
  }
}
```

## Additional Hints

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                   | Default              |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `inoColorScheme` | `ino-color-scheme` | Sets the color scheme of the popup Valid options include: 'primary', 'secondary', 'light', 'transparent'                                 | `string`                                                                                                                                                                                                                                                                                                                               | `'primary'`          |
| `inoFor`         | `ino-for`          | The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.                                     | `string`                                                                                                                                                                                                                                                                                                                               | `undefined`          |
| `inoPlacement`   | `ino-placement`    | The placement of this popover. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)` | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`                                                                                                                           | `'auto'`             |
| `inoTrigger`     | `ino-trigger`      | The trigger to show the tooltip - either click, hover or focus. Multiple triggers are possible by separating them with a space.          | `"click focus mouseenter" \| "click focus" \| "click mouseenter focus" \| "click mouseenter" \| "click" \| "focus click mouseenter" \| "focus click" \| "focus mouseenter click" \| "focus mouseenter" \| "focus" \| "mouseenter click focus" \| "mouseenter click" \| "mouseenter focus click" \| "mouseenter focus" \| "mouseenter"` | `'mouseenter focus'` |


## Methods

### `getTippyInstance() => Promise<any>`

Returns the internally used tippy.js instance
For more informations see: https://atomiks.github.io/tippyjs/

#### Returns

Type: `Promise<any>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
