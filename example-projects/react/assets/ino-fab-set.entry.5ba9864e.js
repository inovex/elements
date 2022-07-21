import { r as registerInstance, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { h as hasSlotContent } from "./component-utils-1c4ae7be.6d485fb9.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoFabSetCss = ":host{position:fixed;display:flex;width:auto}:host .ino-fab-set-wrapper{display:flex}:host .ino-fab-set-wrapper ::slotted(*){padding:5px}:host .ino-fab-set-wrapper ::slotted(*) .mdc-fab .mdc-fab__icon{font-size:25px}:host .ino-fab-set-wrapper .ino-speed-dial{display:none;align-items:center}:host .ino-fab-set-wrapper .ino-fab-set-button{padding:5px;align-self:center}:host .ino-fab-set-wrapper ::slotted([slot=icon-opened]),:host .ino-fab-set-wrapper .ino-fab-set-icon--opened{display:none}:host .ino-fab-set-wrapper ::slotted([slot=icon-closed]),:host .ino-fab-set-wrapper .ino-fab-set-icon--closed{display:block}:host(.ino-fab-set--open-dial) .ino-speed-dial{display:flex}:host(.ino-fab-set--open-dial) ino-fab{transition-duration:100ms}:host(.ino-top-bottom-location-top){top:20px}:host(.ino-top-bottom-location-bottom){bottom:20px}:host(.ino-left-right-location-left){left:20px}:host(.ino-left-right-location-right){right:20px}:host .ino-direction-top.ino-fab-set-wrapper{flex-direction:column}:host .ino-direction-top.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-bottom .ino-fab-set-icon{transform:rotate(180deg)}:host .ino-direction-bottom.ino-fab-set-wrapper{flex-direction:column-reverse}:host .ino-direction-bottom.ino-fab-set-wrapper .ino-speed-dial{flex-direction:column}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-left .ino-fab-set-icon{transform:rotate(270deg)}:host .ino-direction-left.ino-fab-set-wrapper{flex-direction:row}:host .ino-direction-left.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}:host .ino-direction-right .ino-fab-set-icon{transform:rotate(90deg)}:host .ino-direction-right.ino-fab-set-wrapper{flex-direction:row-reverse}:host .ino-direction-right.ino-fab-set-wrapper .ino-speed-dial{flex-direction:row}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-closed]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--closed{display:none}:host(.ino-fab-set--open-dial) ::slotted([slot=icon-opened]),:host(.ino-fab-set--open-dial) .ino-fab-set-icon--opened{display:block}";
let Fab = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.dialDirection = "top";
    this.topBottomLocation = "bottom";
    this.leftRightLocation = "left";
    this.openDial = false;
  }
  render() {
    const hostClasses = classnames({
      "ino-fab-set--open-dial": this.openDial
    }, "ino-top-bottom-location-" + this.topBottomLocation, "ino-left-right-location-" + this.leftRightLocation);
    const speedDialClasses = classnames({
      "ino-speed-dial": true
    });
    const directionClasses = classnames("ino-fab-set-wrapper", "ino-direction-" + this.dialDirection);
    const hasClosedIcon = hasSlotContent(this.el, "icon-closed");
    const hasOpenedIcon = hasSlotContent(this.el, "icon-opened");
    return h(Host, { class: hostClasses }, h("div", { class: directionClasses }, h("div", { class: speedDialClasses }, h("slot", null)), h("ino-fab", { id: "primary-fab", class: "ino-fab-set-button", "edge-position": "none", "tooltip-placement": "none" }, hasClosedIcon ? h("slot", { slot: "icon-leading", name: "icon-closed" }) : h("ino-icon", { class: "ino-fab-set-icon ino-fab-set-icon--closed", slot: "icon-leading", icon: "_fab_set_arrow_up" }), hasOpenedIcon ? h("slot", { slot: "icon-leading", name: "icon-opened" }) : h("ino-icon", { class: "ino-fab-set-icon ino-fab-set-icon--opened", slot: "icon-leading", icon: "_fab_set_arrow_down" }))));
  }
  get el() {
    return getElement(this);
  }
};
Fab.style = inoFabSetCss;
export { Fab as ino_fab_set };
