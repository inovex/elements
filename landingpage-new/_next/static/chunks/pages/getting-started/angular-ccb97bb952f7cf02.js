(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{2235:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/getting-started/angular",function(){return __webpack_require__(3698)}])},313:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var Frameworks,Frameworks1;__webpack_require__.d(__webpack_exports__,{$:function(){return Frameworks}}),(Frameworks1=Frameworks||(Frameworks={})).REACT="react",Frameworks1.ANGULAR="angular",Frameworks1.VUE="vue",Frameworks1.JS="js"},6201:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return layout}});var jsx_runtime=__webpack_require__(5893),layout_module=__webpack_require__(1071),layout_module_default=__webpack_require__.n(layout_module);__webpack_require__(7294);var head=__webpack_require__(9008),head_default=__webpack_require__.n(head);let Page=param=>{let{children,title=""}=param;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(head_default(),{children:(0,jsx_runtime.jsx)("title",{children:"".concat(Array.isArray(title)?title.join(" ".concat("•"," ")):title," ").concat("•"," inovex-elements")})}),children]})};var elementsWrapper=__webpack_require__(7332),router=__webpack_require__(1163),frameworks=__webpack_require__(313);let NameByFramework={[frameworks.$.REACT]:"React",[frameworks.$.ANGULAR]:"Angular",[frameworks.$.VUE]:"Vue",[frameworks.$.JS]:"JavaScript"},GettingStarted=param=>{let{children,framework,sandboxUrl}=param,{push}=(0,router.useRouter)(),frameworkName=NameByFramework[framework];return(0,jsx_runtime.jsxs)(Page,{title:["Getting Started",frameworkName],children:[(0,jsx_runtime.jsx)("div",{className:layout_module_default().segmentGroup,children:(0,jsx_runtime.jsx)(elementsWrapper.K_,{id:"segment-grp",value:framework,onValueChange:value=>push(value.detail),children:Object.values(frameworks.$).map(framework=>(0,jsx_runtime.jsx)(elementsWrapper.Hh,{value:framework,children:NameByFramework[framework]},framework))})}),(0,jsx_runtime.jsxs)("div",{className:layout_module_default().container,children:[children,(0,jsx_runtime.jsx)("h1",{children:"Looking for more resources?"}),(0,jsx_runtime.jsx)("p",{className:"title-s",children:"Make sure to check out the example projects"}),(0,jsx_runtime.jsx)("iframe",{src:sandboxUrl,className:layout_module_default().sandbox})]})]})};var layout=GettingStarted},3698:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return angular}});var jsx_runtime=__webpack_require__(5893);__webpack_require__(7294);var lib=__webpack_require__(1151),components_esm=__webpack_require__(9794);let chCodeConfig={staticMediaQuery:"not screen, (max-width: 768px)",autoImport:!1,theme:{name:"github-light",colors:{focusBorder:"#0969da",foreground:"#24292f",descriptionForeground:"#57606a",errorForeground:"#cf222e","textLink.foreground":"#0969da","textLink.activeForeground":"#0969da","textBlockQuote.background":"#f6f8fa","textBlockQuote.border":"#d0d7de","textCodeBlock.background":"#afb8c133","textPreformat.foreground":"#57606a","textSeparator.foreground":"#d8dee4","button.background":"#2da44e","button.foreground":"#ffffff","button.hoverBackground":"#2c974b","button.secondaryBackground":"#ebecf0","button.secondaryForeground":"#24292f","button.secondaryHoverBackground":"#f3f4f6","checkbox.background":"#f6f8fa","checkbox.border":"#d0d7de","dropdown.background":"#ffffff","dropdown.border":"#d0d7de","dropdown.foreground":"#24292f","dropdown.listBackground":"#ffffff","input.background":"#ffffff","input.border":"#d0d7de","input.foreground":"#24292f","input.placeholderForeground":"#6e7781","badge.foreground":"#ffffff","badge.background":"#0969da","progressBar.background":"#0969da","titleBar.activeForeground":"#57606a","titleBar.activeBackground":"#ffffff","titleBar.inactiveForeground":"#57606a","titleBar.inactiveBackground":"#f6f8fa","titleBar.border":"#d0d7de","activityBar.foreground":"#24292f","activityBar.inactiveForeground":"#57606a","activityBar.background":"#ffffff","activityBarBadge.foreground":"#ffffff","activityBarBadge.background":"#0969da","activityBar.activeBorder":"#fd8c73","activityBar.border":"#d0d7de","sideBar.foreground":"#24292f","sideBar.background":"#f6f8fa","sideBar.border":"#d0d7de","sideBarTitle.foreground":"#24292f","sideBarSectionHeader.foreground":"#24292f","sideBarSectionHeader.background":"#f6f8fa","sideBarSectionHeader.border":"#d0d7de","list.hoverForeground":"#24292f","list.inactiveSelectionForeground":"#24292f","list.activeSelectionForeground":"#24292f","list.hoverBackground":"#eaeef280","list.inactiveSelectionBackground":"#afb8c133","list.activeSelectionBackground":"#afb8c133","list.focusForeground":"#24292f","list.focusBackground":"#ddf4ff","list.inactiveFocusBackground":"#ddf4ff","list.highlightForeground":"#0969da","tree.indentGuidesStroke":"#d8dee4","notificationCenterHeader.foreground":"#57606a","notificationCenterHeader.background":"#f6f8fa","notifications.foreground":"#24292f","notifications.background":"#ffffff","notifications.border":"#d0d7de","notificationsErrorIcon.foreground":"#cf222e","notificationsWarningIcon.foreground":"#9a6700","notificationsInfoIcon.foreground":"#0969da","pickerGroup.border":"#d0d7de","pickerGroup.foreground":"#57606a","quickInput.background":"#ffffff","quickInput.foreground":"#24292f","statusBar.foreground":"#57606a","statusBar.background":"#ffffff","statusBar.border":"#d0d7de","statusBar.noFolderBackground":"#ffffff","statusBar.debuggingBackground":"#cf222e","statusBar.debuggingForeground":"#ffffff","statusBarItem.prominentBackground":"#f6f8fa","editorGroupHeader.tabsBackground":"#f6f8fa","editorGroupHeader.tabsBorder":"#d0d7de","editorGroup.border":"#d0d7de","tab.activeForeground":"#24292f","tab.inactiveForeground":"#57606a","tab.inactiveBackground":"#f6f8fa","tab.activeBackground":"#ffffff","tab.hoverBackground":"#ffffff","tab.unfocusedHoverBackground":"#eaeef280","tab.border":"#d0d7de","tab.unfocusedActiveBorderTop":"#d0d7de","tab.activeBorder":"#ffffff","tab.unfocusedActiveBorder":"#ffffff","tab.activeBorderTop":"#fd8c73","breadcrumb.foreground":"#57606a","breadcrumb.focusForeground":"#24292f","breadcrumb.activeSelectionForeground":"#57606a","breadcrumbPicker.background":"#ffffff","editor.foreground":"#24292f","editor.background":"#ffffff","editorWidget.background":"#ffffff","editor.foldBackground":"#6e77811a","editor.lineHighlightBackground":"#eaeef280","editorLineNumber.foreground":"#57606a","editorLineNumber.activeForeground":"#24292f","editorIndentGuide.background":"#d8dee4","editorIndentGuide.activeBackground":"#d0d7de","editorWhitespace.foreground":"#6e7781","editorCursor.foreground":"#0969da","editor.findMatchBackground":"#bf8700","editor.findMatchHighlightBackground":"#fae17d80","editor.linkedEditingBackground":"#0969da12","editor.inactiveSelectionBackground":"#0969da12","editor.selectionBackground":"#0969da33","editor.selectionHighlightBackground":"#4ac26b40","editor.wordHighlightBackground":"#eaeef280","editor.wordHighlightBorder":"#afb8c199","editor.wordHighlightStrongBackground":"#afb8c14d","editor.wordHighlightStrongBorder":"#afb8c199","editorBracketMatch.background":"#4ac26b40","editorBracketMatch.border":"#4ac26b99","editorGutter.modifiedBackground":"#d4a72c66","editorGutter.addedBackground":"#4ac26b66","editorGutter.deletedBackground":"#ff818266","diffEditor.insertedTextBackground":"#dafbe1","diffEditor.removedTextBackground":"#ffebe9","scrollbar.shadow":"#6e778133","scrollbarSlider.background":"#8c959f33","scrollbarSlider.hoverBackground":"#8c959f45","scrollbarSlider.activeBackground":"#8c959f87","editorOverviewRuler.border":"#ffffff","panel.background":"#f6f8fa","panel.border":"#d0d7de","panelTitle.activeBorder":"#fd8c73","panelTitle.activeForeground":"#24292f","panelTitle.inactiveForeground":"#57606a","panelInput.border":"#d0d7de","terminal.foreground":"#57606a","terminal.ansiBlack":"#24292f","terminal.ansiRed":"#cf222e","terminal.ansiGreen":"#116329","terminal.ansiYellow":"#4d2d00","terminal.ansiBlue":"#0969da","terminal.ansiMagenta":"#8250df","terminal.ansiCyan":"#1b7c83","terminal.ansiWhite":"#6e7781","terminal.ansiBrightBlack":"#57606a","terminal.ansiBrightRed":"#a40e26","terminal.ansiBrightGreen":"#1a7f37","terminal.ansiBrightYellow":"#633c01","terminal.ansiBrightBlue":"#218bff","terminal.ansiBrightMagenta":"#a475f9","terminal.ansiBrightCyan":"#3192aa","terminal.ansiBrightWhite":"#8c959f","gitDecoration.addedResourceForeground":"#1a7f37","gitDecoration.modifiedResourceForeground":"#9a6700","gitDecoration.deletedResourceForeground":"#cf222e","gitDecoration.untrackedResourceForeground":"#1a7f37","gitDecoration.ignoredResourceForeground":"#6e7781","gitDecoration.conflictingResourceForeground":"#bc4c00","gitDecoration.submoduleResourceForeground":"#57606a","debugToolBar.background":"#ffffff","editor.stackFrameHighlightBackground":"#d4a72c66","editor.focusedStackFrameHighlightBackground":"#4ac26b66","settings.headerForeground":"#57606a","settings.modifiedItemIndicator":"#d4a72c66","welcomePage.buttonBackground":"#f6f8fa","welcomePage.buttonHoverBackground":"#f3f4f6"},semanticHighlighting:!0,tokenColors:[{settings:{foreground:"#24292f",background:"#ffffff"}},{scope:["comment","punctuation.definition.comment","string.comment"],settings:{foreground:"#6e7781"}},{scope:["constant","entity.name.constant","variable.other.constant","variable.language","entity"],settings:{foreground:"#0550ae"}},{scope:["entity.name","meta.export.default","meta.definition.variable"],settings:{foreground:"#953800"}},{scope:["variable.parameter.function","meta.jsx.children","meta.block","meta.tag.attributes","entity.name.constant","meta.object.member","meta.embedded.expression"],settings:{foreground:"#24292f"}},{scope:"entity.name.function",settings:{foreground:"#8250df"}},{scope:["entity.name.tag","support.class.component"],settings:{foreground:"#116329"}},{scope:"keyword",settings:{foreground:"#cf222e"}},{scope:["storage","storage.type"],settings:{foreground:"#cf222e"}},{scope:["storage.modifier.package","storage.modifier.import","storage.type.java"],settings:{foreground:"#24292f"}},{scope:["string","punctuation.definition.string","string punctuation.section.embedded source"],settings:{foreground:"#0a3069"}},{scope:"support",settings:{foreground:"#0550ae"}},{scope:"meta.property-name",settings:{foreground:"#0550ae"}},{scope:"variable",settings:{foreground:"#953800"}},{scope:"variable.other",settings:{foreground:"#24292f"}},{scope:"invalid.broken",settings:{fontStyle:"italic",foreground:"#82071e"}},{scope:"invalid.deprecated",settings:{fontStyle:"italic",foreground:"#82071e"}},{scope:"invalid.illegal",settings:{fontStyle:"italic",foreground:"#82071e"}},{scope:"invalid.unimplemented",settings:{fontStyle:"italic",foreground:"#82071e"}},{scope:"carriage-return",settings:{fontStyle:"italic underline",background:"#cf222e",foreground:"#f6f8fa",content:"^M"}},{scope:"message.error",settings:{foreground:"#82071e"}},{scope:"string source",settings:{foreground:"#24292f"}},{scope:"string variable",settings:{foreground:"#0550ae"}},{scope:["source.regexp","string.regexp"],settings:{foreground:"#0a3069"}},{scope:["string.regexp.character-class","string.regexp constant.character.escape","string.regexp source.ruby.embedded","string.regexp string.regexp.arbitrary-repitition"],settings:{foreground:"#0a3069"}},{scope:"string.regexp constant.character.escape",settings:{fontStyle:"bold",foreground:"#116329"}},{scope:"support.constant",settings:{foreground:"#0550ae"}},{scope:"support.variable",settings:{foreground:"#0550ae"}},{scope:"meta.module-reference",settings:{foreground:"#0550ae"}},{scope:"punctuation.definition.list.begin.markdown",settings:{foreground:"#953800"}},{scope:["markup.heading","markup.heading entity.name"],settings:{fontStyle:"bold",foreground:"#0550ae"}},{scope:"markup.quote",settings:{foreground:"#116329"}},{scope:"markup.italic",settings:{fontStyle:"italic",foreground:"#24292f"}},{scope:"markup.bold",settings:{fontStyle:"bold",foreground:"#24292f"}},{scope:"markup.raw",settings:{foreground:"#0550ae"}},{scope:["markup.deleted","meta.diff.header.from-file","punctuation.definition.deleted"],settings:{background:"#ffebe9",foreground:"#82071e"}},{scope:["markup.inserted","meta.diff.header.to-file","punctuation.definition.inserted"],settings:{background:"#dafbe1",foreground:"#116329"}},{scope:["markup.changed","punctuation.definition.changed"],settings:{background:"#ffd8b5",foreground:"#953800"}},{scope:["markup.ignored","markup.untracked"],settings:{foreground:"#eaeef2",background:"#0550ae"}},{scope:"meta.diff.range",settings:{foreground:"#8250df",fontStyle:"bold"}},{scope:"meta.diff.header",settings:{foreground:"#0550ae"}},{scope:"meta.separator",settings:{fontStyle:"bold",foreground:"#0550ae"}},{scope:"meta.output",settings:{foreground:"#0550ae"}},{scope:["brackethighlighter.tag","brackethighlighter.curly","brackethighlighter.round","brackethighlighter.square","brackethighlighter.angle","brackethighlighter.quote"],settings:{foreground:"#57606a"}},{scope:"brackethighlighter.unmatched",settings:{foreground:"#82071e"}},{scope:["constant.other.reference.link","string.other.link"],settings:{foreground:"#0a3069",fontStyle:"underline"}}]},showCopyButton:!0,skipLanguages:[],filepath:"/home/runner/work/elements/elements/packages/landingpage-new/components/getting-started/angular-guide.mdx"};function _createMdxContent(props){let _components=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",code:"code",a:"a",h2:"h2",ol:"ol",li:"li"},(0,lib.ah)(),props.components);return components_esm.CH||_missingMdxReference("CH",!1),components_esm.CH.Code||_missingMdxReference("CH.Code",!0),components_esm.CH.Section||_missingMdxReference("CH.Section",!0),components_esm.CH.SectionCode||_missingMdxReference("CH.SectionCode",!0),components_esm.CH.SectionLink||_missingMdxReference("CH.SectionLink",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h1,{children:"Integrate with Angular"}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We set up a demo project with Angular CLI to show you how to integrate the components into a newly generated Angular project.\nScroll down to see the CodeSandbox.These instructions are based on ",(0,jsx_runtime.jsx)(_components.code,{children:"angular@12.0.0"})," and ",(0,jsx_runtime.jsx)(_components.a,{href:"https://cli.angular.io/",children:(0,jsx_runtime.jsx)(_components.code,{children:"angular-cli@12.0.0"})}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{children:["Install dependency ",(0,jsx_runtime.jsx)(_components.code,{children:"@inovex.de/elements-angular"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We provide an integration layer package for Angular, so you can integrate the elements as an Angular library into your Angular project.\nTo install it, you have the following options:"}),"\n",(0,jsx_runtime.jsxs)(components_esm.CH.Code,{codeConfig:chCodeConfig,northPanel:{tabs:["angular-cli","npm","yarn"],active:"angular-cli",heightRatio:1},files:[{name:"angular-cli",focus:"",code:{lines:[{tokens:[{content:"ng add @inovex.de/elements-angular",props:{style:{color:"#24292F"}}}]}],lang:"bash"},annotations:[]},{name:"npm",focus:"",code:{lines:[{tokens:[{content:"npm install @inovex.de/elements-angular --save",props:{style:{color:"#24292F"}}}]}],lang:"bash"},annotations:[]},{name:"yarn",focus:"",code:{lines:[{tokens:[{content:"yarn add @inovex.de/elements-angular",props:{style:{color:"#24292F"}}}]}],lang:"bash"},annotations:[]}],children:[(0,jsx_runtime.jsx)(components_esm.CH.Code,{codeConfig:chCodeConfig,northPanel:{tabs:["angular-cli"],active:"angular-cli",heightRatio:1},files:[{name:"angular-cli",focus:"",code:{lines:[{tokens:[{content:"ng add @inovex.de/elements-angular",props:{style:{color:"#24292F"}}}]}],lang:"bash"},annotations:[]}]}),(0,jsx_runtime.jsx)(components_esm.CH.Code,{codeConfig:chCodeConfig,northPanel:{tabs:["npm"],active:"npm",heightRatio:1},files:[{name:"npm",focus:"",code:{lines:[{tokens:[{content:"npm install @inovex.de/elements-angular --save",props:{style:{color:"#24292F"}}}]}],lang:"bash"},annotations:[]}]}),(0,jsx_runtime.jsx)(components_esm.CH.Code,{codeConfig:chCodeConfig,northPanel:{tabs:["yarn"],active:"yarn",heightRatio:1},files:[{name:"yarn",focus:"",code:{lines:[{tokens:[{content:"yarn add @inovex.de/elements-angular",props:{style:{color:"#24292F"}}}]}],lang:"bash"},annotations:[]}]})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"ino-icons"})," will be added to your project automatically if you've used the angular-cli."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you used npm or yarn to install the elements, you need to change ",(0,jsx_runtime.jsx)(_components.code,{children:"angular.json"})," manually.\nAdd the following to your build assets (",(0,jsx_runtime.jsx)(_components.code,{children:"projects.<your-project-name>.architect.build.options.assets"}),") and to your test assets (",(0,jsx_runtime.jsx)(_components.code,{children:"projects.<your-project-name>.architect.test.options.assets"}),")."]}),"\n",(0,jsx_runtime.jsx)(components_esm.CH.Code,{codeConfig:chCodeConfig,northPanel:{tabs:["angular.json"],active:"angular.json",heightRatio:1},files:[{name:"angular.json",focus:"",code:{lines:[{tokens:[{content:"// ...",props:{style:{color:"#6E7781"}}}]},{tokens:[{content:"{",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  ",props:{style:{color:"#24292F"}}},{content:'"glob"',props:{style:{color:"#0550AE"}}},{content:": ",props:{style:{color:"#24292F"}}},{content:'"**/*"',props:{style:{color:"#0A3069"}}},{content:",",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  ",props:{style:{color:"#24292F"}}},{content:'"input"',props:{style:{color:"#0550AE"}}},{content:": ",props:{style:{color:"#24292F"}}},{content:'"node_modules/@inovex.de/elements/dist/inovex-elements/ino-icon"',props:{style:{color:"#0A3069"}}},{content:",",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  ",props:{style:{color:"#24292F"}}},{content:'"output"',props:{style:{color:"#0550AE"}}},{content:": ",props:{style:{color:"#24292F"}}},{content:'"/ino-icon"',props:{style:{color:"#0A3069"}}}]},{tokens:[{content:"}",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"// ...",props:{style:{color:"#6E7781"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,jsx_runtime.jsxs)(_components.h2,{children:["Import the Module ",(0,jsx_runtime.jsx)(_components.code,{children:"InoElementsModule"})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The components we provide in the Angular project are wrapped in Angular directives within an Angular library.\nAll the ",(0,jsx_runtime.jsx)(_components.code,{children:"@Input"})," properties and ",(0,jsx_runtime.jsx)(_components.code,{children:"@Output"})," events of our components are included.\nThis allows your IDE and compiler to infer all the type information from the given interfaces which is compulsive for code completion to work properly."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the inovex elements, you need to integrate the ",(0,jsx_runtime.jsx)(_components.code,{children:"InoElementsModule"})," into one of your App's modules. To do so, follow these steps:"]}),"\n",(0,jsx_runtime.jsxs)(components_esm.CH.Section,{codeConfig:chCodeConfig,northPanel:{tabs:["app.module.ts"],active:"app.module.ts",heightRatio:1},files:[{name:"app.module.ts",focus:"",code:{lines:[{tokens:[{content:"import",props:{style:{color:"#CF222E"}}},{content:" {BrowserModule} ",props:{style:{color:"#24292F"}}},{content:"from",props:{style:{color:"#CF222E"}}},{content:" ",props:{style:{color:"#24292F"}}},{content:"'@angular/platform-browser'",props:{style:{color:"#0A3069"}}},{content:";",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"import",props:{style:{color:"#CF222E"}}},{content:" {CUSTOM_ELEMENTS_SCHEMA, NgModule} ",props:{style:{color:"#24292F"}}},{content:"from",props:{style:{color:"#CF222E"}}},{content:" ",props:{style:{color:"#24292F"}}},{content:"'@angular/core'",props:{style:{color:"#0A3069"}}},{content:";",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"import",props:{style:{color:"#CF222E"}}},{content:" {InoElementsModule} ",props:{style:{color:"#24292F"}}},{content:"from",props:{style:{color:"#CF222E"}}},{content:" ",props:{style:{color:"#24292F"}}},{content:"'@inovex.de/elements-angular'",props:{style:{color:"#0A3069"}}},{content:";",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"import",props:{style:{color:"#CF222E"}}},{content:" {AppComponent} ",props:{style:{color:"#24292F"}}},{content:"from",props:{style:{color:"#CF222E"}}},{content:" ",props:{style:{color:"#24292F"}}},{content:"'./app.component'",props:{style:{color:"#0A3069"}}},{content:";",props:{style:{color:"#24292F"}}}]},{tokens:[]},{tokens:[{content:"@",props:{style:{color:"#24292F"}}},{content:"NgModule",props:{style:{color:"#8250DF"}}},{content:"({",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  declarations: [AppComponent],",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  imports: [",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"    BrowserModule,",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"    InoElementsModule.",props:{style:{color:"#24292F"}}},{content:"forRoot",props:{style:{color:"#8250DF"}}},{content:"({}),",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  ],",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  providers: [],",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  bootstrap: [AppComponent],",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"  schemas: [",props:{style:{color:"#24292F"}}},{content:"CUSTOM_ELEMENTS_SCHEMA",props:{style:{color:"#0550AE"}}},{content:"],",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"})",props:{style:{color:"#24292F"}}}]},{tokens:[{content:"export",props:{style:{color:"#CF222E"}}},{content:" ",props:{style:{color:"#24292F"}}},{content:"class",props:{style:{color:"#CF222E"}}},{content:" ",props:{style:{color:"#24292F"}}},{content:"AppModule",props:{style:{color:"#953800"}}},{content:" {}",props:{style:{color:"#24292F"}}}]}],lang:"typescript"},annotations:[]}],children:[(0,jsx_runtime.jsxs)(_components.ol,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(components_esm.CH.SectionLink,{focus:"3",id:"focus://3",children:"Import the elements module"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(components_esm.CH.SectionLink,{focus:"10",id:"focus://10",children:"Add our module to your imports (you can also provide an InoElementsConfig here)"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(components_esm.CH.SectionLink,{focus:"14",id:"focus://14",children:"Add the CUSTOM_ELEMENTS_SCHEMA"})}),"\n"]}),(0,jsx_runtime.jsx)(components_esm.CH.SectionCode,{})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["If you have more than one module, you should integrate the ",(0,jsx_runtime.jsx)(_components.code,{children:"InoElementsModule"})," into each module that is supposed to use the inovex elements.\nAlternatively, you can also integrate the components into a shared module.\nThis way, you only need to import the components once (recommended)."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{children:"Use the Components"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"That's it. You are now ready to use our components."})]})}var angular_guide=function(){let props=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function _missingMdxReference(id,component){throw Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}var layout=__webpack_require__(6201),frameworks=__webpack_require__(313);let AngularGuidePage=()=>(0,jsx_runtime.jsx)(layout.Z,{framework:frameworks.$.ANGULAR,sandboxUrl:"https://codesandbox.io/s/github/inovex/elements-example-angular",children:(0,jsx_runtime.jsx)(angular_guide,{})});var angular=AngularGuidePage},1071:function(module){module.exports={container:"layout_container__TeJvE",sandbox:"layout_sandbox__6jUXu",segmentGroup:"layout_segmentGroup__D5rGd"}},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)},1151:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ah:function(){return useMDXComponents}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);let MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function useMDXComponents(components){let contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}}},function(__webpack_require__){__webpack_require__.O(0,[4542,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=2235)}),_N_E=__webpack_require__.O()}]);