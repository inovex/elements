import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  rangeDirectiveSelector,
  RangeValueAccessorDirective as ProxyDirective,
} from '@inovex.de/elements-angular/shared';

@Directive({
  selector: rangeDirectiveSelector,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RangeValueAccessorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class RangeValueAccessorDirective extends ProxyDirective {}
