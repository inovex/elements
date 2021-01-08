# ino-segment-button

A button component that can be used in combination with the ino-segment-group component.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-segment-button')
  .addEventListener('click', () => alert('Button was clicked!'));
```

```html
<ino-segment-button checked disabled name="<string>" ino-dense value="<string>">
  Button Content
</ino-segment-button>
```

### React

```js
import { Component } from 'react';
import { InoSegmentButton } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoSegmentButton onClick={(_) => alert('Yeah, you clicked the button!')}>
        You can click me!
      </InoSegmentButton>
    );
  }
}
```

<!-- Auto Generated Below -->

## Properties

| Property   | Attribute   | Description                               | Type      | Default     |
| ---------- | ----------- | ----------------------------------------- | --------- | ----------- |
| `checked`  | `checked`   | Activates the button                      | `boolean` | `false`     |
| `disabled` | `disabled`  | Disables the button                       | `boolean` | `false`     |
| `inoDense` | `ino-dense` | Slightly decreases the size of the button | `boolean` | `false`     |
| `name`     | `name`      | Name of the element                       | `string`  | `undefined` |
| `value`    | `value`     | Value of the element                      | `string`  | `undefined` |

## Events

| Event           | Description                                                                                                       | Type               |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------ |
| `checkedChange` | Emits if the user interacts with the button. If the button is disabled or checked, the event will not be emitted. | `CustomEvent<any>` |

## CSS Custom Properties

| Name                                  | Description                              |
| ------------------------------------- | ---------------------------------------- |
| `--ino-segment-button-checked-color`  | Color of the segment button if checked   |
| `--ino-segment-button-checked-shadow` | Color and shape of the shadow if checked |
| `--ino-segment-button-color`          | Color of the segment button if inactive  |
| `--ino-segment-button-disabled-color` | Color of the segment button if disabled  |
| `--ino-segment-button-hover-color`    | Color of the segment button on hover     |
| `--ino-segment-button-hover-shadow`   | Color and shape of the shadow on hover   |

---

_Built with [StencilJS](https://stenciljs.com/)_
