(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[592],{5526:(e,o,n)=>{"use strict";n.d(o,{a:()=>t,c:()=>a,g:()=>i});var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function a(e,o,n){return e(n={path:o,exports:{},require:function(e,o){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},2146:(e,o,n)=>{"use strict";n.d(o,{c:()=>t});var t=(0,n(5526).c)(function(e){!function(){var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)){if(i.length){var r=n.apply(null,i);r&&e.push(r)}}else if("object"===a){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){e.push(i.toString());continue}for(var c in i)o.call(i,c)&&i[c]&&e.push(c)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()})},592:(e,o,n)=>{"use strict";n.r(o),n.d(o,{ino_accordion:()=>a});var t=n(1221),i=n(2146);n(5526);const a=class{constructor(e){(0,t.r)(this,e),this.expandedChange=(0,t.c)(this,"expandedChange",7),this.expanded=!1,this.accordionTitle=null}componentDidLoad(){this.accordionTitle||console.warn("Ino-Accordion: missing accordionTitle property.")}toggleExpand(){this.expandedChange.emit(!this.expanded)}render(){const e=(0,i.c)({"ino-accordion":!0,"ino-accordion--expanded":this.expanded}),o=(0,i.c)({"toggle-button":!0,"toggle-button--expanded":this.expanded}),n=(0,i.c)({"ino-accordion__content":!0,"ino-accordion__content--visible":this.expanded}),a=(0,i.c)({"ino-accordion__title":!0,"ino-accordion__title--expanded":this.expanded}),r=(0,i.c)({"ino-accordion__content-wrapper":!0,"ino-accordion__content-wrapper--expanded":this.expanded});return(0,t.h)("div",{class:e},(0,t.h)("div",{class:"ino-accordion__header",onClick:()=>this.toggleExpand()},(0,t.h)("button",{class:o},(0,t.h)("span",{class:"toggle-icon toggle-icon--expanded"}),(0,t.h)("span",{class:"toggle-icon toggle-icon--collapsed"})),(0,t.h)("span",{class:a},this.accordionTitle)),(0,t.h)("div",{class:r},(0,t.h)("div",{class:n},(0,t.h)("slot",null))))}get el(){return(0,t.g)(this)}};a.style=".ino-accordion{border-radius:24px}.ino-accordion:hover{background:#f6fafe}.ino-accordion__header{cursor:pointer;display:flex;align-items:center;padding-left:10px;min-height:48px}.ino-accordion__content{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;line-height:1.375rem;letter-spacing:0.001em;font-weight:400;padding:0 56px 32px 52px;color:#4C4B52;opacity:0;transition:opacity 200ms ease-in-out}.ino-accordion__content--visible{opacity:1}.ino-accordion__title{padding-left:10px;font-family:Lato, Verdana, sans-serif;font-size:1rem;line-height:1.1875rem;letter-spacing:0.004em;font-weight:600;color:#4C4B52}.ino-accordion__title--expanded{color:#4655ff}.ino-accordion--expanded{background:#f6fafe}.ino-accordion .ino-accordion__content-wrapper{max-height:0;overflow:hidden;transition:max-height 200ms ease-in-out}.ino-accordion .ino-accordion__content-wrapper--expanded{max-height:1000px}.toggle-button{background:none;width:32px;height:32px;border:0;position:relative}.toggle-button .toggle-icon{position:absolute;transition:200ms;background:#4655ff;border-radius:2.5px}.toggle-button .toggle-icon--expanded{top:25%;bottom:25%;width:10%;left:45%}.toggle-button .toggle-icon--collapsed{left:25%;right:25%;height:10%;top:45%}.toggle-button--expanded .toggle-icon{transform:rotate(90deg)}.toggle-button--expanded .toggle-icon--collapsed{left:50%;right:50%}"}}]);