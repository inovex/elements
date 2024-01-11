# ino-table



<!-- Auto Generated Below -->


## Overview

The ino-table is a custom table used to display sets of data across multiple columns.
It currently supports different states (selected, active), sorting and loading indication.

> The component is based on the [mdc-data-table](https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table).

## Properties

| Property        | Attribute        | Description                                                                                                                                                               | Type              | Default     |
| --------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| `loading`       | `loading`        | True, if the table is loading data.  Use this in combination with a `ino-progress-bar` having `slot="loading-indicator"` to provide an additional horizontal loading bar. | `boolean`         | `undefined` |
| `noHover`       | `no-hover`       | If true, disables row hover styling.  Useful for simples tables with few rows or columns.                                                                                 | `boolean`         | `undefined` |
| `sortColumnId`  | `sort-column-id` | Identifier of the column currently sorted by.  Needs to match the column ids provided on `ino-table-header-cell` elements.                                                | `string`          | `undefined` |
| `sortDirection` | `sort-direction` | Direction of the column currently sorted by.                                                                                                                              | `"asc" \| "desc"` | `undefined` |
| `stickyHeader`  | `sticky-header`  | True, if table header stays visible on vertical scroll                                                                                                                    | `boolean`         | `false`     |


## Events

| Event        | Description                                             | Type                                      |
| ------------ | ------------------------------------------------------- | ----------------------------------------- |
| `sortChange` | Emits that the sort direction or column id has changed. | `CustomEvent<SortDirectionChangeDetails>` |


## Slots

| Slot                  | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| `"default"`           | Table content (data, not header)                                                 |
| `"header-row"`        | `<tr>` element containing the table header cells (td, th, ino-table-header-cell) |
| `"loading-indicator"` | `<ino-progess-bar>` element used for an additional loading state.                |


## CSS Custom Properties

| Name                     | Description                      |
| ------------------------ | -------------------------------- |
| `--ino-table-row-height` | Height of a table row. [size:48] |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
