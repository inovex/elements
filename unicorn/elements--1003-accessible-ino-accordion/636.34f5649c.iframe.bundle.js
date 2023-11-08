/*! For license information please see 636.34f5649c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[636],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-796d4780.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-accordion.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_accordion:()=>Accordion});__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../elements/dist/esm/index-2ff82bb8.js"),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/index-796d4780.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Accordion=function(){function Accordion(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Accordion),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.expandedChange=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.c)(this,"expandedChange",7),this.contentId=void 0,this.expanded=!1,this.accordionTitle=""}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Accordion,[{key:"componentDidLoad",value:function componentDidLoad(){this.accordionTitle||console.warn("Ino-Accordion: missing accordionTitle property."),this.contentId="ino-accordion-content-"+this.el.id}},{key:"toggleExpand",value:function toggleExpand(){this.expandedChange.emit(!this.expanded)}},{key:"render",value:function render(){var _this=this,inoAccordionClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_8__.c)({"ino-accordion":!0,"ino-accordion--expanded":this.expanded}),toggleWrapperClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_8__.c)({"toggle-wrapper":!0,"toggle-wrapper--expanded":this.expanded}),titleClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_8__.c)({"ino-accordion__title":!0,"ino-accordion__title--expanded":this.expanded}),contentWrapperClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_8__.c)({"ino-accordion__content-wrapper":!0,"ino-accordion__content-wrapper--expanded":this.expanded});return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:inoAccordionClasses},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"ino-accordion__header"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("h3",{role:"heading","aria-level":"3",style:{margin:"0"}},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("button",{class:"header-button",onClick:function onClick(){return _this.toggleExpand()},role:"button","aria-expanded":this.expanded?"true":"false","aria-controls":this.contentId},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:toggleWrapperClasses},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:"toggle-icon toggle-icon--expanded"}),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:"toggle-icon toggle-icon--collapsed"})),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("span",{class:titleClasses},this.accordionTitle)))),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:contentWrapperClasses,id:this.contentId,role:"region","aria-labelledby":this.accordionTitle},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"ino-accordion__content"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.h)("slot",null))))}},{key:"el",get:function get(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),Accordion}();Accordion.style=".ino-accordion{border-radius:24px}.ino-accordion:hover{background:#f6fafe}.ino-accordion__header{cursor:pointer;display:flex;align-items:center;padding-left:10px;min-height:48px}.ino-accordion__content{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;line-height:1.375rem;letter-spacing:0.001em;font-weight:400;padding:0 56px 0 52px;color:#4C4B52;overflow:hidden}.ino-accordion__title{padding-left:10px;font-family:Lato, Verdana, sans-serif;font-size:1rem;line-height:1.1875rem;letter-spacing:0.004em;font-weight:600;color:#4C4B52}.ino-accordion__title--expanded{color:#4655ff}.ino-accordion--expanded{background:#f6fafe}.ino-accordion .ino-accordion__content-wrapper{display:grid;grid-template-rows:0fr;transition:grid-template-rows 350ms ease-out}.ino-accordion .ino-accordion__content-wrapper--expanded{grid-template-rows:1fr;padding-bottom:32px}.toggle-wrapper{background:none;width:32px;height:32px;border:0;position:relative}.toggle-wrapper .toggle-icon{position:absolute;transition:200ms;background:#4655ff;border-radius:2.5px}.toggle-wrapper .toggle-icon--expanded{top:25%;bottom:25%;width:10%;left:45%}.toggle-wrapper .toggle-icon--collapsed{left:25%;right:25%;height:10%;top:45%}.toggle-wrapper--expanded .toggle-icon{transform:rotate(90deg)}.toggle-wrapper--expanded .toggle-icon--collapsed{left:50%;right:50%}.header-button{all:unset;display:flex;align-items:center}"}}]);