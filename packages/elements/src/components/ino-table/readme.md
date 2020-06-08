# ino-table

The ino-table is a custom-built data table that can be used to display large sets of data across multiple columns and rows.
The component is based on the mdc-data-table.

## Usage

The component is composed of multiple sub-components and can be used as follows:

### Web Component

```html
<ino-table>
    <ino-table-row slot="header">
        <ino-table-cell>Column A</ino-table-cell>
        <ino-table-cell>Column B</ino-table-cell>
    </ino-table-row>
    <ino-table-row slot="body">
        <ino-table-cell>Cell A1</ino-table-cell>
        <ino-table-cell>Cell B1</ino-table-cell>
    </ino-table-row>
    <ino-table-row slot="body">
        <ino-table-cell>Cell A2</ino-table-cell>
        <ino-table-cell>Cell B2</ino-table-cell>
    </ino-table-row>
</ino-table>
```

### React

```jsx harmony
import React from 'react';
import { Component } from 'react';
import { InoTable, InoTableRow, InoTableCell, InoButton } from '@inovex/elements/dist/react';

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
        <InoTableRow selected={this.state.selected}>
          <InoTableCell>
            <InoButton onClick={this.handleEvent()}>Click Me</InoButton>
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
