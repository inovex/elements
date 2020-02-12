// => is done in core/scripts/postbuild.sh
import { JSX } from '@inovex/elements';
// @ts-ignore
import { addIcons } from '@inovex/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';
import { defineCustomElements } from '@inovex/elements/dist/loader';  // must be replaced with '../loader' when copied

import { createReactComponent } from './createComponent';

defineCustomElements(window);
addIcons(ICON_PATHS);

//
// Export all the elements we have. This is THE react wrapper.
//

export const InoButton = createReactComponent<JSX.InoButton, HTMLInoButtonElement>('ino-button');
export const InoCard = createReactComponent<JSX.InoCard, HTMLInoCardElement>('ino-card');
export const InoCheckbox = createReactComponent<JSX.InoCheckbox, HTMLInoCheckboxElement>('ino-checkbox');
export const InoChip = createReactComponent<JSX.InoChip, HTMLInoChipElement>('ino-chip');
export const InoChipSet = createReactComponent<JSX.InoChipSet, HTMLInoChipSetElement>('ino-chip-set');
export const InoDatepicker = createReactComponent<JSX.InoDatepicker, HTMLInoDatepickerElement>('ino-datepicker');
export const InoFab = createReactComponent<JSX.InoFab, HTMLInoFabElement>('ino-fab');
export const InoFabSet = createReactComponent<JSX.InoFabSet, HTMLInoFabSetElement>('ino-fab-set');
export const InoFormRow = createReactComponent<JSX.InoFormRow, HTMLInoFormRowElement>('ino-form-row');
export const InoIcon = createReactComponent<JSX.InoIcon, HTMLInoIconElement>('ino-icon');
export const InoIconButton = createReactComponent<JSX.InoIconButton, HTMLInoIconButtonElement>('ino-icon-button');
export const InoImg = createReactComponent<JSX.InoImg, HTMLInoImgElement>('ino-img');
export const InoInput = createReactComponent<JSX.InoInput, HTMLInoInputElement>('ino-input');
export const InoInputFile = createReactComponent<JSX.InoInputFile, HTMLInoInputFileElement>('ino-input-file');
export const InoList = createReactComponent<JSX.InoList, HTMLInoListElement>('ino-list');
export const InoListDivider = createReactComponent<JSX.InoListDivider, HTMLInoListDividerElement>('ino-list-divider');
export const InoListItem = createReactComponent<JSX.InoListItem, HTMLInoListItemElement>('ino-list-item');
export const InoMenu = createReactComponent<JSX.InoMenu, HTMLInoMenuElement>('ino-menu');
export const InoPopover = createReactComponent<JSX.InoPopover, HTMLInoPopoverElement>('ino-popover');
export const InoRadio = createReactComponent<JSX.InoRadio, HTMLInoRadioElement>('ino-radio');
export const InoRadioGroup = createReactComponent<JSX.InoRadioGroup, HTMLInoRadioGroupElement>('ino-radio-group');
export const InoRange = createReactComponent<JSX.InoRange, HTMLInoRangeElement>('ino-range');
export const InoSelect = createReactComponent<JSX.InoSelect, HTMLInoSelectElement>('ino-select');
export const InoSnackbar = createReactComponent<JSX.InoSnackbar, HTMLInoSnackbarElement>('ino-snackbar');
export const InoSpinner = createReactComponent<JSX.InoSpinner, HTMLInoSpinnerElement>('ino-spinner');
export const InoSwitch = createReactComponent<JSX.InoSwitch, HTMLInoSwitchElement>('ino-switch');
export const InoTab = createReactComponent<JSX.InoTab, HTMLInoTabElement>('ino-tab');
export const InoTabBar = createReactComponent<JSX.InoTabBar, HTMLInoTabBarElement>('ino-tab-bar');
export const InoTextarea = createReactComponent<JSX.InoTextarea, HTMLInoTextareaElement>('ino-textarea');
export const InoTooltip = createReactComponent<JSX.InoTooltip, HTMLInoTooltipElement>('ino-tooltip');
