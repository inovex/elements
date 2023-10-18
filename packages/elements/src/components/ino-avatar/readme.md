# ino-avatar



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                                                                                                                                                                                                                                                                                                 | Type                  | Default   |
| ----------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------- |
| `a11yLabel`       | `a-1-1y-label`     | The aria-label used for the avatar element. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/img_role.                                                                                                                                                                                                 | `string`              | `''`      |
| `alt`             | `alt`              | The alternative text of the avatar image.                                                                                                                                                                                                                                                                                   | `string`              | `''`      |
| `colorSecondary`  | `color-secondary`  | Colors the border of the avatar in the secondary color.                                                                                                                                                                                                                                                                     | `boolean`             | `false`   |
| `initials`        | `initials`         | The initials of the avatar. Will be shown if no `src` is defined or `img` fails to load.                                                                                                                                                                                                                                    | `string`              | `''`      |
| `interactive`     | `interactive`      | Enables interactive visuals for the avatar by animating the border and a pointing cursor upon hovering the Element.                                                                                                                                                                                                         | `boolean`             | `false`   |
| `overrideLoading` | `override-loading` | Overrides the avatar's loading animation behavior. When set to true, the loading animation is displayed indefinitely. When set to false, the avatar will not show any loading animations.  By not using this property or setting it to undefined, the loading animation will be shown only while the image is being loaded. | `boolean`             | `false`   |
| `src`             | `src`              | The img of the avatar.                                                                                                                                                                                                                                                                                                      | `string`              | `''`      |
| `variant`         | `variant`          | The style variant of the avatar. Can be 'dashed' \| 'solid'.                                                                                                                                                                                                                                                                | `"dashed" \| "solid"` | `'solid'` |


## Slots

| Slot          | Description                                 |
| ------------- | ------------------------------------------- |
| `"icon-slot"` | For the icon to be displayed in the avatar. |


## CSS Custom Properties

| Name                | Description                        |
| ------------------- | ---------------------------------- |
| `--ino-avatar-size` | Width and height of the ino-avatar |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
