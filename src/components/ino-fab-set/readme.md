# ino-fab-set
A floating action button (FAB) performs the primary, or most common, action on a screen. 
It appears in front of all screen content, typically as a circular shape with an icon in its center. 

FABs come in three types: regular, mini, and extended. 

When hovered, a FAB can display three to six related actions in the form of a speed dial.


### Usage
The component can be used as follows:

```html
<ino-fab-set 
  ino-top-bottom-location="<string>"
  ino-left-right-location="<string>"
  ino-direction="<string>">
    <ino-fab slot="primary-fab" ...></ino-fab>
    <ino-fab ...></ino-fab>
    <ino-fab ...></ino-fab>
</ino-fab-set>
```

**Content**: Put the the Fabs for the speed dial inside of `ino-fab-set` as `ino-fab`.

**Primary FAB**: The Primary FAB is defined with the slot named `primary-fab`.



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description                                                                                   | Type     |
| ---------------------- | ------------------------- | --------------------------------------------------------------------------------------------- | -------- |
| `inoDialDirection`     | `ino-dial-direction`      | The direction of the speed dial. Possible values: `top` (default), `bottom`, `right`, `left`. | `string` |
| `inoLeftRightLocation` | `ino-left-right-location` | The side where the Fab is displayed. Possible values: `right`, `left` (default).              | `string` |
| `inoTopBottomLocation` | `ino-top-bottom-location` | The side where the Fab is displayed. Possible values: `top`, `bottom` (default).              | `string` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
