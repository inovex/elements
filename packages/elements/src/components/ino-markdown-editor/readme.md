# ino-markdown-editor



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                            | Type                                    | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | ----------- |
| `initialValue` | `initial-value` | Initial `string` value of the markdown editor. Reassigning this value do not change the editor state. The value must contain a valid Markdown syntax.                                  | `string`                                | `undefined` |
| `viewMode`     | `view-mode`     | Sets the view mode of the editor. Can be changed between `preview` (default), `markdown` and `readonly`. The `markdown` mode is made for advanced users that know the Markdown syntax. | `"markdown" \| "preview" \| "readonly"` | `'preview'` |


## Events

| Event            | Description                                                                                                      | Type                                                 |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `inoBlur`        | Emits when the ino-markdown-editor is blurred                                                                    | `CustomEvent<void>`                                  |
| `valueChange`    | Emits when the value of the markdown editor **blurs**. The value of type `string` can be found in `event.detail` | `CustomEvent<string>`                                |
| `viewModeChange` | Emits when one of the view mode buttons was clicked. The value of type `ViewMode` can be found in `event.detail` | `CustomEvent<"markdown" \| "preview" \| "readonly">` |


## Dependencies

### Depends on

- [ino-dialog](../ino-dialog)
- [ino-input](../ino-input)
- [ino-icon](../ino-icon)
- [ino-popover](../ino-popover)
- [ino-textarea](../ino-textarea)

### Graph
```mermaid
graph TD;
  ino-markdown-editor --> ino-dialog
  ino-markdown-editor --> ino-input
  ino-markdown-editor --> ino-icon
  ino-markdown-editor --> ino-popover
  ino-markdown-editor --> ino-textarea
  ino-dialog --> ino-icon
  ino-dialog --> ino-button
  ino-button --> ino-spinner
  ino-input --> ino-label
  ino-input --> ino-icon
  ino-textarea --> ino-label
  style ino-markdown-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
