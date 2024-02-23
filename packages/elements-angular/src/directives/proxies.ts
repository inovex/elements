/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@inovex.de/elements';


@ProxyCmp({
  inputs: ['accordionTitle', 'expanded']
})
@Component({
  selector: 'ino-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accordionTitle', 'expanded'],
})
export class InoAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['expandedChange']);
  }
}


export declare interface InoAccordion extends Components.InoAccordion {
  /**
   * Emits when the user clicks on the icon toggle to change the expanded state. Contains the status in `event.detail`.
   */
  expandedChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['debounce', 'noOptionsText', 'options', 'value']
})
@Component({
  selector: 'ino-autocomplete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['debounce', 'noOptionsText', 'options', 'value'],
})
export class InoAutocomplete {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoAutocomplete extends Components.InoAutocomplete {
  /**
   * Emits the list item the user clicked on either as a string or
a `{key: string; value: string}` object depending on the provided options.

Trigger on two occasions:
1. The user clicked on a list-item.
2. The user types in a string that matches an option and blurs the input
   */
  valueChange: EventEmitter<CustomEvent<string | { key: string; value: string }>>;
}


@ProxyCmp({
  inputs: ['a11yLabel', 'alt', 'colorSecondary', 'initials', 'interactive', 'loading', 'src', 'variant']
})
@Component({
  selector: 'ino-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yLabel', 'alt', 'colorSecondary', 'initials', 'interactive', 'loading', 'src', 'variant'],
})
export class InoAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoAvatar extends Components.InoAvatar {}


@ProxyCmp({
  inputs: ['autoFocus', 'dense', 'disabled', 'form', 'loading', 'name', 'type', 'variant']
})
@Component({
  selector: 'ino-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'dense', 'disabled', 'form', 'loading', 'name', 'type', 'variant'],
})
export class InoButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoButton extends Components.InoButton {}


@ProxyCmp({
  inputs: ['disableElevation', 'selected']
})
@Component({
  selector: 'ino-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disableElevation', 'selected'],
})
export class InoCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoCard extends Components.InoCard {}


@ProxyCmp({
  inputs: ['autoplay', 'hideButtons', 'infinite', 'intermission', 'reverse', 'value']
})
@Component({
  selector: 'ino-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoplay', 'hideButtons', 'infinite', 'intermission', 'reverse', 'value'],
})
export class InoCarousel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoCarousel extends Components.InoCarousel {
  /**
   * Emits the `value` of the slide that should be displayed after interaction or autoplay interval.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['selected', 'src', 'value']
})
@Component({
  selector: 'ino-carousel-slide',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['selected', 'src', 'value'],
})
export class InoCarouselSlide {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoCarouselSlide extends Components.InoCarouselSlide {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'selection', 'value']
})
@Component({
  selector: 'ino-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'selection', 'value'],
})
export class InoCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoCheckbox extends Components.InoCheckbox {
  /**
   * Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`.
   */
  checkedChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['clickable', 'disabled', 'fill', 'label', 'removable', 'selectable', 'selected', 'value']
})
@Component({
  selector: 'ino-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'disabled', 'fill', 'label', 'removable', 'selectable', 'selected', 'value'],
})
export class InoChip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['chipClicked', 'chipRemoved']);
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
  inputs: ['activated', 'checked', 'disabled', 'indeterminate', 'name', 'role', 'secondaryText', 'selected', 'text', 'trailing', 'value']
})
@Component({
  selector: 'ino-control-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'checked', 'disabled', 'indeterminate', 'name', 'role', 'secondaryText', 'selected', 'text', 'trailing', 'value'],
})
export class InoControlItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoControlItem extends Components.InoControlItem {
  /**
   * Emits when the user clicks on the checkbox or the list item to change the checked state. Contains the status in `event.detail`.
   */
  checkedChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['currencyLocale', 'value']
})
@Component({
  selector: 'ino-currency-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currencyLocale', 'value'],
})
export class InoCurrencyInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
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
  inputs: ['appendTo', 'attachToBody', 'autoFocus', 'dateFormat', 'defaultDate', 'defaultHour', 'defaultMinute', 'disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'hourStep', 'inline', 'label', 'max', 'min', 'minuteStep', 'name', 'outline', 'placeholder', 'range', 'required', 'showLabelHint', 'twelveHourTime', 'type', 'value'],
  methods: ['redraw', 'setFocus', 'setBlur']
})
@Component({
  selector: 'ino-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['appendTo', 'attachToBody', 'autoFocus', 'dateFormat', 'defaultDate', 'defaultHour', 'defaultMinute', 'disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'hourStep', 'inline', 'label', 'max', 'min', 'minuteStep', 'name', 'outline', 'placeholder', 'range', 'required', 'showLabelHint', 'twelveHourTime', 'type', 'value'],
})
export class InoDatepicker {
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
  inputs: ['actionText', 'attachTo', 'bodyText', 'cancelText', 'closeIcon', 'dialogRole', 'dismissible', 'fullwidth', 'headerText', 'icon', 'open']
})
@Component({
  selector: 'ino-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionText', 'attachTo', 'bodyText', 'cancelText', 'closeIcon', 'dialogRole', 'dismissible', 'fullwidth', 'headerText', 'icon', 'open'],
})
export class InoDialog {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close', 'action', 'dialogOpen']);
  }
}


