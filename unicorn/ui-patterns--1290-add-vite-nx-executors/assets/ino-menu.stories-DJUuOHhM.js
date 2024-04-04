import{x as l}from"./lit-html-D-ZEPr28.js";import{S as m}from"./StoryWrapper-8ope1Itq.js";import"./elements-stencil-docs-A79BTi6O.js";const p={title:"Structure/ino-menu",component:"ino-menu",render:c=>l`
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
  `,args:{placement:"auto"}},e=m({...p}),t=m({...e,docsFromProperty:"placement",args:{placement:"left"}});var o,n,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`Story({
  ...InoMenuMeta
})`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'left'
  }
})`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const x=["Default","Placement"];export{e as Default,t as Placement,x as __namedExportsOrder,p as default};
