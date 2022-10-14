export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonColorScheme = 'primary' | 'secondary' | 'grey' | 'white';
export type ChipSurface = 'solid' | 'outline';
export type ColorScheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark';
export type DatepickerType = 'date' | 'datetime' | 'range' | 'time';
export type HorizontalLocation = 'left' | 'right';
export type ImageDecodingTypes = 'async' | 'auto' | 'sync';
export type Locations = HorizontalLocation | VerticalLocation;
export type NavDrawerAnchor = 'left' | 'right';
export type NavDrawerVariant = 'docked' | 'dismissible' | 'modal';
export type SnackbarType = 'info' | 'success' | 'error';
export type SpinnerType = 'tile' | 'bounce' | 'circle';
export type SurfaceType = 'filled' | 'outlined' | 'text';
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
export type DialogCloseAction = 'close'|string;

export type Alignment = 'horizontal' | 'vertical';

export type KeyValue = {
    key: string;
    value: string;
};
