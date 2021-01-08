# ino-chip

The ino-chip component displays the provided content and icon as a chip.

> An ino-chip component must **always** belong to a `ino-chip-set` component.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-chip')
  .addEventListener('removeChip', (e) =>
    console.log('This chip will be removed', e.detail),
  );
```

```html
<ino-chip
  ino-color-scheme="<string>"
  ino-fill="<string>"
  ino-label="<string>"
  ino-icon-leading
  ino-removable
  ino-selectable
  ino-selected
  ino-value="<string>"
>
  <ino-icon slot="ino-icon-leading" ino-icon="<string>"></ino-icon>
</ino-chip>
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

**Content**: Use the `ino-label` attribute to set the label of the chip. To add an icon to the left side of the chip, use the `ino-icon` attribute.

**Styling**: The chip can be styled in many different ways with the help of the `ino-fill` and `ino-color-scheme` attributes.
Take a look at the attribute documentation at the bottom of the page for further information.

### Removable chips

If `ino-removable` is set to `true`, the chip can be removed by the user. The component then displays a small `close` icon on the right side of the chip next to the label.

However, the component will not be hidden or destroyed but instead emits a `removeChip`-Event. Thus, the component can be removed by subscribing to the corresponding event.

## Demo

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute          | Description                                                                                                                                                                                                       | Type                                                                                 | Default     |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------- |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary`, `secondary`, `success`, `warning`, `error`, `light`, `dark`.                        | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `undefined` |
| `inoFill`        | `ino-fill`         | The fill type of this element. Possible values: `solid` (default) or `outline`.                                                                                                                                   | `"outline" \| "solid"`                                                               | `'solid'`   |
| `inoIcon`        | `ino-icon`         | <span style="color:red">**[DEPRECATED]**</span> This property is deprecated and will be removed with the next major release. Instead, use the ino-icon-leading slot.<br/><br/>Prepends an icon to the chip label. | `string`                                                                             | `undefined` |
| `inoIconLeading` | `ino-icon-leading` | If enabled, prepends the slotted icon to the chip label                                                                                                                                                           | `boolean`                                                                            | `false`     |
| `inoLabel`       | `ino-label`        | The label of this chip (**required**).                                                                                                                                                                            | `string`                                                                             | `undefined` |
| `inoRemovable`   | `ino-removable`    | Adds a close icon on the right side of this chip. If applied, emits the `removeChip` event.                                                                                                                       | `boolean`                                                                            | `undefined` |
| `inoSelectable`  | `ino-selectable`   | Adds a checkmark if the icon is selected.                                                                                                                                                                         | `boolean`                                                                            | `undefined` |
| `inoSelected`    | `ino-selected`     | Marks this element as selected.                                                                                                                                                                                   | `boolean`                                                                            | `undefined` |
| `inoValue`       | `ino-value`        | The value of this chip. **Required** for chips as part of sets of type `filter` or `choice`.                                                                                                                      | `string`                                                                             | `undefined` |

## Events

| Event        | Description                                                                                                                                                             | Type               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `removeChip` | Event that emits as soon as the user removes this chip. Listen to this event to hide or destroy this chip. The event only emits if the property `inoRemovable` is true. | `CustomEvent<any>` |

## Dependencies

### Depends on

- [ino-icon](../ino-icon)

### Graph

```mermaid
graph TD;
  ino-chip --> ino-icon
  style ino-chip fill:#f9f,stroke:#333,stroke-width:4px
```

---

_Built with [StencilJS](https://stenciljs.com/)_
