"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[8592],{9806:(f,c,d)=>{d.d(c,{A:()=>s});var s=function(){function o(){this.rafIDs=new Map}return o.prototype.request=function(e,t){var a=this;this.cancel(e);var n=requestAnimationFrame(function(i){a.rafIDs.delete(e),t(i)});this.rafIDs.set(e,n)},o.prototype.cancel=function(e){var t=this.rafIDs.get(e);t&&(cancelAnimationFrame(t),this.rafIDs.delete(e))},o.prototype.cancelAll=function(){var e=this;this.rafIDs.forEach(function(t,a){e.cancel(a)})},o.prototype.getQueue=function(){var e=[];return this.rafIDs.forEach(function(t,a){e.push(a)}),e},o}()},6348:(f,c,d)=>{d.d(c,{F:()=>o});var s="mdc-dom-focus-sentinel",o=function(){function e(t,a){void 0===a&&(a={}),this.root=t,this.options=a,this.elFocusedBeforeTrapFocus=null}return e.prototype.trapFocus=function(){var t=this.getFocusableElements(this.root);if(0===t.length)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(t,this.options.initialFocusEl)},e.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+s)).forEach(function(t){t.parentElement.removeChild(t)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},e.prototype.wrapTabFocus=function(t){var a=this,n=this.createSentinel(),i=this.createSentinel();n.addEventListener("focus",function(){var r=a.getFocusableElements(t);r.length>0&&r[r.length-1].focus()}),i.addEventListener("focus",function(){var r=a.getFocusableElements(t);r.length>0&&r[0].focus()}),t.insertBefore(n,t.children[0]),t.appendChild(i)},e.prototype.focusInitialElement=function(t,a){var n=0;a&&(n=Math.max(t.indexOf(a),0)),t[n].focus()},e.prototype.getFocusableElements=function(t){return[].slice.call(t.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button")).filter(function(n){var i="true"===n.getAttribute("aria-disabled")||null!=n.getAttribute("disabled")||null!=n.getAttribute("hidden")||"true"===n.getAttribute("aria-hidden"),r=n.tabIndex>=0&&n.getBoundingClientRect().width>0&&!n.classList.contains(s)&&!i,u=!1;if(r){var l=getComputedStyle(n);u="none"===l.display||"hidden"===l.visibility}return r&&!u})},e.prototype.createSentinel=function(){var t=document.createElement("div");return t.setAttribute("tabindex","0"),t.setAttribute("aria-hidden","true"),t.classList.add(s),t},e}()},1525:(f,c,d)=>{function s(e){return null!=e&&""!==e.trim()}d.d(c,{h:()=>s,r:()=>o});const o=(e,t,a,n)=>{let i=e.querySelector("input.aux-input");return i||(i=e.ownerDocument.createElement("input"),i.type="hidden",i.classList.add("aux-input"),e.appendChild(i)),i.disabled=n,i.name=t,i.value=a||"",i}},2322:(f,c,d)=>{d.d(c,{a:()=>a,g:()=>t});var s={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}},o={animationend:{cssProperty:"animation",prefixed:"webkitAnimationEnd",standard:"animationend"},animationiteration:{cssProperty:"animation",prefixed:"webkitAnimationIteration",standard:"animationiteration"},animationstart:{cssProperty:"animation",prefixed:"webkitAnimationStart",standard:"animationstart"},transitionend:{cssProperty:"transition",prefixed:"webkitTransitionEnd",standard:"transitionend"}};function e(n){return Boolean(n.document)&&"function"==typeof n.document.createElement}function t(n,i){if(e(n)&&i in s){var r=n.document.createElement("div"),u=s[i],l=u.standard;return l in r.style?l:u.prefixed}return i}function a(n,i){if(e(n)&&i in o){var r=n.document.createElement("div"),u=o[i];return u.cssProperty in r.style?u.standard:u.prefixed}return i}}}]);