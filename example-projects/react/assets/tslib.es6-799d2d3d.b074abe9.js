/*!
 * Crafted with ❤ by inovex GmbH
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var i=function(r,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])},i(r,e)};function u(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(r,e);function n(){this.constructor=r}r.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var c=function(){return c=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++){n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)};function y(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(r);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(n[t[o]]=r[t[o]]);return n}function p(r){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&r[e],t=0;if(n)return n.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&t>=r.length&&(r=void 0),{value:r&&r[t++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(r,e){var n=typeof Symbol=="function"&&r[Symbol.iterator];if(!n)return r;var t=n.call(r),o,a=[],l;try{for(;(e===void 0||e-- >0)&&!(o=t.next()).done;)a.push(o.value)}catch(f){l={error:f}}finally{try{o&&!o.done&&(n=t.return)&&n.call(t)}finally{if(l)throw l.error}}return a}function _(r,e,n){if(n||arguments.length===2)for(var t=0,o=e.length,a;t<o;t++)(a||!(t in e))&&(a||(a=Array.prototype.slice.call(e,0,t)),a[t]=e[t]);return r.concat(a||Array.prototype.slice.call(e))}export{u as _,p as a,c as b,_ as c,s as d,y as e};
