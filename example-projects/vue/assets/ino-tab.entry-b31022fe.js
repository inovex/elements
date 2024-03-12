import{r as i,c,h as t,H as r,g as o}from"./index-0fdb3df2.js";import{c as d}from"./index-255d3c2f-5d974998.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const n='.mdc-tab{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);position:relative}.mdc-tab .mdc-tab__text-label{color:rgba(0, 0, 0, 0.6)}.mdc-tab .mdc-tab__icon{color:rgba(0, 0, 0, 0.54);fill:currentColor}.mdc-tab__content{position:relative}.mdc-tab__icon{width:24px;height:24px;font-size:24px}.mdc-tab--active .mdc-tab__text-label{color:#3d40f5;color:var(--mdc-theme-primary, #3d40f5)}.mdc-tab--active .mdc-tab__icon{color:#3d40f5;color:var(--mdc-theme-primary, #3d40f5);fill:currentColor}.mdc-tab{background:none}.mdc-tab{min-width:90px;padding-right:24px;padding-left:24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;margin:0;padding-top:0;padding-bottom:0;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;-webkit-appearance:none;z-index:1}.mdc-tab::-moz-focus-inner{padding:0;border:0}.mdc-tab--min-width{flex:0 1 auto}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab__icon{transition:150ms color linear;z-index:2}.mdc-tab--stacked .mdc-tab__content{flex-direction:column;align-items:center;justify-content:center}.mdc-tab--stacked .mdc-tab__text-label{padding-top:6px;padding-bottom:4px}.mdc-tab--active .mdc-tab__text-label,.mdc-tab--active .mdc-tab__icon{transition-delay:100ms}.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label{padding-left:8px;padding-right:0}[dir=rtl] .mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label,.mdc-tab:not(.mdc-tab--stacked) .mdc-tab__icon+.mdc-tab__text-label[dir=rtl]{padding-left:0;padding-right:8px;}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-tab{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-tab .mdc-tab__ripple::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-tab .mdc-tab__ripple::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-tab.mdc-ripple-upgraded--unbounded .mdc-tab__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-tab.mdc-ripple-upgraded--foreground-activation .mdc-tab__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-tab.mdc-ripple-upgraded--foreground-deactivation .mdc-tab__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-tab.mdc-ripple-upgraded .mdc-tab__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-tab .mdc-tab__ripple::before,.mdc-tab .mdc-tab__ripple::after{background-color:#3d40f5;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #3d40f5))}.mdc-tab:hover .mdc-tab__ripple::before,.mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,.mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}.mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-tab__ripple{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;will-change:transform, opacity}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-color:#3d40f5;border-color:var(--mdc-theme-primary, #3d40f5)}.mdc-tab-indicator .mdc-tab-indicator__content--icon{color:#9ccd00;color:var(--mdc-theme-secondary, #9ccd00)}.mdc-tab-indicator .mdc-tab-indicator__content--underline{border-top-width:2px}.mdc-tab-indicator .mdc-tab-indicator__content--icon{height:34px;font-size:34px}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator__content--icon{align-self:center;margin:0 auto}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}.mdc-tab-indicator .mdc-tab-indicator__content{transition:250ms transform cubic-bezier(0.4, 0, 0.2, 1)}.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition:150ms opacity linear}.mdc-tab-indicator--active.mdc-tab-indicator--fade .mdc-tab-indicator__content{transition-delay:100ms}ino-tab .mdc-tab{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:0.875rem;font-weight:400;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);will-change:transform, opacity;overflow:hidden}ino-tab .mdc-tab.mdc-tab--active .mdc-tab__text-label{color:#4655ff}ino-tab .mdc-tab.mdc-tab--active .mdc-tab__ripple::before,ino-tab .mdc-tab.mdc-tab--active .mdc-tab__ripple::after{content:none}ino-tab .mdc-tab.mdc-tab--active:hover .mdc-tab__ripple::before,ino-tab .mdc-tab.mdc-tab--active.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}ino-tab .mdc-tab.mdc-tab--active.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,ino-tab .mdc-tab.mdc-tab--active:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}ino-tab .mdc-tab.mdc-tab--active:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}ino-tab .mdc-tab.mdc-tab--active:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-tab .mdc-tab.mdc-tab--active.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-tab .mdc-tab .mdc-tab__ripple::before,ino-tab .mdc-tab .mdc-tab__ripple::after{content:none}ino-tab .mdc-tab:hover .mdc-tab__ripple::before,ino-tab .mdc-tab.mdc-ripple-surface--hover .mdc-tab__ripple::before{opacity:0.08;opacity:var(--mdc-ripple-hover-opacity, 0.08)}ino-tab .mdc-tab.mdc-ripple-upgraded--background-focused .mdc-tab__ripple::before,ino-tab .mdc-tab:not(.mdc-ripple-upgraded):focus .mdc-tab__ripple::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}ino-tab .mdc-tab:not(.mdc-ripple-upgraded) .mdc-tab__ripple::after{transition:opacity 150ms linear}ino-tab .mdc-tab:not(.mdc-ripple-upgraded):active .mdc-tab__ripple::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-tab .mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}ino-tab .mdc-tab::before,ino-tab .mdc-tab::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}ino-tab .mdc-tab::before{transition:opacity 15ms linear, background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}ino-tab .mdc-tab::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}ino-tab .mdc-tab.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}ino-tab .mdc-tab.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}ino-tab .mdc-tab.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}ino-tab .mdc-tab.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}ino-tab .mdc-tab.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}ino-tab .mdc-tab::before,ino-tab .mdc-tab::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}ino-tab .mdc-tab.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}ino-tab .mdc-tab::before,ino-tab .mdc-tab::after{background-color:#e2ecff;background-color:var(--mdc-ripple-color, #e2ecff)}ino-tab .mdc-tab:hover::before,ino-tab .mdc-tab.mdc-ripple-surface--hover::before{opacity:0.5;opacity:var(--mdc-ripple-hover-opacity, 0.5)}ino-tab .mdc-tab.mdc-ripple-upgraded--background-focused::before,ino-tab .mdc-tab:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.8;opacity:var(--mdc-ripple-focus-opacity, 0.8)}ino-tab .mdc-tab:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}ino-tab .mdc-tab:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.8;opacity:var(--mdc-ripple-press-opacity, 0.8)}ino-tab .mdc-tab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.8)}ino-tab .mdc-tab ino-icon{--icon-color:#4655ff}ino-tab .mdc-tab.mdc-tab--active ino-icon{--icon-color:#4655ff}ino-tab .mdc-tab .mdc-tab-indicator__content--underline{border-color:#4655ff}ino-tab ino-icon{--icon-width:14px;--icon-height:26px}',p=n,m=class{constructor(a){i(this,a),this.interacted=c(this,"interacted",7),this.icon=void 0,this.label=void 0,this.a11yControls=void 0,this.a11ySelected=void 0,this.stacked=!1,this.indicatorContentWidth=!1}interactionHandler(a){a.stopPropagation(),this.interacted.emit(this.el)}render(){const a=d({"mdc-tab":!0,"mdc-tab--stacked":this.stacked}),e=t("span",{key:"0a636caf33e2ee2cd8e369393af4d8294b6946d5",class:"mdc-tab-indicator"},t("span",{key:"4b96d877b62884283c8bb865886b6cc9c4ee433a",class:"mdc-tab-indicator__content mdc-tab-indicator__content--underline"}));return t(r,{key:"a1a0ad5a6e215c51e7b43fddb64c19e4e429c919"},t("button",{key:"1a71f19a7b149b7fa716b548a5e09d3d6899b00e",class:a,role:"tab","aria-selected":this.a11ySelected?"true":"false","aria-controls":this.a11yControls},t("span",{key:"6f1c4636cf0b1691fea39e74879ab20d1165a0eb",class:"mdc-tab__content"},this.icon&&t("ino-icon",{class:"mdc-tab__icon",icon:this.icon}),t("span",{key:"85e0fa9f32db0502d94b706bf13ebc3bfb561500",class:"mdc-tab__text-label"},this.label?this.label:t("slot",null)),this.indicatorContentWidth&&e),!this.indicatorContentWidth&&e,t("span",{key:"9e81715127b9e758aeeeec1fdb854f054576eb16",class:"mdc-tab__ripple"})))}get el(){return o(this)}};m.style=p;export{m as ino_tab};
