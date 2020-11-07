/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@inovex.de/elements';


export declare interface InoButton extends Components.InoButton {}
@ProxyCmp({
  inputs: ['autoFocus', 'disabled', 'form', 'inoColorScheme', 'inoDense', 'inoEdgeMirrored', 'inoFill', 'inoFullWidth', 'inoIconLeading', 'inoIconTrailing', 'inoLoading', 'name', 'type']
})
@Component({
  selector: 'ino-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'disabled', 'form', 'inoColorScheme', 'inoDense', 'inoEdgeMirrored', 'inoFill', 'inoFullWidth', 'inoIconLeading', 'inoIconTrailing', 'inoLoading', 'name', 'type']
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
  inputs: ['inoDisableElevation', 'inoSelected']
})
@Component({
  selector: 'ino-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoDisableElevation', 'inoSelected']
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
  inputs: ['inoAnimated', 'inoAutoplay', 'inoHideButtons', 'inoInfinite', 'inoIntermission', 'inoReverse', 'value']
})
@Component({
  selector: 'ino-carousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoAnimated', 'inoAutoplay', 'inoHideButtons', 'inoInfinite', 'inoIntermission', 'inoReverse', 'value']
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

import { Checkbox as ICheckbox } from '@inovex.de/elements/dist/types/components/ino-checkbox/ino-checkbox';
export declare interface InoCheckbox extends Components.InoCheckbox {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'inoSelection', 'name', 'value']
})
@Component({
  selector: 'ino-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'inoSelection', 'name', 'value'],
  outputs: ['checkedChange']
})
export class InoCheckbox {
  /** Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`. */
  checkedChange!: ICheckbox['checkedChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}

import { Chip as IChip } from '@inovex.de/elements/dist/types/components/ino-chip/ino-chip';
export declare interface InoChip extends Components.InoChip {}
@ProxyCmp({
  inputs: ['inoColorScheme', 'inoFill', 'inoIcon', 'inoLabel', 'inoRemovable', 'inoSelectable', 'inoSelected', 'inoValue']
})
@Component({
  selector: 'ino-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoColorScheme', 'inoFill', 'inoIcon', 'inoLabel', 'inoRemovable', 'inoSelectable', 'inoSelected', 'inoValue'],
  outputs: ['removeChip']
})
export class InoChip {
  /** Event that emits as soon as the user removes this chip.

Listen to this event to hide or destroy this chip.
The event only emits if the property `inoRemovable` is true. */
  removeChip!: IChip['removeChip'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['removeChip']);
  }
}

import { ChipSet as IChipSet } from '@inovex.de/elements/dist/types/components/ino-chip-set/ino-chip-set';
export declare interface InoChipSet extends Components.InoChipSet {}
@ProxyCmp({
  inputs: ['inoType']
})
@Component({
  selector: 'ino-chip-set',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoType'],
  outputs: ['updateChipSet']
})
export class InoChipSet {
  /** Event that emits when the value of this element changes.

Only applicable if `inoType` is `choice` or `filter`. */
  updateChipSet!: IChipSet['updateChipSet'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['updateChipSet']);
  }
}

