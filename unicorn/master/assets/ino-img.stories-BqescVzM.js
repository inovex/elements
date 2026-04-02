import{b as s}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import{g as c}from"./utils-ebStcoTl.js";import"./elements-stencil-docs-BpOCemuM.js";const n={title:"Graphic/ino-img",component:"ino-img",render:o=>s`
    <ino-img
      class="customizable-img"
      alt="${o.alt}"
      decoding="${o.decoding}"
      height="${o.height}"
      sizes="${o.sizes}"
      src="${o.src}"
      srcset="${o.srcset}"
      width="${o.width}"
      usemap="${o.usemap}"
      ratio-width="${o.ratioWidth}"
      ratio-height="${o.ratioHeight}"
      rounded="${o.rounded}"
      fallback-icon="${o.fallbackIcon}"
    >
    </ino-img>
  `,argTypes:{fallbackIcon:{control:{type:"select"},options:c()}},args:{alt:"Alternative Text",decoding:"async",height:100,src:"https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png",width:100,ratioWidth:1,ratioHeight:1,rounded:!1,srcset:"",usemap:"",fallbackIcon:"image_not_available"}},e=a({...n}),r=a({...e,docsFromProperty:"rounded",args:{rounded:!0}}),t=a({...e,docsFromProperty:"fallbackIcon",args:{src:"https://cdn-images-1/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"}});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoImgMeta
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'rounded',
  args: {
    rounded: true
  }
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fallbackIcon',
  args: {
    src: 'https://cdn-images-1/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png'
  }
})`,...t.parameters?.docs?.source}}};const p=["Default","Rounded","FallbackIcon"];export{e as Default,t as FallbackIcon,r as Rounded,p as __namedExportsOrder,n as default};
