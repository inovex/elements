# ino-tooltip
A tooltip component that displays text when users hover over, focus on, or tap an element.

> Note: A tooltip can only display plain text. For more complex dialogs, see the [Popover](../ino-popover) component.

### Usage
The component can be used as follows:

```html
<ino-popover
  ino-for="<string>"
  ino-label="<string>"
  ino-placement="<string"
  ino-trigger="<string>">

  Any desired HTML 

</ino-popover>
```


<!-- Auto Generated Below -->


## Properties

#### inoFor

string

The target id the tooltip belongs to.
If not given, the tooltip is attached to the parent component.


#### inoLabel

string

The text shown in the tooltip.


#### inoPlacement

string

The placement of the tooltip.
Accepted values: `top(-start, -end)`, `right(-start, -end)`,
`bottom(-start, -end)`, `left(-start, -end)`


#### inoTrigger

string

The trigger to show the tooltip - either click, hover or focus.
Multiple triggers possible by separating them with a space.


## Attributes

#### ino-for

string

The target id the tooltip belongs to.
If not given, the tooltip is attached to the parent component.


#### ino-label

string

The text shown in the tooltip.


#### ino-placement

string

The placement of the tooltip.
Accepted values: `top(-start, -end)`, `right(-start, -end)`,
`bottom(-start, -end)`, `left(-start, -end)`


#### ino-trigger

string

The trigger to show the tooltip - either click, hover or focus.
Multiple triggers possible by separating them with a space.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
