# ino-segment-group

A button group that can be used as an alternative to drop-down menus.

## Usage

The component can be used as follows:

### Web Component

```js
document
    .querySelector('ino-segment-group')
    .addEventListener('checkedChange', (e) => console.log(`${e.target} was checked!`));
```

```html
<ino-segment-group value="1" name="<string>">
    <ino-segment-button value="1">Option 1</ino-segment-button>
    <ino-segment-button value="2">Option 2</ino-segment-button>
    <ino-segment-button value="3">Option 3</ino-segment-button>
</ino-segment-group>
```

### React

```js
import { Component } from 'react';
import { InoSegmentButton, InoSegmentGroup } from '@inovex/elements/dist/react';

class MyComponent extends Component {

  state = {
    val: 1
  };

  handleEvent = (val) => {
    this.setState({val: val});
  };

  render() {
      return (
      <InoSegmentGroup value={this.state.val} name="my-group">
        <InoSegmentButton value="1" onCheckedChange={() => this.handleEvent("1")}>Option 1</InoSegmentButton>
        <InoSegmentButton value="2" onCheckedChange={() => this.handleEvent("2")}>Option 2</InoSegmentButton>
        <InoSegmentButton value="3" onCheckedChange={() => this.handleEvent("3")}>Option 3</InoSegmentButton>
      </InoSegmentGroup>
      );
  }
}
```

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                | Type     | Default     |
| -------- | --------- | -------------------------- | -------- | ----------- |
| `name`   | `name`    | Name of the segment group  | `string` | `undefined` |
| `value`  | `value`   | Value of the segment group | `any`    | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
