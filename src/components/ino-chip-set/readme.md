# ino-chip-set

A compact component wrapping `ino-chip` elements and giving them a behavior.

> See the `ino-chip` documentation for more details about a single instance of a chip.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-chip-set')
  .addEventListener('updateChipSet', e =>
    alert(
      `The selected chip values are (only when ino-type='filter' or 'choice'): ${
        e.detail
      }`
    )
  );
```

```html
<ino-chip-set ino-type="<string>">
  <ino-chip ...></ino-chip>
  <ino-chip ...></ino-chip>
  ...
</ino-chip-set>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoChipSet, InoChip } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  chipsetSelectionChange(e: any) {
    console.log(
      e.detail === true
        ? 'The last one was toggled'
        : `User clicked: ${e.detail}`
    );
  }

  render() {
    return (
      <InoChipSet
        inoType="choice"
        onUpdateChipSet={this.chipsetSelectionChange}
      >
        <InoChip inoValue="apple" inoLabel="Apple" />
        <InoChip inoValue="banana" inoLabel="Banana" />
        <InoChip inoValue="cherry" inoLabel="Cherry" />
      </InoChipSet>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoChipSet, InoChip } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const ChipSet: React.FunctionComponent<Components.InoChipSetAttributes> = props => {
  const { inoType } = props;

  const chipsetSelectionChange = (e: any) => {
    console.log(
      e.detail === true
        ? 'The last one was toggled'
        : `User clicked: ${e.detail}`
    );
  };

  return (
    <InoChipSet inoType={inoType} onUpdateChipSet={chipsetSelectionChange}>
      <InoChip inoValue="apple" inoLabel="Apple" />
      <InoChip inoValue="banana" inoLabel="Banana" />
      <InoChip inoValue="cherry" inoLabel="Cherry" />
    </InoChipSet>
  );
};

class MyComponent extends Component {
  render() {
    return <ChipSet inoType="choice" />;
  }
}
```

## Additional Hints

### Simple chip sets

`chip sets` can be a simple composer for one or more chips. If you want to style content as a chip (f. e. email addresses after adding them in an input field), simple miss out the `ino-type` attribute.

```html
<ino-chip-set>
  <ino-chip ino-label="Default chip"></ino-chip>
  <ino-chip ino-label="Removable" ino-removable onRemoveChip={_ => removeChip()}></ino-chip>
</ino-chip-set>
```

> See `<ino-chip>` docs for more details on capabilities of single chips.

### Chip sets as form elements

There are two complex types of chip sets:

- **`ino-type="choice"`**: Choice chips are a variant of chips which allow single selection from a set of options (similar to radio-inputs).
- **`ino-type="filter"`**: Filter chips are a variant of chips which allow multiple selection from a set of options (similar to checkbox-inputs).

For both, choice and filter chip sets emit an `updateChipSet` event when a user selects or deselects a chip. The `CustomEvent` contains a property `detail` that contains one or multiple values of chips. The values are provided via the `ino-value` attribute of each `ino-chip`.

```js
document.querySelector('ino-chip-set').addEventListener('updateChipSet', e => {
  // console.log(e.detail)
});
```

```html
<ino-chip-set ino-type="choice">
  <ino-chip ino-label="Chip 1" ino-value="Apple"></ino-chip>
  <ino-chip ino-label="Chip 2" ino-value="Banana"></ino-chip>
</ino-chip-set>
```

## Demo

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                                                                                                             | Type                                    | Default |
| --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------- |
| `inoType` | `ino-type` | The type of this chip set that indicates its behavior. Possible values are: `''` (default), `choice`, `filter`, `input` | `"" \| "choice" \| "filter" \| "input"` | `''`    |


## Events

| Event           | Description                                                                                                     | Type                |
| --------------- | --------------------------------------------------------------------------------------------------------------- | ------------------- |
| `updateChipSet` | Event that emits when the value of this element changes.  Only applicable if `inoType` is `choice` or `filter`. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
