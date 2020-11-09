# ino-option

An option component that can be used to add options to an ino-select component.

### Usage

The component can be used as follows:

```html
<ino-option
    disabled
    selected
    value="<string>"
>
   Content
</ino-option>
```


<!-- Auto Generated Below -->


## Properties

| Property             | Attribute  | Description         | Type      | Default     |
| -------------------- | ---------- | ------------------- | --------- | ----------- |
| `disabled`           | `disabled` | Disables the option | `boolean` | `false`     |
| `selected`           | `selected` | Selects the option  | `boolean` | `false`     |
| `value` _(required)_ | `value`    | Value of the option | `string`  | `undefined` |


## CSS Custom Properties

| Name                                              | Description                               |
| ------------------------------------------------- | ----------------------------------------- |
| `--ino-option-deselected-background-color`        | Background color if deselected            |
| `--ino-option-deselected-background-color-active` | Background color if active and deselected |
| `--ino-option-deselected-background-color-focus`  | Background color on focus if deselected   |
| `--ino-option-deselected-background-color-hover`  | Background color on hover if deselected   |
| `--ino-option-selected-background-color`          | Background color if selected              |
| `--ino-option-selected-background-color-active`   | Background color if active and selected   |
| `--ino-option-selected-background-color-focus`    | Background color on focus if selected     |
| `--ino-option-selected-background-color-hover`    | Background color on hover if selected     |


## Dependencies

### Used by

 - [ino-option-group](../ino-option-group)

### Graph
```mermaid
graph TD;
  ino-option-group --> ino-option
  style ino-option fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
