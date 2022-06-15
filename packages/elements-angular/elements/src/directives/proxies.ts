/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@inovex.de/elements';




export declare interface InoAutocomplete extends Components.InoAutocomplete {
  /**
   * Emits in three ways:

1. Clicking on an option
2. Pressing `Enter` while an option is selected
3. Entering a valid value and blurring the input element

Contains one of the texts provided by the `<ino-options>`s. 
   */
  valueChange: EventEmitter<CustomEvent<string | null>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['debounceTimeout', 'noOptionsText', 'value']
})
@Component({
  selector: 'ino-autocomplete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['debounceTimeout', 'noOptionsText', 'value']
})
export class InoAutocomplete {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoButton extends Components.InoButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoFocus', 'dense', 'disabled', 'form', 'loading', 'name', 'type', 'variant']
})
@Component({
  selector: 'ino-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'dense', 'disabled', 'form', 'loading', 'name', 'type', 'variant']
})
export class InoButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoCard extends Components.InoCard {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disableElevation', 'selected']
})
@Component({
  selector: 'ino-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disableElevation', 'selected']
})
export class InoCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoCarousel extends Components.InoCarousel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['animated', 'autoplay', 'hideButtons', 'infinite', 'intermission', 'reverse', 'value']
})
@Component({
  selector: 'ino-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['animated', 'autoplay', 'hideButtons', 'infinite', 'intermission', 'reverse', 'value']
})
export class InoCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoCarouselSlide extends Components.InoCarouselSlide {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['src', 'value']
})
@Component({
  selector: 'ino-carousel-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['src', 'value']
})
export class InoCarouselSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoCheckbox extends Components.InoCheckbox {
  /**
   * Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`. 
   */
  checkedChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'selection', 'value']
})
@Component({
  selector: 'ino-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'selection', 'value']
})
export class InoCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoChip extends Components.InoChip {
  /**
   * Event that emits the `value` as soon as the user clicks on the chip. 
   */
  chipClicked: EventEmitter<CustomEvent<string>>;
  /**
   * Event that emits the `value` as soon as the user clicks on the remove icon.

Listen to this event to hide or destroy this chip. 
   */
  chipRemoved: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['colorScheme', 'disabled', 'fill', 'label', 'removable', 'selectable', 'selected', 'value']
})
@Component({
  selector: 'ino-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['colorScheme', 'disabled', 'fill', 'label', 'removable', 'selectable', 'selected', 'value']
})
export class InoChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['chipClicked', 'chipRemoved']);
  }
}


export declare interface InoControlItem extends Components.InoControlItem {
  /**
   * Emits when the user clicks on the checkbox or the list item to change the checked state. Contains the status in `event.detail`. 
   */
  checkedChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'checked', 'disabled', 'indeterminate', 'name', 'role', 'secondaryText', 'selected', 'text', 'trailing', 'value']
})
@Component({
  selector: 'ino-control-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'checked', 'disabled', 'indeterminate', 'name', 'role', 'secondaryText', 'selected', 'text', 'trailing', 'value']
})
export class InoControlItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoCurrencyInput extends Components.InoCurrencyInput {
  /**
   * Emits when the user types something in.
Contains typed input in `event.detail` 
   */
  valueChange: EventEmitter<CustomEvent<number>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['currencyLocale', 'value']
})
@Component({
  selector: 'ino-currency-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currencyLocale', 'value']
})
export class InoCurrencyInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoDatepicker extends Components.InoDatepicker {
  /**
   * Emits when the value of the datepicker changes.
The value can be found in `event.detail` 
   */
  valueChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['appendTo', 'attachToBody', 'autoFocus', 'dateFormat', 'defaultDate', 'defaultHour', 'defaultMinute', 'disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'hourStep', 'inline', 'label', 'max', 'min', 'minuteStep', 'name', 'outline', 'placeholder', 'range', 'required', 'showLabelHint', 'twelveHourTime', 'type', 'value'],
  methods: ['redraw', 'setFocus', 'setBlur']
})
@Component({
  selector: 'ino-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appendTo', 'attachToBody', 'autoFocus', 'dateFormat', 'defaultDate', 'defaultHour', 'defaultMinute', 'disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'hourStep', 'inline', 'label', 'max', 'min', 'minuteStep', 'name', 'outline', 'placeholder', 'range', 'required', 'showLabelHint', 'twelveHourTime', 'type', 'value']
})
export class InoDatepicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import type { DialogCloseAction as IDialogDialogCloseAction } from '@inovex.de/elements';
export declare interface InoDialog extends Components.InoDialog {
  /**
   * Emits an event upon closing the dialog 
   */
  close: EventEmitter<CustomEvent<IDialogDialogCloseAction>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['attachTo', 'dismissible', 'fullwidth', 'open']
})
@Component({
  selector: 'ino-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['attachTo', 'dismissible', 'fullwidth', 'open']
})
export class InoDialog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


