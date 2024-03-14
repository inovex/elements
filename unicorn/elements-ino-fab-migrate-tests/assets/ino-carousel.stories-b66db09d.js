import{x as f}from"./lit-html-b5e645d2.js";import{S as a}from"./StoryWrapper-c6cdb4db.js";import{l as g,m as h,n as y}from"./nidaros-83a5e61c.js";import"./elements-stencil-docs-02981b6f.js";const $=e=>{const v=e.target;v.value=e.detail},S={title:"Graphic/ino-carousel",component:"ino-carousel",render:e=>f`
    <div class="ino-carousel-example">
      <ino-carousel
        class="customizable-carousel"
        value="${e.value}"
        autoplay="${e.autoplay}"
        hide-buttons="${e.hideButtons}"
        infinite="${e.infinite}"
        intermission="${e.intermission}"
        reverse="${e.reverse}"
        @valueChange="${$}"
      >
        <ino-carousel-slide src=${g} value="0"></ino-carousel-slide>
        <ino-carousel-slide src=${h} value="1"></ino-carousel-slide>
        <ino-carousel-slide src=${y} value="2"></ino-carousel-slide>
      </ino-carousel>
    </div>
  `,args:{value:"0",autoplay:!0,hideButtons:!1,infinite:!0,intermission:2e3,reverse:!1}},r=a({...S}),o=a({...r,docsFromProperty:"hideButtons",args:{hideButtons:!0}}),s=a({...r,docsFromProperty:"reverse",args:{reverse:!0}});var t,n,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`Story({
  ...InoCarouselMeta
})`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var u,l,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'hideButtons',
  args: {
    hideButtons: true
  }
})`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'reverse',
  args: {
    reverse: true
  }
})`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const D=["Default","HideButtons","Reverse"];export{r as Default,o as HideButtons,s as Reverse,D as __namedExportsOrder,S as default};
