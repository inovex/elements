# Integrate with Vue.js (as Web Components)

> We set up a demo project with Vue.js to show you how to integrate the components into a newly generated Vue.js
> project. Scroll down to see the Stackblitz.
>
> These instructions are based on `vue@2.6.11` and [`create-react-app@4.2.3`](https://cli.vuejs.org/).

## 0) Prepare your Project

Before using `@inovex.de/elements`, you should make sure that your current setup works and boots properly.
If this is the case, proceed to the next step.

## 1) Install `@inovex.de/elements`

> Hint: We do not provide an integration package for Vue.js as we do for Angular and React.
> Vue.js works out-of-the box with Web Components as Vue.js respects the DOM API standards.

Add the package `@inovex.de/elements` to your project using `yarn` or `npm`:

### Instructions for npm:

```sh
$ npm install @inovex.de/elements --save
```

### Instructions for Yarn:

```sh
$ yarn add @inovex.de/elements
```

### 2) Prepare the Project

Before you start using the components, you need to prepare the project.

Open `src/main.js` and add the following code snippet somewhere on the first lines, to...

- ... tell the Vue compiler to ignore Custom Elements starting with `ino-` during compilation (1)
- ... define the Custom Elements (these are the inovex elements Web Components) (2)
- ... import the icons (3, optional)

```js
// src/main.js
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';
import { addIcons } from '@inovex.de/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';

addIcons(ICON_PATHS); // 3 (only needed if you want to use our icons)

// 1
Vue.config.ignoredElements = [
  /^ino-/, // ignore all web components starting with "ino-"
];

// 2
applyPolyfills().then(() => {
  defineCustomElements();
});
```

### 3) Use the Components

You can now use the components in your Vue.js project in the same way you would use any native HTML element.

To help you to get started, we created a [simple todo app](https://codesandbox.io/s/github/inovex/elements-example-vue) for you to play around with.
