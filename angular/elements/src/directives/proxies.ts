/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { proxyInputs, proxyMethods, proxyOutputs } from './proxies-utils';

import { Components } from '@inovex/elements';

export declare interface InoButton extends Components.InoButton {}
@Component({ selector: 'ino-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autofocus', 'disabled', 'form', 'inoColorScheme', 'inoDense', 'inoFill', 'inoIcon', 'inoIconPrepend', 'name', 'type'] })
export class InoButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoButton, ['autofocus', 'disabled', 'form', 'inoColorScheme', 'inoDense', 'inoFill', 'inoIcon', 'inoIconPrepend', 'name', 'type']);

export declare interface InoCard extends Components.InoCard {}
@Component({ selector: 'ino-card', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoAspectRatio', 'inoColorScheme', 'inoImage', 'inoMediaTitle', 'inoOutline', 'inoSubtitle', 'inoTitle'] })
export class InoCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoCard, ['inoAspectRatio', 'inoColorScheme', 'inoImage', 'inoMediaTitle', 'inoOutline', 'inoSubtitle', 'inoTitle']);

export declare interface InoCheckbox extends Components.InoCheckbox {}
@Component({ selector: 'ino-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'indeterminate', 'name', 'value'] })
export class InoCheckbox {
  checkedChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}
proxyInputs(InoCheckbox, ['checked', 'disabled', 'indeterminate', 'name', 'value']);

export declare interface InoChip extends Components.InoChip {}
@Component({ selector: 'ino-chip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoColorScheme', 'inoFill', 'inoIcon', 'inoLabel', 'inoRemovable', 'inoSelectable', 'inoSelected', 'inoValue'] })
export class InoChip {
  removeChip!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['removeChip']);
  }
}
proxyInputs(InoChip, ['inoColorScheme', 'inoFill', 'inoIcon', 'inoLabel', 'inoRemovable', 'inoSelectable', 'inoSelected', 'inoValue']);

export declare interface InoChipSet extends Components.InoChipSet {}
@Component({ selector: 'ino-chip-set', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoType'] })
export class InoChipSet {
  updateChipSet!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['updateChipSet']);
  }
}
proxyInputs(InoChipSet, ['inoType']);

