"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4257],{89:function(e,i,t){t.d(i,{a:function(){return o},c:function(){return n},g:function(){return r}});/*!
 * Crafted with ❤ by inovex GmbH
 */var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t.g?t.g:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,i,t){return e(t={path:i,exports:{},require:function(e,i){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}},939:function(e,i,t){t.d(i,{c:function(){return o}});/*!
 * Crafted with ❤ by inovex GmbH
 */var o=(0,t(89).c)(function(e){/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){var i={}.hasOwnProperty;function t(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)){if(r.length){var l=t.apply(null,r);l&&e.push(l)}}else if("object"===n){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var s in r)i.call(r,s)&&r[s]&&e.push(s)}}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}()})},4257:function(e,i,t){t.r(i),t.d(i,{ino_carousel:function(){return n}});var o=t(4735),r=t(939);t(89);let n=class{constructor(e){(0,o.r)(this,e),this.valueChange=(0,o.c)(this,"valueChange",7),this.currentSlideEl=null,this.onSlotChanged=()=>{this.allSlides=Array.from(this.el.getElementsByTagName("ino-carousel-slide")),0===this.allSlides.length&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")},this.allSlides=[],this.value=void 0,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1}valueChanged(e){let i=this.allSlides.find(i=>i.value===e);if(!i)throw Error(`<ino-carousel-slide> with value '${e}' could not be found in the children of <ino-carousel>`);this.currentSlideEl&&(this.currentSlideEl.selected=!1),i.selected=!0,this.currentSlideEl=i,this.setupTimer()}onTimerPropsChange(){this.setupTimer()}componentDidLoad(){this.setupTimer(),this.onSlotChanged(),null==this.value?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}disconnectedCallback(){clearInterval(this.timer)}setupTimer(){clearInterval(this.timer),this.autoplay&&(this.timer=setInterval(()=>this.emitNextSlide(this.reverse?"previous":"next"),this.intermission))}emitNextSlide(e="next"){var i;let t="next"===e?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;if(!this.infinite){this.valueChange.emit(null!==(i=null==t?void 0:t.value)&&void 0!==i?i:this.currentSlideEl.value);return}t="previous"===e?null!=t?t:this.allSlides[this.allSlides.length-1]:null!=t?t:this.allSlides[0],this.valueChange.emit(t.value)}render(){return(0,o.h)(o.H,{class:"ino-carousel"},(0,o.h)("div",{class:"ino-carousel__container"},(0,o.h)("div",{class:"ino-carousel__slides"},(0,o.h)("slot",{onSlotchange:this.onSlotChanged})),!this.hideButtons&&(0,o.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},(0,o.h)("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitNextSlide("previous")})),!this.hideButtons&&(0,o.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},(0,o.h)("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitNextSlide("next")})),(0,o.h)("div",{class:"ino-carousel__stepper"},this.allSlides.map(e=>(0,o.h)("div",{class:(0,r.c)({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":e===this.currentSlideEl}),onClick:()=>this.valueChange.emit(e.value)})))))}get el(){return(0,o.g)(this)}static get watchers(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}};n.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms);width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#dfdee6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}"}}]);