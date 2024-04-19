import{r as d,c,h as n,H as l,g as h}from"./index-DInsCe3q.js";import{c as u}from"./index-38c18b20-Bpdhy5BS.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const g="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}",p=g,f=class{constructor(e){d(this,e),this.valueChange=c(this,"valueChange",7),this.value=void 0,this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}handleCheckedChange(e){const a=e.target;this.valueChange.emit(a.value)}handleMouseOver(e){const a=e.target;this.addHoverAnimation(a)}handleMouseOut(){this.removeHoverAnimation()}async componentDidLoad(){this.updateRadios(this.value)}async handleKeyDown(e){var a,o;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const i=await this.getRadios(),t=i.find(s=>!!s.checked);if(!t){this.valueChange.emit(i[0].value);return}let r;switch(e.key){case"ArrowDown":case"ArrowRight":r=(a=t.nextElementSibling)!==null&&a!==void 0?a:i[0];break;case"ArrowUp":case"ArrowLeft":r=(o=t.previousElementSibling)!==null&&o!==void 0?o:i[i.length-1];break}this.valueChange.emit(r.value)}async addHoverAnimation(e){const o=(await this.getRadios()).find(i=>!!i.checked);!o||e===o||o.classList.add("ino-checked-hover")}async removeHoverAnimation(){const a=(await this.getRadios()).find(o=>o.classList.contains("ino-checked-hover"));a&&a.classList.remove("ino-checked-hover")}async updateRadios(e){const a=await this.getRadios();let o=!1;for(const i of a)i.checked&&i.classList.remove("ino-checked-hover"),!o&&i.value===e?(o=!0,i.checked=!0):i.checked=!1;o||console.warn(`No ino-radio button with value=${e} was found.`)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=u({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":this.alignment==="vertical","ino-radio-group-wrapper--horizontal":this.alignment==="horizontal"});return n(l,{key:"35af3569d44de307f18197df36a24ef65baef434"},n("div",{key:"bfca4bd3ff057b77caee421f9041c93800ca0dcc",class:e,tabIndex:0},n("slot",{key:"4966c7c9a3bb39a7a837c50865a9d84728def8fa"})))}get el(){return h(this)}static get watchers(){return{value:["valueChanged"]}}};f.style=p;export{f as ino_radio_group};
