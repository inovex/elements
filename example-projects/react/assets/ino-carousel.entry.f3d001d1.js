import{r as o,c as l,h as i,H as r,g as n}from"./index.02845a98.js";import{c as a}from"./index-b7e5b0c5.07a60787.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const c="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms)}.ino-carousel{width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#DFDEE6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}",u=class{constructor(t){o(this,t),this.valueChange=l(this,"valueChange",7),this.allSlides=[],this.currentSlideEl=null,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1,this.onSlotChanged=()=>{this.allSlides=Array.from(this.el.getElementsByTagName("ino-carousel-slide")),this.allSlides.length===0&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")}}valueChanged(t){const s=this.allSlides.find(e=>e.value===t);this.currentSlideEl&&(this.currentSlideEl.selected=!1),s.selected=!0,this.currentSlideEl=s,this.setupTimer()}onTimerPropsChange(){this.setupTimer()}componentDidLoad(){this.setupTimer(),this.onSlotChanged(),this.value==null?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}disconnectedCallback(){clearInterval(this.timer)}setupTimer(){clearInterval(this.timer),this.autoplay&&(this.timer=setInterval(()=>this.emitNextSlide(this.reverse?"previous":"next"),this.intermission))}emitNextSlide(t="next"){var s;let e=t==="next"?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;if(!this.infinite){this.valueChange.emit((s=e==null?void 0:e.value)!==null&&s!==void 0?s:this.currentSlideEl.value);return}t==="previous"?e=e!=null?e:this.allSlides[this.allSlides.length-1]:e=e!=null?e:this.allSlides[0],this.valueChange.emit(e.value)}render(){return i(r,{class:"ino-carousel"},i("div",{class:"ino-carousel__container"},i("div",{class:"ino-carousel__slides"},i("slot",{onSlotchange:this.onSlotChanged})),!this.hideButtons&&i("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},i("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitNextSlide("previous")})),!this.hideButtons&&i("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},i("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitNextSlide("next")})),i("div",{class:"ino-carousel__stepper"},this.allSlides.map(t=>i("div",{class:a({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":t===this.currentSlideEl}),onClick:()=>this.valueChange.emit(t.value)})))))}get el(){return n(this)}static get watchers(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}};u.style=c;export{u as ino_carousel};