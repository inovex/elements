(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[5631],{5897:(e,c,t)=>{"use strict";t.d(c,{a:()=>i,c:()=>s,g:()=>d});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,c,t){return e(t={path:c,exports:{},require:function(e,c){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},t.exports),t.exports}},4898:(e,c,t)=>{"use strict";t.d(c,{c:()=>i});var i=(0,t(5897).c)(function(e){!function(){var c={}.hasOwnProperty;function t(){for(var e=[],i=0;i<arguments.length;i++){var d=arguments[i];if(d){var s=typeof d;if("string"===s||"number"===s)e.push(d);else if(Array.isArray(d)&&d.length){var r=t.apply(null,d);r&&e.push(r)}else if("object"===s)for(var o in d)c.call(d,o)&&d[o]&&e.push(o)}}return e.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t}()})},5631:(e,c,t)=>{"use strict";t.r(c),t.d(c,{ino_switch:()=>p});var i,d,s=t(648),r=t(4898),o=t(3865),a=t(3157),l=t(8939),h=t(8218);t(5897),function(e){e.PROCESSING="mdc-switch--processing",e.SELECTED="mdc-switch--selected",e.UNSELECTED="mdc-switch--unselected"}(i||(i={})),function(e){e.RIPPLE=".mdc-switch__ripple"}(d||(d={}));var n=new WeakMap,m=function(e){function c(){return null!==e&&e.apply(this,arguments)||this}return(0,l._)(c,e),c.prototype.init=function(){e.prototype.init.call(this),this.observe(this.adapter.state,{disabled:this.onDisabledChange,processing:this.onProcessingChange,selected:this.onSelectedChange})},c.prototype.initFromDOM=function(){this.setObserversEnabled(this.adapter.state,!1),this.adapter.state.selected=this.adapter.hasClass(i.SELECTED),this.onSelectedChange(),this.adapter.state.disabled=this.adapter.isDisabled(),this.adapter.state.processing=this.adapter.hasClass(i.PROCESSING),this.setObserversEnabled(this.adapter.state,!0),this.stopProcessingIfDisabled()},c.prototype.onDisabledChange=function(){this.adapter.setDisabled(this.adapter.state.disabled)},c.prototype.onProcessingChange=function(){this.toggleClass(this.adapter.state.processing,i.PROCESSING)},c.prototype.onSelectedChange=function(){this.adapter.setAriaChecked(String(this.adapter.state.selected)),this.toggleClass(this.adapter.state.selected,i.SELECTED),this.toggleClass(!this.adapter.state.selected,i.UNSELECTED)},c.prototype.toggleClass=function(e,c){e?this.adapter.addClass(c):this.adapter.removeClass(c)},c}(function(e){function c(c){var t=e.call(this,c)||this;return t.handleClick=t.handleClick.bind(t),t}return(0,l._)(c,e),c.prototype.init=function(){this.observe(this.adapter.state,{disabled:this.stopProcessingIfDisabled,processing:this.stopProcessingIfDisabled})},c.prototype.handleClick=function(){this.adapter.state.disabled||(this.adapter.state.selected=!this.adapter.state.selected)},c.prototype.stopProcessingIfDisabled=function(){this.adapter.state.disabled&&(this.adapter.state.processing=!1)},c}(function(e){function c(c){var t=e.call(this,c)||this;return t.unobserves=new Set,t}return(0,l._)(c,e),c.prototype.destroy=function(){e.prototype.destroy.call(this),this.unobserve()},c.prototype.observe=function(e,c){var t,i,d=this,s=[];try{for(var r=(0,l.b)(Object.keys(c)),o=r.next();!o.done;o=r.next()){var a=o.value,h=c[a].bind(this);s.push(this.observeProperty(e,a,h))}}catch(m){t={error:m}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}var n=function(){var e,c;try{for(var t=(0,l.b)(s),i=t.next();!i.done;i=t.next())(0,i.value)()}catch(r){e={error:r}}finally{try{i&&!i.done&&(c=t.return)&&c.call(t)}finally{if(e)throw e.error}}d.unobserves.delete(n)};return this.unobserves.add(n),n},c.prototype.observeProperty=function(e,c,t){return function(e,c,t){var i=function(e,c){var t=new Map;n.has(e)||n.set(e,{isEnabled:!0,getObservers:function(e){var c=t.get(e)||[];return t.has(e)||t.set(e,c),c},installedProperties:new Set});var i=n.get(e);if(i.installedProperties.has(c))return i;var d=function(e,c){for(var t,i=e;i&&!(t=Object.getOwnPropertyDescriptor(i,c));)i=Object.getPrototypeOf(i);return t}(e,c)||{configurable:!0,enumerable:!0,value:e[c],writable:!0},s=(0,l.a)({},d),r=d.get,o=d.set;if("value"in d){delete s.value,delete s.writable;var a=d.value;r=function(){return a},d.writable&&(o=function(e){a=e})}return r&&(s.get=function(){return r.call(this)}),o&&(s.set=function(e){var t,d,s=r?r.call(this):e;if(o.call(this,e),i.isEnabled&&(!r||e!==s))try{for(var a=(0,l.b)(i.getObservers(c)),h=a.next();!h.done;h=a.next())(0,h.value)(e,s)}catch(n){t={error:n}}finally{try{h&&!h.done&&(d=a.return)&&d.call(a)}finally{if(t)throw t.error}}}),i.installedProperties.add(c),Object.defineProperty(e,c,s),i}(e,c),d=i.getObservers(c);return d.push(t),function(){d.splice(d.indexOf(t),1)}}(e,c,t)},c.prototype.setObserversEnabled=function(e,c){!function(e,c){var t=n.get(e);t&&(t.isEnabled=c)}(e,c)},c.prototype.unobserve=function(){var e,c;try{for(var t=(0,l.b)((0,l.d)([],(0,l.e)(this.unobserves))),i=t.next();!i.done;i=t.next())(0,i.value)()}catch(d){e={error:d}}finally{try{i&&!i.done&&(c=t.return)&&c.call(t)}finally{if(e)throw e.error}}},c}(l.M))),w=function(e){function c(c,t){var i=e.call(this,c,t)||this;return i.root=c,i}return(0,l._)(c,e),c.attachTo=function(e){return new c(e)},c.prototype.initialize=function(){this.ripple=new h.M(this.root,this.createRippleFoundation())},c.prototype.initialSyncWithDOM=function(){var e=this.root.querySelector(d.RIPPLE);if(!e)throw new Error("Switch "+d.RIPPLE+" element is required.");this.rippleElement=e,this.root.addEventListener("click",this.foundation.handleClick),this.foundation.initFromDOM()},c.prototype.destroy=function(){e.prototype.destroy.call(this),this.ripple.destroy(),this.root.removeEventListener("click",this.foundation.handleClick)},c.prototype.getDefaultFoundation=function(){return new m(this.createAdapter())},c.prototype.createAdapter=function(){var e=this;return{addClass:function(c){e.root.classList.add(c)},hasClass:function(c){return e.root.classList.contains(c)},isDisabled:function(){return e.root.disabled},removeClass:function(c){e.root.classList.remove(c)},setAriaChecked:function(c){return e.root.setAttribute("aria-checked",c)},setDisabled:function(c){e.root.disabled=c},state:this}},c.prototype.createRippleFoundation=function(){return new h.b(this.createRippleAdapter())},c.prototype.createRippleAdapter=function(){var e=this;return(0,l.a)((0,l.a)({},h.M.createAdapter(this)),{computeBoundingRect:function(){return e.rippleElement.getBoundingClientRect()},isUnbounded:function(){return!0}})},c}(l.c);const p=class{constructor(e){(0,s.r)(this,e),this.checkedChange=(0,s.c)(this,"checkedChange",7),this.switchId=`ino-switch-id_${(0,o.a)()}`,this.checked=!1,this.colorScheme="primary",this.handleChange=e=>{e.stopPropagation(),this.disabled||this.checkedChange.emit(!this.checked)}}checkedChanged(e){this.mdcSwitch&&(this.mdcSwitch.selected=e)}componentDidLoad(){this.mdcSwitch=new w(this.mdcSwitchEl)}disconnectedCallback(){var e;null===(e=this.mdcSwitch)||void 0===e||e.destroy()}render(){const{el:e,name:c,disabled:t}=this;(0,a.r)(e,c,"",t).checked=this.checked;const i=(0,r.c)("ino-switch",`ino-switch--color-scheme-${this.colorScheme}`,{"ino-switch-disabled":this.disabled}),d=(0,r.c)("mdc-switch",this.checked?"mdc-switch--selected":"mdc-switch--unselected");return(0,s.h)(s.H,{class:i,checked:this.checked,disabled:this.disabled,onClick:this.handleChange},(0,s.h)("button",{id:this.switchId,ref:e=>this.mdcSwitchEl=e,class:d,disabled:this.disabled,type:"button",role:"switch","aria-checked":this.checked},(0,s.h)("div",{class:"mdc-switch__track"}),(0,s.h)("div",{class:"mdc-switch__handle-track"},(0,s.h)("div",{class:"mdc-switch__handle"},(0,s.h)("div",{class:"mdc-switch__ripple"})))),(0,s.h)("label",{htmlFor:this.switchId,onClick:e=>e.stopPropagation()},(0,s.h)("slot",null)))}get el(){return(0,s.g)(this)}static get watchers(){return{checked:["checkedChanged"]}}};p.style='.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-switch{align-items:center;background:none;border:none;cursor:pointer;display:inline-flex;flex-shrink:0;margin:0;outline:none;overflow:visible;padding:0;position:relative}.mdc-switch:disabled{cursor:default;pointer-events:none}.mdc-switch__track{overflow:hidden;position:relative;width:100%}.mdc-switch__track::before,.mdc-switch__track::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";height:100%;left:0;position:absolute;width:100%}.mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(-100%)}[dir=rtl] .mdc-switch__track::after,.mdc-switch__track[dir=rtl]::after{transform:translateX(100%);}.mdc-switch--selected .mdc-switch__track::before{transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__track::before,.mdc-switch--selected .mdc-switch__track[dir=rtl]::before{transform:translateX(-100%);}.mdc-switch--selected .mdc-switch__track::after{transition:transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);transform:translateX(0)}.mdc-switch__handle-track{height:100%;pointer-events:none;position:absolute;top:0;transition:transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);left:0;right:auto;transform:translateX(0)}[dir=rtl] .mdc-switch__handle-track,.mdc-switch__handle-track[dir=rtl]{left:auto;right:0;}.mdc-switch--selected .mdc-switch__handle-track{transform:translateX(100%)}[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track,.mdc-switch--selected .mdc-switch__handle-track[dir=rtl]{transform:translateX(-100%);}.mdc-switch__handle{display:flex;pointer-events:auto;position:absolute;top:50%;transform:translateY(-50%);left:0;right:auto}[dir=rtl] .mdc-switch__handle,.mdc-switch__handle[dir=rtl]{left:auto;right:0;}.mdc-switch__handle::before,.mdc-switch__handle::after{border:1px solid transparent;border-radius:inherit;box-sizing:border-box;content:"";width:100%;height:100%;left:0;position:absolute;top:0;transition:background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}.mdc-switch__shadow{border-radius:inherit;bottom:0;left:0;position:absolute;right:0;top:0}.mdc-elevation-overlay{bottom:0;left:0;right:0;top:0}.mdc-switch__ripple{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);z-index:-1}.mdc-switch:disabled .mdc-switch__ripple{display:none}.mdc-switch__icons{height:100%;position:relative;width:100%;z-index:1}.mdc-switch__icon{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0;opacity:0;transition:opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-switch--selected .mdc-switch__icon--on,.mdc-switch--unselected .mdc-switch__icon--off{opacity:1;transition:opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1)}.mdc-switch{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-switch .mdc-switch__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-switch .mdc-switch__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-switch.mdc-ripple-upgraded--unbounded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-switch.mdc-ripple-upgraded--foreground-activation .mdc-switch__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-switch.mdc-ripple-upgraded--foreground-deactivation .mdc-switch__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-switch .mdc-switch__ripple::before,.mdc-switch .mdc-switch__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::before,.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch.mdc-ripple-upgraded .mdc-switch__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-switch{width:36px;width:var(--mdc-switch-track-width, 36px)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__handle::after{background:#3d40f5;background:var(--mdc-switch-selected-handle-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-hover-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-focus-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after{background:#3d3e7b;background:var(--mdc-switch-selected-pressed-handle-color, #3d3e7b)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-selected-handle-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__handle::after{background:#616161;background:var(--mdc-switch-unselected-handle-color, #616161)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-hover-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-focus-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__handle::after{background:#212121;background:var(--mdc-switch-unselected-pressed-handle-color, #212121)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__handle::after{background:#424242;background:var(--mdc-switch-disabled-unselected-handle-color, #424242)}.mdc-switch .mdc-switch__handle::before{background:#fff;background:var(--mdc-switch-handle-surface-color, var(--mdc-theme-surface, #fff))}.mdc-switch:enabled .mdc-switch__shadow{box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)}.mdc-switch:disabled .mdc-switch__shadow{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-switch-disabled-handle-elevation, var(--mdc-elevation-box-shadow-for-gss));--mdc-elevation-box-shadow-for-gss:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-switch .mdc-switch__handle{height:20px;height:var(--mdc-switch-handle-height, 20px)}.mdc-switch:disabled .mdc-switch__handle::after{opacity:0.38;opacity:var(--mdc-switch-disabled-handle-opacity, 0.38)}.mdc-switch .mdc-switch__handle{border-radius:10px;border-radius:var(--mdc-switch-handle-shape, 10px)}.mdc-switch .mdc-switch__handle{width:20px;width:var(--mdc-switch-handle-width, 20px)}.mdc-switch .mdc-switch__handle-track{width:calc(100% - 20px);width:calc(100% - var(--mdc-switch-handle-width, 20px))}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-selected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:#fff;fill:var(--mdc-switch-disabled-unselected-icon-color, var(--mdc-theme-on-primary, #fff))}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:0.38;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 0.38)}.mdc-switch.mdc-switch--selected .mdc-switch__icon{width:18px;width:var(--mdc-switch-selected-icon-size, 18px);height:18px;height:var(--mdc-switch-selected-icon-size, 18px)}.mdc-switch.mdc-switch--unselected .mdc-switch__icon{width:18px;width:var(--mdc-switch-unselected-icon-size, 18px);height:18px;height:var(--mdc-switch-unselected-icon-size, 18px)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-hover-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-focus-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__ripple::after{background-color:#3d40f5;background-color:var(--mdc-switch-selected-pressed-state-layer-color, var(--mdc-theme-primary, #3d40f5))}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-hover-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-focus-state-layer-color, #424242)}.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after{background-color:#424242;background-color:var(--mdc-switch-unselected-pressed-state-layer-color, #424242)}.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-selected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--selected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--selected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-selected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--selected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--selected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-selected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus):hover .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:hover:not(:focus).mdc-ripple-surface--hover .mdc-switch__ripple::before{opacity:0.04;opacity:var(--mdc-switch-unselected-hover-state-layer-opacity, 0.04)}.mdc-switch.mdc-switch--unselected:enabled:focus.mdc-ripple-upgraded--background-focused .mdc-switch__ripple::before,.mdc-switch.mdc-switch--unselected:enabled:focus:not(.mdc-ripple-upgraded):focus .mdc-switch__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-switch-unselected-focus-state-layer-opacity, 0.12)}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded) .mdc-switch__ripple::after{transition:opacity 150ms linear}.mdc-switch.mdc-switch--unselected:enabled:active:not(.mdc-ripple-upgraded):active .mdc-switch__ripple::after{transition-duration:75ms;opacity:0.1;opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch.mdc-switch--unselected:enabled:active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-switch-unselected-pressed-state-layer-opacity, 0.1)}.mdc-switch .mdc-switch__ripple{height:48px;height:var(--mdc-switch-state-layer-size, 48px);width:48px;width:var(--mdc-switch-state-layer-size, 48px)}.mdc-switch .mdc-switch__track{height:14px;height:var(--mdc-switch-track-height, 14px)}.mdc-switch:disabled .mdc-switch__track{opacity:0.12;opacity:var(--mdc-switch-disabled-track-opacity, 0.12)}.mdc-switch:enabled .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-track-color, #cfcffd)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-hover-track-color, #cfcffd)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-focus-track-color, #cfcffd)}.mdc-switch:enabled:active .mdc-switch__track::after{background:#cfcffd;background:var(--mdc-switch-selected-pressed-track-color, #cfcffd)}.mdc-switch:disabled .mdc-switch__track::after{background:#424242;background:var(--mdc-switch-disabled-selected-track-color, #424242)}.mdc-switch:enabled .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-track-color, #e0e0e0)}.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-hover-track-color, #e0e0e0)}.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-focus-track-color, #e0e0e0)}.mdc-switch:enabled:active .mdc-switch__track::before{background:#e0e0e0;background:var(--mdc-switch-unselected-pressed-track-color, #e0e0e0)}.mdc-switch:disabled .mdc-switch__track::before{background:#424242;background:var(--mdc-switch-disabled-unselected-track-color, #424242)}.mdc-switch .mdc-switch__track{border-radius:7px;border-radius:var(--mdc-switch-track-shape, 7px)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mdc-switch:enabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__shadow{}.mdc-switch:disabled .mdc-switch__handle::after{opacity:1;opacity:var(--mdc-switch-disabled-handle-opacity, 1)}.mdc-switch.mdc-switch--selected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-selected-icon-color, ButtonText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-selected-icon-color, GrayText)}.mdc-switch.mdc-switch--unselected:enabled .mdc-switch__icon{fill:ButtonText;fill:var(--mdc-switch-unselected-icon-color, ButtonText)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icon{fill:GrayText;fill:var(--mdc-switch-disabled-unselected-icon-color, GrayText)}.mdc-switch.mdc-switch--selected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-selected-icon-opacity, 1)}.mdc-switch.mdc-switch--unselected:disabled .mdc-switch__icons{opacity:1;opacity:var(--mdc-switch-disabled-unselected-icon-opacity, 1)}.mdc-switch:disabled .mdc-switch__track{opacity:1;opacity:var(--mdc-switch-disabled-track-opacity, 1)}}ino-switch.ino-switch--color-scheme-primary{--mdc-switch-selected-handle-color:#3d40f5;--mdc-switch-selected-hover-handle-color:#3d40f5;--mdc-switch-selected-focus-handle-color:#3d40f5;--mdc-switch-selected-pressed-handle-color:#3d40f5;--mdc-switch-disabled-selected-handle-color:#5d60f7;--mdc-switch-selected-track-color:#5d60f7;--mdc-switch-selected-hover-track-color:#5d60f7;--mdc-switch-selected-focus-track-color:#5d60f7;--mdc-switch-selected-pressed-track-color:#5d60f7;--mdc-switch-unselected-focus-track-color:#3d40f5;--mdc-switch-unselected-hover-track-color:#3d40f5;--mdc-switch-disabled-selected-track-color:#5d60f7}ino-switch.ino-switch--color-scheme-primary:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-primary:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-primary:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #3d40f5}ino-switch.ino-switch--color-scheme-primary.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #5d60f7}ino-switch.ino-switch--color-scheme-secondary{--mdc-switch-selected-handle-color:#9ccd00;--mdc-switch-selected-hover-handle-color:#9ccd00;--mdc-switch-selected-focus-handle-color:#9ccd00;--mdc-switch-selected-pressed-handle-color:#9ccd00;--mdc-switch-disabled-selected-handle-color:#bbd962;--mdc-switch-selected-track-color:#bbd962;--mdc-switch-selected-hover-track-color:#bbd962;--mdc-switch-selected-focus-track-color:#bbd962;--mdc-switch-selected-pressed-track-color:#bbd962;--mdc-switch-unselected-focus-track-color:#9ccd00;--mdc-switch-unselected-hover-track-color:#9ccd00;--mdc-switch-disabled-selected-track-color:#bbd962}ino-switch.ino-switch--color-scheme-secondary:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-secondary:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-secondary:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #9ccd00}ino-switch.ino-switch--color-scheme-secondary.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #bbd962}ino-switch.ino-switch--color-scheme-success{--mdc-switch-selected-handle-color:#9ccd00;--mdc-switch-selected-hover-handle-color:#9ccd00;--mdc-switch-selected-focus-handle-color:#9ccd00;--mdc-switch-selected-pressed-handle-color:#9ccd00;--mdc-switch-disabled-selected-handle-color:#c8ff1b;--mdc-switch-selected-track-color:#c8ff1b;--mdc-switch-selected-hover-track-color:#c8ff1b;--mdc-switch-selected-focus-track-color:#c8ff1b;--mdc-switch-selected-pressed-track-color:#c8ff1b;--mdc-switch-unselected-focus-track-color:#9ccd00;--mdc-switch-unselected-hover-track-color:#9ccd00;--mdc-switch-disabled-selected-track-color:#c8ff1b}ino-switch.ino-switch--color-scheme-success:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-success:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-success:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #9ccd00}ino-switch.ino-switch--color-scheme-success.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #c8ff1b}ino-switch.ino-switch--color-scheme-warning{--mdc-switch-selected-handle-color:#ffde03;--mdc-switch-selected-hover-handle-color:#ffde03;--mdc-switch-selected-focus-handle-color:#ffde03;--mdc-switch-selected-pressed-handle-color:#ffde03;--mdc-switch-disabled-selected-handle-color:#ffe850;--mdc-switch-selected-track-color:#ffe850;--mdc-switch-selected-hover-track-color:#ffe850;--mdc-switch-selected-focus-track-color:#ffe850;--mdc-switch-selected-pressed-track-color:#ffe850;--mdc-switch-unselected-focus-track-color:#ffde03;--mdc-switch-unselected-hover-track-color:#ffde03;--mdc-switch-disabled-selected-track-color:#ffe850}ino-switch.ino-switch--color-scheme-warning:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-warning:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-warning:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #ffde03}ino-switch.ino-switch--color-scheme-warning.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #ffe850}ino-switch.ino-switch--color-scheme-error{--mdc-switch-selected-handle-color:#eb003b;--mdc-switch-selected-hover-handle-color:#eb003b;--mdc-switch-selected-focus-handle-color:#eb003b;--mdc-switch-selected-pressed-handle-color:#eb003b;--mdc-switch-disabled-selected-handle-color:#ff396a;--mdc-switch-selected-track-color:#ff396a;--mdc-switch-selected-hover-track-color:#ff396a;--mdc-switch-selected-focus-track-color:#ff396a;--mdc-switch-selected-pressed-track-color:#ff396a;--mdc-switch-unselected-focus-track-color:#eb003b;--mdc-switch-unselected-hover-track-color:#eb003b;--mdc-switch-disabled-selected-track-color:#ff396a}ino-switch.ino-switch--color-scheme-error:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-error:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-error:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #eb003b}ino-switch.ino-switch--color-scheme-error.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #ff396a}ino-switch.ino-switch--color-scheme-light{--mdc-switch-selected-handle-color:#c1c1c1;--mdc-switch-selected-hover-handle-color:#c1c1c1;--mdc-switch-selected-focus-handle-color:#c1c1c1;--mdc-switch-selected-pressed-handle-color:#c1c1c1;--mdc-switch-disabled-selected-handle-color:#e7e7e7;--mdc-switch-selected-track-color:#e7e7e7;--mdc-switch-selected-hover-track-color:#e7e7e7;--mdc-switch-selected-focus-track-color:#e7e7e7;--mdc-switch-selected-pressed-track-color:#e7e7e7;--mdc-switch-unselected-focus-track-color:#c1c1c1;--mdc-switch-unselected-hover-track-color:#c1c1c1;--mdc-switch-disabled-selected-track-color:#e7e7e7}ino-switch.ino-switch--color-scheme-light:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-light:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-light:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #c1c1c1}ino-switch.ino-switch--color-scheme-light.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #e7e7e7}ino-switch.ino-switch--color-scheme-dark{--mdc-switch-selected-handle-color:#777777;--mdc-switch-selected-hover-handle-color:#777777;--mdc-switch-selected-focus-handle-color:#777777;--mdc-switch-selected-pressed-handle-color:#777777;--mdc-switch-disabled-selected-handle-color:#9d9d9d;--mdc-switch-selected-track-color:#9d9d9d;--mdc-switch-selected-hover-track-color:#9d9d9d;--mdc-switch-selected-focus-track-color:#9d9d9d;--mdc-switch-selected-pressed-track-color:#9d9d9d;--mdc-switch-unselected-focus-track-color:#777777;--mdc-switch-unselected-hover-track-color:#777777;--mdc-switch-disabled-selected-track-color:#9d9d9d}ino-switch.ino-switch--color-scheme-dark:not(.ino-switch-disabled) .mdc-switch--selected .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-dark:not(.ino-switch-disabled) .mdc-switch--unselected:focus .mdc-switch__handle::after,ino-switch.ino-switch--color-scheme-dark:not(.ino-switch-disabled) .mdc-switch--unselected:hover .mdc-switch__handle::after{border:2px solid #777777}ino-switch.ino-switch--color-scheme-dark.ino-switch-disabled .mdc-switch--selected .mdc-switch__handle::after{border:2px solid #9d9d9d}ino-switch{display:flex;gap:5px;align-items:center;cursor:pointer;--mdc-switch-track-height:2px;--mdc-switch-handle-height:16px;--mdc-switch-handle-width:16px;--mdc-switch-selected-icon-size:10px;--mdc-switch-unselected-icon-size:10px;--mdc-switch-handle-surface-color:white;--mdc-switch-unselected-handle-color:white;--mdc-switch-unselected-track-color:#c1c1c1;--mdc-switch-disabled-unselected-handle-color:white;--mdc-switch-disabled-unselected-track-color:#c1c1c1;--mdc-switch-unselected-hover-handle-color:white;--mdc-switch-unselected-focus-handle-color:white;--mdc-switch-unselected-pressed-track-color:#c1c1c1;--mdc-switch-unselected-pressed-handle-color:white}ino-switch.ino-switch-disabled{cursor:default;pointer-events:none}ino-switch .mdc-switch__handle::after{border:2px solid #c1c1c1}ino-switch .mdc-switch__ripple{display:none}'}}]);