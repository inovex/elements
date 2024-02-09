"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[2768],{6277:(m,d,c)=>{c.d(d,{a:()=>t,c:()=>p,g:()=>a});var t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function a(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function p(i,r,e){return i(e={path:r,exports:{},require:function(n,o){return function l(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}},8728:(m,d,c)=>{c.d(d,{c:()=>a});var a=(0,c(6277).c)(function(p){!function(){var l={}.hasOwnProperty;function i(){for(var r=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var o=typeof n;if("string"===o||"number"===o)r.push(n);else if(Array.isArray(n)){if(n.length){var s=i.apply(null,n);s&&r.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){r.push(n.toString());continue}for(var u in n)l.call(n,u)&&n[u]&&r.push(u)}}}return r.join(" ")}p.exports?(i.default=i,p.exports=i):window.classNames=i}()})},2768:(m,d,c)=>{c.r(d),c.d(d,{ino_icon_button:()=>n});var t=c(405),a=c(8728),p=c(4023);c(6277),c(2168),c(5629);const n=class{constructor(o){(0,t.r)(this,o),this.clickEl=(0,t.c)(this,"clickEl",7),this.attrs=void 0,this.autoFocus=void 0,this.disabled=void 0,this.activated=void 0,this.filled=void 0,this.icon=void 0,this.type="button"}activatedChanged(o){o?this.maybeCreateRipple():this.maybeDestroyRipple()}clickHandler(o){this.disabled?(o.preventDefault(),o.stopPropagation()):this.clickEl.emit()}componentDidLoad(){this.maybeCreateRipple()}disconnectedCallback(){this.maybeDestroyRipple()}maybeCreateRipple(){this.activated||(this.mdcInstance=new p.M(this.el.querySelector(".mdc-icon-button")),this.mdcInstance.unbounded=!0)}maybeDestroyRipple(){var o;null===(o=this.mdcInstance)||void 0===o||o.destroy()}render(){const o=(0,a.c)({"ino-icon-button--filled":this.filled}),s=(0,a.c)({"mdc-icon-button":!0,"mdc-ripple-upgraded--background-focused":this.activated,"ino-icon-button-filled":this.filled,"ino-icon-button--disabled":this.disabled});return(0,t.h)(t.H,{class:o},(0,t.h)("button",Object.assign({autoFocus:this.autoFocus,class:s,disabled:this.disabled,type:this.type},this.attrs),(0,t.h)("div",{class:"mdc-icon-button__ripple"}),(0,t.h)("span",{class:"mdc-icon-button__icon"},this.icon?(0,t.h)("ino-icon",{icon:this.icon}):(0,t.h)("slot",null))))}get el(){return(0,t.g)(this)}static get watchers(){return{activated:["activatedChanged"]}}};n.style='.mdc-icon-button{font-size:24px;width:48px;height:48px;padding:12px}.mdc-icon-button.mdc-icon-button--reduced-size{width:40px;height:40px;padding:8px}.mdc-icon-button.mdc-icon-button--reduced-size.mdc-icon-button--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--touch{margin-top:0px;margin-bottom:0px}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-icon-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-button .mdc-icon-button__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-icon-button .mdc-icon-button__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-button.mdc-ripple-upgraded--unbounded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-button.mdc-ripple-upgraded--foreground-activation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-icon-button.mdc-ripple-upgraded--foreground-deactivation .mdc-icon-button__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button.mdc-ripple-upgraded .mdc-icon-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-button .mdc-icon-button__ripple::before,.mdc-icon-button .mdc-icon-button__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-icon-button:hover .mdc-icon-button__ripple::before,.mdc-icon-button.mdc-ripple-surface--hover .mdc-icon-button__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__ripple::before,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-icon-button:not(.mdc-ripple-upgraded) .mdc-icon-button__ripple::after{transition:opacity 150ms linear}.mdc-icon-button:not(.mdc-ripple-upgraded):active .mdc-icon-button__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-icon-button .mdc-icon-button__ripple{pointer-events:none;z-index:1}ino-icon-button{}ino-icon-button ino-icon{--icon-color:var(--ino-icon-button-icon-color, #4655ff);--ino-icon-height:var(--ino-icon-button-icon-size, 24px);--ino-icon-width:var(--ino-icon-button-icon-size, 24px)}ino-icon-button .mdc-icon-button{width:var(--ino-icon-button-size, 48px);height:var(--ino-icon-button-size, 48px);padding:calc((var(--ino-icon-button-size, 48px) - var(--ino-icon-button-icon-size, 24px)) / 2);font-size:var(--ino-icon-button-icon-size, 24px);background-color:var(--ino-icon-button-background-color, transparent);border-radius:50%}ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::before,ino-icon-button .mdc-icon-button .mdc-icon-button__ripple::after{background-color:var(--ino-icon-button-background-active-color, #4655ff)}ino-icon-button .mdc-icon-button.mdc-ripple-upgraded--background-focused ino-icon,ino-icon-button .mdc-icon-button:focus ino-icon{--icon-color:var(--ino-icon-button-icon-active-color, #4655ff)}ino-icon-button.ino-icon-button--filled{--ino-icon-button-icon-color:#fff;--ino-icon-button-icon-active-color:#fff;--ino-icon-button-background-color:#2d02ff;--ino-icon-button-background-active-color:#fff}.ino-icon-button--disabled.ino-icon-button-filled{--ino-icon-button-background-color:var(\n    --ino-icon-button-background-disabled-color,\n    #b6b4c4\n  )}.ino-icon-button--disabled.ino-icon-button-filled ino-icon{--ino-icon-button-icon-color:#fff}.ino-icon-button--disabled:not(.ino-icon-button-filled) ino-icon{--ino-icon-button-icon-color:var(\n    --ino-icon-button-icon-disabled-color,\n    #b6b4c4\n  )}'}}]);