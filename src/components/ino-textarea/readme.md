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
  ino-label="<string>">
</ino-textarea>
```

**Labels**: The component shows a floating label containing the value of `ino-label`.

### Control flow
The textarea has a controlled (unmanaged) attribute `value`. For this reason, the value doesn't change on user interaction but on updates of `value`. Listen to `valueChanges`, sync it with your local state and pass the new value to the component again to change value of input.

```html
<ino-textarea
  value={this.state.value}
  valueChanges={e => this.state.value = e.detail}>
</ino-textarea>
```


### Event Behaviour
The component is based on a native input with additional features. Thus, the component bubbles events triggered by the native [HTMLTextareaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement) like `keyup`. The native `input` and `change` event is not bubbled because the value will only change when the value attribute changes.


<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                      | Type      | Default     |
| ------------- | ------------- | ------------------------------------------------ | --------- | ----------- |
| `autofocus`   | `autofocus`   | The autofocus of this element.                   | `boolean` | `undefined` |
| `cols`        | `cols`        | The number of cols of this textarea.             | `number`  | `undefined` |
| `disabled`    | `disabled`    | Disables this element.                           | `boolean` | `undefined` |
| `inoLabel`    | `ino-label`   | The optional floating label of this input field. | `string`  | `undefined` |
| `maxlength`   | `maxlength`   | The max length of this element.                  | `number`  | `undefined` |
| `minlength`   | `minlength`   | The min length of this element.                  | `number`  | `undefined` |
| `name`        | `name`        | The name of this element.                        | `string`  | `undefined` |
| `placeholder` | `placeholder` | The placeholder of this element.                 | `string`  | `undefined` |
| `required`    | `required`    | Marks this element as required.                  | `boolean` | `undefined` |
| `rows`        | `rows`        | The number of rows of this textarea.             | `number`  | `undefined` |
| `value`       | `value`       | The value of this element. (**unmanaged**)       | `string`  | `''`        |


## Events

| Event          | Description                                                                    | Type                  |
| -------------- | ------------------------------------------------------------------------------ | --------------------- |
| `valueChanges` | Emits when the user types something in. Contains typed input in `event.detail` | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
