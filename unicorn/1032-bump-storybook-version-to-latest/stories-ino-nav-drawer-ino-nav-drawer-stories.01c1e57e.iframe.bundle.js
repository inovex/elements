(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1222],{"./src/stories/ino-nav-drawer/ino-nav-drawer.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AnchorRight:()=>AnchorRight,Default:()=>Default,Dismissible:()=>Dismissible,Mobile:()=>Mobile,Modal:()=>Modal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_nav_drawer_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts");const elements_namespaceObject=__webpack_require__.p+"static/media/elements.2227d5b8.svg";var injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ino_nav_drawer=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-nav-drawer/ino-nav-drawer.scss"),ino_nav_drawer_default=__webpack_require__.n(ino_nav_drawer),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ino_nav_drawer_default(),options);ino_nav_drawer_default()&&ino_nav_drawer_default().locals&&ino_nav_drawer_default().locals;const openChangeHandle=function(e){const el=e.target;"ino-nav-drawer"===el.tagName.toLowerCase()&&el.setAttribute("open",!!e.detail)},clickHandler=e=>{e.preventDefault(),e.stopPropagation();const el=e.target.parentElement;if(el.className.includes("toggle-nav")){const drawer=el.closest("ino-nav-drawer");drawer.open=!drawer.open}else if(el.className.includes("nav-drawer-modal"))el.open=!el.open;else if("ino-list-item"===el.tagName.toLowerCase()){const navItemNodes=el.closest("ino-nav-drawer").querySelectorAll("ino-list-item");return navItemNodes&&navItemNodes.forEach((link=>{link.activated=!1})),void(el.activated=!0)}},InoNavDrawerMeta={title:"Structure/ino-nav-drawer",component:"ino-nav-drawer",parameters:{actions:{handles:["openChange .customizable-drawer","click .toggle-nav","clickEl ino-nav-item"]}},decorators:[story=>((0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>(document.addEventListener("openChange",openChangeHandle),document.addEventListener("click",clickHandler),document.addEventListener("clickEl",clickHandler),()=>{document.removeEventListener("openChange",openChangeHandle),document.removeEventListener("click",clickHandler),document.removeEventListener("clickEl",clickHandler)}))),story())],render:args=>lit_html.dy`
    <div class="story-nav-drawer__default">
      <ino-nav-drawer
        ?open=${args.open}
        anchor="${args.anchor}"
        variant="${args.variant}"
        class="customizable-drawer"
      >
        <div slot="header">
          <ino-img
            slot="logo"
            src=${elements_namespaceObject}
            width="22"
            height="31"
            alt="inovex Elements Logo"
          ></ino-img>
          <p>inovex Elements</p>
        </div>
        <ino-list
          role="menubar"
          slot="content"
          aria-label=${args.a11yLabels?.content}
        >
          <ino-nav-item role="menuitem" text="Home" activated>
            <ino-icon icon="home"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="Discover">
            <ino-icon icon="discover"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="First Steps">
            <ino-icon icon="first_steps"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="Library">
            <ino-icon icon="library"></ino-icon>
          </ino-nav-item>
          <ino-nav-item role="menuitem" text="About Us">
            <ino-icon icon="employee"></ino-icon>
          </ino-nav-item>
        </ino-list>
        <ino-list
          role="menubar"
          slot="footer"
          aria-label=${args.a11yLabels?.footer}
        >
          <ino-nav-item role="menuitem" text="Contact">
            <ino-icon icon="message"></ino-icon>
          </ino-nav-item>
        </ino-list>

        <main slot="app" class="main-content">
          <ino-button fill="outline" dense class="toggle-nav"
            >${args.a11yLabels?.toggleBtn}</ino-button
          >
          <br />
          <br />
          Your App goes here 🤘
          <br /><br />
        </main>
      </ino-nav-drawer>
    </div>
  `,argTypes:{variant:{control:{type:"select",options:["docked","dismissible","modal","mobile"]}}},args:{open:!0,anchor:"left",variant:"docked",a11yLabels:{content:"Main Navigation",footer:"Footer Navigation",toggleBtn:"Toggle Navigation"}}},ino_nav_drawer_stories=InoNavDrawerMeta,Default=(0,StoryWrapper.Z)({...InoNavDrawerMeta}),AnchorRight=(0,StoryWrapper.Z)({...Default,docsFromProperty:"anchor",args:{anchor:"right"}}),Modal=(0,StoryWrapper.Z)({...Default,docsFromProperty:"variant",args:{variant:"modal",open:!1}}),Dismissible=(0,StoryWrapper.Z)({...Default,docsFromProperty:"variant",args:{variant:"dismissible"}}),Mobile=(0,StoryWrapper.Z)({...Default,docsFromProperty:"variant",args:{variant:"mobile",open:!1}});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoNavDrawerMeta\n})",...Default.parameters?.docs?.source}}},AnchorRight.parameters={...AnchorRight.parameters,docs:{...AnchorRight.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'anchor',\n  args: {\n    anchor: 'right'\n  }\n})",...AnchorRight.parameters?.docs?.source}}},Modal.parameters={...Modal.parameters,docs:{...Modal.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'variant',\n  args: {\n    variant: 'modal',\n    open: false\n  }\n})",...Modal.parameters?.docs?.source}}},Dismissible.parameters={...Dismissible.parameters,docs:{...Dismissible.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'variant',\n  args: {\n    variant: 'dismissible'\n  }\n})",...Dismissible.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'variant',\n  args: {\n    variant: 'mobile',\n    open: false\n  }\n})",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Default","AnchorRight","Modal","Dismissible","Mobile"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-nav-drawer/ino-nav-drawer.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,".story-nav-drawer__default,.story-nav-drawer__docked_anchor--right,.story-nav-drawer__dismissible{position:relative;height:700px;border:1px solid gray;border-radius:4px;overflow:hidden}.story-nav-drawer__default .main-content,.story-nav-drawer__docked_anchor--right .main-content,.story-nav-drawer__dismissible .main-content{box-sizing:border-box;overflow:auto;height:100%;padding:30px}.button__label{pointer-events:none}",""])}}]);
//# sourceMappingURL=stories-ino-nav-drawer-ino-nav-drawer-stories.01c1e57e.iframe.bundle.js.map