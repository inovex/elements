/*! For license information please see stories-ino-table-ino-table-stories.923aed8e.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_inovex_de_elements_storybook=self.webpackChunk_inovex_de_elements_storybook||[]).push([[8331],{"./src/stories/ino-table/ino-table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,NoHover:()=>NoHover,SelectionWithCheckboxes:()=>SelectionWithCheckboxes,SortColumnIdAndSortDirection:()=>SortColumnIdAndSortDirection,StickyHeader:()=>StickyHeader,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ino_table_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),StoryWrapper=__webpack_require__("./src/stories/StoryWrapper.ts"),lit_html=__webpack_require__("../../node_modules/lit-html/lit-html.js"),t_CHILD=2;class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class unsafe_html_e extends i{constructor(i){if(super(i),this.et=lit_html.Ld,i.type!==t_CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.Ld||null==r)return this.vt=void 0,this.et=r;if(r===lit_html.Jb)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.et)return this.vt;this.et=r;var s=[r];return s.raw=s,this.vt={_$litType$:this.constructor.resultType,strings:s,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;var o=(t=>function(){for(var _len=arguments.length,e=new Array(_len),_key=0;_key<_len;_key++)e[_key]=arguments[_key];return{_$litDirective$:t,values:e}})(unsafe_html_e),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ino_table=__webpack_require__("../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-table/ino-table.scss"),ino_table_default=__webpack_require__.n(ino_table),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ino_table_default(),options);ino_table_default()&&ino_table_default().locals&&ino_table_default().locals;const tableContent=lit.dy`<tr slot="header-row"></tr>
  <ino-table-header-cell
    column-id="id"
    sort-start="asc"
    label="ID"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="name"
    sort-start="asc"
    label="Name"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="release"
    label="Release Date"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="box-office"
    label="Box Office"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="rating"
    label="Rating"
    not-sortable
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="another1"
    label="Another Column"
    not-sortable
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="another2"
    label="Another Column"
    not-sortable
  ></ino-table-header-cell>
  <tr>
    <td>1</td>
    <td>The Bourne Identity</td>
    <td>14.06.2002</td>
    <td>$214 million</td>
    <td>93%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Sully</td>
    <td>09.09.2016</td>
    <td>$240.8 million</td>
    <td>84%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Martian</td>
    <td>02.10.2015</td>
    <td>$630.2 million</td>
    <td>94%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>4</td>
    <td>John Wick: Chapter 3</td>
    <td>17.05.2019</td>
    <td>$326.7 million</td>
    <td>92%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>5</td>
    <td>10 Cloverfield Lane</td>
    <td>11.03.2016</td>
    <td>$110.2 million</td>
    <td>87%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Thor: Ragnarok</td>
    <td>10.10.2017</td>
    <td>$854 million</td>
    <td>92%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>7</td>
    <td>The latest movie</td>
    <td>01.01.2021</td>
    <td>$900 million</td>
    <td>95%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr> `,InoTableMeta={title:"Structure/ino-table",component:"ino-table",inline:!0,decorators:[story=>((0,external_STORYBOOK_MODULE_PREVIEW_API_.useEffect)((()=>{const tables=document.querySelectorAll("ino-table"),sortChangeHandler=e=>{const{columnId,sortDirection}=e.detail;e.target.sortColumnId=columnId,e.target.sortDirection=sortDirection};return tables.forEach((t=>t.addEventListener("sortChange",sortChangeHandler))),()=>tables.forEach((t=>t.removeEventListener("sortChange",sortChangeHandler)))})),story())],render:args=>lit.dy`
    <ino-table
      loading="${args.loading}"
      sort-column-id="${args.sortColumnId}"
      sort-direction="${args.sortDirection}"
      no-hover="${args.noHover}"
      sticky-header="${args.stickyHeader}"
    >
      ${args.loading?lit.dy`<ino-progress-bar
            slot="loading-indicator"
            indeterminate
            debounce="200"
            active
          ></ino-progress-bar>`:lit.dy``}
      ${tableContent}
    </ino-table>
  `,argTypes:{sortColumnId:{options:["id","name","release","box-office","rating"],control:{type:"select"}}},args:{loading:!1,sortColumnId:"id",noHover:!1,stickyHeader:!1,sortDirection:"asc"}},ino_table_stories=InoTableMeta,Default=(0,StoryWrapper.Z)({...InoTableMeta}),Loading=(0,StoryWrapper.Z)({...Default,docsFromProperty:"loading",args:{loading:!0}}),NoHover=(0,StoryWrapper.Z)({...Default,docsFromProperty:"noHover",args:{noHover:!0}}),SortColumnIdAndSortDirection=(0,StoryWrapper.Z)({...Default});SortColumnIdAndSortDirection.story={parameters:{docs:{storyDescription:"For table sorting there are two needed props:\n\n`sortColumnId` identifies the column currently sorted by.\nNeeds to match the column ids provided on `ino-table-header-cell` elements.\n\n`sortDirection` shows direction of the column currently sorted by.\n@See Set `sort-start` attribute on the respective column to change the sort order.\n\nSorting-logic needs to be implemented by user."}}};const StickyHeader=(0,StoryWrapper.Z)({...Default,docsFromProperty:"stickyHeader",args:{stickyHeader:!0}}),SelectionWithCheckboxes=(0,StoryWrapper.Z)({...Default,render:()=>{document.getElementById("headerBox");return lit.dy`
      <ino-table class="selectable-table">
        ${o('\n        <tr slot="header-row">\n          <td class="ino-table__cell--checkbox">\n            <ino-checkbox id="headerBox" selection></ino-checkbox>\n          </td>\n          <td>Header A</td>\n          <td>Header B</td>\n          <td>Header C</td>\n          <td>Header D</td>\n          <td>Header E</td>\n          <td>Header F</td>\n          <td>Header G</td>\n          <td>Header H</td>\n          <td>Header I</td>\n        </tr>\n        <tr>\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">1</td>\n          <td>Cell B1</td>\n          <td>Cell C1</td>\n          <td>Cell D1</td>\n          <td>Cell E1</td>\n          <td>Cell F1</td>\n          <td>Cell G1</td>\n          <td>Cell H1</td>\n          <td>Cell I1</td>\n        </tr>\n        <tr class="ino-table__row--selected">\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection checked></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">2</td>\n          <td>Cell B2</td>\n          <td>Cell C2</td>\n          <td>Cell D2</td>\n          <td>Cell E2</td>\n          <td>Cell F2</td>\n          <td>Cell G2</td>\n          <td>Cell H2</td>\n          <td>Cell I2</td>\n        </tr>\n        <tr>\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">3</td>\n          <td>Cell B3</td>\n          <td>Cell C3</td>\n          <td>Cell D3</td>\n          <td>Cell E3</td>\n          <td>Cell F3</td>\n          <td>Cell G3</td>\n          <td>Cell H3</td>\n          <td>Cell I3</td>\n        </tr>\n        <tr class="ino-table__row--active">\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">4</td>\n          <td>Cell B4</td>\n          <td>Cell C4</td>\n          <td>Cell D4</td>\n          <td>Cell E4</td>\n          <td>Cell F4</td>\n          <td>Cell G4</td>\n          <td>Cell H4</td>\n          <td>Cell I4</td>\n        </tr>\n        <tr>\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">5</td>\n          <td>Cell B5</td>\n          <td>Cell C5</td>\n          <td>Cell D5</td>\n          <td>Cell E5</td>\n          <td>Cell F5</td>\n          <td>Cell G5</td>\n          <td>Cell H5</td>\n          <td>Cell I5</td>\n        </tr>\n      ')}
      </ino-table>
    `}});SelectionWithCheckboxes.story={parameters:{docs:{storyDescription:"Use `ino-checkbox` elements in the first column for checkbox-selection"}}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"Story({\n  ...InoTableMeta\n})",...Default.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'loading',\n  args: {\n    loading: true\n  }\n})",...Loading.parameters?.docs?.source}}},NoHover.parameters={...NoHover.parameters,docs:{...NoHover.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'noHover',\n  args: {\n    noHover: true\n  }\n})",...NoHover.parameters?.docs?.source}}},SortColumnIdAndSortDirection.parameters={...SortColumnIdAndSortDirection.parameters,docs:{...SortColumnIdAndSortDirection.parameters?.docs,source:{originalSource:"Story({\n  ...Default\n})",...SortColumnIdAndSortDirection.parameters?.docs?.source},description:{story:"For table sorting there are two needed props:\n\n`sortColumnId` identifies the column currently sorted by.\nNeeds to match the column ids provided on `ino-table-header-cell` elements.\n\n`sortDirection` shows direction of the column currently sorted by.\n@See Set `sort-start` attribute on the respective column to change the sort order.\n\nSorting-logic needs to be implemented by user.",...SortColumnIdAndSortDirection.parameters?.docs?.description}}},StickyHeader.parameters={...StickyHeader.parameters,docs:{...StickyHeader.parameters?.docs,source:{originalSource:"Story({\n  ...Default,\n  docsFromProperty: 'stickyHeader',\n  args: {\n    stickyHeader: true\n  }\n})",...StickyHeader.parameters?.docs?.source}}},SelectionWithCheckboxes.parameters={...SelectionWithCheckboxes.parameters,docs:{...SelectionWithCheckboxes.parameters?.docs,source:{originalSource:'Story({\n  ...Default,\n  render: () => {\n    const mainBox = (document.getElementById(\'headerBox\') as Components.InoCheckbox);\n    const checkboxHandler = e => {\n      const triggerCheckbox = e.target;\n      triggerCheckbox.checked = !triggerCheckbox.checked;\n      const checkboxes = (Array.from(document.querySelectorAll(\'.selectable-table tbody ino-checkbox\')) as Components.InoCheckbox[]);\n      if (triggerCheckbox.id === \'headerBox\') {\n        triggerCheckbox.indeterminate = false;\n        checkboxes.forEach(checkbox => {\n          checkbox.checked = mainBox.checked;\n          const row = (checkbox as HTMLElement).closest(\'tr\');\n          row.classList.toggle(\'ino-table__row--selected\', mainBox.checked);\n        });\n      } else if (mainBox) {\n        const row = (triggerCheckbox as HTMLElement).closest(\'tr\');\n        row.classList.toggle(\'ino-table__row--selected\', triggerCheckbox.checked);\n        if (checkboxes.some(i => i.checked)) {\n          mainBox.indeterminate = true;\n        } else {\n          const allChecked = checkboxes.every(i => i.checked);\n          mainBox.checked = allChecked;\n          mainBox.indeterminate = allChecked;\n        }\n      }\n      const table = document.querySelector(\'.selectable-table\');\n      table?.addEventListener(\'checkedChange\', checkboxHandler);\n      return () => table?.removeEventListener(\'checkedChange\', checkboxHandler);\n    };\n    return html`\n      <ino-table class="selectable-table">\n        ${unsafeHTML( /*html*/`\n        <tr slot="header-row">\n          <td class="ino-table__cell--checkbox">\n            <ino-checkbox id="headerBox" selection></ino-checkbox>\n          </td>\n          <td>Header A</td>\n          <td>Header B</td>\n          <td>Header C</td>\n          <td>Header D</td>\n          <td>Header E</td>\n          <td>Header F</td>\n          <td>Header G</td>\n          <td>Header H</td>\n          <td>Header I</td>\n        </tr>\n        <tr>\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">1</td>\n          <td>Cell B1</td>\n          <td>Cell C1</td>\n          <td>Cell D1</td>\n          <td>Cell E1</td>\n          <td>Cell F1</td>\n          <td>Cell G1</td>\n          <td>Cell H1</td>\n          <td>Cell I1</td>\n        </tr>\n        <tr class="ino-table__row--selected">\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection checked></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">2</td>\n          <td>Cell B2</td>\n          <td>Cell C2</td>\n          <td>Cell D2</td>\n          <td>Cell E2</td>\n          <td>Cell F2</td>\n          <td>Cell G2</td>\n          <td>Cell H2</td>\n          <td>Cell I2</td>\n        </tr>\n        <tr>\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">3</td>\n          <td>Cell B3</td>\n          <td>Cell C3</td>\n          <td>Cell D3</td>\n          <td>Cell E3</td>\n          <td>Cell F3</td>\n          <td>Cell G3</td>\n          <td>Cell H3</td>\n          <td>Cell I3</td>\n        </tr>\n        <tr class="ino-table__row--active">\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">4</td>\n          <td>Cell B4</td>\n          <td>Cell C4</td>\n          <td>Cell D4</td>\n          <td>Cell E4</td>\n          <td>Cell F4</td>\n          <td>Cell G4</td>\n          <td>Cell H4</td>\n          <td>Cell I4</td>\n        </tr>\n        <tr>\n          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>\n          <td class="ino-table__cell--numeric">5</td>\n          <td>Cell B5</td>\n          <td>Cell C5</td>\n          <td>Cell D5</td>\n          <td>Cell E5</td>\n          <td>Cell F5</td>\n          <td>Cell G5</td>\n          <td>Cell H5</td>\n          <td>Cell I5</td>\n        </tr>\n      `)}\n      </ino-table>\n    `;\n  }\n})',...SelectionWithCheckboxes.parameters?.docs?.source},description:{story:"Use `ino-checkbox` elements in the first column for checkbox-selection",...SelectionWithCheckboxes.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Loading","NoHover","SortColumnIdAndSortDirection","StickyHeader","SelectionWithCheckboxes"]},"./src/stories/StoryWrapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Story});var _elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./elements-stencil-docs.json"),lodash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/lodash/lodash.js");function Story(meta){if(meta.docsFromProperty){if(!meta.component)throw new Error("Component name needs to be provided");const doc=function findPropertyDocumentationInJsonDoc(tagName,property){const componentDocs=_elements_stencil_docs__WEBPACK_IMPORTED_MODULE_0__.components.find((doc=>doc.tag===tagName));if(!componentDocs)throw new Error(`Could not find docs for component ${tagName}.`);const propDocs=componentDocs.props.find((prop=>prop.name===property));if(!propDocs)throw new Error(`Could not find docs for property ${property}.`);return propDocs.docs}(meta.component,meta.docsFromProperty);return(0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({},meta,{parameters:{docs:{description:{story:doc}}}})}return meta}},"../../node_modules/css-loader/index.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/stories/ino-table/ino-table.scss":(module,exports,__webpack_require__)=>{(module.exports=__webpack_require__("../../node_modules/css-loader/lib/css-base.js")(!1)).push([module.id,".story-ino-table{height:300px}",""])}}]);
//# sourceMappingURL=stories-ino-table-ino-table-stories.923aed8e.iframe.bundle.js.map