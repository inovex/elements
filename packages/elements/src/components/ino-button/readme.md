# ino-button

A button component with different styles and icon capability.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-button')
  .addEventListener('click', _ => alert('Button was clicked!'));
```

```html
<ino-button
  autofocus
  disabled
  name="<string>"
  form="<string>"
  type="<string>"
  ino-color-scheme="<string>"
  ino-fill="<string>"
  ino-icon="<string>"
  ino-icon-prepend
  ino-dense
  onClick="handleClick()"
>
  Button Content
</ino-button>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoButton } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoButton
        inoIcon="star"
        inoColorScheme="dark"
        onClick={_ => alert('Yeah, you clicked the button!')}
      >
        You can click me!
      </InoButton>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoButton } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const Button: React.FunctionComponent<Components.InoButtonAttributes> = props => {
  const { inoIcon, inoColorScheme, onClick } = props;

  return (
    <InoButton
      inoIcon={inoIcon}
      inoColorScheme={inoColorScheme}
      onClick={onClick}
    >
      Button Text
    </InoButton>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Button
        inoIcon="star"
        inoColorScheme="dark"
        onClick={_ => alert('Yeah, you clicked the button!')}
      />
    );
  }
}
```

## Demo

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                                                                                       | Type                                                                                               | Default     |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| `autofocus`      | `autofocus`        | Sets the autofocus for this element.                                                                                                                                                                              | `boolean`                                                                                          | `undefined` |
| `disabled`       | `disabled`         | Disables this element.                                                                                                                                                                                            | `boolean`                                                                                          | `undefined` |
| `form`           | `form`             | The form id this element origins to.                                                                                                                                                                              | `string`                                                                                           | `undefined` |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `inoDense`       | `ino-dense`        | Makes the button text and container slightly smaller.                                                                                                                                                             | `boolean`                                                                                          | `false`     |
| `inoFill`        | `ino-fill`         | The fill type of this element. Possible values: `solid` (default), `outline`, `raised` or `transparent`.                                                                                                          | `"outline" \| "raised" \| "solid" \| "transparent"`                                                | `'solid'`   |
| `inoIcon`        | `ino-icon`         | Adds an icon to the button. The icon is appended before the text. Use `inoIconPrepend` to place it after the text.                                                                                                | `string`                                                                                           | `undefined` |
| `inoIconPrepend` | `ino-icon-prepend` | Prepends an icon after the text.                                                                                                                                                                                  | `boolean`                                                                                          | `undefined` |
| `inoLoading`     | `ino-loading`      | Shows an infinite loading spinner and prevents further clicks.                                                                                                                                                    | `boolean`                                                                                          | `undefined` |
| `name`           | `name`             | The name of the element.                                                                                                                                                                                          | `string`                                                                                           | `undefined` |
| `type`           | `type`             | The type of this form.  Can either be `button`, `submit` or `reset`.                                                                                                                                              | `"button" \| "reset" \| "submit"`                                                                  | `'button'`  |


## Dependencies

### Used by

 - [ino-input-file](../ino-input-file)
 - [ino-snackbar](../ino-snackbar)

### Depends on

- [ino-icon](../ino-icon)
- [ino-spinner](../ino-spinner)

### Graph
```mermaid
graph TD;
  ino-button --> ino-icon
  ino-button --> ino-spinner
  ino-input-file --> ino-button
  ino-snackbar --> ino-button
  style ino-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
