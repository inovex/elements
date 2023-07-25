/*! For license information please see 8796.f38c963a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[8796],{"../elements/dist/esm/_commonjsHelpers-212d567a.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule,g:()=>getDefaultExportFromCjs});__webpack_require__("../../node_modules/core-js/modules/es.global-this.js");var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function getDefaultExportFromCjs(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}function createCommonjsModule(fn,basedir,module){return fn(module={path:basedir,exports:{},require:function require(path,base){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},module.exports),module.exports}},"../elements/dist/esm/index-796d4780.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__("../../node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("../../node_modules/core-js/modules/es.array.join.js");var classnames=(0,__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js").c)((function(module){!function(){var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):window.classNames=classNames}()}))},"../elements/dist/esm/ino-avatar.entry.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_avatar:()=>Avatar});__webpack_require__("../../node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.js"),__webpack_require__("../../node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("../../node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("../../node_modules/core-js/modules/es.object.define-property.js");var _index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("../elements/dist/esm/index-871ffba6.js"),_index_796d4780_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("../elements/dist/esm/index-796d4780.js");__webpack_require__("../elements/dist/esm/_commonjsHelpers-212d567a.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var Avatar=function(){function Avatar(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Avatar),(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.r)(this,hostRef),this.initials="",this.src="",this.interactive=!1,this.variant="solid"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Avatar,[{key:"render",value:function render(){var avatarClasses=(0,_index_796d4780_js__WEBPACK_IMPORTED_MODULE_8__.c)({"ino-avatar":!0,"ino-avatar--interactive":this.interactive,"ino-avatar--dashed":"dashed"===this.variant,"ino-avatar--solid":"solid"===this.variant}),SOLID_SVG=(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"142",height:"142",viewBox:"0 0 142 142",fill:"none",class:"ino-avatar__border"},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("circle",{cx:"71",cy:"71",r:"69",stroke:"url(#solidGradient)","stroke-width":"3"}),(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("defs",null,(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("radialGradient",{id:"solidGradient",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(71 71) rotate(90) scale(69)"},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("stop",{offset:"0.499373","stop-color":"#4655FF"}),(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("stop",{offset:"1","stop-color":"#D6E0FF"})))),DASHED_SVG=(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"142",height:"142",viewBox:"0 0 142 142",fill:"none",class:"ino-avatar__border"},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("path",{d:"M2 71C2 32.8924 32.8924 2 71 2C87.0311 2 101.785 7.46709 113.5 16.6385M16 112.672C21.0788 119.364 27.3511 125.102 34.5 129.566M49 136.419C55.9095 138.741 63.3078 140 71 140C109.108 140 140 109.108 140 71C140 57.8079 136.298 45.4805 129.876 35",stroke:"url(#dashedGradient)","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}),(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("defs",null,(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("radialGradient",{id:"dashedGradient",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(71 71) rotate(90) scale(69)"},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("stop",{offset:"0.5","stop-color":"#4655FF"}),(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("stop",{offset:"1","stop-color":"#D6E0FF"}))));return(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:avatarClasses},"solid"===this.variant?SOLID_SVG:DASHED_SVG,this.src?(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"ino-avatar__image image"},(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"ino-avatar__image-inner",style:{backgroundImage:"url("+this.src+")"}})):(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.h)("div",{class:"ino-avatar__image initials"},this.initials))}},{key:"el",get:function get(){return(0,_index_871ffba6_js__WEBPACK_IMPORTED_MODULE_7__.g)(this)}}]),Avatar}();Avatar.style='@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(60deg)}}@keyframes rotateBack{0%{transform:rotate(60deg)}100%{transform:rotate(0deg)}}.ino-avatar{--avatar-size:var(--ino-avatar-size, 138px);display:flex;justify-content:center;align-items:center;width:var(--avatar-size);height:var(--avatar-size);color:#4655ff;font-size:calc(var(--avatar-size) * 0.3);font-weight:600;position:relative}.ino-avatar--interactive .ino-avatar__border path,.ino-avatar--interactive .ino-avatar__border circle{stroke-width:2%;transition:stroke-width 0.3s ease-in-out}.ino-avatar--interactive .ino-avatar__image-inner::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(0deg, rgba(190, 204, 255, 0) 0%, rgba(190, 204, 255, 0.76) 100%);border-radius:50%;opacity:0;transition:opacity 0.3s ease-in-out}.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border{transform:rotate(60deg)}.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border path,.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__border circle{stroke-width:4%}.ino-avatar--interactive.ino-avatar--dashed:hover .ino-avatar__image-inner::after{opacity:1}.ino-avatar__image{display:flex;justify-content:center;align-items:center;width:87%;height:87%;border-radius:50%;box-sizing:border-box;position:relative}.ino-avatar__image.initials{background:#e2ecff}.ino-avatar__image-inner{width:100%;height:100%;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:50%;position:relative}.ino-avatar__border{display:flex;justify-content:center;align-items:center;position:absolute;top:0;left:0;width:100%;height:100%;overflow:visible;will-change:transform, stroke-width;transform:rotate(0deg);transition:transform 250ms ease-in-out}.ino-avatar__border path,.ino-avatar__border circle{stroke-width:2%;transition:stroke-width 0.3s ease-in-out}'}}]);