# ino-accordion



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                     | Type      | Default |
| ---------------- | ----------------- | ----------------------------------------------- | --------- | ------- |
| `accordionTitle` | `accordion-title` | The title of the accordion.                     | `string`  | `null`  |
| `expanded`       | `expanded`        | Weather the accordion is expanded or collapsed. | `boolean` | `false` |


## Events

| Event            | Description                                                                                                        | Type                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------- |
| `expandedChange` | Emits when the user clicks on the icon toggle to change the expanded state. Contains the status in `event.detail`. | `CustomEvent<boolean>` |


## Slots

| Slot        | Description                  |
| ----------- | ---------------------------- |
| `"default"` | The content of the Accordion |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
