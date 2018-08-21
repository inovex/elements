# ino-card
A card is as flexible and extensible content component. It functions as a wrapper around the material [card](https://github.com/material-components/material-components-web/tree/master/packages/mdc-card) component.

So far, the card is a simple content component with title and subtitle but will be extended for more complex use-cases in future.

### Usage
The component can be used as follows:
```html
<ino-card 
  ino-subtitle="<string>"
  ino-title="<string>"
  ino-outline="<boolean>">
  <!-- Any content -->
</ino-button>
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                                                 | Type      |
| ------------- | -------------- | ----------------------------------------------------------- | --------- |
| `inoOutline`  | `ino-outline`  | Removes the shadow and displays a hairline outline instead. | `boolean` |
| `inoSubtitle` | `ino-subtitle` | An optional subtitle of this card.                          | `string`  |
| `inoTitle`    | `ino-title`    | An optional title of this card.                             | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
