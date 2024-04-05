import{x as s}from"./lit-html-D-ZEPr28.js";import{I as f,g}from"./utils-ebStcoTl.js";import{S as v}from"./StoryWrapper-8ope1Itq.js";import"./elements-stencil-docs-A79BTi6O.js";const{useEffect:b}=__STORYBOOK_MODULE_PREVIEW_API__,I=f.filter(o=>!o.startsWith("_")).concat(["status_zukuenftige","status_abwesend","status_offboarding_laufend"]);function _(o){const n=document.createElement("ino-snackbar");navigator.clipboard.writeText(o).then(()=>{n.innerText=`Successfully copied "${o}" to your clipboard!`}).catch(()=>{n.innerText="An error occurred while copying the id to your clipboard!"}).finally(()=>{document.body.appendChild(n)})}const C=I.sort().filter(o=>o.length>=1),S=C.map(o=>s`
    <ino-chip
      id="icon-${o}"
      value="${o}"
      @chipClicked="${n=>_(n.detail)}"
    >
      <ino-icon class="chip-icon" slot="icon-leading" icon="${o}"></ino-icon>
      ${o}
    </ino-chip>
  `),T={title:"Graphic/ino-icon",component:"ino-icon",parameters:{actions:{handles:["clickEl .customizable-icon","valueChange .customizable-input"]}},decorators:[o=>(b(()=>{const n=function(t){if(t.target.tagName.toLowerCase()!=="ino-input")return;const y=t.target,r=t.detail,a=Array.from(document.getElementsByTagName("ino-chip"));a.filter(i=>!i.value.includes(r.toLowerCase())).map(i=>i.style.visibility="hidden"),a.filter(i=>i.value.includes(r.toLowerCase())).map(i=>i.style.visibility="visible"),y.value=r};return document.addEventListener("valueChange",n),()=>{document.removeEventListener("valueChange",n)}}),o())],render:o=>s`
    <ino-icon
      class="customizable-icon"
      clickable="${o.clickable}"
      color-secondary="${o.colorSecondary}"
      icon="${o.icon}"
      svg-title="${o.svgTitle}"
      src="${o.src}"
      style="--icon-width: 30px; --icon-height: 30px;"
    >
    </ino-icon>
  `,argTypes:{icon:{control:{type:"select"},options:g()}},args:{clickable:!0,colorSecondary:!1,icon:"info",svgTitle:"svg-Title",src:"scr-url"}},e=v({...T}),c=v({...e,render:()=>s`
    <div class="story-icon">
      <div class="flex-parent-center">
        <ino-input class="icon-search-input" placeholder="Find icon">
          <ino-icon slot="icon-leading" icon="search"></ino-icon>
        </ino-input>
        <h6>Click on the icon to copy the id to your clipboard.</h6>
        <div class="icon-collection">${S}</div>
      </div>
    </div>
  `});var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`Story({
  ...InoIconMeta
})`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,m;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <div class="story-icon">
      <div class="flex-parent-center">
        <ino-input class="icon-search-input" placeholder="Find icon">
          <ino-icon slot="icon-leading" icon="search"></ino-icon>
        </ino-input>
        <h6>Click on the icon to copy the id to your clipboard.</h6>
        <div class="icon-collection">\${iconChips}</div>
      </div>
    </div>
  \`
})`,...(m=(h=c.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const O=["Default","AllIcons"];export{c as AllIcons,e as Default,O as __namedExportsOrder,T as default};
