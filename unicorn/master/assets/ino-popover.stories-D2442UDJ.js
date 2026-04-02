import{b as n}from"./lit-html-IUDnlW1J.js";import{S as r}from"./StoryWrapper-Bs3Y9Jfd.js";import"./elements-stencil-docs-BpOCemuM.js";let b=1;const f={title:"Notification/ino-popover",component:"ino-popover",parameters:{actions:{handles:["visibleChange ino-popover"]},docs:{story:{height:"200px"}}},argTypes:{placement:{control:{type:"select"},options:["top","right","bottom","left"]},trigger:{control:{type:"select"},options:["mouseenter","focus","click","mouseenter focus","mouseenter click","focus click","mouseenter focus click"]},colorScheme:{control:{type:"select"},options:["light","dark","primary"]},delay:{control:{type:"object"}},followCursor:{control:{type:"radio"},options:[!0,!1,"initial","horizontal","vertical"]}},render:e=>{const t=`popover-${b++}`;return n`
      <ino-button id="${t}" class="${e.placementClass}">Popover</ino-button>
      <ino-popover
        color-scheme="${e.colorScheme}"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${t}"
        interactive="${e.interactive}"
        .followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        <div style="display: flex; flex-direction: column; gap: 0.5rem; padding: 0.5rem">
          <p>Popovers are complex tooltips.</p>
          <ino-chip>
            Able to contain other HTML-Elements?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `},args:{controlled:!1,distance:15,for:"popover-target",interactive:!1,placement:"top",trigger:"mouseenter",colorScheme:"light",visible:!1,hideOnEsc:!1,hideOnBlur:!1,delay:0,arrow:!1,placementClass:"",headerText:""}},o=r({...f}),i=r({...o,docsFromProperty:"arrow",args:{arrow:!0}}),c=r({...o,docsFromProperty:"placement",args:{placement:"right",placementClass:"styled-placement"}}),a=r({...o,docsFromProperty:"attachToBody",args:{attachToBody:!0}}),s=r({...o,docsFromProperty:"distance",args:{distance:30}}),l=r({...o,docsFromProperty:"colorScheme",render:e=>{const t="popover-light",y="popover-dark",$="popover-primary",h=n`<p style="padding: 0.5rem">
      Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet ipsum do.
    </p>`;return n`
      <ino-button id="${t}">Light</ino-button>
      <ino-popover
        color-scheme="light"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${t}"
        interactive="${e.interactive}"
        followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        ${h}
      </ino-popover>
      <ino-button id="${y}">Dark</ino-button>
      <ino-popover
        color-scheme="dark"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${y}"
        interactive="${e.interactive}"
        followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        ${h}
      </ino-popover>
      <ino-button id="${$}">Primary</ino-button>
      <ino-popover
        color-scheme="primary"
        controlled="${e.controlled}"
        distance="${e.distance}"
        for="${$}"
        interactive="${e.interactive}"
        followCursor="${e.followCursor}"
        placement="${e.placement}"
        trigger="${e.trigger}"
        visible="${e.visible}"
        hide-on-blur="${e.hideOnBlur}"
        hide-on-esc="${e.hideOnEsc}"
        delay=${typeof e.delay=="number"?e.delay:[e.delay]}
        arrow="${e.arrow}"
      >
        ${h}
      </ino-popover>
    `}}),d=r({...o,docsFromProperty:"trigger",args:{trigger:"click"}}),p=r({...o,docsFromProperty:"followCursor",args:{followCursor:"horizontal"}}),m=r({...o,docsFromProperty:"interactive",render:()=>n`
    <ino-popover trigger="click" for="popover-interactive-target" distance="15" interactive placement="top">
      <div class="interactive-popover">
        <p>I'm interactive. You can click me without closing this popover!</p>
        <ino-button>Button not closing the popover</ino-button>
      </div>
    </ino-popover>
    <ino-button class="placement-button big-space" id="popover-interactive-target">Interactive Content </ino-button>
  `,args:{interactive:!0}}),u=r({...o,docsFromProperty:"controlled",render:()=>n`
      <ino-popover
        id="controlled-popover"
        placement="top"
        controlled="true"
        trigger="click"
        visible="false"
        distance="15"
        @visibleChanged="${t=>{t.target?.setAttribute("visible",t.detail),document.querySelector("#controlled-checkbox").checked=t.detail}}"
      >
        <ino-checkbox id="controlled-checkbox" slot="popover-trigger"> Uncheck to hide / check to show </ino-checkbox>
        <div style="padding: 0.5rem">
          <ino-chip>
            Programmatically shown?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    `,args:{controlled:!0}}),v=r({...o,docsFromProperty:"visible",args:{visible:!0}}),g=r({...o,docsFromProperty:"delay",args:{delay:[500,200]}});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`Story({
  ...InoPopoverMeta
})`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'arrow',
  args: {
    arrow: true
  }
})`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'placement',
  args: {
    placement: 'right',
    placementClass: 'styled-placement'
  }
})`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'attachToBody',
  args: {
    attachToBody: true
  }
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'distance',
  args: {
    distance: 30
  }
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'colorScheme',
  render: args => {
    const idLight = 'popover-light';
    const idDark = 'popover-dark';
    const idPrimary = 'popover-primary';
    const content = html\`<p style="padding: 0.5rem">
      Lorem ipsum do lor sit amet, con sete tur amet ipsum do, con sete tur amet ipsum do.
    </p>\`;
    return html\`
      <ino-button id="\${idLight}">Light</ino-button>
      <ino-popover
        color-scheme="light"
        controlled="\${args.controlled}"
        distance="\${args.distance}"
        for="\${idLight}"
        interactive="\${args.interactive}"
        followCursor="\${args.followCursor}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        visible="\${args.visible}"
        hide-on-blur="\${args.hideOnBlur}"
        hide-on-esc="\${args.hideOnEsc}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        \${content}
      </ino-popover>
      <ino-button id="\${idDark}">Dark</ino-button>
      <ino-popover
        color-scheme="dark"
        controlled="\${args.controlled}"
        distance="\${args.distance}"
        for="\${idDark}"
        interactive="\${args.interactive}"
        followCursor="\${args.followCursor}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        visible="\${args.visible}"
        hide-on-blur="\${args.hideOnBlur}"
        hide-on-esc="\${args.hideOnEsc}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        \${content}
      </ino-popover>
      <ino-button id="\${idPrimary}">Primary</ino-button>
      <ino-popover
        color-scheme="primary"
        controlled="\${args.controlled}"
        distance="\${args.distance}"
        for="\${idPrimary}"
        interactive="\${args.interactive}"
        followCursor="\${args.followCursor}"
        placement="\${args.placement}"
        trigger="\${args.trigger}"
        visible="\${args.visible}"
        hide-on-blur="\${args.hideOnBlur}"
        hide-on-esc="\${args.hideOnEsc}"
        delay=\${typeof args.delay === 'number' ? args.delay : [args.delay]}
        arrow="\${args.arrow}"
      >
        \${content}
      </ino-popover>
    \`;
  }
})`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'trigger',
  args: {
    trigger: 'click'
  }
})`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'followCursor',
  args: {
    followCursor: 'horizontal'
  }
})`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'interactive',
  render: () => html\`
    <ino-popover trigger="click" for="popover-interactive-target" distance="15" interactive placement="top">
      <div class="interactive-popover">
        <p>I'm interactive. You can click me without closing this popover!</p>
        <ino-button>Button not closing the popover</ino-button>
      </div>
    </ino-popover>
    <ino-button class="placement-button big-space" id="popover-interactive-target">Interactive Content </ino-button>
  \`,
  args: {
    interactive: true
  }
})`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'controlled',
  render: () => {
    const eventHandler = e => {
      e.target?.setAttribute('visible', e.detail);
      (document.querySelector('#controlled-checkbox') as HTMLInputElement).checked = e.detail;
    };
    return html\`
      <ino-popover
        id="controlled-popover"
        placement="top"
        controlled="true"
        trigger="click"
        visible="false"
        distance="15"
        @visibleChanged="\${eventHandler}"
      >
        <ino-checkbox id="controlled-checkbox" slot="popover-trigger"> Uncheck to hide / check to show </ino-checkbox>
        <div style="padding: 0.5rem">
          <ino-chip>
            Programmatically shown?
            <ino-icon slot="icon-trailing" icon="checkmark"></ino-icon>
          </ino-chip>
        </div>
      </ino-popover>
    \`;
  },
  args: {
    controlled: true
  }
})`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'visible',
  args: {
    visible: true
  }
})`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'delay',
  args: {
    delay: [500, 200]
  }
})`,...g.parameters?.docs?.source}}};const C=["Default","Arrow","Placement","AttachToBody","Distance","ColorSchemes","Trigger","FollowCursor","Interactive","Controlled","Visible","Delay"];export{i as Arrow,a as AttachToBody,l as ColorSchemes,u as Controlled,o as Default,g as Delay,s as Distance,p as FollowCursor,m as Interactive,c as Placement,d as Trigger,v as Visible,C as __namedExportsOrder,f as default};
