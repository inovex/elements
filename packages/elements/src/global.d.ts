/**
 * These declarations are necessary to prevent duplicate import in our generated components.d.ts file.
 * Taken from: https://github.com/ionic-team/stencil/issues/2936
 */
import {
  HTMLStencilElement as _HTMLStencilElement,
  JSXBase,
} from '@stencil/core/internal';

export as namespace JSXBase;
export = JSXBase;

declare global {
  interface HTMLStencilElement extends _HTMLStencilElement {}
}
