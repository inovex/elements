import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  radioDirectiveSelector,
  RadioValueAccessorDirective as ProxyDirective,
} from '@inovex.de/elements-angular/shared';

@Directive({
  selector: radioDirectiveSelector,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: RadioValueAccessorDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class RadioValueAccessorDirective extends ProxyDirective {}
