(self.webpackChunkelements_angular_example=self.webpackChunkelements_angular_example||[]).push([[2225],{5526:(n,i,e)=>{"use strict";e.d(i,{a:()=>o,c:()=>s,g:()=>r});var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function s(n,i,e){return n(e={path:i,exports:{},require:function(n,i){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},e.exports),e.exports}},2146:(n,i,e)=>{"use strict";e.d(i,{c:()=>o});var o=(0,e(5526).c)(function(n){!function(){var i={}.hasOwnProperty;function e(){for(var n=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var s=typeof r;if("string"===s||"number"===s)n.push(r);else if(Array.isArray(r)){if(r.length){var p=e.apply(null,r);p&&n.push(p)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){n.push(r.toString());continue}for(var c in r)i.call(r,c)&&r[c]&&n.push(c)}}}return n.join(" ")}n.exports?(e.default=e,n.exports=e):window.classNames=e}()})},2225:(n,i,e)=>{"use strict";e.r(i),e.d(i,{ino_spinner:()=>s});var o=e(1221),r=e(2146);e(5526);const s=class{constructor(n){(0,o.r)(this,n),this.type="tile",this.modal=!1,this.height=40,this.width=40}tileTemplate(){return[(0,o.h)("div",{class:"ino-spinner__rect1"}),(0,o.h)("div",{class:"ino-spinner__rect2"}),(0,o.h)("div",{class:"ino-spinner__rect3"}),(0,o.h)("div",{class:"ino-spinner__rect4"}),(0,o.h)("div",{class:"ino-spinner__rect5"})]}bounceTemplate(){return[(0,o.h)("div",{class:"ino-spinner__double-bounce-1"}),(0,o.h)("div",{class:"ino-spinner__double-bounce-2"})]}circleTemplate(){return[(0,o.h)("div",{class:"ino-spinner__circle-1"}),(0,o.h)("div",{class:"ino-spinner__circle-2"}),(0,o.h)("div",{class:"ino-spinner__circle-3"}),(0,o.h)("div",{class:"ino-spinner__circle-4"}),(0,o.h)("div",{class:"ino-spinner__circle-5"}),(0,o.h)("div",{class:"ino-spinner__circle-6"}),(0,o.h)("div",{class:"ino-spinner__circle-7"}),(0,o.h)("div",{class:"ino-spinner__circle-8"}),(0,o.h)("div",{class:"ino-spinner__circle-9"}),(0,o.h)("div",{class:"ino-spinner__circle-10"}),(0,o.h)("div",{class:"ino-spinner__circle-11"}),(0,o.h)("div",{class:"ino-spinner__circle-12"})]}render(){const n=(0,r.c)(`ino-spinner--type-${this.type}`,{"ino-spinner--modal":this.modal});let i;return"tile"===this.type?i=this.tileTemplate():"bounce"===this.type?i=this.bounceTemplate():"circle"===this.type&&(i=this.circleTemplate()),(0,o.h)(o.H,{class:n},(0,o.h)("div",{class:"ino-spinner__composer",style:{width:`${this.width}px`,height:`${this.height}px`}},i))}};s.style='ino-spinner .ino-spinner__composer{font-size:10px;display:inline-block;position:relative}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div{display:inline-block;height:100%;box-sizing:border-box;width:20%;padding:1px;animation:sk-stretchdelay 1.2s infinite ease-in-out}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{content:"";display:block;height:100%;width:100%}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect2{animation-delay:-1.1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect3{animation-delay:-1s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect4{animation-delay:-0.9s}ino-spinner.ino-spinner--type-tile .ino-spinner__composer .ino-spinner__rect5{animation-delay:-0.8s}@keyframes sk-stretchdelay{0%,40%,100%{transform:scaleY(0.4)}20%{transform:scaleY(1)}}ino-spinner.ino-spinner--type-tile .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-1,ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{width:100%;height:100%;border-radius:50%;opacity:0.65;position:absolute;top:0;left:0;animation:sk-bounce 2s infinite ease-in-out}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer .ino-spinner__double-bounce-2{animation-delay:-1s}@keyframes sk-bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}ino-spinner.ino-spinner--type-bounce .ino-spinner__composer>div{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div{width:100%;height:100%;position:absolute;left:0;top:0;background:none}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{content:"";display:block;margin:0 auto;width:15%;height:15%;border-radius:100%;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2{transform:rotate(30deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3{transform:rotate(60deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4{transform:rotate(90deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5{transform:rotate(120deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6{transform:rotate(150deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7{transform:rotate(180deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8{transform:rotate(210deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9{transform:rotate(240deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10{transform:rotate(270deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11{transform:rotate(300deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12{transform:rotate(330deg)}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-2:before{animation-delay:-1.1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-3:before{animation-delay:-1s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-4:before{animation-delay:-0.9s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-5:before{animation-delay:-0.8s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-6:before{animation-delay:-0.7s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-7:before{animation-delay:-0.6s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-8:before{animation-delay:-0.5s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-9:before{animation-delay:-0.4s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-10:before{animation-delay:-0.3s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-11:before{animation-delay:-0.2s}ino-spinner.ino-spinner--type-circle .ino-spinner__composer .ino-spinner__circle-12:before{animation-delay:-0.1s}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}ino-spinner.ino-spinner--type-circle .ino-spinner__composer>div:before{background-color:#3d40f5}ino-spinner.ino-spinner--modal{position:fixed;z-index:9999;left:0;top:0;width:100%;height:100%;background:rgba(255, 255, 255, 0.95)}ino-spinner.ino-spinner--modal .ino-spinner__composer{top:50%;left:50%;transform:translate(-50%, -50%)}'}}]);