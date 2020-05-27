# ino-progress-bar
The ino-progress-bar is a linear progress bar based on the mcw-linear-progress component.

## Usage

The component can be used as follows:

```html
<ino-progress-bar
    ino-buffer="0.7"
    ino-progress="0.4"
    ino-reversed
    ino-indeterminate
    ino-label="Progress Bar"
>
</ino-progress-bar>
```

```jsx harmony
import React from 'react';
import { Component } from 'react';
import { InoProgressBar, InoButton } from '@inovex/elements/dist/react';

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
        <InoButton onClick={() => this.handleClick()}>Click me!</InoButton>
        <InoProgressBar inoIndeterminate={this.state.indeterminate}></InoProgressBar>
      )
    }
}
```


<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                            | Type      | Default     |
| ------------------ | ------------------- | ---------------------------------------------------------------------- | --------- | ----------- |
| `inoBuffer`        | `ino-buffer`        | Sets the buffer progress                                               | `number`  | `0`         |
| `inoIndeterminate` | `ino-indeterminate` | Indicates whether the state of the progress bar is indeterminate       | `boolean` | `false`     |
| `inoLabel`         | `ino-label`         | Sets the label of the progress bar                                     | `string`  | `undefined` |
| `inoProgress`      | `ino-progress`      | Sets the progress of the progress bar Should always be between 0 and 1 | `number`  | `0`         |
| `inoReversed`      | `ino-reversed`      | Reverses the progress bar                                              | `boolean` | `false`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
