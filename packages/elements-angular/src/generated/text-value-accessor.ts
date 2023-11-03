import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector:
    'ino-autocomplete, ino-currency-input, ino-datepicker, ino-input, ino-markdown-editor, ino-segment-group, ino-select, ino-textarea',
  host: {
    '(valueChange)': 'handleChangeEvent($event.target.value)',
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true,
    },
  ],
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
