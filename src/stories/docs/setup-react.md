# Integrate with React ([example-react](https://gitlab.inovex.de/inovex-elements/example-react))

This instructions are based on react v16.3.1. 

## Prerequisites

You setup your react project with [react-app-rewired](https://github.com/timarney/react-app-rewired) or similar. The setup needs to update the webpack configuration to copy the static files (`create-react-app` is not satisfactory).


### Using TypeScript support with react-app-rewired

> If you're using TypeScript within your React setup you must additionally modify your `package.json`!

Assuming you have the boiler plate from `react-app-rewired` and you've additionally installed `react-scripts-ts` your scripts must look like this:

```json
  // ...

  "scripts": {
    "start": "react-app-rewired start --scripts-version react-scripts-ts --config-overrides config.overrides.js",
    "build": "react-app-rewired build --scripts-version react-scripts-ts --config-overrides config.overrides.js",
    "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts --config-overrides config.overrides.js",
    "eject": "react-scripts eject"
  },

  // ...
```

## Prepare your project

First of all you should make sure your current setup without the components work. If that's the case you can start preparing.

### 0) Setup your environment

Follow the introduction instructions to configure your npm registry and add the latest `@inovex/elements` version to your project.

### 1) Import component loader

Open `src/index.js` and add this somewhere on the first lines:

```ts
// src/index.js

import React from 'react'
// ...

import '@inovex/elements' // import the web components loader
// ...
```

### 2) Configure Webpack

Next you have to configure the Webpack config files. Using `react-app-rewired`, create a `config-overrides.js` in the root directory:

```js
// config.overrides.js

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config.plugins = [...config.plugins, require('@inovex/elements/webpack-plugin')('static/js')];
    return config;
}
```

> The only parameter of the webpack loader has to match the path to the location of the bundle.

### 3) Use the components

To ease the integration into react applications, react wrapper components for each inovex element are provided. They are located in the `@inovex/elements/dist/react` sub folder and match the name of the respective inovex element in PascalCase (e.g. `InoButton` for `ino-button`).

As opposed to bare inovex elements which you can use anywhere in your app after they are loaded in the entrypoint file without importing
them specifically, you have to import each react wrapper in the file you want to use it:

```jsx
import { InoButton } from '@inovex/elements/dist/react/InoButton';

export class MyComponent extends React.Component {
    render() {
        return (<div>
            This is my fancy component using inovex elements:<br />
            <InoButton ino-color-scheme="secondary">Da button</InoButton>
        </div>);
    }
}
```
