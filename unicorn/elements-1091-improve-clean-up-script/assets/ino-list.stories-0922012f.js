import{x as v}from"./lit-html-b5e645d2.js";import{S as s}from"./StoryWrapper-4497be18.js";import"./elements-stencil-docs-7426864f.js";const n=v`
  <ino-img
    slot="leading"
    src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
    ratio-width="1"
    ratio-height="1"
  ></ino-img>
`,f={title:"Structure/ino-list ",component:"ino-list",render:e=>v`
    <ino-list
      dense="${e.dense}"
      two-lines="${e.twoLines}"
      avatar="${e.avatar}"
    >
      <ino-list-item
        text="First text item"
        secondary-text="${e.twoLines?"Secondary Text":""}"
        >${e.avatar?n:""}</ino-list-item
      >
      <ino-list-item
        text="Second text item"
        secondary-text="${e.twoLines?"Secondary Text":""}"
        >${e.avatar?n:""}</ino-list-item
      >
      <ino-list-item
        text="Third text item"
        secondary-text="${e.twoLines?"Secondary Text":""}"
        >${e.avatar?n:""}</ino-list-item
      >
    </ino-list>
  `,args:{dense:!1,twoLines:!1,avatar:!1}},t=s({...f}),r=s({...t,docsFromProperty:"twoLines",args:{twoLines:!0}}),o=s({...t,docsFromProperty:"dense",args:{dense:!0}}),a=s({...t,docsFromProperty:"avatar",args:{avatar:!0}});var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`Story({
  ...InoListMeta
})`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'twoLines',
  args: {
    twoLines: true
  }
})`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,y,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true
  }
})`,...(x=(y=o.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,L,w;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'avatar',
  args: {
    avatar: true
  }
})`,...(w=(L=a.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const F=["Default","TwoLines","Dense","Avatar"];export{a as Avatar,t as Default,o as Dense,r as TwoLines,F as __namedExportsOrder,f as default};
