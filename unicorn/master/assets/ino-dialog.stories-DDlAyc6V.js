import{b}from"./lit-html-IUDnlW1J.js";import{S as n}from"./StoryWrapper-Bs3Y9Jfd.js";import{l as f,m as x,n as $}from"./nidaros-DoXsHWp0.js";import"./elements-stencil-docs-BpOCemuM.js";const{useEffect:T}=__STORYBOOK_MODULE_PREVIEW_API__,y=o=>{const r=o.target;r.value=o.detail},D={title:"Structure/ino-dialog",component:"ino-dialog",decorators:[o=>(T(()=>{const r=e=>{const u=document.getElementById(e.target.parentElement.getAttribute("data-dialog-id"));u.open=!0},p=document.querySelectorAll(".open-dialog-btn");p.forEach(e=>e.addEventListener("click",r));const d=document.querySelectorAll("ino-dialog"),c=e=>{if(e.target.open=!1,e.target.id=="demo-action-dialog"){const u=document.createElement("ino-snackbar");u.innerText=`Closed with action: ${e.detail}`,document.body.appendChild(u)}};return d.forEach(e=>e.addEventListener("close",c)),d.forEach(e=>e.addEventListener("action",c)),()=>{p.forEach(e=>e.removeEventListener("click",r)),d.forEach(e=>e.removeEventListener("close",c)),d.forEach(e=>e.removeEventListener("action",c))}}),o())],render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      header-text="${o.headerText}"
      body-text="${o.bodyText}"
      action-text="${o.actionText}"
      cancel-text="${o.cancelText}"
      icon="${o.icon}"
      close-icon="${o.closeIcon}"
    >
    </ino-dialog>
  `,args:{attachTo:"",open:!1,dialogRole:"dialog",fullwidth:!1,dismissible:!0,headerText:"Hi, I am a headline",bodyText:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conset",actionText:"submit",cancelText:"cancel",icon:"search",buttonText:"Open Dialog",dataDialogId:"ino-dialog-1",closeICon:!1}},t=n({...D}),a=n({...t,render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      header-text="${o.headerText}"
      action-text="${o.actionText}"
      cancel-text="${o.cancelText}"
      body-text="${o.bodyText}"
    >
    </ino-dialog>
  `,args:{headerText:"Do you really want to delete your account?",bodyText:"After deleting your account, you will no longer be able to access your saved items.",cancelText:"Cancel",actionText:"Delete account",dataDialogId:"demo-conformation-with-text-dialog",buttonText:"Open confirmation Dialog with text"}}),i=n({...t,render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      header-text="${o.headerText}"
      action-text="${o.actionText}"
      body-text="${o.bodyText}"
      icon="${o.icon}"
    >
    </ino-dialog>
  `,args:{headerText:"Perfect! You almost made it...",bodyText:"A confirmation email is on the way. Please click on the link in the email to complete the registration and secure your discount code.",actionText:"Confirm",dataDialogId:"demo-conformation-with-icon-dialog",buttonText:"Open confirmation Dialog with icon",icon:"message"}}),s=n({...t,render:o=>b`
    <ino-button class="open-dialog-btn" data-dialog-id="${o.dataDialogId}">${o.buttonText}</ino-button>
    <ino-dialog
      id="${o.dataDialogId}"
      open="${o.open}"
      fullwidth="${o.fullwidth}"
      dismissible="${o.dismissible}"
      attach-to="${o.attachTo}"
      action-text="${o.actionText}"
      cancel-text="${o.cancelText}"
    >
      <header slot="header">
        <h3>Custom Header</h3>
        <ino-icon icon="info"></ino-icon>
      </header>
      <section slot="body">
        <ino-carousel
          class="customizable-carousel"
          value="0"
          autoplay="true"
          hide-buttons="true"
          infinite="true"
          intermission="2000"
          reverse="false"
          @valueChange="${y}"
        >
          <ino-carousel-slide src=${f} value="0"></ino-carousel-slide>
          <ino-carousel-slide src=${x} value="1"></ino-carousel-slide>
          <ino-carousel-slide src=${$} value="2"></ino-carousel-slide>
        </ino-carousel>
      </section>
      <footer slot="footer">
        <ino-button>Button 1</ino-button>
        <ino-button>Button 2</ino-button>
        <ino-button variant="outlined">Button 3</ino-button>
      </footer>
    </ino-dialog>
  `}),m=n({...t,docsFromProperty:"fullwidth",args:{fullwidth:!0,buttonText:"Open full width Dialog",dataDialogId:"demo-fullwidth-dialog"}}),g=n({...t,docsFromProperty:"dismissible",args:{dismissible:!0,buttonText:"Open dismissible Dialog",dataDialogId:"demo-dismissible-dialog"}}),h=n({...t,docsFromProperty:"closeIcon",args:{closeIcon:!0}}),l=n({...t,args:{dataDialogId:"demo-action-dialog",buttonText:"open closing action Dialog"}});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`Story({
  ...InoDialogMeta
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: args => html\`
    <ino-button class="open-dialog-btn" data-dialog-id="\${args.dataDialogId}">\${args.buttonText}</ino-button>
    <ino-dialog
      id="\${args.dataDialogId}"
      open="\${args.open}"
      fullwidth="\${args.fullwidth}"
      dismissible="\${args.dismissible}"
      attach-to="\${args.attachTo}"
      header-text="\${args.headerText}"
      action-text="\${args.actionText}"
      cancel-text="\${args.cancelText}"
      body-text="\${args.bodyText}"
    >
    </ino-dialog>
  \`,
  args: {
    headerText: 'Do you really want to delete your account?',
    bodyText: 'After deleting your account, you will no longer be able to access your saved items.',
    cancelText: 'Cancel',
    actionText: 'Delete account',
    dataDialogId: 'demo-conformation-with-text-dialog',
    buttonText: 'Open confirmation Dialog with text'
  }
})`,...a.parameters?.docs?.source},description:{story:"A Confirmation Dialog with Text requires an action to be taken in order for the dialog to be completed and closed.\n\nContains a `headerText`, `bodyText`, `cancelText` and `actionText`.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: args => html\`
    <ino-button class="open-dialog-btn" data-dialog-id="\${args.dataDialogId}">\${args.buttonText}</ino-button>
    <ino-dialog
      id="\${args.dataDialogId}"
      open="\${args.open}"
      fullwidth="\${args.fullwidth}"
      dismissible="\${args.dismissible}"
      attach-to="\${args.attachTo}"
      header-text="\${args.headerText}"
      action-text="\${args.actionText}"
      body-text="\${args.bodyText}"
      icon="\${args.icon}"
    >
    </ino-dialog>
  \`,
  args: {
    headerText: 'Perfect! You almost made it...',
    bodyText: 'A confirmation email is on the way. Please click on the link in the email to complete the registration and secure your discount code.',
    actionText: 'Confirm',
    dataDialogId: 'demo-conformation-with-icon-dialog',
    buttonText: 'Open confirmation Dialog with icon',
    icon: 'message'
  }
})`,...i.parameters?.docs?.source},description:{story:'A Confirmation Dialog with Hero Icon requires an acknowledgement of the information from the user. User has to confirm with one klick on the primary button.\n\n\nContains a `ino-icon` (use `icon="iconID"` on the `ino-dialog` to select one of the given [ino-icons](https://elements.inovex.de/version/v8.0.0/?path=/docs/graphic-ino-icon--all-icons)), `headerText`, `bodyText`, `canceltext` and `actionText`.',...i.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  render: args => html\`
    <ino-button class="open-dialog-btn" data-dialog-id="\${args.dataDialogId}">\${args.buttonText}</ino-button>
    <ino-dialog
      id="\${args.dataDialogId}"
      open="\${args.open}"
      fullwidth="\${args.fullwidth}"
      dismissible="\${args.dismissible}"
      attach-to="\${args.attachTo}"
      action-text="\${args.actionText}"
      cancel-text="\${args.cancelText}"
    >
      <header slot="header">
        <h3>Custom Header</h3>
        <ino-icon icon="info"></ino-icon>
      </header>
      <section slot="body">
        <ino-carousel
          class="customizable-carousel"
          value="0"
          autoplay="true"
          hide-buttons="true"
          infinite="true"
          intermission="2000"
          reverse="false"
          @valueChange="\${onSlideChanged}"
        >
          <ino-carousel-slide src=\${lightningImg} value="0"></ino-carousel-slide>
          <ino-carousel-slide src=\${mountainsImg} value="1"></ino-carousel-slide>
          <ino-carousel-slide src=\${nidarosImg} value="2"></ino-carousel-slide>
        </ino-carousel>
      </section>
      <footer slot="footer">
        <ino-button>Button 1</ino-button>
        <ino-button>Button 2</ino-button>
        <ino-button variant="outlined">Button 3</ino-button>
      </footer>
    </ino-dialog>
  \`
})`,...s.parameters?.docs?.source},description:{story:'By using `slot name="header"`, `slot name="body"` or `slot name="footer"` you can respectively replace the default `<header>`, `<section>` (body) or `<footer>` elements of the `ino-dialog` with your own custom content.\n\nBy using the default slot you can completely replace the elements of the `ino-dialog` with your own markdown.',...s.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'fullwidth',
  args: {
    fullwidth: true,
    buttonText: 'Open full width Dialog',
    dataDialogId: 'demo-fullwidth-dialog'
  }
})`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'dismissible',
  args: {
    dismissible: true,
    buttonText: 'Open dismissible Dialog',
    dataDialogId: 'demo-dismissible-dialog'
  }
})`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  docsFromProperty: 'closeIcon',
  args: {
    closeIcon: true
  }
})`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`Story({
  ...Default,
  args: {
    dataDialogId: 'demo-action-dialog',
    buttonText: 'open closing action Dialog'
  }
})`,...l.parameters?.docs?.source},description:{story:"Closing actions allow you to handle different button actions (like confirm, cancel, ...) using the `close` event listener on the dialog.\nClose the dialog and see the snackbar afterwards.",...l.parameters?.docs?.description}}};const S=["Default","ConfirmationDialogWithText","ConfirmationDialogWithIcon","UsingSlots","FullWidth","Dismissible","WithCloseIcon","ClosingAction"];export{l as ClosingAction,i as ConfirmationDialogWithIcon,a as ConfirmationDialogWithText,t as Default,g as Dismissible,m as FullWidth,s as UsingSlots,h as WithCloseIcon,S as __namedExportsOrder,D as default};
