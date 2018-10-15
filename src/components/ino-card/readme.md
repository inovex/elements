# ino-card
A card is as flexible and extensible content component. It functions as a wrapper around the material [card](https://github.com/material-components/material-components-web/tree/master/packages/mdc-card) component.

So far, the card is a simple content component with title and subtitle but will be extended for more complex use-cases in future.

### Usage
The component can be used as follows:
```html
<ino-card 
  ino-subtitle="<string>"
  ino-title="<string>"
  ino-outline="<boolean>"
  ino-image="<string>"
  ino-aspect-ratio="<string>"
  ino-media-title="<boolean>">
  <div slot="content"><!-- Any content --></div>
  <ino-button slot="action-buttons" ino-fill="transparent">Read</ino-button>
  <ino-button slot="action-buttons" ...>Bookmark</ino-button>
  <ino-icon-button slot="action-icons" ...></ino-icon-button>
  <ino-icon-button slot="action-icons" ...></ino-icon-button>
  <ino-icon-button slot="action-icons" ...></ino-icon-button>
</ino-button>
```

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                                                                                       | Type      |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `inoAspectRatio` | `ino-aspect-ratio` | Automatically scales the media areas's height according to its width. Possible values: `16-9` (default), `square`                                                                                                 | `string`  |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `string`  |
| `inoImage`       | `ino-image`        | Displays a media area with a custom `background-image` with `background-size: cover`                                                                                                                              | `string`  |
| `inoMediaTitle`  | `ino-media-title`  | Displays the card title inside the image                                                                                                                                                                          | `boolean` |
| `inoOutline`     | `ino-outline`      | Removes the shadow and displays a hairline outline instead.                                                                                                                                                       | `boolean` |
| `inoSubtitle`    | `ino-subtitle`     | An optional subtitle of this card.                                                                                                                                                                                | `string`  |
| `inoTitle`       | `ino-title`        | An optional title of this card.                                                                                                                                                                                   | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
