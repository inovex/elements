# ino-img-list
The ino-img-list component is used in combination with the ino-img component to display an array of images 
in a grid-like format. It is based on the mdc-image-list component.

## Usage

The component can be used as follows:

```html
<ino-img-list
    ino-enclose-label
    ino-masonry
>
    <ino-img
        src="url/to/image"
        ino-label="optional label"
        ino-img-list-item
    ></ino-img>
</ino-img-list>
```

## React
```jsx harmony
import React from 'react';
import { Component } from 'react';
import { InoImgList, InoImg } from '@inovex/elements/dist/react';

class MyComponent extends Component {

  state = {
    source: "url/to/img",
    encloseLabel: true
  };

  render() {
    return (
      <InoImgList
        inoEncloseLabel={this.state.encloseLabel}
      >
        <InoImg
          src={this.state.source}
          ino-img-list-item
        >
        </InoImg>
      </InoImgList>
    )
  }

}
```


<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                             | Type      | Default |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `inoEncloseLabel` | `ino-enclose-label` | Encapsulates the label of all img-list-items within the image                                           | `boolean` | `false` |
| `inoMasonry`      | `ino-masonry`       | Enables the masonry image list variant, which allows the images to be any combination of aspect ratios. | `boolean` | `false` |


## CSS Custom Properties

| Name                  | Description                |
| --------------------- | -------------------------- |
| `--ino-img-list-cols` | sets the number of columns |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
