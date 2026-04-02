import{b as t}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const d=t`<ino-icon icon="onboarding"></ino-icon>`,n={title:"Structure/ino-nav-item",component:"ino-nav-item",render:e=>t`
    <ino-list>
      <ino-nav-item
        class="customizable-nav-item"
        text="${e.text}"
        sub-text="${e.subText}"
        activated="${e.activated}"
        disabled="${e.disabled}"
      >
        ${d}
      </ino-nav-item>
    </ino-list>
  `,args:{text:"Nav item",subText:"",activated:!1,disabled:!1}},s=a({...n}),i=a({...n,docsFromProperty:"text",render:e=>t`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="${e.text}"> </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text"}}),r=a({...n,docsFromProperty:"subText",render:e=>t`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="${e.text}" sub-text="${e.subText}"> </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",subText:"Secondary Text 2"}}),m=a({...n,docsFromProperty:"activated",render:e=>t`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="${e.text}" activated="${e.activated}"> </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",activated:!0}}),c=a({...n,docsFromProperty:"disabled",render:e=>t`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="${e.text}" disabled="${e.disabled}"> </ino-nav-item>
    </ino-list>
  `,args:{text:"Some Text",disabled:!0}}),o=a({...n});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...InoNavItemMeta
})`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'text',
  render: args => html\`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="\${args.text}"> </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text'
  }
})`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'subText',
  render: args => html\`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="\${args.text}" sub-text="\${args.subText}"> </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text',
    subText: 'Secondary Text 2'
  }
})`,...r.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'activated',
  render: args => html\`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="\${args.text}" activated="\${args.activated}"> </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text',
    activated: true
  }
})`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...InoNavItemMeta,
  docsFromProperty: 'disabled',
  render: args => html\`
    <ino-list>
      <ino-nav-item class="customizable-nav-item" text="\${args.text}" disabled="\${args.disabled}"> </ino-nav-item>
    </ino-list>
  \`,
  args: {
    text: 'Some Text',
    disabled: true
  }
})`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoNavItemMeta
})`,...o.parameters?.docs?.source},description:{story:"Use an `ino-icon` element inside the default slot of an `ino-nav-item` to display an icon next to the text.",...o.parameters?.docs?.description}}};const u=["Default","Text","TwoLines","Activated","Disabled","Graphic"];export{m as Activated,s as Default,c as Disabled,o as Graphic,i as Text,r as TwoLines,u as __namedExportsOrder,n as default};
