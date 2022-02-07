import {
  NgModule,
  ModuleWithProviders,
  APP_INITIALIZER,
  NgZone,
} from '@angular/core';
import { DOCUMENT, CommonModule } from '@angular/common';
import { InoElementsConfig } from '@inovex.de/elements';

import { DIRECTIVES } from './directives/proxies-list';
import { BooleanValueAccessorDirective } from './directives/control-value-accesors/boolean-value-accessor.directive';
import { FsValueAccessorDirective } from './directives/control-value-accesors/fs-value-accessor.directive';
import { InoRadioValueAccessorDirective } from './directives/control-value-accesors/ino-radio-value-accessor.directive';
import { TextValueAccessorDirective } from './directives/control-value-accesors/text-value-accessor.directive';
import {
  InoMarkdownEditorValueAccessorDirective
} from './directives/control-value-accesors/ino-markdown-editor-value-accessor.directive';

import { appInitialize, ConfigToken } from './app-initialize';

@NgModule({
  declarations: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective,
    InoMarkdownEditorValueAccessorDirective,
  ],
  imports: [CommonModule],
  exports: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective,
    InoMarkdownEditorValueAccessorDirective
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
