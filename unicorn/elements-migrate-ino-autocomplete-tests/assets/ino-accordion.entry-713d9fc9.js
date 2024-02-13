import{r as a,c as d,h as e,g as c}from"./preview-8ef7ff6d.js";import{c as o}from"./index-796d4780-671f1753.js";import{g as s}from"./component-utils-02a98646-9ff506cf.js";import"./iframe-f2c9213d.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-a0365730.js";import"./index-94cdd16e.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-35266ff2.js";import"./index-caf5ec44.js";import"./_commonjsHelpers-212d567a-5c26fd6e.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const p=".ino-accordion{border-radius:24px}.ino-accordion:hover{background:#f6fafe}.ino-accordion__header{cursor:pointer;display:flex;align-items:center;padding-left:10px;min-height:48px}.ino-accordion__content{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;line-height:1.375rem;letter-spacing:0.001em;font-weight:400;padding:0 56px 0 52px;color:#4c4b52;overflow:hidden}.ino-accordion__title{padding-left:10px;font-family:Lato, Verdana, sans-serif;font-size:1rem;line-height:1.1875rem;letter-spacing:0.004em;font-weight:600;color:#4c4b52}.ino-accordion__title--expanded{color:#4655ff}.ino-accordion--expanded{background:#f6fafe}.ino-accordion .ino-accordion__content-wrapper{display:grid;grid-template-rows:0fr;transition:grid-template-rows 350ms ease-out}.ino-accordion .ino-accordion__content-wrapper--expanded{grid-template-rows:1fr;padding-bottom:32px}.toggle-wrapper{background:none;width:32px;height:32px;border:0;position:relative}.toggle-wrapper .toggle-icon{position:absolute;transition:200ms;background:#4655ff;border-radius:2.5px}.toggle-wrapper .toggle-icon--expanded{top:25%;bottom:25%;width:10%;left:45%}.toggle-wrapper .toggle-icon--collapsed{left:25%;right:25%;height:10%;top:45%}.toggle-wrapper--expanded .toggle-icon{transform:rotate(90deg)}.toggle-wrapper--expanded .toggle-icon--collapsed{left:50%;right:50%}.header-button{all:unset;display:flex;align-items:center}",l=class{constructor(t){a(this,t),this.expandedChange=d(this,"expandedChange",7),this.contentId=s(),this.expanded=!1,this.accordionTitle=""}componentDidLoad(){this.accordionTitle||console.warn("Ino-Accordion: missing accordionTitle property.")}toggleExpand(){this.expandedChange.emit(!this.expanded)}render(){const t=o({"ino-accordion":!0,"ino-accordion--expanded":this.expanded}),n=o({"toggle-wrapper":!0,"toggle-wrapper--expanded":this.expanded}),i=o({"ino-accordion__title":!0,"ino-accordion__title--expanded":this.expanded}),r=o({"ino-accordion__content-wrapper":!0,"ino-accordion__content-wrapper--expanded":this.expanded});return e("div",{class:t},e("div",{class:"ino-accordion__header"},e("h3",{role:"heading","aria-level":"3",style:{margin:"0"}},e("button",{class:"header-button",onClick:()=>this.toggleExpand(),role:"button","aria-expanded":this.expanded?"true":"false","aria-controls":this.contentId},e("div",{class:n},e("span",{class:"toggle-icon toggle-icon--expanded"}),e("span",{class:"toggle-icon toggle-icon--collapsed"})),e("span",{class:i},this.accordionTitle)))),e("div",{class:r,id:this.contentId,role:"region","aria-labelledby":this.accordionTitle},e("div",{class:"ino-accordion__content"},e("slot",null))))}get el(){return c(this)}};l.style=p;export{l as ino_accordion};
