# ino-snackbar


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


## CSS Custom Properties

| Name                    | Description                 |
| ----------------------- | --------------------------- |
| `--ino-snackbar-bottom` | Distance to the bottom edge |
| `--ino-snackbar-left`   | Distance to the left edge   |
| `--ino-snackbar-right`  | Distance to the right edge  |
| `--ino-snackbar-top`    | Distance to the top edge    |


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
