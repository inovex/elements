import{b as u}from"./lit-html-IUDnlW1J.js";import{S as n}from"./StoryWrapper-Bs3Y9Jfd.js";import{g as f}from"./utils-ebStcoTl.js";import{r as v}from"./utils-S5wsuFC0.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:p}=__STORYBOOK_MODULE_PREVIEW_API__,x={title:"Structure/ino-table-header-cell",component:"ino-table-header-cell",decorators:[e=>(p(()=>{const i=t=>{const k=t.target,{columnId:g,sortDirection:S}=t.detail;k.sortColumnId=g,k.sortDirection=S};document.addEventListener("sortChange",i);const r=t=>t.target.value=t.detail,b=document.querySelectorAll("ino-input");return b.forEach(t=>t.addEventListener("valueChange",r)),()=>{document.removeEventListener("sortChange",i),b.forEach(t=>t.removeEventListener("valueChange",r))}}),e())],render:e=>u`
    <ino-table>
      <ino-table-header-cell
        autofocus="${e.autofocus}"
        not-sortable="${e.notSortable}"
        sort-direction="${e.sortDirection}"
        search-icon="${e.searchIcon}"
        searched="${e.searched}"
        label="${e.label}"
      >
        <ino-input placeholder="Search for XY..." data-ino-focus>
          <ino-icon clickable slot="icon-trailing" icon="close"></ino-icon>
        </ino-input>
      </ino-table-header-cell>
      </tr>
    </ino-table>
  `,argTypes:{searchIcon:{control:{type:"select"},options:f()}},args:{autofocus:!1,notSortable:!1,label:"Label",columnId:"",sortDirection:"",searched:!1,searchIcon:"search"}},o=n({...x}),s=n({...o,docsFromProperty:"label",args:{label:"Search for XY..."}}),l=n({...o,docsFromProperty:"sortDirection",args:{sortDirection:"desc"}}),d=n({...o,docsFromProperty:"notSortable",args:{notSortable:!0}}),m=n({...o,docsFromProperty:"searchIcon",args:{searchIcon:"search"}}),h=n({...o,docsFromProperty:"searched",args:{searched:!0}}),a=n({...o,render:()=>u`
    ${p(v)}
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell label="Column Selection Search" search-icon="calendar" class="datepicker-cell">
          <div lang="de" class="datepicker-group">
            <aside>
              <ul>
                <li class="today">Today</li>
                <li class="lastWeek">last week</li>
                <li class="thisWeek">this week</li>
              </ul>
            </aside>
            <main id="main">
              <ino-datepicker
                type="date"
                label="An"
                inline
                date-format="d.m.Y"
                placeholder="tt.mm.jjjj"
                append-to="main"
                data-ino-focus
              ></ino-datepicker>
              <ino-radio-group value="at">
                <ino-radio value="at">At</ino-radio>
                <ino-radio value="after">After</ino-radio>
                <ino-radio value="before">Before</ino-radio>
                <ino-radio value="range">Range</ino-radio>
              </ino-radio-group>
            </main>
          </div>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  `}),c=n({...o,render:()=>(p(()=>{const e=document.querySelectorAll("ino-checkbox"),i=r=>r.target.checked=r.detail;return e.forEach(()=>addEventListener("checkedChange",i)),()=>e.forEach(()=>removeEventListener("checkedChange",i))}),u`
      <ino-table>
        <tr slot="header-row">
          <ino-table-header-cell label="Column Selection Search" search-icon="filter">
            <ino-list>
              <ino-list-item text="Option 1">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 2">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 3">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 4">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
            </ino-list>
          </ino-table-header-cell>
        </tr>
      </ino-table>
    `)});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoTableHeaderCellMeta
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'label',
  args: {
    label: 'Search for XY...'
  }
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'sortDirection',
  args: {
    sortDirection: 'desc'
  }
})`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'notSortable',
  args: {
    notSortable: true
  }
})`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'searchIcon',
  args: {
    searchIcon: 'search'
  }
})`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'searched',
  args: {
    searched: true
  }
})`,...h.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    \${useEffect(registerInlineDatepickerHandler)}
    <ino-table>
      <tr slot="header-row">
        <ino-table-header-cell label="Column Selection Search" search-icon="calendar" class="datepicker-cell">
          <div lang="de" class="datepicker-group">
            <aside>
              <ul>
                <li class="today">Today</li>
                <li class="lastWeek">last week</li>
                <li class="thisWeek">this week</li>
              </ul>
            </aside>
            <main id="main">
              <ino-datepicker
                type="date"
                label="An"
                inline
                date-format="d.m.Y"
                placeholder="tt.mm.jjjj"
                append-to="main"
                data-ino-focus
              ></ino-datepicker>
              <ino-radio-group value="at">
                <ino-radio value="at">At</ino-radio>
                <ino-radio value="after">After</ino-radio>
                <ino-radio value="before">Before</ino-radio>
                <ino-radio value="range">Range</ino-radio>
              </ino-radio-group>
            </main>
          </div>
        </ino-table-header-cell>
      </tr>
    </ino-table>
  \`
})`,...a.parameters?.docs?.source},description:{story:"Use a `ino-datepicker` element inside of a `ino-table-header-cell` element to show a search with a datepicker on click",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    useEffect(() => {
      const checkboxes = document.querySelectorAll('ino-checkbox');
      const checkedHandler = e => (e.target as Components.InoCheckbox).checked = (e as CustomEvent).detail;
      checkboxes.forEach(() => addEventListener('checkedChange', checkedHandler));
      return () => checkboxes.forEach(() => removeEventListener('checkedChange', checkedHandler));
    });
    return html\`
      <ino-table>
        <tr slot="header-row">
          <ino-table-header-cell label="Column Selection Search" search-icon="filter">
            <ino-list>
              <ino-list-item text="Option 1">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 2">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 3">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
              <ino-list-item text="Option 4">
                <ino-checkbox slot="leading" selection></ino-checkbox>
              </ino-list-item>
              <ino-list-item-divider inset></ino-list-item-divider>
            </ino-list>
          </ino-table-header-cell>
        </tr>
      </ino-table>
    \`;
  }
})`,...c.parameters?.docs?.source},description:{story:"Use a `ino-list` element inside a `ino-table-header-cell` element to show a list selection on click",...c.parameters?.docs?.description}}};const O=["Default","Label","SortDirection","NotSortable","SearchIcon","Searched","SearchWithDatepicker","SearchWithSelection"];export{o as Default,s as Label,d as NotSortable,m as SearchIcon,a as SearchWithDatepicker,c as SearchWithSelection,h as Searched,l as SortDirection,O as __namedExportsOrder,x as default};
