import{r as n,h as i,H as m,g as r}from"./preview-958063d5.js";import{c as e}from"./index-796d4780-671f1753.js";import"./iframe-237b8621.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-a0365730.js";import"./index-c6a022fd.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-77cd649f.js";import"./index-893512a3.js";import"./_commonjsHelpers-212d567a-5c26fd6e.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const d='.mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img:not(.mdc-image-list__item){display:inline-block;overflow:hidden;width:100%}ino-img .ino-img__composer{position:relative;box-sizing:border-box}ino-img .ino-img__image{position:absolute;top:0;left:0}ino-img.ino-img__rounded .ino-img__image{border-radius:50%}ino-img.mdc-image-list__item{display:list-item}ino-img img:before{content:" ";display:block;position:absolute;width:inherit;height:inherit;background-color:#fff}ino-img .ino-img__fallback-icon{display:none;position:absolute;background-color:#e7e7e7;width:100%;height:100%;top:0;left:0}ino-img .ino-img__fallback-icon ino-icon{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:max(20px, 10%);height:max(20px, 10%);--icon-width:100%;--icon-height:100%}ino-img .ino-img__fallback-icon--visible{display:block}',h=class{constructor(t){n(this,t),this.alt=void 0,this.decoding=void 0,this.height=void 0,this.sizes=void 0,this.src=void 0,this.srcset=void 0,this.width=void 0,this.usemap=void 0,this.fallbackIcon="image_not_available",this.imgListItem=!1,this.label=void 0,this.ratioWidth=1,this.ratioHeight=1,this.rounded=void 0,this.composedRatioHeight="100%"}heightChanged(){this.computeFixedDimensions()}widthChanged(){this.computeFixedDimensions()}ratioWidthChanged(){this.computeRatio()}ratioHeightChanged(){this.computeRatio()}componentWillLoad(){this.computeRatio(),this.computeFixedDimensions()}componentDidLoad(){this.imgListItem||(this.el.querySelector("div").style.paddingTop=this.composedRatioHeight),this.imageEl.onerror=()=>this.handleError()}computeFixedDimensions(){isNaN(this.height)||(this.el.style.height=`${this.height}px`),isNaN(this.width)||(this.el.style.width=`${this.width}px`)}computeRatio(){const t=this.ratioHeight/this.ratioWidth*100;this.composedRatioHeight=`${t}%`}handleError(){this.imageEl.nextElementSibling.classList.add("ino-img__fallback-icon--visible")}render(){const t=e({"ino-img__rounded":this.rounded,"mdc-image-list__item":this.imgListItem}),o=e({"ino-img__composer":!this.imgListItem,"mdc-image-list__image-aspect-container":this.imgListItem}),s=e({"ino-img__image":!this.imgListItem,"mdc-image-list__image":this.imgListItem});return i(m,{class:t},i("div",{class:o},i("img",{class:s,alt:this.alt,decoding:this.decoding,ref:a=>this.imageEl=a,sizes:this.sizes,src:this.src,srcset:this.srcset,usemap:this.usemap,height:isNaN(this.height)?void 0:this.height,width:isNaN(this.width)?void 0:this.width}),i("div",{class:"ino-img__fallback-icon"},i("ino-icon",{icon:this.fallbackIcon}))),this.imgListItem&&i("div",{class:"mdc-image-list__supporting"},i("span",{class:"mdc-image-list__label"},this.label)))}get el(){return r(this)}static get watchers(){return{height:["heightChanged"],width:["widthChanged"],ratioWidth:["ratioWidthChanged"],ratioHeight:["ratioHeightChanged"]}}};h.style=d;export{h as ino_img};
