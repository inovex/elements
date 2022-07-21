import { r as registerInstance, h, H as Host } from "./index.b6f2f263.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoFormRowCss = "ino-form-row{box-sizing:border-box}ino-form-row>.ino-form-row__composer{display:flex;align-items:center;box-sizing:border-box;width:100%;padding:2px}ino-form-row .ino-form-row__element{flex:1}ino-form-row .ino-form-row__label{width:120px}";
let FormRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("div", { class: "ino-form-row__composer" }, h("div", { class: "ino-form-row__label" }, this.label, this.mandatory && h("span", null, "*")), h("div", { class: "ino-form-row__element" }, h("slot", null))));
  }
};
FormRow.style = inoFormRowCss;
export { FormRow as ino_form_row };
