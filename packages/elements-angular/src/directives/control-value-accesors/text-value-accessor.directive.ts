import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { textDirectiveSelector, TextValueAccessorDirective as ProxyDirective } from '@inovex.de/elements-angular/shared';

@Directive({
  selector: textDirectiveSelector,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessorDirective,
      multi: true,
    },
  ],
  standalone: false
})
export class TextValueAccessorDirective extends ProxyDirective {}
