# @inovex/elements-angular

This is a package contains awesome and reusable components based on native web components compatible to Angular. :fire:

> Please note: We are at the beginning of the inovex elements library. Things may break without giving any deprecation notice. Join the project slack channel #proj-inovex-elements to be up to date.

### Integrate via npm

`@inovex/elements-angular` are delivered via a private npm registry hosted at `https://artifactory.inovex.de/artifactory/api/npm/inovex-elements-angular/`. First, you have to configure
your local environment to use this registry. To do so, execute the following npm commands:

```
npm config set registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
or
npm config set @inovex:registry https://artifactory.inovex.de/artifactory/api/npm/internal-npm/
```

Now you are ready to add the `@inovex/elements-angular` dependency to your project using `yarn` or `npm`:

```
yarn add @inovex/elements-angular
npm i @inovex/elements-angular
```

## Installation

The Angular Directives needed to use elements in
components are bundled into the `InoElementsModule`.

You have to add it to your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { InoElementsModule } from '@inovex/elements-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InoElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the `InoElementsModule` is imported, you are ready to use all components.


If you would like to see an example app of the implementation please go to our [example react app](https://gitlab.inovex.de/inovex-elements/example-angular).