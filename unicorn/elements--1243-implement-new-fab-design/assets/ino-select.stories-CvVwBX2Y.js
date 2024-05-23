import{x as u}from"./lit-html-D-ZEPr28.js";import{S as t}from"./StoryWrapper-CsUqRYgJ.js";import{s as U}from"./utils-ebStcoTl.js";import"./elements-stencil-docs-D2SOUcOF.js";const{useEffect:Y}=__STORYBOOK_MODULE_PREVIEW_API__,S=e=>{e.preventDefault(),U("Form submitted.")},g=e=>e.target.setAttribute("value",e.detail),h=u`
  <ino-option value="Option 1">Option 1</ino-option>
  <ino-option value="Option 2">Option 2</ino-option>
  <ino-option value="Option 3">Option 3</ino-option>
`,j={title:"Input/ino-select",component:"ino-select",parameters:{actions:{handles:["valueChange .customizable-select","submit .form"]}},decorators:[e=>(Y(()=>{const r=document.querySelector("form");r==null||r.addEventListener("submit",S);const b=document.querySelectorAll("ino-select");return b.forEach(m=>m.addEventListener("valueChange",g)),()=>{b.forEach(m=>m.removeEventListener("valueChange",g)),r==null||r.removeEventListener("submit",S)}},[]),e())],render:e=>u`
    <ino-select
      disabled="${e.disabled}"
      name="${e.name}"
      outline="${e.outline}"
      label="${e.label}"
      required="${e.required}"
      show-label-hint="${e.showLabelHint}"
      value="${e.value}"
      error="${e.error}"
      helper="${e.helper}"
      helper-persistent="${e.helperPersistent}"
      helper-validation="${e.helperValidation}"
    >
      <ino-option value="Option 1">Option 1</ino-option>
      <ino-option value="Option 2">Option 2</ino-option>
      <ino-option value="Option 3">Option 3</ino-option>
    </ino-select>
  `,args:{disabled:!1,label:"Select label",name:"select-1",outline:!1,required:!1,showLabelHint:!1,value:"Option 1",error:!1,helper:"",helperPersistent:!1,helperValidation:!1}},o=t({...j}),n=t({...o,docsFromProperty:"outline",args:{outline:!0}}),i=t({...o,docsFromProperty:"disabled",args:{disabled:!0}}),s=t({...o,docsFromProperty:"error",args:{error:!0}}),a=t({...o,docsFromProperty:"showLabelHint",args:{showLabelHint:!0}}),l=t({...o,docsFromProperty:"helper",args:{helper:"My Helper Message",helperPersistent:!0}}),c=t({...o,docsFromProperty:"helperValidation",args:{helperValidation:!0,value:void 0,required:!0,helper:"This message will be highlighted when no option has been selected",helperPersistent:!0}}),p=t({...o,docsFromProperty:"helperValidation",render:()=>u`
    <div style="height: 400px;">
      <ino-select label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        ${h}
      </ino-select>
      <ino-select style="margin-top: 150px;" outline label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        ${h}
      </ino-select>
    </div>
  `}),d=t({...o,render:()=>u`
    <form>
      <p>Form should not submit if no value is selected</p>
      <ino-select required> ${h} </ino-select>
      <ino-button type="submit">Submit</ino-button>
    </form>
  `});var v,y,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...InoSelectMeta
})`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var O,P,F;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'outline',
  args: {
    outline: true
  }
})`,...(F=(P=n.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var w,$,D;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(D=($=i.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var H,L,M;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'error',
  args: {
    error: true
  }
})`,...(M=(L=s.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,E,q;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'showLabelHint',
  args: {
    showLabelHint: true
  }
})`,...(q=(E=a.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var _,x,I;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'helper',
  args: {
    helper: 'My Helper Message',
    helperPersistent: true
  }
})`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var T,A,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'helperValidation',
  args: {
    helperValidation: true,
    value: undefined,
    required: true,
    helper: 'This message will be highlighted when no option has been selected',
    helperPersistent: true
  }
})`,...(C=(A=c.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var W,R,k;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'helperValidation',
  render: () => html\`
    <div style="height: 400px;">
      <ino-select label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        \${optionsTemplate}
      </ino-select>
      <ino-select style="margin-top: 150px;" outline label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>Selected Option</ino-option>
        \${optionsTemplate}
      </ino-select>
    </div>
  \`
})`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var z,B,K;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <form>
      <p>Form should not submit if no value is selected</p>
      <ino-select required> \${optionsTemplate} </ino-select>
      <ino-button type="submit">Submit</ino-button>
    </form>
  \`
})`,...(K=(B=d.parameters)==null?void 0:B.docs)==null?void 0:K.source}}};const X=["Default","Outline","Disabled","Error","ShowLabelHint","HelperMessage","HelperMessageValidation","WithIcon","Form"];export{o as Default,i as Disabled,s as Error,d as Form,l as HelperMessage,c as HelperMessageValidation,n as Outline,a as ShowLabelHint,p as WithIcon,X as __namedExportsOrder,j as default};
