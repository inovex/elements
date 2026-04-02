import{b as d}from"./lit-html-IUDnlW1J.js";import{S as i}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:s}=__STORYBOOK_MODULE_PREVIEW_API__,r="editor-playground",m={title:"Input/ino-markdown-editor",component:"ino-markdown-editor",parameters:{actions:{handles:[]}},decorators:[e=>(s(()=>{const t=n=>{const a=document.getElementById(r);a.viewMode=n.detail};return document.addEventListener("viewModeChange",t),()=>{document.removeEventListener("viewModeChange",t)}}),e())],render:e=>d`
    <ino-markdown-editor
      id="${r}"
      initial-value="${e.initialValue}"
      view-mode="${e.viewMode}"
    ></ino-markdown-editor>
  `,args:{initialValue:"",viewMode:"preview"}},o=i({...m});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoMarkdownEditorMeta
})`,...o.parameters?.docs?.source}}};const p=["Default"];export{o as Default,p as __namedExportsOrder,m as default};
