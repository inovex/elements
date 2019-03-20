# ino-form-row

A component that styles an form element as a row with label.

### Usage

The component can be used as follows:

```html
<ino-form-row ino-label="<string>" ino-mandatory>
  Any desired form element
  <ino-form-row></ino-form-row
></ino-form-row>
```

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                            | Type      | Default     |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `inoLabel`     | `ino-label`     | The label for this form row which describes the form element.                                                                                          | `string`  | `undefined` |
| `inoMandatory` | `ino-mandatory` | An indicator which marks the contents of the form row as mandatory. If you use this make sure you also check for the values in your application logic. | `boolean` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
