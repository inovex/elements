import{x as P}from"./lit-html-b5e645d2.js";import{S as t}from"./StoryWrapper-03bb9100.js";import"./elements-stencil-docs-98c6df11.js";const S={title:"Notification/ino-progress-bar",component:"ino-progress-bar",argTypes:{buffer:{control:{min:0,max:1,step:.1}},progress:{control:{min:0,max:1,step:.1}}},render:a=>P`
    <ino-progress-bar
      buffer="${a.buffer}"
      progress="${a.progress}"
      indeterminate="${a.indeterminate}"
    >
    </ino-progress-bar>
  `,args:{indeterminate:!1,buffer:.9,progress:.4}},r=t({...S}),e=t({...r,docsFromProperty:"progress",args:{progress:.5}}),o=t({...r,docsFromProperty:"buffer",args:{buffer:.5}}),s=t({...r,docsFromProperty:"indeterminate",args:{indeterminate:!0}});var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoProgressBarMeta
})`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,i,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'progress',
  args: {
    progress: 0.5
  }
})`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var f,u,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'buffer',
  args: {
    buffer: 0.5
  }
})`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var l,b,y;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const D=["Default","Progress","Buffer","Indeterminate"];export{o as Buffer,r as Default,s as Indeterminate,e as Progress,D as __namedExportsOrder,S as default};
