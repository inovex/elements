"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[9281],{2323:(_,t,e)=>{function r(){return"_"+Math.random().toString(36).substr(2,9)}function n(a,o){return a.querySelector(`[slot="${o}"]`)}function d(a,o){var c;return o?a.querySelectorAll(`[slot="${o}"]`).length>0:0===(null===(c=a.querySelector("slot"))||void 0===c?void 0:c.assignedElements().length)}function s(a){var o;null===(o=a.querySelector("[data-ino-focus]"))||void 0===o||o.focus()}function i(a){a.stopPropagation(),a.preventDefault()}e.d(t,{a:()=>n,f:()=>s,g:()=>r,h:()=>d,p:()=>i})},1853:(_,t,e)=>{e.d(t,{c:()=>n});var d,r={exports:{}};d=r,function(){var s={}.hasOwnProperty;function i(){for(var a=[],o=0;o<arguments.length;o++){var c=arguments[o];if(c){var p=typeof c;if("string"===p||"number"===p)a.push(c);else if(Array.isArray(c)){if(c.length){var m=i.apply(null,c);m&&a.push(m)}}else if("object"===p){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){a.push(c.toString());continue}for(var l in c)s.call(c,l)&&c[l]&&a.push(l)}}}return a.join(" ")}d.exports?(i.default=i,d.exports=i):window.classNames=i}();const n=r.exports},9281:(_,t,e)=>{e.r(t),e.d(t,{ino_card:()=>a});var r=e(5203),n=e(1853),d=e(2323);const a=class{constructor(o){(0,r.r)(this,o),this.selected=!1,this.disableElevation=!1}render(){const o=(0,n.c)({"ino-elevate":!this.disableElevation}),c=(0,n.c)({"mdc-card":!0,"mdc-card--outlined":!0,"ino-card--selected":this.selected}),p=(0,d.h)(this.el,"header"),m=(0,d.h)(this.el,"content"),l=(0,d.h)(this.el,"footer");return(0,r.h)(r.H,{key:"c0678fb3460b715deb03ce978eb7afa14e2f88e5",class:o},(0,r.h)("div",{key:"e4658ccad135ca8696862fe0490b7afc500c8a5f",class:c},(0,r.h)("div",{key:"f757be740ac72e3ab8c798c98ca0dfa5cc85ed9a",class:"ino-card__checkmark-container"},this.selected&&(0,r.h)("div",{class:"ino-card__checkmark"},(0,r.h)("ino-icon",{icon:"checkmark"}))),p&&(0,r.h)("div",{class:"ino-card__header"},(0,r.h)("slot",{name:"header"})),m&&(0,r.h)("div",{class:"ino-card__content"},(0,r.h)("slot",{name:"content"})),l&&(0,r.h)("div",{class:"ino-card__footer"},(0,r.h)("slot",{name:"footer"}))))}get el(){return(0,r.g)(this)}};a.style='.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-card{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);position:relative;box-shadow:0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-card::after{border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:"";pointer-events:none;pointer-events:none}.mdc-card--outlined{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);border-width:1px;border-style:solid;border-color:#e0e0e0}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px;}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0;}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0;}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right;}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-card__primary-action{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity}.mdc-card__primary-action .mdc-card__ripple::before,.mdc-card__primary-action .mdc-card__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-card__primary-action .mdc-card__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-card__primary-action .mdc-card__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded .mdc-card__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation .mdc-card__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation .mdc-card__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action .mdc-card__ripple::before,.mdc-card__primary-action .mdc-card__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded .mdc-card__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action .mdc-card__ripple::before,.mdc-card__primary-action .mdc-card__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-card__primary-action:hover .mdc-card__ripple::before,.mdc-card__primary-action.mdc-ripple-surface--hover .mdc-card__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused .mdc-card__ripple::before,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus .mdc-card__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-card__primary-action:not(.mdc-ripple-upgraded) .mdc-card__ripple::after{transition:opacity 150ms linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active .mdc-card__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-card__primary-action .mdc-card__ripple{box-sizing:content-box;height:100%;overflow:hidden;left:0;pointer-events:none;position:absolute;top:0;width:100%}.mdc-card__primary-action.mdc-ripple-upgraded--background-focused::after,.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:5px double transparent;border-radius:inherit;content:"";pointer-events:none}ino-card{--card-background-color:var(--ino-card-background-color, #fff);--card-background-color--active:var(\n    --ino-card-background-color--active,\n    #fff\n  );--card-background-color--focus:var(--ino-card-background-color--focus, #fff);--card-background-color--hover:var(--ino-card-background-color--hover, #fff);--card-border-color:var(\n    --ino-card-border-color,\n    #c1c1c1\n  );--card-border-thickness:var(--ino-card-border-thickness, 1px);--card-checkmark-background-color:var(\n    --ino-card-checkmark-background-color,\n    #fff\n  );--card-checkmark-color:var(\n    --ino-card-checkmark-color,\n    #3d40f5\n  )}ino-card{display:block;position:relative;border-radius:20px}ino-card .mdc-card{background-color:var(--card-background-color);border-width:var(--card-border-thickness);border-style:solid;border-color:var(--card-border-color);box-shadow:none;border-radius:inherit;height:inherit;width:inherit;display:flex;flex-direction:column;justify-content:space-between}ino-card .mdc-card::after{content:unset}ino-card .mdc-card:active{background-color:var(--card-background-color--active)}ino-card .mdc-card:focus{background-color:var(--card-background-color--focus)}ino-card .mdc-card:hover{background-color:var(--card-background-color--hover)}ino-card .ino-card--selected.mdc-card{border-width:1px;border-style:solid;border-color:#fff;box-shadow:0 8px 16px 0 rgba(119, 119, 119, 0.3), 0 16px 32px 0 rgba(119, 119, 119, 0.14)}ino-card .ino-card__checkmark{position:absolute;border-radius:50%;background-color:var(--card-checkmark-background-color);width:40px;height:40px;left:50%;transform:translate(-50%, -50%);box-shadow:0 4px 8px 0 rgba(119, 119, 119, 0.3), 0 12px 28px 0 rgba(119, 119, 119, 0.14)}ino-card .ino-card__checkmark ino-icon{font-size:20pt;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);--icon-color:var(--card-checkmark-color)}ino-card .ino-card__checkmark-container{display:contents}ino-card .ino-card__footer,ino-card .ino-card__content,ino-card .ino-card__header{padding:10px}ino-card:hover.ino-elevate .mdc-card{border-width:1px;border-style:solid;border-color:#fff;box-shadow:0 4px 8px 0 rgba(119, 119, 119, 0.3), 0 12px 28px 0 rgba(119, 119, 119, 0.14)}'}}]);