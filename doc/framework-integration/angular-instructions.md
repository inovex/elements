# Integrate with Angular

> We set up a demo project with Angular CLI to show you how to integrate the components into a newly generated Angular
> project. Scroll down to see the Stackblitz.
>
> These instructions are based on `angular@9.1.0` and [`angular-cli@9.1.0`](https://cli.angular.io/).

## 0) Prepare your Project

Before using `@inovex/elements`, you should make sure that your current setup works and boots properly.
If this is the case, proceed to the next step.

## 1) Install `@inovex/elements-angular`

We provide an integration layer package for Angular so that you can integrate the elements as an Angular library
into your Angular project. We're not yet on npm. Thus, you need to set up a npm config before you are able to install 
the package.

The following command will update your local npm config to always request `@inovex` prefixed packages from our private
registry and not from npmjs.org. To do so, copy the following command into your terminal and execute it:

```sh
$ npm config set @inovex:registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
```

Now you are ready to add the package `@inovex/elements-angular` to your project using `yarn` or `npm`:

### Instructions for npm:

```sh
$ npm install @inovex/elements-angular --save
```

### Instructions for Yarn:

```sh
$ yarn add @inovex/elements-angular
```

### 2) Import the Module `InoElementsModule`

The components we provide in the Angular project are wrapped in Angular directives within an Angular library.
All the `@Input` properties and `@Output` events of our components are included. This allows your IDE
and compiler to infer all the type information from the given interfaces, which is compulsive for code completion
to work properly.

To use the inovex elements, you need to integrate the `InoElementsModule` into one of your App's
modules. The main module is usually called `AppModule`. If you have more than one module, you should
integrate the `InoElementsModule` into each module that is supposed to use the inovex elements. Alternatively,
 you can also integrate the components into a shared module. This way, you only need to import the components once 
 (recommended).

You only need two lines of code to import the package and make it available in Angular:

```typescript
// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InoElementsModule } from '@inovex/elements-angular'; // <-- a) import our package

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InoElementsModule // <-- b) make it available in Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 3) Call the Method `defineCustomElements`

Now it is time to bring the components to life. The directives are simply
interfaces used to declare the components in Angular. Still, our Angular Library does not (yet) instantiate the 
components. The components are provided as Custom Elements
and loaded by the component loader that ships with our `@inovex/elements` package.

> Important: You don't need to import `@inovex/elements` as a direct dependency of your Angular project. It's already
> resolved as a dependency through `@inovex/elements-angular`.

Import the method `defineCustomElements` and call it with the `window` instance:

```typescript
// src/main.ts

import { defineCustomElements } from '@inovex/elements/dist/loader'; // a) import the method

// ...

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineCustomElements(window); // b) call the method after the bootstrap
```

### 4) Import the Icons (optional)

If you want to use the icons, you need to import them separately.

> It's important to keep the output folder structure as it is (`icon-assets/SVG`):

```json
// angular.json

{
  "glob": "**/*",
  "input": "node_modules/@inovex/elements/dist/inovex-elements/icon-assets",
  "output": "/icon-assets"
}
```

To check if everything works properly, run `ng serve` from within your project folder to ensure that
Angular is able to find the package and boots up properly. Make sure that the Web Console is not showing
any unexpected errors. If everything works properly, proceed to the final step.

### 5) Use the Components

As the integration is completed, you can now use the components in your project in the same way you would use
any other Angular directive.
<!--
To help you getting started, we created a simple todo app for you to play around with:

<iframe width="100%" height="600px" src="https://stackblitz.com/edit/ino-elements-angular-example?embed=1&file=index.js" />
-->
