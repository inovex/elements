# ino-range

A range component that allows the user select a number using a slider. It functions as a wrapper around the material [Slider](https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider) component.

> Note: Range sliders with multiple thumbs are not yet implemented.

### Usage

The component can be used as follows:

```js
document.querySelector('ino-range').addEventListener('valueChange', e => {
  // ...
});
```

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
  ino-color-scheme="<string>"
>
</ino-range>
```

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute          | Description                                                                                                                                                    | Type                                                                                               | Default     |
| ---------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| `disabled`       | `disabled`         | Disables this element.                                                                                                                                         | `boolean`                                                                                          | `undefined` |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme of this component. Possible values: `primary` (default), `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `inoDiscrete`    | `ino-discrete`     | Restricts the slider to only allow discrete values.                                                                                                            | `boolean`                                                                                          | `undefined` |
| `inoMarkers`     | `ino-markers`      | Mark this slider to show the steps of the range. Only applicable if ino-discrete is true                                                                       | `boolean`                                                                                          | `undefined` |
| `max`            | `max`              | The max value of this element.                                                                                                                                 | `number`                                                                                           | `undefined` |
| `min`            | `min`              | The min value of this element.                                                                                                                                 | `number`                                                                                           | `undefined` |
| `name`           | `name`             | The name of this element.                                                                                                                                      | `string`                                                                                           | `undefined` |
| `step`           | `step`             | The step size for this element (default = 1)                                                                                                                   | `number`                                                                                           | `1`         |
| `value`          | `value`            | The value of this element. (**unmanaged**)                                                                                                                     | `number`                                                                                           | `undefined` |

## Events

| Event         | Description                                                         | Type                |
| ------------- | ------------------------------------------------------------------- | ------------------- |
| `valueChange` | Emits when the value changes. Contains new value in `event.detail`. | `CustomEvent<void>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
