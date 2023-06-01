import{r as d,c as r,h as o,g as s}from"./index.98455aa6.js";import{c as n}from"./index-796d4780.ad696562.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const l=".ino-accordion{border-radius:24px}.ino-accordion:hover{background:#f6fafe}.ino-accordion__header{cursor:pointer;display:flex;align-items:center;padding-left:10px;min-height:48px}.ino-accordion__content{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;line-height:1.375rem;letter-spacing:0.001em;font-weight:400;padding:0 56px 32px 52px;color:#4C4B52;opacity:0;transition:opacity 200ms ease-in-out}.ino-accordion__content--visible{opacity:1}.ino-accordion__title{padding-left:10px;font-family:Lato, Verdana, sans-serif;font-size:1rem;line-height:1.1875rem;letter-spacing:0.004em;font-weight:600;color:#4C4B52}.ino-accordion__title--expanded{color:#4655ff}.ino-accordion--expanded{background:#f6fafe}.ino-accordion .ino-accordion__content-wrapper{max-height:0;overflow:hidden;transition:max-height 200ms ease-in-out}.ino-accordion .ino-accordion__content-wrapper--expanded{max-height:1000px}.toggle-button{background:none;width:32px;height:32px;border:0;position:relative}.toggle-button .toggle-icon{position:absolute;transition:200ms;background:#4655ff;border-radius:2.5px}.toggle-button .toggle-icon--expanded{top:25%;bottom:25%;width:10%;left:45%}.toggle-button .toggle-icon--collapsed{left:25%;right:25%;height:10%;top:45%}.toggle-button--expanded .toggle-icon{transform:rotate(90deg)}.toggle-button--expanded .toggle-icon--collapsed{left:50%;right:50%}",g=class{constructor(e){d(this,e),this.expandedChange=r(this,"expandedChange",7),this.expanded=!1,this.accordionTitle=null}componentDidLoad(){this.accordionTitle||console.warn("Ino-Accordion: missing accordionTitle property.")}toggleExpand(){this.expandedChange.emit(!this.expanded)}render(){const e=n({"ino-accordion":!0,"ino-accordion--expanded":this.expanded}),t=n({"toggle-button":!0,"toggle-button--expanded":this.expanded}),i=n({"ino-accordion__content":!0,"ino-accordion__content--visible":this.expanded}),a=n({"ino-accordion__title":!0,"ino-accordion__title--expanded":this.expanded}),c=n({"ino-accordion__content-wrapper":!0,"ino-accordion__content-wrapper--expanded":this.expanded});return o("div",{class:e},o("div",{class:"ino-accordion__header",onClick:()=>this.toggleExpand()},o("button",{class:t},o("span",{class:"toggle-icon toggle-icon--expanded"}),o("span",{class:"toggle-icon toggle-icon--collapsed"})),o("span",{class:a},this.accordionTitle)),o("div",{class:c},o("div",{class:i},o("slot",null))))}get el(){return s(this)}};g.style=l;export{g as ino_accordion};
