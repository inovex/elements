import{r as a,h as i,H as o,g as s}from"./index-BIFTAEQd.js";import{c as m}from"./index-38c18b20-Bpdhy5BS.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const r=".mdc-image-list{display:flex;flex-wrap:wrap;margin:0 auto;padding:0}.mdc-image-list__item,.mdc-image-list__image-aspect-container{position:relative;box-sizing:border-box}.mdc-image-list__item{list-style-type:none}.mdc-image-list__image{width:100%}.mdc-image-list__image-aspect-container .mdc-image-list__image{position:absolute;top:0;right:0;bottom:0;left:0;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-image-list__image-aspect-container{padding-bottom:calc(100% / 1)}.mdc-image-list__image{border-radius:0}.mdc-image-list--with-text-protection .mdc-image-list__supporting{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-image-list__supporting{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;padding:8px 0;line-height:24px}.mdc-image-list__label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, var(--ino-font-family, Lato, Verdana, sans-serif)));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-image-list--with-text-protection .mdc-image-list__supporting{position:absolute;bottom:0;width:100%;height:48px;padding:0 16px;background:rgba(0, 0, 0, 0.6);color:#fff}.mdc-image-list--masonry{display:block}.mdc-image-list--masonry .mdc-image-list__item{break-inside:avoid-column}.mdc-image-list--masonry .mdc-image-list__image{display:block;height:auto}ino-img-list{--img-list-cols:var(--ino-img-list-cols, 3)}ino-img-list ul:not(.mdc-image-list--masonry) .mdc-image-list__item{width:100%/var(--img-list-cols)-4px1px/var(--img-list-cols);margin:2px}ino-img-list ul.mdc-image-list--masonry{column-count:var(--img-list-cols);column-gap:16px}ino-img-list ul.mdc-image-list--masonry .mdc-image-list__item{margin-bottom:16px}",n=r,l=class{constructor(t){a(this,t),this.masonry=!1,this.encloseLabel=!1}componentDidLoad(){this.masonry&&this.el.querySelectorAll(".mdc-image-list__image-aspect-container").forEach(e=>{e.classList.remove("mdc-image-list__image-aspect-container")})}render(){const t=m({"mdc-image-list":!0,"mdc-image-list--masonry":this.masonry,"mdc-image-list--with-text-protection":this.encloseLabel});return i(o,{key:"6fd17341efeffcfe0bc22db0a5af9e47ee2ac33c"},i("ul",{key:"d875ac44fa9101aae81a4da42ee89719d33e6841",class:t},i("slot",{key:"f06d6c2e68afd2aac6730c9d371fe90b619c2860"})))}get el(){return s(this)}};l.style=n;export{l as ino_img_list};
