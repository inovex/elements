(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1395:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ino_input_file",(function(){return InputFile}));var _index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(172);function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var InputFile=function(){function InputFile(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InputFile),Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.h)(this,hostRef),this.changeFile=Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.d)(this,"changeFile",7),this.inoLabel="Select file"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(InputFile,[{key:"selectFiles",value:function selectFiles(){this.el.querySelector(".ino-input-file__native-element").click()}},{key:"onFileChange",value:function onFileChange(e){var files=e.target.files;this.changeFile.emit({e:e,files:Array.from(files)})}},{key:"render",value:function render(){var _this=this;return Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.f)(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.a,null,Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.f)("div",{class:"ino-input-file__composer"},Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.f)("ino-button",{class:"ino-input-file__button",name:"file-paths",autoFocus:this.autoFocus,disabled:this.disabled,onClick:function onClick(_){return _this.selectFiles()},"ino-icon-leading":!0},Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.f)("ino-icon",{"ino-icon":"upload",slot:"ino-icon-leading"}),this.inoLabel),Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.f)("input",{class:"ino-input-file__native-element",accept:this.accept,disabled:this.disabled,multiple:this.multiple,name:this.name,required:this.required,type:"file","aria-hidden":"true",onChange:function onChange(e){return _this.onFileChange(e)}})))}},{key:"el",get:function get(){return Object(_index_5ddb593e_js__WEBPACK_IMPORTED_MODULE_0__.e)(this)}}]),InputFile}();InputFile.style="ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}"}}]);
//# sourceMappingURL=42.7e44306017abb2c688d2.bundle.js.map