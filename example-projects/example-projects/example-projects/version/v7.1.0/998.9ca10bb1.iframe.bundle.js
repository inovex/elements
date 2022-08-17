/*! For license information please see 998.9ca10bb1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[998],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-b7e5b0c5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)&&arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}else if("object"===argType)for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-carousel.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_carousel:()=>InoCarousel});__webpack_require__("../../node_modules/core-js/modules/es.array.reverse.js"),__webpack_require__("../../node_modules/core-js/modules/web.timers.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.from.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/index-5082bac1.js"),_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("../elements/dist/esm/index-b7e5b0c5.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var ArrowDirections;!function(ArrowDirections){ArrowDirections[ArrowDirections.LEFT=0]="LEFT",ArrowDirections[ArrowDirections.RIGHT=1]="RIGHT"}(ArrowDirections||(ArrowDirections={}));var InoCarousel=function(){function InoCarousel(hostRef){var _this=this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InoCarousel),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,hostRef),this.valueChange=(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.c)(this,"valueChange",7),this.currentSlide=0,this.slideCounter=1,this.autoplay=!1,this.animated=!1,this.hideButtons=!1,this.infinite=!1,this.intermission=5e3,this.reverse=!1,this.addAnimationToSlide=function(slide){_this.animated&&(slide.classList.contains("ino-carousel--animated")||slide.classList.add("ino-carousel--animated"))},this.configureSlides=function(){_this.slides.length<1||_this.selectSlide(_this.value)||_this.slides[_this.currentSlide].classList.add("ino-carousel-slide--selected")},this.configureAutoplay=function(){_this.slides.length<1||(_this.autoplay?_this.timer=setInterval(_this.nextSlide,_this.intermission):clearInterval(_this.timer))},this.nextSlide=function(){if(_this.slides.length<1)throw new Error("There are no slides to display");_this.slides[_this.currentSlide].classList.remove("ino-carousel-slide--selected"),_this.addAnimationToSlide(_this.slides[_this.currentSlide]),_this.currentSlide=_this.getNextSlide(),_this.addAnimationToSlide(_this.slides[_this.currentSlide]),_this.slides[_this.currentSlide].classList.add("ino-carousel-slide--selected"),_this.slideCounter++,!_this.infinite&&_this.slideCounter>=_this.slides.length&&(_this.slideCounter=1,clearInterval(_this.timer))},this.mod=function(a,b){return(a%b+b)%b},this.getNextSlide=function(){return _this.reverse?_this.mod(_this.currentSlide-1,_this.slides.length):_this.mod(_this.currentSlide+1,_this.slides.length)}}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(InoCarousel,[{key:"valueChanged",value:function valueChanged(newVal){this.addAnimationToSlide(this.slides[this.currentSlide]),this.selectSlide(newVal),this.addAnimationToSlide(this.slides[this.currentSlide])}},{key:"autoplayChanged",value:function autoplayChanged(){this.configureAutoplay()}},{key:"componentDidLoad",value:function componentDidLoad(){this.slides=this.getSlides(),this.configureSlides(),this.configureAutoplay()}},{key:"selectSlide",value:function selectSlide(value){var _this2=this,slideSelected=!1;return this.slides.forEach((function(slide){value===slide.value?(slide.classList.add("ino-carousel-slide--selected"),_this2.currentSlide=_this2.slides.indexOf(slide),slideSelected=!0):slide.classList.remove("ino-carousel-slide--selected")})),slideSelected}},{key:"emitSlideChange",value:function emitSlideChange(iconArrow){var _a,_b,allSlides=this.getSlides();if(allSlides&&0!==allSlides.length){var carouselSlide=this.getSlides()[this.currentSlide];if(carouselSlide){var nextSlide;switch(iconArrow){case ArrowDirections.RIGHT:nextSlide=null!==(_a=carouselSlide.nextElementSibling)&&void 0!==_a?_a:allSlides[0];break;case ArrowDirections.LEFT:nextSlide=null!==(_b=carouselSlide.previousElementSibling)&&void 0!==_b?_b:allSlides[allSlides.length-1]}this.valueChange.emit(nextSlide.value)}else this.valueChange.emit(allSlides[0].value)}}},{key:"getSlides",value:function getSlides(){return Array.from(this.el.querySelectorAll("ino-carousel-slide"))}},{key:"render",value:function render(){var _this3=this,classes=(0,_index_b7e5b0c5_js__WEBPACK_IMPORTED_MODULE_9__.c)({"ino-carousel":!0,"ino-carousel--no-buttons":this.hideButtons});return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.H,{value:this.value},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:classes},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"ino-carousel__container"},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null)),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"ino-carousel__left-arrow"},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)("ino-icon-button",{icon:"arrow_left",onClick:function onClick(){return _this3.emitSlideChange(ArrowDirections.LEFT)}})),(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"ino-carousel__right-arrow"},(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.h)("ino-icon-button",{icon:"arrow_right",onClick:function onClick(){return _this3.emitSlideChange(ArrowDirections.RIGHT)}}))))}},{key:"el",get:function get(){return(0,_index_5082bac1_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)}}],[{key:"watchers",get:function get(){return{value:["valueChanged"],autoplay:["autoplayChanged"]}}}]),InoCarousel}();InoCarousel.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-width:var(--ino-carousel-width, 700px);--carousel-height:var(--ino-carousel-height, 400px);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms)}ino-carousel .ino-carousel{position:relative;height:var(--carousel-height);width:var(--carousel-width);overflow:hidden}ino-carousel .ino-carousel__left-arrow,ino-carousel .ino-carousel__right-arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}ino-carousel .ino-carousel__left-arrow ino-icon,ino-carousel .ino-carousel__right-arrow ino-icon{--icon-color:var(--carousel-icon-color)}ino-carousel .ino-carousel--no-buttons .ino-carousel__left-arrow,ino-carousel .ino-carousel--no-buttons .ino-carousel__right-arrow{display:none}ino-carousel .ino-carousel__right-arrow{right:16px}ino-carousel .ino-carousel__left-arrow{left:16px}ino-carousel .ino-carousel__container{height:100%}ino-carousel .ino-carousel--animated.ino-carousel-slide--selected{animation:fadeIn var(--carousel-animation-duration)}@keyframes fadeIn{from{opacity:0}to{opacity:1}}ino-carousel .ino-carousel--animated:not(.ino-carousel-slide--selected){animation:fadeOut var(--carousel-animation-duration)}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"}}]);
//# sourceMappingURL=998.9ca10bb1.iframe.bundle.js.map