import type { DialogCloseAction as IInoDialogDialogCloseAction } from '@inovex.de/elements';
import type { DialogSubmitAction as IInoDialogDialogSubmitAction } from '@inovex.de/elements';

export declare interface InoDialog extends Components.InoDialog {
  /**
   * Emits an event upon closing the dialog
   */
  close: EventEmitter<CustomEvent<IInoDialogDialogCloseAction>>;
  /**
   * Emits an event upon clicking the action button of the dialog
   */
  action: EventEmitter<CustomEvent<IInoDialogDialogSubmitAction>>;
  /**
   * Emits an event when the dialog is opened.
   */
  dialogOpen: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'edgePosition', 'extended', 'icon', 'label', 'mini', 'tooltipPlacement']
})
@Component({
  selector: 'ino-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'edgePosition', 'extended', 'icon', 'label', 'mini', 'tooltipPlacement'],
})
export class InoFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoFab extends Components.InoFab {}


@ProxyCmp({
  inputs: ['dialDirection', 'leftRightLocation', 'openDial', 'topBottomLocation']
})
@Component({
  selector: 'ino-fab-set',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dialDirection', 'leftRightLocation', 'openDial', 'topBottomLocation'],
})
export class InoFabSet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoFabSet extends Components.InoFabSet {}


@ProxyCmp({
  inputs: ['clickable', 'colorSecondary', 'icon', 'src', 'svgTitle']
})
@Component({
  selector: 'ino-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['clickable', 'colorSecondary', 'icon', 'src', 'svgTitle'],
})
export class InoIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
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
  inputs: ['activated', 'attrs', 'autoFocus', 'disabled', 'filled', 'icon', 'type']
})
@Component({
  selector: 'ino-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'attrs', 'autoFocus', 'disabled', 'filled', 'icon', 'type'],
})
export class InoIconButton {
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
  inputs: ['alt', 'decoding', 'fallbackIcon', 'height', 'imgListItem', 'label', 'ratioHeight', 'ratioWidth', 'rounded', 'sizes', 'src', 'srcset', 'usemap', 'width']
})
@Component({
  selector: 'ino-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'decoding', 'fallbackIcon', 'height', 'imgListItem', 'label', 'ratioHeight', 'ratioWidth', 'rounded', 'sizes', 'src', 'srcset', 'usemap', 'width'],
})
export class InoImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoImg extends Components.InoImg {}


@ProxyCmp({
  inputs: ['encloseLabel', 'masonry']
})
@Component({
  selector: 'ino-img-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['encloseLabel', 'masonry'],
})
export class InoImgList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoImgList extends Components.InoImgList {}


@ProxyCmp({
  inputs: ['autoFocus', 'autocomplete', 'dataList', 'disabled', 'error', 'helper', 'helperCharacterCounter', 'helperPersistent', 'helperValidation', 'label', 'max', 'maxlength', 'min', 'name', 'outline', 'pattern', 'placeholder', 'required', 'showLabelHint', 'step', 'type', 'unit', 'value'],
  methods: ['getInputElement', 'setFocus', 'setBlur']
})
@Component({
  selector: 'ino-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'autocomplete', 'dataList', 'disabled', 'error', 'helper', 'helperCharacterCounter', 'helperPersistent', 'helperValidation', 'label', 'max', 'maxlength', 'min', 'name', 'outline', 'pattern', 'placeholder', 'required', 'showLabelHint', 'step', 'type', 'unit', 'value'],
})
export class InoInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inoBlur', 'inoFocus', 'valueChange']);
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
  inputs: ['accept', 'autoFocus', 'disabled', 'dragAndDrop', 'dragAndDropSecondaryText', 'dragAndDropText', 'label', 'multiple', 'name', 'required']
})
@Component({
  selector: 'ino-input-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'autoFocus', 'disabled', 'dragAndDrop', 'dragAndDropSecondaryText', 'dragAndDropText', 'label', 'multiple', 'name', 'required'],
})
export class InoInputFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeFile']);
  }
}


