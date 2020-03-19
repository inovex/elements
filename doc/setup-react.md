# Integrate with React

> This instructions are based on react v16.8.1.

You can see an example project here: https://gitlab.inovex.de/inovex-elements/example-react

## Prerequisites

Setup your react project with https://github.com/facebook/create-react-app or similar.

### Using TypeScript support with react-app

If you want to use TypeScript, please see instructions from https://facebook.github.io/create-react-app/docs/adding-typescript.

## Prepare your project

First of all you should make sure your current setup without the components work. If that's the case you can start preparing.

### 1) Setup your environment

Follow the introduction instructions to configure your npm registry and add the latest `@inovex/elements-react` version to your project.

### 2) Use the components

To ease the integration into react applications, a react wrapper component for each inovex element is provided. They are distributed as standalone package `@inovex/elements-react` and match the name of the respective inovex element in PascalCase (e.g. `InoButton` for `ino-button`).

As opposed to bare inovex elements which you can use anywhere in your app after they are loaded in the entrypoint file without importing
them specifically, you have to import each react wrapper in the file you want to use it:

```jsx
import { InoButton } from '@inovex/elements-react';

export class MyComponent extends React.Component {
  render() {
    return (
      <div>
        This is my fancy component using inovex elements:
        <br />
        <InoButton inoColorScheme="secondary">Da button</InoButton>
      </div>
    );
  }
}
```