# Integrate with React

> We set up a demo project with React to show you how to integrate the components into a newly generated React
> project. Scroll down to see the Stackblitz.
>
> These instructions are based on `react@16.13.1` and [`create-react-app@3.4.1`](https://github.com/facebook/create-react-app).
>
> If you want to use TypeScript, please see instructions from the [Adding TypeScript Section on create-react-app.dev](https://facebook.github.io/create-react-app/docs/adding-typescript).

## 0) Prepare your Project

Before using `@inovex/elements`, you should make sure that your current setup works and boots properly.
If this is the case, proceed to the next step.

## 1) Install `@inovex/elements-react`

We provide an integration layer package for React so that you can integrate the elements just like any other dependency
into your React project. The name of the package matches the name of the respective inovex element in PascalCase
(e.g. `InoButton` for `ino-button`). 

We're not yet on npm. Hence, you need to set up a npm config before you are able to install 
the package. The following command will update your local npm config to always request `@inovex` prefixed packages from our private
registry and not from npmjs.org. To do so, copy the following command into your terminal and execute it:

```sh
$ npm config set @inovex:registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
```

Now you are ready to add the package `@inovex/elements-react` to your project using `yarn` or `npm`:

### Instructions for npm:

```sh
$ npm install @inovex/elements-react --save
```

### Instructions for Yarn:

```sh
$ yarn add @inovex/elements-react
```

### 2) Use the Components

> A hint on the icons: The React integration layer automatically imports the icons. You don't have to import
> them manually.

As the integration is now completed, you can use the components in your project in the same way you would use
any other React component.

<!--
To help you getting started, we created a simple todo app for you to play around with:

<iframe width="100%" height="600px" src="https://stackblitz.com/edit/ino-elements-react-example?embed=1&file=index.js" />
-->
