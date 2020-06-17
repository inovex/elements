/* eslint-disable */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from "@angular/core";
import { ProxyCmp, proxyOutputs } from "./proxies-utils";
import { Components } from "@inovex/elements";
export declare interface InoButton extends Components.InoButton {
}
@ProxyCmp({ inputs: ["autoFocus", "disabled", "form", "inoColorScheme", "inoDense", "inoEdgeMirrored", "inoFill", "inoFullWidth", "inoIcon", "inoIconPrepend", "inoLoading", "name", "type"] })
@Component({ selector: "ino-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoFocus", "disabled", "form", "inoColorScheme", "inoDense", "inoEdgeMirrored", "inoFill", "inoFullWidth", "inoIcon", "inoIconPrepend", "inoLoading", "name", "type"] })
export class InoButton {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoCard extends Components.InoCard {
}
@ProxyCmp({ inputs: ["inoSelected"] })
@Component({ selector: "ino-card", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoSelected"] })
export class InoCard {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoCheckbox extends Components.InoCheckbox {
}
@ProxyCmp({ inputs: ["checked", "disabled", "indeterminate", "inoSelection", "name", "value"] })
@Component({ selector: "ino-checkbox", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "disabled", "indeterminate", "inoSelection", "name", "value"] })
export class InoCheckbox {
    checkedChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["checkedChange"]);
    }
}
export declare interface InoChip extends Components.InoChip {
}
@ProxyCmp({ inputs: ["inoColorScheme", "inoFill", "inoIcon", "inoLabel", "inoRemovable", "inoSelectable", "inoSelected", "inoValue"] })
@Component({ selector: "ino-chip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoColorScheme", "inoFill", "inoIcon", "inoLabel", "inoRemovable", "inoSelectable", "inoSelected", "inoValue"] })
export class InoChip {
    removeChip!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["removeChip"]);
    }
}
export declare interface InoChipSet extends Components.InoChipSet {
}
@ProxyCmp({ inputs: ["inoType"] })
@Component({ selector: "ino-chip-set", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoType"] })
export class InoChipSet {
    updateChipSet!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["updateChipSet"]);
    }
}
export declare interface InoControlItem extends Components.InoControlItem {
}
@ProxyCmp({ inputs: ["checked", "disabled", "indeterminate", "inoActivated", "inoDisabled", "inoId", "inoRole", "inoSecondaryText", "inoSelected", "inoText", "inoTrailing", "name", "value"] })
@Component({ selector: "ino-control-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "disabled", "indeterminate", "inoActivated", "inoDisabled", "inoId", "inoRole", "inoSecondaryText", "inoSelected", "inoText", "inoTrailing", "name", "value"] })
export class InoControlItem {
    checkedChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["checkedChange"]);
    }
}
export declare interface InoDatepicker extends Components.InoDatepicker {
}
@ProxyCmp({ inputs: ["autoFocus", "disabled", "hourStep", "inoDateFormat", "inoDefaultDate", "inoDefaultHour", "inoDefaultMinute", "inoHelper", "inoHelperPersistent", "inoHelperValidation", "inoLabel", "inoOutline", "inoPattern", "inoRange", "inoShowLabelHint", "inoTwelveHourTime", "inoType", "max", "min", "minuteStep", "name", "required", "value"] })
@Component({ selector: "ino-datepicker", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoFocus", "disabled", "hourStep", "inoDateFormat", "inoDefaultDate", "inoDefaultHour", "inoDefaultMinute", "inoHelper", "inoHelperPersistent", "inoHelperValidation", "inoLabel", "inoOutline", "inoPattern", "inoRange", "inoShowLabelHint", "inoTwelveHourTime", "inoType", "max", "min", "minuteStep", "name", "required", "value"] })
export class InoDatepicker {
    valueChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChange"]);
    }
}
export declare interface InoFab extends Components.InoFab {
}
@ProxyCmp({ inputs: ["inoColorScheme", "inoDisabled", "inoEdgePosition", "inoExtended", "inoIcon", "inoLabel", "inoMini", "inoTooltipPlacement"] })
@Component({ selector: "ino-fab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoColorScheme", "inoDisabled", "inoEdgePosition", "inoExtended", "inoIcon", "inoLabel", "inoMini", "inoTooltipPlacement"] })
export class InoFab {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoFabSet extends Components.InoFabSet {
}
@ProxyCmp({ inputs: ["inoDialDirection", "inoLeftRightLocation", "inoOpenDial", "inoTopBottomLocation"] })
@Component({ selector: "ino-fab-set", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoDialDirection", "inoLeftRightLocation", "inoOpenDial", "inoTopBottomLocation"] })
export class InoFabSet {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoFormRow extends Components.InoFormRow {
}
@ProxyCmp({ inputs: ["inoLabel", "inoMandatory"] })
@Component({ selector: "ino-form-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoLabel", "inoMandatory"] })
export class InoFormRow {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoHeader extends Components.InoHeader {
}
@ProxyCmp({ inputs: ["inoTitle"] })
@Component({ selector: "ino-header", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoTitle"] })
export class InoHeader {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoIcon extends Components.InoIcon {
}
@ProxyCmp({ inputs: ["inoClickable", "inoColorSecondary", "inoIcon", "src", "svgTitle"] })
@Component({ selector: "ino-icon", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoClickable", "inoColorSecondary", "inoIcon", "src", "svgTitle"] })
export class InoIcon {
    clickEl!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["clickEl"]);
    }
}
export declare interface InoIconButton extends Components.InoIconButton {
}
@ProxyCmp({ inputs: ["autoFocus", "disabled", "inoColorScheme", "inoIcon"] })
@Component({ selector: "ino-icon-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoFocus", "disabled", "inoColorScheme", "inoIcon"] })
export class InoIconButton {
    clickEl!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["clickEl"]);
    }
}
export declare interface InoImg extends Components.InoImg {
}
@ProxyCmp({ inputs: ["alt", "decoding", "height", "inoRatioHeight", "inoRatioWidth", "inoRounded", "sizes", "src", "srcset", "usemap", "width"] })
@Component({ selector: "ino-img", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["alt", "decoding", "height", "inoRatioHeight", "inoRatioWidth", "inoRounded", "sizes", "src", "srcset", "usemap", "width"] })
export class InoImg {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoInput extends Components.InoInput {
}
@ProxyCmp({ inputs: ["autoFocus", "autocomplete", "disabled", "inoDataList", "inoDecimalPlaces", "inoError", "inoHelper", "inoHelperCharacterCounter", "inoHelperPersistent", "inoHelperValidation", "inoIconLeading", "inoIconTrailing", "inoLabel", "inoOutline", "inoShowLabelHint", "inoThousandsSeparator", "inoUnit", "max", "maxlength", "min", "name", "pattern", "placeholder", "required", "size", "step", "type", "value"], "methods": ["getInputElement"] })
@Component({ selector: "ino-input", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoFocus", "autocomplete", "disabled", "inoDataList", "inoDecimalPlaces", "inoError", "inoHelper", "inoHelperCharacterCounter", "inoHelperPersistent", "inoHelperValidation", "inoIconLeading", "inoIconTrailing", "inoLabel", "inoOutline", "inoShowLabelHint", "inoThousandsSeparator", "inoUnit", "max", "maxlength", "min", "name", "pattern", "placeholder", "required", "size", "step", "type", "value"] })
export class InoInput {
    valueChange!: EventEmitter<CustomEvent>;
    inoBlur!: EventEmitter<CustomEvent>;
    inoFocus!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChange", "inoBlur", "inoFocus"]);
    }
}
export declare interface InoInputFile extends Components.InoInputFile {
}
@ProxyCmp({ inputs: ["accept", "autoFocus", "disabled", "inoLabel", "multiple", "name", "required"] })
@Component({ selector: "ino-input-file", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["accept", "autoFocus", "disabled", "inoLabel", "multiple", "name", "required"] })
export class InoInputFile {
    changeFile!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["changeFile"]);
    }
}
export declare interface InoLabel extends Components.InoLabel {
}
@ProxyCmp({ inputs: ["inoDisabled", "inoOutline", "inoRequired", "inoShowHint", "inoText"] })
@Component({ selector: "ino-label", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoDisabled", "inoOutline", "inoRequired", "inoShowHint", "inoText"] })
export class InoLabel {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoList extends Components.InoList {
}
@ProxyCmp({ inputs: ["inoAvatar", "inoDense", "inoTwoLines"] })
@Component({ selector: "ino-list", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoAvatar", "inoDense", "inoTwoLines"] })
export class InoList {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoListDivider extends Components.InoListDivider {
}
@ProxyCmp({ inputs: ["inoBetweenLists", "inoInset", "inoPadded"] })
@Component({ selector: "ino-list-divider", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoBetweenLists", "inoInset", "inoPadded"] })
export class InoListDivider {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoListItem extends Components.InoListItem {
}
@ProxyCmp({ inputs: ["inoActivated", "inoDisabled", "inoSecondaryText", "inoSelected", "inoText"] })
@Component({ selector: "ino-list-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoActivated", "inoDisabled", "inoSecondaryText", "inoSelected", "inoText"] })
export class InoListItem {
    clickEl!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["clickEl"]);
    }
}
export declare interface InoMenu extends Components.InoMenu {
}
@ProxyCmp({ inputs: ["inoFor", "inoOpen"] })
@Component({ selector: "ino-menu", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoFor", "inoOpen"] })
export class InoMenu {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoNavDrawer extends Components.InoNavDrawer {
}
@ProxyCmp({ inputs: ["inoAnchor", "inoOpen", "inoVariant"] })
@Component({ selector: "ino-nav-drawer", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoAnchor", "inoOpen", "inoVariant"] })
export class InoNavDrawer {
    openChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["openChange"]);
    }
}
export declare interface InoNavItem extends Components.InoNavItem {
}
@ProxyCmp({ inputs: ["inoActivated", "inoDisabled", "inoText"] })
@Component({ selector: "ino-nav-item", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoActivated", "inoDisabled", "inoText"] })
export class InoNavItem {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoOption extends Components.InoOption {
}
@ProxyCmp({ inputs: ["disabled", "selected", "value"] })
@Component({ selector: "ino-option", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "selected", "value"] })
export class InoOption {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoOptionGroup extends Components.InoOptionGroup {
}
@ProxyCmp({ inputs: ["inoLabel"] })
@Component({ selector: "ino-option-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoLabel"] })
export class InoOptionGroup {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoPopover extends Components.InoPopover {
}
@ProxyCmp({ inputs: ["inoColorScheme", "inoFor", "inoPlacement", "inoTrigger"] })
@Component({ selector: "ino-popover", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoColorScheme", "inoFor", "inoPlacement", "inoTrigger"] })
export class InoPopover {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoProgressBar extends Components.InoProgressBar {
}
@ProxyCmp({ inputs: ["inoBuffer", "inoIndeterminate", "inoLabel", "inoProgress", "inoReversed"] })
@Component({ selector: "ino-progress-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoBuffer", "inoIndeterminate", "inoLabel", "inoProgress", "inoReversed"] })
export class InoProgressBar {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoRadio extends Components.InoRadio {
}
@ProxyCmp({ inputs: ["checked", "disabled", "name", "value"] })
@Component({ selector: "ino-radio", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "disabled", "name", "value"] })
export class InoRadio {
    checkedChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["checkedChange"]);
    }
}
export declare interface InoRadioGroup extends Components.InoRadioGroup {
}
@ProxyCmp({ inputs: ["value"] })
@Component({ selector: "ino-radio-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["value"] })
export class InoRadioGroup {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoRange extends Components.InoRange {
}
@ProxyCmp({ inputs: ["disabled", "inoColorScheme", "inoDiscrete", "inoMarkers", "max", "min", "name", "step", "value"] })
@Component({ selector: "ino-range", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "inoColorScheme", "inoDiscrete", "inoMarkers", "max", "min", "name", "step", "value"] })
export class InoRange {
    valueChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChange"]);
    }
}
export declare interface InoSegmentButton extends Components.InoSegmentButton {
}
@ProxyCmp({ inputs: ["checked", "disabled", "inoDense", "name", "value"] })
@Component({ selector: "ino-segment-button", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "disabled", "inoDense", "name", "value"] })
export class InoSegmentButton {
    checkedChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["checkedChange"]);
    }
}
export declare interface InoSegmentGroup extends Components.InoSegmentGroup {
}
@ProxyCmp({ inputs: ["name", "value"] })
@Component({ selector: "ino-segment-group", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["name", "value"] })
export class InoSegmentGroup {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoSelect extends Components.InoSelect {
}
@ProxyCmp({ inputs: ["disabled", "inoLabel", "inoOutline", "inoShowLabelHint", "name", "required", "value"] })
@Component({ selector: "ino-select", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["disabled", "inoLabel", "inoOutline", "inoShowLabelHint", "name", "required", "value"] })
export class InoSelect {
    valueChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChange"]);
    }
}
export declare interface InoSidebar extends Components.InoSidebar {
}
@ProxyCmp({ inputs: ["inoAlignRight", "inoOpen", "name"] })
@Component({ selector: "ino-sidebar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoAlignRight", "inoOpen", "name"] })
export class InoSidebar {
    openChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["openChange"]);
    }
}
export declare interface InoSnackbar extends Components.InoSnackbar {
}
@ProxyCmp({ inputs: ["inoActionText", "inoAlignment", "inoMessage"] })
@Component({ selector: "ino-snackbar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoActionText", "inoAlignment", "inoMessage"] })
export class InoSnackbar {
    inoActionClick!: EventEmitter<CustomEvent>;
    hideEl!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["inoActionClick", "hideEl"]);
    }
}
export declare interface InoSpinner extends Components.InoSpinner {
}
@ProxyCmp({ inputs: ["inoColorScheme", "inoHeight", "inoModal", "inoType", "inoWidth"] })
@Component({ selector: "ino-spinner", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoColorScheme", "inoHeight", "inoModal", "inoType", "inoWidth"] })
export class InoSpinner {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoSwitch extends Components.InoSwitch {
}
@ProxyCmp({ inputs: ["checked", "disabled", "inoColorScheme", "name"] })
@Component({ selector: "ino-switch", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["checked", "disabled", "inoColorScheme", "name"] })
export class InoSwitch {
    checkedChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["checkedChange"]);
    }
}
export declare interface InoTab extends Components.InoTab {
}
@ProxyCmp({ inputs: ["inoIcon", "inoIndicatorContentWidth", "inoLabel", "inoStacked"] })
@Component({ selector: "ino-tab", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoIcon", "inoIndicatorContentWidth", "inoLabel", "inoStacked"] })
export class InoTab {
    inoInteracted!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["inoInteracted"]);
    }
}
export declare interface InoTabBar extends Components.InoTabBar {
}
@ProxyCmp({ inputs: ["inoActiveTab"] })
@Component({ selector: "ino-tab-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoActiveTab"] })
export class InoTabBar {
    activeTabChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["activeTabChange"]);
    }
}
export declare interface InoTable extends Components.InoTable {
}
@Component({ selector: "ino-table", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" })
export class InoTable {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoTableCell extends Components.InoTableCell {
}
@ProxyCmp({ inputs: ["inoNumeric"] })
@Component({ selector: "ino-table-cell", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoNumeric"] })
export class InoTableCell {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoTableRow extends Components.InoTableRow {
}
@ProxyCmp({ inputs: ["inoHeaderRow", "inoSelected"] })
@Component({ selector: "ino-table-row", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoHeaderRow", "inoSelected"] })
export class InoTableRow {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
export declare interface InoTextarea extends Components.InoTextarea {
}
@ProxyCmp({ inputs: ["autoFocus", "autogrow", "cols", "disabled", "inoLabel", "inoShowLabelHint", "maxlength", "minlength", "name", "placeholder", "required", "rows", "showCharacterCounter", "value"] })
@Component({ selector: "ino-textarea", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["autoFocus", "autogrow", "cols", "disabled", "inoLabel", "inoShowLabelHint", "maxlength", "minlength", "name", "placeholder", "required", "rows", "showCharacterCounter", "value"] })
export class InoTextarea {
    valueChange!: EventEmitter<CustomEvent>;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ["valueChange"]);
    }
}
export declare interface InoTooltip extends Components.InoTooltip {
}
@ProxyCmp({ inputs: ["inoColorScheme", "inoFor", "inoLabel", "inoPlacement", "inoTrigger"] })
@Component({ selector: "ino-tooltip", changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", inputs: ["inoColorScheme", "inoFor", "inoLabel", "inoPlacement", "inoTrigger"] })
export class InoTooltip {
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
        c.detach();
        this.el = r.nativeElement;
    }
}
