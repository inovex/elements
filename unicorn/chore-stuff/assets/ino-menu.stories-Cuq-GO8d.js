import{b as r}from"./lit-html-IUDnlW1J.js";import{S as o}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const a={title:"Structure/ino-menu",component:"ino-menu",render:n=>r`
    <ino-card disable-elevation>
      <div class="row" slot="header">
        <p>Open Menu</p>
        <ino-icon-button icon="menu">
          <ino-menu placement="${n.placement}">
            <ino-list-item tabindex="0" text="Item 1"></ino-list-item>
            <ino-list-item tabindex="0" text="Item 2"></ino-list-item>
          </ino-menu>
        </ino-icon-button>
      </div>
    </ino-card>
  `,args:{placement:"auto"}},e=o({...a}),t=o({...e,docsFromProperty:"placement",args:{placement:"left"}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoMenuMeta
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'left'
  }
})`,...t.parameters?.docs?.source}}};const c=["Default","Placement"];export{e as Default,t as Placement,c as __namedExportsOrder,a as default};
