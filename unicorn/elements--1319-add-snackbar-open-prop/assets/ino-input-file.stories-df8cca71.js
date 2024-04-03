import{x as V}from"./lit-html-f27292d4.js";import{S as o}from"./StoryWrapper-8a412985.js";import"./elements-stencil-docs-1854c044.js";const{useEffect:W}=__STORYBOOK_MODULE_PREVIEW_API__,Y={title:"Input/ino-input-file",component:"ino-input-file",decorators:[e=>(W(()=>{const g=function(i){if(i.stopImmediatePropagation(),i.target.tagName.toLowerCase()!=="ino-input-file")return;const U=i.detail.files.map(m=>[m.name,m.type,m.size+" bytes"].join(", ")).join(`
`);alert(U)};return document.addEventListener("changeFile",g),()=>document.removeEventListener("changeFile",g)}),e())],parameters:{actions:{handles:["changeFile .customizable-input"]}},render:e=>V`
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
  `,args:{accept:"",autoFocus:!1,disabled:!1,multiple:!1,required:!1,label:"Select a file to upload",dragAndDrop:!1,dragAndDropText:"Drag your files here",dragAndDropSecondaryText:"or"}},r=o({...Y}),a=o({...r,docsFromProperty:"accept",args:{accept:"png"}}),t=o({...r,docsFromProperty:"autoFocus",args:{autoFocus:!0}}),s=o({...r,docsFromProperty:"disabled",args:{disabled:!0}}),n=o({...r,docsFromProperty:"required",args:{required:!0}}),d=o({...r,docsFromProperty:"label",args:{label:"upload a file here"}}),c=o({...r,docsFromProperty:"multiple",args:{multiple:!0}}),p=o({...r,docsFromProperty:"dragAndDrop",args:{dragAndDrop:!0}}),u=o({...r,docsFromProperty:"dragAndDropText",args:{dragAndDrop:!0,dragAndDropText:"click and drag here"}}),l=o({...r,docsFromProperty:"dragAndDropSecondaryText",args:{dragAndDrop:!0,dragAndDropText:"click and drag here",dragAndDropSecondaryText:"or click the button below"}});var D,y,A;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`Story({
  ...InoInputFileMeta
})`,...(A=(y=r.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var f,F,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'accept',
  args: {
    accept: 'png'
  }
})`,...(S=(F=a.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var b,x,P;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'autoFocus',
  args: {
    autoFocus: true
  }
})`,...(P=(x=t.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var T,h,q;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(q=(h=s.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var _,$,I;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'required',
  args: {
    required: true
  }
})`,...(I=($=n.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var E,k,L;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'label',
  args: {
    label: 'upload a file here'
  }
})`,...(L=(k=d.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var M,O,v;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'multiple',
  args: {
    multiple: true
  }
})`,...(v=(O=c.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var R,w,z;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDrop',
  args: {
    dragAndDrop: true
  }
})`,...(z=(w=p.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var j,N,B;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDropText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here'
  }
})`,...(B=(N=u.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var C,H,K;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dragAndDropSecondaryText',
  args: {
    dragAndDrop: true,
    dragAndDropText: 'click and drag here',
    dragAndDropSecondaryText: 'or click the button below'
  }
})`,...(K=(H=l.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const Z=["Default","Accept","AutoFocus","Disabled","Required","Label","Multiple","DragAndDrop","DragAndDropText","DragAndDropSecondaryText"];export{a as Accept,t as AutoFocus,r as Default,s as Disabled,p as DragAndDrop,l as DragAndDropSecondaryText,u as DragAndDropText,d as Label,c as Multiple,n as Required,Z as __namedExportsOrder,Y as default};
