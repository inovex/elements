import { DIRECTIVES } from './directives/proxies-list';
import { NgModule } from '@angular/core';
import { BooleanValueAccessorDirective } from './directives/control-value-accesors/boolean-value-accessor.directive';
import { FsValueAccessorDirective } from './directives/control-value-accesors/fs-value-accessor.directive';
import { InoRadioValueAccessorDirective } from './directives/control-value-accesors/ino-radio-value-accessor.directive';
import { TextValueAccessorDirective } from './directives/control-value-accesors/text-value-accessor.directive';

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
