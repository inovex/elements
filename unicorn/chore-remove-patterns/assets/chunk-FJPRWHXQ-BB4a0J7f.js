import{d as l}from"./index-DrFu-skq.js";import"./lit-element-BwWyWpv3.js";import{D as _}from"./lit-html-odaN0r1L.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=(r,o)=>o===void 0?(r==null?void 0:r._$litType$)!==void 0:(r==null?void 0:r._$litType$)===o,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{simulatePageLoad:p,simulateDOMContentLoaded:u}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:y}=h,m=(r,o)=>{let{id:s,component:i}=o;if(!i)throw new Error(`Unable to render story ${s} as the component annotation is missing from the default export`);let n=document.createElement(i);return Object.entries(r).forEach(([d,e])=>{n[d]=e}),n};function a({storyFn:r,kind:o,name:s,showMain:i,showError:n,forceRemount:d},e){let t=r();if(i(),O(t)){(d||!e.querySelector('[id="root-inner"]'))&&(e.innerHTML='<div id="root-inner"></div>');let f=e.querySelector('[id="root-inner"]');_(t,f),p(e)}else if(typeof t=="string")e.innerHTML=t,p(e);else if(t instanceof y){if(e.firstChild===t&&!d)return;e.innerHTML="",e.appendChild(t),u()}else n({title:`Expecting an HTML snippet or DOM node from the story: "${s}" of "${o}".`,description:l`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}export{a,m as r};