export declare interface InoFab extends Components.InoFab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'edgePosition', 'extended', 'icon', 'label', 'mini', 'tooltipPlacement']
})
@Component({
  selector: 'ino-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'edgePosition', 'extended', 'icon', 'label', 'mini', 'tooltipPlacement']
})
export class InoFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoFabSet extends Components.InoFabSet {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dialDirection', 'leftRightLocation', 'openDial', 'topBottomLocation']
})
@Component({
  selector: 'ino-fab-set',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dialDirection', 'leftRightLocation', 'openDial', 'topBottomLocation']
})
export class InoFabSet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoFormRow extends Components.InoFormRow {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label', 'mandatory']
})
@Component({
  selector: 'ino-form-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'mandatory']
})
export class InoFormRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoHeader extends Components.InoHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['text']
})
@Component({
  selector: 'ino-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text']
})
export class InoHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoIcon extends Components.InoIcon {
  /**
   * Event that emits as soon as the user clicks on the icon.
The event only emits if the property `inoClickable` is true. 
   */
  clickEl: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['clickable', 'colorSecondary', 'icon', 'src', 'svgTitle']
})
@Component({
  selector: 'ino-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clickable', 'colorSecondary', 'icon', 'src', 'svgTitle']
})
export class InoIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}


export declare interface InoIconButton extends Components.InoIconButton {
  /**
   * Event that emits as soon as the user clicks on the icon.
The event only emits if the property `clickable` is true. 
   */
  clickEl: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'autoFocus', 'colorScheme', 'disabled', 'filled', 'icon', 'type']
})
@Component({
  selector: 'ino-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'autoFocus', 'colorScheme', 'disabled', 'filled', 'icon', 'type']
})
export class InoIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}


export declare interface InoImg extends Components.InoImg {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'decoding', 'fallbackIcon', 'height', 'imgListItem', 'label', 'ratioHeight', 'ratioWidth', 'rounded', 'sizes', 'src', 'srcset', 'usemap', 'width']
})
@Component({
  selector: 'ino-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'decoding', 'fallbackIcon', 'height', 'imgListItem', 'label', 'ratioHeight', 'ratioWidth', 'rounded', 'sizes', 'src', 'srcset', 'usemap', 'width']
})
export class InoImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoImgList extends Components.InoImgList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['encloseLabel', 'masonry']
})
@Component({
  selector: 'ino-img-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['encloseLabel', 'masonry']
})
export class InoImgList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoInput extends Components.InoInput {
  /**
   * Emits when the input field is blurred and validates email input 
   */
  inoBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emits when the input field is focused 
   */
  inoFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emits when the user types something in.
Contains typed input in `event.detail` 
   */
  valueChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoFocus', 'autocomplete', 'dataList', 'disabled', 'error', 'helper', 'helperCharacterCounter', 'helperPersistent', 'helperValidation', 'label', 'max', 'maxlength', 'min', 'name', 'outline', 'pattern', 'placeholder', 'required', 'showLabelHint', 'step', 'type', 'unit', 'value'],
  methods: ['getInputElement', 'setFocus', 'setBlur']
})
@Component({
  selector: 'ino-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'autocomplete', 'dataList', 'disabled', 'error', 'helper', 'helperCharacterCounter', 'helperPersistent', 'helperValidation', 'label', 'max', 'maxlength', 'min', 'name', 'outline', 'pattern', 'placeholder', 'required', 'showLabelHint', 'step', 'type', 'unit', 'value']
})
export class InoInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inoBlur', 'inoFocus', 'valueChange']);
  }
}


