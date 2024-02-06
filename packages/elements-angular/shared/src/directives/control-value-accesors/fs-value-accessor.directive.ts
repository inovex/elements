import { Directive, ElementRef, HostListener } from '@angular/core';
import { ValueAccessorDirective } from './value-accessor.directive';

export const fsDirectiveSelector = 'ino-input-file,ino-input[type=file]';

@Directive()
export class FsValueAccessorDirective extends ValueAccessorDirective {
  constructor(el: ElementRef) {
    super(el);
  }

  @HostListener('changeFile', ['$event.detail'])
  _handleInputEvent(value: any): void {
    if (this.el.nativeElement.multiple) {
      this.handleChangeEvent(value.files);
    } else {
      this.handleChangeEvent(value.files[0]);
    }
  }

  override writeValue(value: any): void {
    if (value instanceof FileList) {
      this.el.nativeElement.files = value;
    } else if (Array.isArray(value) && !value.length) {
      this.el.nativeElement.files = null;
    } else if (value === null) {
      this.el.nativeElement.files = null;
    } else {
      // Since we cannot manually construct a FileList instance, we have to ignore
      // any attempt to push a non-FileList instance into the input.
      if (console && console.warn && console.log) {
        console.warn(
          'Ignoring attempt to assign non-FileList to input[type=file].',
        );
        console.log('Value:', value);
      }
    }
  }
}
