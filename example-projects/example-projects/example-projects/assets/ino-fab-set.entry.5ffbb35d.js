import{r as d,h as o,H as p,g as c}from"./index.b0db46e4.js";import{c as i}from"./index-b7e5b0c5.07a60787.js";import{h as e}from"./component-utils-1c4ae7be.6d485fb9.js";import"./_commonjsHelpers-212d567a.0ea80d68.js";/*!
 * Crafted with ❤ by inovex GmbH
 */const r=":host{position:fixed;display:flex;width:auto}:host .ino-fab-set-wrapper{display:flex}:host .ino-fab-set-wrapper ::slotted(*){padding:5px}:host .ino-fab-set-wrapper ::slotted(*) .mdc-fab .mdc-fab__icon{font-size:25px}:host .ino-fab-set-wrapper .ino-speed-dial{display:none;align-items:center}:host .ino-fab-set-wrapper .ino-fab-set-button{padding:5px;align-self:center}:host .ino-fab-set-wrapper ::slotted([slot=icon-opened]),:host .ino-fab-set-wrapper .ino-fab-set-icon--opened{display:none}:host .ino-fab-set-wrapper ::slotted([slot=icon-closed]),:host .ino-fab-set-wrapper .ino-fab-set-icon--closed{display:block}:host(.ino-fab-set--open-dial) .ino-speed-dial{display:flex}:host(.ino-fab-set--open-dial) ino-fab{transition-duration:100ms}:host(.ino-top-bottom-location-top){top:20px}:host(.ino-top-bottom-location-bottom){bottom:20px}:host(.ino-left-right-location-left){left:20px}:host(.ino-left-right-location-right){right:20px}:host .ino-direction-top.ino-fab-set-wrapper{flex-direction:column}:host .ino-direction-top.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-bottom .ino-fab-set-icon{transform:rotate(180deg)}:host .ino-direction-bottom.ino-fab-set-wrapper{flex-direction:column-reverse}:host .ino-direction-bottom.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-left .ino-fab-set-icon{transform:rotate(270deg)}:host .ino-direction-left.ino-fab-set-wrapper{flex-direction:row}:host .ino-direction-left.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-right .ino-fab-set-icon{transform:rotate(90deg)}:host .ino-direction-right.ino-fab-set-wrapper{flex-direction:row-reverse}:host .ino-direction-right.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}",f=class{constructor(t){d(this,t),this.dialDirection="top",this.topBottomLocation="bottom",this.leftRightLocation="left",this.openDial=!1}render(){const t=i({"ino-fab-set--open-dial":this.openDial},"ino-top-bottom-location-"+this.topBottomLocation,"ino-left-right-location-"+this.leftRightLocation),n=i({"ino-speed-dial":!0}),s=i("ino-fab-set-wrapper","ino-direction-"+this.dialDirection),a=e(this.el,"icon-closed"),l=e(this.el,"icon-opened");return o(p,{class:t},o("div",{class:s},o("div",{class:n},o("slot",null)),o("ino-fab",{id:"primary-fab",class:"ino-fab-set-button","edge-position":"none","tooltip-placement":"none"},a?o("slot",{slot:"icon-leading",name:"icon-closed"}):o("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--closed",slot:"icon-leading",icon:"_fab_set_arrow_up"}),l?o("slot",{slot:"icon-leading",name:"icon-opened"}):o("ino-icon",{class:"ino-fab-set-icon ino-fab-set-icon--opened",slot:"icon-leading",icon:"_fab_set_arrow_down"}))))}get el(){return c(this)}};f.style=r;export{f as ino_fab_set};
