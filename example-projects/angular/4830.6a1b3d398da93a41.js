"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[4830],{4830:(d,l,s)=>{s.r(l),s.d(l,{ino_currency_input:()=>u});var r=s(405);const a=new class o{get(n,e){return(this.storage&&this.storage[n])??e}patch(n,e){this.storage&&this.storage[n]&&(this.storage[n]=e)}get storage(){if(typeof window<"u"){const n=window.inoElements;if(n&&n.config)return n.config}return null}},u=class{constructor(t){(0,r.r)(this,t),this.valueChange=(0,r.c)(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=n=>{let e=n.detail;e=e?this.fromCurrencyString(e):null,Number.isNaN(e)||(this.hiddenValue=e,this.valueChange.emit(e)),n.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{const n=this.hiddenInputEl.value;n&&"null"!=n&&(this.inoInputEl.value=this.toCurrencyString(n))},this.currencyLocale=void 0,this.value=void 0}valueChanged(t){var n;!t&&0!==t||"null"===t?(this.hiddenValue=null,this.inputValue=null):t!=(null===(n=this.hiddenInputEl)||void 0===n?void 0:n.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t))}componentDidLoad(){var t;this.inoInputEl=this.el.querySelector("ino-input"),null===(t=this.inoInputEl)||void 0===t||t.setUserInputInterceptor(n=>this.trimCurrencyString(n)),this.inoInputEl||console.error("currency input requires ino-input as child"),"text"!==this.inoInputEl.type&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var t,n,e;null===(t=this.inoInputEl)||void 0===t||t.removeEventListener("inoFocus",this.handleFocus),null===(n=this.inoInputEl)||void 0===n||n.removeEventListener("inoBlur",this.handleBlur),null===(e=this.inoInputEl)||void 0===e||e.removeEventListener("valueChange",this.handleValueChange)}initialize(){var t,n,e;this.hiddenInputEl&&this.setupHiddenInput(),null===(t=this.inoInputEl)||void 0===t||t.addEventListener("inoFocus",this.handleFocus),null===(n=this.inoInputEl)||void 0===n||n.addEventListener("inoBlur",this.handleBlur),null===(e=this.inoInputEl)||void 0===e||e.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)}set inputValue(t){this.inoInputEl&&(this.inoInputEl.value=t)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(t){var n;if(!t&&0!==t)return null;const e=(null===(n=this.currencyLocale)||void 0===n?void 0:n.length)>0?this.currencyLocale:a.get("currencyLocale",this.defaultLocale);return Intl.NumberFormat(e,{minimumFractionDigits:2,maximumFractionDigits:2}).format(Number(t))}trimCurrencyString(t){if(!t)return t;const n=this.extractLeadingSymbol(t),e=this.getSeperator(),i=this.removeNonDecimalValues(t).split(e);return t=i[0],i.length>1&&(t+=e+i[1].substring(0,2)),n+t}fromCurrencyString(t){const n=this.extractLeadingSymbol(t),e=this.getSeperator(),i=this.removeNonDecimalValues(t).replace(e,".");return Number(n+i)}extractLeadingSymbol(t){var n;const e=null===(n=this.inoInputEl)||void 0===n?void 0:n.min;return e&&Number(e)>=0?"":t.startsWith("-")?"-":""}removeNonDecimalValues(t){const n=new RegExp(`[^${this.getSeperator()}0-9]`,"g");return t.replace(n,"")}render(){return(0,r.h)(r.H,null,(0,r.h)("input",{type:"hidden",ref:t=>this.hiddenInputEl=t,value:this.value}),(0,r.h)("slot",null))}get el(){return(0,r.g)(this)}static get watchers(){return{value:["valueChanged"]}}};u.style=""}}]);