export declare interface InoInputFile extends Components.InoInputFile {
  /**
   * Emits when the value changes. 
   */
  changeFile: EventEmitter<CustomEvent<{ e: any; files: File[]; }>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['accept', 'autoFocus', 'disabled', 'dragAndDrop', 'dragAndDropSecondaryText', 'dragAndDropText', 'label', 'multiple', 'name', 'required']
})
@Component({
  selector: 'ino-input-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'autoFocus', 'disabled', 'dragAndDrop', 'dragAndDropSecondaryText', 'dragAndDropText', 'label', 'multiple', 'name', 'required']
})
export class InoInputFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeFile']);
  }
}


export declare interface InoLabel extends Components.InoLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'outline', 'required', 'showHint', 'text']
})
@Component({
  selector: 'ino-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'outline', 'required', 'showHint', 'text']
})
export class InoLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoList extends Components.InoList {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['avatar', 'dense', 'twoLines']
})
@Component({
  selector: 'ino-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['avatar', 'dense', 'twoLines']
})
export class InoList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoListDivider extends Components.InoListDivider {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['betweenLists', 'inset', 'padded']
})
@Component({
  selector: 'ino-list-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['betweenLists', 'inset', 'padded']
})
export class InoListDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoListItem extends Components.InoListItem {
  /**
   * Emits when the list item is clicked or
the enter/space key if pressed while the item is in focus.
Contains the element itself in `event.detail` 
   */
  clickEl: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'disabled', 'secondaryText', 'selected', 'text']
})
@Component({
  selector: 'ino-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'disabled', 'secondaryText', 'selected', 'text']
})
export class InoListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}

import type { ViewModeUnion as IMarkdownEditorViewModeUnion } from '@inovex.de/elements';
export declare interface InoMarkdownEditor extends Components.InoMarkdownEditor {
  /**
   * Emits when one of the view mode buttons was clicked.
The value of type `ViewMode` can be found in `event.detail` 
   */
  viewModeChange: EventEmitter<CustomEvent<IMarkdownEditorViewModeUnion>>;
  /**
   * Emits when the value of the markdown editor **blurs**.
The value of type `string` can be found in `event.detail` 
   */
  valueChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emits when the ino-markdown-editor is blurred 
   */
  inoBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['initialValue', 'viewMode']
})
@Component({
  selector: 'ino-markdown-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['initialValue', 'viewMode']
})
export class InoMarkdownEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['viewModeChange', 'valueChange', 'inoBlur']);
  }
}


export declare interface InoMenu extends Components.InoMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['placement']
})
@Component({
  selector: 'ino-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['placement']
})
export class InoMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoNavDrawer extends Components.InoNavDrawer {
  /**
   * Emits when the user clicks on the drawer toggle icon to change the open state. Contains the status in `event.detail`. 
   */
  openChange: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['anchor', 'open', 'variant']
})
@Component({
  selector: 'ino-nav-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['anchor', 'open', 'variant']
})
export class InoNavDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['openChange']);
  }
}


export declare interface InoNavItem extends Components.InoNavItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activated', 'disabled', 'subText', 'text']
})
@Component({
  selector: 'ino-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activated', 'disabled', 'subText', 'text']
})
export class InoNavItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoOption extends Components.InoOption {
  /**
   * Emits on option click 
   */
  clickEl: EventEmitter<CustomEvent<HTMLInoOptionElement>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'selected', 'value']
})
@Component({
  selector: 'ino-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'selected', 'value']
})
export class InoOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}


