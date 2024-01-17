(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[222],{"./src/stories/ino-popover/ino-popover.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Arrow:()=>Arrow,AttachToBody:()=>AttachToBody,ColorSchemes:()=>ColorSchemes,Controlled:()=>Controlled,Default:()=>Default,Delay:()=>Delay,Distance:()=>Distance,FollowCursor:()=>FollowCursor,Interactive:()=>Interactive,Placement:()=>Placement,Trigger:()=>Trigger,Visible:()=>Visible,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_popover_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ino_popover=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-popover/ino-popover.scss"),ino_popover_default=__webpack_require__.n(ino_popover),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ino_popover_default(),options);ino_popover_default()&&ino_popover_default().locals&&ino_popover_default().locals;let POPOVER_COUNTER=1;const InoPopoverMeta={title:"Notification/ino-popover",component:"ino-popover",parameters:{actions:{handles:["visibleChange ino-popover"]},docs:{story:{height:"200px"}}},argTypes:{placement:{control:{type:"select"},options:["top","right","bottom","left"]},trigger:{control:{type:"select"},options:["mouseenter","focus","click","mouseenter focus","mouseenter click","focus click","mouseenter focus click"]},colorScheme:{control:{type:"select"},options:["light","dark","primary"]},delay:{control:{type:"object"}},followCursor:{control:{type:"radio"},options:[!0,!1,"initial","horizontal","vertical"]}},render:args=>{const id="popover-"+POPOVER_COUNTER++;return lit_html.dy`
      <ino-button id="${id}" class="${args.placementClass}">Popover</ino-button>
      <ino-popover
        color-scheme="${args.colorScheme}"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${id}"
        interactive="${args.interactive}"
        .followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${"number"==typeof args.delay?args.delay:[args.delay]}
        arrow="${args.arrow}"
      >
        <div
          style="display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem"
        >
          <p>Popovers are complex tooltips.</p>
          <ino-chip>
            Able to contain other HTML-Elements?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `},args:{controlled:!1,distance:15,for:"popover-target",interactive:!1,placement:"top",trigger:"mouseenter",colorScheme:"light",visible:!1,hideOnEsc:!1,hideOnBlur:!1,delay:0,arrow:!1,placementClass:"",headerText:""}},ino_popover_stories=InoPopoverMeta,Default=(0,StoryWrapper.Z)({...InoPopoverMeta}),Arrow=(0,StoryWrapper.Z)({...Default,docsFromProperty:"arrow",args:{arrow:!0}}),Placement=(0,StoryWrapper.Z)({...Default,docsFromProperty:"placement",args:{placement:"right",placementClass:"styled-placement"}}),AttachToBody=(0,StoryWrapper.Z)({...Default,docsFromProperty:"attachToBody",args:{attachToBody:!0}}),Distance=(0,StoryWrapper.Z)({...Default,docsFromProperty:"distance",args:{distance:30}}),ColorSchemes=(0,StoryWrapper.Z)({...Default,docsFromProperty:"colorScheme",render:args=>{const content=lit_html.dy`<p style="padding: 0.5rem">
      Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet
      ipsum do.
    </p>`;return lit_html.dy`
      <ino-button id="${"popover-light"}">Light</ino-button>
      <ino-popover
        color-scheme="light"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${"popover-light"}"
        interactive="${args.interactive}"
        followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${"number"==typeof args.delay?args.delay:[args.delay]}
        arrow="${args.arrow}"
      >
        ${content}
      </ino-popover>
      <ino-button id="${"popover-dark"}">Dark</ino-button>
      <ino-popover
        color-scheme="dark"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${"popover-dark"}"
        interactive="${args.interactive}"
        followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${"number"==typeof args.delay?args.delay:[args.delay]}
        arrow="${args.arrow}"
      >
        ${content}
      </ino-popover>
      <ino-button id="${"popover-primary"}">Primary</ino-button>
      <ino-popover
        color-scheme="primary"
        controlled="${args.controlled}"
        distance="${args.distance}"
        for="${"popover-primary"}"
        interactive="${args.interactive}"
        followCursor="${args.followCursor}"
        placement="${args.placement}"
        trigger="${args.trigger}"
        visible="${args.visible}"
        hide-on-blur="${args.hideOnBlur}"
        hide-on-esc="${args.hideOnEsc}"
        delay=${"number"==typeof args.delay?args.delay:[args.delay]}
        arrow="${args.arrow}"
      >
        ${content}
      </ino-popover>
    `}}),Trigger=(0,StoryWrapper.Z)({...Default,docsFromProperty:"trigger",args:{trigger:"click"}}),FollowCursor=(0,StoryWrapper.Z)({...Default,docsFromProperty:"followCursor",args:{followCursor:"horizontal"}}),Interactive=(0,StoryWrapper.Z)({...Default,docsFromProperty:"interactive",render:()=>lit_html.dy`
    <ino-popover
      trigger="click"
      for="popover-interactive-target"
      distance="15"
      interactive
      placement="top"
    >
      <div class="interactive-popover">
        <p>I'm interactive. You can click me without closing this popover!</p>
        <ino-button>Button not closing the popover</ino-button>
      </div>
    </ino-popover>
    <ino-button
      class="placement-button big-space"
      id="popover-interactive-target"
      >Interactive Content
    </ino-button>
  `,args:{interactive:!0}}),Controlled=(0,StoryWrapper.Z)({...Default,docsFromProperty:"controlled",render:()=>lit_html.dy`
      <ino-popover
        id="controlled-popover"
        placement="top"
        controlled="true"
        trigger="click"
        visible="false"
        distance="15"
        @visibleChanged="${e=>{e.target?.setAttribute("visible",e.detail),document.querySelector("#controlled-checkbox").checked=e.detail}}"
      >
        <ino-checkbox id="controlled-checkbox" slot="popover-trigger">
          Uncheck to hide / check to show
        </ino-checkbox>
        <div style="padding: 0.5rem">
          <ino-chip>
            Programmatically shown?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `,args:{controlled:!0}}),Visible=(0,StoryWrapper.Z)({...Default,docsFromProperty:"visible",args:{visible:!0}}),Delay=(0,StoryWrapper.Z)({...Default,docsFromProperty:"delay",args:{delay:[500,200]}});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoPopoverMeta\n})",...Default.parameters?.docs?.source}}},Arrow.parameters={...Arrow.parameters,docs:{...Arrow.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'arrow',\n  args: {\n    arrow: true\n  }\n})",...Arrow.parameters?.docs?.source}}},Placement.parameters={...Placement.parameters,docs:{...Placement.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'placement',\n  args: {\n    placement: 'right',\n    placementClass: 'styled-placement'\n  }\n})",...Placement.parameters?.docs?.source}}},AttachToBody.parameters={...AttachToBody.parameters,docs:{...AttachToBody.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'attachToBody',\n  args: {\n    attachToBody: true\n  }\n})",...AttachToBody.parameters?.docs?.source}}},Distance.parameters={...Distance.parameters,docs:{...Distance.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'distance',\n  args: {\n    distance: 30\n  }\n})",...Distance.parameters?.docs?.source}}},ColorSchemes.parameters={...ColorSchemes.parameters,docs:{...ColorSchemes.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'colorScheme\',\n  render: args => {\n    const idLight = \'popover-light\';\n    const idDark = \'popover-dark\';\n    const idPrimary = \'popover-primary\';\n    const content = html`<p style="padding: 0.5rem">\n      Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet\n      ipsum do.\n    </p>`;\n    return html`\n      <ino-button id="${idLight}">Light</ino-button>\n      <ino-popover\n        color-scheme="light"\n        controlled="${args.controlled}"\n        distance="${args.distance}"\n        for="${idLight}"\n        interactive="${args.interactive}"\n        followCursor="${args.followCursor}"\n        placement="${args.placement}"\n        trigger="${args.trigger}"\n        visible="${args.visible}"\n        hide-on-blur="${args.hideOnBlur}"\n        hide-on-esc="${args.hideOnEsc}"\n        delay=${typeof args.delay === \'number\' ? args.delay : [args.delay]}\n        arrow="${args.arrow}"\n      >\n        ${content}\n      </ino-popover>\n      <ino-button id="${idDark}">Dark</ino-button>\n      <ino-popover\n        color-scheme="dark"\n        controlled="${args.controlled}"\n        distance="${args.distance}"\n        for="${idDark}"\n        interactive="${args.interactive}"\n        followCursor="${args.followCursor}"\n        placement="${args.placement}"\n        trigger="${args.trigger}"\n        visible="${args.visible}"\n        hide-on-blur="${args.hideOnBlur}"\n        hide-on-esc="${args.hideOnEsc}"\n        delay=${typeof args.delay === \'number\' ? args.delay : [args.delay]}\n        arrow="${args.arrow}"\n      >\n        ${content}\n      </ino-popover>\n      <ino-button id="${idPrimary}">Primary</ino-button>\n      <ino-popover\n        color-scheme="primary"\n        controlled="${args.controlled}"\n        distance="${args.distance}"\n        for="${idPrimary}"\n        interactive="${args.interactive}"\n        followCursor="${args.followCursor}"\n        placement="${args.placement}"\n        trigger="${args.trigger}"\n        visible="${args.visible}"\n        hide-on-blur="${args.hideOnBlur}"\n        hide-on-esc="${args.hideOnEsc}"\n        delay=${typeof args.delay === \'number\' ? args.delay : [args.delay]}\n        arrow="${args.arrow}"\n      >\n        ${content}\n      </ino-popover>\n    `;\n  }\n})',...ColorSchemes.parameters?.docs?.source}}},Trigger.parameters={...Trigger.parameters,docs:{...Trigger.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'trigger',\n  args: {\n    trigger: 'click'\n  }\n})",...Trigger.parameters?.docs?.source}}},FollowCursor.parameters={...FollowCursor.parameters,docs:{...FollowCursor.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'followCursor',\n  args: {\n    followCursor: 'horizontal'\n  }\n})",...FollowCursor.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'interactive\',\n  render: () => html`\n    <ino-popover\n      trigger="click"\n      for="popover-interactive-target"\n      distance="15"\n      interactive\n      placement="top"\n    >\n      <div class="interactive-popover">\n        <p>I\'m interactive. You can click me without closing this popover!</p>\n        <ino-button>Button not closing the popover</ino-button>\n      </div>\n    </ino-popover>\n    <ino-button\n      class="placement-button big-space"\n      id="popover-interactive-target"\n      >Interactive Content\n    </ino-button>\n  `,\n  args: {\n    interactive: true\n  }\n})',...Interactive.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  docsFromProperty: \'controlled\',\n  render: () => {\n    const eventHandler = (e: any) => {\n      e.target?.setAttribute(\'visible\', e.detail);\n      (document.querySelector(\'#controlled-checkbox\') as HTMLInputElement).checked = e.detail;\n    };\n    return html`\n      <ino-popover\n        id="controlled-popover"\n        placement="top"\n        controlled="true"\n        trigger="click"\n        visible="false"\n        distance="15"\n        @visibleChanged="${eventHandler}"\n      >\n        <ino-checkbox id="controlled-checkbox" slot="popover-trigger">\n          Uncheck to hide / check to show\n        </ino-checkbox>\n        <div style="padding: 0.5rem">\n          <ino-chip>\n            Programmatically shown?\n            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>\n          </ino-chip>\n        </div>\n      </ino-popover>\n    `;\n  },\n  args: {\n    controlled: true\n  }\n})',...Controlled.parameters?.docs?.source}}},Visible.parameters={...Visible.parameters,docs:{...Visible.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'visible',\n  args: {\n    visible: true\n  }\n})",...Visible.parameters?.docs?.source}}},Delay.parameters={...Delay.parameters,docs:{...Delay.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'delay',\n  args: {\n    delay: [500, 200]\n  }\n})",...Delay.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Arrow","Placement","AttachToBody","Distance","ColorSchemes","Trigger","FollowCursor","Interactive","Controlled","Visible","Delay"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-popover/ino-popover.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,".sbdocs.sbdocs-content:has(#anchor--notification-ino-popover--default) [scale]{width:100%;display:flex;justify-content:center}.sbdocs.sbdocs-content:has(#anchor--notification-ino-popover--default) [scale]:has(ino-button.styled-placement){align-items:center;justify-content:flex-start}.sbdocs.sbdocs-content:has(#anchor--notification-ino-popover--default) [scale]:has(ino-button.big-space){height:250px}.sbdocs.sbdocs-content:has(#anchor--notification-ino-popover--default) [scale] .innerZoomElementWrapper>div>div{overflow:unset}.sbdocs.sbdocs-content:has(#anchor--notification-ino-popover--default) [scale] .innerZoomElementWrapper>div>div #root-inner{display:flex;gap:5px}",""])}}]);
//# sourceMappingURL=stories-ino-popover-ino-popover-stories.0ad99f52.iframe.bundle.js.map