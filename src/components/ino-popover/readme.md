# ino-popover

A Popover is a dialog which is bound to a specific element and appears on top of the current page. It is based on [tooltip.js](https://github.com/FezVrasta/popper.js#tooltipjs) to position the popover.

The Popover and [Tooltip](https://elements.inovex.io/dist/latest/storybook/?selectedKind=<ino-tooltip>&selectedStory=Default%20usage) components are very similar. However, whereas tooltips can only display plain text, popovers are complex dialogs with many HTML elements.

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
import { InoPopover } from '@inovex/elements/dist/react';

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
import { InoPopover } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

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

| Property       | Attribute       | Description                                                                                                                              | Type                                                                                                                                                                                                                                                                            | Default         |
| -------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `inoFor`       | `ino-for`       | The target id the tooltip belongs to. If not given, the tooltip is attached to the parent component.                                     | `string`                                                                                                                                                                                                                                                                        | `undefined`     |
| `inoPlacement` | `ino-placement` | The placement of this popover. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)` | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`                                                                    | `'auto'`        |
| `inoTrigger`   | `ino-trigger`   | The trigger to show the tooltip - either click, hover or focus. Multiple triggers are possible by separating them with a space.          | `"click focus hover" \| "click focus" \| "click hover focus" \| "click hover" \| "click" \| "focus click hover" \| "focus click" \| "focus hover click" \| "focus hover" \| "focus" \| "hover click focus" \| "hover click" \| "hover focus click" \| "hover focus" \| "hover"` | `'hover focus'` |

---

_Built with [StencilJS](https://stenciljs.com/)_
