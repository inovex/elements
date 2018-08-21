# ino-range
A range component that allows the user select a number using a slider. It functions as a wrapper around the browser's native `HTMLInputElement` with type `range`.

> Note: Range sliders with multiple thumbs are not yet implemented.

### Usage
The component can be used as follows:

```html
<ino-range 
  autofocus="<boolean>"
  disabled="<boolean>"
  min="<number>" 
  max="<number>" 
  name="<string>"
  value="<string>"
  required="<boolean>"
  step="<number>"
  ino-color-scheme="<string>">
</ino-range>
```

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                    | Type      |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `autofocus`      | `autofocus`        | The autofocus of this element.                                                                                                                 | `boolean` |
| `disabled`       | `disabled`         | Disables this element.                                                                                                                         | `boolean` |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme of this component. Possible values: `primary` (default), `secondary`, `tertiary`, `success`, `warning`, `danger`. | `string`  |
| `max`            | `max`              | The max value of this element.                                                                                                                 | `number`  |
| `min`            | `min`              | The min value of this element.                                                                                                                 | `number`  |
| `name`           | `name`             | The name of this element.                                                                                                                      | `string`  |
| `required`       | `required`         | Marks this element as required.                                                                                                                | `boolean` |
| `step`           | `step`             | The step size for this element (default =1)                                                                                                    | `number`  |
| `value`          | `value`            | The value of this element.                                                                                                                     | `number`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
