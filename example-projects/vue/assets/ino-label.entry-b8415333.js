import{r as l,h as t,H as i}from"./index-2b467b01.js";import{c as n}from"./index-255d3c2f-5d974998.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const o='@charset "UTF-8";.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right;}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:"*"}[dir=rtl] .mdc-floating-label--required,.mdc-floating-label--required[dir=rtl]{}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}ino-label .mdc-floating-label::after{content:none}ino-label.ino-label--show-hint .mdc-floating-label:after{content:"*"}ino-label.ino-label--show-hint:not(.ino-label--required) .mdc-floating-label:after{content:" - Optional ";font-style:italic;color:rgba(77, 77, 77, 0.6)}ino-label:not(.ino-label--outlined) .mdc-floating-label{left:0}ino-input ino-label:not(.ino-label--outlined) .mdc-floating-label:not(.mdc-floating-label--float-above){top:70%}ino-label:not(.ino-label--disabled) .mdc-floating-label:not(.mdc-floating-label--float-above){color:rgba(0, 0, 0, 0.6)}',r=o,s=class{constructor(a){l(this,a),this.filledTemplate=e=>[t("div",{class:"mdc-line-ripple"}),e],this.outlineTemplate=e=>t("div",{class:"mdc-notched-outline"},t("div",{class:"mdc-notched-outline__leading"}),t("div",{class:"mdc-notched-outline__notch"},e),t("div",{class:"mdc-notched-outline__trailing"})),this.outline=void 0,this.text=void 0,this.required=void 0,this.showHint=void 0,this.disabled=void 0,this.for=void 0}render(){const a=n({"ino-label--show-hint":this.showHint,"ino-label--outlined":this.outline,"ino-label--required":this.required,"ino-label--disabled":this.disabled}),e=this.text?t("label",{htmlFor:this.for,class:"mdc-floating-label"},this.text):"";return t(i,{key:"7c0f7eb783a471cf27374447a9ff741eba58c9da",class:a},this.outline?this.outlineTemplate(e):this.filledTemplate(e))}};s.style=r;export{s as ino_label};
