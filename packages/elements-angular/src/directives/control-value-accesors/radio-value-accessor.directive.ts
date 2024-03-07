import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  selector: 'ino-radio,ino-control-item[role="radio"]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioValueAccessorDirective,
      multi: true,
    },
  ],
})
export class RadioValueAccessorDirective extends ValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('checkedChange', ['$event.detail'])
  _handleInoChange(value: boolean): void {
    this.handleChangeEvent(value);
  }

  override writeValue(value: boolean): void {
    this.el.nativeElement.checked = this.lastValue = value == null ? '' : value;
  }
}
