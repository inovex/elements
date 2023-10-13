import {
  APP_INITIALIZER,
  ModuleWithProviders,
  NgModule,
  NgZone,
} from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { InoElementsConfig } from '@inovex.de/elements';
import { DIRECTIVES } from './generated';

import { appInitialize, ConfigToken } from './app-initialize';
import { BooleanValueAccessor } from './generated/boolean-value-accessor';
import { NumericValueAccessor } from './generated/number-value-accessor';
import { RadioValueAccessor } from './generated/radio-value-accessor';
import { TextValueAccessor } from './generated/text-value-accessor';

@NgModule({
  declarations: [
    ...DIRECTIVES,
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    TextValueAccessor,
  ],
  imports: [CommonModule],
  exports: [
    ...DIRECTIVES,
    BooleanValueAccessor,
    NumericValueAccessor,
    RadioValueAccessor,
    TextValueAccessor,
  ],
})
export class InoElementsModule {
  static forRoot(
    config?: InoElementsConfig
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
