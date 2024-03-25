import{r as s,c as o,h as r,H as l,g as u}from"./preview-9203a68a.js";import"./iframe-4463c11e.js";import"../sb-preview/runtime.js";import"./index-bb1f01da.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-6a7eba8c.js";import"./index-d65bceb9.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-87f687a8.js";import"./index-b0460b9e.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class a{get(i,e){const n=this.storage&&this.storage[i];return n??e}patch(i,e){this.storage&&this.storage[i]&&(this.storage[i]=e)}get storage(){if(typeof window<"u"){const i=window.inoElements;if(i&&i.config)return i.config}return null}}const h=new a,d="",c=d,p=class{constructor(t){s(this,t),this.valueChange=o(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=i=>{let e=i.detail;e=e?this.fromCurrencyString(e):null,Number.isNaN(e)||(this.hiddenValue=e,this.valueChange.emit(e)),i.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{const i=this.hiddenInputEl.value;i&&i!="null"&&(this.inoInputEl.value=this.toCurrencyString(i))},this.currencyLocale=void 0,this.value=void 0}valueChanged(t){var i;!t&&t!==0||t==="null"?(this.hiddenValue=null,this.inputValue=null):t!=((i=this.hiddenInputEl)===null||i===void 0?void 0:i.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t))}componentDidLoad(){var t;this.inoInputEl=this.el.querySelector("ino-input"),(t=this.inoInputEl)===null||t===void 0||t.setUserInputInterceptor(i=>this.trimCurrencyString(i)),this.inoInputEl||console.error("currency input requires ino-input as child"),this.inoInputEl.type!=="text"&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var t,i,e;(t=this.inoInputEl)===null||t===void 0||t.removeEventListener("inoFocus",this.handleFocus),(i=this.inoInputEl)===null||i===void 0||i.removeEventListener("inoBlur",this.handleBlur),(e=this.inoInputEl)===null||e===void 0||e.removeEventListener("valueChange",this.handleValueChange)}initialize(){var t,i,e;this.hiddenInputEl&&this.setupHiddenInput(),(t=this.inoInputEl)===null||t===void 0||t.addEventListener("inoFocus",this.handleFocus),(i=this.inoInputEl)===null||i===void 0||i.addEventListener("inoBlur",this.handleBlur),(e=this.inoInputEl)===null||e===void 0||e.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)}set inputValue(t){this.inoInputEl&&(this.inoInputEl.value=t)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(t){var i;if(!t&&t!==0)return null;const e=((i=this.currencyLocale)===null||i===void 0?void 0:i.length)>0?this.currencyLocale:h.get("currencyLocale",this.defaultLocale),n={minimumFractionDigits:2,maximumFractionDigits:2};return Intl.NumberFormat(e,n).format(Number(t))}trimCurrencyString(t){if(!t)return t;const i=this.extractLeadingSymbol(t),e=this.getSeperator(),n=this.removeNonDecimalValues(t).split(e);return t=n[0],n.length>1&&(t+=e+n[1].substring(0,2)),i+t}fromCurrencyString(t){const i=this.extractLeadingSymbol(t),e=this.getSeperator(),n=this.removeNonDecimalValues(t).replace(e,".");return Number(i+n)}extractLeadingSymbol(t){var i;const e=(i=this.inoInputEl)===null||i===void 0?void 0:i.min;return e&&Number(e)>=0?"":t.startsWith("-")?"-":""}removeNonDecimalValues(t){const i=new RegExp(`[^${this.getSeperator()}0-9]`,"g");return t.replace(i,"")}render(){return r(l,{key:"99611443c4f9b80a45f493077b29152c4a8023b5"},r("input",{key:"9d42215abf96bef5886bc1aa0a01f2b9d0e0bcdf",type:"hidden",ref:t=>this.hiddenInputEl=t,value:this.value}),r("slot",{key:"b235501d4d5d99025b8fe2a9b9d9f30508cdda59"}))}get el(){return u(this)}static get watchers(){return{value:["valueChanged"]}}};p.style=c;export{p as ino_currency_input};
