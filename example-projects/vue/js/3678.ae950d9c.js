"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[3678],{1231:function(i,o,c){c.d(o,{a:function(){return t},c:function(){return n},g:function(){return e}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof c.g?c.g:"undefined"!==typeof self?self:{};function e(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i["default"]:i}function n(i,o,c){return c={path:o,exports:{},require:function(i,o){return p()}},i(c,c.exports),c.exports}function p(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},3257:function(i,o,c){
/*!
 * Crafted with ❤ by inovex GmbH
 */
function t(){return"_"+Math.random().toString(36).substr(2,9)}function e(i,o){return i.querySelector(`[slot="${o}"]`)}function n(i,o){var c;return o?i.querySelectorAll(`[slot="${o}"]`).length>0:0===(null===(c=i.querySelector("slot"))||void 0===c?void 0:c.assignedElements().length)}function p(i){var o;null===(o=i.querySelector("[data-ino-focus]"))||void 0===o||o.focus()}function r(i){i.stopPropagation(),i.preventDefault()}c.d(o,{a:function(){return e},f:function(){return p},g:function(){return t},h:function(){return n},p:function(){return r}})},9776:function(i,o,c){c.d(o,{c:function(){return e}});c(6728);var t=c(1231),e=(0,t.c)((function(i){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var o={}.hasOwnProperty;function c(){for(var i=[],t=0;t<arguments.length;t++){var e=arguments[t];if(e){var n=typeof e;if("string"===n||"number"===n)i.push(e);else if(Array.isArray(e)){if(e.length){var p=c.apply(null,e);p&&i.push(p)}}else if("object"===n){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){i.push(e.toString());continue}for(var r in e)o.call(e,r)&&e[r]&&i.push(r)}}}return i.join(" ")}i.exports?(c.default=c,i.exports=c):window.classNames=c})()}))},3678:function(i,o,c){c.r(o),c.d(o,{ino_chip:function(){return r}});var t=c(1297),e=c(9776),n=c(3257);c(1231);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const p='.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{overflow-x:hidden}.mdc-evolution-chip__action--trailing{position:relative}.mdc-evolution-chip__action--primary:before{box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1}.mdc-evolution-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-evolution-chip__action-touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-evolution-chip__text-label{white-space:nowrap;user-select:none;text-overflow:ellipsis;overflow:hidden}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mdc-evolution-chip__checkmark-background{opacity:0}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__graphic{transition:width 100ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark{transition:opacity 50ms 0ms linear, transform 100ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity 150ms 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-50%, -50%)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@keyframes mdc-evolution-chip-enter{from{transform:scale(0.8);opacity:0.4}to{transform:scale(1);opacity:1}}.mdc-evolution-chip--enter{animation:mdc-evolution-chip-enter 100ms 0ms cubic-bezier(0, 0, 0.2, 1)}@keyframes mdc-evolution-chip-exit{from{opacity:1}to{opacity:0}}.mdc-evolution-chip--exit{animation:mdc-evolution-chip-exit 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-evolution-chip--hidden{opacity:0;pointer-events:none;transition:width 150ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-evolution-chip{height:32px;border-radius:16px;background-color:#e0e0e0}.mdc-evolution-chip .mdc-evolution-chip__ripple{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary:before,.mdc-evolution-chip .mdc-evolution-chip__action--primary:after{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-evolution-chip .mdc-evolution-chip__action--primary,.mdc-evolution-chip .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:12px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:12px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0;}.mdc-evolution-chip .mdc-evolution-chip__text-label{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__checkmark{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__icon--trailing{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__text-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-evolution-chip.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width:20px}.mdc-evolution-chip .mdc-evolution-chip__graphic{height:20px;width:20px;font-size:20px}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{height:20px;width:20px;font-size:20px}.mdc-evolution-chip .mdc-evolution-chip__checkmark{height:20px;width:20px}.mdc-evolution-chip .mdc-evolution-chip__icon--trailing,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:after{height:18px;width:18px;font-size:18px}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary:before{border-color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:GrayText}}.mdc-evolution-chip .mdc-evolution-chip__action:after{position:absolute;content:"";border:0px solid transparent;pointer-events:none;box-sizing:border-box;z-index:1}.mdc-evolution-chip .mdc-evolution-chip__action:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused:after,.mdc-evolution-chip .mdc-evolution-chip__action:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus:after{border-width:5px;border-style:double}.mdc-evolution-chip .mdc-evolution-chip__action--primary:after{height:100%;width:100%;top:50%;left:50%;transform:translate(-50%, -50%)}.mdc-evolution-chip .mdc-evolution-chip__action--trailing:after{top:50%;transform:translateY(-50%);border-radius:50%}.mdc-evolution-chip--filter.mdc-evolution-chip--selected{background-color:#cecece}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width:24px}.mdc-evolution-chip--with-avatar .mdc-evolution-chip__graphic{height:24px;width:24px;font-size:24px}.mdc-evolution-chip--with-avatar .mdc-evolution-chip__icon--primary{height:24px;width:24px;font-size:24px}.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--primary:hover .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--primary.mdc-ripple-surface--hover .mdc-evolution-chip__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple::after{transition:opacity 150ms linear}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--trailing:hover .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--trailing.mdc-ripple-surface--hover .mdc-evolution-chip__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple::after{transition:opacity 150ms linear}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__ripple--trailing{height:18px;width:18px}.mdc-evolution-chip__action{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-evolution-chip__action.mdc-ripple-upgraded--unbounded .mdc-evolution-chip__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-activation .mdc-evolution-chip__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-deactivation .mdc-evolution-chip__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-evolution-chip__ripple{position:absolute;box-sizing:content-box;overflow:hidden;pointer-events:none}.mdc-evolution-chip__ripple--primary{height:100%;width:100%;top:0;left:0}.mdc-evolution-chip__ripple--trailing{top:50%;transform:translateY(-50%)}.mdc-evolution-chip-set{display:flex}.mdc-evolution-chip-set:focus{outline:none}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mdc-evolution-chip-set--overflow .mdc-evolution-chip-set__chips{flex-flow:nowrap}.mdc-evolution-chip-set .mdc-evolution-chip-set__chips{margin-left:-8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip-set__chips,.mdc-evolution-chip-set .mdc-evolution-chip-set__chips[dir=rtl]{margin-left:0;margin-right:-8px;}.mdc-evolution-chip-set .mdc-evolution-chip{margin-left:8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip,.mdc-evolution-chip-set .mdc-evolution-chip[dir=rtl]{margin-left:0;margin-right:8px;}.mdc-evolution-chip-set .mdc-evolution-chip{margin-top:4px;margin-bottom:4px}ino-chip{height:24px}ino-chip.ino-chip--not-clickable{pointer-events:none}ino-chip .ino-chip-container{width:inherit;height:inherit;height:inherit;border-radius:32px;transition:ease-in-out 0.15s}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::after{content:none}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:hover .mdc-evolution-chip__ripple::before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary.mdc-ripple-surface--hover .mdc-evolution-chip__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple::before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple::after{transition:opacity 150ms linear}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-chip .ino-chip-container .mdc-evolution-chip__icon--trailing{color:#2c02ff}ino-chip .ino-chip-container .mdc-evolution-chip__ripple--trailing{height:0px;width:0px}ino-chip .ino-chip-container .mdc-evolution-chip__text-label{color:#2c02ff}ino-chip .ino-chip-container .mdc-evolution-chip__icon--primary{color:#2c02ff}ino-chip .ino-chip-container .mdc-evolution-chip__checkmark{color:#2c02ff}ino-chip .ino-chip-container .mdc-evolution-chip__ripple{border-radius:32px}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:after{border-radius:32px}ino-chip .ino-chip-container .mdc-evolution-chip__icon--primary{border-radius:32px}ino-chip .ino-chip-container .ino-chip-leading-icon{--ino-icon-width:16px;--ino-icon-height:16px}ino-chip .ino-chip-container .mdc-evolution-chip__action{padding:0 10px}ino-chip .ino-chip-container .mdc-evolution-chip__text-label{font-size:13px}ino-chip .ino-chip-container.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-right:5px}ino-chip .ino-chip-container .ino-chip-trailing-icon{display:flex;justify-content:center;--ino-icon-width:16px;--ino-icon-height:16px}ino-chip .ino-chip-container .ino-chip-trailing-icon .ino-chip-close-icon{--ino-icon-width:9px;--ino-icon-height:9px}ino-chip .ino-chip-container ino-icon{--icon-color:currentColor}ino-chip.ino-chip--outline .ino-chip-container{background-color:transparent}ino-chip.ino-chip--outline .ino-chip-container .mdc-evolution-chip__action--primary:before{border-style:solid}ino-chip.ino-chip--outline .ino-chip-container .mdc-evolution-chip__action--primary:before{border-width:1px}ino-chip.ino-chip--outline .ino-chip-container .mdc-evolution-chip__action--primary:before{border-color:#2c02ff}ino-chip.ino-chip--outline .ino-chip-container ino-icon{--icon-color:#2c02ff}ino-chip.ino-chip--outline .ino-chip-container:hover,ino-chip.ino-chip--outline .ino-chip-container:focus{background-color:#E8EDFF}ino-chip.ino-chip--solid .ino-chip-container{background-color:#E8EDFF}ino-chip.ino-chip--solid .ino-chip-container ino-icon{--icon-color:theme.$primary}ino-chip.ino-chip--solid .ino-chip-container:hover,ino-chip.ino-chip--solid .ino-chip-container:focus{background-color:#D7E0FE}ino-chip.ino-chip-disabled .ino-chip-container{background-color:#7E7B91;pointer-events:none}ino-chip.ino-chip-disabled .ino-chip-container .mdc-evolution-chip__text-label{color:#CAC8D5}ino-chip.ino-chip-disabled .ino-chip-container .mdc-evolution-chip__action--primary:before{border-width:0}ino-chip.ino-chip-disabled .ino-chip-container ino-icon{--icon-color:theme.$n-3}ino-chip:focus-within.ino-chip--solid .mdc-evolution-chip,ino-chip:focus-within.ino-chip--outline .mdc-evolution-chip{box-shadow:0 0 0 3px rgba(45, 93, 255, 0.3)}',r=class{constructor(i){(0,t.r)(this,i),this.chipClicked=(0,t.c)(this,"chipClicked",7),this.chipRemoved=(0,t.c)(this,"chipRemoved",7),this.disabled=!1,this.fill="solid",this.removable=!1,this.selectable=!1,this.selected=!1,this.clickable=!0,this.iconClicked=i=>{i.preventDefault(),i.stopPropagation(),this.chipRemoved.emit(this.value)}}handleClick(i){if(this.disabled)return i.preventDefault(),void i.stopPropagation();this.chipClicked.emit(this.value)}componentDidLoad(){this.label&&console.warn('[ino-chip] The attribute "label" is deprecated, please use the default slot instead.')}renderPrimaryAction(i){return this.selectable?(0,t.h)("span",{class:"mdc-evolution-chip__action mdc-evolution-chip__action--primary",role:"option","aria-selected":this.selected,"aria-disabled":this.disabled,tabIndex:0},i):(0,t.h)("button",{class:"mdc-evolution-chip__action mdc-evolution-chip__action--primary",tabIndex:this.disabled?-1:0,disabled:this.disabled,"data-value":this.value,"data-mdc-deletable":this.removable,type:"button"},i)}render(){const i=(0,n.h)(this.el,"icon-leading"),o=(0,n.h)(this.el,"icon-trailing"),c=i||this.selectable,p=o||this.removable,r=(0,e.c)({"ino-chip--solid":"solid"===this.fill,"ino-chip--outline":"outline"===this.fill,"ino-chip-disabled":this.disabled,"ino-chip--not-clickable":!this.clickable}),l=(0,e.c)({"mdc-evolution-chip":!0,"ino-chip-container":!0,"mdc-evolution-chip--selectable":this.selectable,"mdc-evolution-chip--selected":this.selected,"mdc-evolution-chip--selecting":this.selectable&&!i&&this.selected,"mdc-evolution-chip--deselecting":this.selectable&&!i&&!this.selected,"mdc-evolution-chip--selecting-with-primary-icon":this.selectable&&i&&this.selected,"mdc-evolution-chip--deselecting-with-primary-icon":this.selectable&&i&&!this.selected,"mdc-evolution-chip--disabled":this.disabled,"mdc-evolution-chip--filter":this.selectable,"mdc-evolution-chip--with-primary-graphic":c,"mdc-evolution-chip--with-primary-icon":i,"mdc-evolution-chip--with-trailing-action":p});return(0,t.h)(t.H,{class:r},(0,t.h)("span",{class:l,role:this.selectable?"presentation":"row"},(0,t.h)("span",{class:"ino-chip_cell mdc-evolution-chip__cell mdc-evolution-chip__cell--primary",role:"gridcell"},this.renderPrimaryAction([(0,t.h)("span",{class:"mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"}),c&&(0,t.h)("span",{class:"mdc-evolution-chip__graphic"},i&&(0,t.h)("span",{class:"mdc-evolution-chip__icon mdc-evolution-chip__icon--primary ino-chip-leading-icon"},(0,t.h)("slot",{name:"icon-leading"})),this.selectable&&this.selected&&(0,t.h)("span",{class:"mdc-evolution-chip__checkmark"},(0,t.h)("svg",{class:"mdc-evolution-chip__checkmark-svg",viewBox:"-2 -3 30 30"},(0,t.h)("path",{class:"mdc-evolution-chip__checkmark-path",fill:"none",stroke:"black",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})))),(0,t.h)("span",{class:"mdc-evolution-chip__text-label ino-chip-label"},this.label?this.label:(0,t.h)("slot",null))])),p&&(0,t.h)("span",{class:"mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing",role:"gridcell"},(0,t.h)("button",{class:"mdc-evolution-chip__action mdc-evolution-chip__action--trailing",type:"button",tabIndex:-1,"data-mdc-deletable":"true",disabled:this.disabled,onClick:i=>this.iconClicked(i)},(0,t.h)("span",{class:"mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"}),(0,t.h)("span",{class:"mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing ino-chip-trailing-icon"},this.removable?(0,t.h)("ino-icon",{class:"ino-chip-close-icon",icon:"close",tabindex:"0",role:"button",clickable:!0}):(0,t.h)("slot",{name:"icon-trailing"}))))))}get el(){return(0,t.g)(this)}};r.style=p}}]);
//# sourceMappingURL=3678.ae950d9c.js.map