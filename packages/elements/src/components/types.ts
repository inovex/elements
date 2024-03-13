export type ButtonType = 'button' | 'submit' | 'reset';
export type ChipSurface = 'solid' | 'outline';
export type HorizontalLocation = 'left' | 'right';
export type ImageDecodingTypes = 'async' | 'auto' | 'sync';
export type Locations = HorizontalLocation | VerticalLocation;
export type NavDrawerAnchor = 'left' | 'right';
export type NavDrawerVariant = 'docked' | 'dismissible' | 'modal' | 'mobile';
export type SnackbarType = 'info' | 'success' | 'error' | 'warning';
export type SpinnerType = 'tile' | 'bounce' | 'circle';
export type TooltipTrigger =
  | 'mouseenter'
  | 'mouseenter focus'
  | 'mouseenter click'
  | 'mouseenter focus click'
  | 'mouseenter click focus'
  | 'focus'
  | 'focus mouseenter'
  | 'focus click'
  | 'focus mouseenter click'
  | 'focus click mouseenter'
  | 'click'
  | 'click mouseenter'
  | 'click focus'
  | 'click mouseenter focus'
  | 'click focus mouseenter';
export enum ViewMode {
  MARKDOWN = 'markdown',
  PREVIEW = 'preview',
  READONLY = 'readonly',
}
export type ViewModeUnion = `${ViewMode}`;
export type VerticalLocation = 'top' | 'bottom';
export type InputType =
  | 'color'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | 'week';
export type UserInputInterceptor = (value: string) => string;
/**
 * An arbitary string (or close by default) referencing the action of a dialog.
 */
export type DialogCloseAction = 'close' | string;
export type DialogSubmitAction = 'submit' | string;
export type Alignment = 'horizontal' | 'vertical';
export type KeyValue = {
  key: string;
  value: string;
};
export type NavDrawerLabels = {
  content: string;
  footer: string;
  toggleBtn: string;
};
export type TippyThemes = 'light' | 'dark' | 'primary';
export type ButtonVariants = 'filled' | 'outlined' | 'text';
export type SnackbarLabels = {
  snackbarLabel: string;
  closeLabel: string;
};
