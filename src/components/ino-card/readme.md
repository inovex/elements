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

| Property         | Attribute          | Description                                                                                                                                                                                                       | Type      | Default     |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoAspectRatio` | `ino-aspect-ratio` | Automatically scales the media areas's height according to its width. Possible values: `16-9` (default), `square`                                                                                                 | `string`  | `'16-9'`    |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `string`  | `undefined` |
| `inoImage`       | `ino-image`        | Displays a media area with a custom `background-image` with `background-size: cover`                                                                                                                              | `string`  | `undefined` |
| `inoMediaTitle`  | `ino-media-title`  | Displays the card title inside the image                                                                                                                                                                          | `boolean` | `false`     |
| `inoOutline`     | `ino-outline`      | Removes the shadow and displays a hairline outline instead.                                                                                                                                                       | `boolean` | `undefined` |
| `inoSubtitle`    | `ino-subtitle`     | An optional subtitle of this card.                                                                                                                                                                                | `string`  | `undefined` |
| `inoTitle`       | `ino-title`        | An optional title of this card.                                                                                                                                                                                   | `string`  | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
