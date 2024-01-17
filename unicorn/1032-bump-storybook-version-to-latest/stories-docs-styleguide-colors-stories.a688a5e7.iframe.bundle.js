(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[1353],{"./src/stories/docs/styleguide/colors.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Colors:()=>Colors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>colors_stories});var lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/docs/styleguide/styles.scss"),styles_default=__webpack_require__.n(styles),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_default(),options);styles_default()&&styles_default().locals&&styles_default().locals;const colors_stories={title:"Docs/Styleguide/Colors"},Colors=()=>lit_html.dy`
  These shades will represent the brand in graphical elements, texts, syntax,
  backgrounds and ui elements.
  <h2>Basics</h2>

  <div class="color-wrapper">
    <div
      class="color-rect border"
      style="background-color: #FFF; border: 1px solid black"
    ></div>
    <div class="color-hex" style="color: black">
      #FFF, --inovex-elements-white
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #000"></div>
    <div class="color-hex" style="color: #000">
      #000, --inovex-elements-black
    </div>
  </div>

  <div class="color-wrapper">
    <div
      class="color-rect transparent border"
      style="background-color: rgba(255, 255, 255, 0);"
    ></div>
    <div class="color-hex" style="color: black">
      rgba(255, 255, 255, 0), --inovex-elements-transparent
    </div>
  </div>

  <h2>Neutrals</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #F4F4F7"></div>
    <div class="color-hex" style="color: black">
      #F4F4F7, --inovex-elements-n-1
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #DFDEE6"></div>
    <div class="color-hex" style="color: black">
      #DFDEE6, --inovex-elements-n-2
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #CAC8D5"></div>
    <div class="color-hex" style="color: #CAC8D5">
      #CAC8D5, --inovex-elements-n-3
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #B6B4C4"></div>
    <div class="color-hex" style="color: #B6B4C4">
      #B6B4C4, --inovex-elements-n-4
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #A3A0B3"></div>
    <div class="color-hex" style="color: #A3A0B3">
      #A3A0B3, --inovex-elements-n-5
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #908DA2"></div>
    <div class="color-hex" style="color: #908DA2">
      #908DA2, --inovex-elements-n-6
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #7E7B91"></div>
    <div class="color-hex" style="color: #7E7B91">
      #7E7B91, --inovex-elements-n-7
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #6D6A80"></div>
    <div class="color-hex" style="color: #6D6A80">
      #6D6A80, --inovex-elements-n-8
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #5D5B69"></div>
    <div class="color-hex" style="color: #5D5B69">
      #5D5B69, --inovex-elements-n-9
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #4C4B52"></div>
    <div class="color-hex" style="color: #4C4B52">
      #4C4B52, --inovex-elements-n-10
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #39383C"></div>
    <div class="color-hex" style="color: #39383C">
      #39383C, --inovex-elements-n-11
    </div>
  </div>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #191919"></div>
    <div class="color-hex" style="color: #191919">
      #191919, --inovex-elements-n-12
    </div>
  </div>

  <h2>Primary</h2>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2C02FF"></div>
    <div class="color-hex" style="color: #2C02FF">
      #2C02FF, --inovex-elements-primary
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2D5DFF4D"></div>
    <div class="color-hex" style="color: #2D5DFF4D">
      #2D5DFF4D, --inovex-elements-primary-focus
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #F6FAFe"></div>
    <div class="color-hex" style="color: black">
      #F6FAFE, --inovex-elements-p-1
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #E2ECFF"></div>
    <div class="color-hex" style="color: black">
      #E2ECFF, --inovex-elements-p-2
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #BECCFF"></div>
    <div class="color-hex" style="color: #BECCFF">
      #BECCFF, --inovex-elements-p-3
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #8AA1FF"></div>
    <div class="color-hex" style="color: #8AA1FF">
      #8AA1FF, --inovex-elements-p-4
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #4655FF"></div>
    <div class="color-hex" style="color: #4655FF">
      #4655FF, --inovex-elements-p-5
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2D02FF"></div>
    <div class="color-hex" style="color: #2D02FF">
      #2D02FF, --inovex-elements-p-6
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #1801E1"></div>
    <div class="color-hex" style="color: #1801E1">
      #1801E1, --inovex-elements-p-7
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #0801C4"></div>
    <div class="color-hex" style="color: #0801C4">
      #0801C4, --inovex-elements-p-8
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #0106A6"></div>
    <div class="color-hex" style="color: #0106A6">
      #0106A6, --inovex-elements-p-9
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #000E88"></div>
    <div class="color-hex" style="color: #000E88">
      #000E88, --inovex-elements-p-10
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #00126A"></div>
    <div class="color-hex" style="color: #00126A">
      #00126A, --inovex-elements-p-11
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #00124D"></div>
    <div class="color-hex" style="color: #00124D">
      #00124D, --inovex-elements-p-12
    </div>
  </div>

  <h2>Alert colors</h2>

  <h3>Informational</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #2D5DFF"></div>
    <div class="color-hex" style="color: #2D5DFF">
      #2D5DFF, --inovex-elements-informational
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #D6E0FF"></div>
    <div class="color-hex" style="color: black">
      #D6E0FF, --inovex-elements-informational-light
    </div>
  </div>

  <h3>Success</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #6CF070"></div>
    <div class="color-hex" style="color: #6CF070">
      #6CF070, --inovex-elements-success
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #D7FAD8"></div>
    <div class="color-hex" style="color: black">
      #D7FAD8, --inovex-elements-success-light
    </div>
  </div>

  <h3>Error</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FF2E54"></div>
    <div class="color-hex" style="color: #FF2E54">
      #FF2E54, --inovex-elements-error
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FFD6DE"></div>
    <div class="color-hex" style="color: black">
      #FFD6DE, --inovex-elements-error-light
    </div>
  </div>

  <h3>Warning</h3>
  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FFA42E"></div>
    <div class="color-hex" style="color: #FFA42E">
      #FFA42E, --inovex-elements-warning
    </div>
  </div>

  <div class="color-wrapper">
    <div class="color-rect" style="background-color: #FFEED6"></div>
    <div class="color-hex" style="color: black">
      #FFEED6, --inovex-elements-warning-light
    </div>
  </div>
`;Colors.parameters={...Colors.parameters,docs:{...Colors.parameters?.docs,source:{originalSource:'() => html`\n  These shades will represent the brand in graphical elements, texts, syntax,\n  backgrounds and ui elements.\n  <h2>Basics</h2>\n\n  <div class="color-wrapper">\n    <div\n      class="color-rect border"\n      style="background-color: #FFF; border: 1px solid black"\n    ></div>\n    <div class="color-hex" style="color: black">\n      #FFF, --inovex-elements-white\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #000"></div>\n    <div class="color-hex" style="color: #000">\n      #000, --inovex-elements-black\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div\n      class="color-rect transparent border"\n      style="background-color: rgba(255, 255, 255, 0);"\n    ></div>\n    <div class="color-hex" style="color: black">\n      rgba(255, 255, 255, 0), --inovex-elements-transparent\n    </div>\n  </div>\n\n  <h2>Neutrals</h2>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #F4F4F7"></div>\n    <div class="color-hex" style="color: black">\n      #F4F4F7, --inovex-elements-n-1\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #DFDEE6"></div>\n    <div class="color-hex" style="color: black">\n      #DFDEE6, --inovex-elements-n-2\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #CAC8D5"></div>\n    <div class="color-hex" style="color: #CAC8D5">\n      #CAC8D5, --inovex-elements-n-3\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #B6B4C4"></div>\n    <div class="color-hex" style="color: #B6B4C4">\n      #B6B4C4, --inovex-elements-n-4\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #A3A0B3"></div>\n    <div class="color-hex" style="color: #A3A0B3">\n      #A3A0B3, --inovex-elements-n-5\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #908DA2"></div>\n    <div class="color-hex" style="color: #908DA2">\n      #908DA2, --inovex-elements-n-6\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #7E7B91"></div>\n    <div class="color-hex" style="color: #7E7B91">\n      #7E7B91, --inovex-elements-n-7\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #6D6A80"></div>\n    <div class="color-hex" style="color: #6D6A80">\n      #6D6A80, --inovex-elements-n-8\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #5D5B69"></div>\n    <div class="color-hex" style="color: #5D5B69">\n      #5D5B69, --inovex-elements-n-9\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #4C4B52"></div>\n    <div class="color-hex" style="color: #4C4B52">\n      #4C4B52, --inovex-elements-n-10\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #39383C"></div>\n    <div class="color-hex" style="color: #39383C">\n      #39383C, --inovex-elements-n-11\n    </div>\n  </div>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #191919"></div>\n    <div class="color-hex" style="color: #191919">\n      #191919, --inovex-elements-n-12\n    </div>\n  </div>\n\n  <h2>Primary</h2>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #2C02FF"></div>\n    <div class="color-hex" style="color: #2C02FF">\n      #2C02FF, --inovex-elements-primary\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #2D5DFF4D"></div>\n    <div class="color-hex" style="color: #2D5DFF4D">\n      #2D5DFF4D, --inovex-elements-primary-focus\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #F6FAFe"></div>\n    <div class="color-hex" style="color: black">\n      #F6FAFE, --inovex-elements-p-1\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #E2ECFF"></div>\n    <div class="color-hex" style="color: black">\n      #E2ECFF, --inovex-elements-p-2\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #BECCFF"></div>\n    <div class="color-hex" style="color: #BECCFF">\n      #BECCFF, --inovex-elements-p-3\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #8AA1FF"></div>\n    <div class="color-hex" style="color: #8AA1FF">\n      #8AA1FF, --inovex-elements-p-4\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #4655FF"></div>\n    <div class="color-hex" style="color: #4655FF">\n      #4655FF, --inovex-elements-p-5\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #2D02FF"></div>\n    <div class="color-hex" style="color: #2D02FF">\n      #2D02FF, --inovex-elements-p-6\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #1801E1"></div>\n    <div class="color-hex" style="color: #1801E1">\n      #1801E1, --inovex-elements-p-7\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #0801C4"></div>\n    <div class="color-hex" style="color: #0801C4">\n      #0801C4, --inovex-elements-p-8\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #0106A6"></div>\n    <div class="color-hex" style="color: #0106A6">\n      #0106A6, --inovex-elements-p-9\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #000E88"></div>\n    <div class="color-hex" style="color: #000E88">\n      #000E88, --inovex-elements-p-10\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #00126A"></div>\n    <div class="color-hex" style="color: #00126A">\n      #00126A, --inovex-elements-p-11\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #00124D"></div>\n    <div class="color-hex" style="color: #00124D">\n      #00124D, --inovex-elements-p-12\n    </div>\n  </div>\n\n  <h2>Alert colors</h2>\n\n  <h3>Informational</h3>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #2D5DFF"></div>\n    <div class="color-hex" style="color: #2D5DFF">\n      #2D5DFF, --inovex-elements-informational\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #D6E0FF"></div>\n    <div class="color-hex" style="color: black">\n      #D6E0FF, --inovex-elements-informational-light\n    </div>\n  </div>\n\n  <h3>Success</h3>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #6CF070"></div>\n    <div class="color-hex" style="color: #6CF070">\n      #6CF070, --inovex-elements-success\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #D7FAD8"></div>\n    <div class="color-hex" style="color: black">\n      #D7FAD8, --inovex-elements-success-light\n    </div>\n  </div>\n\n  <h3>Error</h3>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #FF2E54"></div>\n    <div class="color-hex" style="color: #FF2E54">\n      #FF2E54, --inovex-elements-error\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #FFD6DE"></div>\n    <div class="color-hex" style="color: black">\n      #FFD6DE, --inovex-elements-error-light\n    </div>\n  </div>\n\n  <h3>Warning</h3>\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #FFA42E"></div>\n    <div class="color-hex" style="color: #FFA42E">\n      #FFA42E, --inovex-elements-warning\n    </div>\n  </div>\n\n  <div class="color-wrapper">\n    <div class="color-rect" style="background-color: #FFEED6"></div>\n    <div class="color-hex" style="color: black">\n      #FFEED6, --inovex-elements-warning-light\n    </div>\n  </div>\n`',...Colors.parameters?.docs?.source}}};const __namedExportsOrder=["Colors"]},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/docs/styleguide/styles.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,'html{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.color-wrapper{margin-bottom:20px;display:flex;flex-direction:row;position:relative;z-index:0}.color-rect{height:48px;width:48px}.transparent{position:relative;border:1px solid #000}.transparent::after{position:absolute;content:"";inset:8px 8px -8px -8px;background-color:#b6b4c4;z-index:-1}.border{box-sizing:border-box}.color-hex{display:flex;justify-content:center;flex-direction:column;margin-left:10px}.typo-box{display:flex;gap:100px}.typo-box h2{border-bottom:unset}.typo-box h6{color:unset}.typo-box .typo-description{width:200px;text-align:right}.typo-box .no-top-margin{margin-top:0}',""])}}]);
//# sourceMappingURL=stories-docs-styleguide-colors-stories.a688a5e7.iframe.bundle.js.map