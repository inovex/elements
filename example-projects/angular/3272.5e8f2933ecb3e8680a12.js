(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[3272],{5526:(e,c,t)=>{"use strict";t.d(c,{a:()=>i,c:()=>d,g:()=>s});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function s(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function d(e,c,t){return e(t={path:c,exports:{},require:function(e,c){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}},2146:(e,c,t)=>{"use strict";t.d(c,{c:()=>i});var i=(0,t(5526).c)(function(e){!function(){var c={}.hasOwnProperty;function t(){for(var e=[],i=0;i<arguments.length;i++){var s=arguments[i];if(s){var d=typeof s;if("string"===d||"number"===d)e.push(s);else if(Array.isArray(s)){if(s.length){var r=t.apply(null,s);r&&e.push(r)}}else if("object"===d){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var a in s)c.call(s,a)&&s[a]&&e.push(a)}}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}()})},3272:(e,c,t)=>{"use strict";t.r(c),t.d(c,{ino_switch:()=>u});var i,s,d=t(1221),r=t(2146),a=t(2353),o=t(6588),n=t(6772),l=t(2189),h=t(8094);t(5526),function(e){e.PROCESSING="mdc-switch--processing",e.SELECTED="mdc-switch--selected",e.UNSELECTED="mdc-switch--unselected"}(i||(i={})),function(e){e.RIPPLE=".mdc-switch__ripple"}(s||(s={}));var m=new WeakMap,p=function(e){function c(){return null!==e&&e.apply(this,arguments)||this}return(0,n._)(c,e),c.prototype.init=function(){e.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},c.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(i.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(i.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},c.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},c.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,i.PROCESSING)},c.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,i.SELECTED),this.toggleClass(!this.adapter.state.selected,i.UNSELECTED)},c.prototype.toggleClass=function(e,c){e?this.adapter.addClass(c):this.adapter.removeClass(c)},c}(function(e){function c(c){var t=e.call(this,c)||this;return t.handleClick=t.handleClick.bind(t),t}return(0,n._)(c,e),c.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},c.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},c.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},c}(function(e){function c(c){var t=e.call(this,c)||this;return t.unobserves=new Set,t}return(0,n._)(c,e),c.prototype.destroy=function(){e.prototype.destroy.call(this),this.unobserve()},c.prototype.observe=function(e,c){var t,i,s=this,d=[];try{for(var r=(0,n.b)(Object.keys(c)),a=r.next();!a.done;a=r.next()){var o=a.value,l=c[o].bind(this);d.push(this.observeProperty(e,o,l))}}catch(m){t={error:m}}finally{try{a&&!a.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}var h=function(){var e,c;try{for(var t=(0,n.b)(d),i=t.next();!i.done;i=t.next())(0,i.value)()}catch(r){e={error:r}}finally{try{i&&!i.done&&(c=t.return)&&c.call(t)}finally{if(e)throw e.error}}s.unobserves.delete(h)};return this.unobserves.add(h),h},c.prototype.observeProperty=function(e,c,t){return function(e,c,t){var i=function(e,c){var t=new Map;m.has(e)||m.set(e,{isEnabled:!0,getObservers:function(e){var c=t.get(e)||[];return t.has(e)||t.set(e,c),c},installedProperties:new Set});var i=m.get(e);if(i.installedProperties.has(c))return i;var s=function(e,c){for(var t,i=e;i&&!(t=Object.getOwnPropertyDescriptor(i,c));)i=Object.getPrototypeOf(i);return t}(e,c)||{configurable:!0,enumerable:!0,value:e[c],writable:!0},d=(0,n.a)({},s),r=s.get,a=s.set;if("value"in s){delete d.value,delete d.writable;var o=s.value;r=function(){return o},s.writable&&(a=function(e){o=e})}return r&&(d.get=function(){return r.call(this)}),a&&(d.set=function(e){var t,s,d=r?r.call(this):e;if(a.call(this,e),i.isEnabled&&(!r||e!==d))try{for(var o=(0,n.b)(i.getObservers(c)),l=o.next();!l.done;l=o.next())(0,l.value)(e,d)}catch(h){t={error:h}}finally{try{l&&!l.done&&(s=o.return)&&s.call(o)}finally{if(t)throw t.error}}}),i.installedProperties.add(c),Object.defineProperty(e,c,d),i}(e,c),s=i.getObservers(c);return s.push(t),function(){s.splice(s.indexOf(t),1)}}(e,c,t)},c.prototype.setObserversEnabled=function(e,c){!function(e,c){var t=m.get(e);t&&(t.isEnabled=c)}(e,c)},c.prototype.unobserve=function(){var e,c;try{for(var t=(0,n.b)((0,n.c)([],(0,n.d)(this.unobserves))),i=t.next();!i.done;i=t.next())(0,i.value)()}catch(s){e={error:s}}finally{try{i&&!i.done&&(c=t.return)&&c.call(t)}finally{if(e)throw e.error}}},c}(l.M))),w=function(e){function c(c,t){var i=e.call(this,c,t)||this;return i.root=c,i}return(0,n._)(c,e),c.attachTo=function(e){return new c(e)},c.prototype.initialize=function(){this.ripple=new h.M(this.root,this.createRippleFoundation())},c.prototype.initialSyncWithDOM=function(){var e=this.root.querySelector(s.RIPPLE);if(!e)throw new Error("Switch "+s.RIPPLE+" element is required.");this.rippleElement=e,this.root.addEventListener("click",this.foundation.handleClick),this.foundation.initFromDOM()},c.prototype.destroy=function(){e.prototype.destroy.call(this),this.ripple.destroy(),this.root.removeEventListener("click",this.foundation.handleClick)},c.prototype.getDefaultFoundation=function(){return new p(this.createAdapter())},c.prototype.createAdapter=function(){var e=this;return{addClass:function(c){e.root.classList.add(c)},hasClass:function(c){return e.root.classList.contains(c)},isDisabled:function(){return e.root.disabled},removeClass:function(c){e.root.classList.remove(c)},setAriaChecked:function(c){return e.root.setAttribute("aria-checked",c)},setDisabled:function(c){e.root.disabled=c},state:this}},c.prototype.createRippleFoundation=function(){return new h.b(this.createRippleAdapter())},c.prototype.createRippleAdapter=function(){var e=this;return(0,n.a)((0,n.a)({},h.M.createAdapter(this)),{computeBoundingRect:function(){return e.rippleElement.getBoundingClientRect()},isUnbounded:function(){return!0}})},c}(l.a);const u=class{constructor(e){(0,d.r)(this,e),this.checkedChange=(0,d.c)(this,"checkedChange",7),this.switchId=`ino-switch-id_${(0,a.g)()}`,this.checked=!1,this.handleChange=e=>{e.stopPropagation(),this.disabled||this.checkedChange.emit(!this.checked)}}checkedChanged(e){this.mdcSwitch&&(this.mdcSwitch.selected=e)}componentDidLoad(){this.mdcSwitch=new w(this.mdcSwitchEl),(0,a.h)(this.el,"leading")!=(0,a.h)(this.el,"trailing")&&console.error("[ino-switch] Two icons (leading & trailing) are required in order to use the icon switch.")}disconnectedCallback(){var e;null===(e=this.mdcSwitch)||void 0===e||e.destroy()}render(){const{el:e,name:c,disabled:t}=this;(0,o.r)(e,c,"",t).checked=this.checked;const i=(0,a.h)(this.el,"leading"),s=(0,a.h)(this.el,"trailing"),n=(0,r.c)("ino-switch",i||s?"ino-switch__icon-toggle":"ino-switch__default",{"ino-switch-disabled":this.disabled,"ino-switch-icon-disabled":this.disabled}),l=(0,r.c)("mdc-switch",this.checked?"mdc-switch--selected":"mdc-switch--unselected",{"mdc-switch":!0,"ino-switch__icon-toggle":i&&s}),h=(0,r.c)("mdc-switch__icons","switch-icon"),m=(0,r.c)(h,this.checked?"switch-icon--unselected":"switch-icon--selected"),p=(0,r.c)(h,this.checked?"switch-icon--selected":"switch-icon--unselected");return(0,d.h)(d.H,{class:n,checked:this.checked,disabled:this.disabled,onClick:this.handleChange},(0,d.h)("button",{id:this.switchId,ref:e=>this.mdcSwitchEl=e,class:l,disabled:this.disabled,type:"button",role:"switch","aria-checked":this.checked},i&&(0,d.h)("span",{class:m},(0,d.h)("slot",{name:"leading"})),(0,d.h)("div",{class:"mdc-switch__track"}),(0,d.h)("div",{class:"mdc-switch__handle-track"},(0,d.h)("div",{class:"mdc-switch__handle"},(0,d.h)("div",{class:"mdc-switch__ripple"}))),s&&(0,d.h)("span",{class:p},(0,d.h)("slot",{name:"trailing"}))),(0,d.h)("label",{htmlFor:this.switchId,onClick:e=>e.stopPropagation()},(0,d.h)("slot",null)))}get el(){return(0,d.g)(this)}static get watchers(){return{checked:["checkedChanged"]}}};u.style='.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%);}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%);}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0;}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%);}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0;}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mdc-switch{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch .mdc-switch__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-switch .mdc-switch__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#3d40f5;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-hover-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-focus-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-pressed-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-track-color, #cfcffd)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-hover-track-color, #cfcffd)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-focus-track-color, #cfcffd)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-pressed-track-color, #cfcffd)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-switch:enabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}ino-switch{display:flex;align-items:center;gap:10px}ino-switch:not(.ino-switch-disabled) .mdc-switch{cursor:pointer}ino-switch.ino-switch-disabled .mdc-switch{cursor:default;pointer-events:none}ino-switch .mdc-switch__ripple{display:none}ino-switch.ino-switch__default{height:22px;--mdc-switch-selected-handle-color:white;--mdc-switch-selected-hover-handle-color:white;--mdc-switch-selected-focus-handle-color:white;--mdc-switch-selected-pressed-handle-color:white;--mdc-switch-selected-track-color:#2c02ff;--mdc-switch-selected-hover-track-color:#2c02ff;--mdc-switch-selected-focus-track-color:#2c02ff;--mdc-switch-selected-pressed-track-color:#2c02ff;--mdc-switch-unselected-focus-track-color:#A3A0B3;--mdc-switch-unselected-hover-track-color:#A3A0B3;--mdc-switch-track-height:20px;--mdc-switch-track-width:36px;--mdc-switch-track-shape:18px;--mdc-switch-handle-height:16px;--mdc-switch-handle-width:16px;--mdc-switch-handle-shape:14px;--mdc-switch-selected-icon-size:10px;--mdc-switch-unselected-icon-size:10px;--mdc-switch-handle-surface-color:white;--mdc-switch-unselected-handle-color:white;--mdc-switch-unselected-track-color:#CAC8D5;--mdc-switch-unselected-hover-handle-color:white;--mdc-switch-unselected-focus-handle-color:white;--mdc-switch-unselected-pressed-handle-color:white;--mdc-switch-disabled-selected-handle-color:#DFDEE6;--mdc-switch-disabled-selected-track-color:transparent;--mdc-switch-disabled-unselected-track-color:transparent;--mdc-switch-disabled-unselected-handle-color:#DFDEE6;--mdc-switch-disabled-track-opacity:1;--mdc-switch-disabled-handle-opacity:1}ino-switch.ino-switch__default .mdc-switch--selected:focus .mdc-switch__track,ino-switch.ino-switch__default .mdc-switch--unselected:focus .mdc-switch__track{border:1.5px solid white;margin:-1.5px;box-shadow:0 0 0 5px #2d5dff4d}ino-switch.ino-switch__default .mdc-switch--selected .mdc-switch__handle{margin-left:-2px}ino-switch.ino-switch__default .mdc-switch--unselected .mdc-switch__handle{margin-left:2px}ino-switch.ino-switch__default .mdc-switch:disabled .mdc-switch__track{border:2px solid #DFDEE6;margin:-1.5px}ino-switch.ino-switch__icon-toggle .mdc-switch{display:flex;align-items:center;justify-content:center;height:36px;width:104px;--mdc-switch-selected-handle-color:white;--mdc-switch-selected-hover-handle-color:white;--mdc-switch-selected-focus-handle-color:white;--mdc-switch-selected-pressed-handle-color:white;--mdc-switch-selected-track-color:#DFDEE6;--mdc-switch-selected-hover-track-color:#DFDEE6;--mdc-switch-selected-focus-track-color:#DFDEE6;--mdc-switch-selected-pressed-track-color:#DFDEE6;--mdc-switch-track-height:36px;--mdc-switch-track-width:104px;--mdc-switch-track-shape:18px;--mdc-switch-handle-height:28px;--mdc-switch-handle-width:48px;--mdc-switch-handle-shape:14px;--mdc-switch-selected-icon-size:20px;--mdc-switch-unselected-icon-size:20px;--mdc-switch-handle-surface-color:white;--mdc-switch-unselected-handle-color:white;--mdc-switch-unselected-track-color:#DFDEE6;--mdc-switch-unselected-focus-track-color:#DFDEE6;--mdc-switch-unselected-hover-track-color:#DFDEE6;--mdc-switch-disabled-selected-track-color:transparent;--mdc-switch-disabled-selected-handle-color:white;--mdc-switch-disabled-unselected-handle-color:white;--mdc-switch-disabled-unselected-track-color:#F3F3F5;--mdc-switch-disabled-track-opacity:1;--mdc-switch-unselected-hover-handle-color:white;--mdc-switch-unselected-focus-handle-color:white;--mdc-switch-unselected-pressed-handle-color:white}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon{display:flex;justify-content:center;align-items:center;height:28px;width:48px;color:#7E7B91;fill:#7E7B91}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon ino-icon{--icon-width:20px;--icon-height:20px;--icon-color:#7E7B91}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon--selected ino-icon{--icon-color:#0d10f3;color:#0d10f3;fill:#0d10f3}ino-switch.ino-switch__icon-toggle .mdc-switch .switch-icon--unselected::after{content:"";position:absolute;top:0;left:0;background-color:transparent;transition:background-color 300ms linear;width:100%;height:100%;border-radius:32px;z-index:-1}ino-switch.ino-switch__icon-toggle .mdc-switch:hover .switch-icon--unselected::after{background-color:#F4F4F7}ino-switch.ino-switch__icon-toggle .mdc-switch.mdc-switch .mdc-switch__track{position:absolute}ino-switch.ino-switch__icon-toggle .mdc-switch.mdc-switch--selected .mdc-switch__handle{margin-left:-4px}ino-switch.ino-switch__icon-toggle .mdc-switch.mdc-switch--unselected .mdc-switch__handle{margin-left:4px}ino-switch.ino-switch-disabled.ino-switch__icon-toggle .switch-icon--selected ino-icon{--icon-color:#B6B4C4;color:#B6B4C4;fill:#B6B4C4}'}}]);