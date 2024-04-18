import{x as t}from"./lit-html-D-ZEPr28.js";import{S as a}from"./StoryWrapper-CFmJx4Rl.js";import"./elements-stencil-docs-CAm1M8Bn.js";const x={title:"Buttons/ino-fab",component:"ino-fab",render:o=>t`
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
  `,args:{disabled:!1,edgePosition:"top-left",extended:!1,label:"Label",mini:!1,tooltipPlacement:"right",icon:"add"},argTypes:{edgePosition:{control:{type:"select"},options:["top-left","top-right","bottom-right","bottom-left","none"]},tooltipPlacement:{control:{type:"select"},options:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","none","right","right-end","right-start","top","top-end","top-start"]}}},n=a({...x}),i=a({...n,render:()=>t`
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
  `});var l,d,s;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...InoFabMeta
})`,...(s=(d=n.parameters)==null?void 0:d.docs)==null?void 0:s.source}}};var c,r,b,f,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`Story({
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
})`,...(b=(r=i.parameters)==null?void 0:r.docs)==null?void 0:b.source},description:{story:"In order to achive diffrent variations, use this properties:\n\n- `mini`: Optional, modifies the FAB to a smaller size\n- `extended`: Optional, modifies the FAB to wider size which includes a text label.\n- `disabled`: Disables the button",...(p=(f=i.parameters)==null?void 0:f.docs)==null?void 0:p.description}}};var m,g,u,h,v;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`Story({
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
})`,...(u=(g=e.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:"In order to achive edges on the fab-button, add `edge-position`.\n\nPossible values are:\n\n- `top-right`\n- `top-left`\n- `bottom-right`\n- `bottom-left`\n- `none` = `top-left`",...(v=(h=e.parameters)==null?void 0:h.docs)==null?void 0:v.description}}};const F=["Default","Variants","EdgePositions"];export{n as Default,e as EdgePositions,i as Variants,F as __namedExportsOrder,x as default};
