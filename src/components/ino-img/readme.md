# ino-img

An image component with different styles that reserves a predefined space to avoid jumping contents.

### Usage

The component can be used as follows (custom preferences have an `ino`-prefix):

```html
<ino-img
  alt="<string>"
  decoding="<string>"
  height="<number>"
  sizes="<string>"
  src="<string>"
  srcset="<string>"
  usemap="<string>"
  width="<number>"

  ino-ratio-height="<number>"
  ino-ratio-width="<number>"
  ino-rounded
</ino-img>
```

If the attribute `ino-rounded` is true, the image is displayed with rounded corners.

### Pre-defined ratios

The image component has two attributes `ino-ratio-height` and `ino-ratio-width`. Use them to define any desired ratio and avoid content jumping!

Example: The image `image.png` has a ratio of `16:9`. Define the image component as follows:

```html
<ino-img src="image.png" ino-ratio-width="16" ino-ratio-height="9"></ino-img>
```

With this setup and while loading the source, the width of this element extends to 100% (or the value defined in `width` attribute) and computes the height based on the ratio attributes.

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                                                          | Type                          | Default     |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------- | ----------- |
| `alt`            | `alt`              | The alternative text of this image.                                                                                                                                                  | `string`                      | `undefined` |
| `decoding`       | `decoding`         | The decoding method of the native html input element. Can either be `async`, `auto` or `sync`.                                                                                       | `"async" \| "auto" \| "sync"` | `undefined` |
| `height`         | `height`           | The fixed height of this image.                                                                                                                                                      | `number`                      | `undefined` |
| `inoRatioHeight` | `ino-ratio-height` | The ratio height for this image (default = 1). Use this attribute together with `ino-ratio-width` to reserve a space for the image during rendering and to prevent jumping contents. | `number`                      | `1`         |
| `inoRatioWidth`  | `ino-ratio-width`  | The ratio width of this image (default = 1). Use this attribute together with `ino-ratio-height` to reserve a space for the image during rendering and to prevent jumping contents.  | `number`                      | `1`         |
| `inoRounded`     | `ino-rounded`      | If true, styles the image with rounded borders.                                                                                                                                      | `boolean`                     | `undefined` |
| `sizes`          | `sizes`            | A set of rules to specify the usage of images sources that are defined in the `srcset` attribute.                                                                                    | `string`                      | `undefined` |
| `src`            | `src`              | The source of this image element.                                                                                                                                                    | `string`                      | `undefined` |
| `srcset`         | `srcset`           | A set of sources of this image for different viewports or devices.                                                                                                                   | `string`                      | `undefined` |
| `usemap`         | `usemap`           | An ID referencing to a defined map element for this image.                                                                                                                           | `string`                      | `undefined` |
| `width`          | `width`            | The fixed of the image.                                                                                                                                                              | `number`                      | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
