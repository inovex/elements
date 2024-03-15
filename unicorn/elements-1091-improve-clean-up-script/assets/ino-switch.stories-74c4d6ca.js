import{x as f}from"./lit-html-b5e645d2.js";import{S as c}from"./StoryWrapper-4497be18.js";import"./elements-stencil-docs-7426864f.js";const $=e=>e.target.checked=e.detail,y={title:"Input/ino-switch",component:"ino-switch",render:e=>f`
    <ino-switch
      checked="${e.checked}"
      disabled="${e.disabled}"
      name="${e.name}"
      @checkedChange="${$}"
    >
      Switch Label
    </ino-switch>
  `,args:{checked:!1,disabled:!1,name:""}},o=c({...y}),r=c({...o,docsFromProperty:"checked",args:{checked:!0}}),a=c({...o,docsFromProperty:"disabled",args:{disabled:!0}}),n=c({...o,render:e=>f`
    <ino-switch
      checked="${e.checked}"
      disabled="${e.disabled}"
      name="${e.name}"
      @checkedChange="${$}"
    >
      <ino-icon slot="leading" icon="offboarding"></ino-icon>
      Switch Label
      <ino-icon slot="trailing" icon="onboarding"></ino-icon>
    </ino-switch>
  `});var s,t,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`Story({
  ...InoSwitchMeta
})`,...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,l,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...(h=(l=r.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,u,k,w,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`Story({
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
})`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source},description:{story:"Can be used to toggle between to state disabled by two icons.\nUse the `leading` and `trailing` slots.\nWorks best with `<ino-icon>`.",...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.description}}};const F=["Default","Checked","Disabled","ToggleIcon"];export{r as Checked,o as Default,a as Disabled,n as ToggleIcon,F as __namedExportsOrder,y as default};
