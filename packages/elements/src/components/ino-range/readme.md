# ino-range

A range component that allows the user select a number using a slider. It functions as a wrapper around the material [Slider](https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider) component.

> Note: Range sliders with multiple thumbs are not yet implemented.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-datepicker')
  .addEventListener('valueChange', (e) =>
    alert(`The new range value is: ${e.detail}`),
  );
```

```html
<ino-range
  min="<number>"
  max="<number>"
  value="<number>"
  name="<string>"
  step="<number>"
  disabled
  color-scheme="<string>"
  discrete
  markers
>
</ino-range>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoRange } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return <InoRange inoColorScheme="primary" />;
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoRange } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const Range: React.FunctionComponent<Components.InoRangeAttributes> = (
  props,
) => {
  const { inoColorScheme } = props;

  return <InoRange inoColorScheme={inoColorScheme}>{props.children}</InoRange>;
};

class MyComponent extends Component {
  render() {
    return <Range inoColorScheme="primary" />;
  }
}
```

## Additional Hints

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                        | Type                                                                                 | Default     |
| ------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------- |
| `colorScheme` | `color-scheme` | The name of the color scheme of this component. Possible values: `primary` (default), `secondary`, `success`, `warning`, `error`, `light`, `dark`. | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `disabled`    | `disabled`     | Disables this element.                                                                                                                             | `boolean`                                                                            | `undefined` |
| `discrete`    | `discrete`     | Restricts the slider to only allow discrete values.                                                                                                | `boolean`                                                                            | `undefined` |
| `markers`     | `markers`      | Mark this slider to show the steps of the range. Only applicable if `discrete` is enabled.                                                         | `boolean`                                                                            | `undefined` |
| `max`         | `max`          | The max value of this element (**required**).                                                                                                      | `number`                                                                             | `undefined` |
| `min`         | `min`          | The min value of this element.                                                                                                                     | `number`                                                                             | `0`         |
| `name`        | `name`         | The name of this element.                                                                                                                          | `string`                                                                             | `undefined` |
| `ranged`      | `ranged`       | Enables the ranged knob if set to true                                                                                                             | `boolean`                                                                            | `false`     |
| `rangedValue` | `ranged-value` | The value of the ranged element. (**unmanaged**, default=`min`)                                                                                    | `number`                                                                             | `undefined` |
| `step`        | `step`         | The step size for this element. Only applicable if `discrete` is enabled. Is used to calculate the number of markers (if enabled).                 | `number`                                                                             | `1`         |
| `value`       | `value`        | The value of this element. (**unmanaged**, default=`min`)                                                                                          | `number`                                                                             | `undefined` |


## Events

| Event               | Description                                                         | Type                  |
| ------------------- | ------------------------------------------------------------------- | --------------------- |
| `rangedValueChange` |                                                                     | `CustomEvent<number>` |
| `valueChange`       | Emits when the value changes. Contains new value in `event.detail`. | `CustomEvent<number>` |


## Methods

### `setValueToAriaTextMapperFn(fn: (value: number) => string) => Promise<void>`

Should be used to make the component accessible.
If the value is not user-friendly (e.g. a number to represent the day of the week),
use this method to set a function that maps the slider `value` to value of the `aria-valuetext` attribute (e.g. `0` => `monday`).

e.g.:

`const rangeEl = document.querySelector("ino-range")`
`rangeEl.setFnToMapValueToAriaText((value: number) => value + ". day in this week")`

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
