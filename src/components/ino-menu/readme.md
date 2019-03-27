# ino-menu

A menu component that displays a list of choices on a temporary surface. It functions as a wrapper around the material [menu](https://github.com/material-components/material-components-web/blob/master/packages/mdc-menu/) component.
The anchor element is the element above.

### Usage

The component can be used as follows:

```html
<ino-menu ino-open="<boolean>" ino-for="<string>">
  <ino-list-item ...></ino-list-item>
  <ino-list-divider></ino-list-divider>
</ino-menu>
```

The menu creates a temporary surface with an empty list composer. The items of this list are provided via the slot (see example above). For more details about the list capabilities itself, check the documentation of `ino-list` and `ino-list-item` component.

<!-- Auto Generated Below -->

## Properties

| Property  | Attribute  | Description                       | Type      | Default     |
| --------- | ---------- | --------------------------------- | --------- | ----------- |
| `inoFor`  | `ino-for`  | Anchor element for the menu       | `string`  | `undefined` |
| `inoOpen` | `ino-open` | Set this option to show the menu. | `boolean` | `false`     |

---

_Built with [StencilJS](https://stenciljs.com/)_
