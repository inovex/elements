import { Directive, ElementRef, HostListener } from '@angular/core';
import { ValueAccessorDirective } from './value-accessor.directive';

export const radioDirectiveSelector =
  'ino-radio,ino-control-item[role="radio"]';

@Directive()
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
