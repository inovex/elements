"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[6823],{3662:function(t,o,e){e.d(o,{a:function(){return r},c:function(){return d},g:function(){return n}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:"undefined"!==typeof self?self:{};function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t["default"]:t}function d(t,o,e){return e={path:o,exports:{},require:function(t,o){return a()}},t(e,e.exports),e.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},7537:function(t,o,e){
/*!
 * Crafted with ❤ by inovex GmbH
 */
function r(){return"_"+Math.random().toString(36).substr(2,9)}function n(t,o){return t.querySelector(`[slot="${o}"]`)}function d(t,o){var e;return o?t.querySelectorAll(`[slot="${o}"]`).length>0:0===(null===(e=t.querySelector("slot"))||void 0===e?void 0:e.assignedElements().length)}function a(t){var o;null===(o=t.querySelector("[data-ino-focus]"))||void 0===o||o.focus()}function i(t){const o=t.value.length;t.setSelectionRange&&(t.focus(),t.setSelectionRange(o,o))}function c(t){t.stopPropagation(),t.preventDefault()}e.d(o,{a:function(){return r},f:function(){return a},g:function(){return n},h:function(){return d},m:function(){return i},p:function(){return c}})},2183:function(t,o,e){e.d(o,{c:function(){return n}});var r=e(3662),n=(0,r.c)((function(t){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var o={}.hasOwnProperty;function e(){for(var t=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var d=typeof n;if("string"===d||"number"===d)t.push(n);else if(Array.isArray(n)&&n.length){var a=e.apply(null,n);a&&t.push(a)}else if("object"===d)for(var i in n)o.call(n,i)&&n[i]&&t.push(i)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e})()}));
/*!
 * Crafted with ❤ by inovex GmbH
 */},6823:function(t,o,e){e.r(o),e.d(o,{ino_segment_button:function(){return i}});var r=e(1817),n=e(2183),d=e(7537);e(3662);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const a='.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:transparent}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0;}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px;}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none)}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:transparent}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-button .mdc-button__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple{position:absolute;box-sizing:content-box;width:100%;height:100%;overflow:hidden;z-index:0}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-text-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif))));font-size:0.875rem;font-size:var(--mdc-text-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-text-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-text-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-text-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button:not(:disabled){color:#3d40f5;color:var(--mdc-text-button-label-text-color, var(--mdc-theme-primary, #3d40f5))}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-text-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-text-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-text-button-with-icon-icon-size, 1.125rem)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#3d40f5;background-color:var(--mdc-text-button-hover-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-button:hover .mdc-button__ripple::before,.mdc-button.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.04;opacity:var(--mdc-text-button-hover-state-layer-opacity, 0.04)}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-text-button-focus-state-layer-opacity, 0.12)}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-text-button-pressed-state-layer-opacity, 0.12)}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-text-button-pressed-state-layer-opacity, 0.12)}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-filled-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif))));font-size:0.875rem;font-size:var(--mdc-filled-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-filled-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-filled-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-filled-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--unelevated:not(:disabled){background-color:#3d40f5;background-color:var(--mdc-filled-button-container-color, var(--mdc-theme-primary, #3d40f5))}.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-filled-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button--unelevated .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-filled-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-filled-button-with-icon-icon-size, 1.125rem)}.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-filled-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--unelevated:hover .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-filled-button-hover-state-layer-opacity, 0.08)}.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-filled-button-focus-state-layer-opacity, 0.24)}.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-filled-button-pressed-state-layer-opacity, 0.24)}.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-filled-button-pressed-state-layer-opacity, 0.24)}.mdc-button--unelevated .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-protected-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif))));font-size:0.875rem;font-size:var(--mdc-protected-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-protected-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-protected-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-protected-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled){background-color:#3d40f5;background-color:var(--mdc-protected-button-container-color, var(--mdc-theme-primary, #3d40f5))}.mdc-button--raised:disabled{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mdc-button--raised:not(:disabled){color:#fff;color:var(--mdc-protected-button-label-text-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button--raised .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-protected-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-protected-button-with-icon-icon-size, 1.125rem)}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-protected-button-hover-state-layer-color, var(--mdc-theme-on-primary, #fff))}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--raised.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.08;opacity:var(--mdc-protected-button-hover-state-layer-opacity, 0.08)}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-protected-button-focus-state-layer-opacity, 0.24)}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-protected-button-pressed-state-layer-opacity, 0.24)}.mdc-button--raised.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-protected-button-pressed-state-layer-opacity, 0.24)}.mdc-button--raised .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--raised.mdc-ripple-upgraded--background-focused,.mdc-button--raised:not(.mdc-ripple-upgraded):focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-focus-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:hover{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-hover-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:not(:disabled):active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-pressed-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-protected-button-disabled-container-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-button--outlined{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-outlined-button-label-text-font, var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif))));font-size:0.875rem;font-size:var(--mdc-outlined-button-label-text-size, var(--mdc-typography-button-font-size, 0.875rem));letter-spacing:0.0892857143em;letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mdc-typography-button-letter-spacing, 0.0892857143em));font-weight:500;font-weight:var(--mdc-outlined-button-label-text-weight, var(--mdc-typography-button-font-weight, 500));text-transform:uppercase;text-transform:var(--mdc-outlined-button-label-text-transform, var(--mdc-typography-button-text-transform, uppercase));height:36px;height:var(--mdc-outlined-button-container-height, 36px);border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px 0 15px;border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined:not(:disabled){color:#3d40f5;color:var(--mdc-outlined-button-label-text-color, var(--mdc-theme-primary, #3d40f5))}.mdc-button--outlined:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mdc-button--outlined .mdc-button__icon{font-size:1.125rem;font-size:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);width:1.125rem;width:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem);height:1.125rem;height:var(--mdc-outlined-button-with-icon-icon-size, 1.125rem)}.mdc-button--outlined .mdc-button__ripple::before,.mdc-button--outlined .mdc-button__ripple::after{background-color:#3d40f5;background-color:var(--mdc-outlined-button-hover-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-button--outlined:hover .mdc-button__ripple::before,.mdc-button--outlined.mdc-ripple-surface--hover .mdc-button__ripple::before{opacity:0.04;opacity:var(--mdc-outlined-button-hover-state-layer-opacity, 0.04)}.mdc-button--outlined.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--outlined:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-outlined-button-focus-state-layer-opacity, 0.12)}.mdc-button--outlined:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{transition:opacity 150ms linear}.mdc-button--outlined:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12)}.mdc-button--outlined.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-outlined-button-pressed-state-layer-opacity, 0.12)}.mdc-button--outlined .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}.mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}.mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));border-width:1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2 * 1px);width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px;}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px;}:host{--segment-button-color:var(\n    --ino-segment-button-color,\n    #c1c1c1\n  );--segment-button-checked-color:var(\n    --ino-segment-button-checked-color,\n    #0d10f3\n  );--segment-button-hover-color:var(\n    --ino-segment-button-hover-color,\n    #5d60f7\n  );--segment-button-disabled-color:var(\n    --ino-segment-button-disabled-color,\n    #777777\n  );--segment-button-hover-shadow:var(\n    --ino-segment-button-hover-shadow,\n    0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)\n  );--segment-button-checked-shadow:var(\n    --ino-segment-button-checked-shadow,\n    0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14)\n  )}:host{float:left}:host .mdc-button{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:0.875rem;letter-spacing:1.5px;text-align:center;border-radius:0;margin:0}:host .mdc-button .mdc-button__ripple{border-radius:0}:host .mdc-button:not(:disabled){background-color:#fff}:host .mdc-button:after,:host .mdc-button:before{background-color:#fff}:host .mdc-button--outlined{padding:0 15px 0 15px;border-width:1px}:host .mdc-button--outlined.mdc-button--icon-trailing{padding:0 11px 0 15px}:host .mdc-button--outlined.mdc-button--icon-leading{padding:0 15px 0 11px}:host .mdc-button--outlined .mdc-button__ripple{top:calc(-1 * 1px);left:calc(-1 * 1px);border-width:1px}:host .mdc-button--outlined .mdc-button__touch{left:calc(-1 * 1px);width:calc(100% + 2 * 1px)}:host .mdc-button--outlined:not(:disabled){border-color:var(--segment-button-color)}:host .mdc-button--outlined:not(:disabled){color:var(--segment-button-color)}:host .mdc-button--outlined:disabled:not(:disabled){border-color:var(--segment-button-disabled-color)}:host .mdc-button--outlined:disabled:not(:disabled){color:var(--segment-button-disabled-color)}:host .mdc-button--outlined:hover{box-shadow:var(--segment-button-hover-shadow)}:host .mdc-button--outlined:hover:not(:disabled){border-color:var(--segment-button-hover-color)}:host .mdc-button--outlined:hover:not(:disabled){color:var(--segment-button-hover-color)}:host .ino-segment-button--active,:host .ino-segment-button--active:hover{box-shadow:var(--segment-button-checked-shadow)}:host .ino-segment-button--active:not(:disabled),:host .ino-segment-button--active:hover:not(:disabled){border-color:var(--segment-button-checked-color)}:host .ino-segment-button--active:not(:disabled),:host .ino-segment-button--active:hover:not(:disabled){color:var(--segment-button-checked-color)}:host .ino-segment-button--dense{height:32px;margin-top:0;margin-bottom:0}:host .ino-segment-button--dense .mdc-button__touch{height:100%}:host(:not(:last-child)) button.belongs-to-group{border-right:none}:host(:first-child) button.belongs-to-group{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}:host(:first-child) button.belongs-to-group .mdc-button__ripple{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}:host(:last-child) button.belongs-to-group{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:0}:host(:last-child) button.belongs-to-group .mdc-button__ripple{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:0}:host(:only-of-type) button.belongs-to-group{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:24px}:host(:only-of-type) button.belongs-to-group .mdc-button__ripple{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:24px}:host(:hover:not(.ino-segment-button--disabled)) button.belongs-to-group,:host(:active):not(.ino-segment-button--disabled) button.belongs-to-group,:host(.ino-segment-button--checked:not(.ino-segment-button--disabled)) button.belongs-to-group{border-right:1px solid}',i=class{constructor(t){(0,r.r)(this,t),this.checkedChange=(0,r.c)(this,"checkedChange",7),this.buttonId=`ino-segment-button-id_${(0,d.a)()}`,this.belongsToGroup=!1,this.checked=!1,this.disabled=!1,this.dense=!1,this.disableBorder=()=>{const t=this.successor.shadowRoot.querySelector("button");t.style.borderLeft="none"},this.enableBorder=()=>{if(!this.checked){const t=this.successor.shadowRoot.querySelector("button");t.style.borderLeft="1px solid"}},this.handleClick=t=>{this.checked||this.disabled?(t.preventDefault(),t.stopPropagation()):this.checkedChange.emit(!0)}}checkedChanged(t){this.belongsToGroup&&this.successor&&!t&&this.enableBorder()}componentWillRender(){this.belongsToGroup="INO-SEGMENT-GROUP"===this.el.parentElement.tagName,this.successor=this.el.nextElementSibling,this.belongsToGroup&&this.successor&&!this.disabled&&"INO-SEGMENT-BUTTON"===this.successor.tagName&&(this.el.addEventListener("mouseover",this.disableBorder),this.el.addEventListener("mouseleave",this.enableBorder),this.checked&&this.disableBorder())}render(){const t=(0,n.c)({"ino-segment-button--checked":this.checked,"ino-segment-button--disabled":this.disabled}),o=(0,n.c)({"mdc-button":!0,"mdc-button--outlined":!0,"ino-segment-button--dense":this.dense,"ino-segment-button--active":this.checked,"belongs-to-group":this.belongsToGroup});return(0,r.h)(r.H,{checked:this.checked,onClick:this.handleClick,class:t},(0,r.h)("button",{class:o,disabled:this.disabled,id:this.buttonId,name:this.name},(0,r.h)("div",{class:"mdc-button__label"},(0,r.h)("slot",null))))}get el(){return(0,r.g)(this)}static get watchers(){return{checked:["checkedChanged"]}}};i.style=a}}]);
//# sourceMappingURL=6823.3a82bd01.js.map