"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4257],{89:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return commonjsGlobal},c:function(){return createCommonjsModule},g:function(){return getDefaultExportFromCjs}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},6373:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return classnames}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var classnames=(0,__webpack_require__(89).c)(function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()})},4257:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_carousel:function(){return InoCarousel}});var _index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8929),_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6373);__webpack_require__(89);let InoCarousel=class{constructor(hostRef){(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.valueChange=(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"valueChange",7),this.allSlides=[],this.currentSlideEl=null,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1,this.onSlotChanged=()=>{this.allSlides=Array.from(this.el.getElementsByTagName("ino-carousel-slide")),0===this.allSlides.length&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")}}valueChanged(newVal){let nextSlide=this.allSlides.find(slide=>slide.value===newVal);if(!nextSlide)throw Error(`<ino-carousel-slide> with value '${newVal}' could not be found in the children of <ino-carousel>`);this.currentSlideEl&&(this.currentSlideEl.selected=!1),nextSlide.selected=!0,this.currentSlideEl=nextSlide,this.setupTimer()}onTimerPropsChange(){this.setupTimer()}componentDidLoad(){this.setupTimer(),this.onSlotChanged(),null==this.value?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}disconnectedCallback(){clearInterval(this.timer)}setupTimer(){clearInterval(this.timer),this.autoplay&&(this.timer=setInterval(()=>this.emitNextSlide(this.reverse?"previous":"next"),this.intermission))}emitNextSlide(direction="next"){var _a;let nextSlide="next"===direction?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;if(!this.infinite){this.valueChange.emit(null!==(_a=null==nextSlide?void 0:nextSlide.value)&&void 0!==_a?_a:this.currentSlideEl.value);return}nextSlide="previous"===direction?null!=nextSlide?nextSlide:this.allSlides[this.allSlides.length-1]:null!=nextSlide?nextSlide:this.allSlides[0],this.valueChange.emit(nextSlide.value)}render(){return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:"ino-carousel"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__container"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__slides"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",{onSlotchange:this.onSlotChanged})),!this.hideButtons&&(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitNextSlide("previous")})),!this.hideButtons&&(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitNextSlide("next")})),(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel__stepper"},this.allSlides.map(el=>(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:(0,_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_1__.c)({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":el===this.currentSlideEl}),onClick:()=>this.valueChange.emit(el.value)})))))}get el(){return(0,_index_dbb9ab19_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}};InoCarousel.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms);width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#DFDEE6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}"}}]);