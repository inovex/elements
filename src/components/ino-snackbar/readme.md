# ino-snackbar

Snackbars provide brief messages about app processes at the bottom of the screen. It functions as a wrapper around the material design's [Snackbar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar) component

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-snackbar')
  .addEventListener('inoActionClicked', e => {
    // ...
  });

document
  .querySelector('ino-snackbar')
  .addEventListener('inoSnackbarHide', e => {
    // ...
  });
```

```html
<ino-snackbar
  ino-show
  ino-message="<string>"
  ino-action-text="<string>"
  ino-multiline
  ino-action-on-bottom
  ino-align-start
</ino-snackbar>
```

Snackbar is displayed when ino-show is changed to checked.

<!-- Auto Generated Below -->

## Properties

| Property            | Attribute              | Description                                                                                           | Type      | Default     |
| ------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoActionOnBottom` | `ino-action-on-bottom` | Whether to show the action below the multiple lines of text Optional, applies when multiline is true. | `boolean` | `false`     |
| `inoActionText`     | `ino-action-text`      | The text to display for the action button.                                                            | `string`  | `''`        |
| `inoAlignStart`     | `ino-align-start`      | Controls if Snackbar is centered or start-aligned.                                                    | `boolean` | `false`     |
| `inoMessage`        | `ino-message`          | The text message to display.                                                                          | `string`  | `undefined` |
| `inoMultiline`      | `ino-multiline`        | Whether to show the snackbar with space for multiple lines of text.                                   | `boolean` | `false`     |
| `inoShow`           | `ino-show`             | Trigger the display of a message with optional action.                                                | `boolean` | `false`     |

## Events

| Event              | Description                                                                                                      | Type                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------------- |
| `inoActionClicked` | Event that emits as soon as the user removes this element. Listen to this event to hide or destroy this element. | `CustomEvent<void>` |
| `inoSnackbarHide`  | Event that emits as soon as the snackbar hides. Listen to this event to hide or destroy this element.            | `CustomEvent<void>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
