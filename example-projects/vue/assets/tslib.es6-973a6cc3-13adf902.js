/*!
 * Crafted with ❤ by inovex GmbH
 */var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},i(t,e)};function f(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");i(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var c=function(){return c=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)};function p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function s(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,a=[],l;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(u){l={error:u}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(l)throw l.error}}return a}function _(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,a;r<o;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}export{p as _,f as a,c as b,s as c,_ as d,y as e};
