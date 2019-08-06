# ino-radio

A radio component that allows the user to select one option from a set. with label. around the material [radio](https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio) component.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-radio')
  .addEventListener('checkedChange', e =>
    alert(
      `The radio button should be ${
        e.detail === true ? 'checked' : 'unchecked'
      }`
    )
  );
```

```html
<ino-radio
  checked
  disabled
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

The input has a controlled (unmanaged) attribute `checked`. For this reason, listen to `checkedChange`, sync it with your local state and pass the new value to the component again to change the value of input.

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

| Property      | Attribute      | Description                                    | Type      | Default     |
| ------------- | -------------- | ---------------------------------------------- | --------- | ----------- |
| `checked`     | `checked`      | Marks this element as checked (**unmanaged**). | `boolean` | `false`     |
| `disabled`    | `disabled`     | Disables this element.                         | `boolean` | `undefined` |
| `inoId`       | `ino-id`       | The id of this element.                        | `string`  | `undefined` |
| `inoTabindex` | `ino-tabindex` | The tabIndex of this element.                  | `number`  | `undefined` |
| `name`        | `name`         | The name of this element.                      | `string`  | `undefined` |
| `value`       | `value`        | The value of this element.                     | `string`  | `undefined` |


## Events

| Event           | Description                                                                        | Type                |
| --------------- | ---------------------------------------------------------------------------------- | ------------------- |
| `checkedChange` | Emits when the user enters some keystrokes. Contains typed input in `event.detail` | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