export declare interface InoInputFile extends Components.InoInputFile {
  /**
   * Emits when the value changes.
   */
  changeFile: EventEmitter<CustomEvent<{ e: any; files: File[]; }>>;
}


@ProxyCmp({
  inputs: ['disabled', 'for', 'outline', 'required', 'showHint', 'text']
})
@Component({
  selector: 'ino-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'for', 'outline', 'required', 'showHint', 'text'],
})
export class InoLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoLabel extends Components.InoLabel {}


@ProxyCmp({
  inputs: ['avatar', 'dense', 'twoLines']
})
@Component({
  selector: 'ino-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['avatar', 'dense', 'twoLines'],
})
export class InoList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoList extends Components.InoList {}


@ProxyCmp({
  inputs: ['betweenLists', 'inset', 'padded']
})
@Component({
  selector: 'ino-list-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['betweenLists', 'inset', 'padded'],
})
export class InoListDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoListDivider extends Components.InoListDivider {}


@ProxyCmp({
  inputs: ['activated', 'attrs', 'disabled', 'secondaryText', 'selected', 'text']
})
@Component({
  selector: 'ino-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'attrs', 'disabled', 'secondaryText', 'selected', 'text'],
})
export class InoListItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
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
  inputs: ['initialValue', 'viewMode']
})
@Component({
  selector: 'ino-markdown-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['initialValue', 'viewMode'],
})
export class InoMarkdownEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['viewModeChange', 'valueChange', 'inoBlur']);
  }
}


import type { ViewModeUnion as IInoMarkdownEditorViewModeUnion } from '@inovex.de/elements';

export declare interface InoMarkdownEditor extends Components.InoMarkdownEditor {
  /**
   * Emits when one of the view mode buttons was clicked.
The value of type `ViewMode` can be found in `event.detail`
   */
  viewModeChange: EventEmitter<CustomEvent<IInoMarkdownEditorViewModeUnion>>;
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
  inputs: ['placement']
})
@Component({
  selector: 'ino-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['placement'],
})
export class InoMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoMenu extends Components.InoMenu {}


@ProxyCmp({
  inputs: ['a11yLabels', 'anchor', 'open', 'variant']
})
@Component({
  selector: 'ino-nav-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yLabels', 'anchor', 'open', 'variant'],
})
export class InoNavDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['openChange']);
  }
}


export declare interface InoNavDrawer extends Components.InoNavDrawer {
  /**
   * Emits when the user clicks on the drawer toggle icon to change the open state. Contains the status in `event.detail`.
   */
  openChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['activated', 'disabled', 'subText', 'text']
})
@Component({
  selector: 'ino-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activated', 'disabled', 'subText', 'text'],
})
export class InoNavItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoNavItem extends Components.InoNavItem {}


@ProxyCmp({
  inputs: ['activeSection', 'intersectionObserverConfig', 'menuTitle', 'scrollOffset', 'sections']
})
@Component({
  selector: 'ino-nav-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeSection', 'intersectionObserverConfig', 'menuTitle', 'scrollOffset', 'sections'],
})
export class InoNavMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['activeSectionChanged']);
  }
}


export declare interface InoNavMenu extends Components.InoNavMenu {
  /**
   * Emits the section ID when the corresponding section is selected by scrolling
into the viewport. This event can be utilized to update the `activeSection` property.
   */
  activeSectionChanged: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['sectionId', 'sectionName', 'showTitle']
})
@Component({
  selector: 'ino-nav-menu-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['sectionId', 'sectionName', 'showTitle'],
})
export class InoNavMenuSection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoNavMenuSection extends Components.InoNavMenuSection {}


@ProxyCmp({
  inputs: ['disabled', 'selected', 'value']
})
@Component({
  selector: 'ino-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'value'],
})
export class InoOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}


export declare interface InoOption extends Components.InoOption {
  /**
   * Emits on option click
   */
  clickEl: EventEmitter<CustomEvent<HTMLInoOptionElement>>;
}


@ProxyCmp({
  inputs: ['label']
})
@Component({
  selector: 'ino-option-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
})
export class InoOptionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoOptionGroup extends Components.InoOptionGroup {}


