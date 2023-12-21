import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  NgZone,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { InoElementsConfig } from '@inovex.de/elements';
import { DIRECTIVES } from './directives/proxies-list';

import { appInitialize, ConfigToken } from './app-initialize';
import {
  BooleanValueAccessorDirective,
  FsValueAccessorDirective,
  NumericValueAccessorDirective,
  RadioValueAccessorDirective,
  RangeValueAccessorDirective,
  TextValueAccessorDirective,
} from './directives/control-value-accesors';

const DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,

  // ngModel accessors
  BooleanValueAccessorDirective,
  FsValueAccessorDirective,
  NumericValueAccessorDirective,
  RadioValueAccessorDirective,
  RangeValueAccessorDirective,
  TextValueAccessorDirective,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: [CommonModule],
  exports: DECLARATIONS,
})
export class InoElementsModule {
  static forRoot(
    config?: InoElementsConfig,
  ): ModuleWithProviders<InoElementsModule> {
    return {
      ngModule: InoElementsModule,
      providers: [
        {
          provide: ConfigToken,
          useValue: config,
        },
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
          deps: [ConfigToken, DOCUMENT, NgZone],
        },
      ],
    };
  }
}
