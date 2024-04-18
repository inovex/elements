import{x as S}from"./lit-html-D-ZEPr28.js";import{S as a}from"./StoryWrapper-CFmJx4Rl.js";import"./elements-stencil-docs-CAm1M8Bn.js";const r=t=>{const c=t.target.closest("ino-fab-set");c.openDial=!c.openDial},y={title:"Buttons/ino-fab-set",component:"ino-fab-set",parameters:{actions:{handles:["click ino-fab"]},docs:{story:{height:"300px"}}},render:t=>S`
    <ino-fab-set
      open-dial="${t.openDial}"
      top-bottom-location="${t.topBottomLocation}"
      left-right-location="${t.leftRightLocation}"
      dial-direction="${t.dialDirection}"
      @click="${r}"
    >
      <ino-icon
        @clickEl="${r}"
        icon="arrow_down"
        slot="icon-opened"
      ></ino-icon>
      <ino-icon
        @clickEl="${r}"
        icon="arrow_up"
        slot="icon-closed"
      ></ino-icon>
      <ino-fab label="First FAB">
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
      </ino-fab>
      <ino-fab label="Second FAB">
        <ino-icon slot="icon-leading" icon="favorite"></ino-icon>
      </ino-fab>
      <ino-fab label="Third FAB">
        <ino-icon slot="icon-leading" icon="info"></ino-icon>
      </ino-fab>
    </ino-fab-set>
  `,args:{openDial:!1,dialDirection:"top",leftRightLocation:"left",topBottomLocation:"bottom"}},o=a({...y}),i=a({...o,docsFromProperty:"dialDirection",args:{dialDirection:"bottom"}}),n=a({...o,docsFromProperty:"leftRightLocation",args:{leftRightLocation:"right"}}),e=a({...o,docsFromProperty:"topBottomLocation",args:{topBottomLocation:"top"}});var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`Story({
  ...InoFabSetMeta
})`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,f;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dialDirection',
  args: {
    dialDirection: 'bottom'
  }
})`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,b,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'leftRightLocation',
  args: {
    leftRightLocation: 'right'
  }
})`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var D,L,h;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'topBottomLocation',
  args: {
    topBottomLocation: 'top'
  }
})`,...(h=(L=e.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};const $=["Default","DialDirection","LeftRightLocation","TopBottomLocation"];export{o as Default,i as DialDirection,n as LeftRightLocation,e as TopBottomLocation,$ as __namedExportsOrder,y as default};
