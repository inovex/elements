import{b as k}from"./lit-html-odaN0r1L.js";import{S as r}from"./StoryWrapper-CB660Xf5.js";import"./elements-stencil-docs-CE9fhhj4.js";const q={title:"Buttons/ino-button",component:"ino-button",parameters:{docs:{source:{format:"html"}}},render:n=>k`
    <ino-button variant="${n.variant}" disabled="${n.disabled}" dense="${n.dense}" loading="${n.loading}">
      Label
    </ino-button>
  `,args:{variant:"filled",dense:!1,disabled:!1,loading:!1}},o=r({...q}),a=r({...o,docsFromProperty:"variant",args:{variant:"filled"}}),t=r({...o,docsFromProperty:"variant",args:{variant:"outlined"}}),s=r({...o,docsFromProperty:"variant",args:{variant:"text"}}),i=r({...o,docsFromProperty:"disabled",args:{disabled:!0}}),c=r({...o,docsFromProperty:"dense",args:{dense:!0}}),d=r({...o,docsFromProperty:"loading",args:{loading:!0}}),e=r({...o,render:()=>k`
    <ino-button>
      <ino-icon icon="info" slot="icon-leading"></ino-icon>
      Label
    </ino-button>
    <ino-button>
      <ino-icon icon="info" slot="icon-trailing"></ino-icon>
      Label
    </ino-button>
  `});var l,u,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...InoButtonMeta
})`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'filled'
  }
})`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'outlined'
  }
})`,...(S=(y=t.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,F,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'text'
  }
})`,...(D=(F=s.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var P,L,x;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(x=(L=i.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var I,T,$;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true
  }
})`,...($=(T=c.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var h,B,O;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'loading',
  args: {
    loading: true
  }
})`,...(O=(B=d.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var A,M,_,E,j;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-button>
      <ino-icon icon="info" slot="icon-leading"></ino-icon>
      Label
    </ino-button>
    <ino-button>
      <ino-icon icon="info" slot="icon-trailing"></ino-icon>
      Label
    </ino-button>
  \`
})`,...(_=(M=e.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"In order to include icons, use the `icon-leading` or `icon-trailing` slot",...(j=(E=e.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};const G=["Default","Filled","Outlined","Text","Disabled","Dense","Loading","LeadingAndTrailingIcon"];export{o as Default,c as Dense,i as Disabled,a as Filled,e as LeadingAndTrailingIcon,d as Loading,t as Outlined,s as Text,G as __namedExportsOrder,q as default};
