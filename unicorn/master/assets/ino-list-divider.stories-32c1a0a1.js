import{x as r}from"./lit-html-b5e645d2.js";import{S as o}from"./StoryWrapper-674d0325.js";import"./elements-stencil-docs-09c5939d.js";const S={title:"Structure/ino-list-divider",component:"ino-list-divider",render:i=>r`
    <ino-list>
      <ino-list-item text="Item 2"></ino-list-item>
      <ino-list-divider
        inset="${i.inset}"
        between-lists="${i.betweenLists}"
        padded="${i.padded}"
      ></ino-list-divider>
      <ino-list-item text="Item 3"></ino-list-item>
    </ino-list>
  `,args:{inset:!1,betweenLists:!1,padded:!1,slot:!1}},t=o({...S}),e=o({...t,docsFromProperty:"padded",args:{padded:!0}}),n=o({...t,docsFromProperty:"inset",render:i=>r`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="${i.inset}"
        between-lists="${i.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,args:{inset:!0}}),s=o({...t,docsFromProperty:"betweenLists",render:i=>r`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="${i.inset}"
        between-lists="${i.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,args:{betweenLists:!0}});var d,a,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...InoListDividerMeta
})`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var c,m,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'padded',
  args: {
    padded: true
  }
})`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,v,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'inset',
  render: args => html\`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="\${args.inset}"
        between-lists="\${args.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  \`,
  args: {
    inset: true
  }
})`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var f,w,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'betweenLists',
  render: args => html\`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider
        inset="\${args.inset}"
        between-lists="\${args.betweenLists}"
      ></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  \`,
  args: {
    betweenLists: true
  }
})`,...(b=(w=s.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const $=["Default","Padded","Inset","BetweenLists"];export{s as BetweenLists,t as Default,n as Inset,e as Padded,$ as __namedExportsOrder,S as default};
