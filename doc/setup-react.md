# Integrate with React

> This instructions are based on react v16.8.1.

You can see an example project here: https://gitlab.inovex.de/inovex-elements/example-react

## Prerequisites

You setup your react project with https://github.com/facebook/create-react-app or similar.

### Using TypeScript support with react-app

If you want to use TypeScript, please see instructions from https://facebook.github.io/create-react-app/docs/adding-typescript.

## Prepare your project

First of all you should make sure your current setup without the components work. If that's the case you can start preparing.

### 0) Setup your environment

Follow the introduction instructions to configure your npm registry and add the latest `@inovex/elements-react` version to your project.

### 1) Import component loader

> Prior to `@inovex/elements@0.5` you needed to import `@inovex/elements` directly. This is no longer the case.

Open `src/index.tsx` and change the lines to something that looks similar to this:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { registerInovexElements } from '@inovex/elements/dist/react';
import App from './App';
import * as serviceWorker from './serviceWorker';

registerInovexElements();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
```

### 2) Use the components

> Prior to `@inovex/elements@0.5` you needed to modify the webpack config. That's no longer the case, as implementation changed. So, if you migrate from `< 0.5` you can securely remove the `config-overrides.js` file from your project, as long as you don't provide any additionally configuration options for your project.

To ease the integration into react applications, a react wrapper component for each inovex element is provided. They are distributed as standalone package `@inovex/elements-react` and match the name of the respective inovex element in PascalCase (e.g. `InoButton` for `ino-button`).

As opposed to bare inovex elements which you can use anywhere in your app after they are loaded in the entrypoint file without importing
them specifically, you have to import each react wrapper in the file you want to use it:

```jsx
import { InoButton } from '@inovex/elements-react/dist';

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        This is my fancy component using inovex elements:
        <br />
        <InoButton ino-color-scheme="secondary">Da button</InoButton>
      </div>
    );
  }
}
```