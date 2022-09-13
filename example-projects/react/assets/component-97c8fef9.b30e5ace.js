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
***************************************************************************** */var u=function(t,e){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(r[o]=n[o])},u(t,e)};function y(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");u(t,e);function r(){this.constructor=t}t.prototype=e===null?Object.create(e):(r.prototype=e.prototype,new r)}var f=function(){return f=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},f.apply(this,arguments)};function d(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i}function l(t,e,r){if(r||arguments.length===2)for(var n=0,o=e.length,i;n<o;n++)(i||!(n in e))&&(i||(i=Array.prototype.slice.call(e,0,n)),i[n]=e[n]);return t.concat(i||Array.prototype.slice.call(e))}/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var p=function(){function t(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(t,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.init=function(){},t.prototype.destroy=function(){},t}();/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var v=function(){function t(e,r){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];this.root=e,this.initialize.apply(this,l([],c(n))),this.foundation=r===void 0?this.getDefaultFoundation():r,this.foundation.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new p({}))},t.prototype.initialize=function(){},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation.destroy()},t.prototype.listen=function(e,r,n){this.root.addEventListener(e,r,n)},t.prototype.unlisten=function(e,r,n){this.root.removeEventListener(e,r,n)},t.prototype.emit=function(e,r,n){n===void 0&&(n=!1);var o;typeof CustomEvent=="function"?o=new CustomEvent(e,{bubbles:n,detail:r}):(o=document.createEvent("CustomEvent"),o.initCustomEvent(e,n,!1,r)),this.root.dispatchEvent(o)},t}();export{v as M,y as _,d as a,f as b,p as c,l as d,c as e};
