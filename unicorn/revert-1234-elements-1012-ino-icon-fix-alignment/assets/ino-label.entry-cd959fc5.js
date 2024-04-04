import{r as f,h as i,H as h,g as b}from"./preview-6d8b59f5.js";import{c as g}from"./index-38c18b20-01ad82eb.js";import{s as u,M as p,b as y,n as v}from"./component-1547fc0f-d3084494.js";import"./tslib.es6-973a6cc3-d9af4c86.js";import"./component-606576f6-c5301b69.js";import"./iframe-4dddcd93.js";import"../sb-preview/runtime.js";import"./index-bb1f01da.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-a1cadc86.js";import"./index-f7c87b76.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-805d40e3.js";import"./index-f428e8b2.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const x=v.NOTCH_ELEMENT_PADDING+2,w=navigator.userAgent.toUpperCase().includes("MAC"),N=w?.1:0;function C(t,e){var n;const r=t.querySelector(u.NOTCH_ELEMENT_SELECTOR),l=r.querySelector(".mdc-floating-label"),c=(n=l==null?void 0:l.clientWidth)!==null&&n!==void 0?n:0,d=(e?.66:.76)+N;let s=0;return new p(t,new y({addClass(a){t.classList.add(a)},removeClass(a){t.classList.remove(a)},setNotchWidthProperty(a){const m=l.control===document.activeElement;let o=a;c>0&&m&&(o=c*d+x),s!==o&&(r.style.setProperty("width",o+"px"),s=o)},removeNotchWidthProperty(){r.style.removeProperty("width"),s=0}}))}const L='@charset "UTF-8";.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right;}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required,.mdc-floating-label--required[dir=rtl]{}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}ino-label .mdc-floating-label::after{content:none}ino-label.ino-label--show-hint .mdc-floating-label:after{content:"*"}ino-label.ino-label--show-hint:not(.ino-label--required) .mdc-floating-label:after{content:" - Optional ";font-style:italic;color:rgba(77, 77, 77, 0.6)}ino-label:not(.ino-label--outlined) .mdc-floating-label{left:0}ino-input ino-label:not(.ino-label--outlined) .mdc-floating-label:not(.mdc-floating-label--float-above){top:70%}ino-label:not(.ino-label--disabled) .mdc-floating-label:not(.mdc-floating-label--float-above){color:rgba(0, 0, 0, 0.6)}',_=L,q=class{constructor(t){f(this,t),this.filledTemplate=e=>[i("div",{class:"mdc-line-ripple"}),e],this.outlineTemplate=e=>i("div",{class:"mdc-notched-outline"},i("div",{class:"mdc-notched-outline__leading"}),i("div",{class:"mdc-notched-outline__notch"},e),i("div",{class:"mdc-notched-outline__trailing"})),this.outline=void 0,this.text=void 0,this.required=void 0,this.showHint=void 0,this.disabled=void 0,this.for=void 0}async getMdcNotchedOutlineInstance(){return this.mdcNotchedOutline}componentDidLoad(){this.outline&&!this.mdcNotchedOutline&&(this.mdcNotchedOutline=C(this.el.querySelector(".mdc-notched-outline")))}render(){const t=g({"ino-label--show-hint":this.showHint,"ino-label--outlined":this.outline,"ino-label--required":this.required,"ino-label--disabled":this.disabled}),e=this.text?i("label",{htmlFor:this.for,class:"mdc-floating-label"},this.text):"";return i(h,{key:"4ea3b2b29a083441dd2c73f916037495a118c3cf",class:t},this.outline?this.outlineTemplate(e):this.filledTemplate(e))}get el(){return b(this)}};q.style=_;export{q as ino_label};
