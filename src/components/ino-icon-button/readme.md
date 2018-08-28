# ino-icon-button
A rounded button component that contains an icon. It functions as a wrapper around the material [icon-button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button) component.

### Usage
The component can be used as follows (custom properties have an `ino`-prefix):
```html
<ino-icon-button
  autofocus="<boolean>"
  disabled="<boolean>"
  ino-color-scheme="<string>"
  ino-icon="<string>"
  ino-icon-checked="<string>"
  ino-state-checked="<boolean>">
</ino-icon-button>
```

** Toggle Button **: If `ino-icon-checked` is provided, the button acts like a toggle button with an unchecked and checked state. By default, the icon provided in `ino-icon` is shown. By setting the default state to checked (`ino-state-checked="true"`), the default icon is `ino-icon-checked`.
<!-- Auto Generated Below -->


## Properties

| Property          | Attribute           | Description                                                                                                                                                                                                       | Type      |
| ----------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `autofocus`       | `autofocus`         | Sets the autofocus for this element.                                                                                                                                                                              | `boolean` |
| `disabled`        | `disabled`          | Disables this element.                                                                                                                                                                                            | `boolean` |
| `inoColorScheme`  | `ino-color-scheme`  | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `string`  |
| `inoIconChecked`  | `ino-icon-checked`  | The name of the icon shown if the icon button is checked. If given, makes the button a toggle button.                                                                                                             | `string`  |
| `inoIcon`         | `ino-icon`          | The name of the icon of this element.                                                                                                                                                                             | `string`  |
| `inoStateChecked` | `ino-state-checked` | If the button is a toggle button, sets the default state to checked and displays the icon provided in `inoIconChecked`.                                                                                           | `boolean` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
