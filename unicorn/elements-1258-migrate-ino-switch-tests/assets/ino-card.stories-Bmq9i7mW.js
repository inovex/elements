import{x as E}from"./lit-html-D-ZEPr28.js";import{S as s}from"./StoryWrapper-8ope1Itq.js";import"./elements-stencil-docs-A79BTi6O.js";const{useEffect:S}=__STORYBOOK_MODULE_PREVIEW_API__,y={title:"Structure/ino-card",component:"ino-card",decorators:[t=>(S(()=>{const n=function(f){var c;const a=(c=f.target)==null?void 0:c.closest("ino-card");a&&(a.selected=!a.selected)};return document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}}),t())],render:t=>E`
    <ino-card
      class="customizable-card"
      disable-elevation="${t.disableElevation}"
      selected="${t.selected}"
    >
      <div slot="header" class="card-header">
        <ino-icon icon="info" clickable></ino-icon>
      </div>
      <div slot="content" class="card-content--vertical">
        <ino-img
          src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
        ></ino-img>
      </div>
      <div slot="footer" class="sample-card-footer">
        <ino-segment-group>
          <ino-segment-button value="1">Read</ino-segment-button>
          <ino-segment-button value="2">Bookmark</ino-segment-button>
        </ino-segment-group>
      </div>
    </ino-card>
  `,args:{disableElevation:!1,selected:!1}},e=s({...y}),o=s({...e,docsFromProperty:"disableElevation",args:{disableElevation:!0}}),r=s({...e,docsFromProperty:"selected",args:{selected:!0}});var i,d,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`Story({
  ...InoCardMeta
})`,...(l=(d=e.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,u,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disableElevation',
  args: {
    disableElevation: true
  }
})`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var v,g,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true
  }
})`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const k=["Default","DisabledElevation","Selected"];export{e as Default,o as DisabledElevation,r as Selected,k as __namedExportsOrder,y as default};
