import{b as m}from"./lit-html-IUDnlW1J.js";import{S as e}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const g={title:"Notification/ino-tooltip",component:"ino-tooltip",argTypes:{for:{type:"string"},placement:{control:{type:"select"},options:["top","right","bottom","left"]},trigger:{control:{type:"select"},options:["mouseenter","focus","click","mouseenter focus","mouseenter click","focus click","mouseenter focus click"]},colorScheme:{control:{type:"select"},options:["light","dark","primary"]},delay:{control:{type:"object"}},message:{control:"string"}},render:r=>m`
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
  `,args:{headerText:"",for:"tooltip-target",placement:"top",trigger:"mouseenter focus",colorScheme:"primary",delay:0,message:"",arrow:!1}},o=e({...g}),t=e({...o,docsFromProperty:"headerText",args:{headerText:"HeaderText",for:"tooltip-target-header"}}),a=e({...o,docsFromProperty:"placement",args:{placement:"right",for:"tooltip-target-placement"}}),n=e({...o,docsFromProperty:"arrow",args:{arrow:!0,for:"tooltip-target-arrow"}}),i=e({...o,docsFromProperty:"trigger",args:{trigger:"click",for:"tooltip-target-trigger"}}),l=e({...o,render:r=>{const s="tooltip-light",p="tooltip-dark",d="tooltip-primary";return m`
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
    `}}),c=e({...o,docsFromProperty:"delay",args:{delay:[500,200],for:"tooltip-target-delay"}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoTooltipMeta
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'headerText',
  args: {
    headerText: 'HeaderText',
    for: 'tooltip-target-header'
  }
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'right',
    for: 'tooltip-target-placement'
  }
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'arrow',
  args: {
    arrow: true,
    for: 'tooltip-target-arrow'
  }
})`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'trigger',
  args: {
    trigger: 'click',
    for: 'tooltip-target-trigger'
  }
})`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
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
})`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'delay',
  args: {
    delay: [500, 200],
    for: 'tooltip-target-delay'
  }
})`,...c.parameters?.docs?.source}}};const $=["Default","HeaderText","Placement","Arrow","Trigger","ColorScheme","Delay"];export{n as Arrow,l as ColorScheme,o as Default,c as Delay,t as HeaderText,a as Placement,i as Trigger,$ as __namedExportsOrder,g as default};
