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

<ino-autocomplete timeout="<number>">
  <ino-input slot="input" .../>
  <ino-list slot="list" ...>
    <ino-list-item text="Option A"></ino-list-item>
    <ino-list-item text="Option B"></ino-list-item>
    <ino-list-item text="Option C"></ino-list-item>
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
        <InoAutocomplete debounceTimeout="<number>">
          <InoInput slot="input"/>
          <InoList slot="list">
            <InoListItem text="Option A"></InoListItem>
            <InoListItem text="Option B"></InoListItem>
            <InoListItem text="Option C"></InoListItem>
          </InoList>
        </InoAutocomplete>
      </>
    );
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
