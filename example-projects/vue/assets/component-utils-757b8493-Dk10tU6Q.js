/*!
 * Crafted with ❤ by inovex GmbH
 */function o(){return"_"+Math.random().toString(36).substr(2,9)}function r(t,n){return t.querySelector(`[slot="${n}"]`)}function u(t,n){var e;return n?t.querySelectorAll(`[slot="${n}"]`).length>0:((e=t.querySelector("slot"))===null||e===void 0?void 0:e.assignedElements().length)===0}function a(t){var n;(n=t.querySelector("[data-ino-focus]"))===null||n===void 0||n.focus()}function s(t){t.stopPropagation(),t.preventDefault()}export{r as a,a as f,o as g,u as h,s as p};
