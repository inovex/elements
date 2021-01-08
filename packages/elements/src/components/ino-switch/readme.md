# ino-switch

Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-switch')
  .addEventListener('checkedChange', (e) =>
    alert(`The checked state is: ${e.detail}`),
  );
```

```html
<ino-switch checked disabled ino-color-scheme="<string>" name="<string>">
  Label
</ino-switch>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoSwitch } from '@inovex.de/elements-react';

class MyComponent extends Component {
  state = {
    checked: false,
  };

  handleCheckboxClick(e) {
    this.setState({ checked: e.detail });
  }

  render() {
    return (
      <InoSwitch
        checked={this.state.checked}
        onCheckedChange={handleCheckboxClick}
      >
        Apple
      </InoSwitch>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoSwitch } from '@inovex.de/elements-react';
import { Components } from '@inovex.de/elements-react/dist/types/components';

const Switch: React.FunctionComponent<Components.InoSwitchAttributes> = (
  props,
) => {
  const { value, onClick, checked } = props;

  return (
    <InoSwitch value={value} onCheckedChange={onClick} checked={checked}>
      {value}
    </InoSwitch>
  );
};

class MyComponent extends Component {
  state = {
    checked: false,
  };

  handleCheckboxClick(e) {
    this.setState({ checked: e.detail });
  }

  render() {
    return (
      <Switch
        value={'Apple'}
        checked={this.state.checked}
        onClick={handleCheckboxClick}
      />
    );
  }
}
```

## Control flow

The input has a controlled (unmanaged) attribute `checked`. For this reason listen to `checkedChange`, sync it with your local state and pass the new value to the component again to change the value.

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute          | Description                                                                                                                                                                                          | Type                                                                                 | Default     |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------- |
| `checked`        | `checked`          | Marks this element as checked. (**unmanaged**)                                                                                                                                                       | `boolean`                                                                            | `false`     |
| `disabled`       | `disabled`         | Disables this element.                                                                                                                                                                               | `boolean`                                                                            | `undefined` |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default), `secondary`, `success`, `warning`, `error`, `light`, `dark`. | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `name`           | `name`             | The name of this element.                                                                                                                                                                            | `string`                                                                             | `undefined` |

## Events

| Event           | Description                                                                                                    | Type               |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------------------ |
| `checkedChange` | Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`. | `CustomEvent<any>` |

## CSS Custom Properties

| Name                                   | Description                               |
| -------------------------------------- | ----------------------------------------- |
| `--ino-switch-active-color`            | border color of the switch if active      |
| `--ino-switch-active-thumb-color`      | thumb color of the switch if active       |
| `--ino-switch-active-track-color`      | track color of the switch if active       |
| `--ino-switch-disabled-color`          | border color of the switch if disabled    |
| `--ino-switch-disabled-thumb-color`    | thumb color of the switch if disabled     |
| `--ino-switch-disabled-track-color`    | track color of the switch if disabled     |
| `--ino-switch-hover-color`             | border color of the switch on hover       |
| `--ino-switch-hover-thumb-color`       | thumb color of the switch on hover        |
| `--ino-switch-hover-track-color`       | track color of the switch on hover        |
| `--ino-switch-toggled-off-color`       | border color of the switch if toggled off |
| `--ino-switch-toggled-off-thumb-color` | thumb color of the switch if toggled off  |
| `--ino-switch-toggled-off-track-color` | track color of the switch if toggled off  |
| `--ino-switch-toggled-on-color`        | border color of the switch if toggled on  |
| `--ino-switch-toggled-on-thumb-color`  | thumb color of the switch if toggled on   |
| `--ino-switch-toggled-on-track-color`  | track color of the switch if toggled on   |

---

_Built with [StencilJS](https://stenciljs.com/)_
