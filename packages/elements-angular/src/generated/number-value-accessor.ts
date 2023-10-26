import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ino-range:not([ranged]), ino-range[ranged], ino-range[ranged]',
  host: {
    '(valueChange)': 'handleChangeEvent($event.target.value)',
    '(valueStartChange)': 'handleChangeEvent($event.target.valueStart)',
    '(valueEndChange)': 'handleChangeEvent($event.target.valueEnd)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericValueAccessor,
      multi: true
    }
  ]
})
export class NumericValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
  registerOnChange(fn: (_: number | null) => void) {
    super.registerOnChange(value => {
      fn(value === '' ? null : parseFloat(value));
    });
  }
}
