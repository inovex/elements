import{b as n}from"./lit-html-IUDnlW1J.js";import{S as a}from"./StoryWrapper-Bs3Y9Jfd.js";import{l as i,m as u,n as l}from"./nidaros-DoXsHWp0.js";import"./elements-stencil-docs-BpOCemuM.js";const c=e=>{const t=e.target;t.value=e.detail},d={title:"Graphic/ino-carousel",component:"ino-carousel",render:e=>n`
    <div class="ino-carousel-example">
      <ino-carousel
        class="customizable-carousel"
        value="${e.value}"
        autoplay="${e.autoplay}"
        hide-buttons="${e.hideButtons}"
        infinite="${e.infinite}"
        intermission="${e.intermission}"
        reverse="${e.reverse}"
        @valueChange="${c}"
      >
        <ino-carousel-slide src=${i} value="0"></ino-carousel-slide>
        <ino-carousel-slide src=${u} value="1"></ino-carousel-slide>
        <ino-carousel-slide src=${l} value="2"></ino-carousel-slide>
      </ino-carousel>
    </div>
  `,args:{value:"0",autoplay:!0,hideButtons:!1,infinite:!0,intermission:2e3,reverse:!1}},r=a({...d}),o=a({...r,docsFromProperty:"hideButtons",args:{hideButtons:!0}}),s=a({...r,docsFromProperty:"reverse",args:{reverse:!0}});r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`Story({
  ...InoCarouselMeta
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'hideButtons',
  args: {
    hideButtons: true
  }
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'reverse',
  args: {
    reverse: true
  }
})`,...s.parameters?.docs?.source}}};const g=["Default","HideButtons","Reverse"];export{r as Default,o as HideButtons,s as Reverse,g as __namedExportsOrder,d as default};
