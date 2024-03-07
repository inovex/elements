# ino-currency-input



<!-- Auto Generated Below -->


## Overview

A component providing currency functionality by extending a `ino-input`. Main objectives of this component are the separatation of formatted currency values from its numeric values and to handle different currency locales.

The `ino-currency-input` controls an underlying `ino-input` and evaluates its value on blur. While the `ino-input` has the textual user input as value, the `ino-currency-input` provides a numeric value of the currency. In theory, you can use all `ino-input` properties. However, properties like maxlength, step, etc. make no sense for currency inputs and are thus not supported.

#### Additional Hints
The currency input uses a native number formatter which supports a vary of different locales (see [Documentation](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument)). On a component level, you can provide any supported locale via the `currency-locale` attribute.
However, it may be useful to define a global locale for currencies, This may even differ from the application's locale, for instance a Belgian application may use English as language but the German currency format. For this reason, you can provide the `currencyLocale` option on the global configuration.

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

| Slot        | Description                    |
| ----------- | ------------------------------ |
| `"default"` | `<ino-input>` of `type="text"` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
