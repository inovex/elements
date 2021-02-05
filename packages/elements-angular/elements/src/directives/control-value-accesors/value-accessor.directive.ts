import { ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessorDirective implements ControlValueAccessor {
  protected lastValue: any;
  constructor(protected el: ElementRef) {}

  writeValue(value: any): void {
    this.el.nativeElement.value = this.lastValue = value == null ? '' : value;
  }

  handleChangeEvent(value: any): void {
    if (value !== this.lastValue) {
      this.lastValue = value;
      this.onChange(value);
      this.writeValue(value);
    }
  }

  handleBlurEvent(): void {
    this.onTouched();
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange: (value: any) => void = () => {
    /**/
  };
  private onTouched: () => void = () => {
    /**/
  };
}
