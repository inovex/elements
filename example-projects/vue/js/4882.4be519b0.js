"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[4882],{4882:function(t,e,n){n.r(e),n.d(e,{ino_icon:function(){return _}});var i=n(1297);
/*!
 * Crafted with ❤ by inovex GmbH
 */class s{static setSvgTitle(t,e){const n=this.parser.parseFromString(t,"image/svg+xml"),i=n.querySelector("title");return i&&(i.innerHTML=e),this.serializer.serializeToString(n)}static removeSvgTitle(t){const e=this.parser.parseFromString(t,"image/svg+xml"),n=e.querySelector("title");return n&&n.remove(),this.serializer.serializeToString(e)}}let o;s.parser=new DOMParser,s.serializer=new XMLSerializer;const r={status_abwesend:"status_away",status_aktuelle:"status_current",status_offboarding_laufend:"offboarding_running",status_onboarding_laufend:"onboarding_running",status_vergangene:"status_past",status_zukuenftige:"status_future"};function c(){if(!o){const t=window;t.inoIcons=t.inoIcons||{},o=t.inoIcons.map=t.inoIcons.map||new Map}return o}const l=t=>g(t)&&(t=t.trim(),d(t))?t:null;function a(t){const e=r[t]||t;if(e&&!d(e))return e}function h(t,e){let n=l(t);return n||(n=a(e),n?u(n):l(e))}function u(t){var e;return null!==(e=c().get(t))&&void 0!==e?e:(0,i.a)(`./ino-icon/${t}.svg`)}const d=t=>t.length>0&&/(\/|\.)/.test(t),g=t=>"string"===typeof t,f=t=>{if(t){const e=document.createElement("div");e.innerHTML=t;for(let t=e.childNodes.length-1;t>=0;t--)"svg"!==e.childNodes[t].nodeName.toLowerCase()&&e.removeChild(e.childNodes[t]);const n=e.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()){const t=n.getAttribute("class")||"";if(n.setAttribute("class",(t+" s-ion-icon").trim()),v(n))return e.innerHTML}}return""},v=t=>{if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].value;if(g(n)&&0===n.toLowerCase().indexOf("on"))return!1}for(let e=0;e<t.childNodes.length;e++)if(!v(t.childNodes[e]))return!1}return!0},m=new Map,p=new Map,w=t=>{let e=p.get(t);return void 0===e&&(e=fetch(t).then((e=>{if(e.ok)return e.text().then((e=>{m.set(t,f(e))}));m.set(t,"")})),p.set(t,e)),e},C=":host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em);--icon-color:var(\n      --ino-icon-color,\n      var(\n          --ino-icon-color-primary,\n          #3d40f5\n      )\n  )}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}",_=class{constructor(t){(0,i.r)(this,t),this.clickEl=(0,i.c)(this,"clickEl",7)}iconChanged(){this.loadIcon()}watchHandler(t){t&&(this.svgContent=this.svgTitle?s.setSvgTitle(this.svgContent,this.svgTitle):s.removeSvgTitle(this.svgContent))}componentWillLoad(){this.loadIcon()}loadIcon(){const t=h(this.src,this.icon);t&&(m.has(t)?this.svgContent=m.get(t):w(t).then((()=>this.svgContent=m.get(t))))}handleClick(t){t.preventDefault(),this.clickEl.emit(!0)}handleKeyPress(t){"Enter"===t.code&&(t.preventDefault(),this.clickEl.emit(!0))}render(){if(!this.svgContent)return;let t={};return this.clickable&&(t={onClick:t=>this.handleClick(t),onKeyPress:t=>this.handleKeyPress(t),tabindex:0,role:"button"}),(0,i.h)(i.H,{class:"ino-icon--color-scheme-primary"},(0,i.h)("i",Object.assign({innerHTML:this.svgContent},t)))}static get watchers(){return{icon:["iconChanged"],svgContent:["watchHandler"]}}};_.style=C}}]);
//# sourceMappingURL=4882.4be519b0.js.map