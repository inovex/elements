import{x as e}from"./lit-html-D-ZEPr28.js";import{S as a}from"./StoryWrapper-CsUqRYgJ.js";import"./elements-stencil-docs-D2SOUcOF.js";const w={title:"Buttons/ino-fab",component:"ino-fab",render:n=>e`
    <ino-fab
      class="customizable-fab"
      disabled="${n.disabled}"
      edge-position="${n.edgePosition}"
      label="${n.label}"
      variant="${n.variant}"
      shadow="${n.shadow}"
    >
      <ino-icon slot="icon-leading" icon="add" />
    </ino-fab>
  `,args:{disabled:!1,edgePosition:"top-right",label:"Hello",variant:"standard",shadow:!0},argTypes:{variant:{control:{type:"select"},options:["small","standard","large","extended"]},edgePosition:{control:{type:"select"},options:["top-left","top-right","bottom-right","bottom-left","none"]}}},o=a({...w}),i=a({...o,render:()=>e`
    <div class="ino-fab-variants">
      <ino-fab tooltip-placement="none" label="Default Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab tooltip-placement="top" variant="small" label="small fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab variant="extended" label="Extended Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab disabled label="Disabled Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `}),t=a({...o,render:()=>e`
    <div class="ino-fab-variants">
      <ino-fab id="left-fab" label="top-left" edge-position="top-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip for="left-fab" placement="left" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        top-left
      </ino-tooltip>

      <ino-fab id="top-fab" label="top-right" edge-position="top-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip for="top-fab" placement="top" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        top-right
      </ino-tooltip>

      <ino-fab id="bottom-fab" label="bottom-right" edge-position="bottom-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="bottom-fab"
        placement="bottom"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        bottom-right
      </ino-tooltip>

      <ino-fab id="top-again-fab" label="bottom-left" edge-position="bottom-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="top-again-fab"
        placement="top"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        bottom-left
      </ino-tooltip>
      <ino-fab id="right-fab" label="none" edge-position="none">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="right-fab"
        placement="right"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        none
      </ino-tooltip>
    </div>
  `});var l,r,s;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...InoFabMeta
})`,...(s=(r=o.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,d,f,b,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <div class="ino-fab-variants">
      <ino-fab tooltip-placement="none" label="Default Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab tooltip-placement="top" variant="small" label="small fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab variant="extended" label="Extended Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab disabled label="Disabled Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  \`
})`,...(f=(d=i.parameters)==null?void 0:d.docs)==null?void 0:f.source},description:{story:"In order to achive diffrent variations, use this properties:\n\n- `small`: modifies the FAB to a smaller size\n- `extended`: modifies the FAB to wider size which includes a text label.\n- `large`: modifies the FAB to a larger size\n- `standard`: default size\n- `disabled`: Disables the button",...(p=(b=i.parameters)==null?void 0:b.docs)==null?void 0:p.description}}};var m,g,u,h,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <div class="ino-fab-variants">
      <ino-fab id="left-fab" label="top-left" edge-position="top-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip for="left-fab" placement="left" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        top-left
      </ino-tooltip>

      <ino-fab id="top-fab" label="top-right" edge-position="top-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip for="top-fab" placement="top" trigger="mouseenter focus" color-scheme="transparent" arrow="false">
        top-right
      </ino-tooltip>

      <ino-fab id="bottom-fab" label="bottom-right" edge-position="bottom-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="bottom-fab"
        placement="bottom"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        bottom-right
      </ino-tooltip>

      <ino-fab id="top-again-fab" label="bottom-left" edge-position="bottom-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="top-again-fab"
        placement="top"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        bottom-left
      </ino-tooltip>
      <ino-fab id="right-fab" label="none" edge-position="none">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-tooltip
        for="right-fab"
        placement="right"
        trigger="mouseenter focus"
        color-scheme="transparent"
        arrow="false"
      >
        none
      </ino-tooltip>
    </div>
  \`
})`,...(u=(g=t.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"In order to achive edges on the fab-button, add `edge-position`.\n\nPossible values are:\n\n- `top-right`\n- `top-left`\n- `bottom-right`\n- `bottom-left`\n- `none` = `top-left`",...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};const B=["Default","Variants","EdgePositions"];export{o as Default,t as EdgePositions,i as Variants,B as __namedExportsOrder,w as default};
