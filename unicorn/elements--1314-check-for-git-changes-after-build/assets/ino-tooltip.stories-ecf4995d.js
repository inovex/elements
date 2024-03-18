import{x as I}from"./lit-html-b5e645d2.js";import{S as e}from"./StoryWrapper-41a1a2f3.js";import"./elements-stencil-docs-f18a91eb.js";const M={title:"Notification/ino-tooltip",component:"ino-tooltip",argTypes:{for:{type:"string"},placement:{control:{type:"select"},options:["top","right","bottom","left"]},trigger:{control:{type:"select"},options:["mouseenter","focus","click","mouseenter focus","mouseenter click","focus click","mouseenter focus click"]},colorScheme:{control:{type:"select"},options:["light","dark","primary"]},delay:{control:{type:"object"}},message:{control:"string"}},render:r=>I`
    <ino-button id="${r.for}">Trigger Element</ino-button>
    <ino-tooltip
      header-text="${r.headerText}"
      for="${r.for}"
      placement="${r.placement}"
      trigger="${r.trigger}"
      color-scheme="${r.colorScheme}"
      delay=${typeof r.delay=="number"?r.delay:[r.delay]}
      arrow="${r.arrow}"
      >This is a tooltip</ino-tooltip
    >
  `,args:{headerText:"",for:"tooltip-target",placement:"top",trigger:"mouseenter focus",colorScheme:"primary",delay:0,message:"",arrow:!1}},o=e({...M}),t=e({...o,docsFromProperty:"headerText",args:{headerText:"HeaderText",for:"tooltip-target-header"}}),a=e({...o,docsFromProperty:"placement",args:{placement:"right",for:"tooltip-target-placement"}}),n=e({...o,docsFromProperty:"arrow",args:{arrow:!0,for:"tooltip-target-arrow"}}),i=e({...o,docsFromProperty:"trigger",args:{trigger:"click",for:"tooltip-target-trigger"}}),l=e({...o,render:r=>{const s="tooltip-light",p="tooltip-dark",d="tooltip-primary";return I`
      <ino-button id="${s}">Light</ino-button>
      <ino-tooltip
        color-scheme="light"
        for="${s}"
        placement="${r.placement}"
        trigger="${r.trigger}"
        delay=${typeof r.delay=="number"?r.delay:[r.delay]}
        arrow="${r.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
      <ino-button id="${p}">Dark</ino-button>
      <ino-tooltip
        color-scheme="dark"
        for="${p}"
        placement="${r.placement}"
        trigger="${r.trigger}"
        delay=${typeof r.delay=="number"?r.delay:[r.delay]}
        arrow="${r.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
      <ino-button id="${d}">Primary</ino-button>
      <ino-tooltip
        color-scheme="primary"
        for="${d}"
        placement="${r.placement}"
        trigger="${r.trigger}"
        delay=${typeof r.delay=="number"?r.delay:[r.delay]}
        arrow="${r.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
    `}}),c=e({...o,docsFromProperty:"delay",args:{delay:[500,200],for:"tooltip-target-delay"}});var m,g,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...InoTooltipMeta
})`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var u,f,$;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'headerText',
  args: {
    headerText: 'HeaderText',
    for: 'tooltip-target-header'
  }
})`,...($=(f=t.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var h,T,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'right',
    for: 'tooltip-target-placement'
  }
})`,...(b=(T=a.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var w,S,P;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'arrow',
  args: {
    arrow: true,
    for: 'tooltip-target-arrow'
  }
})`,...(P=(S=n.parameters)==null?void 0:S.docs)==null?void 0:P.source}}};var k,x,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'trigger',
  args: {
    trigger: 'click',
    for: 'tooltip-target-trigger'
  }
})`,...(D=(x=i.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var F,L,H;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`Story({
  ...Default,
  render: args => {
    const idLight = 'tooltip-light';
    const idDark = 'tooltip-dark';
    const idPrimary = 'tooltip-primary';
    return html\`
      <ino-button id="\${idLight}">Light</ino-button>
      <ino-tooltip
        color-scheme="light"
        for="\${idLight}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
      <ino-button id="\${idDark}">Dark</ino-button>
      <ino-tooltip
        color-scheme="dark"
        for="\${idDark}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
      <ino-button id="\${idPrimary}">Primary</ino-button>
      <ino-tooltip
        color-scheme="primary"
        for="\${idPrimary}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
    \`;
  }
})`,...(H=(L=l.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var A,C,E;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'delay',
  args: {
    delay: [500, 200],
    for: 'tooltip-target-delay'
  }
})`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const O=["Default","HeaderText","Placement","Arrow","Trigger","ColorScheme","delay"];export{n as Arrow,l as ColorScheme,o as Default,t as HeaderText,a as Placement,i as Trigger,O as __namedExportsOrder,M as default,c as delay};
