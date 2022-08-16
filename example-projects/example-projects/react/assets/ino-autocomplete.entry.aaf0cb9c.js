import{r,c as u,h as l,H as p,g as a}from"./index.146b307e.js";import{c as h}from"./index-b7e5b0c5.07a60787.js";import{m as d,g as c}from"./component-utils-1c4ae7be.6d485fb9.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class m{constructor(){this.timeout=null}debounce(t,e=300){this.timeout&&(clearTimeout(this.timeout),this.timeout=null),this.timeout=setTimeout(()=>{t(),this.timeout=null},e)}}const O=":host{position:relative}:host .menu{width:var(--input-width, max-content);max-height:var(--ino-autocomplete-list-max-height, 225px);position:absolute;top:76px;z-index:10;background-color:white;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);border-bottom-left-radius:5px;border-bottom-right-radius:5px;overflow:auto}:host .menu-hidden{display:none}:host .menu-shown{display:block}:host .no-options-text{padding-left:16px;padding-right:16px;color:#9b9b9b}",f=-1,I=class{constructor(i){r(this,i),this.valueChange=u(this,"valueChange",7),this.debouncer=new m,this._selectedOptionIndex=f,this.menuIsVisible=!1,this.noOptionsIsVisible=!1,this.debounceTimeout=300,this.noOptionsText="No Option",this.onEnterPress=()=>{this.onOptionSelect(),this.inputEl.getInputElement().then(d)},this.onOptionSelect=()=>{!this.selectedOption||(this.inputChanged(this.selectedOption.innerText),this.emitValueOfSelectedOption(),this.closeMenu())},this.onArrowDownPress=()=>{const t=this.filteredOptionEls.findIndex(s=>{var o;return s.value===((o=this.selectedOption)===null||o===void 0?void 0:o.value)})+1,n=t>=this.filteredOptionEls.length?0:t;this.selectedOptionIndex=this.optionEls.indexOf(this.filteredOptionEls[n])},this.onArrowUpPress=()=>{const t=this.filteredOptionEls.findIndex(s=>{var o;return s.value===((o=this.selectedOption)===null||o===void 0?void 0:o.value)})-1,n=t<0?this.filteredOptionEls.length-1:t;this.selectedOptionIndex=this.optionEls.indexOf(this.filteredOptionEls[n])},this.scroll=t=>{t.preventDefault();const{offsetTop:e,clientHeight:n}=this.selectedOption,{scrollTop:s,clientHeight:o}=this.menuContainer;(e+n/2>s+o||e<s)&&this.menuContainer.scrollTo(0,e)},this.setupInput=()=>{if(this.inputEl=c(this.el,"input"),!this.inputEl)throw new Error('The slot "input" is empty. Please provide an <ino-input> element to that slot.');this.inputEl.value&&console.warn("The value property of the <ino-input> is managed by the <ino-autocomplete> and therefore should not be set manually."),this.inputEl.addEventListener("inoFocus",this.onInoInputFocus),this.inputEl.addEventListener("inoBlur",this.onInoInputBlur),this.menuContainer.style.setProperty("--input-width",window.getComputedStyle(this.inputEl).width),this.setOptionByValue(this.value)},this.onInoInputFocus=()=>{this.inputEl.disabled||this.openMenu()},this.onInoInputBlur=t=>{var e;if(this.isOptionClick(t.detail))return;this.closeMenu();const n=this.optionEls.findIndex(s=>s.innerText.trim()===this.inputEl.value.trim());n!==this.selectedOptionIndex&&(this.selectedOptionIndex=n,this.emitValueOfSelectedOption()),this.inputChanged(((e=this.selectedOption)===null||e===void 0?void 0:e.innerText)||"")},this.isOptionClick=t=>t.relatedTarget&&(t.relatedTarget.matches(".mdc-list-item")||t.relatedTarget.matches("ino-option")),this.emitValueOfSelectedOption=()=>{var t;this.valueChange.emit((t=this.selectedOption)===null||t===void 0?void 0:t.value)},this.inputChanged=t=>{!this.inputEl||(this.inputEl.value=t||"",this.debouncer.debounce(()=>this.filterOptions(this.inputEl.value),this.debounceTimeout))},this.filterOptions=t=>{this.filteredOptionEls=this.optionEls.filter(e=>{const n=e.innerText.trim().toLowerCase().includes(t.trim().toLowerCase());return e.style.display=n?"block":"none",n}),this.noOptionsIsVisible=this.filteredOptionEls.length===0},this.setupOptions=()=>{this.optionEls=Array.from(this.el.getElementsByTagName("ino-option")),this.filteredOptionEls=this.optionEls,this.setOptionByValue(this.value)},this.setOptionByValue=t=>{var e;!this.optionEls||(this.selectedOptionIndex=this.optionEls.findIndex(n=>n.value===t),this.inputChanged((e=this.selectedOption)===null||e===void 0?void 0:e.innerText))},this.onListItemClick=t=>{const{parentElement:e}=t.target;if(e.nodeName.toLowerCase()!=="ino-option"&&e.parentElement.nodeName.toLowerCase()!=="ino-option")return;const n=e.nodeName.toLowerCase()==="ino-option"?e:e.parentElement;this.selectedOptionIndex=this.optionEls.findIndex(s=>s.value===n.value),this.onOptionSelect()},this.openMenu=()=>this.menuIsVisible=!0,this.closeMenu=()=>this.menuIsVisible=!1}set selectedOptionIndex(i){this.selectedOption&&(this.selectedOption.selected=!1),this._selectedOptionIndex=i,this.selectedOption=i>=0?this.optionEls[i]:void 0,this.selectedOption&&(this.selectedOption.selected=!0)}get selectedOptionIndex(){return this._selectedOptionIndex}onValueChange(i,t){i!==t&&this.setOptionByValue(i)}componentDidLoad(){this.setupInput()}disconnectedCallback(){this.inputEl.removeEventListener("inoFocus",this.onInoInputFocus),this.inputEl.removeEventListener("inoBlur",this.onInoInputBlur)}onInoInputValueChange(i){i.target.tagName.toLowerCase()==="ino-input"&&(i.stopImmediatePropagation(),this.inputChanged(i.detail))}onKeyDown(i){if(!this.filteredOptionEls||this.filteredOptionEls.length===0)return;const t=["Enter","Escape","Tab"];switch(!this.menuIsVisible&&!t.includes(i.code)&&this.openMenu(),i.code){case"Enter":this.onEnterPress();break;case"ArrowDown":this.openMenu(),this.onArrowDownPress(),this.scroll(i);break;case"ArrowUp":this.openMenu(),this.onArrowUpPress(),this.scroll(i);break;case"Escape":this.closeMenu();break;case"Tab":break;default:this.openMenu()}}render(){const i=h({"no-options-found":this.noOptionsIsVisible,"menu-open":this.menuIsVisible}),t=h({menu:!0,"menu-hidden":!this.menuIsVisible,"menu-shown":this.menuIsVisible});return l(p,{class:i},l("slot",{name:"input"}),l("div",{class:t,ref:e=>this.menuContainer=e,onMouseDown:e=>this.onListItemClick(e)},l("div",{class:"mdc-list"},this.noOptionsIsVisible&&l("p",{class:"no-options-text"},this.noOptionsText),l("slot",{onSlotchange:this.setupOptions}))))}get el(){return a(this)}static get watchers(){return{value:["onValueChange"]}}};I.style=O;export{I as ino_autocomplete};
