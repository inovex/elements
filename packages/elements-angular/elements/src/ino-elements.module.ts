import { NgModule, ModuleWithProviders, APP_INITIALIZER, NgZone } from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';

import { DIRECTIVES } from './directives/proxies-list';
import { BooleanValueAccessorDirective } from './directives/control-value-accesors/boolean-value-accessor.directive';
import { FsValueAccessorDirective } from './directives/control-value-accesors/fs-value-accessor.directive';
import { InoRadioValueAccessorDirective } from './directives/control-value-accesors/ino-radio-value-accessor.directive';
import { TextValueAccessorDirective } from './directives/control-value-accesors/text-value-accessor.directive';

import { importLatoFont } from '@inovex.de/elements/dist/collection/util/import-fonts';
import { appInitialize } from './app-initialize';

@NgModule({
  declarations: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective
  ]
})
export class InoElementsModule {

    static forRoot(): ModuleWithProviders<InoElementsModule> {
        return {
          ngModule: InoElementsModule,
          providers: [
            {
              provide: APP_INITIALIZER,
              useFactory: appInitialize,
              multi: true,
              deps: [
                DOCUMENT,
                NgZone
              ]
            }
          ]
        };
      }

 }
