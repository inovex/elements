"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[8995],{3662:function(o,n,t){t.d(n,{a:function(){return i},c:function(){return e},g:function(){return c}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{};function c(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o["default"]:o}function e(o,n,t){return t={path:n,exports:{},require:function(o,n){return r()}},o(t,t.exports),t.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},2183:function(o,n,t){t.d(n,{c:function(){return c}});var i=t(3662),c=(0,i.c)((function(o){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var n={}.hasOwnProperty;function t(){for(var o=[],i=0;i<arguments.length;i++){var c=arguments[i];if(c){var e=typeof c;if("string"===e||"number"===e)o.push(c);else if(Array.isArray(c)&&c.length){var r=t.apply(null,c);r&&o.push(r)}else if("object"===e)for(var d in c)n.call(c,d)&&c[d]&&o.push(d)}}return o.join(" ")}o.exports?(t.default=t,o.exports=t):window.classNames=t})()}));
/*!
 * Crafted with ❤ by inovex GmbH
 */},8995:function(o,n,t){t.r(n),t.d(n,{ino_icon_button:function(){return d}});var i=t(1817),c=t(2183),e=t(4145);t(3662),t(601);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const r='.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size{width:40px;height:40px;padding:8px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button .mdc-icon-button__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-icon-button .mdc-icon-button__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-icon-button:hover .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button .mdc-icon-button__ripple{pointer-events:none;z-index:1}ino-icon-button{}ino-icon-button ino-icon{--icon-color:var(--ino-icon-button-icon-color, #3d40f5);--ino-icon-height:var(--ino-icon-button-icon-size, 24px);--ino-icon-width:var(--ino-icon-button-icon-size, 24px)}ino-icon-button .mdc-icon-button{width:var(--ino-icon-button-size, 48px);height:var(--ino-icon-button-size, 48px);padding:calc((var(--ino-icon-button-size, 48px) - var(--ino-icon-button-icon-size, 24px)) / 2);font-size:var(--ino-icon-button-icon-size, 24px);background-color:var(--ino-icon-button-background-color, transparent);border-radius:50%}ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::before,ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::after{background-color:var(--ino-icon-button-background-active-color, #3d40f5)}ino-icon-button .mdc-icon-button.mdc-ripple-upgraded--background-focused ino-icon,ino-icon-button .mdc-icon-button:focus ino-icon{--icon-color:var(--ino-icon-button-icon-active-color, #3d40f5)}ino-icon-button.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#3d40f5;--ino-icon-button-background-active-color:#fff}.ino-icon-button--disabled.ino-icon-button-filled{--ino-icon-button-background-color:var(\n      --ino-icon-button-background-disabled-color,\n      #9d9d9d\n  )}.ino-icon-button--disabled.ino-icon-button-filled ino-icon{--ino-icon-button-icon-color:#fff}.ino-icon-button--disabled:not(.ino-icon-button-filled) ino-icon{--ino-icon-button-icon-color:var(\n      --ino-icon-button-icon-disabled-color,\n      #9d9d9d\n  )}',d=class{constructor(o){(0,i.r)(this,o),this.clickEl=(0,i.c)(this,"clickEl",7),this.type="button"}activatedChanged(o){o?this.maybeCreateRipple():this.maybeDestroyRipple()}clickHandler(o){this.disabled?(o.preventDefault(),o.stopPropagation()):this.clickEl.emit()}componentDidLoad(){this.maybeCreateRipple()}disconnectedCallback(){this.maybeDestroyRipple()}maybeCreateRipple(){this.activated||(this.mdcInstance=new e.M(this.el.querySelector(".mdc-icon-button")),this.mdcInstance.unbounded=!0)}maybeDestroyRipple(){var o;null===(o=this.mdcInstance)||void 0===o||o.destroy()}render(){const o=(0,c.c)({"ino-icon-button--filled":this.filled}),n=(0,c.c)({"mdc-icon-button":!0,"mdc-ripple-upgraded--background-focused":this.activated,"ino-icon-button-filled":this.filled,"ino-icon-button--disabled":this.disabled});return(0,i.h)(i.H,{class:o},(0,i.h)("button",{autoFocus:this.autoFocus,class:n,disabled:this.disabled,type:this.type},(0,i.h)("div",{class:"mdc-icon-button__ripple"}),(0,i.h)("span",{class:"mdc-icon-button__icon"},this.icon?(0,i.h)("ino-icon",{icon:this.icon}):(0,i.h)("slot",null))))}get el(){return(0,i.g)(this)}static get watchers(){return{activated:["activatedChanged"]}}};d.style=r}}]);
//# sourceMappingURL=8995.00cb9267.js.map