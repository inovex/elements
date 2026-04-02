import{b as A}from"./lit-html-IUDnlW1J.js";import{S as o}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:S}=__STORYBOOK_MODULE_PREVIEW_API__,F={title:"Input/ino-input-file",component:"ino-input-file",decorators:[e=>(S(()=>{const y=function(m){m.stopImmediatePropagation();const g=m.target;if(g.tagName.toLowerCase()!=="ino-input-file")return;const f=m.detail.files.map(a=>[a.name,a.type,a.size+" bytes"].join(", ")),D=document.createElement("div");D.classList.add("file-list"),f.forEach(a=>{D.append(a,document.createElement("br"))}),g.parentElement.querySelector(".file-list")?.remove(),g.parentElement.append(D)};return document.addEventListener("changeFile",y),()=>document.removeEventListener("changeFile",y)}),e())],parameters:{actions:{handles:["changeFile .customizable-input"]}},render:e=>A`
    <ino-input-file
      class="customizable-input"
      accept="${e.accept}"
      autoFocus="${e.autoFocus}"
      disabled="${e.disabled}"
      multiple="${e.multiple}"
      required="${e.required}"
      label="${e.label}"
      drag-and-drop="${e.dragAndDrop}"
      drag-and-drop-text="${e.dragAndDropText}"
      drag-and-drop-secondary-text="${e.dragAndDropSecondaryText}"
    ></ino-input-file>
  `,args:{accept:"",autoFocus:!1,disabled:!1,multiple:!1,required:!1,label:"Select a file to upload",dragAndDrop:!1,dragAndDropText:"Drag your files here",dragAndDropSecondaryText:"or"}},r=o({...F}),t=o({...r,docsFromProperty:"accept",args:{accept:"png"}}),n=o({...r,docsFromProperty:"autoFocus",args:{autoFocus:!0}}),s=o({...r,docsFromProperty:"disabled",args:{disabled:!0}}),d=o({...r,docsFromProperty:"required",args:{required:!0}}),c=o({...r,docsFromProperty:"label",args:{label:"upload a file here"}}),p=o({...r,docsFromProperty:"multiple",args:{multiple:!0}}),u=o({...r,docsFromProperty:"dragAndDrop",args:{dragAndDrop:!0}}),l=o({...r,docsFromProperty:"dragAndDropText",args:{dragAndDrop:!0,dragAndDropText:"click and drag here"}}),i=o({...r,docsFromProperty:"dragAndDropSecondaryText",args:{dragAndDrop:!0,dragAndDropText:"click and drag here",dragAndDropSecondaryText:"or click the button below"}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoInputFileMeta
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'accept',
  args: {
    accept: 'png'
  }
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'autoFocus',
  args: {
    autoFocus: true
  }
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'required',
  args: {
    required: true
  }
})`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'label',
  args: {
    label: 'upload a file here'
  }
})`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'multiple',
  args: {
    multiple: true
  }
})`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDrop',
  args: {
    dragAndDrop: true
  }
})`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDropText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here'
  }
})`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDropSecondaryText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here',
    dragAndDropSecondaryText: 'or click the button below'
  }
})`,...i.parameters?.docs?.source}}};const T=["Default","Accept","AutoFocus","Disabled","Required","Label","Multiple","DragAndDrop","DragAndDropText","DragAndDropSecondaryText"];export{t as Accept,n as AutoFocus,r as Default,s as Disabled,u as DragAndDrop,i as DragAndDropSecondaryText,l as DragAndDropText,c as Label,p as Multiple,d as Required,T as __namedExportsOrder,F as default};
