import{x as t}from"./lit-html-b5e645d2.js";import{S as n}from"./StoryWrapper-2689c8f0.js";import"./elements-stencil-docs-934b8e27.js";const D=t`<ino-icon icon="onboarding"></ino-icon>`,a={title:"Structure/ino-nav-item",component:"ino-nav-item",render:e=>t`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${e.text}"
        sub-text="${e.subText}"
        activated="${e.activated}"
        disabled="${e.disabled}"
      >
        ${D}
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Nav item",subText:"",activated:!1,disabled:!1}},s=n({...a}),i=n({...a,docsFromProperty:"text",render:e=>t`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="${e.text}">
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text"}}),r=n({...a,docsFromProperty:"subText",render:e=>t`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${e.text}"
        sub-text="${e.subText}"
      >
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",subText:"Secondary Text 2"}}),m=n({...a,docsFromProperty:"activated",render:e=>t`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${e.text}"
        activated="${e.activated}"
      >
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",activated:!0}}),c=n({...a,docsFromProperty:"disabled",render:e=>t`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${e.text}"
        disabled="${e.disabled}"
      >
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",disabled:!0}}),o=n({...a});var d,l,x;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...InoNavItemMeta
})`,...(x=(l=s.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var v,u,p;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'text',
  render: args => html\`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="\${args.text}">
      </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text'
  }
})`,...(p=(u=i.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,S,T;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'subText',
  render: args => html\`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="\${args.text}"
        sub-text="\${args.subText}"
      >
      </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text',
    subText: 'Secondary Text 2'
  }
})`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var g,y,$;m.parameters={...m.parameters,docs:{...(g=m.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'activated',
  render: args => html\`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="\${args.text}"
        activated="\${args.activated}"
      >
      </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text',
    activated: true
  }
})`,...($=(y=m.parameters)==null?void 0:y.docs)==null?void 0:$.source}}};var I,f,z;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'disabled',
  render: args => html\`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="\${args.text}"
        disabled="\${args.disabled}"
      >
      </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text',
    disabled: true
  }
})`,...(z=(f=c.parameters)==null?void 0:f.docs)==null?void 0:z.source}}};var h,F,N,P,M;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...InoNavItemMeta
})`,...(N=(F=o.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"Use an `ino-icon` element inside the default slot of an `ino-nav-item` to display an icon next to the text.",...(M=(P=o.parameters)==null?void 0:P.docs)==null?void 0:M.description}}};const L=["Default","Text","TwoLines","Activated","Disabled","Graphic"];export{m as Activated,s as Default,c as Disabled,o as Graphic,i as Text,r as TwoLines,L as __namedExportsOrder,a as default};
