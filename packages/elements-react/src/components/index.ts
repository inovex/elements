import { JSX as StencilJSX } from "@stencil/core";
// @ts-ignore
import { addIcons } from '@inovex/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';
import { defineCustomElements } from '@inovex/elements/dist/loader';

import { createReactComponent } from './createComponent';

defineCustomElements(window);
addIcons(ICON_PATHS);

//
// Export all the elements we have. This is THE react wrapper.
//

export const InoButton = createReactComponent<StencilJSX.IntrinsicElements["ino-button"], HTMLInoButtonElement>('ino-button');
export const InoCard = createReactComponent<StencilJSX.IntrinsicElements["ino-card"], HTMLInoCardElement>('ino-card');
export const InoCheckbox = createReactComponent<StencilJSX.IntrinsicElements["ino-checkbox"], HTMLInoCheckboxElement>('ino-checkbox');
export const InoChip = createReactComponent<StencilJSX.IntrinsicElements["ino-chip"], HTMLInoChipElement>('ino-chip');
export const InoChipSet = createReactComponent<StencilJSX.IntrinsicElements["ino-chip-set"], HTMLInoChipSetElement>('ino-chip-set');
export const InoControlItem = createReactComponent<StencilJSX.IntrinsicElements["ino-control-item"], HTMLInoControlItemElement>('ino-control-item');
export const InoDatepicker = createReactComponent<StencilJSX.IntrinsicElements["ino-datepicker"], HTMLInoDatepickerElement>('ino-datepicker');
export const InoFab = createReactComponent<StencilJSX.IntrinsicElements["ino-fab"], HTMLInoFabElement>('ino-fab');
export const InoFabSet = createReactComponent<StencilJSX.IntrinsicElements["ino-fab-set"], HTMLInoFabSetElement>('ino-fab-set');
export const InoFormRow = createReactComponent<StencilJSX.IntrinsicElements["ino-form-row"], HTMLInoFormRowElement>('ino-form-row');
export const InoHeader = createReactComponent<StencilJSX.IntrinsicElements["ino-header"], HTMLInoHeaderElement>('ino-header');
export const InoIcon = createReactComponent<StencilJSX.IntrinsicElements["ino-icon"], HTMLInoIconElement>('ino-icon');
export const InoIconButton = createReactComponent<StencilJSX.IntrinsicElements["ino-icon-button"], HTMLInoIconButtonElement>('ino-icon-button');
export const InoImg = createReactComponent<StencilJSX.IntrinsicElements["ino-img"], HTMLInoImgElement>('ino-img');
export const InoInput = createReactComponent<StencilJSX.IntrinsicElements["ino-input"], HTMLInoInputElement>('ino-input');
export const InoInputFile = createReactComponent<StencilJSX.IntrinsicElements["ino-input-file"], HTMLInoInputFileElement>('ino-input-file');
export const InoList = createReactComponent<StencilJSX.IntrinsicElements["ino-list"], HTMLInoListElement>('ino-list');
export const InoListDivider = createReactComponent<StencilJSX.IntrinsicElements["ino-list-divider"], HTMLInoListDividerElement>('ino-list-divider');
export const InoListItem = createReactComponent<StencilJSX.IntrinsicElements["ino-list-item"], HTMLInoListItemElement>('ino-list-item');
export const InoMenu = createReactComponent<StencilJSX.IntrinsicElements["ino-menu"], HTMLInoMenuElement>('ino-menu');
export const InoNavDrawer = createReactComponent<StencilJSX.IntrinsicElements["ino-nav-drawer"], HTMLInoNavDrawerElement>('ino-nav-drawer');
export const InoNavItem = createReactComponent<StencilJSX.IntrinsicElements["ino-nav-item"], HTMLInoNavItemElement>('ino-nav-item');
export const InoPopover = createReactComponent<StencilJSX.IntrinsicElements["ino-popover"], HTMLInoPopoverElement>('ino-popover');
export const InoOption = createReactComponent<StencilJSX.IntrinsicElements["ino-option"], HTMLInoOptionElement>('ino-option');
export const InoOptionGroup = createReactComponent<StencilJSX.IntrinsicElements["ino-option-group"], HTMLInoOptionGroupElement>('ino-option-group');
export const InoRadio = createReactComponent<StencilJSX.IntrinsicElements["ino-radio"], HTMLInoRadioElement>('ino-radio');
export const InoRadioGroup = createReactComponent<StencilJSX.IntrinsicElements["ino-radio-group"], HTMLInoRadioGroupElement>('ino-radio-group');
export const InoRange = createReactComponent<StencilJSX.IntrinsicElements["ino-range"], HTMLInoRangeElement>('ino-range');
export const InoSelect = createReactComponent<StencilJSX.IntrinsicElements["ino-select"], HTMLInoSelectElement>('ino-select');
export const InoSidebar = createReactComponent<StencilJSX.IntrinsicElements["ino-sidebar"], HTMLInoSelectElement>('ino-sidebar');
export const InoSnackbar = createReactComponent<StencilJSX.IntrinsicElements["ino-snackbar"], HTMLInoSnackbarElement>('ino-snackbar');
export const InoSpinner = createReactComponent<StencilJSX.IntrinsicElements["ino-spinner"], HTMLInoSpinnerElement>('ino-spinner');
export const InoSwitch = createReactComponent<StencilJSX.IntrinsicElements["ino-switch"], HTMLInoSwitchElement>('ino-switch');
export const InoTab = createReactComponent<StencilJSX.IntrinsicElements["ino-tab"], HTMLInoTabElement>('ino-tab');
export const InoTabBar = createReactComponent<StencilJSX.IntrinsicElements["ino-tab-bar"], HTMLInoTabBarElement>('ino-tab-bar');
export const InoTable = createReactComponent<StencilJSX.IntrinsicElements["ino-table"], HTMLInoTableElement>('ino-table');
export const InoTableCell = createReactComponent<StencilJSX.IntrinsicElements["ino-table-cell"], HTMLInoTableCellElement>('ino-table-cell');
export const InoTableRow = createReactComponent<StencilJSX.IntrinsicElements["ino-table-row"], HTMLInoTableRowElement>('ino-table-row');
export const InoTextarea = createReactComponent<StencilJSX.IntrinsicElements["ino-textarea"], HTMLInoTextareaElement>('ino-textarea');
export const InoTooltip = createReactComponent<StencilJSX.IntrinsicElements["ino-tooltip"], HTMLInoTooltipElement>('ino-tooltip');
