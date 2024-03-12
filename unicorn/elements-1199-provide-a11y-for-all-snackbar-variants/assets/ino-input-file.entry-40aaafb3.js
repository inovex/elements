import{r,c as o,h as n,H as s,g as l}from"./preview-64f27b03.js";import{c as a}from"./index-255d3c2f-5d974998.js";import"./iframe-9cc5b9d9.js";import"../sb-preview/runtime.js";import"./index-473285c6.js";import"./_commonjsHelpers-de833af9.js";import"./elements-stencil-docs-934b8e27.js";import"./index-c2e8a740.js";import"./index-d2c24ff6.js";import"./index-356e4a49.js";import"./jsx-runtime-bf40f363.js";import"./index-b8eed859.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const f="ino-input-file{--input-file-box-height:var(--ino-input-file-box-height, 300px);--input-file-box-width:var(--ino-input-file-box-width, 100%)}ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}ino-input-file .ino-input-file__dnd{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:white;border:2px dashed #3d40f5;border-radius:20px;height:var(--input-file-box-height);width:var(--input-file-box-width)}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-bottom:15px}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text label{color:#3d40f5;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1.25rem;font-weight:400}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-dragover:not(.ino-input-file__dnd-disabled){background-color:#f5f5ff}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled{background-color:#e7e7e7;border:2px solid #e7e7e7}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled label{color:#777777}",p=f,c=class{constructor(e){r(this,e),this.changeFile=o(this,"changeFile",7),this.eventListeners=[],this.accept=void 0,this.autoFocus=void 0,this.disabled=void 0,this.multiple=void 0,this.name=void 0,this.required=void 0,this.label="Select file",this.dragAndDrop=!1,this.dragAndDropText="Drag your files here",this.dragAndDropSecondaryText="or"}componentDidLoad(){this.configureDragAndDrop()}disconnectedCallback(){this.eventListeners.forEach(e=>this.removeEventListeners(this.el,e[0],e[1]))}addEventListeners(e,i,t){this.eventListeners.push([i,t]),i.split(" ").forEach(d=>{e.addEventListener(d,t)})}browserSupportsDragAndDrop(){return"draggable"in this.el||"ondragstart"in this.el&&"ondrop"in this.el&&"FormData"in window&&"FileReader"in window}configureDragAndDrop(){if(this.dragAndDrop&&this.browserSupportsDragAndDrop()){const e=this.el.querySelector(".ino-input-file__dnd");this.addEventListeners(this.el,"drag dragstart dragend dragover dragenter dragleave drop",i=>{i.preventDefault(),i.stopPropagation()}),this.addEventListeners(this.el,"dragover dragenter",()=>{e.classList.add("ino-input-file__dnd-dragover")}),this.addEventListeners(this.el,"dragend dragleave drop",()=>e.classList.remove("ino-input-file__dnd-dragover")),this.el.addEventListener("drop",i=>{if(this.disabled)return;const t=i.dataTransfer.files;if(!this.multiple){this.changeFile.emit({e:i,files:Array.from(t).slice(0,1)});return}this.changeFile.emit({e:i,files:Array.from(t)})})}}onFileChange(e){const t=e.target.files;this.changeFile.emit({e,files:Array.from(t)})}removeEventListeners(e,i,t){i.split(" ").forEach(d=>e.removeEventListener(d,t))}selectFiles(){this.el.querySelector(".ino-input-file__native-element").click()}render(){const e=a({"ino-input-file__composer":!this.dragAndDrop,"ino-input-file__dnd":this.dragAndDrop,"ino-input-file__dnd-disabled":this.dragAndDrop&&this.disabled});return n(s,{key:"d6218de2a6371bea481ddee802b3cc6c638521a6"},n("div",{key:"7898fb2215a4441065e055a080c4e40a4f3cc05f",class:e},this.dragAndDrop&&n("div",{class:"ino-input-file__dnd-text"},n("label",null,this.dragAndDropText),n("label",null,this.dragAndDropSecondaryText)),n("ino-button",{key:"ed358c3a6fff45b3361d14f859daf162646bfcc5",class:"ino-input-file__button",name:"file-paths",autoFocus:this.autoFocus,disabled:this.disabled,onClick:()=>this.selectFiles(),"icon-leading":!0},n("ino-icon",{key:"d0e822e8af4e90e4b50154c951d2ff40d1658a77",icon:"upload",slot:"icon-leading"}),this.label),n("input",{key:"d9ff1f978d562636846687ee5c2b3700fc356bfd",class:"ino-input-file__native-element",accept:this.accept,disabled:this.disabled,multiple:this.multiple,name:this.name,required:this.required,type:"file","aria-hidden":"true",onChange:i=>this.onFileChange(i)})))}get el(){return l(this)}};c.style=p;export{c as ino_input_file};
