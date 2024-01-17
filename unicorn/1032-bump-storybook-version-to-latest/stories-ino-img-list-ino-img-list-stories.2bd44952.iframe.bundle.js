"use strict";(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[4750],{"./src/stories/ino-img-list/ino-img-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,EncloseLabel:()=>EncloseLabel,Masonry:()=>Masonry,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_img_list_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts");const beach_namespaceObject=__webpack_require__.p+"static/media/beach.1432d4b3.jpg",fjord_namespaceObject=__webpack_require__.p+"static/media/fjord.a789a6be.jpg",forrest_namespaceObject=__webpack_require__.p+"static/media/forrest.0452b993.jpg",liberty_namespaceObject=__webpack_require__.p+"static/media/liberty.ab8cbdf5.jpg",trondheim_namespaceObject=__webpack_require__.p+"static/media/trondheim.7a9953d8.jpg",waterfall_namespaceObject=__webpack_require__.p+"static/media/waterfall.a7a46e49.jpg",InoImgListMeta={title:"Graphic/ino-img-list",component:"ino-img-list",render:args=>lit_html.dy`
    <ino-img-list
      enclose-label="${args.encloseLabel}"
      masonry="${args.masonry}"
    >
      ${sampleImg} ${sampleImg2} ${sampleImg3} ${sampleImg4} ${sampleImg5}
      ${sampleImg6}
    </ino-img-list>
  `,args:{encloseLabel:!1,masonry:!1}},ino_img_list_stories=InoImgListMeta,Default=(0,StoryWrapper.Z)({...InoImgListMeta}),Masonry=(0,StoryWrapper.Z)({...InoImgListMeta,docsFromProperty:"masonry",args:{masonry:!0}}),EncloseLabel=(0,StoryWrapper.Z)({...InoImgListMeta,docsFromProperty:"encloseLabel",args:{encloseLabel:!0}}),sampleImg=lit_html.dy`
  <ino-img src=${beach_namespaceObject} alt="beach" label="Label" img-list-item></ino-img>
`,sampleImg2=lit_html.dy`
  <ino-img
    src=${fjord_namespaceObject}
    alt="waterfall"
    label="Label"
    img-list-item
  ></ino-img>
`,sampleImg3=lit_html.dy`
  <ino-img
    src=${forrest_namespaceObject}
    alt="trondheim"
    label="Label"
    img-list-item
  ></ino-img>
`,sampleImg4=lit_html.dy`
  <ino-img
    src=${liberty_namespaceObject}
    alt="forrest"
    label="Label"
    img-list-item
  ></ino-img>
`,sampleImg5=lit_html.dy`
  <ino-img
    src=${trondheim_namespaceObject}
    alt="fjord"
    label="Label"
    img-list-item
  ></ino-img>
`,sampleImg6=lit_html.dy`
  <ino-img
    src=${waterfall_namespaceObject}
    alt="liberty"
    label="Label"
    img-list-item
  ></ino-img>
`;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoImgListMeta\n})",...Default.parameters?.docs?.source}}},Masonry.parameters={...Masonry.parameters,docs:{...Masonry.parameters?.docs,source:{originalSource:"Story({\n  ...InoImgListMeta,\n  docsFromProperty: 'masonry',\n  args: {\n    masonry: true\n  }\n})",...Masonry.parameters?.docs?.source}}},EncloseLabel.parameters={...EncloseLabel.parameters,docs:{...EncloseLabel.parameters?.docs,source:{originalSource:"Story({\n  ...InoImgListMeta,\n  docsFromProperty: 'encloseLabel',\n  args: {\n    encloseLabel: true\n  }\n})",...EncloseLabel.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Masonry","EncloseLabel"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}}}]);
//# sourceMappingURL=stories-ino-img-list-ino-img-list-stories.2bd44952.iframe.bundle.js.map