(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[41],{5897:(t,i,e)=>{"use strict";e.d(i,{a:()=>a,c:()=>r,g:()=>o});var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t,i,e){return t(e={path:i,exports:{},require:function(t,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}},4898:(t,i,e)=>{"use strict";e.d(i,{c:()=>a});var a=(0,e(5897).c)(function(t){!function(){var i={}.hasOwnProperty;function e(){for(var t=[],a=0;a<arguments.length;a++){var o=arguments[a];if(o){var r=typeof o;if("string"===r||"number"===r)t.push(o);else if(Array.isArray(o)&&o.length){var s=e.apply(null,o);s&&t.push(s)}else if("object"===r)for(var n in o)i.call(o,n)&&o[n]&&t.push(n)}}return t.join(" ")}t.exports?(e.default=e,t.exports=e):window.classNames=e}()})},41:(t,i,e)=>{"use strict";e.r(i),e.d(i,{ino_img_list:()=>r});var a=e(648),o=e(4898);e(5897);const r=class{constructor(t){(0,a.r)(this,t),this.masonry=!1,this.encloseLabel=!1}componentDidLoad(){this.masonry&&this.el.querySelectorAll(".mdc-image-list__image-aspect-container").forEach(t=>{t.classList.remove("mdc-image-list__image-aspect-container")})}render(){const t=(0,o.c)({"mdc-image-list":!0,"mdc-image-list--masonry":this.masonry,"mdc-image-list--with-text-protection":this.encloseLabel});return(0,a.h)(a.H,null,(0,a.h)("ul",{class:t},(0,a.h)("slot",null)))}get el(){return(0,a.g)(this)}};r.style=".mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img-list{--img-list-cols:var(--ino-img-list-cols, 3)}ino-img-list ul:not(.mdc-image-list--masonry) .mdc-image-list__item{width:calc(100% / var(--img-list-cols) - (4px + 1px / var(--img-list-cols)));margin:2px}ino-img-list ul.mdc-image-list--masonry{column-count:var(--img-list-cols);column-gap:16px}ino-img-list ul.mdc-image-list--masonry .mdc-image-list__item{margin-bottom:16px}"}}]);