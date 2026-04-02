import{b as s}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const r=t=>{const c=t.target.closest("ino-fab-set");c.openDial=!c.openDial},l={title:"Buttons/ino-fab-set",component:"ino-fab-set",parameters:{actions:{handles:["click ino-fab"]},docs:{story:{height:"300px"}}},render:t=>s`
    <ino-fab-set
      open-dial="${t.openDial}"
      top-bottom-location="${t.topBottomLocation}"
      left-right-location="${t.leftRightLocation}"
      dial-direction="${t.dialDirection}"
      @click="${r}"
    >
      <ino-icon @clickEl="${r}" icon="arrow_down" slot="icon-opened"></ino-icon>
      <ino-icon @clickEl="${r}" icon="arrow_up" slot="icon-closed"></ino-icon>
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
  `,args:{openDial:!1,dialDirection:"top",leftRightLocation:"left",topBottomLocation:"bottom"}},o=a({...l}),i=a({...o,docsFromProperty:"dialDirection",args:{dialDirection:"bottom"}}),n=a({...o,docsFromProperty:"leftRightLocation",args:{leftRightLocation:"right"}}),e=a({...o,docsFromProperty:"topBottomLocation",args:{topBottomLocation:"top"}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoFabSetMeta
})`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dialDirection',
  args: {
    dialDirection: 'bottom'
  }
})`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'leftRightLocation',
  args: {
    leftRightLocation: 'right'
  }
})`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'topBottomLocation',
  args: {
    topBottomLocation: 'top'
  }
})`,...e.parameters?.docs?.source}}};const f=["Default","DialDirection","LeftRightLocation","TopBottomLocation"];export{o as Default,i as DialDirection,n as LeftRightLocation,e as TopBottomLocation,f as __namedExportsOrder,l as default};
