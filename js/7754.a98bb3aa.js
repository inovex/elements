"use strict";(self["webpackChunk_inovex_de_elements_landingpage"]=self["webpackChunk_inovex_de_elements_landingpage"]||[]).push([[7754],{4997:function(e,t,i){function n(){return"_"+Math.random().toString(36).substr(2,9)}function r(e,t){return e.querySelector('[slot="'+t+'"]')}function o(e,t){return e.querySelectorAll('[slot="'+t+'"]').length>0}function a(e){var t;null===(t=e.querySelector("[data-ino-focus]"))||void 0===t||t.focus()}function c(e){var t=e.value.length;e.setSelectionRange&&(e.focus(),e.setSelectionRange(t,t))}i.d(t,{a:function(){return n},f:function(){return a},g:function(){return r},h:function(){return o},m:function(){return c}})},7754:function(e,t,i){i.r(t),i.d(t,{ino_menu:function(){return l}});var n=i(2326),r=i(4997),o=function(e,t,i,n){function r(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,o){function a(e){try{l(n.next(e))}catch(t){o(t)}}function c(e){try{l(n["throw"](e))}catch(t){o(t)}}function l(e){e.done?i(e.value):r(e.value).then(a,c)}l((n=n.apply(e,t||[])).next())}))},a=function(e,t){var i,n,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(e){return function(t){return l([e,t])}}function l(o){if(i)throw new TypeError("Generator is already executing.");while(a)try{if(i=1,n&&(r=2&o[0]?n["return"]:o[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}},c=".mdc-menu-surface{display:none;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:top left;transform-origin:top left;opacity:0;overflow:auto;will-change:transform, opacity;z-index:8;-webkit-transition:opacity 0.03s linear, height 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, height 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), height 250ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), height 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;-webkit-transition:opacity 0.075s linear;transition:opacity 0.075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);-webkit-transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-menu{min-width:112px}.mdc-menu .mdc-list-item__meta{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-list-item__graphic{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-list{color:rgba(0, 0, 0, 0.87);position:relative}.mdc-menu .mdc-list .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}.mdc-menu a.mdc-list-item .mdc-list-item__text,.mdc-menu a.mdc-list-item .mdc-list-item__graphic{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}[dir=rtl] .mdc-menu__selection-group .mdc-list-item,.mdc-menu__selection-group .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:56px}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:initial;display:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon,.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl]{left:initial;right:16px}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}ino-menu ino-popover{border-radius:inherit}",l=function(){function e(e){(0,n.r)(this,e),this.placement="auto"}return e.prototype.connectedCallback=function(){this.el.parentElement.id||this.generateParentId()},e.prototype.generateParentId=function(){this.el.parentElement.id="elements-menu"+(0,r.a)()},e.prototype.componentDidLoad=function(){return o(this,void 0,void 0,(function(){var e,t,i=this;return a(this,(function(n){switch(n.label){case 0:return[4,null===(e=this.popoverEl)||void 0===e?void 0:e.getTippyInstance()];case 1:return t=n.sent(),t?(t.setProps({onMount:function(){return(0,r.f)(i.el)}}),[2]):[2]}}))}))},e.prototype.render=function(){var e=this;return(0,n.h)(n.H,null,(0,n.h)("ino-popover",{ref:function(t){return e.popoverEl=t},"color-scheme":"transparent",interactive:!0,for:this.el.parentElement.id,placement:this.placement,trigger:"click"},(0,n.h)("ino-list",{role:"menu","aria-hidden":"true","aria-orientation":"vertical",tabindex:"-1"},(0,n.h)("slot",null))))},Object.defineProperty(e.prototype,"el",{get:function(){return(0,n.g)(this)},enumerable:!1,configurable:!0}),e}();l.style=c}}]);
//# sourceMappingURL=7754.a98bb3aa.js.map