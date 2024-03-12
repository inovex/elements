import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  numericDirectiveSelector,
  NumericValueAccessorDirective as ProxyDirective,
} from '@inovex.de/elements-angular/shared';

@Directive({
  selector: numericDirectiveSelector,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumericValueAccessorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class NumericValueAccessorDirective extends ProxyDirective {}
