# ino-label

This is an internally used component for various sorts of inputs like `ino-input`, `ino-select` and `ino-textarea`. It is used to display the label for each respective component.

```html
<ino-label
  outline="<boolean>"
  label="<string>"
  required="<boolean>"
  disabled="<boolean>"
>
</ino-label>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute   | Description                                                                        | Type      | Default     |
| ---------- | ----------- | ---------------------------------------------------------------------------------- | --------- | ----------- |
| `disabled` | `disabled`  | Colors the label in an light grey to indicate the disabled status for this element | `boolean` | `undefined` |
| `outline`  | `outline`   | Styles the label in an outlined style                                              | `boolean` | `undefined` |
| `required` | `required`  | Appends * to the label to make it appear as an required input in a form            | `boolean` | `undefined` |
| `showHint` | `show-hint` | Shows a "optional" message, when not inoRequired; Shows a * mark, when inoRequired | `boolean` | `undefined` |
| `text`     | `text`      | The text of the label itself                                                       | `string`  | `undefined` |


## Dependencies

### Used by

 - [ino-input](../ino-input)
 - [ino-select](../ino-select)
 - [ino-textarea](../ino-textarea)

### Graph
```mermaid
graph TD;
  ino-input --> ino-label
  ino-select --> ino-label
  ino-textarea --> ino-label
  style ino-label fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
