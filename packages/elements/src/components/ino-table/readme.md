# ino-table
The ino-table is a custom table used to display sets of data across multiple columns.
It currently supports different states (selected, active), sorting and loading indication.

> The component is based on the [mdc-data-table](https://github.com/material-components/material-components-web/tree/master/packages/mdc-data-table).

## Usage
The table itself is a wrapper component around native `tr` and `td`. It renders a native `table` element itself and provides the styling for rows and column cell. As a sidenode it should be said, that having separate `ino-table-row` and `ino-table-header-cell` components would be the more consistent way with respect to the other components (for instance select or radio buttons). However, in large tables, rendering thousands of elements would be a massive overhead for mainly styling purposes.

Nontheless, a separate `ino-table-header-cell` element contains all the sorting and searching behaviour you may need to make more your tables more intelligent.


### Web Component

```html
<ino-table>
  <tr slot="header-row">
    <td>Column A</td>
    <td>Column B</td>
  </tr>
  <tr>
    <td>Cell A1</td>
    <td>Cell B1</td>
  </tr>
  <tr>
    <td>Cell A2</td>
    <td>Cell B2</td>
  </tr>
</ino-table>
```

### React

```jsx
import React from 'react';
import { Component } from 'react';
import { InoTable, InoButton } from '@inovex/elements-react';

class MyComponent extends Component {

  state = { selected: false };

  handleEvent = () => this.setState(state => ({ selected: !state.selected }));

  render() {
    return (
      <InoTable>
        <tr className={ this.state.selected ?? 'ino-table__row--selected' }>
          <td>
            <InoButton onClick={this.handleEvent()}>Click Me</InoButton>
          </td>
        </tr>
      </InoTable>
    );
  }
}
```

## States
The table supports the following states:

### Loading indication
In order to show the user that data is beeing loaded and to prohibit any user interaction, set `loading="true"` on the `ino-table`.
Additionally, one can display a `<ino-progress-bar>` as follows:

```html
<ino-progress-bar slot="loading-indicator" active indeterminate></ino-progress-bar>
```

Provide the progress bar as child of the `ino-table` in order render the slot `loading-indicator` at the desired position. Also note the debounce time of 500ms in the example above. While the progress-bar is only shown after a loading time of more than 500ms, the table is immediatelly disabled for any user interaction.

> **Note** The table's `loading` and the progress indicator's `active` attribute are **independent**. You are responsible by yourself to keep their values in sync.

## Sorting
The table provides the general setup for sorting. For full flexibility, the table does not actually perform the sorting by itself but notifies you that the user wants to sort for a column and direction. As a reaction, you may want to sort for the column and direction and update the respective properties/attributes on the `ino-table` element.

First, set the sorted column, provide the `sort-column-id` and `sort-direction` attributes/properties on `ino-table`. In order to receive updates as soon as the sorting direction or column changes, use the `sortChange` event which contains the `columnId` and the target `sortDirection`.


**Example:**

```js
const sortChangeHandler = e => {
  const inoTable = e.target as Components.InoTable;
  const { columnId, sortDirection } = e.detail;

  // Implement sorting algorithm here ...

  inoTable.sortColumnId = columnId;
  inoTable.sortDirection = sortDirection;
};
document.addEventListener('sortChange', sortChangeHandler);
```

```html
<ino-table sort-column-id="column-a" sort-direction="asc">
  <tr>
    <ino-table-header-cell column-id="column-a">Column A</ino-table-header-cell>
    <ino-table-header-cell column-id="column-b">Column B</ino-table-header-cell>
  </tr>
  <tr>
    <td>Cell A1</td>
    <td>Cell B1</td>
  </tr>
  <tr>
    <td>Cell A2</td>
    <td>Cell B2</td>
  </tr>
</ino-table>
```

## Rows and Cells

### Table row
For table rows use the native `tr` elements. Use the `slot="header-row"` in order to render the row as header within the `table > thead`. The default slot of the `ino-table` is treated as table content containg multiple `tr` elements. For default styling, there is no class needed. However, the following state classes are available:

| State              | Usage                | Description                                      |
| ------------------ | -------------------- | ------------------------------------------------ |
| Selected table row | `<tr class="ino-table__row--selected"></tr>` | Indicates that the user selected a row. |
| Selected table row | `<tr class="ino-table__row--active"></tr>`   | Indicates that the user activates a row (for instance to show detail information) |

Furthermore, the `--ino-table-row-height` css variables allows you to increase or decrease the density of rows. This may be useful to provide the user customization option.


### Table cell
For table cells `td`, `th` or, if needed, `ino-table-header-cell` elements. All table cells retrieve their styling options from the wrapping `ino-table` element, so you don't need to set any classes by default. However, you may want to use the following classes to provide customazation options:

| Name               | Usage                | Description                                      |
| ------------------ | -------------------- | ------------------------------------------------ |
| Table cell selector | `<td class="ino-table__cell--checkbox"></td>` | Indicates that a table cell contains a checkbox which to select the current row (body) or all rows (header) |
| Table cell numeric | `<td class="ino-table__cell--numeric"></td>`   | Indicates that the value is numeric (Mainly sets `text-align: right`). |


<!-- Auto Generated Below -->


## Properties

| Property        | Attribute        | Description                                                                                                                                                                | Type              | Default     |
| --------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----------- |
| `loading`       | `loading`        | True, if the table is loading data.  Use this in combination with a `ino-progress-bar` having `slot="loading-indicator"` to provide an additional horiziontal loading bar. | `boolean`         | `undefined` |
| `noHover`       | `no-hover`       | If true, disables row hover styling.  Useful for simples tables with few rows or columns.                                                                                  | `boolean`         | `undefined` |
| `sortColumnId`  | `sort-column-id` | Identifier of the column currently sorted by.  Needs to the match the column ids provided on `ino-table-header-cell` elements.                                             | `string`          | `undefined` |
| `sortDirection` | `sort-direction` | Direction of the column currently sorted by.                                                                                                                               | `"asc" \| "desc"` | `undefined` |
| `stickyHeader`  | `sticky-header`  | True, if table header stays visible on vertical scroll                                                                                                                     | `boolean`         | `false`     |


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

| Name                     | Description           |
| ------------------------ | --------------------- |
| `--ino-table-row-height` | height of a table row |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
