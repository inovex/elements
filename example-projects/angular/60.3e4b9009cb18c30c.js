"use strict";(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[60],{6277:(c,r,s)=>{s.d(r,{a:()=>e,c:()=>d,g:()=>a});var e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function a(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function d(i,o,n){return i(n={path:o,exports:{},require:function(t,m){return function l(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},8728:(c,r,s)=>{s.d(r,{c:()=>a});var a=(0,s(6277).c)(function(d){!function(){var l={}.hasOwnProperty;function i(){for(var o=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var m=typeof t;if("string"===m||"number"===m)o.push(t);else if(Array.isArray(t)){if(t.length){var g=i.apply(null,t);g&&o.push(g)}}else if("object"===m){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){o.push(t.toString());continue}for(var h in t)l.call(t,h)&&t[h]&&o.push(h)}}}return o.join(" ")}d.exports?(i.default=i,d.exports=i):window.classNames=i}()})},60:(c,r,s)=>{s.r(r),s.d(r,{ino_img:()=>i});var e=s(405),a=s(8728);s(6277);const i=class{constructor(o){(0,e.r)(this,o),this.alt=void 0,this.decoding=void 0,this.height=void 0,this.sizes=void 0,this.src=void 0,this.srcset=void 0,this.width=void 0,this.usemap=void 0,this.fallbackIcon="image_not_available",this.imgListItem=!1,this.label=void 0,this.ratioWidth=1,this.ratioHeight=1,this.rounded=void 0,this.composedRatioHeight="100%"}heightChanged(){this.computeFixedDimensions()}widthChanged(){this.computeFixedDimensions()}ratioWidthChanged(){this.computeRatio()}ratioHeightChanged(){this.computeRatio()}componentWillLoad(){this.computeRatio(),this.computeFixedDimensions()}componentDidLoad(){this.imgListItem||(this.el.querySelector("div").style.paddingTop=this.composedRatioHeight),this.imageEl.onerror=()=>this.handleError()}computeFixedDimensions(){isNaN(this.height)||(this.el.style.height=`${this.height}px`),isNaN(this.width)||(this.el.style.width=`${this.width}px`)}computeRatio(){this.composedRatioHeight=this.ratioHeight/this.ratioWidth*100+"%"}handleError(){this.imageEl.nextElementSibling.classList.add("ino-img__fallback-icon--visible")}render(){const o=(0,a.c)({"ino-img__rounded":this.rounded,"mdc-image-list__item":this.imgListItem}),n=(0,a.c)({"ino-img__composer":!this.imgListItem,"mdc-image-list__image-aspect-container":this.imgListItem}),t=(0,a.c)({"ino-img__image":!this.imgListItem,"mdc-image-list__image":this.imgListItem});return(0,e.h)(e.H,{class:o},(0,e.h)("div",{class:n},(0,e.h)("img",{class:t,alt:this.alt,decoding:this.decoding,ref:m=>this.imageEl=m,sizes:this.sizes,src:this.src,srcset:this.srcset,usemap:this.usemap,height:isNaN(this.height)?void 0:this.height,width:isNaN(this.width)?void 0:this.width}),(0,e.h)("div",{class:"ino-img__fallback-icon"},(0,e.h)("ino-icon",{icon:this.fallbackIcon}))),this.imgListItem&&(0,e.h)("div",{class:"mdc-image-list__supporting"},(0,e.h)("span",{class:"mdc-image-list__label"},this.label)))}get el(){return(0,e.g)(this)}static get watchers(){return{height:["heightChanged"],width:["widthChanged"],ratioWidth:["ratioWidthChanged"],ratioHeight:["ratioHeightChanged"]}}};i.style='.mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img:not(.mdc-image-list__item){display:inline-block;overflow:hidden;width:100%}ino-img .ino-img__composer{position:relative;box-sizing:border-box}ino-img .ino-img__image{position:absolute;top:0;left:0}ino-img.ino-img__rounded .ino-img__image{border-radius:50%}ino-img.mdc-image-list__item{display:list-item}ino-img img:before{content:" ";display:block;position:absolute;width:inherit;height:inherit;background-color:#fff}ino-img .ino-img__fallback-icon{display:none;position:absolute;background-color:#e7e7e7;width:100%;height:100%;top:0;left:0}ino-img .ino-img__fallback-icon ino-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:max(20px, 10%);height:max(20px, 10%);--icon-width:100%;--icon-height:100%}ino-img .ino-img__fallback-icon--visible{display:block}'}}]);