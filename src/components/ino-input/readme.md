# ino-input
An input component with styles. It functions as a wrapper around the material [textfield](https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield) component.


Use this element for **simple types** like `text`, `password`, `number` or `email`. For more complex types, there are elements like a [Radio Button](../ino-radio), a [Checkbox](../ino-checkbox), a [Datepicker](../ino-datepicker) and many more.


### Usage
The component can be used as follows:

```html
<ino-input
  accesskey="<string>"
  autocomplete="<string>"
  autofocus="<boolean>"
  disabled="<boolean>"
  min="<number>"
  max="<number>"
  step="<number>"
  name="<string>"
  pattern="<string>"
  placeholder="<string>"
  required="<boolean>"
  size="<number>"
  tabindex="<string>"
  type="<string>"
  value="<string>"
  ino-outline="<boolean>"
  ino-label="<string>"

  ino-icon="<string>"
  ino-icon-trailing="<boolean>"
  ino-icon-clickable="<boolean>"

  ino-helper="<string>"
  ino-helper-persistent="<boolean>"
  ino-helper-validation="<boolean">
</ino-input>
```

**Outlined**: The component is by default a box component with ripple underline. Provide `ino-outline` to use the material outline design.

**Labels**: The component shows a floating label containing the value of `ino-label`.

**Helper Text**: The component shows an optional helper text underneath the input field (`ino-helper`). By default, the helper text will be visible as soon as the user focuses on the input field. Set `ino-helper-persistent` to show it all the time. Furthermore, use `ino-helper-validation` to style the helper text as validation message.

**Icons**: Provide a string identifier in `ino-icon` to display a leading icon. Set `ino-icon-trailing` to position the icon after the input field. Make the icon interactive and clickable by adding `ino-icon-clickable` and listen to the `inoIconClicked` event emitted by the icon component.

### Event Behaviour
The component behaves like a native input with additional features. Thus, the component bubbles events triggered by the native [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) like `input`, `keyup` or `change`.

**Change Detection**: It's recommended to use the `input` event to detect input changes. In contrast to the `change` event, this event occurs immediately after the value of an element has changed.


<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                                                  | Type      |
| --------------------- | ----------------------- | ---------------------------------------------------------------------------- | --------- |
| `accesskey`           | `accesskey`             | The accesskey of this native element.                                        | `string`  |
| `autocomplete`        | `autocomplete`          | The autocomplete property of this element.                                   | `string`  |
| `autofocus`           | `autofocus`             | The autofocus of this element.                                               | `boolean` |
| `disabled`            | `disabled`              | Disables this element.                                                       | `boolean` |
| `inoHelperPersistent` | `ino-helper-persistent` | Displays the helper permanently.                                             | `boolean` |
| `inoHelperValidation` | `ino-helper-validation` | Styles the helper text as a validation message.                              | `boolean` |
| `inoHelper`           | `ino-helper`            | The optional helper text.                                                    | `string`  |
| `inoIconClickable`    | `ino-icon-clickable`    | Makes the icon clickable and allows to listen to the `inoIconClicked` event. | `boolean` |
| `inoIconTrailing`     | `ino-icon-trailing`     | Positions the icon trailing after the input field.                           | `boolean` |
| `inoIcon`             | `ino-icon`              | The optional icon of this input field.                                       | `string`  |
| `inoLabel`            | `ino-label`             | The optional floating label of this input field.                             | `string`  |
| `inoOutline`          | `ino-outline`           | Styles the input field as outlined element.                                  | `boolean` |
| `max`                 | `max`                   | The max value of this element.                                               | `string`  |
| `min`                 | `min`                   | The min value of this element.                                               | `string`  |
| `name`                | `name`                  | The name of this element.                                                    | `string`  |
| `pattern`             | `pattern`               | The validation pattern of this element.                                      | `string`  |
| `placeholder`         | `placeholder`           | The placeholder of this element.                                             | `string`  |
| `required`            | `required`              | Marks this element as required.                                              | `boolean` |
| `size`                | `size`                  | The size of this element.                                                    | `number`  |
| `step`                | `step`                  | The step value of this element                                               | `number`  |
| `tabindex`            | `tabindex`              | The tabindex of this element.                                                | `string`  |
| `type`                | `type`                  | The type of this element (default = text).                                   | `string`  |
| `value`               | `value`                 | The value of this element.                                                   | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
