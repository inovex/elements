import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  selector:
    'ino-autocomplete,ino-currency-input,ino-input:not([type=number]):not([type=file]),ino-markdown-editor,ino-textarea,ino-select,ino-datepicker,ino-segment-group',
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
  _handleInputEvent(value: string): void {
    this.handleChangeEvent(value);
  }

  @HostListener('inoBlur')
  _handleInoBlur() {
    this.handleBlurEvent();
  }
}
