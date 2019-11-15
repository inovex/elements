import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessorDirective } from './value-accessor.directive';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ino-input-file,input[type=file]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FsValueAccessorDirective,
      multi: true
    }
  ]
})
export class FsValueAccessorDirective extends ValueAccessorDirective {

  constructor(el: ElementRef) {
    super(el);
  }

  writeValue(value: any) {
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

        console.warn('Ignoring attempt to assign non-FileList to input[type=file].');
        console.log('Value:', value);
      }

    }
  }

  @HostListener('changeFile', ['$event.detail'])
  _handleInputEvent(value: any) {
    if (this.el.nativeElement.multiple) {
      this.handleChangeEvent(value.files);
    } else {
      this.handleChangeEvent(value.files[0]);
    }
  }
}