import { InoControlItem as IInoControlItem } from '@inovex.de/elements/dist/types/components/ino-control-item/ino-control-item';
export declare interface InoControlItem extends Components.InoControlItem {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'inoActivated', 'inoDisabled', 'inoId', 'inoRole', 'inoSecondaryText', 'inoSelected', 'inoText', 'inoTrailing', 'name', 'value']
})
@Component({
  selector: 'ino-control-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'indeterminate', 'inoActivated', 'inoDisabled', 'inoId', 'inoRole', 'inoSecondaryText', 'inoSelected', 'inoText', 'inoTrailing', 'name', 'value'],
  outputs: ['checkedChange']
})
export class InoControlItem {
  /** Emits when the user clicks on the checkbox or the list item to change the checked state. Contains the status in `event.detail`. */
  checkedChange!: IInoControlItem['checkedChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}

import { Datepicker as IDatepicker } from '@inovex.de/elements/dist/types/components/ino-datepicker/ino-datepicker';
export declare interface InoDatepicker extends Components.InoDatepicker {}
@ProxyCmp({
  inputs: ['autoFocus', 'disabled', 'hourStep', 'inoDateFormat', 'inoDefaultDate', 'inoDefaultHour', 'inoDefaultMinute', 'inoHelper', 'inoHelperPersistent', 'inoHelperValidation', 'inoLabel', 'inoOutline', 'inoRange', 'inoShowLabelHint', 'inoTwelveHourTime', 'inoType', 'max', 'min', 'minuteStep', 'name', 'required', 'value']
})
@Component({
  selector: 'ino-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'disabled', 'hourStep', 'inoDateFormat', 'inoDefaultDate', 'inoDefaultHour', 'inoDefaultMinute', 'inoHelper', 'inoHelperPersistent', 'inoHelperValidation', 'inoLabel', 'inoOutline', 'inoRange', 'inoShowLabelHint', 'inoTwelveHourTime', 'inoType', 'max', 'min', 'minuteStep', 'name', 'required', 'value'],
  outputs: ['valueChange']
})
export class InoDatepicker {
  /** Emits when the value of the datepicker changes.
The value can be found in `event.detail` */
  valueChange!: IDatepicker['valueChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import { Dialog as IDialog } from '@inovex.de/elements/dist/types/components/ino-dialog/ino-dialog';
export declare interface InoDialog extends Components.InoDialog {}
@ProxyCmp({
  inputs: ['inoOpen']
})
@Component({
  selector: 'ino-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoOpen'],
  outputs: ['openChange']
})
export class InoDialog {
  /** Emits an event upon opening or closing the dialog */
  openChange!: IDialog['openChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['openChange']);
  }
}


export declare interface InoFab extends Components.InoFab {}
@ProxyCmp({
  inputs: ['inoDisabled', 'inoEdgePosition', 'inoExtended', 'inoIcon', 'inoLabel', 'inoMini', 'inoTooltipPlacement']
})
@Component({
  selector: 'ino-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoDisabled', 'inoEdgePosition', 'inoExtended', 'inoIcon', 'inoLabel', 'inoMini', 'inoTooltipPlacement']
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
  inputs: ['inoDialDirection', 'inoLeftRightLocation', 'inoOpenDial', 'inoTopBottomLocation']
})
@Component({
  selector: 'ino-fab-set',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoDialDirection', 'inoLeftRightLocation', 'inoOpenDial', 'inoTopBottomLocation']
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
  inputs: ['inoLabel', 'inoMandatory']
})
@Component({
  selector: 'ino-form-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoLabel', 'inoMandatory']
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
  inputs: ['inoTitle']
})
@Component({
  selector: 'ino-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoTitle']
})
export class InoHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Icon as IIcon } from '@inovex.de/elements/dist/types/components/ino-icon/ino-icon';
export declare interface InoIcon extends Components.InoIcon {}
@ProxyCmp({
  inputs: ['inoClickable', 'inoColorSecondary', 'inoIcon', 'src', 'svgTitle']
})
@Component({
  selector: 'ino-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoClickable', 'inoColorSecondary', 'inoIcon', 'src', 'svgTitle'],
  outputs: ['clickEl']
})
export class InoIcon {
  /** Event that emits as soon as the user clicks on the icon.
The event only emits if the property `inoClickable` is true. */
  clickEl!: IIcon['clickEl'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}

import { IconButton as IIconButton } from '@inovex.de/elements/dist/types/components/ino-icon-button/ino-icon-button';
export declare interface InoIconButton extends Components.InoIconButton {}
@ProxyCmp({
  inputs: ['autoFocus', 'disabled', 'inoActivated', 'inoColorScheme', 'inoIcon']
})
@Component({
  selector: 'ino-icon-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'disabled', 'inoActivated', 'inoColorScheme', 'inoIcon'],
  outputs: ['clickEl']
})
export class InoIconButton {
  /**  */
  clickEl!: IIconButton['clickEl'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}


export declare interface InoImg extends Components.InoImg {}
@ProxyCmp({
  inputs: ['alt', 'decoding', 'height', 'inoImgListItem', 'inoLabel', 'inoRatioHeight', 'inoRatioWidth', 'inoRounded', 'sizes', 'src', 'srcset', 'usemap', 'width']
})
@Component({
  selector: 'ino-img',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'decoding', 'height', 'inoImgListItem', 'inoLabel', 'inoRatioHeight', 'inoRatioWidth', 'inoRounded', 'sizes', 'src', 'srcset', 'usemap', 'width']
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
  inputs: ['inoEncloseLabel', 'inoMasonry']
})
@Component({
  selector: 'ino-img-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoEncloseLabel', 'inoMasonry']
})
export class InoImgList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Input as IInput } from '@inovex.de/elements/dist/types/components/ino-input/ino-input';
export declare interface InoInput extends Components.InoInput {}
@ProxyCmp({
  inputs: ['autoFocus', 'autocomplete', 'disabled', 'inoDataList', 'inoDecimalPlaces', 'inoError', 'inoHelper', 'inoHelperCharacterCounter', 'inoHelperPersistent', 'inoHelperValidation', 'inoIconLeading', 'inoIconTrailing', 'inoLabel', 'inoOutline', 'inoShowLabelHint', 'inoThousandsSeparator', 'inoUnit', 'max', 'maxlength', 'min', 'name', 'pattern', 'placeholder', 'required', 'size', 'step', 'type', 'value'],
  methods: ['getInputElement']
})
@Component({
  selector: 'ino-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'autocomplete', 'disabled', 'inoDataList', 'inoDecimalPlaces', 'inoError', 'inoHelper', 'inoHelperCharacterCounter', 'inoHelperPersistent', 'inoHelperValidation', 'inoIconLeading', 'inoIconTrailing', 'inoLabel', 'inoOutline', 'inoShowLabelHint', 'inoThousandsSeparator', 'inoUnit', 'max', 'maxlength', 'min', 'name', 'pattern', 'placeholder', 'required', 'size', 'step', 'type', 'value'],
  outputs: ['valueChange', 'inoBlur', 'inoFocus']
})
export class InoInput {
  /** Emits when the user types something in.
Contains typed input in `event.detail` */
  valueChange!: IInput['valueChange'];
  /** Emits when the input field is blurred and validates email input */
  inoBlur!: IInput['inoBlur'];
  /** Emits when the input field is focused */
  inoFocus!: IInput['inoFocus'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'inoBlur', 'inoFocus']);
  }
}

