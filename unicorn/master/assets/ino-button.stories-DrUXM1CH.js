import{b as l}from"./lit-html-IUDnlW1J.js";import{S as r}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const u={title:"Buttons/ino-button",component:"ino-button",parameters:{docs:{source:{format:"html"}}},render:n=>l`
    <ino-button variant="${n.variant}" disabled="${n.disabled}" dense="${n.dense}" loading="${n.loading}">
      Label
    </ino-button>
  `,args:{variant:"filled",dense:!1,disabled:!1,loading:!1}},o=r({...u}),a=r({...o,docsFromProperty:"variant",args:{variant:"filled"}}),t=r({...o,docsFromProperty:"variant",args:{variant:"outlined"}}),s=r({...o,docsFromProperty:"variant",args:{variant:"text"}}),i=r({...o,docsFromProperty:"disabled",args:{disabled:!0}}),c=r({...o,docsFromProperty:"dense",args:{dense:!0}}),d=r({...o,docsFromProperty:"loading",args:{loading:!0}}),e=r({...o,render:()=>l`
    <ino-button>
      <ino-icon icon="info" slot="icon-leading"></ino-icon>
      Label
    </ino-button>
    <ino-button>
      <ino-icon icon="info" slot="icon-trailing"></ino-icon>
      Label
    </ino-button>
  `});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoButtonMeta
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'filled'
  }
})`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'outlined'
  }
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'variant',
  args: {
    variant: 'text'
  }
})`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dense',
  args: {
    dense: true
  }
})`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'loading',
  args: {
    loading: true
  }
})`,...d.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
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
})`,...e.parameters?.docs?.source},description:{story:"In order to include icons, use the `icon-leading` or `icon-trailing` slot",...e.parameters?.docs?.description}}};const b=["Default","Filled","Outlined","Text","Disabled","Dense","Loading","LeadingAndTrailingIcon"];export{o as Default,c as Dense,i as Disabled,a as Filled,e as LeadingAndTrailingIcon,d as Loading,t as Outlined,s as Text,b as __namedExportsOrder,u as default};
