# ino-autocomplete

A component that acts similar to the native `datalist` feature of the `<input>` element.

In contrast to other components, this one is stateful, which means that it contains its own state and is therefore less
flexible to some extent.

This component handles the following tasks:

* Management of the `value` property of the `<ino-input>` element
* management of showing and hiding the different options filtered on the basis of the input
* Keyboard navigation on the options

The options are filtered by `.includes(...)`, ignoring upper and lower case.

### Usage

The component can be used as follows:

```html

<ino-autocomplete timeout="<number>" no-options-text="<string>">
  <ino-input slot="input" .../>
  <ino-list slot="list" ...>
    <ino-option value="Value of Option A">Option A</ino-option>
    <ino-option value="Value of Option B">Option B</ino-option>
    <ino-option value="Value of Option C">Option C</ino-option>
  </ino-list>
</ino-autocomplete>
```

### React

```jsx
import { Component } from 'react';
import { InoAutocomplete, InoInput, InoList, InoListItem } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <>
        <InoAutocomplete debounceTimeout={150} noOptionsText={"No option found!"}>
          <InoInput slot="input"/>
          <InoList slot="list">
            <InoOption value="Value of Option A">Option A</InoOption>
            <InoOption value="Value of Option B">Option B</InoOption>
            <InoOption value="Value of Option C">Option C</InoOption>
          </InoList>
        </InoAutocomplete>
      </>
    );
  }
}
```

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                          | Type     | Default       |
| ----------------- | ------------------ | -------------------------------------------------------------------- | -------- | ------------- |
| `debounceTimeout` | `debounce-timeout` | Timeout of the debouncing mechanism used when filtering the options. | `number` | `300`         |
| `noOptionsText`   | `no-options-text`  | Text to display when there are no options found.                     | `string` | `'No Option'` |
| `value`           | `value`            | Value of the autocomplete                                            | `any`    | `undefined`   |


## Events

| Event         | Description                                                                                                                                                                                                          | Type                  |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| `valueChange` | Emits in three ways:  1. Clicking on an option 2. Pressing `Enter` while an option is selected 3. Entering a valid value and blurring the input element  Contains one of the texts provided by the `<ino-options>`s. | `CustomEvent<string>` |


## Slots

| Slot        | Description                                                        |
| ----------- | ------------------------------------------------------------------ |
| `"default"` | A list of `<ino-option>` elements as options                       |
| `"input"`   | An `<ino-input>` element that will be controlled by this component |


## CSS Custom Properties

| Name                                 | Description               |
| ------------------------------------ | ------------------------- |
| `--ino-autocomplete-list-max-height` | max height of option list |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
