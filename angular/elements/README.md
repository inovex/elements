This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

# @inovex/elements-angular

## Installation

The Angular Directives needed to run '@inovex/core' components are bundled into the '@inovex/elements'.

You have to add `@inovex/elements` dependency to your project using `yarn` or `npm`:
```
yarn add @inovex/elements
npm i @inovex/elements
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { InoElementsModule } from '@inovex/elements/dist/angular';

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

Once your library is imported, you are ready to use `@inovex/elements` components.

