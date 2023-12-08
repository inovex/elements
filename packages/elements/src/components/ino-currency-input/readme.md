# ino-currency-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                                                                                                         | Type               | Default     |
| ---------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------- |
| `currencyLocale` | `currency-locale` | A supported locale for currency number formatting. If not given, it uses the global config. See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument | `string`           | `undefined` |
| `value`          | `value`           | Numeric currency value                                                                                                                                                                              | `number \| string` | `undefined` |


## Events

| Event         | Description                                                                    | Type                  |
| ------------- | ------------------------------------------------------------------------------ | --------------------- |
| `valueChange` | Emits when the user types something in. Contains typed input in `event.detail` | `CustomEvent<number>` |


## Slots

| Slot        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `"default"` | `<ino-input>` of `type="text"`  A component providing currency functionality by extending a `ino-input`. Main objectives of this component are the separatation of formatted currency values from its numeric values and to handle different currency locales.  The `ino-currency-input` controls an underlying `ino-input` and evaluates its value on blur. While the `ino-input` has the textual user input as value, the `ino-currency-input` provides a numeric value of the currency. In theory, you can use all `ino-input` properties. However, properties like maxlength, step, etc. make no sense for currency inputs and are thus not supported. |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
