"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[5829],{1231:function(e,n,t){t.d(n,{a:function(){return o},c:function(){return i},g:function(){return r}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var o="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function i(e,n,t){return t={path:n,exports:{},require:function(e,n){return a()}},e(t,t.exports),t.exports}function a(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},9776:function(e,n,t){t.d(n,{c:function(){return r}});t(6728);var o=t(1231),r=(0,o.c)((function(e){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var n={}.hasOwnProperty;function t(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=t.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}))},5829:function(e,n,t){t.r(n),t.d(n,{ino_radio_group:function(){return a}});var o=t(1297),r=t(9776);t(1231);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const i="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}",a=class{constructor(e){(0,o.r)(this,e),this.valueChange=(0,o.c)(this,"valueChange",7),this.alignment="horizontal"}valueChanged(e){this.updateRadios(e)}handleCheckedChange(e){const n=e.target;this.valueChange.emit(n.value)}handleMouseOver(e){const n=e.target;this.addHoverAnimation(n)}handleMouseOut(){this.removeHoverAnimation()}async componentDidLoad(){this.updateRadios(this.value)}async handleKeyDown(e){var n,t;if(!e.key.startsWith("Arrow"))return;e.preventDefault();const o=await this.getRadios(),r=o.find((e=>Boolean(e.checked)));if(!r)return void this.valueChange.emit(o[0].value);let i;switch(e.key){case"ArrowDown":case"ArrowRight":i=null!==(n=r.nextElementSibling)&&void 0!==n?n:o[0];break;case"ArrowUp":case"ArrowLeft":i=null!==(t=r.previousElementSibling)&&void 0!==t?t:o[o.length-1];break}this.valueChange.emit(i.value)}async addHoverAnimation(e){const n=await this.getRadios(),t=n.find((e=>Boolean(e.checked)));t&&e!==t&&t.classList.add("ino-checked-hover")}async removeHoverAnimation(){const e=await this.getRadios(),n=e.find((e=>e.classList.contains("ino-checked-hover")));n&&n.classList.remove("ino-checked-hover")}async updateRadios(e){const n=await this.getRadios();let t=!1;for(const o of n)o.checked&&o.classList.remove("ino-checked-hover"),t||o.value!==e?o.checked=!1:(t=!0,o.checked=!0);t||console.warn(`No ino-radio button with value=${e} was found.`)}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const e=(0,r.c)({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":"vertical"===this.alignment,"ino-radio-group-wrapper--horizontal":"horizontal"===this.alignment});return(0,o.h)(o.H,null,(0,o.h)("div",{class:e,tabIndex:0},(0,o.h)("slot",null)))}get el(){return(0,o.g)(this)}static get watchers(){return{value:["valueChanged"]}}};a.style=i}}]);
//# sourceMappingURL=5829.6d5f49ed.js.map