import { InputFile as IInputFile } from '@inovex.de/elements/dist/types/components/ino-input-file/ino-input-file';
export declare interface InoInputFile extends Components.InoInputFile {}
@ProxyCmp({
  inputs: ['accept', 'autoFocus', 'disabled', 'inoLabel', 'multiple', 'name', 'required']
})
@Component({
  selector: 'ino-input-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'autoFocus', 'disabled', 'inoLabel', 'multiple', 'name', 'required'],
  outputs: ['changeFile']
})
export class InoInputFile {
  /** Emits when the value changes. */
  changeFile!: IInputFile['changeFile'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeFile']);
  }
}


export declare interface InoLabel extends Components.InoLabel {}
@ProxyCmp({
  inputs: ['inoDisabled', 'inoOutline', 'inoRequired', 'inoShowHint', 'inoText']
})
@Component({
  selector: 'ino-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoDisabled', 'inoOutline', 'inoRequired', 'inoShowHint', 'inoText']
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
  inputs: ['inoAvatar', 'inoDense', 'inoTwoLines']
})
@Component({
  selector: 'ino-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoAvatar', 'inoDense', 'inoTwoLines']
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
  inputs: ['inoBetweenLists', 'inoInset', 'inoPadded']
})
@Component({
  selector: 'ino-list-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoBetweenLists', 'inoInset', 'inoPadded']
})
export class InoListDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { ListItem as IListItem } from '@inovex.de/elements/dist/types/components/ino-list-item/ino-list-item';
export declare interface InoListItem extends Components.InoListItem {}
@ProxyCmp({
  inputs: ['inoActivated', 'inoDisabled', 'inoSecondaryText', 'inoSelected', 'inoText']
})
@Component({
  selector: 'ino-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoActivated', 'inoDisabled', 'inoSecondaryText', 'inoSelected', 'inoText'],
  outputs: ['clickEl']
})
export class InoListItem {
  /** Emits when the list item is clicked.
Contains the element itself in `event.detail` */
  clickEl!: IListItem['clickEl'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}


export declare interface InoMenu extends Components.InoMenu {}
@ProxyCmp({
  inputs: ['inoFor', 'inoOpen']
})
@Component({
  selector: 'ino-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoFor', 'inoOpen']
})
export class InoMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { NavDrawer as INavDrawer } from '@inovex.de/elements/dist/types/components/ino-nav-drawer/ino-nav-drawer';
export declare interface InoNavDrawer extends Components.InoNavDrawer {}
@ProxyCmp({
  inputs: ['inoAnchor', 'inoOpen', 'inoVariant']
})
@Component({
  selector: 'ino-nav-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoAnchor', 'inoOpen', 'inoVariant'],
  outputs: ['openChange']
})
export class InoNavDrawer {
  /** Emits when the user clicks on the drawer toggle icon to change the open state. Contains the status in `event.detail`. */
  openChange!: INavDrawer['openChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['openChange']);
  }
}


