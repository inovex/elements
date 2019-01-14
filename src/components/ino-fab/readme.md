# ino-fab
A floating action button represents the primary action in an application. [Floating Action Button](https://github.com/material-components/material-components-web/tree/master/packages/mdc-fab) component.


### Usage
The component can be used as follows:

```html
<ino-fab
  ino-color-scheme="<string>"
  ino-icon="<string>"
  ino-label="<string>"
  ino-extended="<boolean>"
  ino-mini="<boolean>"
  ino-tooltip-placement="<string>">
</ino-fab>
```

**Content**: Provide the text of a fab in ino-label and an icon in `ino-icon`.

**Styling**: The fab can be styled in different ways with the attribute `ino-color-scheme`. See the attribute documentation below for more informations.



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                                                                                                                                                                       | Type      | Default     |
| --------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoColorScheme`      | `ino-color-scheme`      | The name of the color scheme which is used to style the background and outline of this component. Possible values: `primary` (default),  `secondary`, `tertiary`, `success`, `warning`, `error`, `light`, `dark`. | `string`  | `undefined` |
| `inoExtended`         | `ino-extended`          | Optional, modifies the FAB to wider size which includes a text label.                                                                                                                                             | `boolean` | `false`     |
| `inoIcon`             | `ino-icon`              | Adds an icon to the Fab.                                                                                                                                                                                          | `string`  | `undefined` |
| `inoLabel`            | `ino-label`             | Optional, for the text label. Applicable only for Extended FAB.                                                                                                                                                   | `string`  | `undefined` |
| `inoMini`             | `ino-mini`              | Optional, modifies the FAB to a smaller size                                                                                                                                                                      | `boolean` | `false`     |
| `inoTooltipPlacement` | `ino-tooltip-placement` | The placement of the tooltip. Accepted values: `top(-start, -end)`, `right(-start, -end)`, `bottom(-start, -end)`, `left(-start, -end)`                                                                           | `string`  | `'left'`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
