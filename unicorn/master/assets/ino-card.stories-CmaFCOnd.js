import{b as i}from"./lit-html-IUDnlW1J.js";import{S as s}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:d}=__STORYBOOK_MODULE_PREVIEW_API__,l={title:"Structure/ino-card",component:"ino-card",decorators:[t=>(d(()=>{const n=function(c){const a=c.target?.closest("ino-card");a&&(a.selected=!a.selected)};return document.addEventListener("click",n),()=>{document.removeEventListener("click",n)}}),t())],render:t=>i`
    <ino-card class="customizable-card" disable-elevation="${t.disableElevation}" selected="${t.selected}">
      <div slot="header" class="card-header">
        <ino-icon icon="info" clickable></ino-icon>
      </div>
      <div slot="content" class="card-content--vertical">
        <ino-img src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"></ino-img>
      </div>
      <div slot="footer" class="sample-card-footer">
        <ino-segment-group>
          <ino-segment-button value="1">Read</ino-segment-button>
          <ino-segment-button value="2">Bookmark</ino-segment-button>
        </ino-segment-group>
      </div>
    </ino-card>
  `,args:{disableElevation:!1,selected:!1}},e=s({...l}),o=s({...e,docsFromProperty:"disableElevation",args:{disableElevation:!0}}),r=s({...e,docsFromProperty:"selected",args:{selected:!0}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoCardMeta
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'disableElevation',
  args: {
    disableElevation: true
  }
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'selected',
  args: {
    selected: true
  }
})`,...r.parameters?.docs?.source}}};const v=["Default","DisabledElevation","Selected"];export{e as Default,o as DisabledElevation,r as Selected,v as __namedExportsOrder,l as default};
