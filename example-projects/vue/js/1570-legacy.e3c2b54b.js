(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[1570],{4173:function(i,t,e){var o=e(3103),n=e(9859);o({global:!0,forced:n.globalThis!==n},{globalThis:n})},1231:function(i,t,e){"use strict";e.d(t,{a:function(){return o},c:function(){return a},g:function(){return n}});e(4173),e(1372);var o="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:"undefined"!==typeof self?self:{};function n(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i["default"]:i}function a(i,t,e){return e={path:t,exports:{},require:function(i,t){return s()}},i(e,e.exports),e.exports}function s(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},9776:function(i,t,e){"use strict";e.d(t,{c:function(){return a}});var o=e(6632),n=(e(6728),e(8188),e(8233),e(9529),e(1235),e(6781),e(1231)),a=(0,n.c)((function(i){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function e(){for(var i=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var s=(0,o.Z)(a);if("string"===s||"number"===s)i.push(a);else if(Array.isArray(a)){if(a.length){var r=e.apply(null,a);r&&i.push(r)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){i.push(a.toString());continue}for(var l in a)t.call(a,l)&&a[l]&&i.push(l)}}}return i.join(" ")}i.exports?(e.default=e,i.exports=e):window.classNames=e})()}))},1570:function(i,t,e){"use strict";e.r(t),e.d(t,{ino_img:function(){return l}});var o=e(4567),n=e(6812),a=e(1297),s=e(9776),r=(e(1231),'.mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img:not(.mdc-image-list__item){display:inline-block;overflow:hidden;width:100%}ino-img .ino-img__composer{position:relative;box-sizing:border-box}ino-img .ino-img__image{position:absolute;top:0;left:0}ino-img.ino-img__rounded .ino-img__image{border-radius:50%}ino-img.mdc-image-list__item{display:list-item}ino-img img:before{content:" ";display:block;position:absolute;width:inherit;height:inherit;background-color:#fff}ino-img .ino-img__fallback-icon{display:none;position:absolute;background-color:#e7e7e7;width:100%;height:100%;top:0;left:0}ino-img .ino-img__fallback-icon ino-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:max(20px, 10%);height:max(20px, 10%);--icon-width:100%;--icon-height:100%}ino-img .ino-img__fallback-icon--visible{display:block}'),l=function(){function i(t){(0,o.Z)(this,i),(0,a.r)(this,t),this.fallbackIcon="image_not_available",this.imgListItem=!1,this.ratioWidth=1,this.ratioHeight=1,this.composedRatioHeight="100%"}return(0,n.Z)(i,[{key:"heightChanged",value:function(){this.computeFixedDimensions()}},{key:"widthChanged",value:function(){this.computeFixedDimensions()}},{key:"ratioWidthChanged",value:function(){this.computeRatio()}},{key:"ratioHeightChanged",value:function(){this.computeRatio()}},{key:"componentWillLoad",value:function(){this.computeRatio(),this.computeFixedDimensions()}},{key:"componentDidLoad",value:function(){var i=this;this.imgListItem||(this.el.querySelector("div").style.paddingTop=this.composedRatioHeight),this.imageEl.onerror=function(){return i.handleError()}}},{key:"computeFixedDimensions",value:function(){isNaN(this.height)||(this.el.style.height="".concat(this.height,"px")),isNaN(this.width)||(this.el.style.width="".concat(this.width,"px"))}},{key:"computeRatio",value:function(){var i=this.ratioHeight/this.ratioWidth*100;this.composedRatioHeight="".concat(i,"%")}},{key:"handleError",value:function(){this.imageEl.nextElementSibling.classList.add("ino-img__fallback-icon--visible")}},{key:"render",value:function(){var i=this,t=(0,s.c)({"ino-img__rounded":this.rounded,"mdc-image-list__item":this.imgListItem}),e=(0,s.c)({"ino-img__composer":!this.imgListItem,"mdc-image-list__image-aspect-container":this.imgListItem}),o=(0,s.c)({"ino-img__image":!this.imgListItem,"mdc-image-list__image":this.imgListItem});return(0,a.h)(a.H,{class:t},(0,a.h)("div",{class:e},(0,a.h)("img",{class:o,alt:this.alt,decoding:this.decoding,ref:function(t){return i.imageEl=t},sizes:this.sizes,src:this.src,srcset:this.srcset,usemap:this.usemap,height:isNaN(this.height)?void 0:this.height,width:isNaN(this.width)?void 0:this.width}),(0,a.h)("div",{class:"ino-img__fallback-icon"},(0,a.h)("ino-icon",{icon:this.fallbackIcon}))),this.imgListItem&&(0,a.h)("div",{class:"mdc-image-list__supporting"},(0,a.h)("span",{class:"mdc-image-list__label"},this.label)))}},{key:"el",get:function(){return(0,a.g)(this)}}],[{key:"watchers",get:function(){return{height:["heightChanged"],width:["widthChanged"],ratioWidth:["ratioWidthChanged"],ratioHeight:["ratioHeightChanged"]}}}]),i}();l.style=r}}]);
//# sourceMappingURL=1570-legacy.e3c2b54b.js.map