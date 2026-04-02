import{b as r}from"./lit-html-IUDnlW1J.js";import{S as o}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const d={title:"Structure/ino-list-divider",component:"ino-list-divider",render:i=>r`
    <ino-list>
      <ino-list-item text="Item 2"></ino-list-item>
      <ino-list-divider
        inset="${i.inset}"
        between-lists="${i.betweenLists}"
        padded="${i.padded}"
      ></ino-list-divider>
      <ino-list-item text="Item 3"></ino-list-item>
    </ino-list>
  `,args:{inset:!1,betweenLists:!1,padded:!1,slot:!1}},t=o({...d}),e=o({...t,docsFromProperty:"padded",args:{padded:!0}}),n=o({...t,docsFromProperty:"inset",render:i=>r`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider inset="${i.inset}" between-lists="${i.betweenLists}"></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,args:{inset:!0}}),s=o({...t,docsFromProperty:"betweenLists",render:i=>r`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider inset="${i.inset}" between-lists="${i.betweenLists}"></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  `,args:{betweenLists:!0}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoListDividerMeta
})`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'padded',
  args: {
    padded: true
  }
})`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'inset',
  render: args => html\`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider inset="\${args.inset}" between-lists="\${args.betweenLists}"></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  \`,
  args: {
    inset: true
  }
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'betweenLists',
  render: args => html\`
    <ino-list>
      <ino-list-item text="Add to favorites">
        <ino-icon slot="leading" icon="favorite"></ino-icon>
      </ino-list-item>
      <ino-list-divider inset="\${args.inset}" between-lists="\${args.betweenLists}"></ino-list-divider>
      <ino-list-item text="Star it!">
        <ino-icon slot="leading" icon="star"></ino-icon>
      </ino-list-item>
    </ino-list>
  \`,
  args: {
    betweenLists: true
  }
})`,...s.parameters?.docs?.source}}};const m=["Default","Padded","Inset","BetweenLists"];export{s as BetweenLists,t as Default,n as Inset,e as Padded,m as __namedExportsOrder,d as default};
