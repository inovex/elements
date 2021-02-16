# ino-popover

A Popover is a dialog which is bound to a specific element and appears next to it. Under the
hood, [tippy.js](https://atomiks.github.io/tippyjs/) is used.

The Popover
and [Tooltip](https://elements.inovex.de/dist/latest/storybook/?path=/story/notification-ino-tooltip--default-usage)
components are very similar. However, popovers are complex dialogs consisting of several HTML elements, while tooltips
can only display plain text.

### Usage

The component can be used as follows:

```html

<ino-popover ino-for="<string>" ino-placement="<string>" ino-trigger="<string>">
  Any desired HTML
</ino-popover>
```

#### Controlled vs. Uncontrolled

There are currently two ways you can manage the state of the popover.

_Uncontrolled_

Either you use the `ino-trigger` property to define the method when the popover should be opened or closed (e.g. hovering in opens and hovering out closes the popover). 
This is the easiest way as you don't have to worry about managing this state yourself.

```jsx
// ...

class MyComponent extends Component {
  render() {
    return (
      <div>
        <InoButton id="my-target">Open Popover</InoButton>
        <InoPopover inoFor="my-target" inoTrigger="mouseenter">
          This popover will show as soon as the user hovers the button above
        </InoPopover>
      </div>
    );
  }
}
```
_Controlled_

Or you use the `ino-open` property to show/hide the popover by yourself. 
This is helpful if you want to implement custom logic when the popover should be shown or hid.

```jsx
// ...

class MyComponent extends Component {

  state = {
    showPopover: false
  };

  togglePopover = () => {
    if (this.props.someProp) return; // Some condition
    
    this.setState({ showPopover: !this.state.showPopover });
  }

  render() {
    return (
      <div>
        <InoButton id="my-target" onClick={this.togglePopover}>
          Open Popover
        </InoButton>
        <InoPopover inoFor="my-target" inoShow={this.state.showPopover}>
          This popover will show as soon as the user hovers the button above
        </InoPopover>
      </div>
    );
  }
}
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

const Popover: React.FunctionComponent<Components.InoPopoverAttributes> = (
  props,
) => {
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
| `inoInteractive` | `ino-interactive`  | Use this if you want to interact with the popover content (e.g. button clicks)                                                           | `boolean`                                                                                                                                                                                                                                                                                                                              | `false`              |
| `inoPlacement`   | `ino-placement`    | The placement of this popover. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)` | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`                                                                                                                           | `'auto'`             |
| `inoShow`        | `ino-show`         | Programmatically show or hide the popover. Using this property disables the functionality of the `inoTrigger` prop.                      | `boolean`                                                                                                                                                                                                                                                                                                                              | `undefined`          |
| `inoTrigger`     | `ino-trigger`      | The trigger to show the tooltip - either click, hover or focus. Multiple triggers are possible by separating them with a space.          | `"click focus mouseenter" \| "click focus" \| "click mouseenter focus" \| "click mouseenter" \| "click" \| "focus click mouseenter" \| "focus click" \| "focus mouseenter click" \| "focus mouseenter" \| "focus" \| "mouseenter click focus" \| "mouseenter click" \| "mouseenter focus click" \| "mouseenter focus" \| "mouseenter"` | `'mouseenter focus'` |

## Events

| Event          | Description                                                                                                           | Type                |
| -------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `clickOutside` | Emits when an element which is not part of the popover is clicked. Should be used if you use the `ino-show` property. | `CustomEvent<void>` |

## Methods

### `getTippyInstance() => Promise<any>`

Returns the internally used tippy.js instance For more informations see: https://atomiks.github.io/tippyjs/

#### Returns

Type: `Promise<any>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
