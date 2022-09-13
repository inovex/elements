# ino-progress-bar

The ino-progress-bar is a linear progress bar based on the mdc-linear-progress component.

## Usage

The component can be used as follows:

```html
<ino-progress-bar
  buffer="0.7"
  progress="0.4"
  reversed
  indeterminate
  label="Progress Bar"
>
</ino-progress-bar>
```

```jsx
import React from 'react';
import { Component } from 'react';
import { InoProgressBar, InoButton } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
    state = {
      indeterminate: false
    };

    handleClick = () => {
      this.setState((state) => ({
        indeterminate: !state.indeterminate
      }));
    };

    render() {
      return (
        <>
          <InoButton onClick={() => this.handleClick()}>Click me!</InoButton>
          <InoProgressBar indeterminate={this.state.indeterminate}></InoProgressBar>
        </>
      )
    }
}
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                             | Type      | Default     |
| --------------- | --------------- | ----------------------------------------------------------------------- | --------- | ----------- |
| `buffer`        | `buffer`        | Sets the buffer progress                                                | `number`  | `0`         |
| `indeterminate` | `indeterminate` | Indicates whether the state of the progress bar is indeterminate        | `boolean` | `false`     |
| `label`         | `label`         | Sets the label of the progress bar                                      | `string`  | `undefined` |
| `progress`      | `progress`      | Sets the progress of the progress bar. Should always be between 0 and 1 | `number`  | `0`         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
