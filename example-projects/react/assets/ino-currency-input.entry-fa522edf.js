import{r as s,c as l,h as r,H as u,g as o}from"./index-0f9e775c.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class a{get(n,e){const i=this.storage&&this.storage[n];return i??e}patch(n,e){this.storage!==null&&this.storage[n]!==void 0&&(this.storage[n]=e)}get storage(){if(typeof window<"u"){const n=window.inoElements;if(n&&n.config)return n.config}return null}}const h=new a,d="",c=d,p=class{constructor(t){s(this,t),this.valueChange=l(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=n=>{let e=n.detail;e=e?this.fromCurrencyString(e):null,Number.isNaN(e)||(this.hiddenValue=e,this.valueChange.emit(e)),n.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{const n=this.hiddenInputEl.value;n&&n!="null"&&(this.inoInputEl.value=this.toCurrencyString(n))},this.currencyLocale=void 0,this.value=void 0}valueChanged(t){var n;!t&&t!==0||t==="null"?(this.hiddenValue=null,this.inputValue=null):t!=((n=this.hiddenInputEl)===null||n===void 0?void 0:n.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t))}componentDidLoad(){var t;this.inoInputEl=this.el.querySelector("ino-input"),(t=this.inoInputEl)===null||t===void 0||t.setUserInputInterceptor(n=>this.trimCurrencyString(n)),this.inoInputEl||console.error("currency input requires ino-input as child"),this.inoInputEl.type!=="text"&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var t,n,e;(t=this.inoInputEl)===null||t===void 0||t.removeEventListener("inoFocus",this.handleFocus),(n=this.inoInputEl)===null||n===void 0||n.removeEventListener("inoBlur",this.handleBlur),(e=this.inoInputEl)===null||e===void 0||e.removeEventListener("valueChange",this.handleValueChange)}initialize(){var t,n,e;this.hiddenInputEl&&this.setupHiddenInput(),(t=this.inoInputEl)===null||t===void 0||t.addEventListener("inoFocus",this.handleFocus),(n=this.inoInputEl)===null||n===void 0||n.addEventListener("inoBlur",this.handleBlur),(e=this.inoInputEl)===null||e===void 0||e.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)}set inputValue(t){this.inoInputEl&&(this.inoInputEl.value=t)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(t){var n;if(!t&&t!==0)return null;const e=((n=this.currencyLocale)===null||n===void 0?void 0:n.length)>0?this.currencyLocale:h.get("currencyLocale",this.defaultLocale),i={minimumFractionDigits:2,maximumFractionDigits:2};return Intl.NumberFormat(e,i).format(Number(t))}trimCurrencyString(t){if(!t)return t;const n=this.extractLeadingSymbol(t),e=this.getSeperator(),i=this.removeNonDecimalValues(t).split(e);return t=i[0],i.length>1&&(t+=e+i[1].substring(0,2)),n+t}fromCurrencyString(t){const n=this.extractLeadingSymbol(t),e=this.getSeperator(),i=this.removeNonDecimalValues(t).replace(e,".");return Number(n+i)}extractLeadingSymbol(t){var n;const e=(n=this.inoInputEl)===null||n===void 0?void 0:n.min;return e&&Number(e)>=0?"":t.startsWith("-")?"-":""}removeNonDecimalValues(t){const n=new RegExp(`[^${this.getSeperator()}0-9]`,"g");return t.replace(n,"")}render(){return r(u,{key:"99611443c4f9b80a45f493077b29152c4a8023b5"},r("input",{key:"9d42215abf96bef5886bc1aa0a01f2b9d0e0bcdf",type:"hidden",ref:t=>this.hiddenInputEl=t,value:this.value}),r("slot",{key:"b235501d4d5d99025b8fe2a9b9d9f30508cdda59"}))}get el(){return o(this)}static get watchers(){return{value:["valueChanged"]}}};p.style=c;export{p as ino_currency_input};
