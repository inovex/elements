"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8433],{89:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{a:function(){return commonjsGlobal},c:function(){return createCommonjsModule},g:function(){return getDefaultExportFromCjs}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function(path,base){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},939:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{c:function(){return classnames}});/*!
 * Crafted with ❤ by inovex GmbH
 */ var classnames=(0,__webpack_require__(89).c)(function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()})},8433:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_carousel_slide:function(){return InoCarouselSlide}});var _index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5895),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(939);__webpack_require__(89);let InoCarouselSlide=class{constructor(hostRef){(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef)}render(){return(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.H,{class:(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_1__.c)({"ino-carousel-slide":!0,"ino-carousel-slide--selected":this.selected})},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.h)("div",{class:"ino-carousel-slide__image",style:{"background-image":`url(${this.src})`}}))}get el(){return(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}};InoCarouselSlide.style=".ino-carousel-slide{grid-row:1;grid-column:1;opacity:0;transition:opacity var(--carousel-animation-duration)}.ino-carousel-slide__image{background-size:cover;background-position:50%;width:100%;height:100%}.ino-carousel-slide.ino-carousel-slide--selected{opacity:1}"}}]);