"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[6901],{6901:function(t,e,n){n.r(e),n.d(e,{ino_currency_input:function(){return s}});var i=n(1817);
/*!
 * Crafted with ❤ by inovex GmbH
 */
class l{get(t,e){const n=this.storage&&this.storage[t];return null!==n&&void 0!==n?n:e}patch(t,e){this.storage&&this.storage[t]&&(this.storage[t]=e)}get storage(){if("undefined"!==typeof window){const t=window.inoElements;if(t&&t.config)return t.config}return null}}const u=new l,r="",s=class{constructor(t){(0,i.r)(this,t),this.valueChange=(0,i.c)(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=t=>{let e=t.detail;e=e?this.fromCurrencyString(e):null,Number.isNaN(e)||(this.hiddenValue=e,this.valueChange.emit(e)),t.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{const t=this.hiddenInputEl.value;t&&"null"!=t&&(this.inoInputEl.value=this.toCurrencyString(t))}}valueChanged(t){var e;!t&&0!==t||"null"===t?(this.hiddenValue=null,this.inputValue=null):t!=(null===(e=this.hiddenInputEl)||void 0===e?void 0:e.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t))}componentDidLoad(){var t;this.inoInputEl=this.el.querySelector("ino-input"),null===(t=this.inoInputEl)||void 0===t||t.setUserInputInterceptor((t=>this.trimCurrencyString(t))),this.inoInputEl||console.error("currency input requires ino-input as child"),"text"!==this.inoInputEl.type&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var t,e,n;null===(t=this.inoInputEl)||void 0===t||t.removeEventListener("inoFocus",this.handleFocus),null===(e=this.inoInputEl)||void 0===e||e.removeEventListener("inoBlur",this.handleBlur),null===(n=this.inoInputEl)||void 0===n||n.removeEventListener("valueChange",this.handleValueChange)}initialize(){var t,e,n;this.hiddenInputEl&&this.setupHiddenInput(),null===(t=this.inoInputEl)||void 0===t||t.addEventListener("inoFocus",this.handleFocus),null===(e=this.inoInputEl)||void 0===e||e.addEventListener("inoBlur",this.handleBlur),null===(n=this.inoInputEl)||void 0===n||n.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)}set inputValue(t){this.inoInputEl&&(this.inoInputEl.value=t)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(t){var e;if(!t&&0!==t)return null;const n=(null===(e=this.currencyLocale)||void 0===e?void 0:e.length)>0?this.currencyLocale:u.get("currencyLocale",this.defaultLocale),i={minimumFractionDigits:2,maximumFractionDigits:2};return Intl.NumberFormat(n,i).format(Number(t))}trimCurrencyString(t){if(!t)return t;const e=this.extractLeadingSymbol(t),n=this.getSeperator(),i=this.removeNonDecimalValues(t).split(n);return t=i[0],i.length>1&&(t+=n+i[1].substring(0,2)),e+t}fromCurrencyString(t){const e=this.extractLeadingSymbol(t),n=this.getSeperator(),i=this.removeNonDecimalValues(t).replace(n,".");return Number(e+i)}extractLeadingSymbol(t){var e;const n=null===(e=this.inoInputEl)||void 0===e?void 0:e.min,i=n&&Number(n)>=0;return i?"":t.startsWith("-")?"-":""}removeNonDecimalValues(t){const e=new RegExp(`[^${this.getSeperator()}0-9]`,"g");return t.replace(e,"")}render(){return(0,i.h)(i.H,null,(0,i.h)("input",{type:"hidden",ref:t=>this.hiddenInputEl=t,value:this.value}),(0,i.h)("slot",null))}get el(){return(0,i.g)(this)}static get watchers(){return{value:["valueChanged"]}}};s.style=r}}]);
//# sourceMappingURL=6901.c943f188.js.map