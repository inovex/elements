"use strict";(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[6927],{1231:function(n,i,e){e.d(i,{a:function(){return o},c:function(){return t},g:function(){return r}});
/*!
 * Crafted with ❤ by inovex GmbH
 */
var o="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e.g?e.g:"undefined"!==typeof self?self:{};function r(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n["default"]:n}function t(n,i,e){return e={path:i,exports:{},require:function(n,i){return s()}},n(e,e.exports),e.exports}function s(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},3257:function(n,i,e){
/*!
 * Crafted with ❤ by inovex GmbH
 */
function o(){return"_"+Math.random().toString(36).substr(2,9)}function r(n,i){return n.querySelector(`[slot="${i}"]`)}function t(n,i){var e;return i?n.querySelectorAll(`[slot="${i}"]`).length>0:0===(null===(e=n.querySelector("slot"))||void 0===e?void 0:e.assignedElements().length)}function s(n){var i;null===(i=n.querySelector("[data-ino-focus]"))||void 0===i||i.focus()}function p(n){n.stopPropagation(),n.preventDefault()}e.d(i,{a:function(){return r},f:function(){return s},g:function(){return o},h:function(){return t},p:function(){return p}})},9776:function(n,i,e){e.d(i,{c:function(){return r}});e(6728);var o=e(1231),r=(0,o.c)((function(n){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var i={}.hasOwnProperty;function e(){for(var n=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var t=typeof r;if("string"===t||"number"===t)n.push(r);else if(Array.isArray(r)){if(r.length){var s=e.apply(null,r);s&&n.push(s)}}else if("object"===t){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){n.push(r.toString());continue}for(var p in r)i.call(r,p)&&r[p]&&n.push(p)}}}return n.join(" ")}n.exports?(e.default=e,n.exports=e):window.classNames=e})()}))},6927:function(n,i,e){e.r(i),e.d(i,{ino_button:function(){return p},ino_spinner:function(){return a}});var o=e(2021),r=e(9776),t=e(3257);e(1231);
/*!
 * Crafted with ❤ by inovex GmbH
 */
const s='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}ino-button .button{display:flex;flex-direction:row;justify-content:center;align-items:center;column-gap:8px;padding:8px 16px;min-height:36px;line-break:auto;line-height:100%;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:700;cursor:pointer}ino-button .button.button--dense{padding:6px 16px;min-height:32px}ino-button .button.button__icon--leading{padding-left:8px}ino-button .button.button__icon--trailing{padding-right:8px}ino-button .icon__wrapper{height:16px}ino-button .button__label--hide{display:none}ino-button .button__variant--filled{background-color:#2c02ff;border-color:transparent;color:white;text-align:center;border-radius:24px 0 24px 24px;animation:border-round-to-edged 0.15s}@keyframes border-round-to-edged{from{border-radius:24px 24px 24px 24px}to{border-radius:24px 0 24px 24px}}ino-button .button__variant--filled:hover{background-color:#4B4EFF;box-shadow:0 2px 2px #2d5dff4d;border-radius:24px 24px 24px 24px;animation:border-edged-to-round 0.15s}@keyframes border-edged-to-round{from{border-radius:24px 0 24px 24px}to{border-radius:24px 24px 24px 24px}}ino-button .button__variant--filled:focus{background-color:#3D40F5;box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--filled:active{background-color:#3D40F5;box-shadow:none}ino-button .button__variant--filled:disabled{pointer-events:none;color:#7275a1;background-color:#edeff5}ino-button .button__variant--filled .icon__wrapper{--ino-icon-color-primary:$white}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#ffffff}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--filled ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#ffffff}ino-button .button__variant--outlined{background-color:rgba(255, 255, 255, 0);border:solid 1.5px #3D40F5;border-radius:19px;color:#2c02ff;letter-spacing:0.27px}ino-button .button__variant--outlined:hover{background-color:#E8EDFF}ino-button .button__variant--outlined:focus{box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--outlined:active{background-color:#D7E0FF;border-color:#3D40F5;box-shadow:none}ino-button .button__variant--outlined:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff;border-color:#7275a1}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--outlined ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text{background-color:transparent;border:3px transparent;color:#2c02ff;border-radius:19px}ino-button .button__variant--text:hover{background-color:#E8EDFF;border-color:transparent}ino-button .button__variant--text:focus{border:none;box-shadow:0 0 0 3px #2d5dff4d}ino-button .button__variant--text:active{background-color:#D7E0FF;box-shadow:none}ino-button .button__variant--text:disabled{pointer-events:none;color:#7275a1;background-color:#ffffff}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-button .button__variant--text ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#2c02ff}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-button .button__variant--text ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#2c02ff}ino-button.ino-button--loading{pointer-events:none}',p=class{constructor(n){(0,o.r)(this,n),this.type="button",this.variant="filled",this.dense=!1,this.buttonSizeBeforeLoad=null,this.buttonHeightBeforeLoad=null,this.handleClick=n=>{this.disabled&&(n.preventDefault(),n.stopPropagation());const i=this.el.closest("form");if(i){n.preventDefault();const e=document.createElement("button");e.type=this.type,e.style.display="none",e.name="fake-button",i.appendChild(e),e.click(),e.remove()}}}loadingChanged(n){if(n){const n=window.getComputedStyle(this.buttonEl);this.buttonSizeBeforeLoad=n.width,this.buttonHeightBeforeLoad=n.height}else this.buttonSizeBeforeLoad=null}componentDidUpdate(){this.loading&&this.buttonSizeBeforeLoad&&(this.buttonEl.style.setProperty("width",this.buttonSizeBeforeLoad),this.buttonEl.style.setProperty("height",this.buttonHeightBeforeLoad))}render(){const n=(0,r.c)({"ino-button--loading":this.loading}),i=(0,t.h)(this.el,"icon-leading"),e=(0,t.h)(this.el,"icon-trailing"),s=(0,r.c)("button",`button__variant--${this.variant}`,{"button__icon--leading":i,"button__icon--trailing":e,"button--dense":this.dense}),p=(0,r.c)("button__label",{"button__label--hide":this.loading});return(0,o.h)(o.H,{class:n,onClick:this.handleClick},(0,o.h)("button",{class:s,autoFocus:this.autoFocus,disabled:this.disabled,name:this.name,type:this.type,form:this.form,ref:n=>this.buttonEl=n},i&&(0,o.h)("span",{class:"icon__wrapper"},(0,o.h)("slot",{name:"icon-leading"})),(0,o.h)("span",{class:p},(0,o.h)("slot",null)),this.loading&&(0,o.h)("ino-spinner",{height:20,width:20,type:"circle"}),e&&(0,o.h)("span",{class:"icon__wrapper"},(0,o.h)("slot",{name:"icon-trailing"}))))}get el(){return(0,o.g)(this)}static get watchers(){return{loading:["loadingChanged"]}}};p.style=s;const c='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}',a=class{constructor(n){(0,o.r)(this,n),this.type="tile",this.modal=!1,this.height=40,this.width=40}tileTemplate(){return[(0,o.h)("div",{class:"ino-spinner__rect1"}),(0,o.h)("div",{class:"ino-spinner__rect2"}),(0,o.h)("div",{class:"ino-spinner__rect3"}),(0,o.h)("div",{class:"ino-spinner__rect4"}),(0,o.h)("div",{class:"ino-spinner__rect5"})]}bounceTemplate(){return[(0,o.h)("div",{class:"ino-spinner__double-bounce-1"}),(0,o.h)("div",{class:"ino-spinner__double-bounce-2"})]}circleTemplate(){return[(0,o.h)("div",{class:"ino-spinner__circle-1"}),(0,o.h)("div",{class:"ino-spinner__circle-2"}),(0,o.h)("div",{class:"ino-spinner__circle-3"}),(0,o.h)("div",{class:"ino-spinner__circle-4"}),(0,o.h)("div",{class:"ino-spinner__circle-5"}),(0,o.h)("div",{class:"ino-spinner__circle-6"}),(0,o.h)("div",{class:"ino-spinner__circle-7"}),(0,o.h)("div",{class:"ino-spinner__circle-8"}),(0,o.h)("div",{class:"ino-spinner__circle-9"}),(0,o.h)("div",{class:"ino-spinner__circle-10"}),(0,o.h)("div",{class:"ino-spinner__circle-11"}),(0,o.h)("div",{class:"ino-spinner__circle-12"})]}render(){const n=(0,r.c)(`ino-spinner--type-${this.type}`,{"ino-spinner--modal":this.modal});let i;return"tile"===this.type?i=this.tileTemplate():"bounce"===this.type?i=this.bounceTemplate():"circle"===this.type&&(i=this.circleTemplate()),(0,o.h)(o.H,{class:n},(0,o.h)("div",{class:"ino-spinner__composer",style:{width:`${this.width}px`,height:`${this.height}px`}},i))}};a.style=c}}]);
//# sourceMappingURL=6927.c9c42b7e.js.map