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

<ino-popover
  color-scheme="<string>"
  controlled="<boolean>"
  distance="<number>"
  for="<string>"
  interactive="<boolean>"
  placement="<string>" 
  trigger="<string>"
  visible="<boolean>"
>
  Any desired HTML
</ino-popover>
```

#### Targets
There are currently three ways to attach your popover to a component, which results in a slightly different structure:

1. Using the `popover-trigger` slot _(preferred)_:

```html
<ino-popover trigger="click">
    <ino-button slot="popover-trigger">Click to show/hide</ino-button>
    <custom-html-content></custom-html-content>
</ino-popover>
```

```html
<ino-popover>
├── <ino-button>
└── <custom-html-content>
```

2. Using the `for` property:

```html
<ino-button id="my-target" slot="popover-trigger">Click to show/hide</ino-button>
<ino-popover for="my-target" trigger="click">
  <custom-html-content></custom-html-content>
</ino-popover>
```

```html
<ino-button>
<ino-popover>
└── <custom-html-content>
```

3. Using the parent element:

```html
<ino-button>
    Click to show/hide
    <ino-popover trigger="click">
      <custom-html-content></custom-html-content>
    </ino-popover>
</ino-button>
```

```html
<ino-button>
└── <ino-popover>
    └── <custom-html-content>
```


#### Controlled vs. Uncontrolled

There are currently two ways you can manage the state of the popover.

_Uncontrolled_

Either you use the `trigger` property to define the method when the popover should be opened or closed (e.g. hovering in opens and hovering out closes the popover). 
This is the easiest way as you don't have to worry about managing this state yourself.

```tsx
// ...

class MyComponent extends Component {
  render() {
    return (
      <div>
        <InoPopover trigger="mouseenter">
          <InoButton slot="popover-trigger">Open Popover</InoButton>
          This popover will show as soon as the user hovers the button above
        </InoPopover>
      </div>
    );
  }
}
```

_Controlled_

Or you use the `controlled` and `visible` property to show/hide the popover by yourself. 
This is helpful if you want to implement custom logic when the popover should be shown or hidden.

```tsx
// ...

class MyComponent extends Component {

  state = {
    showPopover: false
  };

  setPopoverState = (show: boolean) => {
    if (this.props.someProp) return; // Some condition
    
    this.setState({ showPopover: show });
  }

  render() {
    return (
      <div>
        <InoPopover 
          inoControlled 
          inoVisible={this.state.showPopover}
          onInoVisibleChanged={(e) => setPopoverState(e.detail)}
        >
          <InoButton slot="popover-trigger">
            Open Popover
          </InoButton>
          This popover will show as soon as the user clicks the button above
        </InoPopover>
      </div>
    );
  }
}
```

### React

#### Example #1 - Basic

```tsx
import { Component } from 'react';
import { InoPopover } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoPopover placement="left" for="popover-positions-target">
        This is a simple popover on the left
      </InoPopover>
    );
  }
}
```

#### Example #2 - With Types

```tsx
import React, { Component } from 'react';
import { InoPopover } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const Popover: React.FunctionComponent<Components.InoPopoverAttributes> = (
  props,
) => {
  const { placement, for } = props;

  return (
    <InoPopover placement={placement} for={for}>
      {props.children}
    </InoPopover>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Popover placement="left" for="popover-positions-target">
        This is a simple popover on the left
      </Popover>
    );
  }
}
```

## Additional Hints

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                                                         | Type                                                                                                                                                                                                                                                                                                                                   | Default              |
| ------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| `colorScheme` | `color-scheme` | Sets the color scheme of the popup Valid options include: 'primary', 'secondary', 'light', 'transparent'                                                                                            | `"light" \| "primary" \| "secondary" \| "transparent"`                                                                                                                                                                                                                                                                                 | `'primary'`          |
| `controlled`  | `controlled`   | Used to indicate if the popover should be controlled by itself (`false`) or manually by the `visible` property (`true`)                                                                             | `boolean`                                                                                                                                                                                                                                                                                                                              | `false`              |
| `distance`    | `distance`     | Displaces the popover away from, or toward, the anchor element in the direction of its placement. A positive number displaces it further away, while a negative number lets it overlap the anchor.  | `number`                                                                                                                                                                                                                                                                                                                               | `10`                 |
| `for`         | `for`          | The target id the popover belongs to. If not given, the popover is attached to the element provided in the named slot (`popover-trigger`) or the parent component if a slot element does not exist. | `string`                                                                                                                                                                                                                                                                                                                               | `undefined`          |
| `interactive` | `interactive`  | Use this if you want to interact with the popover content (e.g. button clicks)                                                                                                                      | `boolean`                                                                                                                                                                                                                                                                                                                              | `false`              |
| `placement`   | `placement`    | The placement of this popover. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)`                                                            | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"`                                                                                                                           | `'auto'`             |
| `trigger`     | `trigger`      | The trigger to show the tooltip - either click, hover or focus. Multiple triggers are possible by separating them with a space.                                                                     | `"click focus mouseenter" \| "click focus" \| "click mouseenter focus" \| "click mouseenter" \| "click" \| "focus click mouseenter" \| "focus click" \| "focus mouseenter click" \| "focus mouseenter" \| "focus" \| "mouseenter click focus" \| "mouseenter click" \| "mouseenter focus click" \| "mouseenter focus" \| "mouseenter"` | `'mouseenter focus'` |
| `visible`     | `visible`      | Programmatically show or hide the popover. Can only be used in controlled mode (see property `controlled`). Use the `visibleChanged` to sync the popovers' visibility state with yours.             | `boolean`                                                                                                                                                                                                                                                                                                                              | `false`              |


## Events

| Event            | Description                                                                                                                                                                                                                                                                                                                                                           | Type                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `visibleChanged` | Emits when the popover wants to show (`true`) or hide (`false`) itself. This is depended on the `trigger` property. Use this event in controlled-mode (see `controlled`).  e.g.: `trigger = 'click'` - This events emits with `true` when the user clicks on the target (slot/`for`/parent-element) and emits with `false` when the target or the outside is clicked. | `CustomEvent<boolean>` |


## Methods

### `getTippyInstance() => Promise<any>`

Returns the internally used tippy.js instance
For more informations see: https://atomiks.github.io/tippyjs/

#### Returns

Type: `Promise<any>`




## Slots

| Slot                | Description                                  |
| ------------------- | -------------------------------------------- |
| `"default"`         | Content of the popover                       |
| `"popover-trigger"` | The target element to attach the triggers to |


## Dependencies

### Used by

 - [ino-markdown-editor](../ino-markdown-editor)
 - [ino-menu](../ino-menu)

### Graph
```mermaid
graph TD;
  ino-markdown-editor --> ino-popover
  ino-menu --> ino-popover
  style ino-popover fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
