import{x as M}from"./lit-html-D-ZEPr28.js";import{S as e}from"./StoryWrapper-CsUqRYgJ.js";import"./elements-stencil-docs-D2SOUcOF.js";const _={title:"Notification/ino-tooltip",component:"ino-tooltip",argTypes:{for:{type:"string"},placement:{control:{type:"select"},options:["top","right","bottom","left"]},trigger:{control:{type:"select"},options:["mouseenter","focus","click","mouseenter focus","mouseenter click","focus click","mouseenter focus click"]},colorScheme:{control:{type:"select"},options:["light","dark","primary","transparent"]},delay:{control:{type:"object"}},message:{control:"string"}},render:r=>M`
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
  `,args:{headerText:"",for:"tooltip-target",placement:"top",trigger:"mouseenter focus",colorScheme:"primary",delay:0,message:"",arrow:!1}},o=e({..._}),t=e({...o,docsFromProperty:"headerText",args:{headerText:"HeaderText",for:"tooltip-target-header"}}),a=e({...o,docsFromProperty:"placement",args:{placement:"right",for:"tooltip-target-placement"}}),n=e({...o,docsFromProperty:"arrow",args:{arrow:!0,for:"tooltip-target-arrow"}}),i=e({...o,docsFromProperty:"trigger",args:{trigger:"click",for:"tooltip-target-trigger"}}),l=e({...o,render:r=>{const p="tooltip-light",c="tooltip-dark",d="tooltip-primary",m="tooltip-transparent";return M`
      <ino-button id="${p}">Light</ino-button>
      <ino-tooltip
        color-scheme="light"
        for="${p}"
        placement="${r.placement}"
        trigger="${r.trigger}"
        delay=${typeof r.delay=="number"?r.delay:[r.delay]}
        arrow="${r.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
      <ino-button id="${c}">Dark</ino-button>
      <ino-tooltip
        color-scheme="dark"
        for="${c}"
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
      <ino-button id="${m}">Transparent</ino-button>
      <ino-tooltip
        color-scheme="transparent"
        for="${m}"
        placement="${r.placement}"
        trigger="${r.trigger}"
        delay=${typeof r.delay=="number"?r.delay:[r.delay]}
        arrow="${r.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
    `}}),s=e({...o,docsFromProperty:"delay",args:{delay:[500,200],for:"tooltip-target-delay"}});var g,y,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...InoTooltipMeta
})`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var $,f,h;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'headerText',
  args: {
    headerText: 'HeaderText',
    for: 'tooltip-target-header'
  }
})`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var T,b,w;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'right',
    for: 'tooltip-target-placement'
  }
})`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var S,P,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'arrow',
  args: {
    arrow: true,
    for: 'tooltip-target-arrow'
  }
})`,...(k=(P=n.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var D,x,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'trigger',
  args: {
    trigger: 'click',
    for: 'tooltip-target-trigger'
  }
})`,...(F=(x=i.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var L,H,A;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`Story({
  ...Default,
  render: args => {
    const idLight = 'tooltip-light';
    const idDark = 'tooltip-dark';
    const idPrimary = 'tooltip-primary';
    const idTransparent = 'tooltip-transparent';
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
      <ino-button id="\${idTransparent}">Transparent</ino-button>
      <ino-tooltip
        color-scheme="transparent"
        for="\${idTransparent}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        This is a tooltip
      </ino-tooltip>
    \`;
  }
})`,...(A=(H=l.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var C,E,I;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'delay',
  args: {
    delay: [500, 200],
    for: 'tooltip-target-delay'
  }
})`,...(I=(E=s.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const q=["Default","HeaderText","Placement","Arrow","Trigger","ColorScheme","Delay"];export{n as Arrow,l as ColorScheme,o as Default,s as Delay,t as HeaderText,a as Placement,i as Trigger,q as __namedExportsOrder,_ as default};
