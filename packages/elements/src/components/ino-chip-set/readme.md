# ino-chip-set

The ino-chip-set is a wrapper component for `ino-chip` components. It enables the user to filter content,
select a choice, or trigger an action.

> See the `ino-chip` documentation for more details about a single instance of a chip.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-chip-set')
  .addEventListener('updateChipSet', (e) =>
    alert(
      `The selected chip values are (only when type='filter' or 'choice'): ${e.detail}`,
    ),
  );
```

```html
<ino-chip-set type="<string>">
  <ino-chip ...></ino-chip>
  <ino-chip ...></ino-chip>
  ...
</ino-chip-set>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoChipSet, InoChip } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  chipsetSelectionChange(e: any) {
    console.log(
      e.detail === true
        ? 'The last one was toggled'
        : `User clicked: ${e.detail}`,
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
import { InoChipSet, InoChip } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const ChipSet: React.FunctionComponent<Components.InoChipSetAttributes> = (
  props,
) => {
  const { inoType } = props;

  const chipsetSelectionChange = (e: any) => {
    console.log(
      e.detail === true
        ? 'The last one was toggled'
        : `User clicked: ${e.detail}`,
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

`chip sets` can be a simple composer for one or more chips. If you want to style content as a chip (e.g. email addresses), simply exclude the  type` attribute.

```html
<ino-chip-set>
  <ino-chip label="Default chip"></ino-chip>
  <ino-chip label="Removable" removable onRemoveChip={_ => removeChip()}></ino-chip>
</ino-chip-set>
```

> See `<ino-chip>` docs for more details on capabilities of single chips.

### Chip sets as form elements

There are two complex types of chip sets:

- ** type="choice"`**: Choice chips mimic the behaviour of a radio button and allow the selection of a single option from a set of options.
- ** type="filter"`**: Filter chips mimic the behaviour of a checkbox and allow multiple options to be selected from a set of options.

Both choice and filter chip sets emit an `updateChipSet` event when a user selects or deselects a chip. The `CustomEvent` contains a property `detail` which, in turn, contains one or multiple chip values. The values are provided via the  value` attribute of each `ino-chip`.

```js
document
  .querySelector('ino-chip-set')
  .addEventListener('updateChipSet', (e) => {
    // console.log(e.detail)
  });
```

```html
<ino-chip-set type="choice">
  <ino-chip label="Chip 1" value="Apple"></ino-chip>
  <ino-chip label="Chip 2" value="Banana"></ino-chip>
</ino-chip-set>
```

## Demo

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                             | Type                                    | Default |
| -------- | --------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ------- |
| `type`   | `type`    | The type of this chip set that indicates its behavior. Possible values are: `''` (default), `choice`, `filter`, `input` | `"" \| "choice" \| "filter" \| "input"` | `''`    |


## Events

| Event           | Description                                                                                                     | Type               |
| --------------- | --------------------------------------------------------------------------------------------------------------- | ------------------ |
| `updateChipSet` | Event that emits when the value of this element changes.  Only applicable if `inoType` is `choice` or `filter`. | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
