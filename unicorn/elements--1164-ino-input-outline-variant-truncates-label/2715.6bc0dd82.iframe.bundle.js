/*! For license information please see 2715.6bc0dd82.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[2715],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/component-utils-02a98646.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>getSlotContent,f:()=>focusIfExists,g:()=>generateUniqueId,h:()=>hasSlotContent,p:()=>preventEvent});__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js");function generateUniqueId(){return"_"+Math.random().toString(36).substr(2,9)}function getSlotContent(el,slotName){return el.querySelector('[slot="'+slotName+'"]')}function hasSlotContent(el,slotName){var _a;return slotName?el.querySelectorAll('[slot="'+slotName+'"]').length>0:0===(null===(_a=el.querySelector("slot"))||void 0===_a?void 0:_a.assignedElements().length)}function focusIfExists(el){var _a;null===(_a=el.querySelector("[data-ino-focus]"))||void 0===_a||_a.focus()}function preventEvent(event){event.stopPropagation(),event.preventDefault()}},"../elements/dist/esm/index-796d4780.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-chip.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_chip:()=>Chip});__webpack_require__("../../node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/index-2ff82bb8.js"),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../elements/dist/esm/index-796d4780.js"),_component_utils_02a98646_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../elements/dist/esm/component-utils-02a98646.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Chip=function(){function Chip(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Chip),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.chipClicked=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"chipClicked",7),this.chipRemoved=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"chipRemoved",7),this.iconClicked=function(e){e.preventDefault(),e.stopPropagation(),_this.chipRemoved.emit(_this.value)},this.disabled=!1,this.fill="solid",this.label=void 0,this.removable=!1,this.selectable=!1,this.selected=!1,this.value=void 0,this.clickable=!0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Chip,[{key:"handleClick",value:function handleClick(e){if(this.disabled)return e.preventDefault(),void e.stopPropagation();this.chipClicked.emit(this.value)}},{key:"componentDidLoad",value:function componentDidLoad(){this.label&&console.warn('[ino-chip] The attribute "label" is deprecated, please use the default slot instead.')}},{key:"renderPrimaryAction",value:function renderPrimaryAction(content){return this.selectable?(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__action mdc-evolution-chip__action--primary",role:"option","aria-selected":this.selected,"aria-disabled":this.disabled,tabIndex:0},content):(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("button",{class:"mdc-evolution-chip__action mdc-evolution-chip__action--primary",tabIndex:this.disabled?-1:0,disabled:this.disabled,"data-value":this.value,"data-mdc-deletable":this.removable,type:"button"},content)}},{key:"render",value:function render(){var _this2=this,leadingSlotHasContent=(0,_component_utils_02a98646_js__WEBPACK_IMPORTED_MODULE_10__.h)(this.el,"icon-leading"),trailingSlotHasContent=(0,_component_utils_02a98646_js__WEBPACK_IMPORTED_MODULE_10__.h)(this.el,"icon-trailing"),hasPrimaryGraphic=leadingSlotHasContent||this.selectable,hasTrailingGraphic=trailingSlotHasContent||this.removable,hostClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_9__.c)({"ino-chip--solid":"solid"===this.fill,"ino-chip--outline":"outline"===this.fill,"ino-chip-disabled":this.disabled,"ino-chip--not-clickable":!this.clickable}),chipClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_9__.c)({"mdc-evolution-chip":!0,"ino-chip-container":!0,"mdc-evolution-chip--selectable":this.selectable,"mdc-evolution-chip--selected":this.selected,"mdc-evolution-chip--selecting":this.selectable&&!leadingSlotHasContent&&this.selected,"mdc-evolution-chip--deselecting":this.selectable&&!leadingSlotHasContent&&!this.selected,"mdc-evolution-chip--selecting-with-primary-icon":this.selectable&&leadingSlotHasContent&&this.selected,"mdc-evolution-chip--deselecting-with-primary-icon":this.selectable&&leadingSlotHasContent&&!this.selected,"mdc-evolution-chip--disabled":this.disabled,"mdc-evolution-chip--filter":this.selectable,"mdc-evolution-chip--with-primary-graphic":hasPrimaryGraphic,"mdc-evolution-chip--with-primary-icon":leadingSlotHasContent,"mdc-evolution-chip--with-trailing-action":hasTrailingGraphic});return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.H,{class:hostClasses},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:chipClasses,role:this.selectable?"presentation":"row"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"ino-chip_cell mdc-evolution-chip__cell mdc-evolution-chip__cell--primary",role:"gridcell"},this.renderPrimaryAction([(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"}),hasPrimaryGraphic&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__graphic"},leadingSlotHasContent&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__icon mdc-evolution-chip__icon--primary ino-chip-leading-icon"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"icon-leading"})),this.selectable&&this.selected&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__checkmark"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("svg",{class:"mdc-evolution-chip__checkmark-svg",viewBox:"-2 -3 30 30"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("path",{class:"mdc-evolution-chip__checkmark-path",fill:"none",stroke:"black",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})))),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__text-label ino-chip-label"},this.label?this.label:(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null))])),hasTrailingGraphic&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing",role:"gridcell"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("button",{class:"mdc-evolution-chip__action mdc-evolution-chip__action--trailing",type:"button",tabIndex:-1,"data-mdc-deletable":"true",disabled:this.disabled,onClick:function onClick(e){return _this2.iconClicked(e)}},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing"}),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("span",{class:"mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing ino-chip-trailing-icon"},this.removable?(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("ino-icon",{class:"ino-chip-close-icon",icon:"close",tabindex:"0",role:"button",clickable:!0}):(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",{name:"icon-trailing"}))))))}},{key:"el",get:function get(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}]),Chip}();Chip.style='.mdc-evolution-chip,.mdc-evolution-chip__cell,.mdc-evolution-chip__action{display:inline-flex;align-items:center}.mdc-evolution-chip{position:relative;max-width:100%}.mdc-evolution-chip .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-evolution-chip__cell,.mdc-evolution-chip__action{height:100%}.mdc-evolution-chip__cell--primary{overflow-x:hidden}.mdc-evolution-chip__cell--trailing{flex:1 0 auto}.mdc-evolution-chip__action{align-items:center;background:none;border:none;box-sizing:content-box;cursor:pointer;display:inline-flex;justify-content:center;outline:none;padding:0;text-decoration:none;color:inherit}.mdc-evolution-chip__action--presentational{cursor:auto}.mdc-evolution-chip--disabled,.mdc-evolution-chip__action:disabled{pointer-events:none}.mdc-evolution-chip__action--primary{overflow-x:hidden}.mdc-evolution-chip__action--trailing{position:relative}.mdc-evolution-chip__action--primary:before{box-sizing:border-box;content:"";height:100%;left:0;position:absolute;pointer-events:none;top:0;width:100%;z-index:1}.mdc-evolution-chip--touch{margin-top:8px;margin-bottom:8px}.mdc-evolution-chip__action-touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-evolution-chip__text-label{white-space:nowrap;user-select:none;text-overflow:ellipsis;overflow:hidden}.mdc-evolution-chip__graphic{align-items:center;display:inline-flex;justify-content:center;overflow:hidden;pointer-events:none;position:relative;flex:1 0 auto}.mdc-evolution-chip__checkmark{position:absolute;opacity:0;top:50%;left:50%}.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic{width:0}.mdc-evolution-chip__checkmark-background{opacity:0}.mdc-evolution-chip__checkmark-svg{display:block}.mdc-evolution-chip__checkmark-path{stroke-width:2px;stroke-dasharray:29.7833385;stroke-dashoffset:29.7833385;stroke:currentColor}.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic{transition:width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark{transition:transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__graphic{transition:width 100ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark{transition:opacity 50ms 0ms linear, transform 100ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-75%, -50%)}.mdc-evolution-chip--deselecting .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--selecting-with-primary-icon .mdc-evolution-chip__checkmark-path{transition:stroke-dashoffset 150ms 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__icon--primary{transition:opacity 150ms 75ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);transform:translate(-50%, -50%)}.mdc-evolution-chip--deselecting-with-primary-icon .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary{opacity:0}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark{transform:translate(-50%, -50%);opacity:1}.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path{stroke-dashoffset:0}@keyframes mdc-evolution-chip-enter{from{transform:scale(0.8);opacity:0.4}to{transform:scale(1);opacity:1}}.mdc-evolution-chip--enter{animation:mdc-evolution-chip-enter 100ms 0ms cubic-bezier(0, 0, 0.2, 1)}@keyframes mdc-evolution-chip-exit{from{opacity:1}to{opacity:0}}.mdc-evolution-chip--exit{animation:mdc-evolution-chip-exit 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-evolution-chip--hidden{opacity:0;pointer-events:none;transition:width 150ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-evolution-chip{height:32px;border-radius:16px;background-color:#e0e0e0}.mdc-evolution-chip .mdc-evolution-chip__ripple{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary:before,.mdc-evolution-chip .mdc-evolution-chip__action--primary:after{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{border-radius:16px}.mdc-evolution-chip .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-evolution-chip .mdc-evolution-chip__action--primary,.mdc-evolution-chip .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:12px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:12px;padding-right:0}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:12px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:6px;padding-right:6px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:6px;padding-right:6px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0;}.mdc-evolution-chip .mdc-evolution-chip__text-label{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__checkmark{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__icon--trailing{color:rgba(0, 0, 0, 0.87)}.mdc-evolution-chip .mdc-evolution-chip__text-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit)}.mdc-evolution-chip.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width:20px}.mdc-evolution-chip .mdc-evolution-chip__graphic{height:20px;width:20px;font-size:20px}.mdc-evolution-chip .mdc-evolution-chip__icon--primary{height:20px;width:20px;font-size:20px}.mdc-evolution-chip .mdc-evolution-chip__checkmark{height:20px;width:20px}.mdc-evolution-chip .mdc-evolution-chip__icon--trailing,.mdc-evolution-chip .mdc-evolution-chip__action--trailing:after{height:18px;width:18px;font-size:18px}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary:before{border-color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark{color:GrayText}.mdc-evolution-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing{color:GrayText}}.mdc-evolution-chip .mdc-evolution-chip__action:after{position:absolute;content:"";border:0px solid transparent;pointer-events:none;box-sizing:border-box;z-index:1}.mdc-evolution-chip .mdc-evolution-chip__action:not(.mdc-evolution-chip__action--presentational).mdc-ripple-upgraded--background-focused:after,.mdc-evolution-chip .mdc-evolution-chip__action:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus:after{border-width:5px;border-style:double}.mdc-evolution-chip .mdc-evolution-chip__action--primary:after{height:100%;width:100%;top:50%;left:50%;transform:translate(-50%, -50%)}.mdc-evolution-chip .mdc-evolution-chip__action--trailing:after{top:50%;transform:translateY(-50%);border-radius:50%}.mdc-evolution-chip--filter.mdc-evolution-chip--selected{background-color:#cecece}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary{padding-left:0;padding-right:12px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:12px;padding-right:0;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic{padding-left:4px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic[dir=rtl]{padding-left:8px;padding-right:4px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-left:8px;padding-right:8px}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing[dir=rtl]{padding-left:8px;padding-right:8px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__ripple--trailing[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after{left:8px;right:initial}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing:after[dir=rtl]{left:initial;right:8px;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary{padding-left:0;padding-right:0}[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary,.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary[dir=rtl]{padding-left:0;padding-right:0;}.mdc-evolution-chip--with-avatar.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--with-primary-icon){--mdc-chip-graphic-selected-width:24px}.mdc-evolution-chip--with-avatar .mdc-evolution-chip__graphic{height:24px;width:24px;font-size:24px}.mdc-evolution-chip--with-avatar .mdc-evolution-chip__icon--primary{height:24px;width:24px;font-size:24px}.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--primary:hover .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--primary.mdc-ripple-surface--hover .mdc-evolution-chip__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple::after{transition:opacity 150ms linear}.mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__action--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--trailing .mdc-evolution-chip__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, var(--mdc-theme-on-surface, #000))}.mdc-evolution-chip__action--trailing:hover .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--trailing.mdc-ripple-surface--hover .mdc-evolution-chip__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple::after{transition:opacity 150ms linear}.mdc-evolution-chip__action--trailing:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__action--trailing.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-evolution-chip__ripple--trailing{height:18px;width:18px}.mdc-evolution-chip__action{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-evolution-chip__action.mdc-ripple-upgraded--unbounded .mdc-evolution-chip__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-activation .mdc-evolution-chip__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-evolution-chip__action.mdc-ripple-upgraded--foreground-deactivation .mdc-evolution-chip__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-evolution-chip__action .mdc-evolution-chip__ripple::before,.mdc-evolution-chip__action .mdc-evolution-chip__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-evolution-chip__action.mdc-ripple-upgraded .mdc-evolution-chip__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-evolution-chip__ripple{position:absolute;box-sizing:content-box;overflow:hidden;pointer-events:none}.mdc-evolution-chip__ripple--primary{height:100%;width:100%;top:0;left:0}.mdc-evolution-chip__ripple--trailing{top:50%;transform:translateY(-50%)}.mdc-evolution-chip-set{display:flex}.mdc-evolution-chip-set:focus{outline:none}.mdc-evolution-chip-set__chips{display:flex;flex-flow:wrap;min-width:0}.mdc-evolution-chip-set--overflow .mdc-evolution-chip-set__chips{flex-flow:nowrap}.mdc-evolution-chip-set .mdc-evolution-chip-set__chips{margin-left:-8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip-set__chips,.mdc-evolution-chip-set .mdc-evolution-chip-set__chips[dir=rtl]{margin-left:0;margin-right:-8px;}.mdc-evolution-chip-set .mdc-evolution-chip{margin-left:8px;margin-right:0}[dir=rtl] .mdc-evolution-chip-set .mdc-evolution-chip,.mdc-evolution-chip-set .mdc-evolution-chip[dir=rtl]{margin-left:0;margin-right:8px;}.mdc-evolution-chip-set .mdc-evolution-chip{margin-top:4px;margin-bottom:4px}ino-chip{height:24px}ino-chip.ino-chip--not-clickable{pointer-events:none}ino-chip .ino-chip-container{width:inherit;height:inherit;height:inherit;border-radius:32px;transition:ease-in-out 0.15s}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary .mdc-evolution-chip__ripple::after{content:none}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:hover .mdc-evolution-chip__ripple::before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary.mdc-ripple-surface--hover .mdc-evolution-chip__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary.mdc-ripple-upgraded--background-focused .mdc-evolution-chip__ripple::before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):focus .mdc-evolution-chip__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded) .mdc-evolution-chip__ripple::after{transition:opacity 150ms linear}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:not(.mdc-ripple-upgraded):active .mdc-evolution-chip__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}ino-chip .ino-chip-container .mdc-evolution-chip__icon--trailing{color:#4655ff}ino-chip .ino-chip-container .mdc-evolution-chip__ripple--trailing{height:0px;width:0px}ino-chip .ino-chip-container .mdc-evolution-chip__text-label{color:#4655ff}ino-chip .ino-chip-container .mdc-evolution-chip__icon--primary{color:#4655ff}ino-chip .ino-chip-container .mdc-evolution-chip__checkmark{color:#4655ff}ino-chip .ino-chip-container .mdc-evolution-chip__ripple{border-radius:32px}ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:before,ino-chip .ino-chip-container .mdc-evolution-chip__action--primary:after{border-radius:32px}ino-chip .ino-chip-container .mdc-evolution-chip__icon--primary{border-radius:32px}ino-chip .ino-chip-container .mdc-evolution-chip__text-label{color:#4655ff}ino-chip .ino-chip-container .ino-chip-leading-icon{--ino-icon-width:16px;--ino-icon-height:16px}ino-chip .ino-chip-container .mdc-evolution-chip__action{padding:0 10px}ino-chip .ino-chip-container .mdc-evolution-chip__text-label{font-size:13px}ino-chip .ino-chip-container.mdc-evolution-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--trailing{padding-right:5px}ino-chip .ino-chip-container .ino-chip-trailing-icon{display:flex;justify-content:center;--ino-icon-width:16px;--ino-icon-height:16px}ino-chip .ino-chip-container .ino-chip-trailing-icon .ino-chip-close-icon{--ino-icon-width:9px;--ino-icon-height:9px}ino-chip .ino-chip-container ino-icon{--icon-color:currentColor}ino-chip.ino-chip--outline .ino-chip-container{background-color:transparent}ino-chip.ino-chip--outline .ino-chip-container .mdc-evolution-chip__action--primary:before{border-style:solid}ino-chip.ino-chip--outline .ino-chip-container .mdc-evolution-chip__action--primary:before{border-width:1px}ino-chip.ino-chip--outline .ino-chip-container .mdc-evolution-chip__action--primary:before{border-color:#4655ff}ino-chip.ino-chip--outline .ino-chip-container ino-icon{--icon-color:#4655ff}ino-chip.ino-chip--outline .ino-chip-container:hover,ino-chip.ino-chip--outline .ino-chip-container:focus{background-color:#f6fafe}ino-chip.ino-chip--solid .ino-chip-container{background-color:#e2ecff}ino-chip.ino-chip--solid .ino-chip-container ino-icon{--icon-color:theme.$p-5}ino-chip.ino-chip--solid .ino-chip-container:hover,ino-chip.ino-chip--solid .ino-chip-container:focus{background-color:#beccff}ino-chip.ino-chip--solid .ino-chip-container:hover .mdc-evolution-chip__text-label,ino-chip.ino-chip--solid .ino-chip-container:focus .mdc-evolution-chip__text-label{color:#2d02ff}ino-chip.ino-chip-disabled .ino-chip-container{background-color:#7e7b91;pointer-events:none}ino-chip.ino-chip-disabled .ino-chip-container .mdc-evolution-chip__text-label{color:#cac8d5}ino-chip.ino-chip-disabled .ino-chip-container .mdc-evolution-chip__action--primary:before{border-width:0}ino-chip.ino-chip-disabled .ino-chip-container ino-icon{--icon-color:theme.$n-3}ino-chip:focus-within.ino-chip--solid .mdc-evolution-chip,ino-chip:focus-within.ino-chip--outline .mdc-evolution-chip{box-shadow:0 0 0 3px rgba(45, 93, 255, 0.3019607843)}'}}]);