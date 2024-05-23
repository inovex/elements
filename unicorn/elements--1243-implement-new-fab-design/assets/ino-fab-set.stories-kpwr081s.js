import{x as b}from"./lit-html-D-ZEPr28.js";import{S as p}from"./StoryWrapper-CsUqRYgJ.js";import"./elements-stencil-docs-D2SOUcOF.js";const m=o=>{const e=o.target.closest("ino-fab-set");e.openDial=!e.openDial},h={title:"Buttons/ino-fab-set",component:"ino-fab-set",parameters:{actions:{handles:["click ino-fab"]},docs:{story:{height:"300px"}}},render:o=>b`
    <ino-fab-set
      open-dial="${o.openDial}"
      label="${o.label}"
      orientation="${o.orientation}"
      @click="${m}"
    >
      <ino-fab slot="primary-fab" label="${o.label}" edge-position="top-right" tooltip-placement="none">
        <ino-icon slot="icon-leading" icon="options_dotted"></ino-icon>
      </ino-fab>
      <ino-fab label="First FAB" variant="small">
        <ino-icon slot="icon-leading" icon="download"></ino-icon>
      </ino-fab>
      <ino-fab label="Second FAB" variant="small">
        <ino-icon slot="icon-leading" icon="remove"></ino-icon>
      </ino-fab>
      <ino-fab label="Third FAB" variant="small">
        <ino-icon slot="icon-leading" icon="edit"></ino-icon>
      </ino-fab>
    </ino-fab-set>
  `,args:{icon:"options_dotted",label:"Label",openDial:!1,orientation:"vertical"}},i=p({...h}),n=p({...i,render:()=>b`
    <ino-fab-set
      open-dial="false"
      label="Open Chat"
      orientation="vertical"
      class="ino-fab-set--bottom-left"
      @click="${m}"
    >
      <ino-fab slot="primary-fab" label="Open Chat" edge-position="top-right" variant="extended">
        <ino-icon slot="icon-leading" icon="chat"></ino-icon>
      </ino-fab>
      <ino-fab id="second-fab" label="Second FAB" variant="small">
        <ino-icon slot="icon-leading" icon="call"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="second-fab"
        placement="left"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        call
      </ino-tooltip>
      <ino-fab id="third-fab" label="Third FAB" variant="small">
        <ino-icon slot="icon-leading" icon="mail"></ino-icon>
      </ino-fab>
      <ino-tooltip for="third-fab" placement="left" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        mail
      </ino-tooltip>
    </ino-fab-set>
  `});var a,t,l;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`Story({
  ...InoFabSetMeta
})`,...(l=(t=i.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var r,c,s,f,d;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <ino-fab-set
      open-dial="false"
      label="Open Chat"
      orientation="vertical"
      class="ino-fab-set--bottom-left"
      @click="\${clickHandler}"
    >
      <ino-fab slot="primary-fab" label="Open Chat" edge-position="top-right" variant="extended">
        <ino-icon slot="icon-leading" icon="chat"></ino-icon>
      </ino-fab>
      <ino-fab id="second-fab" label="Second FAB" variant="small">
        <ino-icon slot="icon-leading" icon="call"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="second-fab"
        placement="left"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        call
      </ino-tooltip>
      <ino-fab id="third-fab" label="Third FAB" variant="small">
        <ino-icon slot="icon-leading" icon="mail"></ino-icon>
      </ino-fab>
      <ino-tooltip for="third-fab" placement="left" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        mail
      </ino-tooltip>
    </ino-fab-set>
  \`
})`,...(s=(c=n.parameters)==null?void 0:c.docs)==null?void 0:s.source},description:{story:"This example shows the ino-fab-set component positioned at the bottom left.\nThe primary ino-fab button `Open Chat` opens a vertical menu with more options.\nAdditionally, each secondary ino-fab button has an ino-tooltip to provide more information.",...(d=(f=n.parameters)==null?void 0:f.docs)==null?void 0:d.description}}};const S=["Default","Extended"];export{i as Default,n as Extended,S as __namedExportsOrder,h as default};
