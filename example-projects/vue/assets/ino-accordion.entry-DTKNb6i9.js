import{r as c,c as d,h as e,g as r}from"./index-DIgeY9Iu.js";import{c as o}from"./index-38c18b20-Bpdhy5BS.js";import{g as s}from"./component-utils-757b8493-Dk10tU6Q.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const l=".ino-accordion{border-radius:24px}.ino-accordion:hover{background:#f6fafe}.ino-accordion__header{cursor:pointer;display:flex;align-items:center;padding-left:10px;min-height:48px}.ino-accordion__content{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;line-height:1.375rem;letter-spacing:0.001em;font-weight:400;padding:0 56px 0 52px;color:#4c4b52;overflow:hidden}.ino-accordion__title{padding-left:10px;font-family:Lato, Verdana, sans-serif;font-size:1rem;line-height:1.1875rem;letter-spacing:0.004em;font-weight:600;color:#4c4b52}.ino-accordion__title--expanded{color:#4655ff}.ino-accordion--expanded{background:#f6fafe}.ino-accordion .ino-accordion__content-wrapper{display:grid;grid-template-rows:0fr;transition:grid-template-rows 350ms ease-out}.ino-accordion .ino-accordion__content-wrapper--expanded{grid-template-rows:1fr;padding-bottom:32px}.toggle-wrapper{background:none;width:32px;height:32px;border:0;position:relative}.toggle-wrapper .toggle-icon{position:absolute;transition:200ms;background:#4655ff;border-radius:2.5px}.toggle-wrapper .toggle-icon--expanded{top:25%;bottom:25%;width:10%;left:45%}.toggle-wrapper .toggle-icon--collapsed{left:25%;right:25%;height:10%;top:45%}.toggle-wrapper--expanded .toggle-icon{transform:rotate(90deg)}.toggle-wrapper--expanded .toggle-icon--collapsed{left:50%;right:50%}.header-button{all:unset;display:flex;align-items:center}",p=l,g=class{constructor(n){c(this,n),this.expandedChange=d(this,"expandedChange",7),this.contentId=s(),this.expanded=!1,this.accordionTitle=""}componentDidLoad(){this.accordionTitle||console.warn("Ino-Accordion: missing accordionTitle property.")}toggleExpand(){this.expandedChange.emit(!this.expanded)}render(){const n=o({"ino-accordion":!0,"ino-accordion--expanded":this.expanded}),a=o({"toggle-wrapper":!0,"toggle-wrapper--expanded":this.expanded}),t=o({"ino-accordion__title":!0,"ino-accordion__title--expanded":this.expanded}),i=o({"ino-accordion__content-wrapper":!0,"ino-accordion__content-wrapper--expanded":this.expanded});return e("div",{key:"785ee06b7a73757977416a77ef4bc63f32703682",class:n},e("div",{key:"11b0911335d782f8ebaee3aed43de84568c2c468",class:"ino-accordion__header",onClick:()=>this.toggleExpand()},e("h3",{key:"79f9a431156887e1d585885bcdcee10e20028c07",role:"heading","aria-level":"3",style:{margin:"0"}},e("button",{key:"0f83eb984043aeef46843f0d1575afdb8fed39a7",class:"header-button",role:"button","aria-expanded":this.expanded?"true":"false","aria-controls":this.contentId},e("div",{key:"cce3c08c46adc28f455bb1f87b0f97a02bf585f3",class:a},e("span",{key:"553834b601aabff2775758c04262717b0d8084f6",class:"toggle-icon toggle-icon--expanded"}),e("span",{key:"4c76b666e7a0d9b67c31b438a3e236c07c1ac920",class:"toggle-icon toggle-icon--collapsed"})),e("span",{key:"7aab8d50512c122c0d5396ade60820e981e1cf31",class:t},this.accordionTitle)))),e("div",{key:"1c0ce8bfc18f9d032f9207b2262c01942d7333b5",class:i,id:this.contentId,role:"region","aria-labelledby":this.accordionTitle},e("div",{key:"1a6f4b15c6227423c8e3cea5d44a094fbc0cf304",class:"ino-accordion__content"},e("slot",{key:"0b0158cab4ad9281bec1fa2d756e83f2f882fd04"}))))}get el(){return r(this)}};g.style=p;export{g as ino_accordion};
