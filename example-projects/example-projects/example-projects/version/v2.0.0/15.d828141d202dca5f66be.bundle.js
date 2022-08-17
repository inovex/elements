/*! For license information please see 15.d828141d202dca5f66be.bundle.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1423:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ino_switch",(function(){return Switch}));var _index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_index_306dbf37_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(1431),__webpack_require__(1432)),_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(1433),_events_e71e4f98_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1435),_ponyfill_b3c8879a_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1434),_component_9a163546_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(1436),_component_utils_9327cb19_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(1438),_helpers_53d728c6_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1443),cssClasses={CHECKED:"mdc-switch--checked",DISABLED:"mdc-switch--disabled"},strings={ARIA_CHECKED_ATTR:"aria-checked",NATIVE_CONTROL_SELECTOR:".mdc-switch__native-control",RIPPLE_SURFACE_SELECTOR:".mdc-switch__thumb-underlay"},MDCSwitchFoundation=function(t){function e(c){return t.call(this,Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.c)(Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.c)({},e.defaultAdapter),c))||this}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.b)(e,t),Object.defineProperty(e,"strings",{get:function get(){return strings},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function get(){return cssClasses},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function get(){return{addClass:function addClass(){},removeClass:function removeClass(){},setNativeControlChecked:function setNativeControlChecked(){},setNativeControlDisabled:function setNativeControlDisabled(){},setNativeControlAttr:function setNativeControlAttr(){}}},enumerable:!0,configurable:!0}),e.prototype.setChecked=function(t){this.adapter.setNativeControlChecked(t),this.updateAriaChecked_(t),this.updateCheckedStyling_(t)},e.prototype.setDisabled=function(t){this.adapter.setNativeControlDisabled(t),t?this.adapter.addClass(cssClasses.DISABLED):this.adapter.removeClass(cssClasses.DISABLED)},e.prototype.handleChange=function(t){var e=t.target;this.updateAriaChecked_(e.checked),this.updateCheckedStyling_(e.checked)},e.prototype.updateCheckedStyling_=function(t){t?this.adapter.addClass(cssClasses.CHECKED):this.adapter.removeClass(cssClasses.CHECKED)},e.prototype.updateAriaChecked_=function(t){this.adapter.setNativeControlAttr(strings.ARIA_CHECKED_ATTR,""+!!t)},e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.a),MDCSwitch=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ripple_=e.createRipple_(),e}return Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.b)(e,t),e.attachTo=function(t){return new e(t)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.ripple_.destroy(),this.nativeControl_.removeEventListener("change",this.changeHandler_)},e.prototype.initialSyncWithDOM=function(){var t=this;this.changeHandler_=function(){for(var e,c=[],r=0;r<arguments.length;r++)c[r]=arguments[r];return(e=t.foundation).handleChange.apply(e,Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.f)(c))},this.nativeControl_.addEventListener("change",this.changeHandler_),this.checked=this.checked},e.prototype.getDefaultFoundation=function(){var t=this;return new MDCSwitchFoundation({addClass:function addClass(e){return t.root.classList.add(e)},removeClass:function removeClass(e){return t.root.classList.remove(e)},setNativeControlChecked:function setNativeControlChecked(e){return t.nativeControl_.checked=e},setNativeControlDisabled:function setNativeControlDisabled(e){return t.nativeControl_.disabled=e},setNativeControlAttr:function setNativeControlAttr(e,c){return t.nativeControl_.setAttribute(e,c)}})},Object.defineProperty(e.prototype,"ripple",{get:function get(){return this.ripple_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"checked",{get:function get(){return this.nativeControl_.checked},set:function set(t){this.foundation.setChecked(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function get(){return this.nativeControl_.disabled},set:function set(t){this.foundation.setDisabled(t)},enumerable:!0,configurable:!0}),e.prototype.createRipple_=function(){var t=this,e=MDCSwitchFoundation.strings.RIPPLE_SURFACE_SELECTOR,c=this.root.querySelector(e),r=Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.c)(Object(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.c)({},_component_9a163546_js__WEBPACK_IMPORTED_MODULE_6__.a.createAdapter(this)),{addClass:function addClass(t){return c.classList.add(t)},computeBoundingRect:function computeBoundingRect(){return c.getBoundingClientRect()},deregisterInteractionHandler:function deregisterInteractionHandler(e,c){t.nativeControl_.removeEventListener(e,c,Object(_events_e71e4f98_js__WEBPACK_IMPORTED_MODULE_4__.a)())},isSurfaceActive:function isSurfaceActive(){return Object(_ponyfill_b3c8879a_js__WEBPACK_IMPORTED_MODULE_5__.c)(t.nativeControl_,":active")},isUnbounded:function isUnbounded(){return!0},registerInteractionHandler:function registerInteractionHandler(e,c){t.nativeControl_.addEventListener(e,c,Object(_events_e71e4f98_js__WEBPACK_IMPORTED_MODULE_4__.a)())},removeClass:function removeClass(t){c.classList.remove(t)},updateCssVariable:function updateCssVariable(t,e){c.style.setProperty(t,e)}});return new _component_9a163546_js__WEBPACK_IMPORTED_MODULE_6__.a(this.root,new _component_9a163546_js__WEBPACK_IMPORTED_MODULE_6__.b(r))},Object.defineProperty(e.prototype,"nativeControl_",{get:function get(){var t=MDCSwitchFoundation.strings.NATIVE_CONTROL_SELECTOR;return this.root.querySelector(t)},enumerable:!0,configurable:!0}),e}(_component_aa03c231_js__WEBPACK_IMPORTED_MODULE_3__.d),Switch=function(){function t(t){var e=this;Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.j)(this,t),this.checkedChange=Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"checkedChange",7),this.switchId="ino-switch-id_"+Object(_component_utils_9327cb19_js__WEBPACK_IMPORTED_MODULE_7__.a)(),this.checked=!1,this.inoColorScheme="primary",this.handleChange=function(t){t.stopPropagation(),e.nativeInputEl.checked=e.checked,e.checkedChange.emit(!e.checked)}}return t.prototype.checkedChanged=function(t){this.switch&&(this.switch.checked=t)},t.prototype.componentDidLoad=function(){this.switch=new MDCSwitch(document.querySelector(".mdc-switch"))},t.prototype.componentDidUnLoad=function(){this.switch.destroy()},t.prototype.render=function(){var t=this,e=this,c=e.el,r=e.name,i=e.disabled;Object(_helpers_53d728c6_js__WEBPACK_IMPORTED_MODULE_8__.a)(c,r,"",i);var o=Object(_index_306dbf37_js__WEBPACK_IMPORTED_MODULE_2__.a)({"mdc-switch":!0,"mdc-switch--disabled":this.disabled,"mdc-switch--checked":this.checked});return Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.b,{checked:this.checked,disabled:this.disabled},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:o},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-switch__track"}),Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-switch__thumb-underlay"},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"mdc-switch__thumb"}),Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{name:this.name,checked:this.checked,disabled:this.disabled,type:"checkbox",id:this.switchId,class:"mdc-switch__native-control",role:"switch",onChange:function onChange(t){return t.stopPropagation()},onInput:this.handleChange,ref:function ref(e){return t.nativeInputEl=e}}))),Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("label",{htmlFor:this.switchId},Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function get(){return Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),t}();Switch.style='.mdc-switch__thumb-underlay{left:-18px;right:initial;top:-17px;width:48px;height:48px}[dir=rtl] .mdc-switch__thumb-underlay,.mdc-switch__thumb-underlay[dir=rtl]{left:initial;right:-18px}.mdc-switch__native-control{width:68px;height:48px}.mdc-switch{display:inline-block;position:relative;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786);border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-color:#fff;border-color:var(--mdc-theme-surface, #fff)}.mdc-switch__native-control{left:0;right:initial;position:absolute;top:0;margin:0;opacity:0;cursor:pointer;pointer-events:auto;-webkit-transition:-webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-switch__native-control,.mdc-switch__native-control[dir=rtl]{left:initial;right:0}.mdc-switch__track{-webkit-box-sizing:border-box;box-sizing:border-box;width:32px;height:14px;border:1px solid transparent;border-radius:7px;opacity:0.38;-webkit-transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb-underlay{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-transform:translateX(0);transform:translateX(0);-webkit-transition:background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1), background-color 90ms cubic-bezier(0.4, 0, 0.2, 1), border-color 90ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 90ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-switch__thumb{-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);-webkit-box-sizing:border-box;box-sizing:border-box;width:20px;height:20px;border:10px solid;border-radius:50%;pointer-events:none;z-index:1}.mdc-switch--checked .mdc-switch__track{opacity:0.54}.mdc-switch--checked .mdc-switch__thumb-underlay{-webkit-transform:translateX(20px);transform:translateX(20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__thumb-underlay,.mdc-switch--checked .mdc-switch__thumb-underlay[dir=rtl]{-webkit-transform:translateX(-20px);transform:translateX(-20px)}.mdc-switch--checked .mdc-switch__native-control{-webkit-transform:translateX(-20px);transform:translateX(-20px)}[dir=rtl] .mdc-switch--checked .mdc-switch__native-control,.mdc-switch--checked .mdc-switch__native-control[dir=rtl]{-webkit-transform:translateX(20px);transform:translateX(20px)}.mdc-switch--disabled{opacity:0.38;pointer-events:none}.mdc-switch--disabled .mdc-switch__thumb{border-width:1px}.mdc-switch--disabled .mdc-switch__native-control{cursor:default;pointer-events:none}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay::after{background-color:#9e9e9e}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:hover::before{opacity:0.08}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-switch__thumb-underlay{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch__thumb-underlay::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-activation::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--foreground-deactivation::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::before,.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch__thumb-underlay::before,.mdc-switch__thumb-underlay::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__thumb-underlay:hover::before{opacity:0.04}.mdc-switch__thumb-underlay.mdc-ripple-upgraded--background-focused::before,.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):focus::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded)::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-switch__thumb-underlay:not(.mdc-ripple-upgraded):active::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-switch__thumb-underlay.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}ino-switch{--switch-toggled-on-color:var(--ino-switch-toggled-on-color, #3d40f5);--switch-toggled-on-thumb-color:var(--ino-switch-toggled-on-thumb-color, #3d40f5);--switch-toggled-on-track-color:var(--ino-switch-toggled-on-track-color, #5d60f7);--switch-toggled-off-color:var(--ino-switch-toggled-off-color, #c1c1c1);--switch-toggled-off-thumb-color:var(--ino-switch-toggled-off-thumb-color, #fff);--switch-toggled-off-track-color:var(--ino-switch-toggled-off-track-color, #515151);--switch-hover-color:var(--ino-switch-hover-color, #5d60f7);--switch-hover-thumb-color:var(--ino-switch-hover-thumb-color, #fff);--switch-hover-track-color:var(--ino-switch-hover-track-color, #5d60f7);--switch-active-color:var(--ino-switch-active-color, #0d10f3);--switch-active-thumb-color:var(--ino-switch-active-thumb-color, #fff);--switch-active-track-color:var(--ino-switch-active-track-color, #0d10f3);--switch-disabled-color:var(--ino-switch-disabled-color, #c1c1c1);--switch-disabled-thumb-color:var(--ino-switch-disabled-thumb-color, #c1c1c1);--switch-disabled-track-color:var(--ino-switch-disabled-track-color, #c1c1c1)}ino-switch[ino-color-scheme=primary]{--switch-toggled-on-color:#3d40f5;--switch-toggled-on-thumb-color:#3d40f5;--switch-toggled-on-track-color:#5d60f7;--switch-hover-color:#5d60f7;--switch-hover-track-color:#5d60f7;--switch-active-color:#0d10f3;--switch-active-track-color:#0d10f3}ino-switch[ino-color-scheme=secondary]{--switch-toggled-on-color:#9ccd00;--switch-toggled-on-thumb-color:#9ccd00;--switch-toggled-on-track-color:#bbd962;--switch-hover-color:#bbd962;--switch-hover-track-color:#bbd962;--switch-active-color:#93bf00;--switch-active-track-color:#93bf00}ino-switch[ino-color-scheme=success]{--switch-toggled-on-color:#9ccd00;--switch-toggled-on-thumb-color:#9ccd00;--switch-toggled-on-track-color:#c8ff1b;--switch-hover-color:#c8ff1b;--switch-hover-track-color:#c8ff1b;--switch-active-color:#628100;--switch-active-track-color:#628100}ino-switch[ino-color-scheme=warning]{--switch-toggled-on-color:#ffde03;--switch-toggled-on-thumb-color:#ffde03;--switch-toggled-on-track-color:#ffe850;--switch-hover-color:#ffe850;--switch-hover-track-color:#ffe850;--switch-active-color:#b69e00;--switch-active-track-color:#b69e00}ino-switch[ino-color-scheme=error]{--switch-toggled-on-color:#eb003b;--switch-toggled-on-thumb-color:#eb003b;--switch-toggled-on-track-color:#ff396a;--switch-hover-color:#ff396a;--switch-hover-track-color:#ff396a;--switch-active-color:#9f0028;--switch-active-track-color:#9f0028}ino-switch[ino-color-scheme=light]{--switch-toggled-on-color:#c1c1c1;--switch-toggled-on-thumb-color:#c1c1c1;--switch-toggled-on-track-color:#e7e7e7;--switch-hover-color:#e7e7e7;--switch-hover-track-color:#e7e7e7;--switch-active-color:#9b9b9b;--switch-active-track-color:#9b9b9b}ino-switch[ino-color-scheme=dark]{--switch-toggled-on-color:#777777;--switch-toggled-on-thumb-color:#777777;--switch-toggled-on-track-color:#9d9d9d;--switch-hover-color:#9d9d9d;--switch-hover-track-color:#9d9d9d;--switch-active-color:#515151;--switch-active-track-color:#515151}ino-switch .mdc-switch.mdc-switch--checked .mdc-switch__thumb{background-color:var(--switch-toggled-on-thumb-color);border-color:var(--switch-toggled-on-color)}ino-switch .mdc-switch.mdc-switch--checked .mdc-switch__track{background-color:var(--switch-toggled-on-track-color)}ino-switch .mdc-switch:not(.mdc-switch--checked) .mdc-switch__thumb{background-color:var(--switch-toggled-off-thumb-color);border-color:var(--switch-toggled-off-color)}ino-switch .mdc-switch:not(.mdc-switch--checked) .mdc-switch__track{background-color:var(--switch-toggled-off-track-color)}ino-switch .mdc-switch:hover .mdc-switch__thumb{background-color:var(--switch-hover-thumb-color);border-color:var(--switch-hover-color);-webkit-box-shadow:0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14);box-shadow:0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)}ino-switch .mdc-switch:hover .mdc-switch__track{background-color:var(--switch-hover-track-color)}ino-switch .mdc-switch:active .mdc-switch__thumb{background-color:var(--switch-active-thumb-color);-webkit-box-shadow:0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14);box-shadow:0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14);border-color:var(--switch-active-color)}ino-switch .mdc-switch:active .mdc-switch__track{background-color:var(--switch-active-track-color)}ino-switch .mdc-switch.mdc-switch--disabled .mdc-switch__thumb{background-color:var(--switch-disabled-thumb-color);border-color:var(--switch-disabled-color)}ino-switch .mdc-switch.mdc-switch--disabled .mdc-switch__track{background-color:var(--switch-disabled-track-color)}ino-switch label{margin-left:10px}ino-switch .mdc-switch{top:-3px}ino-switch .mdc-switch__thumb-underlay{top:-23px}ino-switch .mdc-switch__thumb-underlay:before,ino-switch .mdc-switch__thumb-underlay:after{display:none}ino-switch .mdc-switch__track{height:2px;border:none}ino-switch .mdc-switch__thumb{height:16px;width:16px;border:2px solid}'},1431:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){__webpack_require__.d(__webpack_exports__,"a",(function(){return commonjsGlobal})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createCommonjsModule}));var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}}).call(this,__webpack_require__(56))},1432:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return classnames}));var _commonjsHelpers_7b8ed50b_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1431);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var classnames=Object(_commonjsHelpers_7b8ed50b_js__WEBPACK_IMPORTED_MODULE_0__.b)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=_typeof(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},1438:function(module,__webpack_exports__,__webpack_require__){"use strict";function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}__webpack_require__.d(__webpack_exports__,"a",(function(){return generateUniqueId}))},1443:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return renderHiddenInput}));var renderHiddenInput=function renderHiddenInput(e,n,d,t){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=t,a.name=n,a.value=d||""}}}]);
//# sourceMappingURL=15.d828141d202dca5f66be.bundle.js.map