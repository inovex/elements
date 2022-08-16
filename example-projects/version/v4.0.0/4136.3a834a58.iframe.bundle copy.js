/*! For license information please see 4136.3a834a58.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[4136],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},87539:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>getSlotContent,f:()=>focusIfExists,g:()=>generateUniqueId,h:()=>hasSlotContent});__webpack_require__(58188),__webpack_require__(88233),__webpack_require__(99120);function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(t,e){return t.querySelector('[slot="'+e+'"]')}function hasSlotContent(t,e){return t.querySelectorAll('[slot="'+e+'"]').length>0}function focusIfExists(t){var e;null===(e=t.querySelector("[data-ino-focus]"))||void 0===e||e.focus()}},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781),__webpack_require__(34115),__webpack_require__(634),__webpack_require__(58188),__webpack_require__(20796),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=_typeof(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},54136:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_segment_button:()=>InoSegmentButton});__webpack_require__(26936),__webpack_require__(95094);var _index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(79470),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(12419),__webpack_require__(61383)),_component_utils_da1894e7_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(87539),InoSegmentButton=function(){function t(t){var e=this;(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.r)(this,t),this.checkedChange=(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.c)(this,"checkedChange",7),this.buttonId="ino-segment-button-id_"+(0,_component_utils_da1894e7_js__WEBPACK_IMPORTED_MODULE_5__.g)(),this.belongsToGroup=!1,this.checked=!1,this.disabled=!1,this.dense=!1,this.disableBorder=function(){e.successor.shadowRoot.querySelector("button").style.borderLeft="none"},this.enableBorder=function(){e.checked||(e.successor.shadowRoot.querySelector("button").style.borderLeft="1px solid")},this.handleClick=function(t){e.checked||e.disabled?(t.preventDefault(),t.stopPropagation()):e.checkedChange.emit(!0)}}return t.prototype.checkedChanged=function(t){this.belongsToGroup&&this.successor&&!t&&this.enableBorder()},t.prototype.componentWillRender=function(){this.belongsToGroup="INO-SEGMENT-GROUP"===this.el.parentElement.tagName,this.successor=this.el.nextElementSibling,this.belongsToGroup&&this.successor&&!this.disabled&&"INO-SEGMENT-BUTTON"===this.successor.tagName&&(this.el.addEventListener("mouseover",this.disableBorder),this.el.addEventListener("mouseleave",this.enableBorder),this.checked&&this.disableBorder())},t.prototype.render=function(){var t=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_4__.c)({"ino-segment-button--checked":this.checked,"ino-segment-button--disabled":this.disabled}),e=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_4__.c)({"mdc-button":!0,"mdc-button--outlined":!0,"ino-segment-button--dense":this.dense,"ino-segment-button--active":this.checked,"belongs-to-group":this.belongsToGroup});return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.H,{checked:this.checked,onClick:this.handleClick,class:t},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.h)("button",{class:e,disabled:this.disabled,id:this.buttonId,name:this.name},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.h)("div",{class:"mdc-button__label"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.h)("slot",null))))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_2__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{checked:["checkedChanged"]}},enumerable:!1,configurable:!0}),t}();InoSegmentButton.style='.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);-webkit-transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Lato, Verdana, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Lato, Verdana, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.mdc-button:not(:disabled){color:#3d40f5;color:var(--mdc-theme-primary, #3d40f5)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#3d40f5;background-color:var(--mdc-theme-primary, #3d40f5)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);-webkit-transition:-webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{-webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:active{-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled{-webkit-box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button .mdc-button__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#3d40f5;background-color:var(--mdc-theme-primary, #3d40f5)}.mdc-button:hover .mdc-button__ripple::before{opacity:0.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button .mdc-button__ripple{position:absolute;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:0.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}:host{--segment-button-color:var(\n    --ino-segment-button-color,\n    #c1c1c1\n  );--segment-button-checked-color:var(\n    --ino-segment-button-checked-color,\n    #0d10f3\n  );--segment-button-hover-color:var(\n    --ino-segment-button-hover-color,\n    #5d60f7\n  );--segment-button-disabled-color:var(\n    --ino-segment-button-disabled-color,\n    #777777\n  );--segment-button-hover-shadow:var(\n    --ino-segment-button-hover-shadow,\n    0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)\n  );--segment-button-checked-shadow:var(\n    --ino-segment-button-checked-shadow,\n    0 8px 16px 0 rgba(61, 64, 245, 0.3), 0 16px 32px 0 rgba(61, 214, 245, 0.14)\n  )}:host{float:left}:host .mdc-button{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;letter-spacing:1.5px;text-align:center;border-radius:0;margin:0}:host .mdc-button .mdc-button__ripple{border-radius:0}:host .mdc-button:not(:disabled){background-color:#fff}:host .mdc-button:after,:host .mdc-button:before{background-color:#fff}:host .mdc-button--outlined{padding:0 15px 0 15px;border-width:1px}:host .mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}:host .mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}:host .mdc-button--outlined:not(:disabled){border-color:var(--segment-button-color)}:host .mdc-button--outlined:not(:disabled){color:var(--segment-button-color)}:host .mdc-button--outlined:disabled:not(:disabled){border-color:var(--segment-button-disabled-color)}:host .mdc-button--outlined:disabled:not(:disabled){color:var(--segment-button-disabled-color)}:host .mdc-button--outlined:hover{-webkit-box-shadow:var(--segment-button-hover-shadow);box-shadow:var(--segment-button-hover-shadow)}:host .mdc-button--outlined:hover:not(:disabled){border-color:var(--segment-button-hover-color)}:host .mdc-button--outlined:hover:not(:disabled){color:var(--segment-button-hover-color)}:host .ino-segment-button--active,:host .ino-segment-button--active:hover{-webkit-box-shadow:var(--segment-button-checked-shadow);box-shadow:var(--segment-button-checked-shadow)}:host .ino-segment-button--active:not(:disabled),:host .ino-segment-button--active:hover:not(:disabled){border-color:var(--segment-button-checked-color)}:host .ino-segment-button--active:not(:disabled),:host .ino-segment-button--active:hover:not(:disabled){color:var(--segment-button-checked-color)}:host .ino-segment-button--dense{height:32px;margin-top:0;margin-bottom:0}:host .ino-segment-button--dense .mdc-button__touch{display:none}:host(:not(:last-child)) button.belongs-to-group{border-right:none}:host(:first-child) button.belongs-to-group{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}:host(:first-child) button.belongs-to-group .mdc-button__ripple{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}:host(:last-child) button.belongs-to-group{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:0}:host(:last-child) button.belongs-to-group .mdc-button__ripple{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:0}:host(:only-of-type) button.belongs-to-group{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:24px}:host(:only-of-type) button.belongs-to-group .mdc-button__ripple{border-top-left-radius:0;border-top-right-radius:24px;border-bottom-right-radius:24px;border-bottom-left-radius:24px}:host(:hover:not(.ino-segment-button--disabled)) button.belongs-to-group,:host(:active):not(.ino-segment-button--disabled) button.belongs-to-group,:host(.ino-segment-button--checked:not(.ino-segment-button--disabled)) button.belongs-to-group{border-right:1px solid}'},99120:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var redefine=__webpack_require__(27487),DatePrototype=Date.prototype,nativeDateToString=DatePrototype.toString,getTime=DatePrototype.getTime;new Date(NaN)+""!="Invalid Date"&&redefine(DatePrototype,"toString",(function toString(){var value=getTime.call(this);return value==value?nativeDateToString.call(this):"Invalid Date"}))},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=4136.3a834a58.iframe.bundle.js.map