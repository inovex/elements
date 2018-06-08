# ino-spinner
A component which displays a variety of spinners. Use spinners to show that the app is loading content or performing another process for which the user has to wait. 

This component contains three different types of spinners animated with pure CSS. It mainly relies on [Spinkit](http://tobiasahlin.com/spinkit/) and may be extended in future with more types.

### Usage
The component can be used as follows:

```html
<ino-spinner 
  ino-type="<string>"
  ino-color-scheme="<string>"
  ino-height="<number>" 
  ino-modal="<boolean>" 
  ino-width="<number>">
</ino-spinner>
```
Use one of the provided types in `ino-type` to give the spinner the shape. Adjust the size of the spinner by changing the `ino-height` and `ino-width` attributes. Finally, colorize the spinner using `ino-color-scheme` (see the attribute docs below).

**Modal:** If operations have to block the entire page, the spinner can be marked with `ino-modal` to spread over the entire screen and overlay the current page.

<!-- Auto Generated Below -->


## Properties

#### inoColorScheme

string

The name of the color scheme which is used
to style the background and outline of this component.
Possible values: `primary` (default),  `secondary`, `tertiary`,
`success`, `warning`, `error`, `light`, `dark`.


#### inoHeight

number

The height of this spinner (default = 40)


#### inoModal

boolean

If true, the spinner is shown as modal over the current app page.


#### inoType

string

The type of this spinner (default = tile).
Possible values: `tile`, `bounce` or `circle`


#### inoWidth

number

The width of this spinner (defaul = 40)


## Attributes

#### ino-color-scheme

string

The name of the color scheme which is used
to style the background and outline of this component.
Possible values: `primary` (default),  `secondary`, `tertiary`,
`success`, `warning`, `error`, `light`, `dark`.


#### ino-height

number

The height of this spinner (default = 40)


#### ino-modal

boolean

If true, the spinner is shown as modal over the current app page.


#### ino-type

string

The type of this spinner (default = tile).
Possible values: `tile`, `bounce` or `circle`


#### ino-width

number

The width of this spinner (defaul = 40)



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
