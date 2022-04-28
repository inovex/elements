# ino-header

A header component with a separator.

## Usage

The component can be used as follows:

### Web Component

```html
<ino-header text="<string>"></ino-header>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoHeader } from '@inovex.de/elements-react/';

class MyComponent extends Component {
  render() {
    return <InoHeader text="My awesome header!"></InoHeader>;
  }
}
```

## Demo

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description             | Type     | Default     |
| ------------------- | --------- | ----------------------- | -------- | ----------- |
| `text` _(required)_ | `text`    | The text of this header | `string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
