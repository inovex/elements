"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[5932],{3662:function(e,i,t){t.d(i,{a:function(){return o},c:function(){return r},g:function(){return n}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var o="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t.g?t.g:"undefined"!==typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function r(e,i,t){return t={path:i,exports:{},require:function(e,i){return l()}},e(t,t.exports),t.exports}function l(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},2183:function(e,i,t){t.d(i,{c:function(){return n}});var o=t(3662),n=(0,o.c)((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var i={}.hasOwnProperty;function t(){for(var e=[],o=0;o<arguments.length;o++){var n=arguments[o];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=t.apply(null,n);l&&e.push(l)}else if("object"===r)for(var s in n)i.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()}));
/*!
 * Crafted with ❤ by inovex GmbH
 */},5932:function(e,i,t){t.r(i),t.d(i,{ino_carousel:function(){return l}});var o=t(1817),n=t(2183);t(3662);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const r="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms);width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#DFDEE6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}",l=class{constructor(e){(0,o.r)(this,e),this.valueChange=(0,o.c)(this,"valueChange",7),this.allSlides=[],this.currentSlideEl=null,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1,this.onSlotChanged=()=>{this.allSlides=Array.from(this.el.getElementsByTagName("ino-carousel-slide")),0===this.allSlides.length&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")}}valueChanged(e){const i=this.allSlides.find((i=>i.value===e));if(!i)throw new Error(`<ino-carousel-slide> with value '${e}' could not be found in the children of <ino-carousel>`);this.currentSlideEl&&(this.currentSlideEl.selected=!1),i.selected=!0,this.currentSlideEl=i,this.setupTimer()}onTimerPropsChange(){this.setupTimer()}componentDidLoad(){this.setupTimer(),this.onSlotChanged(),null==this.value?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}disconnectedCallback(){clearInterval(this.timer)}setupTimer(){clearInterval(this.timer),this.autoplay&&(this.timer=setInterval((()=>this.emitNextSlide(this.reverse?"previous":"next")),this.intermission))}emitNextSlide(e="next"){var i;let t="next"===e?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;this.infinite?(t="previous"===e?null!==t&&void 0!==t?t:this.allSlides[this.allSlides.length-1]:null!==t&&void 0!==t?t:this.allSlides[0],this.valueChange.emit(t.value)):this.valueChange.emit(null!==(i=null===t||void 0===t?void 0:t.value)&&void 0!==i?i:this.currentSlideEl.value)}render(){return(0,o.h)(o.H,{class:"ino-carousel"},(0,o.h)("div",{class:"ino-carousel__container"},(0,o.h)("div",{class:"ino-carousel__slides"},(0,o.h)("slot",{onSlotchange:this.onSlotChanged})),!this.hideButtons&&(0,o.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},(0,o.h)("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitNextSlide("previous")})),!this.hideButtons&&(0,o.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},(0,o.h)("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitNextSlide("next")})),(0,o.h)("div",{class:"ino-carousel__stepper"},this.allSlides.map((e=>(0,o.h)("div",{class:(0,n.c)({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":e===this.currentSlideEl}),onClick:()=>this.valueChange.emit(e.value)}))))))}get el(){return(0,o.g)(this)}static get watchers(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}};l.style=r}}]);
//# sourceMappingURL=5932.38693dff.js.map