export declare interface InoControlItem extends Components.InoControlItem {}
@Component({ selector: 'ino-control-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'indeterminate', 'inoActivated', 'inoDisabled', 'inoId', 'inoRole', 'inoSecondaryText', 'inoSelected', 'inoText', 'inoTrailing', 'name', 'value'] })
export class InoControlItem {
  checkedChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}
proxyInputs(InoControlItem, ['checked', 'disabled', 'indeterminate', 'inoActivated', 'inoDisabled', 'inoId', 'inoRole', 'inoSecondaryText', 'inoSelected', 'inoText', 'inoTrailing', 'name', 'value']);

export declare interface InoDatepicker extends Components.InoDatepicker {}
@Component({ selector: 'ino-datepicker', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autofocus', 'disabled', 'hourStep', 'inoDateFormat', 'inoDefaultDate', 'inoDefaultHour', 'inoDefaultMinute', 'inoHelper', 'inoHelperPersistent', 'inoHelperValidation', 'inoLabel', 'inoOutline', 'inoPattern', 'inoRange', 'inoTwelfHourTime', 'max', 'min', 'minuteStep', 'name', 'required', 'value'] })
export class InoDatepicker {
  valueChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}
proxyInputs(InoDatepicker, ['autofocus', 'disabled', 'hourStep', 'inoDateFormat', 'inoDefaultDate', 'inoDefaultHour', 'inoDefaultMinute', 'inoHelper', 'inoHelperPersistent', 'inoHelperValidation', 'inoLabel', 'inoOutline', 'inoPattern', 'inoRange', 'inoTwelfHourTime', 'max', 'min', 'minuteStep', 'name', 'required', 'value']);

export declare interface InoFab extends Components.InoFab {}
@Component({ selector: 'ino-fab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoColorScheme', 'inoExtended', 'inoIcon', 'inoLabel', 'inoMini', 'inoTooltipPlacement'] })
export class InoFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoFab, ['inoColorScheme', 'inoExtended', 'inoIcon', 'inoLabel', 'inoMini', 'inoTooltipPlacement']);

export declare interface InoFabSet extends Components.InoFabSet {}
@Component({ selector: 'ino-fab-set', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoDialDirection', 'inoLeftRightLocation', 'inoTopBottomLocation'] })
export class InoFabSet {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoFabSet, ['inoDialDirection', 'inoLeftRightLocation', 'inoTopBottomLocation']);

export declare interface InoFormRow extends Components.InoFormRow {}
@Component({ selector: 'ino-form-row', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoLabel', 'inoMandatory'] })
export class InoFormRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoFormRow, ['inoLabel', 'inoMandatory']);

export declare interface InoIcon extends Components.InoIcon {}
@Component({ selector: 'ino-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoClickable', 'inoIcon', 'src'] })
export class InoIcon {
  clickEl!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}
proxyInputs(InoIcon, ['inoClickable', 'inoIcon', 'src']);

export declare interface InoIconButton extends Components.InoIconButton {}
@Component({ selector: 'ino-icon-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autofocus', 'disabled', 'inoColorScheme', 'inoIcon'] })
export class InoIconButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoIconButton, ['autofocus', 'disabled', 'inoColorScheme', 'inoIcon']);

export declare interface InoImg extends Components.InoImg {}
@Component({ selector: 'ino-img', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alt', 'decoding', 'height', 'inoRatioHeight', 'inoRatioWidth', 'inoRounded', 'sizes', 'src', 'srcset', 'usemap', 'width'] })
export class InoImg {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoImg, ['alt', 'decoding', 'height', 'inoRatioHeight', 'inoRatioWidth', 'inoRounded', 'sizes', 'src', 'srcset', 'usemap', 'width']);

export declare interface InoInput extends Components.InoInput {}
@Component({ selector: 'ino-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autocomplete', 'autofocus', 'disabled', 'inoDataList', 'inoHelper', 'inoHelperCharacterCounter', 'inoHelperPersistent', 'inoHelperValidation', 'inoIcon', 'inoIconClickable', 'inoIconTrailing', 'inoLabel', 'inoOutline', 'max', 'maxlength', 'min', 'name', 'pattern', 'placeholder', 'required', 'size', 'step', 'type', 'value'] })
export class InoInput {
  valueChange!: EventEmitter<CustomEvent>;
  inoBlur!: EventEmitter<CustomEvent>;
  inoFocus!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'inoBlur', 'inoFocus']);
  }
}
proxyInputs(InoInput, ['autocomplete', 'autofocus', 'disabled', 'inoDataList', 'inoHelper', 'inoHelperCharacterCounter', 'inoHelperPersistent', 'inoHelperValidation', 'inoIcon', 'inoIconClickable', 'inoIconTrailing', 'inoLabel', 'inoOutline', 'max', 'maxlength', 'min', 'name', 'pattern', 'placeholder', 'required', 'size', 'step', 'type', 'value']);

export declare interface InoInputFile extends Components.InoInputFile {}
@Component({ selector: 'ino-input-file', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['accept', 'autofocus', 'disabled', 'inoLabel', 'multiple', 'name', 'required'] })
export class InoInputFile {
  changeFile!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['changeFile']);
  }
}
proxyInputs(InoInputFile, ['accept', 'autofocus', 'disabled', 'inoLabel', 'multiple', 'name', 'required']);

export declare interface InoLabel extends Components.InoLabel {}
@Component({ selector: 'ino-label', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoDisabled', 'inoOutline', 'inoRequired', 'inoText'] })
export class InoLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoLabel, ['inoDisabled', 'inoOutline', 'inoRequired', 'inoText']);

export declare interface InoList extends Components.InoList {}
@Component({ selector: 'ino-list', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoAvatar', 'inoDense', 'inoTwoLines'] })
export class InoList {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoList, ['inoAvatar', 'inoDense', 'inoTwoLines']);

export declare interface InoListDivider extends Components.InoListDivider {}
@Component({ selector: 'ino-list-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoBetweenLists', 'inoInset', 'inoPadded'] })
export class InoListDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoListDivider, ['inoBetweenLists', 'inoInset', 'inoPadded']);

export declare interface InoListItem extends Components.InoListItem {}
@Component({ selector: 'ino-list-item', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoActivated', 'inoDisabled', 'inoSecondaryText', 'inoSelected', 'inoText'] })
export class InoListItem {
  clickEl!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['clickEl']);
  }
}
proxyInputs(InoListItem, ['inoActivated', 'inoDisabled', 'inoSecondaryText', 'inoSelected', 'inoText']);

export declare interface InoMenu extends Components.InoMenu {}
@Component({ selector: 'ino-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoFor', 'inoOpen'] })
export class InoMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoMenu, ['inoFor', 'inoOpen']);

