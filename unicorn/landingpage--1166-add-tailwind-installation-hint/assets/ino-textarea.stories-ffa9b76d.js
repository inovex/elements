import{x as u}from"./lit-html-b5e645d2.js";import{S as a}from"./StoryWrapper-196bd329.js";import"./elements-stencil-docs-8a4f0020.js";const{useEffect:z}=__STORYBOOK_MODULE_PREVIEW_API__,I={title:"Input/ino-textarea",component:"ino-textarea",parameters:{actions:{handles:["input .customizable-textarea","valueChange .customizable-textarea"]}},decorators:[e=>(z(()=>{const d=t=>t.target.setAttribute("value",t.detail),m=document.querySelectorAll("ino-textarea");return m.forEach(t=>t.addEventListener("valueChange",d)),()=>m.forEach(t=>t.removeEventListener("valueChange",d))}),e())],render:e=>u`
    <ino-textarea
      class="customizable-textarea"
      cols="${e.cols}"
      rows="${e.rows}"
      label="${e.label}"
      outline="${e.outline}"
      minlength="${e.minlength}"
      disabled="${e.disabled}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      autogrow="${e.autogrow}"
    ></ino-textarea>
  `,args:{cols:60,rows:5,label:"Label",minlength:0,maxlength:30,disabled:!1,required:!1,outline:!0,showLabelHint:!1,autogrow:!1,showCharacterCounter:!1}},r=a({...I}),o=a({...r,docsFromProperty:"label",render:()=>u`
    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
    <ino-textarea
      label="Floating label"
      value="With value"
      cols="30"
      rows="3"
    ></ino-textarea>
  `}),n=a({...r,docsFromProperty:"disabled",args:{disabled:!0}}),s=a({...r,docsFromProperty:"required",args:{required:!0,label:"Label*"}}),l=a({...r,docsFromProperty:"outline",args:{outline:!0}}),i=a({...r,docsFromProperty:"showLabelHint",args:{showLabelHint:!0}}),c=a({...r,docsFromProperty:"showCharacterCounter",render:e=>u`
    <ino-textarea
      class="customizable-textarea"
      cols="${e.cols}"
      rows="${e.rows}"
      label="${e.label}"
      outline="${e.outline}"
      minlength="${e.minlength}"
      maxlength="${e.maxlength}"
      disabled="${e.disabled}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      autogrow="${e.autogrow}"
      show-character-counter="${e.showCharacterCounter}"
    ></ino-textarea>
  `,args:{showCharacterCounter:!0}});var h,b,p;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...InoTextareaMeta
})`,...(p=(b=r.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var w,g,x;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'label',
  render: () => html\`
    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
    <ino-textarea
      label="Floating label"
      value="With value"
      cols="30"
      rows="3"
    ></ino-textarea>
  \`
})`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var $,y,C;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(C=(y=n.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var f,S,L;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'required',
  args: {
    required: true,
    label: 'Label*'
  }
})`,...(L=(S=s.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var F,q,P;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'outline',
  args: {
    outline: true
  }
})`,...(P=(q=l.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var v,D,H;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'showLabelHint',
  args: {
    showLabelHint: true
  }
})`,...(H=(D=i.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var E,_,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'showCharacterCounter',
  render: args => html\`
    <ino-textarea
      class="customizable-textarea"
      cols="\${args.cols}"
      rows="\${args.rows}"
      label="\${args.label}"
      outline="\${args.outline}"
      minlength="\${args.minlength}"
      maxlength="\${args.maxlength}"
      disabled="\${args.disabled}"
      required="\${args.required}"
      show-label-hint="\${args.showLabelHint}"
      autogrow="\${args.autogrow}"
      show-character-counter="\${args.showCharacterCounter}"
    ></ino-textarea>
  \`,
  args: {
    showCharacterCounter: true
  }
})`,...(O=(_=c.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const M=["Default","Label","Disabled","Required","Outline","ShowLabelHint","CharacterCount"];export{c as CharacterCount,r as Default,n as Disabled,o as Label,l as Outline,s as Required,i as ShowLabelHint,M as __namedExportsOrder,I as default};
