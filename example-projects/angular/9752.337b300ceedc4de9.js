"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[9752],{6277:(b,l,p)=>{p.d(l,{a:()=>n,c:()=>a,g:()=>c});var n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function c(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function a(r,i,o){return r(o={path:i,exports:{},require:function(e,s){return function u(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}},4022:(b,l,p)=>{function n(){return"_"+Math.random().toString(36).substr(2,9)}function c(i,o){return i.querySelector(`[slot="${o}"]`)}function a(i,o){var e;return o?i.querySelectorAll(`[slot="${o}"]`).length>0:0===(null===(e=i.querySelector("slot"))||void 0===e?void 0:e.assignedElements().length)}function u(i){var o;null===(o=i.querySelector("[data-ino-focus]"))||void 0===o||o.focus()}function r(i){i.stopPropagation(),i.preventDefault()}p.d(l,{a:()=>c,f:()=>u,g:()=>n,h:()=>a,p:()=>r})},8728:(b,l,p)=>{p.d(l,{c:()=>c});var c=(0,p(6277).c)(function(a){!function(){var u={}.hasOwnProperty;function r(){for(var i=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var s=typeof e;if("string"===s||"number"===s)i.push(e);else if(Array.isArray(e)){if(e.length){var t=r.apply(null,e);t&&i.push(t)}}else if("object"===s){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){i.push(e.toString());continue}for(var _ in e)u.call(e,_)&&e[_]&&i.push(_)}}}return i.join(" ")}a.exports?(r.default=r,a.exports=r):window.classNames=r}()})},9752:(b,l,p)=>{p.r(l),p.d(l,{ino_button:()=>i,ino_spinner:()=>e});var n=p(2975),c=p(8728),a=p(4022);p(6277);const i=class{constructor(s){(0,n.r)(this,s),this.type="button",this.variant="filled",this.dense=!1,this.buttonSizeBeforeLoad=null,this.buttonHeightBeforeLoad=null,this.handleClick=t=>{this.disabled&&(t.preventDefault(),t.stopPropagation());const _=this.el.closest("form");if(_){t.preventDefault();const d=document.createElement("button");d.type=this.type,d.style.display="none",d.name="fake-button",_.appendChild(d),d.click(),d.remove()}}}loadingChanged(s){if(s){const t=window.getComputedStyle(this.buttonEl);this.buttonSizeBeforeLoad=t.width,this.buttonHeightBeforeLoad=t.height}else this.buttonSizeBeforeLoad=null}componentDidUpdate(){this.loading&&this.buttonSizeBeforeLoad&&(this.buttonEl.style.setProperty("width",this.buttonSizeBeforeLoad),this.buttonEl.style.setProperty("height",this.buttonHeightBeforeLoad))}render(){const s=(0,c.c)({"ino-button--loading":this.loading}),t=(0,a.h)(this.el,"icon-leading"),_=(0,a.h)(this.el,"icon-trailing"),d=(0,c.c)("button",`button__variant--${this.variant}`,{"button__icon--leading":t,"button__icon--trailing":_,"button--dense":this.dense}),m=(0,c.c)("button__label",{"button__label--hide":this.loading});return(0,n.h)(n.H,{class:s,onClick:this.handleClick},(0,n.h)("button",{class:d,autoFocus:this.autoFocus,disabled:this.disabled,name:this.name,type:this.type,form:this.form,ref:f=>this.buttonEl=f},t&&(0,n.h)("span",{class:"icon__wrapper"},(0,n.h)("slot",{name:"icon-leading"})),(0,n.h)("span",{class:m},(0,n.h)("slot",null)),this.loading&&(0,n.h)("ino-spinner",{height:20,width:20,type:"circle"}),_&&(0,n.h)("span",{class:"icon__wrapper"},(0,n.h)("slot",{name:"icon-trailing"}))))}get el(){return(0,n.g)(this)}static get watchers(){return{loading:["loadingChanged"]}}};i.style='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}ino-button .button{display:flex;flex-direction:row;justify-content:center;align-items:center;column-gap:8px;padding:8px 16px;min-height:36px;line-break:auto;line-height:100%;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:700;cursor:pointer}ino-button .button.button--dense{padding:6px 16px;min-height:32px}ino-button .button.button__icon--leading{padding-left:8px}ino-button .button.button__icon--trailing{padding-right:8px}ino-button .icon__wrapper{height:16px}ino-button .button__label--hide{display:none}ino-button .button__variant--filled{background-color:#2c02ff;border-color:transparent;color:white;text-align:center;border-radius:24px 0 24px 24px;animation:border-round-to-edged 0.15s}@keyframes border-round-to-edged{from{border-radius:24px 24px 24px 24px}to{border-radius:24px 0 24px 24px}}ino-button .button__variant--filled:hover{background-color:#4B4EFF;box-shadow:0 2px 2px #2d5dff4d;border-radius:24px 24px 24px 24px;animation:border-edged-to-round 0.15s}@keyframes border-edged-to-round{from{border-radius:24px 0 24px 24px}to{border-radius:24px 24px 24px 24px}}ino-button .button__variant--filled:focus{background-color:#3D40F5;box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--filled:active{background-color:#3D40F5;box-shadow:none}ino-button .button__variant--filled:disabled{pointer-events:none;color:#7275a1;background-color:#edeff5}ino-button .button__variant--filled .icon__wrapper{--ino-icon-color-primary:$white}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--outlined{background-color:rgba(255, 255, 255, 0);border:solid 1.5px #3D40F5;border-radius:19px;color:#2c02ff;letter-spacing:0.27px}ino-button .button__variant--outlined:hover{background-color:#E8EDFF}ino-button .button__variant--outlined:focus{box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--outlined:active{background-color:#D7E0FF;border-color:#3D40F5;box-shadow:none}ino-button .button__variant--outlined:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff;border-color:#7275a1}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text{background-color:transparent;border:3px transparent;color:#2c02ff;border-radius:19px}ino-button .button__variant--text:hover{background-color:#E8EDFF;border-color:transparent}ino-button .button__variant--text:focus{border:none;box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--text:active{background-color:#D7E0FF;box-shadow:none}ino-button .button__variant--text:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button.ino-button--loading{pointer-events:none}';const e=class{constructor(s){(0,n.r)(this,s),this.type="tile",this.modal=!1,this.height=40,this.width=40}tileTemplate(){return[(0,n.h)("div",{class:"ino-spinner__rect1"}),(0,n.h)("div",{class:"ino-spinner__rect2"}),(0,n.h)("div",{class:"ino-spinner__rect3"}),(0,n.h)("div",{class:"ino-spinner__rect4"}),(0,n.h)("div",{class:"ino-spinner__rect5"})]}bounceTemplate(){return[(0,n.h)("div",{class:"ino-spinner__double-bounce-1"}),(0,n.h)("div",{class:"ino-spinner__double-bounce-2"})]}circleTemplate(){return[(0,n.h)("div",{class:"ino-spinner__circle-1"}),(0,n.h)("div",{class:"ino-spinner__circle-2"}),(0,n.h)("div",{class:"ino-spinner__circle-3"}),(0,n.h)("div",{class:"ino-spinner__circle-4"}),(0,n.h)("div",{class:"ino-spinner__circle-5"}),(0,n.h)("div",{class:"ino-spinner__circle-6"}),(0,n.h)("div",{class:"ino-spinner__circle-7"}),(0,n.h)("div",{class:"ino-spinner__circle-8"}),(0,n.h)("div",{class:"ino-spinner__circle-9"}),(0,n.h)("div",{class:"ino-spinner__circle-10"}),(0,n.h)("div",{class:"ino-spinner__circle-11"}),(0,n.h)("div",{class:"ino-spinner__circle-12"})]}render(){const s=(0,c.c)(`ino-spinner--type-${this.type}`,{"ino-spinner--modal":this.modal});let t;return"tile"===this.type?t=this.tileTemplate():"bounce"===this.type?t=this.bounceTemplate():"circle"===this.type&&(t=this.circleTemplate()),(0,n.h)(n.H,{class:s},(0,n.h)("div",{class:"ino-spinner__composer",style:{width:`${this.width}px`,height:`${this.height}px`}},t))}};e.style='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}'}}]);