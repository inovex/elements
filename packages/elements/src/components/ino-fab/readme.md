# ino-fab

A floating action button represents the primary action in an application. [Floating Action Button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab) component.
It appears in front of all screen content, typically as a circular shape with an icon in its center.

FABs come in three types: regular, mini, and extended.

### Usage

The component can be used as follows:

```html
<ino-fab
  icon="<string>"
  label="<string>"
  extended
  mini
  tooltip-placement="<string>"
  disabled
>
</ino-fab>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoFab } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  handleClick = (e: any) => {
    alert(`Fab was clicked`);
  };

  render() {
    return (
      <InoFab
        inoIcon="star"
        inoLabel="This is a fab"
        onClick={this.handleClick}
      />
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoFab } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const Fab: React.FunctionComponent<Components.InoFabAttributes> = (props) => {
  const { inoLabel, inoIcon } = props;

  const handleClick = (e: any) => {
    alert(`Fab was clicked`);
  };

  return <InoFab inoIcon={inoIcon} inoLabel={inoLabel} onClick={handleClick} />;
};

class MyComponent extends Component {
  render() {
    return <Fab inoLabel="This is a fab" inoIcon="star" />;
  }
}
```

## Additional Hints

**Content**: Use the  label` attribute to set the text of a fab. To add an icon, use the  icon` attribute.

## Demo

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute           | Description                                                                                                                                                                                          | Type                                                                                                                                                                                                                   | Default      |
| ------------------ | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `disabled`         | `disabled`          | Disables the button.                                                                                                                                                                                 | `boolean`                                                                                                                                                                                                              | `false`      |
| `edgePosition`     | `edge-position`     | The position of the edge.                                                                                                                                                                            | `"bottom-left" \| "bottom-right" \| "none" \| "top-left" \| "top-right"`                                                                                                                                               | `'top-left'` |
| `extended`         | `extended`          | Optional, modifies the FAB to wider size which includes a text label.                                                                                                                                | `boolean`                                                                                                                                                                                                              | `false`      |
| `icon`             | `icon`              | <span style="color:red">**[DEPRECATED]**</span> This property is deprecated and will be removed with the next major release. Instead, use the `icon-leading` slot.<br/><br/>Adds an icon to the Fab. | `string`                                                                                                                                                                                                               | `undefined`  |
| `label`            | `label`             | Optional, for the text label. Applicable only for Extended FAB.                                                                                                                                      | `string`                                                                                                                                                                                                               | `undefined`  |
| `mini`             | `mini`              | Optional, modifies the FAB to a smaller size                                                                                                                                                         | `boolean`                                                                                                                                                                                                              | `false`      |
| `tooltipPlacement` | `tooltip-placement` | The placement of the tooltip which will be displayed when the button is not extended. Use `none`, if you don't want a tooltip to be displayed.                                                       | `"auto" \| "auto-end" \| "auto-start" \| "bottom" \| "bottom-end" \| "bottom-start" \| "left" \| "left-end" \| "left-start" \| "none" \| "right" \| "right-end" \| "right-start" \| "top" \| "top-end" \| "top-start"` | `'left'`     |


## Slots

| Slot             | Description                  |
| ---------------- | ---------------------------- |
| `"icon-leading"` | For the icon to be prepended |


## CSS Custom Properties

| Name                              | Description                           |
| --------------------------------- | ------------------------------------- |
| `--fab-background-color`          | Background color                      |
| `--fab-background-color-active`   | Background color if active            |
| `--fab-background-color-disabled` | Background color if disabled          |
| `--fab-background-color-hover`    | Background color on hover             |
| `--fab-color-disabled`            | Text color if disabled                |
| `--fab-icon-color`                | Color of the slotted icon             |
| `--fab-icon-color-disabled`       | Color of the slotted icon if disabled |
| `--ino-fab-color`                 | Text color                            |


## Dependencies

### Used by

 - [ino-fab-set](../ino-fab-set)

### Depends on

- [ino-tooltip](../ino-tooltip)
- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-fab --> ino-tooltip
  ino-fab --> ino-icon
  ino-fab-set --> ino-fab
  style ino-fab fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
