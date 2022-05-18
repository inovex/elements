# ino-icon-button

A rounded button component that contains an icon. It functions as a wrapper around the material [icon-button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button) component.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-icon-button')
  .addEventListener('click', (_) => alert('The icon button was clicked'));
```

```html
<ino-icon-button
  autofocus
  disabled
  activated="<boolean>"
  icon="<string>"
>
</ino-icon-button>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoIconButton } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  handleClick = (e: any) => {
    alert(`IconButton was clicked`);
  };

  render() {
    return <InoIconButton icon="search" onClick={handleClick} />;
  }
}
```

#### Example #2 - Using default slot

```js
import { Component } from 'react';
import { InoIconButton } from '@inovex.de/elements/dist/react';
class MyComponent extends Component {
  handleClick = (e: any) => {
    alert(`IconButton was clicked`);
  };
  render() {
    return <InoIconButton onClick={handleClick}>
       <ino-icon icon='time'></ino-icon>
    </InoIconButton>;
  } 
}
```

#### Example #3 - With Types

```js
import React, { Component } from 'react';
import { InoIconButton } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const IconButton: React.FunctionComponent<Components.InoIconButtonAttributes> = (
  props,
) => {
  const { inoIcon } = props;

  const handleClick = (e: any) => {
    alert(`IconButton was clicked`);
  };

  return (
    <InoIconButton icon={inoIcon} onClick={handleClick}>
      {props.children}
    </InoIconButton>
  );
};

class MyComponent extends Component {
  render() {
    return <IconButton icon="search" />;
  }
}
```

## Managed Icon Button

Buttons, and icon buttons as well, are unmanaged components which swap their state internally based on the interactions. However, in some cases, it may be useful to change this behavior and provide an external state.

This can be done by using the `activated` flag and further listing to the `click` event to change the state. _Example:_

```js
activated = false;

document.querySelector('ino-icon-button').addEventListener('click', (e) => {
  const el = e.target;
  activated = !activated;
  activated
    ? el.addAttribute('activated')
    : el.removeAttribute('activated');
});
```

```html
<ino-icon-button icon="info"></ino-icon-button>
```

## Additional Hints

**Toggle Button**: To use the ino-icon-button as a toggle button the user can listen to the native `click`-Event and change the icon in the `icon`-Attribute.

### Native Events

The component bubbles the native `click`-Event to the user.

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                                                                                                                                                           | Type                                                                                 | Default     |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ----------- |
| `activated`   | `activated`    | Marks the icon button as activated.  Useful in cases where an external state controls the icon button activation. Makes the component **managed**.                                                    | `boolean`                                                                            | `undefined` |
| `autoFocus`   | `autofocus`    | Sets the autofocus for this element.                                                                                                                                                                  | `boolean`                                                                            | `undefined` |
| `colorScheme` | `color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `success`, `warning`, `error`, `light`, `dark`. | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "warning"` | `'primary'` |
| `disabled`    | `disabled`     | Disables this element.                                                                                                                                                                                | `boolean`                                                                            | `undefined` |
| `filled`      | `filled`       | Styles this element as filled icon button with the `ino-color-scheme` as background color.                                                                                                            | `boolean`                                                                            | `undefined` |
| `icon`        | `icon`         | The name of the icon of this element.                                                                                                                                                                 | `string`                                                                             | `undefined` |
| `type`        | `type`         | The type of this form.  Can either be `button`, `submit` or `reset`.                                                                                                                                  | `"button" \| "reset" \| "submit"`                                                    | `'button'`  |


## Events

| Event     | Description                                                                                                        | Type               |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ------------------ |
| `clickEl` | Event that emits as soon as the user clicks on the icon. The event only emits if the property `clickable` is true. | `CustomEvent<any>` |


## Slots

| Slot        | Description  |
| ----------- | ------------ |
| `"default"` | `<ino-icon>` |


## CSS Custom Properties

| Name                                        | Description                         |
| ------------------------------------------- | ----------------------------------- |
| `--ino-icon-button-background-active-color` | base color of the active background |
| `--ino-icon-button-background-color`        | default color of the background     |
| `--ino-icon-button-icon-active-color`       | color of the active icon itself     |
| `--ino-icon-button-icon-color`              | default color of the icon itself    |
| `--ino-icon-button-icon-size`               | size of the icon itself             |
| `--ino-icon-button-size`                    | size of the entire button           |


## Dependencies

### Used by

 - [ino-carousel](../ino-carousel)
 - [ino-nav-drawer](../ino-nav-drawer)
 - [ino-snackbar](../ino-snackbar)
 - [ino-table-header-cell](../ino-table-header-cell)

### Depends on

- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-icon-button --> ino-icon
  ino-carousel --> ino-icon-button
  ino-nav-drawer --> ino-icon-button
  ino-snackbar --> ino-icon-button
  ino-table-header-cell --> ino-icon-button
  style ino-icon-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
