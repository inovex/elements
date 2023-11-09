/*! For license information please see 998.1e0f4e05.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[998],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-796d4780.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-carousel.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_carousel:()=>InoCarousel});__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.find.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.map.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../elements/dist/esm/index-2ff82bb8.js"),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../elements/dist/esm/index-796d4780.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var InoCarousel=function(){function InoCarousel(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InoCarousel),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.r)(this,hostRef),this.valueChange=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.c)(this,"valueChange",7),this.currentSlideEl=null,this.onSlotChanged=function(){_this.allSlides=Array.from(_this.el.getElementsByTagName("ino-carousel-slide")),0===_this.allSlides.length&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")},this.allSlides=[],this.value=void 0,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(InoCarousel,[{key:"valueChanged",value:function valueChanged(newVal){var nextSlide=this.allSlides.find((function(slide){return slide.value===newVal}));if(!nextSlide)throw new Error("<ino-carousel-slide> with value '"+newVal+"' could not be found in the children of <ino-carousel>");this.currentSlideEl&&(this.currentSlideEl.selected=!1),nextSlide.selected=!0,this.currentSlideEl=nextSlide,this.setupTimer()}},{key:"onTimerPropsChange",value:function onTimerPropsChange(){this.setupTimer()}},{key:"componentDidLoad",value:function componentDidLoad(){this.setupTimer(),this.onSlotChanged(),null==this.value?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}},{key:"disconnectedCallback",value:function disconnectedCallback(){clearInterval(this.timer)}},{key:"setupTimer",value:function setupTimer(){var _this2=this;clearInterval(this.timer),this.autoplay&&(this.timer=setInterval((function(){return _this2.emitNextSlide(_this2.reverse?"previous":"next")}),this.intermission))}},{key:"emitNextSlide",value:function emitNextSlide(){var _a,direction=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next",nextSlide="next"===direction?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;this.infinite?(nextSlide="previous"===direction?null!=nextSlide?nextSlide:this.allSlides[this.allSlides.length-1]:null!=nextSlide?nextSlide:this.allSlides[0],this.valueChange.emit(nextSlide.value)):this.valueChange.emit(null!==(_a=null==nextSlide?void 0:nextSlide.value)&&void 0!==_a?_a:this.currentSlideEl.value)}},{key:"render",value:function render(){var _this3=this;return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)(_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.H,{class:"ino-carousel"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"ino-carousel__container"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"ino-carousel__slides"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("slot",{onSlotchange:this.onSlotChanged})),!this.hideButtons&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("ino-icon-button",{icon:"arrow_left",onClick:function onClick(){return _this3.emitNextSlide("previous")}})),!this.hideButtons&&(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("ino-icon-button",{icon:"arrow_right",onClick:function onClick(){return _this3.emitNextSlide("next")}})),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"ino-carousel__stepper"},this.allSlides.map((function(el){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_14__.c)({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":el===_this3.currentSlideEl}),onClick:function onClick(){return _this3.valueChange.emit(el.value)}})})))))}},{key:"el",get:function get(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_13__.g)(this)}}],[{key:"watchers",get:function get(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}}]),InoCarousel}();InoCarousel.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms);width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#DFDEE6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}"}}]);