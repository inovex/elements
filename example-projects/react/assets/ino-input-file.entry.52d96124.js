import{r as s,c as o,h as n,H as l,g as d}from"./index.6ba4a5a3.js";import{c as a}from"./index-796d4780.ad696562.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const p="ino-input-file{--input-file-box-height:var(--ino-input-file-box-height, 300px);--input-file-box-width:var(--ino-input-file-box-width, 100%)}ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}ino-input-file .ino-input-file__dnd{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:white;border:2px dashed #3d40f5;border-radius:20px;height:var(--input-file-box-height);width:var(--input-file-box-width)}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-bottom:15px}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text label{color:#3d40f5;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1.25rem;font-weight:400}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-dragover:not(.ino-input-file__dnd-disabled){background-color:#f5f5ff}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled{background-color:#e7e7e7;border:2px solid #e7e7e7}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled label{color:#777777}",h=class{constructor(i){s(this,i),this.changeFile=o(this,"changeFile",7),this.eventListeners=[],this.label="Select file",this.dragAndDrop=!1,this.dragAndDropText="Drag your files here",this.dragAndDropSecondaryText="or"}componentDidLoad(){this.configureDragAndDrop()}disconnectedCallback(){this.eventListeners.forEach(i=>this.removeEventListeners(this.el,i[0],i[1]))}addEventListeners(i,e,t){this.eventListeners.push([e,t]),e.split(" ").forEach(r=>{i.addEventListener(r,t)})}browserSupportsDragAndDrop(){return"draggable"in this.el||"ondragstart"in this.el&&"ondrop"in this.el&&"FormData"in window&&"FileReader"in window}configureDragAndDrop(){if(this.dragAndDrop&&this.browserSupportsDragAndDrop()){const i=this.el.querySelector(".ino-input-file__dnd");this.addEventListeners(this.el,"drag dragstart dragend dragover dragenter dragleave drop",e=>{e.preventDefault(),e.stopPropagation()}),this.addEventListeners(this.el,"dragover dragenter",()=>{i.classList.add("ino-input-file__dnd-dragover")}),this.addEventListeners(this.el,"dragend dragleave drop",()=>i.classList.remove("ino-input-file__dnd-dragover")),this.el.addEventListener("drop",e=>{if(this.disabled)return;const t=e.dataTransfer.files;if(!this.multiple){this.changeFile.emit({e,files:Array.from(t).slice(0,1)});return}this.changeFile.emit({e,files:Array.from(t)})})}}onFileChange(i){const t=i.target.files;this.changeFile.emit({e:i,files:Array.from(t)})}removeEventListeners(i,e,t){e.split(" ").forEach(r=>i.removeEventListener(r,t))}selectFiles(){this.el.querySelector(".ino-input-file__native-element").click()}render(){const i=a({"ino-input-file__composer":!this.dragAndDrop,"ino-input-file__dnd":this.dragAndDrop,"ino-input-file__dnd-disabled":this.dragAndDrop&&this.disabled});return n(l,null,n("div",{class:i},this.dragAndDrop&&n("div",{class:"ino-input-file__dnd-text"},n("label",null,this.dragAndDropText),n("label",null,this.dragAndDropSecondaryText)),n("ino-button",{class:"ino-input-file__button",name:"file-paths",autoFocus:this.autoFocus,disabled:this.disabled,onClick:()=>this.selectFiles(),"icon-leading":!0},n("ino-icon",{icon:"upload",slot:"icon-leading"}),this.label),n("input",{class:"ino-input-file__native-element",accept:this.accept,disabled:this.disabled,multiple:this.multiple,name:this.name,required:this.required,type:"file","aria-hidden":"true",onChange:e=>this.onFileChange(e)})))}get el(){return d(this)}};h.style=p;export{h as ino_input_file};
