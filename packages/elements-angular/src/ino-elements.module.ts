import {APP_INITIALIZER, ModuleWithProviders, NgModule, NgZone} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import { InoElementsConfig } from '@inovex.de/elements';
import { DIRECTIVES } from './directives/proxies-list';
import { BooleanValueAccessorDirective, FsValueAccessorDirective, InoRadioValueAccessorDirective, TextValueAccessorDirective } from "./control-value-accesors"
import { appInitialize, ConfigToken } from './app-initialize';

@NgModule({
  declarations: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective,
  ],
  imports: [CommonModule],
  exports: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective,
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
