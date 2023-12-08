# ino-dialog


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                            | Type                        | Default     |
| ------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| `actionText`  | `action-text` | Adds a button with the given text to proceed with an action`                                                                                                           | `string`                    | `undefined` |
| `attachTo`    | `attach-to`   | The target element the dialog should be attached to. If not given, the dialog is a child of the documents body. Note: This property is immutable after initialization. | `string`                    | `undefined` |
| `bodyText`    | `body-text`   | Adds a text to the body of the `ino-dialog`                                                                                                                            | `string`                    | `undefined` |
| `cancelText`  | `cancel-text` | Adds a button with the given text to close the `ino-dialog`                                                                                                            | `string`                    | `undefined` |
| `dialogRole`  | `dialog-role` | The role of the dialog. Can be either 'dialog' or 'alertdialog'. The 'alertdialog' role should be used for important alerts and error messages.                        | `"alertdialog" \| "dialog"` | `'dialog'`  |
| `dismissible` | `dismissible` | Close the dialog by clicking outside of the dialog.                                                                                                                    | `boolean`                   | `undefined` |
| `fullwidth`   | `fullwidth`   | Defines a full width dialog sliding up from the bottom of the page.                                                                                                    | `boolean`                   | `undefined` |
| `headerText`  | `header-text` | Adds a headline to the `ino-dialog`                                                                                                                                    | `string`                    | `undefined` |
| `icon`        | `icon`        | Adds a `ino-icon` besides the headline                                                                                                                                 | `string`                    | `undefined` |
| `open`        | `open`        | Opens the dialog if set to true                                                                                                                                        | `boolean`                   | `false`     |


## Events

| Event    | Description                                                  | Type                  |
| -------- | ------------------------------------------------------------ | --------------------- |
| `action` | Emits an event upon clicking the action button of the dialog | `CustomEvent<string>` |
| `close`  | Emits an event upon closing the dialog                       | `CustomEvent<string>` |


## Slots

| Slot        | Description                                                                                                                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `"body"`    | content to replace default body of dialog                                                                                                                                                                                                                                                  |
| `"default"` | content of the dialog                                                                                                                                                                                                                                                                      |
| `"footer"`  | content to replace default footer of dialog  The ino-dialog component displays a modal window that can be used to display additional information or notify the user. It is based on the mdc-dialog and is fully customizable. The styling of a dialog's content must be provided by users. |
| `"header"`  | content to replace default header of dialog                                                                                                                                                                                                                                                |


## Dependencies

### Used by

 - [ino-markdown-editor](../ino-markdown-editor)

### Depends on

- [ino-icon](../ino-icon)
- [ino-button](../ino-button)

### Graph
```mermaid
graph TD;
  ino-dialog --> ino-icon
  ino-dialog --> ino-button
  ino-button --> ino-spinner
  ino-markdown-editor --> ino-dialog
  style ino-dialog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
