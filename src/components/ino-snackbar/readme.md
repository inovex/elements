# ino-snackbar
Snackbars provide brief messages about app processes at the bottom of the screen. It functions as a wrapper around the material design's [Snackbar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar) component

### Usage
The component can be used as follows:

```jsx
<ino-snackbar
  ino-show="<boolean>"
  ino-label="<string>"
  ino-action-text="<string>"
  ino-multiline="<boolean>"
  ino-action-on-bottom="<boolean>"
  ino-align-start="<boolean>"
  onInoSnackbarHide={e => inoSnackbarHideHandler(e)}/>
```

Snackbar is displayed when ino-show is changed to checked.



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute              | Description                                                                                           | Type      |
| ------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------- | --------- |
| `inoActionOnBottom` | `ino-action-on-bottom` | Whether to show the action below the multiple lines of text Optional, applies when multiline is true. | `boolean` |
| `inoActionText`     | `ino-action-text`      | The text to display for the action button.                                                            | `string`  |
| `inoAlignStart`     | `ino-align-start`      | Controls if Snackbar is centered or start-aligned.                                                    | `boolean` |
| `inoMessage`        | `ino-message`          | The text message to display.                                                                          | `string`  |
| `inoMultiline`      | `ino-multiline`        | Whether to show the snackbar with space for multiple lines of text.                                   | `boolean` |
| `inoShow`           | `ino-show`             | Trigger the display of a message with optional action.                                                | `boolean` |


## Events

| Event              | Description                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| `inoActionClicked` | Event that emits as soon as the user removes this element. Listen to this event to hide or destroy this element. |
| `inoSnackbarHide`  | Event that emits as soon as the snackbar hides. Listen to this event to hide or destroy this element.            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
