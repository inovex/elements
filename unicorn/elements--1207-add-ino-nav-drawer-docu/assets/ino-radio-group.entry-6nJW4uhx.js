import{r as c,c as d,h as n,H as l,g as h}from"./preview-CB588NAR.js";import{c as u}from"./index-38c18b20-Bpdhy5BS.js";import"./iframe-DJCCxY6y.js";import"../sb-preview/runtime.js";import"./index--vP5QzB1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./elements-stencil-docs-CAm1M8Bn.js";import"./index-BDpeP0Lv.js";import"./index-BHQg7lv3.js";import"./index-DrFu-skq.js";import"./jsx-runtime-Diy_8xxB.js";import"./index-CqFFBqEZ.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const p="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}",g=p,m=class{constructor(e){c(this,e),this.valueChange=d(this,"valueChange",7),this.value=void 0,this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}handleCheckedChange(e){const o=e.target;this.valueChange.emit(o.value)}handleMouseOver(e){const o=e.target;this.addHoverAnimation(o)}handleMouseOut(){this.removeHoverAnimation()}async componentDidLoad(){this.updateRadios(this.value)}async handleKeyDown(e){var o,i;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const a=await this.getRadios(),t=a.find(s=>!!s.checked);if(!t){this.valueChange.emit(a[0].value);return}let r;switch(e.key){case"ArrowDown":case"ArrowRight":r=(o=t.nextElementSibling)!==null&&o!==void 0?o:a[0];break;case"ArrowUp":case"ArrowLeft":r=(i=t.previousElementSibling)!==null&&i!==void 0?i:a[a.length-1];break}this.valueChange.emit(r.value)}async addHoverAnimation(e){const i=(await this.getRadios()).find(a=>!!a.checked);!i||e===i||i.classList.add("ino-checked-hover")}async removeHoverAnimation(){const o=(await this.getRadios()).find(i=>i.classList.contains("ino-checked-hover"));o&&o.classList.remove("ino-checked-hover")}async updateRadios(e){const o=await this.getRadios();let i=!1;for(const a of o)a.checked&&a.classList.remove("ino-checked-hover"),!i&&a.value===e?(i=!0,a.checked=!0):a.checked=!1;i||console.warn(`No ino-radio button with value=${e} was found.`)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=u({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":this.alignment==="vertical","ino-radio-group-wrapper--horizontal":this.alignment==="horizontal"});return n(l,{key:"c9ffa45fdcbed734680858ccd4c438f49c0832ec"},n("div",{key:"9ca9cc2adbb388de4503528681e99f71292c2f4c",class:e,tabIndex:0},n("slot",{key:"b0b9b02683f77c05127ec581f8564c7110c825aa"})))}get el(){return h(this)}static get watchers(){return{value:["valueChanged"]}}};m.style=g;export{m as ino_radio_group};