export declare interface InoPopover extends Components.InoPopover {}
@Component({ selector: 'ino-popover', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoFor', 'inoPlacement', 'inoTrigger'] })
export class InoPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoPopover, ['inoFor', 'inoPlacement', 'inoTrigger']);

export declare interface InoRadio extends Components.InoRadio {}
@Component({ selector: 'ino-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'disabled', 'name', 'value'] })
export class InoRadio {
  checkedChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['checkedChange']);
  }
}
proxyInputs(InoRadio, ['checked', 'disabled', 'name', 'value']);

export declare interface InoRange extends Components.InoRange {}
@Component({ selector: 'ino-range', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['disabled', 'inoColorScheme', 'inoDiscrete', 'inoMarkers', 'max', 'min', 'name', 'step', 'value'] })
export class InoRange {
  valueChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}
proxyInputs(InoRange, ['disabled', 'inoColorScheme', 'inoDiscrete', 'inoMarkers', 'max', 'min', 'name', 'step', 'value']);

export declare interface InoSelect extends Components.InoSelect {}
@Component({ selector: 'ino-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autofocus', 'disabled', 'form', 'inoDisableDefault', 'inoLabel', 'inoOutline', 'inoPrependDefault', 'name', 'required', 'value'] })
export class InoSelect {
  valueChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}
proxyInputs(InoSelect, ['autofocus', 'disabled', 'form', 'inoDisableDefault', 'inoLabel', 'inoOutline', 'inoPrependDefault', 'name', 'required', 'value']);

export declare interface InoSnackbar extends Components.InoSnackbar {}
@Component({ selector: 'ino-snackbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoActionOnBottom', 'inoActionText', 'inoAlignStart', 'inoMessage'] })
export class InoSnackbar {
  inoActionClick!: EventEmitter<CustomEvent>;
  hideEl!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['inoActionClick', 'hideEl']);
  }
}
proxyInputs(InoSnackbar, ['inoActionOnBottom', 'inoActionText', 'inoAlignStart', 'inoMessage']);

export declare interface InoSpinner extends Components.InoSpinner {}
@Component({ selector: 'ino-spinner', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoColorScheme', 'inoHeight', 'inoModal', 'inoType', 'inoWidth'] })
export class InoSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoSpinner, ['inoColorScheme', 'inoHeight', 'inoModal', 'inoType', 'inoWidth']);

export declare interface InoTab extends Components.InoTab {}
@Component({ selector: 'ino-tab', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoIcon', 'inoIndicatorContentWidth', 'inoLabel', 'inoStacked'] })
export class InoTab {
  loadEl!: EventEmitter<CustomEvent>;
  unloadEl!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['loadEl', 'unloadEl']);
  }
}
proxyInputs(InoTab, ['inoIcon', 'inoIndicatorContentWidth', 'inoLabel', 'inoStacked']);

export declare interface InoTabBar extends Components.InoTabBar {}
@Component({ selector: 'ino-tab-bar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoActiveTab'] })
export class InoTabBar {
  activeTabChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['activeTabChange']);
  }
}
proxyInputs(InoTabBar, ['inoActiveTab']);

export declare interface InoTextarea extends Components.InoTextarea {}
@Component({ selector: 'ino-textarea', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['autofocus', 'autogrow', 'cols', 'disabled', 'inoLabel', 'maxlength', 'minlength', 'name', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'value'] })
export class InoTextarea {
  valueChange!: EventEmitter<CustomEvent>;
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}
proxyInputs(InoTextarea, ['autofocus', 'autogrow', 'cols', 'disabled', 'inoLabel', 'maxlength', 'minlength', 'name', 'placeholder', 'required', 'rows', 'showCharacterCounter', 'value']);

export declare interface InoTooltip extends Components.InoTooltip {}
@Component({ selector: 'ino-tooltip', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['inoFor', 'inoLabel', 'inoPlacement', 'inoTrigger'] })
export class InoTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
proxyInputs(InoTooltip, ['inoFor', 'inoLabel', 'inoPlacement', 'inoTrigger']);
