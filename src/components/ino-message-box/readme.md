# ino-message-box
A messsage box is a compontent to display important notifications. This element should be used to provide feedback about an operation or to display a system message. The message box can either appear inline or on top of the page.

### Usage
The component can be used as follows:

```html
<ino-message-box
  ino-color-scheme="<string>"
  ino-icon="<string>"
  ino-heading="<string>"
  ino-modal="<boolean>"
  ino-removable="<boolean>">
  Content
</ino-message-box>
```

**Content**: Provide the heading of a chip in `ino-heading` and, if desired, an icon on the left side of the chip with `ino-icon`. Add any html code as slot to the message box.

**Placement**: By default, the message box is placed inline. To display the message box as modal on top of the app, set the attribute `ino-modal`.

**Styling**: The message box can be styled in different ways with the attribute `ino-color-scheme`. See its attribute documentation below for more informations.

<!-- Auto Generated Below -->


## Properties

#### inoColorScheme

string

The name of the color scheme which is used
to style the background and outline of this component.
Possible values: `primary` (default),  `secondary`, `tertiary`,
`success`, `warning`, `error`, `light`, `dark`.


#### inoHeading

string

The heading of this chip.


#### inoIcon

string

The icon before the heading in this chip.


#### inoModal

boolean

If true, display the message box as modal in fix position
on top of the page.


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
`success`, `warning`, `error`, `light`, `dark`.


#### ino-heading

string

The heading of this chip.


#### ino-icon

string

The icon before the heading in this chip.


#### ino-modal

boolean

If true, display the message box as modal in fix position
on top of the page.


#### ino-removable

boolean

If true, add a close icon on the right side of this chip.
It enables an `inoRemove`-Event that can be listened to.


## Events

#### inoRemove

Event that emits as soon as the user removes this element.
Listen to this event to hide or destroy this element.
The event only emits if the property `inoRemovable` is true.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
