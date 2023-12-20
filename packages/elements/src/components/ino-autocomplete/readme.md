# ino-autocomplete



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


## Overview

`ino-autocomplete` is a component that acts similarly to the native `datalist` feature of the `<input>` element.

Unlike other components, `ino-autocomplete` is stateful, meaning it maintains its own state. This makes it less
flexible to some extent compared to stateless components.

## Responsibilities
The component handles the following tasks:
- Management of the `value` property of the `<ino-input>` element.
- Management of showing and hiding the different options based on the input.
- Keyboard navigation among the options.

## Filtering
The options are filtered using `.includes(...)`, which ignores case sensitivity.

## Properties

| Property               | Attribute         | Description                                                                                              | Type                                        | Default                      |
| ---------------------- | ----------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ---------------------------- |
| `debounce`             | `debounce`        | Number of ms the search function should be delayed after the user typed something.                       | `number`                                    | `100`                        |
| `noOptionsText`        | `no-options-text` | Text to display when there are no options found, where `$` is the placeholder for the input of the user. | `string`                                    | `'Found No Results for "$"'` |
| `options` _(required)_ | --                | All options either as a string array or as an array of `{key: string; value: string}` objects.           | `KeyValue[] \| string[]`                    | `undefined`                  |
| `value`                | `value`           | The selected value.                                                                                      | `string \| { key: string; value: string; }` | `undefined`                  |


## Events

| Event         | Description                                                                                                                                                                                                                                                                      | Type                                                     |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `valueChange` | Emits the list item the user clicked on either as a string or a `{key: string; value: string}` object depending on the provided options.  Trigger on two occasions: 1. The user clicked on a list-item. 2. The user types in a string that matches an option and blurs the input | `CustomEvent<string \| { key: string; value: string; }>` |


## Slots

| Slot      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `"input"` | An `<ino-input>` element that will be controlled by this component |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
