# ino-dialog

The ino-dialog component displays a modal window that can be used to display additional information or notify the user.
It is based on the mdc-drawer and is composed of a header, content, and footer section which are fully customizable.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-dialog')
  .addEventListener('openChanged', (e) =>
    alert(`inoOpen has been set to ${e.detail}`),
  );
```

```html

<ino-dialog open="true">
  <div class="awesome-header" slot="header"/>
  <div class="awesome-content"/>
  <div class="awesome-footer" slot="footer"/>
</ino-dialog>
```

### React

```jsx
import React from 'react';
import { Component } from 'react';
import { InoButton, InoDialog } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {

  state = {
    open: false
  };

  handleEvent = () => {
    this.setState((open) => ({
      open: !open
    }))
  };

  render() {
    return (
      <>
        <InoButton onClick={() => this.handleEvent()}>Open Dialog</InoButton>
        <InoDialog open={this.state.open}>
          <div class="awesome-content"/>
        </InoDialog>
      </>
    );
  }
}
```

## Demo

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                     | Type      | Default |
| -------- | --------- | ------------------------------- | --------- | ------- |
| `open`   | `open`    | Opens the dialog if set to true | `boolean` | `false` |


## Events

| Event        | Description                                       | Type               |
| ------------ | ------------------------------------------------- | ------------------ |
| `openChange` | Emits an event upon opening or closing the dialog | `CustomEvent<any>` |


## Slots

| Slot        | Description           |
| ----------- | --------------------- |
| `"content"` | content of the dialog |
| `"footer"`  | footer of the dialog  |
| `"header"`  | header of the dialog  |


## CSS Custom Properties

| Name                            | Description                    |
| ------------------------------- | ------------------------------ |
| `--ino-dialog-background-color` | background color of the dialog |
| `--ino-dialog-content-height`   | height of the content section  |
| `--ino-dialog-footer-height`    | height of the footer section   |
| `--ino-dialog-header-height`    | height of the header section   |
| `--ino-dialog-height`           | height of the dialog           |
| `--ino-dialog-width`            | width of the dialog            |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
