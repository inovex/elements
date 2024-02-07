import{r as s,c as l,h as r,H as o,g as u}from"./preview-c772c3e9.js";import"./iframe-c530c1e0.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-a0365730.js";import"./index-3dc822a6.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-2aac0fed.js";import"./index-95aa5b46.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class a{get(i,n){const e=this.storage&&this.storage[i];return e??n}patch(i,n){this.storage&&this.storage[i]&&(this.storage[i]=n)}get storage(){if(typeof window<"u"){const i=window.inoElements;if(i&&i.config)return i.config}return null}}const h=new a,d="",c=class{constructor(t){s(this,t),this.valueChange=l(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=i=>{let n=i.detail;n=n?this.fromCurrencyString(n):null,Number.isNaN(n)||(this.hiddenValue=n,this.valueChange.emit(n)),i.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{const i=this.hiddenInputEl.value;i&&i!="null"&&(this.inoInputEl.value=this.toCurrencyString(i))},this.currencyLocale=void 0,this.value=void 0}valueChanged(t){var i;!t&&t!==0||t==="null"?(this.hiddenValue=null,this.inputValue=null):t!=((i=this.hiddenInputEl)===null||i===void 0?void 0:i.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t))}componentDidLoad(){var t;this.inoInputEl=this.el.querySelector("ino-input"),(t=this.inoInputEl)===null||t===void 0||t.setUserInputInterceptor(i=>this.trimCurrencyString(i)),this.inoInputEl||console.error("currency input requires ino-input as child"),this.inoInputEl.type!=="text"&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var t,i,n;(t=this.inoInputEl)===null||t===void 0||t.removeEventListener("inoFocus",this.handleFocus),(i=this.inoInputEl)===null||i===void 0||i.removeEventListener("inoBlur",this.handleBlur),(n=this.inoInputEl)===null||n===void 0||n.removeEventListener("valueChange",this.handleValueChange)}initialize(){var t,i,n;this.hiddenInputEl&&this.setupHiddenInput(),(t=this.inoInputEl)===null||t===void 0||t.addEventListener("inoFocus",this.handleFocus),(i=this.inoInputEl)===null||i===void 0||i.addEventListener("inoBlur",this.handleBlur),(n=this.inoInputEl)===null||n===void 0||n.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)}set inputValue(t){this.inoInputEl&&(this.inoInputEl.value=t)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(t){var i;if(!t&&t!==0)return null;const n=((i=this.currencyLocale)===null||i===void 0?void 0:i.length)>0?this.currencyLocale:h.get("currencyLocale",this.defaultLocale),e={minimumFractionDigits:2,maximumFractionDigits:2};return Intl.NumberFormat(n,e).format(Number(t))}trimCurrencyString(t){if(!t)return t;const i=this.extractLeadingSymbol(t),n=this.getSeperator(),e=this.removeNonDecimalValues(t).split(n);return t=e[0],e.length>1&&(t+=n+e[1].substring(0,2)),i+t}fromCurrencyString(t){const i=this.extractLeadingSymbol(t),n=this.getSeperator(),e=this.removeNonDecimalValues(t).replace(n,".");return Number(i+e)}extractLeadingSymbol(t){var i;const n=(i=this.inoInputEl)===null||i===void 0?void 0:i.min;return n&&Number(n)>=0?"":t.startsWith("-")?"-":""}removeNonDecimalValues(t){const i=new RegExp(`[^${this.getSeperator()}0-9]`,"g");return t.replace(i,"")}render(){return r(o,null,r("input",{type:"hidden",ref:t=>this.hiddenInputEl=t,value:this.value}),r("slot",null))}get el(){return u(this)}static get watchers(){return{value:["valueChanged"]}}};c.style=d;export{c as ino_currency_input};
