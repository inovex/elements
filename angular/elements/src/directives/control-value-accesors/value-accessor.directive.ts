import { ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessorDirective implements ControlValueAccessor {

  private onChange: (value: any) => void = () => {/**/ };
  private onTouched: () => void = () => {/**/ };
  protected lastValue: any;

  constructor(protected el: ElementRef) { }

  writeValue(value: any) {
    this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
  }

  handleChangeEvent(value: any) {
    if (value !== this.lastValue) {
      this.lastValue = value;
      this.onChange(value);
      this.writeValue(value);
    }
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}
