"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[3977],{6277:(E,h,b)=>{b.d(h,{a:()=>m,c:()=>_,g:()=>y});var m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function y(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}function _(p,l,c){return p(c={path:l,exports:{},require:function(d,r){return function A(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},c.exports),c.exports}},8435:(E,h,b)=>{b.d(h,{M:()=>c,_:()=>y,a:()=>_,b:()=>d,c:()=>A,d:()=>l,e:()=>p});var m=function(r,e){return(m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,s){a.__proto__=s}||function(a,s){for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(a[i]=s[i])})(r,e)};function y(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function a(){this.constructor=r}m(r,e),r.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}var _=function(){return _=Object.assign||function(e){for(var a,s=1,i=arguments.length;s<i;s++)for(var n in a=arguments[s])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},_.apply(this,arguments)};function A(r){var e="function"==typeof Symbol&&Symbol.iterator,a=e&&r[e],s=0;if(a)return a.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&s>=r.length&&(r=void 0),{value:r&&r[s++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function p(r,e){var a="function"==typeof Symbol&&r[Symbol.iterator];if(!a)return r;var i,t,s=a.call(r),n=[];try{for(;(void 0===e||e-- >0)&&!(i=s.next()).done;)n.push(i.value)}catch(g){t={error:g}}finally{try{i&&!i.done&&(a=s.return)&&a.call(s)}finally{if(t)throw t.error}}return n}function l(r,e,a){if(a||2===arguments.length)for(var n,s=0,i=e.length;s<i;s++)(n||!(s in e))&&(n||(n=Array.prototype.slice.call(e,0,s)),n[s]=e[s]);return r.concat(n||Array.prototype.slice.call(e))}"function"==typeof SuppressedError&&SuppressedError;var c=function(){function r(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(r,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),r.prototype.init=function(){},r.prototype.destroy=function(){},r}(),d=function(){function r(e,a){for(var s=[],i=2;i<arguments.length;i++)s[i-2]=arguments[i];this.root=e,this.initialize.apply(this,l([],p(s))),this.foundation=void 0===a?this.getDefaultFoundation():a,this.foundation.init(),this.initialSyncWithDOM()}return r.attachTo=function(e){return new r(e,new c({}))},r.prototype.initialize=function(){for(var e=[],a=0;a<arguments.length;a++)e[a]=arguments[a]},r.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},r.prototype.initialSyncWithDOM=function(){},r.prototype.destroy=function(){this.foundation.destroy()},r.prototype.listen=function(e,a,s){this.root.addEventListener(e,a,s)},r.prototype.unlisten=function(e,a,s){this.root.removeEventListener(e,a,s)},r.prototype.emit=function(e,a,s){var i;void 0===s&&(s=!1),"function"==typeof CustomEvent?i=new CustomEvent(e,{bubbles:s,detail:a}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,s,!1,a),this.root.dispatchEvent(i)},r}()},8728:(E,h,b)=>{b.d(h,{c:()=>y});var y=(0,b(6277).c)(function(_){!function(){var A={}.hasOwnProperty;function p(){for(var l=[],c=0;c<arguments.length;c++){var d=arguments[c];if(d){var r=typeof d;if("string"===r||"number"===r)l.push(d);else if(Array.isArray(d)){if(d.length){var e=p.apply(null,d);e&&l.push(e)}}else if("object"===r){if(d.toString!==Object.prototype.toString&&!d.toString.toString().includes("[native code]")){l.push(d.toString());continue}for(var a in d)A.call(d,a)&&d[a]&&l.push(a)}}}return l.join(" ")}_.exports?(p.default=p,_.exports=p):window.classNames=p}()})},3977:(E,h,b)=>{b.r(h),b.d(h,{ino_progress_bar:()=>s});var m=b(9458),y=b(8435),_=b(2322),A=b(8728),l=(b(6277),{CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"}),c={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},r=function(i){function n(t){var g=i.call(this,(0,y.a)((0,y.a)({},n.defaultAdapter),t))||this;return g.observer=null,g}return(0,y._)(n,i),Object.defineProperty(n,"cssClasses",{get:function(){return l},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),n.prototype.init=function(){var t=this;this.determinate=!this.adapter.hasClass(l.INDETERMINATE_CLASS),this.adapter.addClass(l.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver(function(g){var o,f;if(!t.determinate)try{for(var u=(0,y.c)(g),v=u.next();!v.done;v=u.next()){var S=v.value;S.contentRect&&t.calculateAndSetDimensions(S.contentRect.width)}}catch(C){o={error:C}}finally{try{v&&!v.done&&(f=u.return)&&f.call(u)}finally{if(o)throw o.error}}}),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},n.prototype.setDeterminate=function(t){if(this.determinate=t,this.determinate)return this.adapter.removeClass(l.INDETERMINATE_CLASS),this.adapter.setAttribute(c.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(c.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(c.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(l.INDETERMINATE_CLASS),this.adapter.removeAttribute(c.ARIA_VALUENOW),this.adapter.removeAttribute(c.ARIA_VALUEMAX),this.adapter.removeAttribute(c.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},n.prototype.isDeterminate=function(){return this.determinate},n.prototype.setProgress=function(t){this.progress=t,this.determinate&&(this.setPrimaryBarProgress(t),this.adapter.setAttribute(c.ARIA_VALUENOW,t.toString()))},n.prototype.getProgress=function(){return this.progress},n.prototype.setBuffer=function(t){this.buffer=t,this.determinate&&this.setBufferBarProgress(t)},n.prototype.getBuffer=function(){return this.buffer},n.prototype.open=function(){this.adapter.removeClass(l.CLOSED_CLASS),this.adapter.removeClass(l.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(c.ARIA_HIDDEN)},n.prototype.close=function(){this.adapter.addClass(l.CLOSED_CLASS),this.adapter.setAttribute(c.ARIA_HIDDEN,"true")},n.prototype.isClosed=function(){return this.adapter.hasClass(l.CLOSED_CLASS)},n.prototype.handleTransitionEnd=function(){this.adapter.hasClass(l.CLOSED_CLASS)&&this.adapter.addClass(l.CLOSED_ANIMATION_OFF_CLASS)},n.prototype.destroy=function(){i.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},n.prototype.restartAnimation=function(){this.adapter.removeClass(l.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(l.ANIMATION_READY_CLASS)},n.prototype.setPrimaryBarProgress=function(t){var g="scaleX("+t+")",o=typeof window<"u"?(0,_.g)(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(o,g)},n.prototype.setBufferBarProgress=function(t){this.adapter.setBufferBarStyle(c.FLEX_BASIS,100*t+"%")},n.prototype.calculateAndSetDimensions=function(t){var g=.8367142*t,o=2.00611057*t,f=.37651913*t,u=.84386165*t,v=1.60277782*t;this.adapter.setStyle("--mdc-linear-progress-primary-half",g+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-g+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",o+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",f+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-f+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",u+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-u+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",v+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-v+"px"),this.restartAnimation()},n}(y.M),e=function(i){function n(){return null!==i&&i.apply(this,arguments)||this}return(0,y._)(n,i),n.attachTo=function(t){return new n(t)},Object.defineProperty(n.prototype,"determinate",{set:function(t){this.foundation.setDeterminate(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"progress",{set:function(t){this.foundation.setProgress(t)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"buffer",{set:function(t){this.foundation.setBuffer(t)},enumerable:!1,configurable:!0}),n.prototype.open=function(){this.foundation.open()},n.prototype.close=function(){this.foundation.close()},n.prototype.initialSyncWithDOM=function(){var t=this;this.root.addEventListener("transitionend",function(){t.foundation.handleTransitionEnd()})},n.prototype.getDefaultFoundation=function(){var t=this;return new r({addClass:function(o){t.root.classList.add(o)},forceLayout:function(){t.root.getBoundingClientRect()},setBufferBarStyle:function(o,f){var u=t.root.querySelector(r.strings.BUFFER_BAR_SELECTOR);u&&u.style.setProperty(o,f)},setPrimaryBarStyle:function(o,f){var u=t.root.querySelector(r.strings.PRIMARY_BAR_SELECTOR);u&&u.style.setProperty(o,f)},hasClass:function(o){return t.root.classList.contains(o)},removeAttribute:function(o){t.root.removeAttribute(o)},removeClass:function(o){t.root.classList.remove(o)},setAttribute:function(o,f){t.root.setAttribute(o,f)},setStyle:function(o,f){t.root.style.setProperty(o,f)},attachResizeObserver:function(o){var f=window.ResizeObserver;if(f){var u=new f(o);return u.observe(t.root),u}return null},getWidth:function(){return t.root.offsetWidth}})},n}(y.b);const s=class{constructor(i){(0,m.r)(this,i),this.initializeComponent=()=>{this.mdcProgress=new e(this.el.shadowRoot.querySelector(".mdc-linear-progress")),this.mdcProgress.determinate=!this.indeterminate,this.mdcProgress.progress=this.progress,this.mdcProgress.buffer=this.buffer},this.buffer=0,this.indeterminate=!1,this.label=void 0,this.progress=0}bufferChanged(i){this.mdcProgress.buffer=i}indeterminateChanged(i){this.mdcProgress.determinate=!i}progressChanged(i){this.mdcProgress.progress=i}componentDidLoad(){this.initializeComponent()}disconnectedCallback(){var i;null===(i=this.mdcProgress)||void 0===i||i.destroy()}render(){const i=(0,A.c)({"mdc-linear-progress":!0});return(0,m.h)(m.H,null,(0,m.h)("div",{role:"progressbar",class:i,"aria-label":this.label,"aria-valuemin":"0","aria-valuemax":"1"},(0,m.h)("div",{class:"mdc-linear-progress__buffer"},(0,m.h)("div",{class:"mdc-linear-progress__buffer-bar"}),(0,m.h)("div",{class:"mdc-linear-progress__buffer-dots"})),(0,m.h)("div",{class:"mdc-linear-progress__bar mdc-linear-progress__primary-bar"},(0,m.h)("span",{class:"mdc-linear-progress__bar-inner"})),(0,m.h)("div",{class:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar"},(0,m.h)("span",{class:"mdc-linear-progress__bar-inner"}))))}get el(){return(0,m.g)(this)}static get watchers(){return{buffer:["bufferChanged"],indeterminate:["indeterminateChanged"],progress:["progressChanged"]}}};s.style="@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}.mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}.mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress,.mdc-linear-progress[dir=rtl]{}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,.mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,.mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,.mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host{--progress-bar--bar-color:#3d40f5}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half, 83.67142%))}100%{transform:translateX(200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full, 200.611057%))}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter, 37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half, 84.386165%))}100%{transform:translateX(160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full, 160.277782%))}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(-10px)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%);transform:translateX(var(--mdc-linear-progress-primary-half-neg, -83.67142%))}100%{transform:translateX(-200.611057%);transform:translateX(var(--mdc-linear-progress-primary-full-neg, -200.611057%))}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%);transform:translateX(var(--mdc-linear-progress-secondary-quarter-neg, -37.651913%))}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%);transform:translateX(var(--mdc-linear-progress-secondary-half-neg, -84.386165%))}100%{transform:translateX(-160.277782%);transform:translateX(var(--mdc-linear-progress-secondary-full-neg, -160.277782%))}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}:host .mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);outline:1px solid transparent;overflow:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top:4px solid}:host .mdc-linear-progress__buffer{display:flex;position:absolute;width:100%;height:100%}:host .mdc-linear-progress__buffer-dots{background-repeat:repeat-x;background-size:10px 4px;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear}:host .mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}:host .mdc-linear-progress__primary-bar{transform:scaleX(0)}:host .mdc-linear-progress__secondary-bar{display:none}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}:host .mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}:host .mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] :host .mdc-linear-progress,:host .mdc-linear-progress[dir=rtl]{}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__bar{right:0;-webkit-transform-origin:center right;transform-origin:center right}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]) .mdc-linear-progress__buffer-dots,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]) .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}[dir=rtl] :host .mdc-linear-progress:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar,:host .mdc-linear-progress[dir=rtl]:not([dir=ltr]).mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host .mdc-linear-progress--closed{opacity:0}:host .mdc-linear-progress--closed-animation-off .mdc-linear-progress__buffer-dots{animation:none}:host .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar,:host .mdc-linear-progress--closed-animation-off.mdc-linear-progress--indeterminate .mdc-linear-progress__bar .mdc-linear-progress__bar-inner{animation:none}.mdc-linear-progress__bar-inner{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-linear-progress__buffer-dots{background-image:url(\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='none slice'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23e6e6e6'/%3E%3C/svg%3E\")}.mdc-linear-progress__buffer-bar{background-color:#e6e6e6}:host .mdc-linear-progress__bar-inner{border-color:var(--progress-bar--bar-color)}"}}]);