"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[6968],{4454:(v,d,s)=>{s.d(d,{c:()=>i});var l,a={exports:{}};l=a,function(){var p={}.hasOwnProperty;function c(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,u(r)))}return e}function u(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return c.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)p.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}l.exports?(c.default=c,l.exports=c):window.classNames=c}();const i=a.exports},6968:(v,d,s)=>{s.r(d),s.d(d,{ino_radio_group:()=>u});var a=s(9671),i=s(5978),l=s(4454);const u=class{constructor(o){(0,i.r)(this,o),this.valueChange=(0,i.c)(this,"valueChange",7),this.value=void 0,this.alignment="horizontal"}valueChanged(o){this.updateRadios(o)}handleCheckedChange(o){this.valueChange.emit(o.target.value)}handleMouseOver(o){this.addHoverAnimation(o.target)}handleMouseOut(){this.removeHoverAnimation()}componentDidLoad(){var o=this;return(0,a.Z)(function*(){o.updateRadios(o.value)})()}handleKeyDown(o){var e=this;return(0,a.Z)(function*(){var t,r;if(!o.key.startsWith("Arrow"))return;o.preventDefault();const n=yield e.getRadios(),h=n.find(_=>Boolean(_.checked));if(!h)return void e.valueChange.emit(n[0].value);let f;switch(o.key){case"ArrowDown":case"ArrowRight":f=null!==(t=h.nextElementSibling)&&void 0!==t?t:n[0];break;case"ArrowUp":case"ArrowLeft":f=null!==(r=h.previousElementSibling)&&void 0!==r?r:n[n.length-1]}e.valueChange.emit(f.value)})()}addHoverAnimation(o){var e=this;return(0,a.Z)(function*(){const r=(yield e.getRadios()).find(n=>Boolean(n.checked));!r||o===r||r.classList.add("ino-checked-hover")})()}removeHoverAnimation(){var o=this;return(0,a.Z)(function*(){const t=(yield o.getRadios()).find(r=>r.classList.contains("ino-checked-hover"));t&&t.classList.remove("ino-checked-hover")})()}updateRadios(o){var e=this;return(0,a.Z)(function*(){const t=yield e.getRadios();let r=!1;for(const n of t)n.checked&&n.classList.remove("ino-checked-hover"),r||n.value!==o?n.checked=!1:(r=!0,n.checked=!0);r||console.warn(`No ino-radio button with value=${o} was found.`)})()}getRadios(){return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")))}render(){const o=(0,l.c)({"ino-radio-group-wrapper":!0,"ino-radio-group-wrapper--vertical":"vertical"===this.alignment,"ino-radio-group-wrapper--horizontal":"horizontal"===this.alignment});return(0,i.h)(i.H,{key:"c9ffa45fdcbed734680858ccd4c438f49c0832ec"},(0,i.h)("div",{key:"9ca9cc2adbb388de4503528681e99f71292c2f4c",class:o,tabIndex:0},(0,i.h)("slot",{key:"b0b9b02683f77c05127ec581f8564c7110c825aa"})))}get el(){return(0,i.g)(this)}static get watchers(){return{value:["valueChanged"]}}};u.style="ino-radio-group .ino-radio-group-wrapper{width:fit-content;display:flex}ino-radio-group .ino-radio-group-wrapper--vertical{flex-direction:column}ino-radio-group .ino-radio-group-wrapper--horizontal{flex-direction:row}ino-radio-group ino-radio:last-child{margin-right:8px}"}}]);