@ProxyCmp({
  inputs: ['arrow', 'attachToBody', 'colorScheme', 'controlled', 'delay', 'distance', 'followCursor', 'for', 'hideOnBlur', 'hideOnEsc', 'interactive', 'placement', 'trigger', 'visible'],
  methods: ['getTippyInstance']
})
@Component({
  selector: 'ino-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['arrow', 'attachToBody', 'colorScheme', 'controlled', 'delay', 'distance', 'followCursor', 'for', 'hideOnBlur', 'hideOnEsc', 'interactive', 'placement', 'trigger', 'visible'],
})
export class InoPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['visibleChanged']);
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
  inputs: ['buffer', 'indeterminate', 'label', 'progress']
})
@Component({
  selector: 'ino-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buffer', 'indeterminate', 'label', 'progress'],
})
export class InoProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoProgressBar extends Components.InoProgressBar {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ino-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'value'],
})
export class InoRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
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
  inputs: ['alignment', 'value']
})
@Component({
  selector: 'ino-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'value'],
})
export class InoRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
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
  inputs: ['disabled', 'discrete', 'markers', 'max', 'min', 'name', 'ranged', 'step', 'value', 'valueEnd', 'valueStart'],
  methods: ['setValueToAriaTextMapperFn']
})
@Component({
  selector: 'ino-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'discrete', 'markers', 'max', 'min', 'name', 'ranged', 'step', 'value', 'valueEnd', 'valueStart'],
})
export class InoRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'valueStartChange', 'valueEndChange']);
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
  inputs: ['checked', 'dense', 'disabled', 'name', 'type', 'value']
})
@Component({
  selector: 'ino-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'dense', 'disabled', 'name', 'type', 'value'],
})
export class InoSegmentButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
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
  inputs: ['name', 'value']
})
@Component({
  selector: 'ino-segment-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'value'],
})
export class InoSegmentGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoSegmentGroup extends Components.InoSegmentGroup {
  /**
   * Forwards the `checkedChange` events of the `<ino-segment-buttons>` with its value as the detail.
   */
  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'label', 'name', 'outline', 'required', 'showLabelHint', 'value']
})
@Component({
  selector: 'ino-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'error', 'helper', 'helperPersistent', 'helperValidation', 'label', 'name', 'outline', 'required', 'showLabelHint', 'value'],
})
export class InoSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoSelect extends Components.InoSelect {
  /**
   * Emits when a selection changes. Contains new value in `event.detail`.
   */
  valueChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['actionText', 'message', 'stayVisibleOnHover', 'timeout', 'type']
})
@Component({
  selector: 'ino-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionText', 'message', 'stayVisibleOnHover', 'timeout', 'type'],
})
export class InoSnackbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['actionClick', 'hideEl']);
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
  inputs: ['height', 'modal', 'type', 'width']
})
@Component({
  selector: 'ino-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'modal', 'type', 'width'],
})
export class InoSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoSpinner extends Components.InoSpinner {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name']
})
@Component({
  selector: 'ino-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name'],
})
export class InoSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoSwitch extends Components.InoSwitch {
  /**
   * Emits when the user clicks on the switch to change the `checked` state. Contains the status in `event.detail`.
   */
  checkedChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['a11yControls', 'a11ySelected', 'icon', 'indicatorContentWidth', 'label', 'stacked']
})
@Component({
  selector: 'ino-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['a11yControls', 'a11ySelected', 'icon', 'indicatorContentWidth', 'label', 'stacked'],
})
export class InoTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['interacted']);
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
  inputs: ['activeTab', 'autoFocus']
})
@Component({
  selector: 'ino-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeTab', 'autoFocus'],
})
export class InoTabBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['activeTabChange']);
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
  inputs: ['loading', 'noHover', 'sortColumnId', 'sortDirection', 'stickyHeader']
})
@Component({
  selector: 'ino-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['loading', 'noHover', 'sortColumnId', 'sortDirection', 'stickyHeader'],
})
export class InoTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sortChange']);
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
  inputs: ['autofocus', 'columnId', 'label', 'notSortable', 'searchIcon', 'searched', 'sortDirection', 'sortStart'],
  methods: ['setSearchable', 'setFocus', 'setBlur']
})
@Component({
  selector: 'ino-table-header-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autofocus', 'columnId', 'label', 'notSortable', 'searchIcon', 'searched', 'sortDirection', 'sortStart'],
})
export class InoTableHeaderCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['sortDirectionChange', 'searchFocusChange']);
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
  inputs: ['autoFocus', 'autogrow', 'cols', 'disabled', 'label', 'maxlength', 'minlength', 'name', 'outline', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'showLabelHint', 'value'],
  methods: ['setFocus', 'setBlur']
})
@Component({
  selector: 'ino-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoFocus', 'autogrow', 'cols', 'disabled', 'label', 'maxlength', 'minlength', 'name', 'outline', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'showLabelHint', 'value'],
})
export class InoTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inoBlur', 'valueChange']);
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
  inputs: ['arrow', 'colorScheme', 'delay', 'for', 'headerText', 'label', 'placement', 'trigger'],
  methods: ['getTippyInstance']
})
@Component({
  selector: 'ino-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['arrow', 'colorScheme', 'delay', 'for', 'headerText', 'label', 'placement', 'trigger'],
})
export class InoTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoTooltip extends Components.InoTooltip {}


