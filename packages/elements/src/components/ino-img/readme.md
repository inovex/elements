# ino-img

An image component with different styles that reserves a predefined space to avoid jumping contents.

### Usage

The component can be used as follows (custom preferences have an `ino`-prefix):

```js
document
  .querySelector('ino-img')
  .addEventListener('click', (_) => alert('The image was clicked'));
```

```html
<ino-img
  alt="<string>"
  decoding="<string>"
  width="<number>"
  height="<number>"
  sizes="<string>"
  src="<string>"
  srcset="<string>"
  usemap="<string>"
  ratio-height="<number>"
  ratio-width="<number>"
  rounded
>
</ino-img>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoImg } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoImg
        height={100}
        width={100}
        src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
      />
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoImg } from '@inovex.de/elements/dist/react';
import { Components } from '@inovex.de/elements/dist/types/components';

const Img: React.FunctionComponent<Components.InoImgAttributes> = (props) => {
  const { height, width, src } = props;

  return (
    <InoImg height={height} width={width} src={src}>
      {props.children}
    </InoImg>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Img
        height={100}
        width={100}
        src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
      />
    );
  }
}
```

## Additional Hints

If the attribute `rounded` is true, the image is displayed with rounded corners.

### Pre-defined ratios

The image component has two attributes `ratio-height` and `ratio-width`. Use them to define any desired ratio and avoid content jumping!

Example: If the image `image.png` has a ratio of `16:9`, define the image component as follows:

```html
<ino-img src="image.png" ratio-width="16" ratio-height="9"></ino-img>
```

Using this setup, the width of the element extends to 100% (or the value defined in `width` attribute) and the computed height is based on the ratio attributes.

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                      | Type                          | Default                 |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ----------------------- |
| `alt`          | `alt`           | The alternative text of this image.                                                                                                                                              | `string`                      | `undefined`             |
| `decoding`     | `decoding`      | The decoding method of the native html input element. Can either be `async`, `auto` or `sync`.                                                                                   | `"async" \| "auto" \| "sync"` | `undefined`             |
| `fallbackIcon` | `fallback-icon` | Icon used for fallback image if image can not be loaded                                                                                                                          | `string`                      | `'image_not_available'` |
| `height`       | `height`        | The fixed height of this image.                                                                                                                                                  | `number`                      | `undefined`             |
| `imgListItem`  | `img-list-item` | Indicates that the image is a part of an image list component                                                                                                                    | `boolean`                     | `false`                 |
| `label`        | `label`         | Sets the label of the image. Note: Only works if image is part of an ino-img-list component.                                                                                     | `string`                      | `undefined`             |
| `ratioHeight`  | `ratio-height`  | The ratio height for this image (default = 1). Use this attribute together with `ratio-width` to reserve a space for the image during rendering and to prevent jumping contents. | `number`                      | `1`                     |
| `ratioWidth`   | `ratio-width`   | The ratio width of this image (default = 1). Use this attribute together with `ratio-height` to reserve a space for the image during rendering and to prevent jumping contents.  | `number`                      | `1`                     |
| `rounded`      | `rounded`       | If true, styles the image with rounded borders.                                                                                                                                  | `boolean`                     | `undefined`             |
| `sizes`        | `sizes`         | A set of rules to specify the usage of images sources that are defined in the `srcset` attribute.                                                                                | `string`                      | `undefined`             |
| `src`          | `src`           | The source of this image element.                                                                                                                                                | `string`                      | `undefined`             |
| `srcset`       | `srcset`        | A set of sources of this image for different viewports or devices.                                                                                                               | `string`                      | `undefined`             |
| `usemap`       | `usemap`        | An ID referencing to a defined map element for this image.                                                                                                                       | `string`                      | `undefined`             |
| `width`        | `width`         | The fixed of the image.                                                                                                                                                          | `number`                      | `undefined`             |


## Dependencies

### Depends on

- [ino-icon](../ino-icon)

### Graph
```mermaid
graph TD;
  ino-img --> ino-icon
  style ino-img fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
