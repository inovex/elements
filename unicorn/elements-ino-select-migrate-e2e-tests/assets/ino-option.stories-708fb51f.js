import{x as b}from"./lit-html-b5e645d2.js";import{S as s}from"./StoryWrapper-03bb9100.js";import"./elements-stencil-docs-98c6df11.js";const y={title:"Input/ino-option",component:"ino-option",parameters:{docs:{story:{height:"150px"}}},render:r=>b`
    <div class="story-option">
      <ino-select label="My Select">
        <ino-option
          class="customizable-option"
          disabled="${r.disabled}"
          selected="${r.selected}"
          value="${r.value}"
        >
          Content
        </ino-option>
      </ino-select>
    </div>
  `,args:{value:"some-id",disabled:!1,selected:!1}},e=s({...y}),o=s({...e,docsFromProperty:"disabled",args:{disabled:!0}}),t=s({...e,docsFromProperty:"selected",args:{selected:!0}});var a,n,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`Story({
  ...InoOptionMeta
})`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true
  }
})`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,m,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true
  }
})`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const g=["Default","DisabledOption","SelectedOption"];export{e as Default,o as DisabledOption,t as SelectedOption,g as __namedExportsOrder,y as default};
