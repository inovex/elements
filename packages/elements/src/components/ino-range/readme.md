# ino-range

A range component that allows the user select a number using a slider. It functions as a wrapper around the material [Slider](https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider) component.

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

| Property     | Attribute     | Description                                                                                                           | Type      | Default     |
| ------------ | ------------- | --------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled`   | `disabled`    | Disables this element.                                                                                                | `boolean` | `undefined` |
| `discrete`   | `discrete`    | Restricts the slider to only allow discrete values.                                                                   | `boolean` | `undefined` |
| `markers`    | `markers`     | Mark this slider to show the steps of the range. Only applicable if `discrete` is enabled.                            | `boolean` | `undefined` |
| `max`        | `max`         | The max value of this element (**required**).                                                                         | `number`  | `undefined` |
| `min`        | `min`         | The min value of this element.                                                                                        | `number`  | `0`         |
| `name`       | `name`        | The name of this element.                                                                                             | `string`  | `undefined` |
| `ranged`     | `ranged`      | Allows to input an interval. Use `valueStart` and `valueEnd` to provide values.                                       | `boolean` | `false`     |
| `step`       | `step`        | The step size for this element. Only applicable if `discrete` is enabled. Is used to calculate the number of markers. | `number`  | `1`         |
| `value`      | `value`       | The value of this element. Only applicable if not in ranged mode.                                                     | `number`  | `undefined` |
| `valueEnd`   | `value-end`   | The value of the right thumb. Only applicable in ranged mode.                                                         | `number`  | `undefined` |
| `valueStart` | `value-start` | The value of the left thumb. Only applicable in ranged mode.                                                          | `number`  | `undefined` |


## Events

| Event              | Description                                                                 | Type                  |
| ------------------ | --------------------------------------------------------------------------- | --------------------- |
| `valueChange`      | Emits when the value changes (not in ranged mode).                          | `CustomEvent<number>` |
| `valueEndChange`   | Emits when the end (right) value of the interval changes (in ranged mode).  | `CustomEvent<number>` |
| `valueStartChange` | Emits when the start (left) value of the interval changes (in ranged mode). | `CustomEvent<number>` |


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
