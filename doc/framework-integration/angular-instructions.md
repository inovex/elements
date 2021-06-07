# Integrate with Angular

> We set up a demo project with Angular CLI to show you how to integrate the components into a newly generated Angular
> project. Scroll down to see the CodeSandbox.
>
> These instructions are based on `angular@12.0.0` and [`angular-cli@12.0.0`](https://cli.angular.io/).

## 0) Prepare your Project

Before using `@inovex.de/elements`, you should make sure that your current setup works and boots properly.
If this is the case, proceed to the next step.

## 1) Install `@inovex.de/elements-angular`

We provide an integration layer package for Angular so you can integrate the elements as an Angular library
into your Angular project.

Add the package `@inovex.de/elements-angular` to your project using `yarn` or `npm`:

### Instructions for npm:

```sh
$ npm install @inovex.de/elements-angular --save
```

### Instructions for Yarn:

```sh
$ yarn add @inovex.de/elements-angular
```

### 2) Import the Module `InoElementsModule`

The components we provide in the Angular project are wrapped in Angular directives within an Angular library.
All the `@Input` properties and `@Output` events of our components are included. This allows your IDE
and compiler to infer all the type information from the given interfaces which is compulsive for code completion
to work properly.

To use the inovex elements, you need to integrate the `InoElementsModule` into one of your App's
modules. The main module is usually called `AppModule`. If you have more than one module, you should
integrate the `InoElementsModule` into each module that is supposed to use the inovex elements. Alternatively,
you can also integrate the components into a shared module. This way, you only need to import the components once
(recommended).

Because `@inovex.de/elements-angular` makes use of [stencil's angular output target binding](https://stenciljs.com/docs/angular#bindings) no `CUSTOM_ELEMENTS_SCHEMA` must be included into your Angular setup. The only step needed is to integrate the `InoElementsModule` as shown below and call its `forRoot` Method.

```typescript
// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { InoElementsModule } from '@inovex.de/elements-angular'; // <-- a) import our package

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InoElementsModule.forRoot(), // <-- b) make it available in Angular
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### 3) Use the Components

### 4) (optional) Import the `ino-icon`s

In order to use our icons, you need to add them to your build.
To do so, add the following to the `assets` array under `projects.<your-project-name>.architect.build.options.assets` in your `angular.json` file:

```json
{
  // ...
  "assets": [
    // ...
    {
      "glob": "**/*.svg",
      "input": "node_modules/@inovex.de/elements/dist/inovex-elements/ino-icon",
      "output": "ino-icon"
    }
  ]
}
```

As the integration is completed, you can now use the components in your project in the same way you would use
any other Angular directive.

To help you to get started, we created a [simple todo app](https://codesandbox.io/s/github/inovex/elements-example-angular) for you to play around with.
