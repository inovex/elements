# ino-form-row

A component that styles a form element as a row with a leading label.

### Usage

The component can be used as follows:

```html
<ino-form-row ino-label="<string>" ino-mandatory>
  Any desired form element
</ino-form-row>
```

### React

#### Example #1 - Basic

```jsx harmony
import { Component } from 'react';
import { InoFormRow, InoInput } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoFormRow inoLabel="This is a form row" inoMandatory>
        <InoInput></InoInput>
      </InoFormRow>
      <InoFormRow inoLabel="This is another form row" inoMandatory>
        <InoInput></InoInput>
      </InoFormRow>
      <InoFormRow inoLabel="This is one more form row without mandatory field">
        <InoInput></InoInput>
      </InoFormRow>
    );
  }
}
```

#### Example #2 - With Types

```jsx harmony
import React, { Component } from 'react';
import { InoFormRow, InoInput } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const FormRow: React.FunctionComponent<Components.InoFormRowAttributes> = props => {
  const { inoLabel, inoMandatory } = props;

  return <InoFormRow inoLabel={inoLabel} inoMandatory={inoMandatory}>{props.children}</InoFormRow>
};

class MyComponent extends Component {
  render() {
    return (<FormRow inoLabel="This is a form row" inoMandatory>
      <InoInput></InoInput>
    </FormRow>
    <FormRow inoLabel="This is another form row" inoMandatory>
      <InoInput></InoInput>
    </FormRow>
    <FormRow inoLabel="This is one more form row without mandatory field">
      <InoInput></InoInput>
    </FormRow>);
  }
}
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                            | Type      | Default     |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `inoLabel`     | `ino-label`     | The label for this form row which describes the form element.                                                                                          | `string`  | `undefined` |
| `inoMandatory` | `ino-mandatory` | An indicator which marks the contents of the form row as mandatory. If you use this make sure you also check for the values in your application logic. | `boolean` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
