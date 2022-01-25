import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TextValueAccessorDirective } from "./text-value-accessor.directive";

@Directive({
  selector: 'ino-markdown-editor',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InoMarkdownEditorValueAccessorDirective,
      multi: true,
    },
  ],
})
export class InoMarkdownEditorValueAccessorDirective extends TextValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  writeValue(value: any): void {
    super.writeValue(value);
    this.el.nativeElement.initialValue = this.lastValue;
  }
}
