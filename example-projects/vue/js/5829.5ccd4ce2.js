"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[5829],{1231:function(e,o,t){t.d(o,{a:function(){return n},c:function(){return r},g:function(){return i}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function r(e,o,t){return t={path:o,exports:{},require:function(e,o){return a()}},e(t,t.exports),t.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},9776:function(e,o,t){t.d(o,{c:function(){return i}});t(6728);var n=t(1231),i=(0,n.c)((function(e){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var o={}.hasOwnProperty;function t(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var a=t.apply(null,i);a&&e.push(a)}}else if("object"===r){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var s in i)o.call(i,s)&&i[s]&&e.push(s)}}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}))},5829:function(e,o,t){t.r(o),t.d(o,{ino_radio_group:function(){return a}});var n=t(1297),i=t(9776);t(1231);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const r="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}",a=class{constructor(e){(0,n.r)(this,e),this.valueChange=(0,n.c)(this,"valueChange",7),this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}async componentDidLoad(){this.updateRadios(this.value);const e=await this.getRadios();e.forEach((e=>{e.addEventListener("mouseover",(()=>this.addHoverAnimation(e))),e.addEventListener("mouseout",(()=>this.removeHoverAnimation()))}))}async disconnectedCallback(){const e=await this.getRadios();e.forEach((e=>{e.removeEventListener("mouseover",(()=>this.addHoverAnimation(e))),e.removeEventListener("mouseout",(()=>this.removeHoverAnimation()))}))}async handleKeyDown(e){var o,t;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const n=await this.getRadios(),i=n.find((e=>Boolean(e.checked)));if(!i)return void this.valueChange.emit(n[0].value);let r;switch(e.key){case"ArrowDown":case"ArrowRight":r=null!==(o=i.nextElementSibling)&&void 0!==o?o:n[0];break;case"ArrowUp":case"ArrowLeft":r=null!==(t=i.previousElementSibling)&&void 0!==t?t:n[n.length-1];break}this.valueChange.emit(r.value)}async addHoverAnimation(e){const o=await this.getRadios(),t=o.find((e=>Boolean(e.checked)));t&&e!==t&&t.classList.add("ino-checked-hover")}async removeHoverAnimation(){const e=await this.getRadios(),o=e.find((e=>e.classList.contains("ino-checked-hover")));o&&o.classList.remove("ino-checked-hover")}async updateRadios(e){const o=await this.getRadios();let t=!1;for(const n of o)n.checked&&n.classList.remove("ino-checked-hover"),t||n.value!==e?n.checked=!1:(t=!0,n.checked=!0);t||console.warn(`No ino-radio button with value=${e} was found.`)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=(0,i.c)({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":"vertical"===this.alignment,"ino-radio-group-wrapper--horizontal":"horizontal"===this.alignment});return(0,n.h)(n.H,null,(0,n.h)("div",{class:e,tabIndex:0},(0,n.h)("slot",null)))}get el(){return(0,n.g)(this)}static get watchers(){return{value:["valueChanged"]}}};a.style=r}}]);
//# sourceMappingURL=5829.5ccd4ce2.js.map