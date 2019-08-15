# ino-radio

A radio component that allows the user to select one option from a set of radio-buttons. This components functions as a wrapper around the material [radio](https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio) component.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-radio')
  .addEventListener('checkedChange', _ =>
    alert(
      `The radio button should be checked`
    )
  );
```

```html
<ino-radio
  checked="<boolean>"
  disabled="<boolean>"
  name="<string>"
  value="<string>"
  ino-id="<string>"
  ino-tab-index="<string>"
  oncheckedChange="handleCheckedChange()"
>
  Label
</ino-radio>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoRadio } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoRadio checked name="radio-1">
        Checked
      </InoRadio>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoRadio } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const Radio: React.FunctionComponent<Components.InoRadioAttributes> = props => {
  const { checked, name } = props;

  return (
    <InoRadio checked={checked} name={name}>
      {props.children}
    </InoRadio>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Radio checked name="radio-1">
        Checked
      </Radio>
    );
  }
}
```

## Additional Hints

### Control flow

Clicking on the radio button triggers an event that has the boolean value `true` (`e.detail`). This event is only triggered if the radio button was not previously selected (`checked=false`). If there are several radio buttons in a group (same `name`), there can only be a single element with the state `checked=true`. If this property (`checked=true`) is passed to another element, the other elements in this group will be unchecked (`checked=false`).

```js
document.querySelector('ino-radio').addEventListener('checkedChange', e => {
  // ...
});
```

```html
<ino-radio
  checked={this.state.checked}
  checkedChange={e => this.state.checked = e.detail}>
</ino-radio>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                | Type      | Default     |
| ------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `checked`     | `checked`      | Initially marks this element as checked. If another ino-radio element in the same group receives `true`, the value will be changed to false automatically. | `boolean` | `false`     |
| `disabled`    | `disabled`     | Disables this element.                                                                                                                                     | `boolean` | `undefined` |
| `inoId`       | `ino-id`       | The id of this element                                                                                                                                     | `string`  | `undefined` |
| `inoTabindex` | `ino-tabindex` | The tabIndex of this element.                                                                                                                              | `number`  | `undefined` |
| `name`        | `name`         | The name of this element. Use the same name for radio groups                                                                                               | `string`  | `undefined` |
| `value`       | `value`        | The value of this element.                                                                                                                                 | `string`  | `undefined` |


## Events

| Event           | Description                                                                                                                                                                | Type                |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `checkedChange` | Emits when the user interacts with the radio-button. Contains `true` in `event.detail`. This event will only be emitted if the current state of the radio button is false. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
