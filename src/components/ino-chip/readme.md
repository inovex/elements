# ino-chip
A compact component that contains contents and icons styled as chip. It functions as a wrapper around the material [chip](https://github.com/material-components/material-components-web/tree/master/packages/mdc-chips) component.

> A chip **always** has to be composed by an `ino-chip-set` component.


### Usage
The component can be used as follows:

```html
<ino-chip
  ino-color-scheme="<string>"
  ino-fill="<string>"
  ino-icon="<string>"
  ino-label="<string>"
  ino-removable="<boolean>"
  ino-selectable="<boolean>"
  ino-selected="<boolean>"
  ino-value="<string>">
</ino-chip>
```

**Content**: Provide the text of a chip the slot and, if desired, an icon on the left side of the chip in `ino-icon`.

**Styling**: The chip can be styled in different ways with the attributes `ino-fill` and `ino-color-scheme`. See their attribute documentation below for more informations.


### Removable chips
If `ino-removable` is set to `true`, the chip can be removed by the user. The component then displays a small `close` icon right after the text. 

However, the component doesn't hide/destroy itself but emits an `inoRemove`-Event instead. Thus, the overlying app can remove the chip by listening to this event.

```html
<ino-chip
  ino-removable
  onInoRemove="_ => removeChip()">
    Removable chip
</ino-chip> 
```



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                                                                             | Type      | Default     |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary`,  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `string`  | `undefined` |
| `inoFill`        | `ino-fill`         | The fill type of this element. Possible values: `solid` (default) or `outline`.                                                                                                                         | `string`  | `undefined` |
| `inoIcon`        | `ino-icon`         | The icon before the label in this chip.                                                                                                                                                                 | `string`  | `undefined` |
| `inoLabel`       | `ino-label`        | The label of this chip (**required**).                                                                                                                                                                  | `string`  | `undefined` |
| `inoRemovable`   | `ino-removable`    | Adds a close icon on the right side of this chip.  If applied, emits the `inoChipRemove` event.                                                                                                         | `boolean` | `undefined` |
| `inoSelectable`  | `ino-selectable`   | Adds a checkmark if the icon is selected.                                                                                                                                                               | `boolean` | `undefined` |
| `inoSelected`    | `ino-selected`     | Marks this element as selected.                                                                                                                                                                         | `boolean` | `undefined` |
| `inoValue`       | `ino-value`        | The value of this chip.  **Required** for chips as part of sets of type `filter` or `choice`.                                                                                                           | `string`  | `undefined` |


## Events

| Event           | Description                                                                                                                                                              | Type                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- |
| `inoChipRemove` | Event that emits as soon as the user removes this chip.  Listen to this event to hide or destroy this chip. The event only emits if the property `inoRemovable` is true. | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
