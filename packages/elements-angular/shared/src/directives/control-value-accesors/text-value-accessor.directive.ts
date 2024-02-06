import { Directive, ElementRef, HostListener } from '@angular/core';
import { ValueAccessorDirective } from './value-accessor.directive';

export const textDirectiveSelector =
  'ino-autocomplete,ino-currency-input,ino-input:not([type=number]):not([type=file]),ino-markdown-editor,ino-textarea,ino-select,ino-datepicker,ino-segment-group';

@Directive()
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
