# ino-radio-group

A wrapper component to be used for a group of ino-radio-buttons. This component manages the single selection functionality of a group of ino-radio-buttons. Due to the shadow DOM implementation of the `ino-radio`-Element the `name`-Property cannot be used to achieve the single selection functionality.

### Usage

```html
<ino-radio-group value="Option 1">
  <ino-radio value="Option 1">I will be checked</ino-radio>
  <ino-radio value="Option 2">Option 2</ino-radio>
  <ino-radio value="Option 3">Option 3</ino-radio>
</ino-radio-group>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoRadio, InoRadioGroup } from '@inovex.de/elements-react/dist';

class MyComponent extends Component {
  state = {
    selected: 'Option 1',
  };

  clickHandler = (value) => {
    this.setState({ selected: value });
  };

  render() {
    return (
      <InoRadioGroup value={this.state.selected}>
        <InoRadio
          onValueChange={() => this.clickHandler('Option 1')}
          value="Option 1"
        >
          I will be checked
        </InoRadio>
        <InoRadio
          onValueChange={() => this.clickHandler('Option 2')}
          value="Option 2"
        >
          Option 2
        </InoRadio>
        <InoRadio
          onValueChange={() => this.clickHandler('Option 3')}
          value="Option 3"
        >
          Option 3
        </InoRadio>
      </InoRadioGroup>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoRadioGroup } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const RadioGroup: React.FunctionComponent<Components.InoRadioGroupAttributes> = (
  props,
) => {
  const { value } = props;

  return <InoRadioGroup value={value}>{props.children}</InoRadioGroup>;
};

class MyComponent extends Component {
  render() {
    return <RadioGroup value={'Option 1'}>...</RadioGroup>;
  }
}
```

## Additional Hints

### Control flow

In order to change the checked element (and uncheck the other ones) listen to the `valueChange`-Event emitted by the `ino-radio` and pass it's value to the `ino-radio-group` via the `value`-Property.

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                | Type  | Default     |
| -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- | ----------- |
| `value`  | `value`   | The value of the radio group. If there is an ino-radio-child with the given value, the radio-button will be checked and the other radio-buttons unchecked. | `any` | `undefined` |


## Slots

| Slot        | Description             |
| ----------- | ----------------------- |
| `"default"` | One or more `ino-radio` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
