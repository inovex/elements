# ino-img-list

The ino-img-list component is used in combination with the ino-img component to display an array of images
in a grid-like format. It is based on the mdc-image-list component.

## Usage

The component can be used as follows:

```html
<ino-img-list enclose-label masonry>
  <ino-img
    src="url/to/image"
    label="optional label"
    img-list-item
  ></ino-img>
</ino-img-list>
```

## React

```jsx
import React from 'react';
import { Component } from 'react';
import { InoImgList, InoImg } from '@inovex.de/elements/dist/react';

class MyComponent extends Component {
  state = {
    source: 'url/to/img',
    encloseLabel: true,
  };

  render() {
    return (
      <InoImgList encloseLabel={this.state.encloseLabel}>
        <InoImg src={this.state.source} img-list-item></InoImg>
      </InoImgList>
    );
  }
}
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                             | Type      | Default |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `encloseLabel` | `enclose-label` | Encapsulates the label of all img-list-items within the image                                           | `boolean` | `false` |
| `masonry`      | `masonry`       | Enables the masonry image list variant, which allows the images to be any combination of aspect ratios. | `boolean` | `false` |


## Slots

| Slot        | Description                                     |
| ----------- | ----------------------------------------------- |
| `"default"` | One or more `ino-img` with `imgListItem="true"` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
