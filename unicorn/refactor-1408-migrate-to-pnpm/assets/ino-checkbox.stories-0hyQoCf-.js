import{b as F}from"./lit-html-odaN0r1L.js";import{S as o}from"./StoryWrapper-pH0BiVjf.js";import"./elements-stencil-docs-CC_eBxG8.js";const{useState:I}=__STORYBOOK_MODULE_PREVIEW_API__,$={title:"Input/ino-checkbox",component:"ino-checkbox",render:r=>{const[x,D]=I(r.checked);function _(C){D(C.detail)}return F`
      <ino-checkbox
        checked="${x}"
        disabled="${r.disabled}"
        indeterminate="${r.indeterminate}"
        name="${r.name}"
        selection="${r.selection}"
        value="${r.value}"
        @checkedChange="${_}"
      >
        Label
      </ino-checkbox>
    `},args:{checked:!0,disabled:!1,indeterminate:!1,name:"my-name",selection:!1,value:"my-value"}},e=o({...$}),t=o({...e,docsFromProperty:"checked",args:{checked:!0}}),a=o({...e,docsFromProperty:"selection",args:{selection:!0}}),c=o({...e,docsFromProperty:"indeterminate",args:{indeterminate:!0}}),s=o({...e,docsFromProperty:"disabled",args:{disabled:!0}});var n,d,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoCheckboxMeta
})`,...(i=(d=e.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,l,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,h,k;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selection',
  args: {
    selection: true
  }
})`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var b,y,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})`,...(S=(y=c.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var f,g,P;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(P=(g=s.parameters)==null?void 0:g.docs)==null?void 0:P.source}}};const M=["Default","Checked","Selection","Indeterminate","Disabled"];export{t as Checked,e as Default,s as Disabled,c as Indeterminate,a as Selection,M as __namedExportsOrder,$ as default};
