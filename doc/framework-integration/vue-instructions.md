# Integrate with Vue.js (as Web Components)

> We set up a demo project with Vue.js to show you how to integrate the components into a newly generated Vue.js
> project. Scroll down to see the Stackblitz.
>
> These instructions are based on `vue@2.6.11` and [`create-react-app@4.2.3`](https://cli.vuejs.org/).

## 0) Prepare your Project

First of all you should make sure your current setup without the inovex elements work and boot properly.
If that's the case you can proceed.

## 1) Install `@inovex/elements`

> Hint: We do not provide an integration package for Vue.js as we do for Angular and React.
> Vue.js works out-of-the box with Web Components as Vue.js respects the DOM API standards.

We're not yet on npm, so you need to set a npm config before you can install the package. The following command
will update your local npm config to always request `@inovex` prefixed packages from our private registry and not
from npmjs.org. To do so, copy the following command into your terminal and execute it:

```sh
$ npm config set @inovex:registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
```

Now you are ready to add the package `@inovex/elements` to your project using `yarn` or `npm`:

### Instructions for npm:

```sh
$ npm install @inovex/elements --save
```

### Instructions for Yarn:

```sh
$ yarn add @inovex/elements
```

### 2) Prepare the Project

Before you start using the components, you need to prepare the project.

Open `src/main.js` and add this somewhere on the first lines, to...

- ... tell the Vue compiler to ignore Custom Elements starting with `ino-` during compilation (1)
- ... define the Custom Elements (these are the inovex elements Web Components) (2)
- ... import the icons (3, optional)

```js
// src/main.js
import { applyPolyfills, defineCustomElements } from '@inovex/elements/dist/loader';
import { addIcons } from '@inovex/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';

addIcons(ICON_PATHS); // 3 (only needed if you want to use our icons)

// 1
Vue.config.ignoredElements = [
  /^ino-/ // ignore all web components starting with "ino-"
];

// 2
applyPolyfills().then(() => {
  defineCustomElements();
});
```

### 3) Use the Components

You can now use the components in your Vue.js project the same way as you would use any native HTML element.
Here is an example of how to use an inovex element in your Vue.js template

To help you getting started, we created a simple todo app where you can get in touch and play around:

<iframe width="100%" height="600px" src="https://stackblitz.com/edit/ino-elements-vue-example?embed=1&file=index.js" />
