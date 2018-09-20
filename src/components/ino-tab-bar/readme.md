# ino-tab-bar
Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy. The Tab Bar contains the Tab Scroller and Tab components. It functions as a wrapper around the material [Tab Bar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-tab-bar) component.


### Usage
The component can be used as follows:

```jsx
<ino-tab-bar  
  ino-active-tab="<number>" 
  onInoTabActivated={e => handler(e.detail.inoIndex)}>
  
  <ino-tab ...></ino-tab>
</ino-tab-bar>
```

**Change active Tab**: To change the active tab, listen to `tabActivated` Event of `ino-tab` and change `ino-active-tab` Attribute of `ino-tab-bar`.


<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description                           | Type     |
| -------------- | ---------------- | ------------------------------------- | -------- |
| `inoActiveTab` | `ino-active-tab` | Activates the tab at the given index. | `number` |


## Events

| Event             | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------- |
| `inoTabActivated` | Emits when a tab is activated. Contains activated tab in `event.detail.inoIndex` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
