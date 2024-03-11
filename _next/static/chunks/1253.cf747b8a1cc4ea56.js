"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1253],{37713:function(e,i,t){t.d(i,{c:function(){return r}});/*!
 * Crafted with ❤ by inovex GmbH
 */var n={exports:{}};!function(){var e={}.hasOwnProperty;function i(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var d=typeof r;if("string"===d||"number"===d)t.push(r);else if(Array.isArray(r)){if(r.length){var o=i.apply(null,r);o&&t.push(o)}}else if("object"===d){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var l in r)e.call(r,l)&&r[l]&&t.push(l)}}}return t.join(" ")}n.exports?(i.default=i,n.exports=i):window.classNames=i}();let r=n.exports},1253:function(e,i,t){t.r(i),t.d(i,{ino_input_file:function(){return d}});var n=t(68873),r=t(37713);let d=class{componentDidLoad(){this.configureDragAndDrop()}disconnectedCallback(){this.eventListeners.forEach(e=>this.removeEventListeners(this.el,e[0],e[1]))}addEventListeners(e,i,t){this.eventListeners.push([i,t]),i.split(" ").forEach(i=>{e.addEventListener(i,t)})}browserSupportsDragAndDrop(){return"draggable"in this.el||"ondragstart"in this.el&&"ondrop"in this.el&&"FormData"in window&&"FileReader"in window}configureDragAndDrop(){if(this.dragAndDrop&&this.browserSupportsDragAndDrop()){let e=this.el.querySelector(".ino-input-file__dnd");this.addEventListeners(this.el,"drag dragstart dragend dragover dragenter dragleave drop",e=>{e.preventDefault(),e.stopPropagation()}),this.addEventListeners(this.el,"dragover dragenter",()=>{e.classList.add("ino-input-file__dnd-dragover")}),this.addEventListeners(this.el,"dragend dragleave drop",()=>e.classList.remove("ino-input-file__dnd-dragover")),this.el.addEventListener("drop",e=>{if(this.disabled)return;let i=e.dataTransfer.files;if(!this.multiple){this.changeFile.emit({e,files:Array.from(i).slice(0,1)});return}this.changeFile.emit({e,files:Array.from(i)})})}}onFileChange(e){let i=e.target.files;this.changeFile.emit({e,files:Array.from(i)})}removeEventListeners(e,i,t){i.split(" ").forEach(i=>e.removeEventListener(i,t))}selectFiles(){this.el.querySelector(".ino-input-file__native-element").click()}render(){let e=(0,r.c)({"ino-input-file__composer":!this.dragAndDrop,"ino-input-file__dnd":this.dragAndDrop,"ino-input-file__dnd-disabled":this.dragAndDrop&&this.disabled});return(0,n.h)(n.H,{key:"d6218de2a6371bea481ddee802b3cc6c638521a6"},(0,n.h)("div",{key:"7898fb2215a4441065e055a080c4e40a4f3cc05f",class:e},this.dragAndDrop&&(0,n.h)("div",{class:"ino-input-file__dnd-text"},(0,n.h)("label",null,this.dragAndDropText),(0,n.h)("label",null,this.dragAndDropSecondaryText)),(0,n.h)("ino-button",{key:"ed358c3a6fff45b3361d14f859daf162646bfcc5",class:"ino-input-file__button",name:"file-paths",autoFocus:this.autoFocus,disabled:this.disabled,onClick:()=>this.selectFiles(),"icon-leading":!0},(0,n.h)("ino-icon",{key:"d0e822e8af4e90e4b50154c951d2ff40d1658a77",icon:"upload",slot:"icon-leading"}),this.label),(0,n.h)("input",{key:"d9ff1f978d562636846687ee5c2b3700fc356bfd",class:"ino-input-file__native-element",accept:this.accept,disabled:this.disabled,multiple:this.multiple,name:this.name,required:this.required,type:"file","aria-hidden":"true",onChange:e=>this.onFileChange(e)})))}get el(){return(0,n.g)(this)}constructor(e){(0,n.r)(this,e),this.changeFile=(0,n.c)(this,"changeFile",7),this.eventListeners=[],this.accept=void 0,this.autoFocus=void 0,this.disabled=void 0,this.multiple=void 0,this.name=void 0,this.required=void 0,this.label="Select file",this.dragAndDrop=!1,this.dragAndDropText="Drag your files here",this.dragAndDropSecondaryText="or"}};d.style="ino-input-file{--input-file-box-height:var(--ino-input-file-box-height, 300px);--input-file-box-width:var(--ino-input-file-box-width, 100%)}ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}ino-input-file .ino-input-file__dnd{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:white;border:2px dashed #3d40f5;border-radius:20px;height:var(--input-file-box-height);width:var(--input-file-box-width)}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-bottom:15px}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text label{color:#3d40f5;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1.25rem;font-weight:400}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-dragover:not(.ino-input-file__dnd-disabled){background-color:#f5f5ff}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled{background-color:#e7e7e7;border:2px solid #e7e7e7}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled label{color:#777777}"}}]);