/*! For license information please see 7766.e3013f55.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[7766],{12419:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>commonjsGlobal,c:()=>createCommonjsModule});__webpack_require__(4173);var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==__webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{};function createCommonjsModule(o,e,n){return o(n={path:e,exports:{},require:function require(o,e){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},61383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>classnames});__webpack_require__(18145),__webpack_require__(16781),__webpack_require__(34115),__webpack_require__(634),__webpack_require__(58188),__webpack_require__(20796),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}var classnames=(0,__webpack_require__(12419).c)((function(e){!function(){var r={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var n=_typeof(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var t=s.apply(null,o);t&&e.push(t)}else if("object"===n)for(var i in o)r.call(o,i)&&o[i]&&e.push(i)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):window.classNames=s}()}))},57766:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_tooltip:()=>Tooltip});__webpack_require__(73439),__webpack_require__(58188),__webpack_require__(34115),__webpack_require__(634),__webpack_require__(20796),__webpack_require__(28673),__webpack_require__(15735),__webpack_require__(6886),__webpack_require__(54226),__webpack_require__(65584),__webpack_require__(39529),__webpack_require__(31235),__webpack_require__(95094);var _index_07dfb941_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(79470),_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__(12419),__webpack_require__(61383)),_tippy_esm_b3182faf_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(98095),__awaiter=function(t,e,r,o){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,i){function a(t){try{c(o.next(t))}catch(e){i(e)}}function s(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){t.done?r(t.value):n(t.value).then(a,s)}c((o=o.apply(t,e||[])).next())}))},__generator=function(t,e){var o,n,i,a,r={label:0,sent:function sent(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return c([t,e])}}function c(a){if(o)throw new TypeError("Generator is already executing.");for(;r;)try{if(o=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,n=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=e.call(t,r)}catch(s){a=[6,s],n=0}finally{o=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},Tooltip=function(){function t(t){var e=this;(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_13__.r)(this,t),this.colorScheme="primary",this.placement="auto",this.trigger="mouseenter focus",this.retrieveTarget=function(){return e.for?document.getElementById(e.for):e.el.parentElement}}return t.prototype.placementChanged=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.create()];case 1:return t.sent(),[2]}}))}))},t.prototype.forChanged=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.create()];case 1:return t.sent(),[2]}}))}))},t.prototype.triggerChanged=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.create()];case 1:return t.sent(),[2]}}))}))},t.prototype.getTippyInstance=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.tooltipInstance]}))}))},t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.create()];case 1:return t.sent(),[2]}}))}))},t.prototype.create=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dispose()];case 1:return e.sent(),this.target=this.retrieveTarget(),this.target?[3,3]:[4,new Promise((function(t){return setTimeout(t,1e3)}))];case 2:e.sent(),this.target=this.retrieveTarget(),e.label=3;case 3:if(!this.target)throw new Error("Target with the ID '"+this.for+"' could not be found in this document.");return t={content:this.el,duration:100,placement:this.placement,trigger:this.trigger},this.tooltipInstance=(0,_tippy_esm_b3182faf_js__WEBPACK_IMPORTED_MODULE_16__.t)(this.target,t),this.target.addEventListener("keyup",this.onEnterTarget.bind(this)),this.target.addEventListener("blur",this.onLeaveTarget.bind(this),!0),this.trigger.includes("hover")&&this.target.addEventListener("mouseleave",this.onLeaveTarget.bind(this)),[2]}}))}))},t.prototype.dispose=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return this.tooltipInstance?[4,this.tooltipInstance.destroy()]:[3,2];case 1:t.sent(),this.target.removeEventListener("keyup",this.onEnterTarget.bind(this)),this.target.removeEventListener("blur",this.onLeaveTarget.bind(this),!0),this.target.removeEventListener("mouseleave",this.onLeaveTarget.bind(this)),t.label=2;case 2:return[2]}}))}))},t.prototype.onEnterTarget=function(t){"Tab"!==t.code||this.trigger.includes("click")||this.tooltipInstance.show(),"Escape"===t.code&&this.tooltipInstance.hide()},t.prototype.onLeaveTarget=function(){this.tooltipInstance.hide()},t.prototype.render=function(){var t=(0,_index_e8aa1b36_js__WEBPACK_IMPORTED_MODULE_15__.c)("ino-tooltip--color-scheme-"+this.colorScheme);return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_13__.h)(_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_13__.H,{class:t},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"ino-tooltip__composer",role:"tooltip"},(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_13__.h)("div",{class:"ino-tooltip__inner"},this.label)))},Object.defineProperty(t.prototype,"el",{get:function get(){return(0,_index_07dfb941_js__WEBPACK_IMPORTED_MODULE_13__.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function get(){return{placement:["placementChanged"],for:["forChanged"],trigger:["triggerChanged"]}},enumerable:!1,configurable:!0}),t}();Tooltip.style="ino-tooltip .ino-tooltip__composer{font-size:0.8rem;text-align:center;letter-spacing:0;padding:4px 8px;border-radius:6px}ino-tooltip.ino-tooltip--color-scheme-primary .ino-tooltip__composer{font-family:Lato, Verdana, sans-serif;font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-secondary .ino-tooltip__composer{font-family:Lato, Verdana, sans-serif;font-size:1rem;font-weight:400;z-index:9999;background:#bbd962;color:#fff;-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-light .ino-tooltip__composer{font-family:Lato, Verdana, sans-serif;font-size:1rem;font-weight:400;z-index:9999;background:#e7e7e7;color:#000;-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-transparent .ino-tooltip__composer{font-family:Lato, Verdana, sans-serif;font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;-webkit-box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}"},65584:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({target:"Function",proto:!0},{bind:__webpack_require__(94128)})},4173:(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{__webpack_require__(23103)({global:!0},{globalThis:__webpack_require__(9859)})}}]);
//# sourceMappingURL=7766.e3013f55.iframe.bundle.js.map