# ino-chip
A compact component that contains contents and icons styled as chip.

### Usage
The component can be used as follows:

```html
<ino-chip
  ino-color-scheme="<string>"
  ino-fill="<string>"
  ino-icon="<string>"
  ino-label="<string>"
  ino-removable="<boolean>">
</ino-chip>
```

**Content**: Provide the text of a chip in `ino-label` and, if desired, an icon on the left side of the chip in `ino-icon`.

**Styling**: The chip can be styled in different ways with the attributes `ino-fill` and `ino-color-scheme`. See their attribute documentation below for more informations.


### Removable chips
If `ino-removable` is set to `true`, the chip can be removed by the user. The component then displays a small `close` icon right after the text. 

However, the component doesn't hide/destroy itself but emits an `inoRemove`-Event instead. Thus, the overlying app can remove the chip by listening to this event.

```html
<ino-chip
  ino-label="Removable chip" 
  ino-removable
  onInoRemove="_ => removeChip()">
</ino-icon> 
```



<!-- Auto Generated Below -->


## Properties

#### inoColorScheme

string

The name of the color scheme which is used
to style the background and outline of this component.
Possible values: `primary` (default),  `secondary`, `tertiary`,
`success`, `warning`, `error`, `light`, dark`.


#### inoFill

string

The fill type of this element.
Possible values: `solid` (default) or `outline`.


#### inoIcon

string

The icon before the label in this chip.


#### inoLabel

string

The label of this chip.


#### inoRemovable

boolean

If true, add a close icon on the right side of this chip.
It enables an `inoRemove`-Event that can be listened to.


## Attributes

#### ino-color-scheme

string

The name of the color scheme which is used
to style the background and outline of this component.
Possible values: `primary` (default),  `secondary`, `tertiary`,
`success`, `warning`, `error`, `light`, dark`.


#### ino-fill

string

The fill type of this element.
Possible values: `solid` (default) or `outline`.


#### ino-icon

string

The icon before the label in this chip.


#### ino-label

string

The label of this chip.


#### ino-removable

boolean

If true, add a close icon on the right side of this chip.
It enables an `inoRemove`-Event that can be listened to.


## Events

#### inoRemove

Event that emits as soon as the user removes this chip.
Listen to this event to hide or destroy this chip.
The event only emits if the property `inoRemovable` is true.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