export declare interface InoOptionGroup extends Components.InoOptionGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label']
})
@Component({
  selector: 'ino-option-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class InoOptionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoPopover extends Components.InoPopover {
  /**
   * Emits when the popover wants to show (`true`) or hide (`false`) itself.
This is depended on the `trigger` property.
Use this event in controlled-mode (see `controlled`).

e.g.: `trigger = 'click'` - This events emits with `true`
when the user clicks on the target (slot/`for`/parent-element)
and emits with `false` when the target or the outside is clicked. 
   */
  visibleChanged: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['attachToBody', 'colorScheme', 'controlled', 'distance', 'followCursor', 'for', 'hideOnBlur', 'hideOnEsc', 'interactive', 'placement', 'trigger', 'visible'],
  methods: ['getTippyInstance']
})
@Component({
  selector: 'ino-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['attachToBody', 'colorScheme', 'controlled', 'distance', 'followCursor', 'for', 'hideOnBlur', 'hideOnEsc', 'interactive', 'placement', 'trigger', 'visible']
})
export class InoPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['visibleChanged']);
  }
}


export declare interface InoProgressBar extends Components.InoProgressBar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['buffer', 'indeterminate', 'label', 'progress']
})
@Component({
  selector: 'ino-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buffer', 'indeterminate', 'label', 'progress']
})
export class InoProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoRadio extends Components.InoRadio {
  /**
   * Emits when the user interacts with the radio-button. Contains `true` in `event.detail`.
This event will only be emitted if the current state of the radio button is false. 
   */
  checkedChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ino-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'name', 'value']
})
export class InoRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoRadioGroup extends Components.InoRadioGroup {
  /**
   * Emits if the user clicks or navigates (via keyboard) to a `<ino-radio>` element within the radio group.
Contains the `value` of the selected `<ino-radio>`. 
   */
  valueChange: EventEmitter<CustomEvent<number | string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['value']
})
@Component({
  selector: 'ino-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value']
})
export class InoRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoRange extends Components.InoRange {
  /**
   * Emits when the value changes (not in ranged mode). 
   */
  valueChange: EventEmitter<CustomEvent<number>>;
  /**
   * Emits when the start (left) value of the interval changes (in ranged mode). 
   */
  valueStartChange: EventEmitter<CustomEvent<number>>;
  /**
   * Emits when the end (right) value of the interval changes (in ranged mode). 
   */
  valueEndChange: EventEmitter<CustomEvent<number>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['colorScheme', 'disabled', 'discrete', 'markers', 'max', 'min', 'name', 'ranged', 'step', 'value', 'valueEnd', 'valueStart'],
  methods: ['setValueToAriaTextMapperFn']
})
@Component({
  selector: 'ino-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['colorScheme', 'disabled', 'discrete', 'markers', 'max', 'min', 'name', 'ranged', 'step', 'value', 'valueEnd', 'valueStart']
})
export class InoRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'valueStartChange', 'valueEndChange']);
  }
}


export declare interface InoSegmentButton extends Components.InoSegmentButton {
  /**
   * Emits if the user interacts with the button.
If the button is disabled or checked, the event will not be emitted. 
   */
  checkedChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'dense', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ino-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'dense', 'disabled', 'name', 'value']
})
export class InoSegmentButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoSegmentGroup extends Components.InoSegmentGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['name', 'value']
})
@Component({
  selector: 'ino-segment-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['name', 'value']
})
export class InoSegmentGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoSelect extends Components.InoSelect {
  /**
   * Emits when a selection changes. Contains new value in `event.detail`. 
   */
  valueChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'label', 'name', 'outline', 'required', 'showLabelHint', 'value']
})
@Component({
  selector: 'ino-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'label', 'name', 'outline', 'required', 'showLabelHint', 'value']
})
export class InoSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoSidebar extends Components.InoSidebar {
  /**
   * Emits an event if the user expands or collapses the sidebar 
   */
  openChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alignRight', 'name', 'open']
})
@Component({
  selector: 'ino-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignRight', 'name', 'open']
})
export class InoSidebar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['openChange']);
  }
}


export declare interface InoSnackbar extends Components.InoSnackbar {
  /**
   * Event that emits as soon as the action button is clicked. 
   */
  actionClick: EventEmitter<CustomEvent<any>>;
  /**
   * Event that emits as soon as the snackbar hides.
Listen to this event to hide or destroy this element. 
   */
  hideEl: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['actionText', 'message', 'stayVisibleOnHover', 'timeout', 'type']
})
@Component({
  selector: 'ino-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionText', 'message', 'stayVisibleOnHover', 'timeout', 'type']
})
export class InoSnackbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['actionClick', 'hideEl']);
  }
}


