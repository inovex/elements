import{b as s}from"./lit-html-IUDnlW1J.js";import{S as c}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const t=e=>e.target.checked=e.detail,i={title:"Input/ino-switch",component:"ino-switch",render:e=>s`
    <ino-switch
      checked="${e.checked}"
      disabled="${e.disabled}"
      name="${e.name}"
      @checkedChange="${t}"
    >
      Switch Label
    </ino-switch>
  `,args:{checked:!1,disabled:!1,name:""}},o=c({...i}),r=c({...o,docsFromProperty:"checked",args:{checked:!0}}),a=c({...o,docsFromProperty:"disabled",args:{disabled:!0}}),n=c({...o,render:e=>s`
    <ino-switch
      checked="${e.checked}"
      disabled="${e.disabled}"
      name="${e.name}"
      @checkedChange="${t}"
    >
      <ino-icon slot="leading" icon="offboarding"></ino-icon>
      Switch Label
      <ino-icon slot="trailing" icon="onboarding"></ino-icon>
    </ino-switch>
  `});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoSwitchMeta
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: args => html\`
    <ino-switch
      checked="\${args.checked}"
      disabled="\${args.disabled}"
      name="\${args.name}"
      @checkedChange="\${eventHandler}"
    >
      <ino-icon slot="leading" icon="offboarding"></ino-icon>
      Switch Label
      <ino-icon slot="trailing" icon="onboarding"></ino-icon>
    </ino-switch>
  \`
})`,...n.parameters?.docs?.source},description:{story:"Can be used to toggle between to state disabled by two icons.\nUse the `leading` and `trailing` slots.\nWorks best with `<ino-icon>`.",...n.parameters?.docs?.description}}};const m=["Default","Checked","Disabled","ToggleIcon"];export{r as Checked,o as Default,a as Disabled,n as ToggleIcon,m as __namedExportsOrder,i as default};
