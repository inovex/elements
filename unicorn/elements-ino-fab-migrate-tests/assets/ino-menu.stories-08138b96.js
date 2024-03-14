import{x as l}from"./lit-html-b5e645d2.js";import{S as m}from"./StoryWrapper-c6cdb4db.js";import"./elements-stencil-docs-02981b6f.js";const p={title:"Structure/ino-menu",component:"ino-menu",render:c=>l`
    <ino-card disable-elevation>
      <div class="row" slot="header">
        <p>Open Menu</p>
        <ino-icon-button icon="menu">
          <ino-menu placement="${c.placement}">
            <ino-list-item tabindex="0" text="Item 1"></ino-list-item>
            <ino-list-item tabindex="0" text="Item 2"></ino-list-item>
          </ino-menu>
        </ino-icon-button>
      </div>
    </ino-card>
  `,args:{placement:"auto"}},e=m({...p}),t=m({...e,docsFromProperty:"placement",args:{placement:"left"}});var n,o,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoMenuMeta
})`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'left'
  }
})`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Default","Placement"];export{e as Default,t as Placement,x as __namedExportsOrder,p as default};
