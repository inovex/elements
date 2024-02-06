import { Directive, ElementRef, HostListener } from '@angular/core';
import { ValueAccessorDirective } from './value-accessor.directive';

export const booleanDirectiveSelector =
  'ino-checkbox,ino-control-item[role="checkbox"],ino-switch';

@Directive()
export class BooleanValueAccessorDirective extends ValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('checkedChange', ['$event.detail'])
  _handleInoChange(value: boolean) {
    this.handleChangeEvent(value);
  }

  override writeValue(value: boolean): void {
    this.el.nativeElement.checked = this.lastValue = value == null ? '' : value;
  }
}
