import{x as g}from"./lit-html-D-ZEPr28.js";import{S as a}from"./StoryWrapper-CsUqRYgJ.js";import{g as h}from"./utils-ebStcoTl.js";import"./elements-stencil-docs-D2SOUcOF.js";const f={title:"Graphic/ino-img",component:"ino-img",render:o=>g`
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
  `,argTypes:{fallbackIcon:{control:{type:"select"},options:h()}},args:{alt:"Alternative Text",decoding:"async",height:100,src:"https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png",width:100,ratioWidth:1,ratioHeight:1,rounded:!1,srcset:"",usemap:"",fallbackIcon:"image_not_available"}},e=a({...f}),r=a({...e,docsFromProperty:"rounded",args:{rounded:!0}}),t=a({...e,docsFromProperty:"fallbackIcon",args:{src:"https://cdn-images-1/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"}});var s,c,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`Story({
  ...InoImgMeta
})`,...(n=(c=e.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'rounded',
  args: {
    rounded: true
  }
})`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fallbackIcon',
  args: {
    src: 'https://cdn-images-1/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png'
  }
})`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const b=["Default","Rounded","FallbackIcon"];export{e as Default,t as FallbackIcon,r as Rounded,b as __namedExportsOrder,f as default};
