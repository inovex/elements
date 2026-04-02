import"./lit-element-Clz-VqwZ.js";import{A as k,E as g,b as h}from"./lit-html-IUDnlW1J.js";import{S as n}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const f={CHILD:2},p=t=>(...e)=>({_$litDirective$:t,values:e});class H{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,d){this._$Ct=e,this._$AM=o,this._$Ci=d}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}class u extends H{constructor(e){if(super(e),this.it=k,e.type!==f.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===k||e==null)return this._t=void 0,this.it=e;if(e===g)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}u.directiveName="unsafeHTML",u.resultType=1;const y=p(u),{useEffect:x}=__STORYBOOK_MODULE_PREVIEW_API__,S=h`<tr slot="header-row"></tr>
  <ino-table-header-cell column-id="id" sort-start="asc" label="ID"></ino-table-header-cell>
  <ino-table-header-cell column-id="name" sort-start="asc" label="Name"></ino-table-header-cell>
  <ino-table-header-cell column-id="release" label="Release Date"></ino-table-header-cell>
  <ino-table-header-cell column-id="box-office" label="Box Office"></ino-table-header-cell>
  <ino-table-header-cell column-id="rating" label="Rating" not-sortable></ino-table-header-cell>
  <ino-table-header-cell column-id="another1" label="Another Column" not-sortable></ino-table-header-cell>
  <ino-table-header-cell column-id="another2" label="Another Column" not-sortable></ino-table-header-cell>
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
  </tr> `,v={title:"Structure/ino-table",component:"ino-table",inline:!0,decorators:[t=>(x(()=>{const e=document.querySelectorAll("ino-table"),o=d=>{const{columnId:r,sortDirection:c}=d.detail;d.target.sortColumnId=r,d.target.sortDirection=c};return e.forEach(d=>d.addEventListener("sortChange",o)),()=>e.forEach(d=>d.removeEventListener("sortChange",o))}),t())],render:t=>h`
    <ino-table
      loading="${t.loading}"
      sort-column-id="${t.sortColumnId}"
      sort-direction="${t.sortDirection}"
      no-hover="${t.noHover}"
      sticky-header="${t.stickyHeader}"
    >
      ${t.loading?h`<ino-progress-bar slot="loading-indicator" indeterminate debounce="200" active></ino-progress-bar>`:h``}
      ${S}
    </ino-table>
  `,argTypes:{sortColumnId:{options:["id","name","release","box-office","rating"],control:{type:"select"}}},args:{loading:!1,sortColumnId:"id",noHover:!1,stickyHeader:!1,sortDirection:"asc"}},l=n({...v}),b=n({...l,docsFromProperty:"loading",args:{loading:!0}}),m=n({...l,docsFromProperty:"noHover",args:{noHover:!0}}),i=n({...l}),C=n({...l,docsFromProperty:"stickyHeader",args:{stickyHeader:!0}}),s=n({...l,render:()=>{const t=document.getElementById("headerBox"),e=o=>{const d=o.target;d.checked=!d.checked;const r=Array.from(document.querySelectorAll(".selectable-table tbody ino-checkbox"));if(d.id==="headerBox")d.indeterminate=!1,r.forEach(c=>{c.checked=t.checked,c.closest("tr")?.classList.toggle("ino-table__row--selected",t.checked)});else if(t)if(d.closest("tr")?.classList.toggle("ino-table__row--selected",d.checked),r.some(a=>a.checked))t.indeterminate=!0;else{const a=r.every(_=>_.checked);t.checked=a,t.indeterminate=a}};return x(()=>{const o=document.querySelector(".selectable-table");return o?.addEventListener("checkedChange",e),()=>o?.removeEventListener("checkedChange",e)},[]),h`
      <ino-table class="selectable-table">
        ${y(`
        <tr slot="header-row">
          <td class="ino-table__cell--checkbox">
            <ino-checkbox id="headerBox" selection></ino-checkbox>
          </td>
          <td>Header A</td>
          <td>Header B</td>
          <td>Header C</td>
          <td>Header D</td>
          <td>Header E</td>
          <td>Header F</td>
          <td>Header G</td>
          <td>Header H</td>
          <td>Header I</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">1</td>
          <td>Cell B1</td>
          <td>Cell C1</td>
          <td>Cell D1</td>
          <td>Cell E1</td>
          <td>Cell F1</td>
          <td>Cell G1</td>
          <td>Cell H1</td>
          <td>Cell I1</td>
        </tr>
        <tr class="ino-table__row--selected">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection checked></ino-checkbox></td>
          <td class="ino-table__cell--numeric">2</td>
          <td>Cell B2</td>
          <td>Cell C2</td>
          <td>Cell D2</td>
          <td>Cell E2</td>
          <td>Cell F2</td>
          <td>Cell G2</td>
          <td>Cell H2</td>
          <td>Cell I2</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">3</td>
          <td>Cell B3</td>
          <td>Cell C3</td>
          <td>Cell D3</td>
          <td>Cell E3</td>
          <td>Cell F3</td>
          <td>Cell G3</td>
          <td>Cell H3</td>
          <td>Cell I3</td>
        </tr>
        <tr class="ino-table__row--active">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">4</td>
          <td>Cell B4</td>
          <td>Cell C4</td>
          <td>Cell D4</td>
          <td>Cell E4</td>
          <td>Cell F4</td>
          <td>Cell G4</td>
          <td>Cell H4</td>
          <td>Cell I4</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">5</td>
          <td>Cell B5</td>
          <td>Cell C5</td>
          <td>Cell D5</td>
          <td>Cell E5</td>
          <td>Cell F5</td>
          <td>Cell G5</td>
          <td>Cell H5</td>
          <td>Cell I5</td>
        </tr>
      `)}
      </ino-table>
    `}});l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...InoTableMeta
})`,...l.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'loading',
  args: {
    loading: true
  }
})`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'noHover',
  args: {
    noHover: true
  }
})`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default
})`,...i.parameters?.docs?.source},description:{story:"For table sorting there are two needed props:\n\n`sortColumnId` identifies the column currently sorted by.\nNeeds to match the column ids provided on `ino-table-header-cell` elements.\n\n`sortDirection` shows direction of the column currently sorted by.\n@See Set `sort-start` attribute on the respective column to change the sort order.\n\nSorting-logic needs to be implemented by user.",...i.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'stickyHeader',
  args: {
    stickyHeader: true
  }
})`,...C.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    const mainBox = document.getElementById('headerBox') as Components.InoCheckbox;
    const checkboxHandler = e => {
      const triggerCheckbox = e.target;
      triggerCheckbox.checked = !triggerCheckbox.checked;
      const checkboxes = Array.from(document.querySelectorAll('.selectable-table tbody ino-checkbox')) as Components.InoCheckbox[];
      if (triggerCheckbox.id === 'headerBox') {
        triggerCheckbox.indeterminate = false;
        checkboxes.forEach(checkbox => {
          checkbox.checked = mainBox.checked;
          const row = (checkbox as HTMLElement).closest('tr');
          row?.classList.toggle('ino-table__row--selected', mainBox.checked);
        });
      } else if (mainBox) {
        const row = (triggerCheckbox as HTMLElement).closest('tr');
        row?.classList.toggle('ino-table__row--selected', triggerCheckbox.checked);
        if (checkboxes.some(i => i.checked)) {
          mainBox.indeterminate = true;
        } else {
          const allChecked = checkboxes.every(i => i.checked);
          mainBox.checked = allChecked;
          mainBox.indeterminate = allChecked;
        }
      }
    };
    useEffect(() => {
      const table = document.querySelector('.selectable-table');
      table?.addEventListener('checkedChange', checkboxHandler);
      return () => table?.removeEventListener('checkedChange', checkboxHandler);
    }, []);
    return html\`
      <ino-table class="selectable-table">
        \${unsafeHTML(/*html*/\`
        <tr slot="header-row">
          <td class="ino-table__cell--checkbox">
            <ino-checkbox id="headerBox" selection></ino-checkbox>
          </td>
          <td>Header A</td>
          <td>Header B</td>
          <td>Header C</td>
          <td>Header D</td>
          <td>Header E</td>
          <td>Header F</td>
          <td>Header G</td>
          <td>Header H</td>
          <td>Header I</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">1</td>
          <td>Cell B1</td>
          <td>Cell C1</td>
          <td>Cell D1</td>
          <td>Cell E1</td>
          <td>Cell F1</td>
          <td>Cell G1</td>
          <td>Cell H1</td>
          <td>Cell I1</td>
        </tr>
        <tr class="ino-table__row--selected">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection checked></ino-checkbox></td>
          <td class="ino-table__cell--numeric">2</td>
          <td>Cell B2</td>
          <td>Cell C2</td>
          <td>Cell D2</td>
          <td>Cell E2</td>
          <td>Cell F2</td>
          <td>Cell G2</td>
          <td>Cell H2</td>
          <td>Cell I2</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">3</td>
          <td>Cell B3</td>
          <td>Cell C3</td>
          <td>Cell D3</td>
          <td>Cell E3</td>
          <td>Cell F3</td>
          <td>Cell G3</td>
          <td>Cell H3</td>
          <td>Cell I3</td>
        </tr>
        <tr class="ino-table__row--active">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">4</td>
          <td>Cell B4</td>
          <td>Cell C4</td>
          <td>Cell D4</td>
          <td>Cell E4</td>
          <td>Cell F4</td>
          <td>Cell G4</td>
          <td>Cell H4</td>
          <td>Cell I4</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">5</td>
          <td>Cell B5</td>
          <td>Cell C5</td>
          <td>Cell D5</td>
          <td>Cell E5</td>
          <td>Cell F5</td>
          <td>Cell G5</td>
          <td>Cell H5</td>
          <td>Cell I5</td>
        </tr>
      \`)}
      </ino-table>
    \`;
  }
})`,...s.parameters?.docs?.source},description:{story:"Use `ino-checkbox` elements in the first column for checkbox-selection",...s.parameters?.docs?.description}}};const $=["Default","Loading","NoHover","SortColumnIdAndSortDirection","StickyHeader","SelectionWithCheckboxes"];export{l as Default,b as Loading,m as NoHover,s as SelectionWithCheckboxes,i as SortColumnIdAndSortDirection,C as StickyHeader,$ as __namedExportsOrder,v as default};
