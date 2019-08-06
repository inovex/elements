# ino-checkbox

A checkbox that allows the user to select one or more items from a set.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-checkbox')
  .addEventListener('checkedChange', e =>
    alert(`The checked state is: ${e.detail}`)
  );
```

```html
<ino-checkbox
  checked
  disabled
  name="<string>"
  value="<string>"
  indeterminate
  ino-id="<string>"
  ino-tab-index="<number>"
>
  Label
</ino-checkbox>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoCheckbox } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  state = {
    checked: false
  };

  handleCheckboxClick() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <InoCheckbox
        value="Apple"
        onClick={_ => this.handleCheckboxClick()}
        checked={this.state.checked}
      >
        Apple
      </InoCheckbox>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoCheckbox } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const Checkbox: React.FunctionComponent<Components.InoCheckboxAttributes> = props => {
  const { value, onClick, checked } = props;

  return (
    <InoCheckbox value={value} onClick={onClick} checked={checked}>
      {value}
    </InoCheckbox>
  );
};

class MyComponent extends Component {
  state = {
    checked: false
  };

  handleCheckboxClick() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <Checkbox
        value="Apple"
        onClick={_ => this.handleCheckboxClick()}
        checked={this.state.checked}
      >
        Apple
      </Checkbox>
    );
  }
}
```

## Additional Hints

By default, the label is always shown right after the checkbox.

**Indeterminate:** The indeterminate status is set by the user. It indicates that a user is indeterminate without changing the checked state. If a checkbox is set unchecked and indeterminate then it will lose the indeterminate state on click and change to checked. [Documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)

## Control flow

The input has a controlled (unmanaged) attribute `checked` and `indeterminate`. For this reason listen to `checkedChange`, sync it with your local state and pass the new value to the component again to change value and indeterminate state of input:

## Demo

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                         | Type      | Default     |
| --------------- | --------------- | --------------------------------------------------- | --------- | ----------- |
| `checked`       | `checked`       | Marks this element as checked. (**unmanaged**)      | `boolean` | `false`     |
| `disabled`      | `disabled`      | Disables this element.                              | `boolean` | `undefined` |
| `indeterminate` | `indeterminate` | Marks this element as indeterminate (**unmanaged**) | `boolean` | `undefined` |
| `inoId`         | `ino-id`        | The id of this element.                             | `string`  | `undefined` |
| `inoTabindex`   | `ino-tabindex`  | The tab index of this element.                      | `number`  | `undefined` |
| `name`          | `name`          | The name of this element.                           | `string`  | `undefined` |
| `value`         | `value`         | The value of this element.                          | `string`  | `undefined` |


## Events

| Event           | Description                                                                                                    | Type                |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------------------- |
| `checkedChange` | Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