export declare interface InoNavItem extends Components.InoNavItem {}
@ProxyCmp({
  inputs: ['inoActivated', 'inoDisabled', 'inoText']
})
@Component({
  selector: 'ino-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoActivated', 'inoDisabled', 'inoText']
})
export class InoNavItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoOption extends Components.InoOption {}
@ProxyCmp({
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
  }
}


export declare interface InoOptionGroup extends Components.InoOptionGroup {}
@ProxyCmp({
  inputs: ['inoLabel']
})
@Component({
  selector: 'ino-option-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoLabel']
})
export class InoOptionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoPopover extends Components.InoPopover {}
@ProxyCmp({
  inputs: ['inoColorScheme', 'inoFor', 'inoPlacement', 'inoTrigger'],
  methods: ['getTippyInstance']
})
@Component({
  selector: 'ino-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoColorScheme', 'inoFor', 'inoPlacement', 'inoTrigger']
})
export class InoPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoProgressBar extends Components.InoProgressBar {}
@ProxyCmp({
  inputs: ['inoBuffer', 'inoIndeterminate', 'inoLabel', 'inoProgress', 'inoReversed']
})
@Component({
  selector: 'ino-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoBuffer', 'inoIndeterminate', 'inoLabel', 'inoProgress', 'inoReversed']
})
export class InoProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Radio as IRadio } from '@inovex.de/elements/dist/types/components/ino-radio/ino-radio';
export declare interface InoRadio extends Components.InoRadio {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ino-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'name', 'value'],
  outputs: ['checkedChange']
})
export class InoRadio {
  /** Emits when the user interacts with the radio-button. Contains `true` in `event.detail`.
This event will only be emitted if the current state of the radio button is false. */
  checkedChange!: IRadio['checkedChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoRadioGroup extends Components.InoRadioGroup {}
@ProxyCmp({
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
  }
}

import { Range as IRange } from '@inovex.de/elements/dist/types/components/ino-range/ino-range';
export declare interface InoRange extends Components.InoRange {}
@ProxyCmp({
  inputs: ['disabled', 'inoColorScheme', 'inoDiscrete', 'inoMarkers', 'max', 'min', 'name', 'step', 'value']
})
@Component({
  selector: 'ino-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'inoColorScheme', 'inoDiscrete', 'inoMarkers', 'max', 'min', 'name', 'step', 'value'],
  outputs: ['valueChange']
})
export class InoRange {
  /** Emits when the value changes. Contains new value in `event.detail`. */
  valueChange!: IRange['valueChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import { InoSegmentButton as IInoSegmentButton } from '@inovex.de/elements/dist/types/components/ino-segment-button/ino-segment-button';
export declare interface InoSegmentButton extends Components.InoSegmentButton {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'inoDense', 'name', 'value']
})
@Component({
  selector: 'ino-segment-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'inoDense', 'name', 'value'],
  outputs: ['checkedChange']
})
export class InoSegmentButton {
  /** Emits if the user interacts with the button.
If the button is disabled or checked, the event will not be emitted. */
  checkedChange!: IInoSegmentButton['checkedChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}


export declare interface InoSegmentGroup extends Components.InoSegmentGroup {}
@ProxyCmp({
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

import { Select as ISelect } from '@inovex.de/elements/dist/types/components/ino-select/ino-select';
export declare interface InoSelect extends Components.InoSelect {}
@ProxyCmp({
  inputs: ['disabled', 'inoLabel', 'inoOutline', 'inoShowLabelHint', 'name', 'required', 'value']
})
@Component({
  selector: 'ino-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'inoLabel', 'inoOutline', 'inoShowLabelHint', 'name', 'required', 'value'],
  outputs: ['valueChange']
})
export class InoSelect {
  /** Emits when a selection changes. Contains new value in `event.detail`. */
  valueChange!: ISelect['valueChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}

import { InoSidebar as IInoSidebar } from '@inovex.de/elements/dist/types/components/ino-sidebar/ino-sidebar';
export declare interface InoSidebar extends Components.InoSidebar {}
@ProxyCmp({
  inputs: ['inoAlignRight', 'inoOpen', 'name']
})
@Component({
  selector: 'ino-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoAlignRight', 'inoOpen', 'name'],
  outputs: ['openChange']
})
export class InoSidebar {
  /** Emits an event if the user expands or collapses the sidebar */
  openChange!: IInoSidebar['openChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['openChange']);
  }
}

import { Snackbar as ISnackbar } from '@inovex.de/elements/dist/types/components/ino-snackbar/ino-snackbar';
export declare interface InoSnackbar extends Components.InoSnackbar {}
@ProxyCmp({
  inputs: ['inoActionText', 'inoAlignment', 'inoMessage', 'inoTimeout', 'inoType']
})
@Component({
  selector: 'ino-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoActionText', 'inoAlignment', 'inoMessage', 'inoTimeout', 'inoType'],
  outputs: ['inoActionClick', 'hideEl']
})
export class InoSnackbar {
  /** Event that emits as soon as the action button is clicked. */
  inoActionClick!: ISnackbar['inoActionClick'];
  /** Event that emits as soon as the snackbar hides.
Listen to this event to hide or destroy this element. */
  hideEl!: ISnackbar['hideEl'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inoActionClick', 'hideEl']);
  }
}


export declare interface InoSpinner extends Components.InoSpinner {}
@ProxyCmp({
  inputs: ['inoColorScheme', 'inoHeight', 'inoModal', 'inoType', 'inoWidth']
})
@Component({
  selector: 'ino-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoColorScheme', 'inoHeight', 'inoModal', 'inoType', 'inoWidth']
})
export class InoSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Switch as ISwitch } from '@inovex.de/elements/dist/types/components/ino-switch/ino-switch';
export declare interface InoSwitch extends Components.InoSwitch {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'inoColorScheme', 'name']
})
@Component({
  selector: 'ino-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'inoColorScheme', 'name'],
  outputs: ['checkedChange']
})
export class InoSwitch {
  /** Emits when the user clicks on the checkbox to change the checked state. Contains the status in `event.detail`. */
  checkedChange!: ISwitch['checkedChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}

import { Tab as ITab } from '@inovex.de/elements/dist/types/components/ino-tab/ino-tab';
export declare interface InoTab extends Components.InoTab {}
@ProxyCmp({
  inputs: ['inoIcon', 'inoIndicatorContentWidth', 'inoLabel', 'inoStacked']
})
@Component({
  selector: 'ino-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoIcon', 'inoIndicatorContentWidth', 'inoLabel', 'inoStacked'],
  outputs: ['inoInteracted']
})
export class InoTab {
  /** Emitted when the user interacts with the tab.
This event is used by the ino-tab-bar. */
  inoInteracted!: ITab['inoInteracted'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inoInteracted']);
  }
}

import { TabBar as ITabBar } from '@inovex.de/elements/dist/types/components/ino-tab-bar/ino-tab-bar';
export declare interface InoTabBar extends Components.InoTabBar {}
@ProxyCmp({
  inputs: ['inoActiveTab']
})
@Component({
  selector: 'ino-tab-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoActiveTab'],
  outputs: ['activeTabChange']
})
export class InoTabBar {
  /** Emits when a tab changes.
Contains the index of the activated tab in `event.detail` */
  activeTabChange!: ITabBar['activeTabChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['activeTabChange']);
  }
}


export declare interface InoTable extends Components.InoTable {}

@Component({
  selector: 'ino-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class InoTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoTableCell extends Components.InoTableCell {}
@ProxyCmp({
  inputs: ['inoNumeric']
})
@Component({
  selector: 'ino-table-cell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoNumeric']
})
export class InoTableCell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface InoTableRow extends Components.InoTableRow {}
@ProxyCmp({
  inputs: ['inoHeaderRow', 'inoSelected']
})
@Component({
  selector: 'ino-table-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoHeaderRow', 'inoSelected']
})
export class InoTableRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { Textarea as ITextarea } from '@inovex.de/elements/dist/types/components/ino-textarea/ino-textarea';
export declare interface InoTextarea extends Components.InoTextarea {}
@ProxyCmp({
  inputs: ['autoFocus', 'autogrow', 'cols', 'disabled', 'inoLabel', 'inoShowLabelHint', 'maxlength', 'minlength', 'name', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'value']
})
@Component({
  selector: 'ino-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocus', 'autogrow', 'cols', 'disabled', 'inoLabel', 'inoShowLabelHint', 'maxlength', 'minlength', 'name', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'value'],
  outputs: ['valueChange']
})
export class InoTextarea {
  /** Emits when the user types something in. Contains typed input in `event.detail` */
  valueChange!: ITextarea['valueChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface InoTooltip extends Components.InoTooltip {}
@ProxyCmp({
  inputs: ['inoColorScheme', 'inoFor', 'inoLabel', 'inoPlacement', 'inoTrigger'],
  methods: ['getTippyInstance']
})
@Component({
  selector: 'ino-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['inoColorScheme', 'inoFor', 'inoLabel', 'inoPlacement', 'inoTrigger']
})
export class InoTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
