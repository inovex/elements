# ino-markdown-editor



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description | Type                                    | Default            |
| ---------- | ----------- | ----------- | --------------------------------------- | ------------------ |
| `value`    | `value`     |             | `string`                                | `undefined`        |
| `viewMode` | `view-mode` |             | `ViewMode.MARKDOWN \| ViewMode.PREVIEW` | `ViewMode.PREVIEW` |


## Events

| Event            | Description | Type                                                 |
| ---------------- | ----------- | ---------------------------------------------------- |
| `valueChange`    |             | `CustomEvent<string>`                                |
| `viewModeChange` |             | `CustomEvent<ViewMode.MARKDOWN \| ViewMode.PREVIEW>` |


## Dependencies

### Depends on

- [ino-segment-group](../ino-segment-group)
- [ino-segment-button](../ino-segment-button)
- [ino-button](../ino-button)
- [ino-textarea](../ino-textarea)

### Graph
```mermaid
graph TD;
  ino-markdown-editor --> ino-segment-group
  ino-markdown-editor --> ino-segment-button
  ino-markdown-editor --> ino-button
  ino-markdown-editor --> ino-textarea
  ino-button --> ino-spinner
  ino-textarea --> ino-label
  style ino-markdown-editor fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
