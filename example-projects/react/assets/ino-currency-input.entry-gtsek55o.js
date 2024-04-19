import{r as s,c as l,h as r,H as u,g as o}from"./index-DInsCe3q.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class a{get(e,n){const i=this.storage&&this.storage[e];return i??n}patch(e,n){this.storage!==null&&this.storage[e]!==void 0&&(this.storage[e]=n)}get storage(){if(typeof window<"u"){const e=window.inoElements;if(e&&e.config)return e.config}return null}}const h=new a,d="",c=d,p=class{constructor(t){s(this,t),this.valueChange=l(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=e=>{let n=e.detail;n=n?this.fromCurrencyString(n):null,Number.isNaN(n)||(this.hiddenValue=n,this.valueChange.emit(n)),e.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{const e=this.hiddenInputEl.value;e&&e!="null"&&(this.inoInputEl.value=this.toCurrencyString(e))},this.currencyLocale=void 0,this.value=void 0}valueChanged(t){var e;!t&&t!==0||t==="null"?(this.hiddenValue=null,this.inputValue=null):t!=((e=this.hiddenInputEl)===null||e===void 0?void 0:e.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t))}componentDidLoad(){var t;this.inoInputEl=this.el.querySelector("ino-input"),(t=this.inoInputEl)===null||t===void 0||t.setUserInputInterceptor(e=>this.trimCurrencyString(e)),this.inoInputEl||console.error("currency input requires ino-input as child"),this.inoInputEl.type!=="text"&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var t,e,n;(t=this.inoInputEl)===null||t===void 0||t.removeEventListener("inoFocus",this.handleFocus),(e=this.inoInputEl)===null||e===void 0||e.removeEventListener("inoBlur",this.handleBlur),(n=this.inoInputEl)===null||n===void 0||n.removeEventListener("valueChange",this.handleValueChange)}initialize(){var t,e,n;this.hiddenInputEl&&this.setupHiddenInput(),(t=this.inoInputEl)===null||t===void 0||t.addEventListener("inoFocus",this.handleFocus),(e=this.inoInputEl)===null||e===void 0||e.addEventListener("inoBlur",this.handleBlur),(n=this.inoInputEl)===null||n===void 0||n.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)}set inputValue(t){this.inoInputEl&&(this.inoInputEl.value=t)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(t){var e;if(!t&&t!==0)return null;const n=((e=this.currencyLocale)===null||e===void 0?void 0:e.length)>0?this.currencyLocale:h.get("currencyLocale",this.defaultLocale),i={minimumFractionDigits:2,maximumFractionDigits:2};return Intl.NumberFormat(n,i).format(Number(t))}trimCurrencyString(t){if(!t)return t;const e=this.extractLeadingSymbol(t),n=this.getSeperator(),i=this.removeNonDecimalValues(t).split(n);return t=i[0],i.length>1&&(t+=n+i[1].substring(0,2)),e+t}fromCurrencyString(t){const e=this.extractLeadingSymbol(t),n=this.getSeperator(),i=this.removeNonDecimalValues(t).replace(n,".");return Number(e+i)}extractLeadingSymbol(t){var e;const n=(e=this.inoInputEl)===null||e===void 0?void 0:e.min;return n&&Number(n)>=0?"":t.startsWith("-")?"-":""}removeNonDecimalValues(t){const e=new RegExp(`[^${this.getSeperator()}0-9]`,"g");return t.replace(e,"")}render(){return r(u,{key:"cc54860d1496ca8f5e77b7776dd047889ee67305"},r("input",{key:"ba5f3c99dec4ebd187f802cc14484f5bc1073964",type:"hidden",ref:t=>this.hiddenInputEl=t,value:this.value}),r("slot",{key:"fd3f92c89285df43ab119ace6f77972c036d367a"}))}get el(){return o(this)}static get watchers(){return{value:["valueChanged"]}}};p.style=c;export{p as ino_currency_input};
