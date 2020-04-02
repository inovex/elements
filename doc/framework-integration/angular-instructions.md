# Integrate with Angular

> We set up a demo project with Angular CLI to show you how to integrate the components into a newly generated Angular
> project. Scroll down to see the Stackblitz.
>
> These instructions are based on `angular@9.1.0` and [`angular-cli@9.1.0`](https://cli.angular.io/).

## 0) Prepare your Project

First of all you should make sure your current setup without the inovex elements work and boot properly.
If that's the case you can proceed.

## 1) Install `@inovex/elements-angular`

We provide an integration layer package for Angular so you are able to integrate the elements as an Angular library
into your Angular project. We're not yet on npm, so you need to set a npm config before you can install the package.

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
and compiler to infer all the type information from the given interfaces. So your IDE will give you
code completion as well.

To use the inovex elements you need to integrate our module `InoElementsModule` into one of your App's
module. The main module is most of the time called `AppModule`. If you've more than one module you should
integrate the `InoElementsModule` into each module which will use at least one of our component or you integrate
the components once in a shared module, so you only need to import it once. Which is highly recommended.

You only need two lines of code to import the package and make them available in Angular:

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
    InoElementsModule // <-- b) make them available in Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 3) Call the Method `defineCustomElements`

In step 2) we imported the interfaces, now we need to bring the components to life. The directives are simply
interfaces for all the components and make the strings `ino-button`, `ino-icon`, ... known to Angular. But
our Angular Library doesn't (yet) instantiate the components. The components are provided as Custom Elements
and loaded by the component loader we provide with our `@inovex/elements` package.

> Important: You don't need to import `@inovex/elements` as direct dependency of your Angular project. It's already
> resolved as a dependency through `@inovex/elements-angular`.

Import the method `defineCustomElements` and call them with the `window` instance:

```typescript
// src/main.ts

import { defineCustomElements } from '@inovex/elements/dist/loader'; // a) import the method

// ...

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

defineCustomElements(window); // b) call the method after the bootstrap
```

### 4) Import the Icons (optional)

If you want to use icons you need to import them separately.

> It's important to keep the output folder structure as it is (`icon-assets/SVG`):

```json
// angular.json

{
  "glob": "**/*",
  "input": "node_modules/@inovex/elements/dist/inovex-elements/icon-assets",
  "output": "/icon-assets"
}
```

To check if the above steps work properly, run `ng serve` from within your project folder to ensure
Angular can find the package and boots up properly. Make sure that the Web Console is not showing
any unexpected errors. If all is fine, go to the last step.

### 5) Use the Components

As the integration is completed, you can use the components in your project the same way as you would
any other Angular directive.

To help you getting started, we created a simple todo app where you can get in touch and play around:

<iframe width="100%" height="600px" src="https://stackblitz.com/edit/ino-elements-angular-example?embed=1&file=index.js" />
