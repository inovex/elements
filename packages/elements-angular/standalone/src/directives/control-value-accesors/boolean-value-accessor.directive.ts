import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  booleanDirectiveSelector,
  BooleanValueAccessorDirective as ProxyDirective,
} from '@inovex.de/elements-angular/shared';

@Directive({
  selector: booleanDirectiveSelector,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: BooleanValueAccessorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class BooleanValueAccessorDirective extends ProxyDirective {}
