# ino-icon-button
A rounded button component that contains an icon. It functions as a wrapper around the material [icon-button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-icon-button) component.

### Usage
The component can be used as follows (custom properties have an `ino`-prefix):
```html
<ino-icon-button
  autofocus
  disabled
  ino-color-scheme="<string>"
  ino-icon="<string>">
</ino-icon-button>
```

**Toggle Button**: To use the ino-icon-button as a toggle button the user can listen to the native `click`-Event and change the icon in `ino-icon`-Attribute.

### Native Events
The component bubbles the native `click`-Event to the user.

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute          | Description                                                                                                                                                                                                       | Type                                                                                               | Default     |
| ---------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | ----------- |
| `autofocus`      | `autofocus`        | Sets the autofocus for this element.                                                                                                                                                                              | `boolean`                                                                                          | `undefined` |
| `disabled`       | `disabled`         | Disables this element.                                                                                                                                                                                            | `boolean`                                                                                          | `undefined` |
| `inoColorScheme` | `ino-color-scheme` | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `"dark" \| "error" \| "light" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning"` | `'primary'` |
| `inoIcon`        | `ino-icon`         | The name of the icon of this element.                                                                                                                                                                             | `string`                                                                                           | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
