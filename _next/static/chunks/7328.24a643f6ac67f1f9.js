"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7328],{4996:function(i,t,e){e.d(t,{c:function(){return a}});/*!
 * Crafted with ❤ by inovex GmbH
 */var o={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){var i={}.hasOwnProperty;function t(){for(var o="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(o=e(o,function(o){if("string"==typeof o||"number"==typeof o)return o;if("object"!=typeof o)return"";if(Array.isArray(o))return t.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var a="";for(var s in o)i.call(o,s)&&o[s]&&(a=e(a,s));return a}(s)))}return o}function e(i,t){return t?i?i+" "+t:i+t:i}o.exports?(t.default=t,o.exports=t):window.classNames=t}();let a=o.exports},7328:function(i,t,e){e.r(t),e.d(t,{ino_img:function(){return s}});var o=e(6259),a=e(4996);let s=class{heightChanged(){this.computeFixedDimensions()}widthChanged(){this.computeFixedDimensions()}ratioWidthChanged(){this.computeRatio()}ratioHeightChanged(){this.computeRatio()}componentWillLoad(){this.computeRatio(),this.computeFixedDimensions()}componentDidLoad(){this.imgListItem||(this.el.querySelector("div").style.paddingTop=this.composedRatioHeight),this.imageEl.onerror=()=>this.handleError()}computeFixedDimensions(){isNaN(this.height)||(this.el.style.height="".concat(this.height,"px")),isNaN(this.width)||(this.el.style.width="".concat(this.width,"px"))}computeRatio(){let i=this.ratioHeight/this.ratioWidth*100;this.composedRatioHeight="".concat(i,"%")}handleError(){this.imageEl.nextElementSibling.classList.add("ino-img__fallback-icon--visible")}render(){let i=(0,a.c)({"ino-img__rounded":this.rounded,"mdc-image-list__item":this.imgListItem}),t=(0,a.c)({"ino-img__composer":!this.imgListItem,"mdc-image-list__image-aspect-container":this.imgListItem}),e=(0,a.c)({"ino-img__image":!this.imgListItem,"mdc-image-list__image":this.imgListItem});return(0,o.h)(o.H,{key:"a4709fe84a2d1a4b8959126a38c27fe61db00302",class:i},(0,o.h)("div",{key:"ff287d08102adc148c0285b20cdc56ca139e4151",class:t},(0,o.h)("img",{key:"8127200460d9450240efa43776f397b7f8e7ab2a",class:e,alt:this.alt,decoding:this.decoding,ref:i=>this.imageEl=i,sizes:this.sizes,src:this.src,srcset:this.srcset,usemap:this.usemap,height:isNaN(this.height)?void 0:this.height,width:isNaN(this.width)?void 0:this.width}),(0,o.h)("div",{key:"0cd9f28948a8943625b5d16a96820651cef4558d",class:"ino-img__fallback-icon"},(0,o.h)("ino-icon",{key:"da83990a46847267563aafc541b42a4f4c408afd",icon:this.fallbackIcon}))),this.imgListItem&&(0,o.h)("div",{class:"mdc-image-list__supporting"},(0,o.h)("span",{class:"mdc-image-list__label"},this.label)))}get el(){return(0,o.g)(this)}static get watchers(){return{height:["heightChanged"],width:["widthChanged"],ratioWidth:["ratioWidthChanged"],ratioHeight:["ratioHeightChanged"]}}constructor(i){(0,o.r)(this,i),this.alt=void 0,this.decoding=void 0,this.height=void 0,this.sizes=void 0,this.src=void 0,this.srcset=void 0,this.width=void 0,this.usemap=void 0,this.fallbackIcon="image_not_available",this.imgListItem=!1,this.label=void 0,this.ratioWidth=1,this.ratioHeight=1,this.rounded=void 0,this.composedRatioHeight="100%"}};s.style='.mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img:not(.mdc-image-list__item){display:inline-block;overflow:hidden;width:100%}ino-img .ino-img__composer{position:relative;box-sizing:border-box}ino-img .ino-img__image{position:absolute;top:0;left:0}ino-img.ino-img__rounded .ino-img__image{border-radius:50%}ino-img.mdc-image-list__item{display:list-item}ino-img img:before{content:" ";display:block;position:absolute;width:inherit;height:inherit;background-color:#fff}ino-img .ino-img__fallback-icon{display:none;position:absolute;background-color:#e7e7e7;width:100%;height:100%;top:0;left:0}ino-img .ino-img__fallback-icon ino-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:max(20px, 10%);height:max(20px, 10%);--icon-width:100%;--icon-height:100%}ino-img .ino-img__fallback-icon--visible{display:block}'}}]);