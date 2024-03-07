import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type ValueType = 'start' | 'end';

@Directive({
  selector: 'ino-range[ranged=true]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RangeValueAccessorDirective,
      multi: true,
    },
  ],
})
export class RangeValueAccessorDirective implements ControlValueAccessor {
  private lastValueStart: number | undefined;
  private lastValueEnd: number | undefined;
  private lastValueWrittenTo: ValueType | undefined;

  constructor(private el: ElementRef<HTMLInoRangeElement>) {}

  writeValue(value: number): void {
    if (this.lastValueWrittenTo === 'start')
      this.el.nativeElement.valueStart = value;

    if (this.lastValueWrittenTo === 'end')
      this.el.nativeElement.valueEnd = value;
  }

  @HostListener('valueStartChange', ['$event.detail'])
  handleValueStartChange(value: number): void {
    this.handleValueStartEndChange('start', value);
  }

  @HostListener('valueEndChange', ['$event.detail'])
  handleValueEndChange(value: number): void {
    this.handleValueStartEndChange('end', value);
  }

  private handleValueStartEndChange(
    type: 'start' | 'end',
    value: number,
  ): void {
    if (type === 'start' && value !== this.lastValueStart) {
      this.lastValueStart = value;
      this.lastValueWrittenTo = 'start';
      this.writeValue(value);
    }

    if (type === 'end' && value !== this.lastValueEnd) {
      this.lastValueEnd = value;
      this.lastValueWrittenTo = 'end';
      this.writeValue(value);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.el.nativeElement.disabled = isDisabled;
  }

  registerOnChange(fn: (value: number) => void) {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  private onChange: (value: any) => void = () => {
    /**/
  };
  private onTouched: () => void = () => {
    /**/
  };
}
