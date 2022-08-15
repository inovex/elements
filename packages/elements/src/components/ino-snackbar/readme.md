# ino-snackbar

Snackbars provide brief messages about app processes at the bottom of the screen. It functions as a wrapper around the material design's [Snackbar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar) component

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-snackbar')
  .addEventListener('inoActionClick', (e) =>
    alert('Action-Button was clicked!'),
  );

document
  .querySelector('ino-snackbar')
  .addEventListener('hideEl', (e) => alert('Snackbar hides!'));
```

```html
<ino-snackbar
  message="<string>"
  action-text="<string>"
  action-on-bottom
  align-start
  oninoactionclick="handleClickEl()"
  onhideel="handleHideEl()"
>
</ino-snackbar>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoSnackbar } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoSnackbar
        inoMessage="Message deleted"
        inoActionText="Undo"
        inoActionOnBottom={false}
        inoAlignStart={false}
      />
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoSnackbar } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const Snackbar: React.FunctionComponent<Components.InoSnackbarAttributes> = props => {
  const {
    inoMessage,
    inoActionText,
    inoActionOnBottom,
    inoAlignStart
  } = props;

  return (
    <InoSnackbar
      inoMessage={inoMessage}
      inoActionText={inoActionText}
      inoActionOnBottom={inoActionOnBottom}
      inoAlignStart={inoAlignStart}
    >
      {props.children}
    </InoSnackbar>
  );
};

class MyComponent extends Component {
  const conditionToRender = true;

  render() {
    return conditionToRender && (
      <Snackbar
        inoMessage="Message deleted"
        inoActionText="Undo"
        inoActionOnBottom={false}
        inoAlignStart={false}
      />
    );
  }
}
```

## Additional Hints

Snackbar is displayed when `show` is changed to checked.

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute               | Description                                                                                                                             | Type                             | Default     |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| `actionText`         | `action-text`           | The text to display for the action button. If no text is defined, the snack bar is displayed in an alternative feedback style.          | `string`                         | `undefined` |
| `message`            | `message`               | <span style="color:red">**[DEPRECATED]**</span> <br/><br/>[DEPRECATED] Please use the default slot instead The text message to display. | `string`                         | `undefined` |
| `stayVisibleOnHover` | `stay-visible-on-hover` | If set to true, the timeout that closes the snackbar is paused when the user hovers over the snackbar.                                  | `boolean`                        | `false`     |
| `timeout`            | `timeout`               | Sets the timeout in ms until the snackbar disappears. The timeout can be disabled by setting it to a negative value.                    | `number`                         | `5000`      |
| `type`               | `type`                  | Changes the snackbar type. There are three types of messages: info, success, and error.                                                 | `"error" \| "info" \| "success"` | `'info'`    |


## Events

| Event         | Description                                                                                           | Type               |
| ------------- | ----------------------------------------------------------------------------------------------------- | ------------------ |
| `actionClick` | Event that emits as soon as the action button is clicked.                                             | `CustomEvent<any>` |
| `hideEl`      | Event that emits as soon as the snackbar hides. Listen to this event to hide or destroy this element. | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ino-icon](../ino-icon)
- [ino-icon-button](../ino-icon-button)

### Graph
```mermaid
graph TD;
  ino-snackbar --> ino-icon
  ino-snackbar --> ino-icon-button
  ino-icon-button --> ino-icon
  style ino-snackbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
