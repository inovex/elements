# ino-icon

A light icon component for texts and other components.

### Usage

The component can be used as follows:

```js
document.querySelector('ino-icon').addEventListener('inoIconClicked', e => {
  // ...
});
```

```html
<ino-icon ino-icon="<string>" ino-clickable></ino-icon>
```

The component inherits stylings like the text size of the parent element. For custom stylings set css properties on this element.

**Clickable icon:** Make an icon interactive with the optional attribute `ino-clickable`. Clickable icons emit an `inoIconChanged` event that can be listened to.

### Manage icons

The `icon-assets` folder is an exported [icomoon](https://icomoon.io/) project. This handy app is used to maintain our icons.

If you have to add, remove or change an icon:

- Import the `selection.json` in the [icomoon app](http://icomoon.io/app/#).
- Add, remove, rename, ... the icons
- Export the new icon set by clicking on `Generate SVG & More`.

- Make sure the exported icons have the same structure and the settings in `selection.json` didn't change.

- Copy&Paste the **entire** `icon-assets` folder and override the old one.

- Don't forget to update the storybook whenever the API changes.

> **Note:** Only the `SVG/` subfolder is distributed and contains the icon as SVGs.

### Custom icons

If you need to use custom icons just hand over the URL to your preferred icon.

<!-- Auto Generated Below -->

## Properties

| Property       | Attribute       | Description                                                                  | Type      | Default     |
| -------------- | --------------- | ---------------------------------------------------------------------------- | --------- | ----------- |
| `inoClickable` | `ino-clickable` | Makes the icon clickable and allows to listen to the `inoIconClicked` event. | `boolean` | `undefined` |
| `inoIcon`      | `ino-icon`      | The name of the icon of this element or an URL.                              | `string`  | `undefined` |

## Events

| Event            | Description                                                                                                           | Type                |
| ---------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `inoIconClicked` | Event that emits as soon as the user clicks on the icon. The event only emits if the property `inoClickable` is true. | `CustomEvent<void>` |

---

_Built with [StencilJS](https://stenciljs.com/)_
