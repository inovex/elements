# Integrate with Vue.js ([example-vuejs](https://gitlab.inovex.de/inovex-elements/example-vuejs))

This instructions are based on Vue.js v2.5.2. 

## Prerequisites

You setup your Vue.js project via the official CLI or similar

If you're on a greenfield, just follow this guide: https://vuejs.org/v2/guide/installation.html#CLI

## Prepare your project

First of all you should make sure your current setup without the components work. If that's the case
you can start preparing.

### 0) Setup your environment

Follow the introduction instructions to configure your npm client and add the inovex elements package
to your projet.

### 1) Import component loader + ignore non-vue elements

Open `src/main.js` and add this somewhere on the first lines:

```js
// src/main.js

import Vue from 'vue'
// ...

import '@inovex/elements' // import the web components loader

Vue.config.ignoredElements = [
  /^ino-/ // ignore all web components starting with "ino-"
]
```

> So Vue will not recognize these tags as Vue components and let
the browser do the custom element upgrading process.

### 2) Configure Webpack

Next you have to configure the Webpack config files.

```js
// src/build/webpack.dev.conf.js

// ...
plugins: [
    // ...
    require('@inovex/elements/webpack-loader')()
  ]
```

```js
// src/build/webpack.prod.conf.js

// ...
plugins: [
    // ...
    require('@inovex/elements/webpack-loader')('static/js')
  ]
```

> The only parameter of the webpack loader has to match the path to the location of the bundle.

### 3) Use the components

You can use the components now in your Vue.js project in the same way as you would use any native HTML elements.

Here is an example of how to use a inovex element in your Vue.js template:

```html
<template>
  <div>
    <ino-input
      ino-icon="user"
      :ino-placeholder="userPlaceholder"
      :ino-value="userValue"
      @ioChange="printUsername($event.detail)"
      ino-type="text"
    ></ino-input>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data () {
    return {
      userValue: 'Freaky Fox',
      userPlaceholder: 'Username'
    }
  },
  methods: {
    printUsername: function(newUsername) {
      alert(`New username is: ${newUsername}`)
    }
  }
}
</script>
```
