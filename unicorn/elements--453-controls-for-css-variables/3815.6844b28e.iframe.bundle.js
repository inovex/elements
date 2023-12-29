/*! For license information please see 3815.6844b28e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[3815],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-796d4780.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-icon-button.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_icon_button:()=>IconButton});__webpack_require__("../../node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/index-2ff82bb8.js"),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../elements/dist/esm/index-796d4780.js"),_component_9cb04f14_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../elements/dist/esm/component-9cb04f14.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js"),__webpack_require__("../elements/dist/esm/tslib.es6-973a6cc3.js"),__webpack_require__("../elements/dist/esm/component-606576f6.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var IconButton=function(){function IconButton(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,IconButton),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.clickEl=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"clickEl",7),this.attrs=void 0,this.autoFocus=void 0,this.disabled=void 0,this.activated=void 0,this.filled=void 0,this.icon=void 0,this.type="button"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(IconButton,[{key:"activatedChanged",value:function activatedChanged(activated){activated?this.maybeCreateRipple():this.maybeDestroyRipple()}},{key:"clickHandler",value:function clickHandler(e){this.disabled?(e.preventDefault(),e.stopPropagation()):this.clickEl.emit()}},{key:"componentDidLoad",value:function componentDidLoad(){this.maybeCreateRipple()}},{key:"disconnectedCallback",value:function disconnectedCallback(){this.maybeDestroyRipple()}},{key:"maybeCreateRipple",value:function maybeCreateRipple(){this.activated||(this.mdcInstance=new _component_9cb04f14_js__WEBPACK_IMPORTED_MODULE_10__.M(this.el.querySelector(".mdc-icon-button")),this.mdcInstance.unbounded=!0)}},{key:"maybeDestroyRipple",value:function maybeDestroyRipple(){var _a;null===(_a=this.mdcInstance)||void 0===_a||_a.destroy()}},{key:"render",value:function render(){var hostClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_9__.c)({"ino-icon-button--filled":this.filled}),iconButtonClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_9__.c)({"mdc-icon-button":!0,"mdc-ripple-upgraded--background-focused":this.activated,"ino-icon-button-filled":this.filled,"ino-icon-button--disabled":this.disabled});return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:hostClasses},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("button",Object.assign({autoFocus:this.autoFocus,class:iconButtonClasses,disabled:this.disabled,type:this.type},this.attrs),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"mdc-icon-button__ripple"}),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-icon-button__icon"},this.icon?(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("ino-icon",{icon:this.icon}):(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null))))}},{key:"el",get:function get(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"watchers",get:function get(){return{activated:["activatedChanged"]}}}]),IconButton}();IconButton.style='.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size{width:40px;height:40px;padding:8px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button .mdc-icon-button__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-icon-button .mdc-icon-button__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-icon-button:hover .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button .mdc-icon-button__ripple{pointer-events:none;z-index:1}ino-icon-button ino-icon{--icon-color:var(--ino-icon-button-icon-color, #4655ff);--ino-icon-height:var(--ino-icon-button-icon-size, 24px);--ino-icon-width:var(--ino-icon-button-icon-size, 24px)}ino-icon-button .mdc-icon-button{width:var(--ino-icon-button-size, 48px);height:var(--ino-icon-button-size, 48px);padding:calc((var(--ino-icon-button-size, 48px) - var(--ino-icon-button-icon-size, 24px)) / 2);font-size:var(--ino-icon-button-icon-size, 24px);background-color:var(--ino-icon-button-background-color, transparent);border-radius:50%}ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::before,ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::after{background-color:var(--ino-icon-button-background-active-color, #4655ff)}ino-icon-button .mdc-icon-button.mdc-ripple-upgraded--background-focused ino-icon,ino-icon-button .mdc-icon-button:focus ino-icon{--icon-color:var(--ino-icon-button-icon-active-color, #4655ff)}ino-icon-button.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#2d02ff;--ino-icon-button-background-active-color:#fff}.ino-icon-button--disabled.ino-icon-button-filled{--ino-icon-button-background-color:var(\n    --ino-icon-button-background-disabled-color,\n    #b6b4c4\n  )}.ino-icon-button--disabled.ino-icon-button-filled ino-icon{--ino-icon-button-icon-color:#fff}.ino-icon-button--disabled:not(.ino-icon-button-filled) ino-icon{--ino-icon-button-icon-color:var(\n    --ino-icon-button-icon-disabled-color,\n    #b6b4c4\n  )}'}}]);