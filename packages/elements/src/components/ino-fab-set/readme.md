# ino-fab-set

A floating action button (FAB) performs the primary, or most common, action on a screen.
It appears in front of all screen content, typically as a circular shape with an icon in its center.

FABs come in three types: regular, mini, and extended.

When hovered, a FAB can display three to six related actions in the form of a speed dial.

### Usage

The component can be used as follows:

```html
<ino-fab-set
  ino-top-bottom-location="<string>"
  ino-left-right-location="<string>"
  ino-dial-direction="<string>"
>
  <ino-fab slot="primary-fab" ...></ino-fab>
  <ino-fab ...></ino-fab>
  <ino-fab ...></ino-fab>
  ...
</ino-fab-set>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoFab, InoFabSet } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  handleClick = (e: any) => {
    alert(`Fab was clicked`);
  };

  render() {
    return (
      <FabSet inoDialDirection="top">
        <InoFab onClick={handleClick} slot="primary-fab" inoIcon="star" />
        <InoFab
          onClick={handleClick}
          inoMini
          inoLabel="Profile"
          inoIcon="person"
        />
        <InoFab
          onClick={handleClick}
          inoMini
          inoLabel="Search"
          inoIcon="search"
        />
        <InoFab onClick={handleClick} inoMini inoLabel="Help" inoIcon="help" />
      </FabSet>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoFab, InoFabSet } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const FabSet: React.FunctionComponent<Components.InoFabSetAttributes> = props => {
  const { inoDialDirection } = props;

  return (
    <InoFabSet inoDialDirection={inoDialDirection}>{props.children}</InoFabSet>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <FabSet inoDialDirection="top">
        <InoFab slot="primary-fab" inoIcon="star" />
        <InoFab inoMini inoLabel="Profile" inoIcon="person" />
        <InoFab inoMini inoLabel="Search" inoIcon="search" />
        <InoFab inoMini inoLabel="Help" inoIcon="help" />
      </FabSet>
    );
  }
}
```

## Additional Hints

**Content**: Put the the Fabs for the speed dial inside of `ino-fab-set` as `ino-fab`.

**Primary FAB**: The Primary FAB is defined with the slot named `primary-fab`.

<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                                   | Type                                     | Default    |
| ---------------------- | ------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------- |
| `inoDialDirection`     | `ino-dial-direction`      | The direction of the speed dial. Possible values: `top` (default), `bottom`, `right`, `left`. | `"bottom" \| "left" \| "right" \| "top"` | `'top'`    |
| `inoLeftRightLocation` | `ino-left-right-location` | The side where the Fab is displayed. Possible values: `right`, `left` (default).              | `"left" \| "right"`                      | `'left'`   |
| `inoTopBottomLocation` | `ino-top-bottom-location` | The side where the Fab is displayed. Possible values: `top`, `bottom` (default).              | `"bottom" \| "top"`                      | `'bottom'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
