# ino-tab-bar

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. The Tab Bar contains the Tab Scroller and Tab components. It functions as a wrapper around the material [Tab Bar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar) component.

### Usage

The component can be used as follows:

```jsx
<ino-tab-bar
  ino-active-tab="<number>"
  activeTabChange={e => handler(e.detail.inoIndex)}>

  <ino-tab ...></ino-tab>
</ino-tab-bar>
```

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

| Event             | Description                                                         | Type                |
| ----------------- | ------------------------------------------------------------------- | ------------------- |
| `activeTabChange` | Emits when a tab changes. Contains activating tab in `event.detail` | `CustomEvent<void>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
