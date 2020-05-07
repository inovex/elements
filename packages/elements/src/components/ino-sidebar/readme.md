# ino-sidebar

The ino-sidebar is a modal sidebar that can be used to display additional information.
It functions as a wrapper around the material [drawer](https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/) component.

## Usage

The component can be used as follows:

### Web Component

```js
document
    .querySelector('ino-sidebar')
    .addEventListener('openChange', (e) => console.log(`state of sidebar changed to ${e.detail}`);
```

```html
<ino-sidebar>
  <div class="sidebar-header" slot="header">
    <ino-icon ino-clickable ino-icon="close-s"></ino-icon>
  </div>
  <div class="sidebar-content" slot="content">
    <ino-list>
      <ino-list-item ino-text="List item"></ino-list-item>
      <ino-list-item ino-text="List item"></ino-list-item>
    </ino-list>
  </div>
</ino-sidebar>
```

### React
```
import React from 'react';
import { Component } from 'react';
import { InoSidebar, InoButton } from '@inovex/elements/dist/react';

class MyComponent extends Component {

  state = {
    expanded: false
  };

  handleClick = () => {
    this.setState((state) => ({
      expanded: !state.expanded
    }));
  };

  render() {
    return (
      <InoButton onClick={() => this.handleClick()}>Sidebar</InoButton>
      <InoSidebar inoOpen={this.state.expanded}></InoSidebar>
    )
  }

}
```

## Sidenotes

The empty `div` tag with the `tabindex="0"` attribute as well as the `<div class="mdc-drawer-scrim"/>` tag
are indispensable for the sidebar to work properly. For further information,
refer to https://github.com/material-components/material-components-web/issues/5615 and
https://github.com/material-components/material-components-web/tree/master/packages/mdc-drawer.

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                                 | Type      | Default     |
| --------------- | ----------------- | ----------------------------------------------------------- | --------- | ----------- |
| `inoAlignRight` | `ino-align-right` | Aligns the sidebar to the right (true) or left (false) side | `boolean` | `false`     |
| `inoOpen`       | `ino-open`        | Expands the sidebar                                         | `boolean` | `false`     |
| `name`          | `name`            | Name of the component                                       | `string`  | `undefined` |


## Events

| Event        | Description                                                 | Type               |
| ------------ | ----------------------------------------------------------- | ------------------ |
| `openChange` | Emits an event if the user expands or collapses the sidebar | `CustomEvent<any>` |


## CSS Custom Properties

| Name              | Description                    |
| ----------------- | ------------------------------ |
| `--sidebar-width` | The width of the open sidebar. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
