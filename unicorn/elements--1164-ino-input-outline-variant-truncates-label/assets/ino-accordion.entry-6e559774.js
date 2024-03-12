import{r,c,h as e,g as d}from"./preview-1ff50481.js";import{c as o}from"./index-255d3c2f-5d974998.js";import{g as s}from"./component-utils-757b8493-9ff506cf.js";import"./iframe-076afa10.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-936e56f6.js";import"./index-ebca29af.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-db9b6402.js";import"./index-830bd498.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const p=".ino-accordion{border-radius:24px}.ino-accordion:hover{background:#f6fafe}.ino-accordion__header{cursor:pointer;display:flex;align-items:center;padding-left:10px;min-height:48px}.ino-accordion__content{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;line-height:1.375rem;letter-spacing:0.001em;font-weight:400;padding:0 56px 0 52px;color:#4c4b52;overflow:hidden}.ino-accordion__title{padding-left:10px;font-family:Lato, Verdana, sans-serif;font-size:1rem;line-height:1.1875rem;letter-spacing:0.004em;font-weight:600;color:#4c4b52}.ino-accordion__title--expanded{color:#4655ff}.ino-accordion--expanded{background:#f6fafe}.ino-accordion .ino-accordion__content-wrapper{display:grid;grid-template-rows:0fr;transition:grid-template-rows 350ms ease-out}.ino-accordion .ino-accordion__content-wrapper--expanded{grid-template-rows:1fr;padding-bottom:32px}.toggle-wrapper{background:none;width:32px;height:32px;border:0;position:relative}.toggle-wrapper .toggle-icon{position:absolute;transition:200ms;background:#4655ff;border-radius:2.5px}.toggle-wrapper .toggle-icon--expanded{top:25%;bottom:25%;width:10%;left:45%}.toggle-wrapper .toggle-icon--collapsed{left:25%;right:25%;height:10%;top:45%}.toggle-wrapper--expanded .toggle-icon{transform:rotate(90deg)}.toggle-wrapper--expanded .toggle-icon--collapsed{left:50%;right:50%}.header-button{all:unset;display:flex;align-items:center}",l=p,g=class{constructor(t){r(this,t),this.expandedChange=c(this,"expandedChange",7),this.contentId=s(),this.expanded=!1,this.accordionTitle=""}componentDidLoad(){this.accordionTitle||console.warn("Ino-Accordion: missing accordionTitle property.")}toggleExpand(){this.expandedChange.emit(!this.expanded)}render(){const t=o({"ino-accordion":!0,"ino-accordion--expanded":this.expanded}),n=o({"toggle-wrapper":!0,"toggle-wrapper--expanded":this.expanded}),a=o({"ino-accordion__title":!0,"ino-accordion__title--expanded":this.expanded}),i=o({"ino-accordion__content-wrapper":!0,"ino-accordion__content-wrapper--expanded":this.expanded});return e("div",{key:"1cee73cf3c5bc4b1d1716ac8fa21663e2eaa05e1",class:t},e("div",{key:"4b9f1b754f9c170e57e4eed3bc80f845f041b9a7",class:"ino-accordion__header",onClick:()=>this.toggleExpand()},e("h3",{key:"3eeeaa5b6f7bc98f0bc170ee95d69d57ff4b1cbc",role:"heading","aria-level":"3",style:{margin:"0"}},e("button",{key:"472a476174137222ae95f94e6ceec1cb274ebd79",class:"header-button",role:"button","aria-expanded":this.expanded?"true":"false","aria-controls":this.contentId},e("div",{key:"3f6407866cb05ba0f8fcca47d32f6add99ef275e",class:n},e("span",{key:"26e784819862e0a8e4e8b30b9f981618e8c93e0f",class:"toggle-icon toggle-icon--expanded"}),e("span",{key:"429b73acdb11eb775bc915fc460b64c564c4a9eb",class:"toggle-icon toggle-icon--collapsed"})),e("span",{key:"d43e09b8e4c07744f39d7c45579475b0bf1327b9",class:a},this.accordionTitle)))),e("div",{key:"8a7de2589349eb52a82dec60491734daa85abbdf",class:i,id:this.contentId,role:"region","aria-labelledby":this.accordionTitle},e("div",{key:"450b930a8ee20d291c891f074c1f3bf8a2077663",class:"ino-accordion__content"},e("slot",{key:"ac8cf55d59c7230fe2c49c865eb292c581661fbb"}))))}get el(){return d(this)}};g.style=l;export{g as ino_accordion};
