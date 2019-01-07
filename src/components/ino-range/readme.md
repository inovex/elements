# ino-range
A range component that allows the user select a number using a slider. It functions as a wrapper around the material [Slider](https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider) component.

> Note: Range sliders with multiple thumbs are not yet implemented.

### Usage
The component can be used as follows:

```html
<ino-range
  min="<number>"
  max="<number>"
  value="<number>"
  name="<string>"
  step="<number>"
  ino-discrete="<boolean>"
  ino-markers="<boolean>"
  disabled="<boolean>"
  ino-color-scheme="<string>">
</ino-range>
```

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                                    | Type      |
| ---------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `disabled`       | `disabled`         | Disables this element.                                                                                                                                         | `boolean` |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme of this component. Possible values: `primary` (default), `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `string`  |
| `inoDiscrete`    | `ino-discrete`     | Restricts the slider to only allow discrete values.                                                                                                            | `boolean` |
| `inoMarkers`     | `ino-markers`      | Mark this slider to show the steps of the range. Only applicable if ino-discrete is true                                                                       | `boolean` |
| `max`            | `max`              | The max value of this element.                                                                                                                                 | `number`  |
| `min`            | `min`              | The min value of this element.                                                                                                                                 | `number`  |
| `name`           | `name`             | The name of this element.                                                                                                                                      | `string`  |
| `step`           | `step`             | The step size for this element (default = 1)                                                                                                                   | `number`  |
| `value`          | `value`            | The value of this element. (**unmanaged**)                                                                                                                     | `number`  |


## Events

| Event          | Description                                                         |
| -------------- | ------------------------------------------------------------------- |
| `valueChanges` | Emits when the value changes. Contains new value in `event.detail`. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
