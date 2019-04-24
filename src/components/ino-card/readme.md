# ino-card

A card is as flexible and extensible content component. So far, the card is a simple content component with title and subtitle.

## Usage

The component can be used as follows:

### Web Component

```js
document
  .querySelector('ino-card')
  .addEventListener('click', _ => alert('Card was clicked!'));
```

```html
<ino-card
  ino-subtitle="<string>"
  ino-title="<string>"
  ino-outline
  ino-image="<string>"
  ino-aspect-ratio="<string>"
  ino-media-title
  ino-color-scheme
  onClick="handleClick()"
>
  <div slot="content"><!-- Any content --></div>
  <ino-button slot="action-buttons" ino-fill="transparent">Read</ino-button>
  <ino-button slot="action-buttons" ...>Bookmark</ino-button>
  <ino-icon-button slot="action-icons" ...></ino-icon-button>
  <ino-icon-button slot="action-icons" ...></ino-icon-button>
  <ino-icon-button slot="action-icons" ...></ino-icon-button>
</ino-card>
```

### React

#### Example #1 - Basic

```js
import { Component } from 'react';
import { InoCard } from '@inovex/elements/dist/react';

class MyComponent extends Component {
  render() {
    return (
      <InoCard inoTitle="The awesome card!">
        <div slot="content">It's simple to use this component.</div>
        <InoButton slot="action-buttons" ino-fill="transparent">
          Accept
        </InoButton>
        <InoButton slot="action-buttons">Dismiss</InoButton>
      </InoCard>
    );
  }
}
```

#### Example #2 - With Types

```js
import React, { Component } from 'react';
import { InoButton, InoCard } from '@inovex/elements/dist/react';
import { Components } from '@inovex/elements/dist/types/components';

const Card: React.FunctionComponent<Components.InoCardAttributes> = props => {
  const { inoTitle, inoSubtitle } = props;

  return (
    <InoCard inoTitle={inoTitle} inoSubtitle={inoSubtitle}>
      {props.children}
    </InoCard>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Card inoTitle="Eat apples!" inoSubtitle="They're so healthy">
        <div slot="content">We should add an apple image here.</div>
        <InoButton slot="action-buttons" ino-fill="transparent">
          Accept
        </InoButton>
        <InoButton slot="action-buttons">Dismiss</InoButton>
      </Card>
    );
  }
}
```

## Demo

<!-- Auto Generated Below -->

## Properties

| Property         | Attribute          | Description                                                                                                                                                                                                      | Type                                                                                               | Default     |
| ---------------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| `inoAspectRatio` | `ino-aspect-ratio` | Automatically scales the media areas's height according to its width. Possible values: `16-9` (default), `square`                                                                                                | `"16-9" \| "square"`                                                                               | `'16-9'`    |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default), `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `inoImage`       | `ino-image`        | Displays a media area with a custom `background-image` with `background-size: cover`                                                                                                                             | `string`                                                                                           | `undefined` |
| `inoMediaTitle`  | `ino-media-title`  | Displays the card title inside the image                                                                                                                                                                         | `boolean`                                                                                          | `false`     |
| `inoOutline`     | `ino-outline`      | Removes the shadow and displays a hairline outline instead.                                                                                                                                                      | `boolean`                                                                                          | `undefined` |
| `inoSubtitle`    | `ino-subtitle`     | An optional subtitle of this card.                                                                                                                                                                               | `string`                                                                                           | `undefined` |
| `inoTitle`       | `ino-title`        | An optional title of this card.                                                                                                                                                                                  | `string`                                                                                           | `undefined` |

---

_Built with [StencilJS](https://stenciljs.com/)_
