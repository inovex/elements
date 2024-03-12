import { HostListener, ElementRef, Directive } from '@angular/core';
import { ValueAccessorDirective } from './value-accessor.directive';

export const numericDirectiveSelector =
  'ino-input[type=number],ino-range:not([ranged])';

@Directive()
export class NumericValueAccessorDirective extends ValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('valueChange', ['$event.detail'])
  handleInputEvent(value: number): void {
    this.handleChangeEvent(value);
  }

  registerOnChange(fn: (_: number | null) => void): void {
    super.registerOnChange((value: string) => {
      fn(value === '' ? null : parseFloat(value));
    });
  }
}
