import{r as d,c,h as n,H as l,g as h}from"./index.3baabdda.js";import{c as u}from"./index-796d4780.ad696562.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const g="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}",p=class{constructor(e){d(this,e),this.valueChange=c(this,"valueChange",7),this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}handleCheckedChange(e){const o=e.target;this.valueChange.emit(o.value)}handleMouseOver(e){const o=e.target;this.addHoverAnimation(o)}handleMouseOut(){this.removeHoverAnimation()}async componentDidLoad(){this.updateRadios(this.value)}async handleKeyDown(e){var o,a;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const i=await this.getRadios(),t=i.find(s=>Boolean(s.checked));if(!t){this.valueChange.emit(i[0].value);return}let r;switch(e.key){case"ArrowDown":case"ArrowRight":r=(o=t.nextElementSibling)!==null&&o!==void 0?o:i[0];break;case"ArrowUp":case"ArrowLeft":r=(a=t.previousElementSibling)!==null&&a!==void 0?a:i[i.length-1];break}this.valueChange.emit(r.value)}async addHoverAnimation(e){const a=(await this.getRadios()).find(i=>Boolean(i.checked));!a||e===a||a.classList.add("ino-checked-hover")}async removeHoverAnimation(){const o=(await this.getRadios()).find(a=>a.classList.contains("ino-checked-hover"));!o||o.classList.remove("ino-checked-hover")}async updateRadios(e){const o=await this.getRadios();let a=!1;for(const i of o)i.checked&&i.classList.remove("ino-checked-hover"),!a&&i.value===e?(a=!0,i.checked=!0):i.checked=!1;a||console.warn(`No ino-radio button with value=${e} was found.`)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=u({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":this.alignment==="vertical","ino-radio-group-wrapper--horizontal":this.alignment==="horizontal"});return n(l,null,n("div",{class:e,tabIndex:0},n("slot",null)))}get el(){return h(this)}static get watchers(){return{value:["valueChanged"]}}};p.style=g;export{p as ino_radio_group};
