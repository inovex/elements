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

### 1) Import component loader + ignore non-vue elements + import icons

Open `src/main.js` and add this somewhere on the first lines, to ...
- tell the Vue compiler to ignore the inovex-elements during compilation (1)
- define the custom elements (2)
- import the icons (3)

```js
// src/main.js
import { applyPolyfills, defineCustomElements } from '@inovex/elements/dist/loader';
import { addIcons } from '@inovex/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';

addIcons(ICON_PATHS); // 3

// 1
Vue.config.ignoredElements = [
  /^ino-/ // ignore all web components starting with "ino-"
];

// 2
applyPolyfills().then(() => { 
  defineCustomElements();
});
```

### 2) Use the components

You can use the components now in your Vue.js project in the same way as you would use any native HTML elements.

Here is an example of how to use a inovex element in your Vue.js template:

```html
<template>
  <div>
    <ino-input
        :ino-placeholder="userPlaceholder"
        :value="userValue"
        @valueChange="printUsername($event.detail)"
        ino-type="text"
        ino-icon-leading="true"
    >
        <ino-icon slot="ino-icon-leading" ino-icon="users"></ino-icon>
    </ino-input>
  </div>
</template>

<script>
  export default {
    name: 'TestComponent',
    data() {
      return {
        userValue: 'Freaky Fox',
        userPlaceholder: 'Username'
      };
    },
    methods: {
      printUsername: function(newUsername) {
        alert(`New username is: ${newUsername}`);
      }
    }
  };
</script>
```
