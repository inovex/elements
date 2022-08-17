(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1401:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ino_icon",(function(){return Icon}));var CACHED_MAP,_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62);var getSrc=function getSrc(e){return isStr(e)&&(e=e.trim(),isSrc(e))?e:null};function getUrl(e,t){var n=getSrc(e);return n||((n=function getName(e){if(e&&!isSrc(e))return e}(t))?function getNamedUrl(e){var t=function getIconMap(){if(!CACHED_MAP){var e=window;e.inoIcons=e.inoIcons||{},CACHED_MAP=e.inoIcons.map=e.inoIcons.map||new Map}return CACHED_MAP}().get(e);if(t)return t;return Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.f)("./icon-assets/SVG/"+e+".svg")}(n):(n=getSrc(t))||null)}var isSrc=function isSrc(e){return e.length>0&&/(\/|\.)/.test(e)},isStr=function isStr(e){return"string"==typeof e},isValid=function isValid(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var t=0;t<e.attributes.length;t++){var n=e.attributes[t].value;if(isStr(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(t=0;t<e.childNodes.length;t++)if(!isValid(e.childNodes[t]))return!1}return!0},inoiconContent=new Map,requests=new Map,getSvgContent=function getSvgContent(e){var t=requests.get(e);return void 0===t&&(t=fetch(e).then((function(t){if(t.ok)return t.text().then((function(t){inoiconContent.set(e,function validateContent(e){if(e){var t=document.createElement("div");t.innerHTML=e;for(var n=t.childNodes.length-1;n>=0;n--)"svg"!==t.childNodes[n].nodeName.toLowerCase()&&t.removeChild(t.childNodes[n]);var r=t.firstElementChild;if(r&&"svg"===r.nodeName.toLowerCase()){var i=r.getAttribute("class")||"";if(r.setAttribute("class",(i+" s-ion-icon").trim()),isValid(r))return t.innerHTML}}return""}(t))}));inoiconContent.set(e,"")})),requests.set(e,t)),t},SvgParser=function(){function e(){}return e.setSvgTitle=function(e,t){var n=this.parser.parseFromString(e,"image/svg+xml"),r=n.querySelector("title");return r&&(r.innerHTML=t),this.serializer.serializeToString(n)},e.removeSvgTitle=function(e){var t=this.parser.parseFromString(e,"image/svg+xml"),n=t.querySelector("title");return n&&n.remove(),this.serializer.serializeToString(t)},e}();SvgParser.parser=new DOMParser,SvgParser.serializer=new XMLSerializer;var Icon=function(){function e(e){Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.j)(this,e),this.clickEl=Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"clickEl",7)}return e.prototype.inoIconChanged=function(){this.loadIcon()},e.prototype.watchHandler=function(e){e&&(this.svgContent=this.svgTitle?SvgParser.setSvgTitle(this.svgContent,this.svgTitle):SvgParser.removeSvgTitle(this.svgContent))},e.prototype.componentWillLoad=function(){this.loadIcon()},e.prototype.loadIcon=function(){var e=this,t=getUrl(this.src,this.inoIcon);t&&(inoiconContent.has(t)?this.svgContent=inoiconContent.get(t):getSvgContent(t).then((function(){return e.svgContent=inoiconContent.get(t)})))},e.prototype.handleClick=function(e){e.preventDefault(),this.clickEl.emit(!0)},e.prototype.handleKeyPress=function(e){"Enter"===e.code&&(e.preventDefault(),this.clickEl.emit(!0))},e.prototype.render=function(){var e=this;if(this.svgContent){var t={};return this.inoClickable&&(t={onClick:function onClick(t){return e.handleClick(t)},onKeyPress:function onKeyPress(t){return e.handleKeyPress(t)},tabindex:0,role:"button"}),Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.b,null,Object(_index_6bbfb3d9_js__WEBPACK_IMPORTED_MODULE_0__.h)("i",Object.assign({innerHTML:this.svgContent},t)))}},Object.defineProperty(e,"assetsDirs",{get:function get(){return["icon-assets/SVG"]},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function get(){return{inoIcon:["inoIconChanged"],svgContent:["watchHandler"]}},enumerable:!1,configurable:!0}),e}();Icon.style='.mdc-text-field__icon{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}:host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em);--icon-color:var(--ino-icon-color-primary, var(--ino-global-primary-color, #3d40f5))}:host([ino-color-secondary]):host(:not([ino-color-secondary=false])){--icon-color:var(--ino-icon-color-secondary, var(--ino-global-secondary-color, #9ccd00))}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}:host i{font-size:inherit;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}'}}]);
//# sourceMappingURL=43.3f0c39cd03ea41cb8f66.bundle.js.map