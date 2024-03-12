import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  fsDirectiveSelector,
  FsValueAccessorDirective as ProxyDirective,
} from '@inovex.de/elements-angular/shared';

@Directive({
  selector: fsDirectiveSelector,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ProxyDirective,
      multi: true,
    },
  ],
  standalone: true,
})
export class FsValueAccessorDirective extends ProxyDirective {}
