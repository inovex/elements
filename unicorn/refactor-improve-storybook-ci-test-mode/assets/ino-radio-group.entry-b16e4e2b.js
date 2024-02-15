import{r as d,c,h as n,H as l,g as h}from"./preview-ca79bbb2.js";import{c as u}from"./index-796d4780-671f1753.js";import"./iframe-cab6179e.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-a0365730.js";import"./index-362be46d.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-9ff4015c.js";import"./index-9516b18b.js";import"./_commonjsHelpers-212d567a-5c26fd6e.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const p="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}",g=class{constructor(e){d(this,e),this.valueChange=c(this,"valueChange",7),this.value=void 0,this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}handleCheckedChange(e){const o=e.target;this.valueChange.emit(o.value)}handleMouseOver(e){const o=e.target;this.addHoverAnimation(o)}handleMouseOut(){this.removeHoverAnimation()}async componentDidLoad(){this.updateRadios(this.value)}async handleKeyDown(e){var o,i;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const t=await this.getRadios(),a=t.find(s=>!!s.checked);if(!a){this.valueChange.emit(t[0].value);return}let r;switch(e.key){case"ArrowDown":case"ArrowRight":r=(o=a.nextElementSibling)!==null&&o!==void 0?o:t[0];break;case"ArrowUp":case"ArrowLeft":r=(i=a.previousElementSibling)!==null&&i!==void 0?i:t[t.length-1];break}this.valueChange.emit(r.value)}async addHoverAnimation(e){const i=(await this.getRadios()).find(t=>!!t.checked);!i||e===i||i.classList.add("ino-checked-hover")}async removeHoverAnimation(){const o=(await this.getRadios()).find(i=>i.classList.contains("ino-checked-hover"));o&&o.classList.remove("ino-checked-hover")}async updateRadios(e){const o=await this.getRadios();let i=!1;for(const t of o)t.checked&&t.classList.remove("ino-checked-hover"),!i&&t.value===e?(i=!0,t.checked=!0):t.checked=!1;i||console.warn(`No ino-radio button with value=${e} was found.`)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=u({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":this.alignment==="vertical","ino-radio-group-wrapper--horizontal":this.alignment==="horizontal"});return n(l,null,n("div",{class:e,tabIndex:0},n("slot",null)))}get el(){return h(this)}static get watchers(){return{value:["valueChanged"]}}};g.style=p;export{g as ino_radio_group};
