# ino-meetup-accordion



<!-- Auto Generated Below -->


## Overview

`ino-meetup-accordion` is a component that implements a simple accordion UI element.
It allows users to expand or collapse content sections by clicking on the title.
The component emits an event when its expanded state changes, and it provides a slot for
custom content to be displayed when expanded.

## Properties

| Property                      | Attribute         | Description                 | Type     | Default     |
| ----------------------------- | ----------------- | --------------------------- | -------- | ----------- |
| `accordionTitle` _(required)_ | `accordion-title` | The title of the accordion. | `string` | `undefined` |


## Events

| Event            | Description                                         | Type                   |
| ---------------- | --------------------------------------------------- | ---------------------- |
| `expandedChange` | Emits when the user clicks to toggle the accordion. | `CustomEvent<boolean>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
