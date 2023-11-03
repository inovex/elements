"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5235],{5235:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ino_currency_input:function(){return CurrencyInput}});var _index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(9444);let inoElementsConfig=new /*!
 * Crafted with ❤ by inovex GmbH
 */ class{get(key,fallback){let value=this.storage&&this.storage[key];return null!=value?value:fallback}patch(key,value){this.storage&&this.storage[key]&&(this.storage[key]=value)}get storage(){if("undefined"!=typeof window){let configWrapper=window.inoElements;if(configWrapper&&configWrapper.config)return configWrapper.config}return null}},CurrencyInput=class{constructor(hostRef){(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.r)(this,hostRef),this.valueChange=(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.c)(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=e=>{let value=e.detail;Number.isNaN(value=value?this.fromCurrencyString(value):null)||(this.hiddenValue=value,this.valueChange.emit(value)),e.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{let value=this.hiddenInputEl.value;value&&"null"!=value&&(this.inoInputEl.value=this.toCurrencyString(value))},this.currencyLocale=void 0,this.value=void 0}valueChanged(value){var _a;(value||0===value)&&"null"!==value?value!=(null===(_a=this.hiddenInputEl)||void 0===_a?void 0:_a.value)&&(this.hiddenValue=value.toString(),this.inputValue=this.toCurrencyString(value)):(this.hiddenValue=null,this.inputValue=null)}componentDidLoad(){var _a;this.inoInputEl=this.el.querySelector("ino-input"),null===(_a=this.inoInputEl)||void 0===_a||_a.setUserInputInterceptor(value=>this.trimCurrencyString(value)),this.inoInputEl||console.error("currency input requires ino-input as child"),"text"!==this.inoInputEl.type&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var _a,_b,_c;null===(_a=this.inoInputEl)||void 0===_a||_a.removeEventListener("inoFocus",this.handleFocus),null===(_b=this.inoInputEl)||void 0===_b||_b.removeEventListener("inoBlur",this.handleBlur),null===(_c=this.inoInputEl)||void 0===_c||_c.removeEventListener("valueChange",this.handleValueChange)}initialize(){var _a,_b,_c;this.hiddenInputEl&&this.setupHiddenInput(),null===(_a=this.inoInputEl)||void 0===_a||_a.addEventListener("inoFocus",this.handleFocus),null===(_b=this.inoInputEl)||void 0===_b||_b.addEventListener("inoBlur",this.handleBlur),null===(_c=this.inoInputEl)||void 0===_c||_c.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(value){this.hiddenInputEl&&(this.hiddenInputEl.value=value)}set inputValue(value){this.inoInputEl&&(this.inoInputEl.value=value)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(value){var _a;if(!value&&0!==value)return null;let locale=(null===(_a=this.currencyLocale)||void 0===_a?void 0:_a.length)>0?this.currencyLocale:inoElementsConfig.get("currencyLocale",this.defaultLocale);return Intl.NumberFormat(locale,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(value))}trimCurrencyString(value){if(!value)return value;let leadingSymbol=this.extractLeadingSymbol(value),separator=this.getSeperator(),numberParts=this.removeNonDecimalValues(value).split(separator);return value=numberParts[0],numberParts.length>1&&(value+=separator+numberParts[1].substring(0,2)),leadingSymbol+value}fromCurrencyString(value){let leadingSymbol=this.extractLeadingSymbol(value),separator=this.getSeperator(),newValue=this.removeNonDecimalValues(value).replace(separator,".");return Number(leadingSymbol+newValue)}extractLeadingSymbol(value){var _a;let min=null===(_a=this.inoInputEl)||void 0===_a?void 0:_a.min,requirePositive=min&&Number(min)>=0;return requirePositive?"":value.startsWith("-")?"-":""}removeNonDecimalValues(value){let currencyRegex=RegExp(`[^${this.getSeperator()}0-9]`,"g");return value.replace(currencyRegex,"")}render(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.H,null,(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("input",{type:"hidden",ref:el=>this.hiddenInputEl=el,value:this.value}),(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot",null))}get el(){return(0,_index_2ff82bb8_js__WEBPACK_IMPORTED_MODULE_0__.g)(this)}static get watchers(){return{value:["valueChanged"]}}};CurrencyInput.style=""}}]);