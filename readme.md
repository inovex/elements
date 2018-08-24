![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Inovex Elements

This project contains awesome and reusable inovex web components by Stencil.

## Download via npm

Inovex elements are delivered via a private npm registry hosted at `https://registry.elements.inovex.io`. First, you have to configure
your local environment to use this registry. To do so, execute the following npm commands:

Username and password are both `inovex`.

```
npm set registry https://registry.elements.inovex.io
npm adduser --registry https://registry.elements.inovex.io
npm config set always-auth true
```

Now you are ready to add the `@inovex/elements` dependency to your project using `yarn` or `npm`:
```
yarn add @inovex/elements
npm i @inovex/elements
```

## Integrate into build process

For integration with various frameworks, take a look at the `example-vuejs`, `example-react` and `example-angular`
example projects in the [`inovex-elements` gitlab project](https://gitlab.inovex.de/inovex-elements).

In most cases, the `dist` folder inside the `inovex-elements` dependency has to be copied into the assets folder.
Inovex elements components are lazy loaded, which means you have to import the main js file `dist/inovex-elements.js` containing the component
registry and everything else will be handled on the fly.

If you are using webpack and provide your own webpack config file, you can use the provided `webpack-plugin.js` as a plugin
and the elements will be provided automatically. You just have to import the component registry as part of your main bundle:

```
// webpack.config.js

module.exports = {
    //...
    plugins: [ /* ... */, require('@inovex/elements/webpack-plugin')()]
}


// entrypoint file

import '@inovex/elements';
```

If the final javascript bundle is not located in the root of the web root, you have to specify the path as the first parameter,
e.g. if your javascript bundle is located in `static/js`, use `require('@inovex/elements/webpack-plugin')('static/js')`.

## Integrate with react

To ease the integration into react applications, react wrapper components for each inovex element are provided. They are located in the `@inovex/elements/dist/react` sub folder and match the name of the respective inovex element in PascalCase (e.g. `InoButton` for `ino-button`).

As opposed to bare inovex elements which you can use anywhere in your app after they are loaded in the entrypoint file without importing
them specifically, you have to import each react wrapper in the file you want to use it:

```
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

The wrapper components accept the same properties as bare inovex elements but fix some corner case bugs concerning the update mechanism of
react.

## Used technologies

### Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

### Storybook

[Storybook](https://github.com/storybooks/storybook) is a development environment for UI components. It allows us to browse the inovex elements, view the different states of each component, and interactively develop and test inovex components.

The storybook is part of the development process and used to test the components as well as to show the most common use cases.