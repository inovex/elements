# ino-textarea
A textarea component with styles. It uses a material [textfield](https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield) component for its styling.

> **Note:** The textarea is always styled in an outlined manner. If you need to use a textarea in combination with other form inputs (`ino-input`), use their respective outline style. 

### Usage
The component can be used as follows:

```html
<ino-textarea
  autofocus="<boolean>"
  cols="<number>"
  disabled="<boolean>"
  maxlength="<number>"
  minlength="<number>"
  name="<string>"
  placeholder="<string>"
  required="<boolean>"
  rows="<number>"
  value="<string>"
  ino-label="<string>"
</ino-textarea>
```

**Labels**: The component shows a floating label containing the value of `ino-label`.

### Event Behaviour
The component behaves like a native textarea with additional features. Thus, the component bubbles events triggered by the native [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) like `input`, `keyup` or `change`.

**Change Detection**: It's recommended to use the `input` event to detect input changes. In contrast to the `change` event, this event occurs immediately after the value of an element has changed.


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                      | Type      |
| ------------- | ------------- | ------------------------------------------------ | --------- |
| `autofocus`   | `autofocus`   | The autofocus of this element.                   | `boolean` |
| `cols`        | `cols`        | The number of cols of this textarea.             | `number`  |
| `disabled`    | `disabled`    | Disables this element.                           | `boolean` |
| `inoLabel`    | `ino-label`   | The optional floating label of this input field. | `string`  |
| `maxlength`   | `maxlength`   | The max length of this element.                  | `number`  |
| `minlength`   | `minlength`   | The min length of this element.                  | `number`  |
| `name`        | `name`        | The name of this element.                        | `string`  |
| `placeholder` | `placeholder` | The placeholder of this element.                 | `string`  |
| `required`    | `required`    | Marks this element as required.                  | `boolean` |
| `rows`        | `rows`        | The number of rows of this textarea.             | `number`  |
| `value`       | `value`       | The value of this element.                       | `string`  |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
