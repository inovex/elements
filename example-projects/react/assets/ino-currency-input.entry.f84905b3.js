import{r as s,c as l,h as r,H as u,g as o}from"./index.47ae8fd2.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class a{get(n,i){const e=this.storage&&this.storage[n];return e!=null?e:i}patch(n,i){this.storage&&this.storage[n]&&(this.storage[n]=i)}get storage(){if(typeof window<"u"){const n=window.inoElements;if(n&&n.config)return n.config}return null}}const h=new a;/*!
 * Crafted with ❤ by inovex GmbH
 */const d="",c=class{constructor(t){s(this,t),this.valueChange=l(this,"valueChange",7),this.defaultLocale="de-DE",this.handleValueChange=n=>{let i=n.detail;i=i?this.fromCurrencyString(i):null,Number.isNaN(i)||(this.hiddenValue=i,this.valueChange.emit(i)),n.stopPropagation()},this.handleFocus=()=>{this.inoInputEl.value=this.trimCurrencyString(this.inoInputEl.value)},this.handleBlur=()=>{const n=this.hiddenInputEl.value;n&&n!="null"&&(this.inoInputEl.value=this.toCurrencyString(n))}}valueChanged(t){var n;!t&&t!==0||t==="null"?(this.hiddenValue=null,this.inputValue=null):t!=((n=this.hiddenInputEl)===null||n===void 0?void 0:n.value)&&(this.hiddenValue=t.toString(),this.inputValue=this.toCurrencyString(t))}componentDidLoad(){var t;this.inoInputEl=this.el.querySelector("ino-input"),(t=this.inoInputEl)===null||t===void 0||t.setUserInputInterceptor(n=>this.trimCurrencyString(n)),this.inoInputEl||console.error("currency input requires ino-input as child"),this.inoInputEl.type!=="text"&&console.error('currency input has to be of type "text"'),this.initialize()}connectedCallback(){this.initialize()}disconnectedCallback(){var t,n,i;(t=this.inoInputEl)===null||t===void 0||t.removeEventListener("inoFocus",this.handleFocus),(n=this.inoInputEl)===null||n===void 0||n.removeEventListener("inoBlur",this.handleBlur),(i=this.inoInputEl)===null||i===void 0||i.removeEventListener("valueChange",this.handleValueChange)}initialize(){var t,n,i;this.hiddenInputEl&&this.setupHiddenInput(),(t=this.inoInputEl)===null||t===void 0||t.addEventListener("inoFocus",this.handleFocus),(n=this.inoInputEl)===null||n===void 0||n.addEventListener("inoBlur",this.handleBlur),(i=this.inoInputEl)===null||i===void 0||i.addEventListener("valueChange",this.handleValueChange)}set hiddenValue(t){this.hiddenInputEl&&(this.hiddenInputEl.value=t)}set inputValue(t){this.inoInputEl&&(this.inoInputEl.value=t)}setupHiddenInput(){this.hiddenValue=String(this.value),this.hiddenInputEl.name=this.inoInputEl.name,this.inoInputEl.name=null,this.inoInputEl.resetOnChange=!1,this.hiddenInputEl.min=this.inoInputEl.min,this.hiddenInputEl.max=this.inoInputEl.max,this.hiddenInputEl.disabled=this.inoInputEl.disabled,this.hiddenInputEl.required=this.inoInputEl.required,this.inoInputEl.value=this.toCurrencyString(this.value)}getSeperator(){return this.toCurrencyString(0).charAt(1)}toCurrencyString(t){var n;if(!t&&t!==0)return null;const i=((n=this.currencyLocale)===null||n===void 0?void 0:n.length)>0?this.currencyLocale:h.get("currencyLocale",this.defaultLocale),e={minimumFractionDigits:2,maximumFractionDigits:2};return Intl.NumberFormat(i,e).format(Number(t))}trimCurrencyString(t){if(!t)return t;const n=this.extractLeadingSymbol(t),i=this.getSeperator(),e=this.removeNonDecimalValues(t).split(i);return t=e[0],e.length>1&&(t+=i+e[1].substring(0,2)),n+t}fromCurrencyString(t){const n=this.extractLeadingSymbol(t),i=this.getSeperator(),e=this.removeNonDecimalValues(t).replace(i,".");return Number(n+e)}extractLeadingSymbol(t){var n;const i=(n=this.inoInputEl)===null||n===void 0?void 0:n.min;return i&&Number(i)>=0?"":t.startsWith("-")?"-":""}removeNonDecimalValues(t){const n=new RegExp(`[^${this.getSeperator()}0-9]`,"g");return t.replace(n,"")}render(){return r(u,null,r("input",{type:"hidden",ref:t=>this.hiddenInputEl=t,value:this.value}),r("slot",null))}get el(){return o(this)}static get watchers(){return{value:["valueChanged"]}}};c.style=d;export{c as ino_currency_input};
