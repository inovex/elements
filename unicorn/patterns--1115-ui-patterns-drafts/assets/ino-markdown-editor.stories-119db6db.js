import{x as m}from"./lit-html-b5e645d2.js";import{S as c}from"./StoryWrapper-03bb9100.js";import"./elements-stencil-docs-98c6df11.js";const{useEffect:u}=__STORYBOOK_MODULE_PREVIEW_API__,r="editor-playground",l={title:"Input/ino-markdown-editor",component:"ino-markdown-editor",parameters:{actions:{handles:[]}},decorators:[e=>(u(()=>{const t=i=>{const s=document.getElementById(r);s.viewMode=i.detail};return document.addEventListener("viewModeChange",t),()=>{document.removeEventListener("viewModeChange",t)}}),e())],render:e=>m`
    <ino-markdown-editor
      id="${r}"
      initial-value="${e.initialValue}"
      view-mode="${e.viewMode}"
    ></ino-markdown-editor>
  `,args:{initialValue:"",viewMode:"preview"}},o=c({...l});var n,a,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`Story({
  ...InoMarkdownEditorMeta
})`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,l as default};
