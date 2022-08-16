(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1392:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ino_icon",(function(){return Icon}));var CACHED_MAP,_index_980f9855_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(172);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}var getSrc=function getSrc(src){return isStr(src)&&(src=src.trim(),isSrc(src))?src:null};function getUrl(src,inoIcon){var url=getSrc(src);return url||((url=function getName(name){if(name&&!isSrc(name))return name}(inoIcon))?function getNamedUrl(name){var url=function getIconMap(){if(!CACHED_MAP){var win=window;win.inoIcons=win.inoIcons||{},CACHED_MAP=win.inoIcons.map=win.inoIcons.map||new Map}return CACHED_MAP}().get(name);if(url)return url;return Object(_index_980f9855_js__WEBPACK_IMPORTED_MODULE_0__.e)("./icon-assets/SVG/".concat(name,".svg"))}(url):(url=getSrc(inoIcon))||null)}var isSrc=function isSrc(str){return str.length>0&&/(\/|\.)/.test(str)},isStr=function isStr(val){return"string"==typeof val},isValid=function isValid(elm){if(1===elm.nodeType){if("script"===elm.nodeName.toLowerCase())return!1;for(var i=0;i<elm.attributes.length;i++){var val=elm.attributes[i].value;if(isStr(val)&&0===val.toLowerCase().indexOf("on"))return!1}for(var _i=0;_i<elm.childNodes.length;_i++)if(!isValid(elm.childNodes[_i]))return!1}return!0},inoiconContent=new Map,requests=new Map,getSvgContent=function getSvgContent(url){var req=requests.get(url);return void 0===req&&(req=fetch(url).then((function(rsp){if(rsp.ok)return rsp.text().then((function(svgContent){inoiconContent.set(url,function validateContent(svgContent){if(svgContent){var div=document.createElement("div");div.innerHTML=svgContent;for(var i=div.childNodes.length-1;i>=0;i--)"svg"!==div.childNodes[i].nodeName.toLowerCase()&&div.removeChild(div.childNodes[i]);var svgElm=div.firstElementChild;if(svgElm&&"svg"===svgElm.nodeName.toLowerCase()){var svgClass=svgElm.getAttribute("class")||"";if(svgElm.setAttribute("class",(svgClass+" s-ion-icon").trim()),isValid(svgElm))return div.innerHTML}}return""}(svgContent))}));inoiconContent.set(url,"")})),requests.set(url,req)),req},SvgParser=function(){function SvgParser(){_classCallCheck(this,SvgParser)}return _createClass(SvgParser,null,[{key:"setSvgTitle",value:function setSvgTitle(svgContent,title){var parsedSVG=this.parser.parseFromString(svgContent,"image/svg+xml"),titleTag=parsedSVG.querySelector("title");return titleTag&&(titleTag.innerHTML=title),this.serializer.serializeToString(parsedSVG)}},{key:"removeSvgTitle",value:function removeSvgTitle(svgContent){var parsedSVG=this.parser.parseFromString(svgContent,"image/svg+xml"),titleTag=parsedSVG.querySelector("title");return titleTag&&titleTag.remove(),this.serializer.serializeToString(parsedSVG)}}]),SvgParser}();SvgParser.parser=new DOMParser,SvgParser.serializer=new XMLSerializer;var Icon=function(){function Icon(hostRef){_classCallCheck(this,Icon),Object(_index_980f9855_js__WEBPACK_IMPORTED_MODULE_0__.h)(this,hostRef),this.clickEl=Object(_index_980f9855_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"clickEl",7)}return _createClass(Icon,[{key:"inoIconChanged",value:function inoIconChanged(){this.loadIcon()}},{key:"watchHandler",value:function watchHandler(content){content&&(this.svgContent=this.svgTitle?SvgParser.setSvgTitle(this.svgContent,this.svgTitle):SvgParser.removeSvgTitle(this.svgContent))}},{key:"componentWillLoad",value:function componentWillLoad(){this.loadIcon()}},{key:"loadIcon",value:function loadIcon(){var _this=this,url=getUrl(this.src,this.inoIcon);url&&(inoiconContent.has(url)?this.svgContent=inoiconContent.get(url):getSvgContent(url).then((function(){return _this.svgContent=inoiconContent.get(url)})))}},{key:"handleClick",value:function handleClick(e){e.preventDefault(),this.clickEl.emit(!0)}},{key:"handleKeyPress",value:function handleKeyPress(e){"Enter"===e.code&&(e.preventDefault(),this.clickEl.emit(!0))}},{key:"render",value:function render(){var _this2=this;if(this.svgContent){var iconProps={};return this.inoClickable&&(iconProps={onClick:function onClick(e){return _this2.handleClick(e)},onKeyPress:function onKeyPress(e){return _this2.handleKeyPress(e)},tabindex:0,role:"button"}),Object(_index_980f9855_js__WEBPACK_IMPORTED_MODULE_0__.g)(_index_980f9855_js__WEBPACK_IMPORTED_MODULE_0__.a,null,Object(_index_980f9855_js__WEBPACK_IMPORTED_MODULE_0__.g)("i",Object.assign({innerHTML:this.svgContent},iconProps)))}}}],[{key:"assetsDirs",get:function get(){return["icon-assets/SVG"]}},{key:"watchers",get:function get(){return{inoIcon:["inoIconChanged"],svgContent:["watchHandler"]}}}]),Icon}();Icon.style='.mdc-text-field__icon{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}:host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em);--icon-color:var(--ino-icon-color-primary, var(--ino-global-primary-color, #3d40f5))}:host([ino-color-secondary]):host(:not([ino-color-secondary=false])){--icon-color:var(--ino-icon-color-secondary, var(--ino-global-secondary-color, #9ccd00))}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center}:host i[role=button]{cursor:pointer}:host svg{height:var(--icon-height);width:var(--icon-width)}:host svg path{stroke:var(--icon-color)}:host([ino-icon=arrow_right]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=arrow_left]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=arrow_up]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=arrow_down]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=call]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=copy]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=delete]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=display]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=edit]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=help]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=partner]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=remove]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=sort_az]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=sort_down]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=sort_up]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=sort_za]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=web]) svg path{stroke:none;fill:var(--icon-color)}:host([ino-icon=checkmark]) svg path:nth-child(2){stroke:var(--icon-color);fill:none}:host([ino-icon=warning]) svg path:nth-child(2){stroke:var(--icon-color);fill:none}'}}]);
//# sourceMappingURL=42.1cda42a8754ad9415e79.bundle.js.map