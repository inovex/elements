(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1714],{5897:(e,i,t)=>{"use strict";t.d(i,{a:()=>o,c:()=>l,g:()=>r});var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l(e,i,t){return e(t={path:i,exports:{},require:function(e,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}},4898:(e,i,t)=>{"use strict";t.d(i,{c:()=>o});var o=(0,t(5897).c)(function(e){!function(){var i={}.hasOwnProperty;function t(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var n=t.apply(null,r);n&&e.push(n)}else if("object"===l)for(var s in r)i.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}()})},1714:(e,i,t)=>{"use strict";t.r(i),t.d(i,{ino_carousel:()=>l});var o=t(648),r=t(4898);t(5897);const l=class{constructor(e){(0,o.r)(this,e),this.valueChange=(0,o.c)(this,"valueChange",7),this.allSlides=[],this.currentSlideEl=null,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1,this.onSlotChanged=()=>{this.allSlides=Array.from(this.el.getElementsByTagName("ino-carousel-slide")),0===this.allSlides.length&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")}}valueChanged(e){const i=this.allSlides.find(i=>i.value===e);this.currentSlideEl&&(this.currentSlideEl.selected=!1),i.selected=!0,this.currentSlideEl=i,this.setupTimer()}onTimerPropsChange(){this.setupTimer()}componentDidLoad(){this.setupTimer(),this.onSlotChanged(),null==this.value?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}disconnectedCallback(){clearInterval(this.timer)}setupTimer(){clearInterval(this.timer),this.autoplay&&(this.timer=setInterval(()=>this.emitNextSlide(this.reverse?"previous":"next"),this.intermission))}emitNextSlide(e="next"){var i;let t="next"===e?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;this.infinite?(t="previous"===e?null!=t?t:this.allSlides[this.allSlides.length-1]:null!=t?t:this.allSlides[0],this.valueChange.emit(t.value)):this.valueChange.emit(null!==(i=null==t?void 0:t.value)&&void 0!==i?i:this.currentSlideEl.value)}render(){return(0,o.h)(o.H,{class:"ino-carousel"},(0,o.h)("div",{class:"ino-carousel__container"},(0,o.h)("div",{class:"ino-carousel__slides"},(0,o.h)("slot",{onSlotchange:this.onSlotChanged})),!this.hideButtons&&(0,o.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},(0,o.h)("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitNextSlide("previous")})),!this.hideButtons&&(0,o.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},(0,o.h)("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitNextSlide("next")})),(0,o.h)("div",{class:"ino-carousel__stepper"},this.allSlides.map(e=>(0,o.h)("div",{class:(0,r.c)({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":e===this.currentSlideEl}),onClick:()=>this.valueChange.emit(e.value)})))))}get el(){return(0,o.g)(this)}static get watchers(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}};l.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms)}.ino-carousel{width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#DFDEE6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}"}}]);