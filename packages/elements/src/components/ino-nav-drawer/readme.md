# ino-nav-drawer

A navigation drawer component with different variants, setting up the base layout for your app.
It functions as a wrapper around the material [drawer](https://github.com/material-components/material-components-web/blob/master/packages/mdc-drawer/) component.

> Note: The navigation drawer works best with `ino-list` and `ino-nav-item`s inside.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-nav-drawer')
  .addEventListener('openChange', _ => alert('Drawer was toggled!')) // watch for toggle change
  .setAttribute('ino-open', true); // open drawer
```

```html
<ino-nav-drawer
  ino-open="<boolean>"
  ino-anchor="left|right"
  ino-variant="docked|dismissible|modal"
>
  <ino-list slot="content">
    <ino-nav-item ino-text="View1">
      <ino-icon ino-icon="user">
    </ino-nav-item>
    <ino-nav-item ino-text="View2">
      <ino-icon ino-icon="settings">
    </ino-nav-item>
  </ino-list>

  <main slot="app">
    App Content
  </main>
</ino-nav-drawer>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoNavDrawer } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoNavDrawer
        inoOpen="false"
        inoAnchor="left"
        inoVariant="docked"
        onOpen={_ => alert('Yeah, you just opened the drawer!')}
      >
        <ino-list slot="header">
          <ino-img src="https://picsum.photos/50/50" />
        </ino-list>
        <ino-list slot="content">
          <ino-nav-item ino-text="Some Link">
            <ino-icon ino-icon="onboarding"></ino-icon>
          </ino-nav-item>
        </ino-list>
        <ino-list slot="footer">
          <ino-nav-item ino-text="My Profile">
            <ino-img
              src="https://picsum.photos/id/1027/250/250.jpg"
              style="border-radius: 50%"
              ino-ratio-width="1"
              ino-ratio-height="1"
            ></ino-img>
          </ino-nav-item>
        </ino-list>

        <main slot="app">
          <App /> /* Your app goes here */
        </main>
      </InoNavDrawer>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoNavDrawer } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const Drawer: React.FunctionComponent<Components.InoNavDrawerAttributes> = props => {
  const { inoOpen, inoVariant, inoAnchor } = props;

  return (
    <InoNavDrawer
      inoOpen={inoOpen}
      inoVariant={inoVariant}
      onClick={onClick}
    >
      Drawer Content

      <main slot="app">
        App Content
      </main>
    </InoNavDrawer>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Drawer
        inoVariant="dismissible"
        inoAnchor="left"
        inoOpen="true"
      />
    );
  }
}
```

## Demo

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                    | Type                                   | Default    |
| ------------ | ------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------- | ---------- |
| `inoAnchor`  | `ino-anchor`  | Side from which the drawer will appear. Possible values: `left` (default), `right`.            | `"left" \| "right"`                    | `'left'`   |
| `inoOpen`    | `ino-open`    | Marks this element as open. (**unmanaged**)                                                    | `boolean`                              | `false`    |
| `inoVariant` | `ino-variant` | The variant to use for the drawer Possible values: `docked` (default), `dismissible`, `modal`. | `"dismissible" \| "docked" \| "modal"` | `'docked'` |


## Events

| Event        | Description                                                                                                           | Type                   |
| ------------ | --------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `openChange` | Emits when the user clicks on the drawer toggle icon to change the open state. Contains the status in `event.detail`. | `CustomEvent<boolean>` |


## CSS Custom Properties

| Name                                   | Description                                             |
| -------------------------------------- | ------------------------------------------------------- |
| `--ino-nav-drawer-background`          | Background of the drawer.                               |
| `--ino-nav-drawer-height`              | Height of the drawer.                                   |
| `--ino-nav-drawer-text-color`          | Color of text inside the drawer.                        |
| `--ino-nav-drawer-timing-function`     | Timing function of the slide animation of the drawer.   |
| `--ino-nav-drawer-transition-duration` | Duration of the slide animation of the drawer.          |
| `--ino-nav-drawer-width-closed`        | Docked variant only! The width of the collapsed drawer. |
| `--ino-nav-drawer-width-open`          | The width of the open drawer.                           |


## Dependencies

### Depends on

- [ino-icon-button](../ino-icon-button)

### Graph
```mermaid
graph TD;
  ino-nav-drawer --> ino-icon-button
  ino-icon-button --> ino-icon
  style ino-nav-drawer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
