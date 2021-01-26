# ino-table

The ino-table is a custom-built data table that can be used to display large sets of data across multiple columns and rows.
The component is based on the mdc-data-table.

## Usage

The component comprises two sub-components: `ìno-table-row` and `ino-table-cell`. The `ino-table-row` can be used to
add a row to the table. To add a header row, all you have to do is to add the `ino-header-row` property to the component
and set `slot=header`.
Correspondingly, the `ino-table-cell` can be used to add a column to the table by adding a cell to each row.
You should always set `ino-numeric` to true if the cell contains numeric values.
The following examples illustrate how the `ino-table` can be used:

### Web Component

```html
<ino-table>
  <ino-table-row slot="header" ino-header-row>
    <ino-table-cell>ID</ino-table-cell>
    <ino-table-cell>Column A</ino-table-cell>
    <ino-table-cell>Column B</ino-table-cell>
  </ino-table-row>
  <ino-table-row>
    <ino-table-cell ino-numeric>1</ino-table-cell>
    <ino-table-cell>Cell A1</ino-table-cell>
    <ino-table-cell>Cell B1</ino-table-cell>
  </ino-table-row>
  <ino-table-row>
    <ino-table-cell ino-numeric>2</ino-table-cell>
    <ino-table-cell>Cell A2</ino-table-cell>
    <ino-table-cell>Cell B2</ino-table-cell>
  </ino-table-row>
</ino-table>
```

### React

```jsx harmony
import React from 'react';
import { Component } from 'react';
import { InoTable, InoTableRow, InoTableCell, InoButton } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {

  state = {
    selected: false
  };

  handleEvent = () => {
    this.setState((state) => ({
      selected: !state.selected
    }));
  };

  render() {
      return (
      <InoTable>
        <InoTableRow inoHeaderRow>
          <InoTableCell>ID</InoTableCell>
          <InoTableCell>Title</InoTableCell>
          <InoTableCell>Action</InoTableCell>
        <InoTableRow>
        <InoTableRow selected={this.state.selected}>
          <InoTableCell inoNumeric>1</InoTableCell>
          <InoTableCell>image.png</InoTableCell>
          <InoTableCell>
            <InoButton onClick={this.handleEvent()}>Download</InoButton>
          </InoTableCell>
        </InoTableRow>
      </InoTable>
      );
  }
}
```

<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
