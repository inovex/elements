import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ino-input,ino-textarea,ino-range,ino-select,ino-datepicker',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessorDirective,
      multi: true,
    },
  ],
})
export class TextValueAccessorDirective extends ValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('valueChange', ['$event.detail'])
  _handleInputEvent(value: string) {
    this.handleChangeEvent(value);
  }

  @HostListener('inoBlur')
  _handleInoBlur() {
    this.handleBlurEvent();
  }
}
