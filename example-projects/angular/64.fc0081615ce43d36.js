"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[64],{2323:(s,o,n)=>{function c(){return"_"+Math.random().toString(36).substr(2,9)}function i(t,e){return t.querySelector(`[slot="${e}"]`)}function a(t,e){var r;return e?t.querySelectorAll(`[slot="${e}"]`).length>0:0===(null===(r=t.querySelector("slot"))||void 0===r?void 0:r.assignedElements().length)}function m(t){var e;null===(e=t.querySelector("[data-ino-focus]"))||void 0===e||e.focus()}function d(t){t.stopPropagation(),t.preventDefault()}n.d(o,{a:()=>i,f:()=>m,g:()=>c,h:()=>a,p:()=>d})},64:(s,o,n)=>{n.r(o),n.d(o,{ino_menu:()=>t});var c=n(9671),i=n(5978),a=n(2323);const t=class{constructor(e){(0,i.r)(this,e),this.placement="auto"}connectedCallback(){this.el.parentElement.id||this.generateParentId()}generateParentId(){this.el.parentElement.id=`elements-menu${(0,a.g)()}`}componentDidLoad(){var e=this;return(0,c.Z)(function*(){var r;const l=yield null===(r=e.popoverEl)||void 0===r?void 0:r.getTippyInstance();l&&l.setProps({onMount:()=>(0,a.f)(e.el)})})()}render(){return(0,i.h)(i.H,{key:"bc024e2ef3555b4f9c179decba15c22dfe9a2317"},(0,i.h)("ino-popover",{key:"3ca5cdfa90c69803309457d89c4e5342fb6801ac",colorScheme:"light",ref:e=>this.popoverEl=e,interactive:!0,for:this.el.parentElement.id,placement:this.placement,trigger:"click"},(0,i.h)("ino-list",{key:"aa74e2253c4fb9293d3d84921832dbc4ebf64f1e",role:"menu","aria-hidden":"true","aria-orientation":"vertical",tabindex:"-1"},(0,i.h)("slot",{key:"2b7332bbccdf20b8395151c46afeb3a5f735260f"}))))}get el(){return(0,i.g)(this)}};t.style=".mdc-menu-surface{display:none;position:absolute;box-sizing:border-box;max-width:calc(100vw - 32px);max-width:var(--mdc-menu-max-width, calc(100vw - 32px));max-height:calc(100vh - 32px);max-height:var(--mdc-menu-max-height, calc(100vh - 32px));margin:0;padding:0;transform:scale(1);transform-origin:top left;opacity:0;overflow:auto;will-change:transform, opacity;z-index:8;transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), height 250ms cubic-bezier(0, 0, 0.2, 1);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--animating-open{display:inline-block;transform:scale(0.8);opacity:0}.mdc-menu-surface--open{display:inline-block;transform:scale(1);opacity:1}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;transition:opacity 0.075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left;}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-menu{min-width:112px;min-width:var(--mdc-menu-min-width, 112px)}.mdc-menu .mdc-deprecated-list-item__meta{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-deprecated-list-item__graphic{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-deprecated-list{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-deprecated-list,.mdc-menu .mdc-list{position:relative}.mdc-menu .mdc-deprecated-list .mdc-elevation-overlay,.mdc-menu .mdc-list .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-menu .mdc-deprecated-list-divider{margin:8px 0}.mdc-menu .mdc-deprecated-list-item{user-select:none}.mdc-menu .mdc-deprecated-list-item--disabled{cursor:auto}.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__text,.mdc-menu a.mdc-deprecated-list-item .mdc-deprecated-list-item__graphic{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-deprecated-list-item{padding-left:56px;padding-right:16px}[dir=rtl] .mdc-menu__selection-group .mdc-deprecated-list-item,.mdc-menu__selection-group .mdc-deprecated-list-item[dir=rtl]{padding-left:16px;padding-right:56px;}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:initial;display:none;position:absolute;top:50%;transform:translateY(-50%)}[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon,.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl]{left:initial;right:16px;}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}ino-menu ino-popover{border-radius:inherit}"}}]);