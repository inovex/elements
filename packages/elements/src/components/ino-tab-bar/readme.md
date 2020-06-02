# ino-tab-bar

Tabs organize and allow navigation between groups of content that are related and at the same hierarchical level. The Tab Bar contains the Tab Scroller and Tab components. It functions as a wrapper around the material [Tab Bar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar) component.

### Usage

The component can be used as follows:

```js
document
  .querySelector('ino-tab-bar')
  .addEventListener('activeTabChange', e =>
    console.log(`The index of the new tab is: ${e.detail}`)
  );
```

```jsx
<ino-tab-bar
  ino-active-tab="<number>"
  onactivetabchange="handleActiveTabChange()"
>
  <ino-tab ...></ino-tab>
</ino-tab-bar>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoTab, InoTabBar } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoTabBar inoActiveTab={2}>
        <InoTab inoLabel="Tab #1" />
        <InoTab inoLabel="Tab #2" />
        <InoTab inoLabel="Tab #3" />
      </InoTabBar>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoTab, InoTabBar } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const TabBar: React.FunctionComponent<Components.InoTabBarAttributes> = props => {
  const { inoActiveTab } = props;

  return <InoTabBar inoActiveTab={inoActiveTab}>{props.children}</InoTabBar>;
};

class MyComponent extends Component {
  render() {
    return (
      <TabBar inoActiveTab={2}>
        <InoTab inoLabel="Tab #1" />
        <InoTab inoLabel="Tab #2" />
        <InoTab inoLabel="Tab #3" />
      </TabBar>
    );
  }
}
```

## Additional Hints

### Control flow

The tab bar has a controlled (unmanaged) attribute `ino-active-tab`. For this reason, the tab doesn't change on user interactions but on updates of `ino-active-tab`. Listen to `activeTabChange`, sync it with your local state and pass the new index to the component again to activate the tab.

```jsx
<ino-tab-bar
  ino-active-tab={this.state.index}
  activeTabChange={e => (this.state.index = e.detail)}
/>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                                           | Type     | Default |
| -------------- | ---------------- | ----------------------------------------------------- | -------- | ------- |
| `inoActiveTab` | `ino-active-tab` | Activates the tab at the given index (**unmanaged**). | `number` | `0`     |


## Events

| Event             | Description                                                                         | Type               |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------ |
| `activeTabChange` | Emits when a tab changes. Contains the index of the activated tab in `event.detail` | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
