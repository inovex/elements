import{b as t}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const l={title:"Buttons/ino-fab",component:"ino-fab",render:o=>t`
    <ino-fab
      class="customizable-fab"
      disabled="${o.disabled}"
      edge-position="${o.edgePosition}"
      extended="${o.extended}"
      label="${o.label}"
      mini="${o.mini}"
      tooltip-placement="${o.tooltipPlacement}"
    >
      <ino-icon slot="icon-leading" icon="${o.icon}" />
    </ino-fab>
  `,args:{disabled:!1,edgePosition:"top-left",extended:!1,label:"Label",mini:!1,tooltipPlacement:"right",icon:"add"},argTypes:{edgePosition:{control:{type:"select"},options:["top-left","top-right","bottom-right","bottom-left","none"]},tooltipPlacement:{control:{type:"select"},options:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","none","right","right-end","right-start","top","top-end","top-start"]}}},n=a({...l}),i=a({...n,render:()=>t`
    <div class="ino-fab-variants">
      <ino-fab tooltip-placement="none" label="Default Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab mini label="Mini Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab extended label="Extended Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab disabled label="Disabled Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `}),e=a({...n,render:()=>t`
    <div class="ino-fab-variants">
      <ino-fab label="top-left" edge-position="top-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="top-right" edge-position="top-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-right" edge-position="bottom-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-left" edge-position="bottom-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="none" edge-position="none">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  `});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...InoFabMeta
})`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <div class="ino-fab-variants">
      <ino-fab tooltip-placement="none" label="Default Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab mini label="Mini Fab">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab extended label="Extended Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab disabled label="Disabled Button">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  \`
})`,...i.parameters?.docs?.source},description:{story:"In order to achive diffrent variations, use this properties:\n\n- `mini`: Optional, modifies the FAB to a smaller size\n- `extended`: Optional, modifies the FAB to wider size which includes a text label.\n- `disabled`: Disables the button",...i.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <div class="ino-fab-variants">
      <ino-fab label="top-left" edge-position="top-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="top-right" edge-position="top-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-right" edge-position="bottom-right">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="bottom-left" edge-position="bottom-left">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
      <ino-fab label="none" edge-position="none">
        <ino-icon slot="icon-leading" icon="add"></ino-icon>
      </ino-fab>
    </div>
  \`
})`,...e.parameters?.docs?.source},description:{story:"In order to achive edges on the fab-button, add `edge-position`.\n\nPossible values are:\n\n- `top-right`\n- `top-left`\n- `bottom-right`\n- `bottom-left`\n- `none` = `top-left`",...e.parameters?.docs?.description}}};const r=["Default","Variants","EdgePositions"];export{n as Default,e as EdgePositions,i as Variants,r as __namedExportsOrder,l as default};
