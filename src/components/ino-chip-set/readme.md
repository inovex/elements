# ino-chip-set
A compact component wrapping `ino-chip` elements and giving them a behavior. It functions as a wrapper around the material [chip-set](https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips) capabilities.

> See the `ino-chip` documentation for more details about a single instance of a chip.

### Usage
The component can be used as follows:

```html
<ino-chip-set ino-type="'' | 'choice' | 'filter'">
  <ino-chip ...></ino-chip>
  ...
  <ino-chip ...></ino-chip>
</ino-chip-set>
```

## Types
### Simple chip sets
`chip sets` can be a simple composer for one or more chips. If you want to style content as a chip (f. e. email addresses after adding them in an input field), simple miss out the `ino-type` attribute. 
```jsx
<ino-chip-set>
  <ino-chip ino-label="Action chip" onClick={_ => console.log('Triggers an awesome action!')}></ino-chip>
  <ino-chip ino-label="Removable" ino-removable onInoChipRemove={_ => removeChip()}></ino-chip>
</ino-chip-set>
```

> See `<ino-chip>` docs for more details on capabilities of single chips.

### Chip sets as form elements

There are two complex types of chip sets:
* **`ino-type="choice"`**: Choice chips are a variant of chips which allow single selection from a set of options (similar to radio-inputs).
* **`ino-type="filter"`**: Filter chips are a variant of chips which allow multiple selection from a set of options (similar to checkbox-inputs).

For both, choice and filter chip sets emit an `inoChipSetUpdated` event when a user selects or deselects a chip. The `CustomEvent` contains a property `detail` that contains one or multiple values of chips. The values are provided via the `ino-value` attribute of each `ino-chip`.

```jsx
<ino-chip-set ino-type="choice" onInoChipSetUpdated={(e) => console.log(`Value is `e.detail`)}>
  <ino-chip ino-label="Chip 1" ino-value="Just"></ino-chip>
  <ino-chip ino-label="Chip 2" ino-value="Awesome!"></ino-chip>
</ino-chip-set>
```

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                                            | Type          |
| --------- | ---------- | ------------------------------------------------------ | ------------- |
| `inoType` | `ino-type` | The type of this chip set that indicates its behavior. | `ChipSetType` |


## Events

| Event               | Description                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `inoChipSetUpdated` | Event that emits when the value of this element changes.  Only applicable if `inoType` is `choice` or `filter`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
