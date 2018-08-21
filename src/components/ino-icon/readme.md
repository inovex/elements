# ino-icon
A light icon component for texts and other components.

### Usage
The component can be used as follows:

```html
<ino-icon ino-icon="<string>"></ino-icon>
```

The component inherits stylings like the text size of the parent element. For custom stylings set css properties on this element.

### Manage icons
The `icon-assets` folder is an exported [icomoon](https://icomoon.io/) project. This handy app is used to maintain our icons.

If you have to add, remove or change an icon:

* Import the `selection.json` in the [icomoon app](http://icomoon.io/app/#).
* Add, remove, rename, ... the icons
* Export the new icon set by clicking on `Generate SVG & More`. 

* Make sure the exported icons have the same structure and the settings in `selection.json` didn't change. 

* Copy&Paste the **entire** `icon-assets` folder and override the old one.

* Don't forget to update the storybook whenever the API changes. 

> **Note:** Only the `SVG/` subfolder is distributed and contains the icon as SVGs.


<!-- Auto Generated Below -->


## Properties

| Property  | Attribute  | Description                           | Type     |
| --------- | ---------- | ------------------------------------- | -------- |
| `inoIcon` | `ino-icon` | The name of the icon of this element. | `string` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
