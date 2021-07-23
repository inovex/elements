# ino-form-row

A component that styles a form element as a row with a leading label.

### Usage

The component can be used as follows:

```html

<ino-form-row label="<string>" mandatory>
  Any desired form element
</ino-form-row>
```

### React

#### Example #1 - Basic

```jsx
import { Component } from 'react';
import { InoFormRow, InoInput } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <>
        <InoFormRow label="This is a form row" mandatory>
          <InoInput></InoInput>
        </InoFormRow>
        <InoFormRow label="This is another form row" mandatory>
          <InoInput></InoInput>
        </InoFormRow>
        <InoFormRow label="This is one more form row without mandatory field">
          <InoInput></InoInput>
        </InoFormRow>
      </>
    );
  }
}
```

#### Example #2 - With Types

```jsx
import React, { Component } from 'react';
import { InoFormRow, InoInput } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const FormRow: React.FunctionComponent<Components.InoFormRowAttributes> = props => {
  const { label, mandatory } = props;

  return <InoFormRow label={label} mandatory={mandatory}>{props.children}</InoFormRow>
};

class MyComponent extends Component {
  render() {
    return (
      <>
        <FormRow label="This is a form row" mandatory>
          <InoInput></InoInput>
        </FormRow>
        <FormRow label="This is another form row" mandatory>
          <InoInput></InoInput>
        </FormRow>
        <FormRow label="This is one more form row without mandatory field">
          <InoInput></InoInput>
        </FormRow>
      </>
    )
  }
}
```

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                          | Type     | Default |
| ----------------- | ------------------ | -------------------------------------------------------------------- | -------- | ------- |
| `debounceTimeout` | `debounce-timeout` | Timeout of the debouncing mechanism used when filtering the options. | `number` | `300`   |


## Events

| Event            | Description                                                                                                                                                                                                              | Type                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- |
| `optionSelected` | Emits in three ways:  1. Clicking on a list item 2. Pressing `Enter` while a list item is selected 3. Entering a valid value and blurring the input element  Contains one of the texts provided by the <ino-list-item>s. | `CustomEvent<string>` |


## Slots

| Slot      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `"input"` | An `ino-input` element that will be controlled by this component |
| `"list"`  | An `ino-list` element with `ino-list-item` as options            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
