"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5720],{4996:function(e,i,t){t.d(i,{c:function(){return o}});/*!
 * Crafted with ❤ by inovex GmbH
 */var r={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){var e={}.hasOwnProperty;function i(){for(var r="",o=0;o<arguments.length;o++){var n=arguments[o];n&&(r=t(r,function(r){if("string"==typeof r||"number"==typeof r)return r;if("object"!=typeof r)return"";if(Array.isArray(r))return i.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var o="";for(var n in r)e.call(r,n)&&r[n]&&(o=t(o,n));return o}(n)))}return r}function t(e,i){return i?e?e+" "+i:e+i:e}r.exports?(i.default=i,r.exports=i):window.classNames=i}();let o=r.exports},5720:function(e,i,t){t.r(i),t.d(i,{ino_carousel:function(){return n}});var r=t(6259),o=t(4996);let n=class{valueChanged(e){let i=this.allSlides.find(i=>i.value===e);if(!i)throw Error("<ino-carousel-slide> with value '".concat(e,"' could not be found in the children of <ino-carousel>"));this.currentSlideEl&&(this.currentSlideEl.selected=!1),i.selected=!0,this.currentSlideEl=i,this.setupTimer()}onTimerPropsChange(){this.setupTimer()}componentDidLoad(){this.setupTimer(),this.onSlotChanged(),null==this.value?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}disconnectedCallback(){clearInterval(this.timer)}setupTimer(){clearInterval(this.timer),this.autoplay&&(this.timer=setInterval(()=>this.emitNextSlide(this.reverse?"previous":"next"),this.intermission))}emitNextSlide(){var e;let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"next",t="next"===i?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;if(!this.infinite){this.valueChange.emit(null!==(e=null==t?void 0:t.value)&&void 0!==e?e:this.currentSlideEl.value);return}t="previous"===i?null!=t?t:this.allSlides[this.allSlides.length-1]:null!=t?t:this.allSlides[0],this.valueChange.emit(t.value)}render(){return(0,r.h)(r.H,{key:"870a87c7c031d0c644e075e82e9b0b07f81692b1",class:"ino-carousel"},(0,r.h)("div",{key:"5c58b513689e470762998701d483ede784176ffd",class:"ino-carousel__container"},(0,r.h)("div",{key:"3d3d24031c34a90a11e183bd20b7d3f81805311c",class:"ino-carousel__slides"},(0,r.h)("slot",{key:"64fa89e00286e3a815f6e93a3acbb9018223abeb",onSlotchange:this.onSlotChanged})),!this.hideButtons&&(0,r.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},(0,r.h)("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitNextSlide("previous")})),!this.hideButtons&&(0,r.h)("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},(0,r.h)("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitNextSlide("next")})),(0,r.h)("div",{key:"588b94a73da224f347e374862515e25664d5306b",class:"ino-carousel__stepper"},this.allSlides.map(e=>(0,r.h)("div",{class:(0,o.c)({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":e===this.currentSlideEl}),onClick:()=>this.valueChange.emit(e.value)})))))}get el(){return(0,r.g)(this)}static get watchers(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}constructor(e){(0,r.r)(this,e),this.valueChange=(0,r.c)(this,"valueChange",7),this.currentSlideEl=null,this.onSlotChanged=()=>{this.allSlides=Array.from(this.el.getElementsByTagName("ino-carousel-slide")),0===this.allSlides.length&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")},this.allSlides=[],this.value=void 0,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1}};n.style="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms);width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#dfdee6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}"}}]);