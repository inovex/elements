"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[1884],{6277:(h,d,s)=>{s.d(d,{a:()=>n,c:()=>l,g:()=>a});var n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function a(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function l(i,t,o){return i(o={path:t,exports:{},require:function(e,c){return function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}},4022:(h,d,s)=>{function n(){return"_"+Math.random().toString(36).substr(2,9)}function a(t,o){return t.querySelector(`[slot="${o}"]`)}function l(t,o){var e;return o?t.querySelectorAll(`[slot="${o}"]`).length>0:0===(null===(e=t.querySelector("slot"))||void 0===e?void 0:e.assignedElements().length)}function r(t){var o;null===(o=t.querySelector("[data-ino-focus]"))||void 0===o||o.focus()}function i(t){t.stopPropagation(),t.preventDefault()}s.d(d,{a:()=>a,f:()=>r,g:()=>n,h:()=>l,p:()=>i})},8728:(h,d,s)=>{s.d(d,{c:()=>a});var a=(0,s(6277).c)(function(l){!function(){var r={}.hasOwnProperty;function i(){for(var t=[],o=0;o<arguments.length;o++){var e=arguments[o];if(e){var c=typeof e;if("string"===c||"number"===c)t.push(e);else if(Array.isArray(e)){if(e.length){var f=i.apply(null,e);f&&t.push(f)}}else if("object"===c){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){t.push(e.toString());continue}for(var p in e)r.call(e,p)&&e[p]&&t.push(p)}}}return t.join(" ")}l.exports?(i.default=i,l.exports=i):window.classNames=i}()})},1884:(h,d,s)=>{s.r(d),s.d(d,{ino_fab_set:()=>t});var n=s(2975),a=s(8728),l=s(4022);s(6277);const t=class{constructor(o){(0,n.r)(this,o),this.dialDirection="top",this.topBottomLocation="bottom",this.leftRightLocation="left",this.openDial=!1}render(){const o=(0,a.c)({"ino-fab-set--open-dial":this.openDial},"ino-top-bottom-location-"+this.topBottomLocation,"ino-left-right-location-"+this.leftRightLocation),e=(0,a.c)({"ino-speed-dial":!0}),c=(0,a.c)("ino-fab-set-wrapper","ino-direction-"+this.dialDirection),f=(0,l.h)(this.el,"icon-closed"),p=(0,l.h)(this.el,"icon-opened");return(0,n.h)(n.H,{class:o},(0,n.h)("div",{class:c},(0,n.h)("div",{class:e},(0,n.h)("slot",null)),(0,n.h)("ino-fab",{id:"primary-fab",class:"ino-fab-set-button","edge-position":"none","tooltip-placement":"none"},f?(0,n.h)("slot",{slot:"icon-leading",name:"icon-closed"}):(0,n.h)("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--closed",slot:"icon-leading",icon:"_fab_set_arrow_up"}),p?(0,n.h)("slot",{slot:"icon-leading",name:"icon-opened"}):(0,n.h)("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--opened",slot:"icon-leading",icon:"_fab_set_arrow_down"}))))}get el(){return(0,n.g)(this)}};t.style=":host{position:fixed;display:flex;width:auto}:host .ino-fab-set-wrapper{display:flex}:host .ino-fab-set-wrapper ::slotted(*){padding:5px}:host .ino-fab-set-wrapper ::slotted(*) .mdc-fab .mdc-fab__icon{font-size:25px}:host .ino-fab-set-wrapper .ino-speed-dial{display:none;align-items:center}:host .ino-fab-set-wrapper .ino-fab-set-button{padding:5px;align-self:center}:host .ino-fab-set-wrapper ::slotted([slot=icon-opened]),:host .ino-fab-set-wrapper .ino-fab-set-icon--opened{display:none}:host .ino-fab-set-wrapper ::slotted([slot=icon-closed]),:host .ino-fab-set-wrapper .ino-fab-set-icon--closed{display:block}:host(.ino-fab-set--open-dial) .ino-speed-dial{display:flex}:host(.ino-fab-set--open-dial) ino-fab{transition-duration:100ms}:host(.ino-top-bottom-location-top){top:20px}:host(.ino-top-bottom-location-bottom){bottom:20px}:host(.ino-left-right-location-left){left:20px}:host(.ino-left-right-location-right){right:20px}:host .ino-direction-top.ino-fab-set-wrapper{flex-direction:column}:host .ino-direction-top.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-bottom .ino-fab-set-icon{transform:rotate(180deg)}:host .ino-direction-bottom.ino-fab-set-wrapper{flex-direction:column-reverse}:host .ino-direction-bottom.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-left .ino-fab-set-icon{transform:rotate(270deg)}:host .ino-direction-left.ino-fab-set-wrapper{flex-direction:row}:host .ino-direction-left.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-right .ino-fab-set-icon{transform:rotate(90deg)}:host .ino-direction-right.ino-fab-set-wrapper{flex-direction:row-reverse}:host .ino-direction-right.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}"}}]);