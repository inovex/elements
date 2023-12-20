# ino-switch



<!-- Auto Generated Below -->


## Overview

Input switches toggle the state of a single item. Compared to the input checkbox, their changes usually apply without any additional submission.

## Properties

| Property   | Attribute  | Description                                    | Type      | Default     |
| ---------- | ---------- | ---------------------------------------------- | --------- | ----------- |
| `checked`  | `checked`  | Marks this element as checked. (**unmanaged**) | `boolean` | `false`     |
| `disabled` | `disabled` | Disables this element.                         | `boolean` | `undefined` |
| `name`     | `name`     | The name of this element.                      | `string`  | `undefined` |


## Events

| Event           | Description                                                                                                    | Type               |
| --------------- | -------------------------------------------------------------------------------------------------------------- | ------------------ |
| `checkedChange` | Emits when the user clicks on the switch to change the `checked` state. Contains the status in `event.detail`. | `CustomEvent<any>` |


## Slots

| Slot         | Description                                                                       |
| ------------ | --------------------------------------------------------------------------------- |
| `"default"`  | Label of the switch                                                               |
| `"icon-off"` | Icon used for the unchecked state. The colors of the `color-scheme` will be used. |
| `"icon-on"`  | Icon used for the checked state. The colors of the `color-scheme` will be used.   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
