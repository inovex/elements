/*! For license information please see 7546.810e305a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[7546],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781),__webpack_require__(34115),__webpack_require__(634),__webpack_require__(58188),__webpack_require__(20796),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=_typeof(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},7546:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_carousel:()=>InoCarousel});__webpack_require__(49992),__webpack_require__(54226),__webpack_require__(38695),__webpack_require__(1939),__webpack_require__(74083),__webpack_require__(27233),__webpack_require__(28673),__webpack_require__(95094);var _index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(79470),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_10__=(__webpack_require__(12419),__webpack_require__(61383)),InoCarousel=function(){function e(e){var i=this;(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.r)(this,e),this.currentSlide=0,this.slideCounter=1,this.autoplay=!1,this.animated=!1,this.hideButtons=!1,this.infinite=!1,this.intermission=5e3,this.reverse=!1,this.addAnimationToSlide=function(e){i.animated&&(e.classList.contains("ino-carousel--animated")||e.classList.add("ino-carousel--animated"))},this.configureSlides=function(){i.slides.length<1||i.selectSlide(i.value)||i.slides[i.currentSlide].classList.add("ino-carousel-slide--selected")},this.configureAutoplay=function(){i.slides.length<1||(i.autoplay?i.timer=setInterval(i.nextSlide,i.intermission):clearInterval(i.timer))},this.nextSlide=function(){if(i.slides.length<1)throw new Error("There are no slides to display");i.slides[i.currentSlide].classList.remove("ino-carousel-slide--selected"),i.addAnimationToSlide(i.slides[i.currentSlide]),i.currentSlide=i.getNextSlide(),i.addAnimationToSlide(i.slides[i.currentSlide]),i.slides[i.currentSlide].classList.add("ino-carousel-slide--selected"),i.slideCounter++,!i.infinite&&i.slideCounter>=i.slides.length&&(i.slideCounter=1,clearInterval(i.timer))},this.mod=function(e,i){return(e%i+i)%i},this.getNextSlide=function(){return i.reverse?i.mod(i.currentSlide-1,i.slides.length):i.mod(i.currentSlide+1,i.slides.length)}}return e.prototype.valueChanged=function(e){this.addAnimationToSlide(this.slides[this.currentSlide]),this.selectSlide(e),this.addAnimationToSlide(this.slides[this.currentSlide])},e.prototype.autoplayChanged=function(){this.configureAutoplay()},e.prototype.componentDidLoad=function(){this.slides=this.getSlides(),this.configureSlides(),this.configureAutoplay()},e.prototype.selectSlide=function(e){var i=this,o=!1;return this.slides.forEach((function(t){e===t.value?(t.classList.add("ino-carousel-slide--selected"),i.currentSlide=i.slides.indexOf(t),o=!0):t.classList.remove("ino-carousel-slide--selected")})),o},e.prototype.getSlides=function(){return Array.from(this.el.querySelectorAll("ino-carousel-slide"))},e.prototype.render=function(){var e=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_10__.c)({"ino-carousel":!0,"ino-carousel--no-buttons":this.hideButtons});return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.H,{value:this.value},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:e},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"ino-carousel__container"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)("slot",null)),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"ino-carousel__left-arrow"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)("ino-icon-button",{icon:"arrow_left"})),(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)("div",{class:"ino-carousel__right-arrow"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.h)("ino-icon-button",{icon:"arrow_right"}))))},Object.defineProperty(e.prototype,"el",{get:function get(){return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_8__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{value:["valueChanged"],autoplay:["autoplayChanged"]}},enumerable:!1,configurable:!0}),e}();InoCarousel.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-width:var(--ino-carousel-width, 700px);--carousel-height:var(--ino-carousel-height, 400px);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms)}ino-carousel .ino-carousel{position:relative;height:var(--carousel-height);width:var(--carousel-width);overflow:hidden}ino-carousel .ino-carousel__left-arrow,ino-carousel .ino-carousel__right-arrow{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;bottom:0;-ms-flex-direction:column;flex-direction:column;height:100%}ino-carousel .ino-carousel__left-arrow ino-icon,ino-carousel .ino-carousel__right-arrow ino-icon{--icon-color:var(--carousel-icon-color)}ino-carousel .ino-carousel--no-buttons .ino-carousel__left-arrow,ino-carousel .ino-carousel--no-buttons .ino-carousel__right-arrow{display:none}ino-carousel .ino-carousel__right-arrow{right:16px}ino-carousel .ino-carousel__left-arrow{left:16px}ino-carousel .ino-carousel__container{height:100%}ino-carousel .ino-carousel--animated.ino-carousel-slide--selected{-webkit-animation:fadeIn var(--carousel-animation-duration);animation:fadeIn var(--carousel-animation-duration)}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}ino-carousel .ino-carousel--animated:not(.ino-carousel-slide--selected){-webkit-animation:fadeOut var(--carousel-animation-duration);animation:fadeOut var(--carousel-animation-duration)}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}"},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=7546.810e305a.iframe.bundle.js.map