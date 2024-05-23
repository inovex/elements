import{x as G}from"./lit-html-D-ZEPr28.js";import{S as o}from"./StoryWrapper-CsUqRYgJ.js";import"./elements-stencil-docs-D2SOUcOF.js";const{useEffect:J}=__STORYBOOK_MODULE_PREVIEW_API__,Q={title:"Input/ino-input-file",component:"ino-input-file",decorators:[e=>(J(()=>{const y=function(m){var f;m.stopImmediatePropagation();const g=m.target;if(g.tagName.toLowerCase()!=="ino-input-file")return;const Y=m.detail.files.map(a=>[a.name,a.type,a.size+" bytes"].join(", ")),D=document.createElement("div");D.classList.add("file-list"),Y.forEach(a=>{D.append(a,document.createElement("br"))}),(f=g.parentElement.querySelector(".file-list"))==null||f.remove(),g.parentElement.append(D)};return document.addEventListener("changeFile",y),()=>document.removeEventListener("changeFile",y)}),e())],parameters:{actions:{handles:["changeFile .customizable-input"]}},render:e=>G`
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
  `,args:{accept:"",autoFocus:!1,disabled:!1,multiple:!1,required:!1,label:"Select a file to upload",dragAndDrop:!1,dragAndDropText:"Drag your files here",dragAndDropSecondaryText:"or"}},r=o({...Q}),t=o({...r,docsFromProperty:"accept",args:{accept:"png"}}),n=o({...r,docsFromProperty:"autoFocus",args:{autoFocus:!0}}),s=o({...r,docsFromProperty:"disabled",args:{disabled:!0}}),d=o({...r,docsFromProperty:"required",args:{required:!0}}),c=o({...r,docsFromProperty:"label",args:{label:"upload a file here"}}),p=o({...r,docsFromProperty:"multiple",args:{multiple:!0}}),u=o({...r,docsFromProperty:"dragAndDrop",args:{dragAndDrop:!0}}),l=o({...r,docsFromProperty:"dragAndDropText",args:{dragAndDrop:!0,dragAndDropText:"click and drag here"}}),i=o({...r,docsFromProperty:"dragAndDropSecondaryText",args:{dragAndDrop:!0,dragAndDropText:"click and drag here",dragAndDropSecondaryText:"or click the button below"}});var A,S,F;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`Story({
  ...InoInputFileMeta
})`,...(F=(S=r.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var b,x,P;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'accept',
  args: {
    accept: 'png'
  }
})`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var T,h,E;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'autoFocus',
  args: {
    autoFocus: true
  }
})`,...(E=(h=n.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var q,_,$;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...($=(_=s.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var I,L,k;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'required',
  args: {
    required: true
  }
})`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var v,M,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'label',
  args: {
    label: 'upload a file here'
  }
})`,...(O=(M=c.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var R,w,z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'multiple',
  args: {
    multiple: true
  }
})`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var N,j,B;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDrop',
  args: {
    dragAndDrop: true
  }
})`,...(B=(j=u.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,H,K;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDropText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here'
  }
})`,...(K=(H=l.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var U,V,W;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDropSecondaryText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here',
    dragAndDropSecondaryText: 'or click the button below'
  }
})`,...(W=(V=i.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const er=["Default","Accept","AutoFocus","Disabled","Required","Label","Multiple","DragAndDrop","DragAndDropText","DragAndDropSecondaryText"];export{t as Accept,n as AutoFocus,r as Default,s as Disabled,u as DragAndDrop,i as DragAndDropSecondaryText,l as DragAndDropText,c as Label,p as Multiple,d as Required,er as __namedExportsOrder,Q as default};