export declare interface InoSpinner extends Components.InoSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['colorScheme', 'height', 'modal', 'type', 'width']
})
@Component({
  selector: 'ino-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['colorScheme', 'height', 'modal', 'type', 'width']
})
export class InoSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoSwitch extends Components.InoSwitch {
  /**
   * Emits when the user clicks on the switch to change the `checked` state. Contains the status in `event.detail`. 
   */
  checkedChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'colorScheme', 'disabled', 'name']
})
@Component({
  selector: 'ino-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'colorScheme', 'disabled', 'name']
})
export class InoSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoTab extends Components.InoTab {
  /**
   * Emitted when the user interacts with the tab.
This event is used by the ino-tab-bar. 
   */
  interacted: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['icon', 'indicatorContentWidth', 'label', 'stacked']
})
@Component({
  selector: 'ino-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'indicatorContentWidth', 'label', 'stacked']
})
export class InoTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['interacted']);
  }
}


export declare interface InoTabBar extends Components.InoTabBar {
  /**
   * Emits when a tab changes.
Contains the index of the activated tab in `event.detail` 
   */
  activeTabChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeTab', 'autoFocus']
})
@Component({
  selector: 'ino-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeTab', 'autoFocus']
})
export class InoTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['activeTabChange']);
  }
}

import type { SortDirectionChangeDetails as IInoTableSortDirectionChangeDetails } from '@inovex.de/elements';
export declare interface InoTable extends Components.InoTable {
  /**
   * Emits that the sort direction or column id has changed. 
   */
  sortChange: EventEmitter<CustomEvent<IInoTableSortDirectionChangeDetails>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['loading', 'noHover', 'sortColumnId', 'sortDirection', 'stickyHeader']
})
@Component({
  selector: 'ino-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['loading', 'noHover', 'sortColumnId', 'sortDirection', 'stickyHeader']
})
export class InoTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sortChange']);
  }
}

import type { SortDirectionChangeDetails as IInoTableHeaderCellSortDirectionChangeDetails } from '@inovex.de/elements';
export declare interface InoTableHeaderCell extends Components.InoTableHeaderCell {
  /**
   * Emits that the sort direction has been changed. 
   */
  sortDirectionChange: EventEmitter<CustomEvent<IInoTableHeaderCellSortDirectionChangeDetails>>;
  /**
   * Emits that the search field focused (true) or blurred (false). 
   */
  searchFocusChange: EventEmitter<CustomEvent<boolean>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autofocus', 'columnId', 'label', 'notSortable', 'searchIcon', 'searched', 'sortDirection', 'sortStart'],
  methods: ['setSearchable', 'setFocus', 'setBlur']
})
@Component({
  selector: 'ino-table-header-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autofocus', 'columnId', 'label', 'notSortable', 'searchIcon', 'searched', 'sortDirection', 'sortStart']
})
export class InoTableHeaderCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sortDirectionChange', 'searchFocusChange']);
  }
}


export declare interface InoTextarea extends Components.InoTextarea {
  /**
   * Emits when the textarea is blurred and validates email input 
   */
  inoBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emits when the user types something in. Contains typed input in `event.detail` 
   */
  valueChange: EventEmitter<CustomEvent<string>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoFocus', 'autogrow', 'cols', 'disabled', 'label', 'maxlength', 'minlength', 'name', 'outline', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'showLabelHint', 'value'],
  methods: ['setFocus', 'setBlur']
})
@Component({
  selector: 'ino-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'autogrow', 'cols', 'disabled', 'label', 'maxlength', 'minlength', 'name', 'outline', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'showLabelHint', 'value']
})
export class InoTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inoBlur', 'valueChange']);
  }
}


export declare interface InoTooltip extends Components.InoTooltip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['colorScheme', 'for', 'label', 'placement', 'trigger'],
  methods: ['getTippyInstance']
})
@Component({
  selector: 'ino-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['colorScheme', 'for', 'label', 'placement', 'trigger']
})
export class InoTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
