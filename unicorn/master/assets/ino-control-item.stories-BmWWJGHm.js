import{b as y}from"./lit-html-IUDnlW1J.js";import{S as t}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:g}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Structure/ino-control-item",component:"ino-control-item",decorators:[e=>(g(()=>{const p=u=>{const l=u.target;l.checked=u.detail,l.indeterminate&&(l.indeterminate=!1)};return document.addEventListener("checkedChange",p),()=>document.removeEventListener("checkedChange",p)}),e())],render:e=>y`
    <ino-list two-lines="${e.secondaryText||!1}">
      <ino-control-item
        activated="${e.activated}"
        checked="${e.checked}"
        disabled="${e.disabled}"
        indeterminate="${e.indeterminate}"
        role="${e.role}"
        secondary-text="${e.secondaryText}"
        selected="${e.selected}"
        text="${e.text}"
        trailing="${e.trailing}"
      >
      </ino-control-item>
    </ino-list>
  `,args:{activated:!1,checked:!1,disabled:!1,indeterminate:!1,role:"checkbox",secondaryText:"",selected:!1,text:"Text",trailing:!1}},r=t({...S}),o=t({...r,docsFromProperty:"role",args:{role:"radio"}}),a=t({...r,docsFromProperty:"checked",args:{checked:!0}}),s=t({...r,docsFromProperty:"indeterminate",args:{indeterminate:!0}}),c=t({...r,docsFromProperty:"activated",args:{activated:!0}}),n=t({...r,docsFromProperty:"selected",args:{selected:!0}}),d=t({...r,docsFromProperty:"secondaryText",args:{secondaryText:"Some Secondary Text"}}),i=t({...r,docsFromProperty:"disabled",args:{disabled:!0}}),m=t({...r,docsFromProperty:"trailing",args:{trailing:!0}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoControlItemMeta
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'role',
  args: {
    role: 'radio'
  }
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'checked',
  args: {
    checked: true
  }
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'indeterminate',
  args: {
    indeterminate: true
  }
})`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'activated',
  args: {
    activated: true
  }
})`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true
  }
})`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'secondaryText',
  args: {
    secondaryText: 'Some Secondary Text'
  }
})`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'trailing',
  args: {
    trailing: true
  }
})`,...m.parameters?.docs?.source}}};const h=["Default","Roles","Checked","Indeterminate","Activated","Selected","SecondaryText","Disabled","Trailing"];export{c as Activated,a as Checked,r as Default,i as Disabled,s as Indeterminate,o as Roles,d as SecondaryText,n as Selected,m as Trailing,h as __namedExportsOrder,S as default};
