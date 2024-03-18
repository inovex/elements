import{r as s,c as r,h as t,H as l,g as n}from"./preview-849bb17f.js";import{c as a}from"./index-38c18b20-01ad82eb.js";import"./iframe-ff0a9d1d.js";import"../sb-preview/runtime.js";import"./index-bb1f01da.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-6a7eba8c.js";import"./index-99fb8227.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-94e15138.js";import"./index-73e85c0e.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const c="ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms);width:700px;height:400px}.ino-carousel__container{position:relative;overflow:hidden;height:100%;display:flex;flex-direction:column;gap:16px}.ino-carousel__slides{flex:1;display:grid}.ino-carousel__arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}.ino-carousel__arrow ino-icon{--icon-color:var(--carousel-icon-color)}.ino-carousel__arrow--left{left:16px}.ino-carousel__arrow--right{right:16px}.ino-carousel__stepper{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px}.ino-carousel__stepper-dot{width:10px;height:10px;border-radius:50%;background-color:#dfdee6;cursor:pointer;transition:background-color 300ms ease-in-out}.ino-carousel__stepper-dot--selected{background-color:#4655ff}",u=c,d=class{constructor(i){s(this,i),this.valueChange=r(this,"valueChange",7),this.currentSlideEl=null,this.onSlotChanged=()=>{this.allSlides=Array.from(this.el.getElementsByTagName("ino-carousel-slide")),this.allSlides.length===0&&console.warn("ino-carousel: No ino-carousel-slide elements have been found. Make sure to provide them via the default slot.")},this.allSlides=[],this.value=void 0,this.autoplay=!1,this.hideButtons=!1,this.infinite=!0,this.intermission=5e3,this.reverse=!1}valueChanged(i){const o=this.allSlides.find(e=>e.value===i);if(!o)throw new Error(`<ino-carousel-slide> with value '${i}' could not be found in the children of <ino-carousel>`);this.currentSlideEl&&(this.currentSlideEl.selected=!1),o.selected=!0,this.currentSlideEl=o,this.setupTimer()}onTimerPropsChange(){this.setupTimer()}componentDidLoad(){this.setupTimer(),this.onSlotChanged(),this.value==null?console.error("ino-carousel: A value is required."):this.valueChanged(this.value)}disconnectedCallback(){clearInterval(this.timer)}setupTimer(){clearInterval(this.timer),this.autoplay&&(this.timer=setInterval(()=>this.emitNextSlide(this.reverse?"previous":"next"),this.intermission))}emitNextSlide(i="next"){var o;let e=i==="next"?this.currentSlideEl.nextElementSibling:this.currentSlideEl.previousElementSibling;if(!this.infinite){this.valueChange.emit((o=e==null?void 0:e.value)!==null&&o!==void 0?o:this.currentSlideEl.value);return}i==="previous"?e=e??this.allSlides[this.allSlides.length-1]:e=e??this.allSlides[0],this.valueChange.emit(e.value)}render(){return t(l,{key:"870a87c7c031d0c644e075e82e9b0b07f81692b1",class:"ino-carousel"},t("div",{key:"5c58b513689e470762998701d483ede784176ffd",class:"ino-carousel__container"},t("div",{key:"3d3d24031c34a90a11e183bd20b7d3f81805311c",class:"ino-carousel__slides"},t("slot",{key:"64fa89e00286e3a815f6e93a3acbb9018223abeb",onSlotchange:this.onSlotChanged})),!this.hideButtons&&t("div",{class:"ino-carousel__arrow ino-carousel__arrow--left"},t("ino-icon-button",{icon:"arrow_left",onClick:()=>this.emitNextSlide("previous")})),!this.hideButtons&&t("div",{class:"ino-carousel__arrow ino-carousel__arrow--right"},t("ino-icon-button",{icon:"arrow_right",onClick:()=>this.emitNextSlide("next")})),t("div",{key:"588b94a73da224f347e374862515e25664d5306b",class:"ino-carousel__stepper"},this.allSlides.map(i=>t("div",{class:a({"ino-carousel__stepper-dot":!0,"ino-carousel__stepper-dot--selected":i===this.currentSlideEl}),onClick:()=>this.valueChange.emit(i.value)})))))}get el(){return n(this)}static get watchers(){return{value:["valueChanged"],autoplay:["onTimerPropsChange"],intermission:["onTimerPropsChange"],reverse:["onTimerPropsChange"]}}};d.style=u;export{d as ino_carousel};
