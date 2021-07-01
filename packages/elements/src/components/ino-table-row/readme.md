# ino-table-row

The ino-table-row component is a sub-component of the ino-table and it is mainly used to add additional data or
header rows to the table.

## Usage

The component can be used as follows:

```html
<ino-table-row header-row selected>
  <ino-table-cell>Cell content</ino-table-cell>
</ino-table-row>
```

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                  | Type      | Default |
| ----------- | ------------ | -------------------------------------------- | --------- | ------- |
| `headerRow` | `header-row` | Indicates that the row is a header row       | `boolean` | `false` |
| `selected`  | `selected`   | Indicates whether the row is selected or not | `boolean` | `false` |


## Slots

| Slot        | Description                  |
| ----------- | ---------------------------- |
| `"default"` | One or more `ino-table-cell` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
