# ino-list

A component that displays a list of choices. It functions as a wrapper around the material [list](https://github.com/material-components/material-components-web/blob/master/packages/mdc-list/) component.

This component is a composer to configure and wrap `list-item`s and `list-divider`s.

### Usage

The component can be used as follows:

```html
<ino-list
  ino-dense
  ino-two-lines
    <ino-list-item ...></ino-list-item>
    <ino-list-divider></ino-list-divider>
</ino-list>
```

Provide `ino-two-lines` to set propper style attributes for list items having a primary and secondary line.

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute       | Description                                                                                                                        | Type      | Default     |
| ------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `inoAvatar`   | `ino-avatar`    | Configures the leading tiles of each row to display images instead of icons. This will make the graphics of the list items larger. | `boolean` | `false`     |
| `inoDense`    | `ino-dense`     | Styles the list more dense, making it appear more compact.                                                                         | `boolean` | `undefined` |
| `inoTwoLines` | `ino-two-lines` | Marks this element as list with items having two lines.                                                                            | `boolean` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
