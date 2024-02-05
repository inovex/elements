import{r as f,c as v,h as c,H as m,a as p}from"./preview-a3840d96.js";import"./iframe-96f23f3c.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-a0365730.js";import"./index-e976230f.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-daf5de5f.js";import"./index-86f38c5b.js";/*!
 * Crafted with ❤ by inovex GmbH
 */class o{static setSvgTitle(e,n){const i=this.parser.parseFromString(e,"image/svg+xml"),a=i.querySelector("title");return a&&(a.innerHTML=n),this.serializer.serializeToString(i)}static removeSvgTitle(e){const n=this.parser.parseFromString(e,"image/svg+xml"),i=n.querySelector("title");return i&&i.remove(),this.serializer.serializeToString(n)}}o.parser=new DOMParser;o.serializer=new XMLSerializer;let r;const C={status_abwesend:"status_away",status_aktuelle:"status_current",status_offboarding_laufend:"offboarding_running",status_onboarding_laufend:"onboarding_running",status_vergangene:"status_past",status_zukuenftige:"status_future"};function w(){if(!r){const t=window;t.inoIcons=t.inoIcons||{},r=t.inoIcons.map=t.inoIcons.map||new Map}return r}const l=t=>u(t)&&(t=t.trim(),h(t))?t:null;function S(t){const e=C[t]||t;if(e&&!h(e))return e}function y(t,e){let n=l(t);return n||(n=S(e),n?_(n):l(e))}function _(t){var e;return(e=w().get(t))!==null&&e!==void 0?e:p(`./ino-icon/${t}.svg`)}const h=t=>t.length>0&&/(\/|\.)/.test(t),u=t=>typeof t=="string",b=t=>{if(t){const e=document.createElement("div");e.innerHTML=t;for(let i=e.childNodes.length-1;i>=0;i--)e.childNodes[i].nodeName.toLowerCase()!=="svg"&&e.removeChild(e.childNodes[i]);const n=e.firstElementChild;if(n&&n.nodeName.toLowerCase()==="svg"){const i=n.getAttribute("class")||"";if(n.setAttribute("class",(i+" s-ion-icon").trim()),g(n))return e.innerHTML}}return""},g=t=>{if(t.nodeType===1){if(t.nodeName.toLowerCase()==="script")return!1;for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].value;if(u(n)&&n.toLowerCase().indexOf("on")===0)return!1}for(let e=0;e<t.childNodes.length;e++)if(!g(t.childNodes[e]))return!1}return!0},s=new Map,d=new Map,T=t=>{let e=d.get(t);return e===void 0&&(e=fetch(t).then(n=>{if(n.ok)return n.text().then(i=>{s.set(t,b(i))});s.set(t,"")}),d.set(t,e)),e},k=`:host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em);--icon-color:var(
    --ino-icon-color,
    var(--ino-icon-color-primary, #3d40f5)
  )}:host{display:inline-flex;flex-direction:column;justify-content:center;vertical-align:middle}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}`,I=class{constructor(t){f(this,t),this.clickEl=v(this,"clickEl",7),this.icon=void 0,this.colorSecondary=void 0,this.clickable=void 0,this.src=void 0,this.svgTitle=void 0,this.svgContent=void 0}iconChanged(){this.loadIcon()}watchHandler(t){t&&(this.svgContent=this.svgTitle?o.setSvgTitle(this.svgContent,this.svgTitle):o.removeSvgTitle(this.svgContent))}componentWillLoad(){this.loadIcon()}loadIcon(){const t=y(this.src,this.icon);t&&(s.has(t)?this.svgContent=s.get(t):T(t).then(()=>this.svgContent=s.get(t)))}handleClick(t){t.preventDefault(),this.clickEl.emit(!0)}handleKeyPress(t){t.code==="Enter"&&(t.preventDefault(),this.clickEl.emit(!0))}render(){if(!this.svgContent)return;let t={};return this.clickable&&(t={onClick:e=>this.handleClick(e),onKeyPress:e=>this.handleKeyPress(e),tabindex:0,role:"button"}),c(m,{class:"ino-icon--color-scheme-primary"},c("i",Object.assign({innerHTML:this.svgContent},t)))}static get watchers(){return{icon:["iconChanged"],svgContent:["watchHandler"]}}};I.style=k;export{I as ino_icon};
