(self["webpackChunkelements_vue_example"]=self["webpackChunkelements_vue_example"]||[]).push([[6993],{4173:function(e,i,n){var t=n(3103),r=n(9859);t({global:!0,forced:r.globalThis!==r},{globalThis:r})},1231:function(e,i,n){"use strict";n.d(i,{a:function(){return t},c:function(){return o},g:function(){return r}});n(4173),n(1372);var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{};function r(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e["default"]:e}function o(e,i,n){return n={path:i,exports:{},require:function(e,i){return l()}},e(n,n.exports),n.exports}function l(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}},9776:function(e,i,n){"use strict";n.d(i,{c:function(){return o}});var t=n(6632),r=(n(6728),n(8188),n(8233),n(9529),n(1235),n(6781),n(1231)),o=(0,r.c)((function(e){
/*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
(function(){var i={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var l=(0,t.Z)(o);if("string"===l||"number"===l)e.push(o);else if(Array.isArray(o)){if(o.length){var a=n.apply(null,o);a&&e.push(a)}}else if("object"===l){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){e.push(o.toString());continue}for(var d in o)i.call(o,d)&&o[d]&&e.push(d)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}))},6993:function(e,i,n){"use strict";n.r(i),n.d(i,{ino_input_file:function(){return d}});var t=n(4567),r=n(6812),o=(n(8188),n(1939),n(6728),n(2501),n(7233),n(8673),n(6936),n(1297)),l=n(9776),a=(n(1231),"ino-input-file{--input-file-box-height:var(--ino-input-file-box-height, 300px);--input-file-box-width:var(--ino-input-file-box-width, 100%)}ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}ino-input-file .ino-input-file__dnd{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:white;border:2px dashed #3d40f5;border-radius:20px;height:var(--input-file-box-height);width:var(--input-file-box-width)}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-bottom:15px}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text label{color:#3d40f5;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1.25rem;font-weight:400}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-dragover:not(.ino-input-file__dnd-disabled){background-color:#f5f5ff}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled{background-color:#e7e7e7;border:2px solid #e7e7e7}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled label{color:#777777}"),d=function(){function e(i){(0,t.Z)(this,e),(0,o.r)(this,i),this.changeFile=(0,o.c)(this,"changeFile",7),this.eventListeners=[],this.label="Select file",this.dragAndDrop=!1,this.dragAndDropText="Drag your files here",this.dragAndDropSecondaryText="or"}return(0,r.Z)(e,[{key:"componentDidLoad",value:function(){this.configureDragAndDrop()}},{key:"disconnectedCallback",value:function(){var e=this;this.eventListeners.forEach((function(i){return e.removeEventListeners(e.el,i[0],i[1])}))}},{key:"addEventListeners",value:function(e,i,n){this.eventListeners.push([i,n]),i.split(" ").forEach((function(i){e.addEventListener(i,n)}))}},{key:"browserSupportsDragAndDrop",value:function(){return"draggable"in this.el||"ondragstart"in this.el&&"ondrop"in this.el&&"FormData"in window&&"FileReader"in window}},{key:"configureDragAndDrop",value:function(){var e=this;if(this.dragAndDrop&&this.browserSupportsDragAndDrop()){var i=this.el.querySelector(".ino-input-file__dnd");this.addEventListeners(this.el,"drag dragstart dragend dragover dragenter dragleave drop",(function(e){e.preventDefault(),e.stopPropagation()})),this.addEventListeners(this.el,"dragover dragenter",(function(){i.classList.add("ino-input-file__dnd-dragover")})),this.addEventListeners(this.el,"dragend dragleave drop",(function(){return i.classList.remove("ino-input-file__dnd-dragover")})),this.el.addEventListener("drop",(function(i){if(!e.disabled){var n=i.dataTransfer.files;e.multiple?e.changeFile.emit({e:i,files:Array.from(n)}):e.changeFile.emit({e:i,files:Array.from(n).slice(0,1)})}}))}}},{key:"onFileChange",value:function(e){var i=e.target,n=i.files;this.changeFile.emit({e:e,files:Array.from(n)})}},{key:"removeEventListeners",value:function(e,i,n){i.split(" ").forEach((function(i){return e.removeEventListener(i,n)}))}},{key:"selectFiles",value:function(){var e=this.el.querySelector(".ino-input-file__native-element");e.click()}},{key:"render",value:function(){var e=this,i=(0,l.c)({"ino-input-file__composer":!this.dragAndDrop,"ino-input-file__dnd":this.dragAndDrop,"ino-input-file__dnd-disabled":this.dragAndDrop&&this.disabled});return(0,o.h)(o.H,null,(0,o.h)("div",{class:i},this.dragAndDrop&&(0,o.h)("div",{class:"ino-input-file__dnd-text"},(0,o.h)("label",null,this.dragAndDropText),(0,o.h)("label",null,this.dragAndDropSecondaryText)),(0,o.h)("ino-button",{class:"ino-input-file__button",name:"file-paths",autoFocus:this.autoFocus,disabled:this.disabled,onClick:function(){return e.selectFiles()},"icon-leading":!0},(0,o.h)("ino-icon",{icon:"upload",slot:"icon-leading"}),this.label),(0,o.h)("input",{class:"ino-input-file__native-element",accept:this.accept,disabled:this.disabled,multiple:this.multiple,name:this.name,required:this.required,type:"file","aria-hidden":"true",onChange:function(i){return e.onFileChange(i)}})))}},{key:"el",get:function(){return(0,o.g)(this)}}]),e}();d.style=a}}]);
//# sourceMappingURL=6993-legacy.f1bedb8a.js.map