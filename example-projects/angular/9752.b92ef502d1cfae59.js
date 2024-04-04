"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[9752],{2323:(m,d,p)=>{function n(){return"_"+Math.random().toString(36).substr(2,9)}function a(o,s){return o.querySelector(`[slot="${s}"]`)}function l(o,s){var i;return s?o.querySelectorAll(`[slot="${s}"]`).length>0:0===(null===(i=o.querySelector("slot"))||void 0===i?void 0:i.assignedElements().length)}function u(o){var s;null===(s=o.querySelector("[data-ino-focus]"))||void 0===s||s.focus()}function c(o){o.stopPropagation(),o.preventDefault()}p.d(d,{a:()=>a,f:()=>u,g:()=>n,h:()=>l,p:()=>c})},4454:(m,d,p)=>{p.d(d,{c:()=>a});var l,n={exports:{}};l=n,function(){var u={}.hasOwnProperty;function c(){for(var i="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(i=s(i,o(e)))}return i}function o(i){if("string"==typeof i||"number"==typeof i)return i;if("object"!=typeof i)return"";if(Array.isArray(i))return c.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var r="";for(var e in i)u.call(i,e)&&i[e]&&(r=s(r,e));return r}function s(i,r){return r?i?i+" "+r:i+r:i}l.exports?(c.default=c,l.exports=c):window.classNames=c}();const a=n.exports},9752:(m,d,p)=>{p.r(d),p.d(d,{ino_button:()=>o,ino_spinner:()=>r});var n=p(5978),a=p(4454),l=p(2323);const o=class{constructor(e){(0,n.r)(this,e),this.buttonSizeBeforeLoad=null,this.buttonHeightBeforeLoad=null,this.handleClick=t=>{if(this.disabled)return t.preventDefault(),void t.stopPropagation();const b=this.el.closest("form");if(b){t.preventDefault();const _=document.createElement("button");_.type=this.type,_.style.display="none",_.name="fake-button",b.appendChild(_),_.click(),_.remove()}},this.autoFocus=void 0,this.disabled=void 0,this.name=void 0,this.form=void 0,this.type="button",this.variant="filled",this.dense=!1,this.loading=void 0}loadingChanged(e){if(e){const t=window.getComputedStyle(this.buttonEl);this.buttonSizeBeforeLoad=t.width,this.buttonHeightBeforeLoad=t.height}else this.buttonSizeBeforeLoad=null}componentDidUpdate(){this.loading&&this.buttonSizeBeforeLoad&&(this.buttonEl.style.setProperty("width",this.buttonSizeBeforeLoad),this.buttonEl.style.setProperty("height",this.buttonHeightBeforeLoad))}render(){const e=(0,a.c)({"ino-button--loading":this.loading}),t=(0,l.h)(this.el,"icon-leading"),b=(0,l.h)(this.el,"icon-trailing"),_=(0,a.c)("button",`button__variant--${this.variant}`,{"button__icon--leading":t,"button__icon--trailing":b,"button--dense":this.dense}),f=(0,a.c)("button__label",{"button__label--hide":this.loading});return(0,n.h)(n.H,{key:"55b2ca99a1919d5b99f06a981cf5ab0d50c422bb",class:e,onClick:this.handleClick},(0,n.h)("button",{key:"2eed485ee6f837c4b672e23ca219086f959cf0c1",class:_,autoFocus:this.autoFocus,disabled:this.disabled,name:this.name,type:this.type,form:this.form,ref:y=>this.buttonEl=y},t&&(0,n.h)("span",{class:"icon__wrapper"},(0,n.h)("slot",{name:"icon-leading"})),(0,n.h)("span",{key:"fd997e592854883ece1cbba13d9e659f3abec3fe",class:f},(0,n.h)("slot",{key:"05af5a13ed255fad08a14f2ae172a4122b15efa5"})),this.loading&&(0,n.h)("ino-spinner",{height:20,width:20,type:"circle"}),b&&(0,n.h)("span",{class:"icon__wrapper"},(0,n.h)("slot",{name:"icon-trailing"}))))}get el(){return(0,n.g)(this)}static get watchers(){return{loading:["loadingChanged"]}}};o.style='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#4655ff}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#4655ff}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#4655ff}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}ino-button{display:inline-block}ino-button .button{display:flex;flex-direction:row;justify-content:center;align-items:center;column-gap:8px;padding:8px 16px;min-height:36px;line-break:auto;line-height:100%;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:700;cursor:pointer}ino-button .button.button--dense{padding:6px 16px;min-height:32px}ino-button .button.button__icon--leading{padding-left:8px}ino-button .button.button__icon--trailing{padding-right:8px}ino-button .icon__wrapper{height:16px}ino-button .button__label--hide{display:none}ino-button .button__variant--filled{background-color:#2c02ff;border-color:transparent;color:white;text-align:center;border-radius:24px 0 24px 24px;animation:border-round-to-edged 0.15s}@keyframes border-round-to-edged{from{border-radius:24px 24px 24px 24px}to{border-radius:24px 0 24px 24px}}ino-button .button__variant--filled:hover{background-color:#4b4eff;box-shadow:0 2px 2px rgba(45, 93, 255, 0.3019607843);border-radius:24px 24px 24px 24px;animation:border-edged-to-round 0.15s}@keyframes border-edged-to-round{from{border-radius:24px 0 24px 24px}to{border-radius:24px 24px 24px 24px}}ino-button .button__variant--filled:focus{background-color:#3d40f5;box-shadow:0 0 0 3px rgba(45, 93, 255, 0.3019607843)}ino-button .button__variant--filled:active{background-color:#3d40f5;box-shadow:none}ino-button .button__variant--filled:disabled{pointer-events:none;color:#7275a1;background-color:#edeff5}ino-button .button__variant--filled .icon__wrapper{--ino-icon-color-primary:$white}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--outlined{background-color:rgba(255, 255, 255, 0);border:solid 1.5px #3d40f5;border-radius:19px;color:#2c02ff;letter-spacing:0.27px}ino-button .button__variant--outlined:hover{background-color:#e8edff}ino-button .button__variant--outlined:focus{box-shadow:0 0 0 3px rgba(45, 93, 255, 0.3019607843)}ino-button .button__variant--outlined:active{background-color:#d7e0ff;border-color:#3d40f5;box-shadow:none}ino-button .button__variant--outlined:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff;border-color:#7275a1}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text{background-color:transparent;border:3px transparent;color:#2c02ff;border-radius:19px}ino-button .button__variant--text:hover{background-color:#e8edff;border-color:transparent}ino-button .button__variant--text:focus{border:none;box-shadow:0 0 0 3px rgba(45, 93, 255, 0.3019607843)}ino-button .button__variant--text:active{background-color:#d7e0ff;box-shadow:none}ino-button .button__variant--text:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button.ino-button--loading{pointer-events:none}';const r=class{constructor(e){(0,n.r)(this,e),this.type="tile",this.modal=!1,this.height=40,this.width=40}tileTemplate(){return[(0,n.h)("div",{class:"ino-spinner__rect1"}),(0,n.h)("div",{class:"ino-spinner__rect2"}),(0,n.h)("div",{class:"ino-spinner__rect3"}),(0,n.h)("div",{class:"ino-spinner__rect4"}),(0,n.h)("div",{class:"ino-spinner__rect5"})]}bounceTemplate(){return[(0,n.h)("div",{class:"ino-spinner__double-bounce-1"}),(0,n.h)("div",{class:"ino-spinner__double-bounce-2"})]}circleTemplate(){return[(0,n.h)("div",{class:"ino-spinner__circle-1"}),(0,n.h)("div",{class:"ino-spinner__circle-2"}),(0,n.h)("div",{class:"ino-spinner__circle-3"}),(0,n.h)("div",{class:"ino-spinner__circle-4"}),(0,n.h)("div",{class:"ino-spinner__circle-5"}),(0,n.h)("div",{class:"ino-spinner__circle-6"}),(0,n.h)("div",{class:"ino-spinner__circle-7"}),(0,n.h)("div",{class:"ino-spinner__circle-8"}),(0,n.h)("div",{class:"ino-spinner__circle-9"}),(0,n.h)("div",{class:"ino-spinner__circle-10"}),(0,n.h)("div",{class:"ino-spinner__circle-11"}),(0,n.h)("div",{class:"ino-spinner__circle-12"})]}render(){const e=(0,a.c)(`ino-spinner--type-${this.type}`,{"ino-spinner--modal":this.modal});let t;return"tile"===this.type?t=this.tileTemplate():"bounce"===this.type?t=this.bounceTemplate():"circle"===this.type&&(t=this.circleTemplate()),(0,n.h)(n.H,{key:"ad91e465648efad2cedb32d4e29638aa6d2a6e77",class:e},(0,n.h)("div",{key:"b32b8a7e6ceda8d5996c9ae23c92e35bc35a9a79",class:"ino-spinner__composer",style:{width:`${this.width}px`,height:`${this.height}px`}},t))}};r.style='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#4655ff}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#4655ff}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#4655ff}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}'}}]);