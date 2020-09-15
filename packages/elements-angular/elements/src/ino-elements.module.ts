import { DIRECTIVES } from './directives/proxies-list';
import { NgModule } from '@angular/core';
import { BooleanValueAccessorDirective } from './directives/control-value-accesors/boolean-value-accessor.directive';
import { FsValueAccessorDirective } from './directives/control-value-accesors/fs-value-accessor.directive';
import { InoRadioValueAccessorDirective } from './directives/control-value-accesors/ino-radio-value-accessor.directive';
import { TextValueAccessorDirective } from './directives/control-value-accesors/text-value-accessor.directive';

import { addIcons } from '@inovex.de/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';
import { defineCustomElements } from '@inovex.de/elements/dist/loader';

defineCustomElements(window);
addIcons(ICON_PATHS);

@NgModule({
  declarations: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective
  ],
  imports: [
  ],
  exports: [
    ...DIRECTIVES,
    BooleanValueAccessorDirective,
    FsValueAccessorDirective,
    InoRadioValueAccessorDirective,
    TextValueAccessorDirective
  ]
})
export class InoElementsModule { }
