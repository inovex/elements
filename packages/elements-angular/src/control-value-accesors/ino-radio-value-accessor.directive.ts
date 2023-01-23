import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  selector: 'ino-radio,ino-control-item[role="radio"]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InoRadioValueAccessorDirective,
      multi: true,
    },
  ],
})
export class InoRadioValueAccessorDirective extends ValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('checkedChange', ['$event'])
  _handleInoChange(event: any): void {
    this.handleChangeEvent(event.target.value);
  }

  override writeValue(value: any): void {
    this.el.nativeElement.checked = this.lastValue = value == null ? '' : value;
  }
}
