# ino-img
An image component with different styles that reserves a predefined space to avoid jumping contents.

### Usage
The component can be used as follows (custom preferences have an `ino`-prefix):
```html
<ino-img
  alt="<string>"
  decoding="<string>"
  height="<number>"
  sizes="<string>"
  src="<string>"
  srcset="<string>"
  usemap="<string>"
  width="<number>"

  ino-ratio-height="<number>"
  ino-ratio-width="<number>"
  ino-rounded="<boolean>">
</ino-img>
```

If the attribute `ino-rounded` is true, the image is displayed with rounded corners.


### Pre-defined ratios
The image component has two attributes `ino-ratio-height` and `ino-ratio-width`. Use them to define any desired ratio and avoid content jumping!

Example: The image `image.png` has a ratio of `16:9`. Define the image component as follows:

```html
<ino-img src="image.png" ino-ratio-width="16" ino-ratio-height="9"></ino-img>
````

With this setup and while loading the source, the width of this element extends to 100% (or the value defined in `width` attribute) and computes the height based on the ratio attributes.


<!-- Auto Generated Below -->


## Properties

#### alt

string

The alternative text of this image.


#### decoding

string

The decoding method of the native html input element.
Can either be `async`, `auto` or `sync`.


#### height

number

The fixed height of this image.


#### inoRatioHeight

number

The ratio height for this image (default = 1).
Use this attribute together with `ino-ratio-width` to reserve a
space for the image during rendering and to prevent jumping contents.


#### inoRatioWidth

number

The ratio width of this image (default = 1).
Use this attribute together with `ino-ratio-height` to reserve a
space for the image during rendering and to prevent jumping contents.


#### inoRounded

boolean

If true, styles the image with rounded borders.


#### sizes

string

A set of rules to specify the usage of images sources that are
defined in the `srcset` attribute.


#### src

string

The source of this image element.


#### srcset

string

A set of sources of this image for different viewports or devices.


#### usemap

string

An ID referencing to a defined map element for this image.


#### width

number

The fixed of the image.


## Attributes

#### alt

string

The alternative text of this image.


#### decoding

string

The decoding method of the native html input element.
Can either be `async`, `auto` or `sync`.


#### height

number

The fixed height of this image.


#### ino-ratio-height

number

The ratio height for this image (default = 1).
Use this attribute together with `ino-ratio-width` to reserve a
space for the image during rendering and to prevent jumping contents.


#### ino-ratio-width

number

The ratio width of this image (default = 1).
Use this attribute together with `ino-ratio-height` to reserve a
space for the image during rendering and to prevent jumping contents.


#### ino-rounded

boolean

If true, styles the image with rounded borders.


#### sizes

string

A set of rules to specify the usage of images sources that are
defined in the `srcset` attribute.


#### src

string

The source of this image element.


#### srcset

string

A set of sources of this image for different viewports or devices.


#### usemap

string

An ID referencing to a defined map element for this image.


#### width

number

The fixed of the image.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
