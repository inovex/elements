import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ino-radio,ino-control-item[ino-role="radio"]',
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

  writeValue(value: any): void {
    this.el.nativeElement.checked = this.lastValue = value == null ? '' : value;
  }
}
