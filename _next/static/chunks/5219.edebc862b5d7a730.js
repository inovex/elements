"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5219],{89:function(e,n,o){o.d(n,{a:function(){return t},c:function(){return i},g:function(){return r}});/*!
 * Crafted with ❤ by inovex GmbH
 */var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==o.g?o.g:"undefined"!=typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function i(e,n,o){return e(o={path:n,exports:{},require:function(e,n){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},o.exports),o.exports}},5220:function(e,n,o){/*!
 * Crafted with ❤ by inovex GmbH
 */function t(){return"_"+Math.random().toString(36).substr(2,9)}function r(e,n){return e.querySelector(`[slot="${n}"]`)}function i(e,n){var o;return n?e.querySelectorAll(`[slot="${n}"]`).length>0:(null===(o=e.querySelector("slot"))||void 0===o?void 0:o.assignedElements().length)===0}function a(e){var n;null===(n=e.querySelector("[data-ino-focus]"))||void 0===n||n.focus()}function c(e){e.stopPropagation(),e.preventDefault()}o.d(n,{a:function(){return r},f:function(){return a},g:function(){return t},h:function(){return i},p:function(){return c}})},939:function(e,n,o){o.d(n,{c:function(){return t}});/*!
 * Crafted with ❤ by inovex GmbH
 */var t=(0,o(89).c)(function(e){/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):window.classNames=o}()})},5227:function(e,n,o){o.r(n),o.d(n,{ino_accordion:function(){return a}});var t=o(4735),r=o(939),i=o(5220);o(89);let a=class{constructor(e){(0,t.r)(this,e),this.expandedChange=(0,t.c)(this,"expandedChange",7),this.contentId=(0,i.g)(),this.expanded=!1,this.accordionTitle=""}componentDidLoad(){this.accordionTitle||console.warn("Ino-Accordion: missing accordionTitle property.")}toggleExpand(){this.expandedChange.emit(!this.expanded)}render(){let e=(0,r.c)({"ino-accordion":!0,"ino-accordion--expanded":this.expanded}),n=(0,r.c)({"toggle-wrapper":!0,"toggle-wrapper--expanded":this.expanded}),o=(0,r.c)({"ino-accordion__title":!0,"ino-accordion__title--expanded":this.expanded}),i=(0,r.c)({"ino-accordion__content-wrapper":!0,"ino-accordion__content-wrapper--expanded":this.expanded});return(0,t.h)("div",{class:e},(0,t.h)("div",{class:"ino-accordion__header"},(0,t.h)("h3",{role:"heading","aria-level":"3",style:{margin:"0"}},(0,t.h)("button",{class:"header-button",onClick:()=>this.toggleExpand(),role:"button","aria-expanded":this.expanded?"true":"false","aria-controls":this.contentId},(0,t.h)("div",{class:n},(0,t.h)("span",{class:"toggle-icon toggle-icon--expanded"}),(0,t.h)("span",{class:"toggle-icon toggle-icon--collapsed"})),(0,t.h)("span",{class:o},this.accordionTitle)))),(0,t.h)("div",{class:i,id:this.contentId,role:"region","aria-labelledby":this.accordionTitle},(0,t.h)("div",{class:"ino-accordion__content"},(0,t.h)("slot",null))))}get el(){return(0,t.g)(this)}};a.style=".ino-accordion{border-radius:24px}.ino-accordion:hover{background:#f6fafe}.ino-accordion__header{cursor:pointer;display:flex;align-items:center;padding-left:10px;min-height:48px}.ino-accordion__content{font-family:Lato, Verdana, sans-serif;font-size:0.875rem;line-height:1.375rem;letter-spacing:0.001em;font-weight:400;padding:0 56px 0 52px;color:#4c4b52;overflow:hidden}.ino-accordion__title{padding-left:10px;font-family:Lato, Verdana, sans-serif;font-size:1rem;line-height:1.1875rem;letter-spacing:0.004em;font-weight:600;color:#4c4b52}.ino-accordion__title--expanded{color:#4655ff}.ino-accordion--expanded{background:#f6fafe}.ino-accordion .ino-accordion__content-wrapper{display:grid;grid-template-rows:0fr;transition:grid-template-rows 350ms ease-out}.ino-accordion .ino-accordion__content-wrapper--expanded{grid-template-rows:1fr;padding-bottom:32px}.toggle-wrapper{background:none;width:32px;height:32px;border:0;position:relative}.toggle-wrapper .toggle-icon{position:absolute;transition:200ms;background:#4655ff;border-radius:2.5px}.toggle-wrapper .toggle-icon--expanded{top:25%;bottom:25%;width:10%;left:45%}.toggle-wrapper .toggle-icon--collapsed{left:25%;right:25%;height:10%;top:45%}.toggle-wrapper--expanded .toggle-icon{transform:rotate(90deg)}.toggle-wrapper--expanded .toggle-icon--collapsed{left:50%;right:50%}.header-button{all:unset;display:flex;align-items:center}"}}]);