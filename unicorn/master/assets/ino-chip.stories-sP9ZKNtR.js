import{b as r}from"./lit-html-IUDnlW1J.js";import{S as o}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";const u={title:"Buttons/ino-chip",component:"ino-chip",parameters:{actions:{handles:["chipClicked","chipRemoved"]}},render:e=>r`
    <ino-chip
      class="customizable-chip"
      disabled="${e.disabled}"
      fill="${e.fill}"
      removable="${e.removable}"
      selectable="${e.selectable}"
      selected="${e.selected}"
      value="${e.value}"
      clickable="${e.clickable}"
    >
      Label
    </ino-chip>
  `,args:{disabled:!1,fill:"solid",removable:!1,selectable:!1,selected:!1,clickable:!0,value:""}},n=o({...u}),d=o({...n,docsFromProperty:"fill",args:{fill:"solid"}}),h=o({...n,docsFromProperty:"fill",args:{fill:"outline"}}),a=o({...n,render:()=>r`
    <div class="ino-chip-story">
      <ino-chip>
        Leading
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        Trailing
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        <span>Leading & Trailing</span>
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
    </div>
  `}),t=o({...n,render:()=>{const e=["Chip 1","Chip 2","Chip 3"],l=new Set,c=i=>{if(!i?.value)return;const s=l.has(i.value);i.selected=!s,s?l.delete(i.value):l.add(i.value)};return r`
      <div class="ino-chip-story">
        ${e.map(i=>r` <ino-chip value="${i}" selectable @chipClicked="${s=>c(s.target)}"
            >${i}
          </ino-chip>`)}
      </div>
    `}}),p=o({...n,render:()=>{const e=["Chip 1","Chip 2","Chip 3"],l=c=>c.remove();return r`
      <div class="ino-chip-story">
        ${e.map((c,i)=>r` <ino-chip
            value="${c}"
            removable="${i!==0}"
            @chipRemoved="${s=>l(s.target)}"
            >${c}
          </ino-chip>`)}
      </div>
    `}}),m=o({...n,docsFromProperty:"clickable",args:{clickable:!1}});n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`Story({
  ...InoChipMeta
})`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fill',
  args: {
    fill: 'solid'
  }
})`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fill',
  args: {
    fill: 'outline'
  }
})`,...h.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => html\`
    <div class="ino-chip-story">
      <ino-chip>
        Leading
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        Trailing
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
      <ino-chip>
        <span>Leading & Trailing</span>
        <ino-icon slot="icon-leading" icon="star"></ino-icon>
        <ino-icon slot="icon-trailing" icon="star"></ino-icon>
      </ino-chip>
    </div>
  \`
})`,...a.parameters?.docs?.source},description:{story:"In order to include icons, use the `icon-leading` or `icon-trailing` slot",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    const values = ['Chip 1', 'Chip 2', 'Chip 3'];
    const selectedChips = new Set<string>();
    const handleClick = (chip: HTMLInoChipElement | undefined) => {
      if (!chip?.value) {
        return;
      }
      const isSelected = selectedChips.has(chip.value);
      chip.selected = !isSelected;
      if (isSelected) {
        selectedChips.delete(chip.value);
      } else {
        selectedChips.add(chip.value);
      }
    };
    return html\`
      <div class="ino-chip-story">
        \${values.map(value => html\` <ino-chip value="\${value}" selectable @chipClicked="\${ev => handleClick(ev.target)}"
            >\${value}
          </ino-chip>\`)}
      </div>
    \`;
  }
})`,...t.parameters?.docs?.source},description:{story:"In order to use ino-chips as filter, use `selectable` on each element",...t.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: () => {
    const chips = ['Chip 1', 'Chip 2', 'Chip 3'];
    const handleClick = (chip: HTMLInoChipElement) => chip.remove();
    return html\`
      <div class="ino-chip-story">
        \${chips.map((value, index) => html\` <ino-chip
            value="\${value}"
            removable="\${index !== 0}"
            @chipRemoved="\${ev => handleClick(ev.target)}"
            >\${value}
          </ino-chip>\`)}
      </div>
    \`;
  }
})`,...p.parameters?.docs?.source},description:{story:"In order to make ino-chip-elements removable, add `removable`. This will add a close icon on the right side of this chip which emits the `removeChip` event on click.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'clickable',
  args: {
    clickable: false
  }
})`,...m.parameters?.docs?.source}}};const g=["Default","FillSolid","FillOutline","Icons","Filter","Remove","NotClickable"];export{n as Default,h as FillOutline,d as FillSolid,t as Filter,a as Icons,m as NotClickable,p as Remove,g as __namedExportsOrder,u as default};
