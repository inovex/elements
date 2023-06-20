import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  selector: 'ino-checkbox,ino-control-item[role="checkbox"],ino-switch',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BooleanValueAccessorDirective,
      multi: true,
    },
  ],
})
export class BooleanValueAccessorDirective extends ValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('checkedChange', ['$event.detail'])
  _handleInoChange(value: any) {
    this.handleChangeEvent(value);
  }

  override writeValue(value: any): void {
    this.el.nativeElement.checked = this.lastValue = value == null ? '' : value;
  }
}
