import { r as registerInstance, h, H as Host } from "./index.b6f2f263.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoHeaderCss = ":host{--header-color:var(--ino-header-color, #525368);--header-box-color:var(--ino-header-box-color, rgba(0, 0, 0, 0.05))}:host .header-container{display:table-row}:host p{font-size:13px;font-weight:600;color:var(--header-color);white-space:nowrap;display:table-cell}:host .header-separator{display:table-cell;width:100%}:host .header-inner-box{margin-left:6px;border-radius:1px;background-color:var(--header-box-color);height:10px}";
let Header = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentDidLoad() {
    if (this.text) {
      console.warn('[ino-header] The attribute "text" is deprecated, please use the default slot instead.');
    }
  }
  render() {
    return h(Host, null, h("div", { class: "header-container" }, h("p", null, this.text ? this.text : h("slot", null)), h("div", { class: "header-separator" }, h("div", { class: "header-inner-box" }))));
  }
};
Header.style = inoHeaderCss;
export { Header as ino_header };
