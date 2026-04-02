import{b as s}from"./lit-html-IUDnlW1J.js";import{g as p,I as u}from"./utils-ebStcoTl.js";import{S as l}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:h}=__STORYBOOK_MODULE_PREVIEW_API__,m=u.filter(o=>!o.startsWith("_")).concat(["status_zukuenftige","status_abwesend","status_offboarding_laufend"]);function v(o){const n=document.createElement("ino-snackbar");navigator.clipboard.writeText(o).then(()=>{n.innerText=`Successfully copied "${o}" to your clipboard!`}).catch(()=>{n.innerText="An error occurred while copying the id to your clipboard!"}).finally(()=>{document.body.appendChild(n)})}const y=m.sort().filter(o=>o.length>=1),f=y.map(o=>s`
    <ino-chip id="icon-${o}" value="${o}" @chipClicked="${n=>v(n.detail)}">
      <ino-icon class="chip-icon" slot="icon-leading" icon="${o}"></ino-icon>
      ${o}
    </ino-chip>
  `),g={title:"Graphic/ino-icon",component:"ino-icon",parameters:{actions:{handles:["clickEl .customizable-icon","valueChange .customizable-input"]}},decorators:[o=>(h(()=>{const n=function(t){if(t.target.tagName.toLowerCase()!=="ino-input")return;const d=t.target,r=t.detail,a=Array.from(document.getElementsByTagName("ino-chip"));a.filter(i=>!i.value.includes(r.toLowerCase())).map(i=>i.style.visibility="hidden"),a.filter(i=>i.value.includes(r.toLowerCase())).map(i=>i.style.visibility="visible"),d.value=r};return document.addEventListener("valueChange",n),()=>{document.removeEventListener("valueChange",n)}}),o())],render:o=>s`
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
  `,argTypes:{icon:{control:{type:"select"},options:p()}},args:{clickable:!0,colorSecondary:!1,icon:"info",svgTitle:"svg-Title",src:"scr-url"}},e=l({...g}),c=l({...e,render:()=>s`
    <div class="story-icon">
      <div class="flex-parent-center">
        <ino-input class="icon-search-input" placeholder="Find icon">
          <ino-icon slot="icon-leading" icon="search"></ino-icon>
        </ino-input>
        <h6>Click on the icon to copy the id to your clipboard.</h6>
        <div class="icon-collection">${f}</div>
      </div>
    </div>
  `});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`Story({
  ...InoIconMeta
})`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
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
})`,...c.parameters?.docs?.source}}};const S=["Default","AllIcons"];export{c as AllIcons,e as Default,S as __namedExportsOrder,g as default};
