import { r as registerInstance, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { t as tippy } from "./tippy.esm-b9178e7b.345a8049.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoTooltipCss = "ino-tooltip .ino-tooltip__composer{font-size:0.8rem;text-align:center;letter-spacing:0;padding:4px 8px;border-radius:6px}ino-tooltip.ino-tooltip--color-scheme-primary .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-secondary .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#bbd962;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-light .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#e7e7e7;color:#000;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}ino-tooltip.ino-tooltip--color-scheme-transparent .ino-tooltip__composer{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}";
let Tooltip = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.colorScheme = "primary";
    this.placement = "auto";
    this.trigger = "mouseenter focus";
    this.retrieveTarget = () => this.for ? document.getElementById(this.for) : this.el.parentElement;
  }
  async placementChanged() {
    await this.create();
  }
  async forChanged() {
    await this.create();
  }
  async triggerChanged() {
    await this.create();
  }
  async getTippyInstance() {
    return this.tooltipInstance;
  }
  async componentDidLoad() {
    await this.create();
  }
  async create() {
    await this.dispose();
    this.target = this.retrieveTarget();
    if (!this.target) {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      this.target = this.retrieveTarget();
    }
    if (!this.target) {
      throw new Error(`Target with the ID '${this.for}' could not be found in this document.`);
    }
    const options = {
      content: this.el,
      duration: 100,
      placement: this.placement,
      trigger: this.trigger
    };
    this.tooltipInstance = tippy(this.target, options);
    this.target.addEventListener("keyup", this.onEnterTarget.bind(this));
    this.target.addEventListener("blur", this.onLeaveTarget.bind(this), true);
    if (this.trigger.includes("hover")) {
      this.target.addEventListener("mouseleave", this.onLeaveTarget.bind(this));
    }
  }
  async dispose() {
    if (this.tooltipInstance) {
      await this.tooltipInstance.destroy();
      this.target.removeEventListener("keyup", this.onEnterTarget.bind(this));
      this.target.removeEventListener("blur", this.onLeaveTarget.bind(this), true);
      this.target.removeEventListener("mouseleave", this.onLeaveTarget.bind(this));
    }
  }
  onEnterTarget(e) {
    if (e.code === "Tab" && !this.trigger.includes("click")) {
      this.tooltipInstance.show();
    }
    if (e.code === "Escape") {
      this.tooltipInstance.hide();
    }
  }
  onLeaveTarget() {
    this.tooltipInstance.hide();
  }
  render() {
    const hostClasses = classnames(`ino-tooltip--color-scheme-${this.colorScheme}`);
    return h(Host, { class: hostClasses }, h("div", { class: "ino-tooltip__composer", role: "tooltip" }, h("div", { class: "ino-tooltip__inner" }, this.label ? this.label : h("slot", null))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "placement": ["placementChanged"],
      "for": ["forChanged"],
      "trigger": ["triggerChanged"]
    };
  }
};
Tooltip.style = inoTooltipCss;
export { Tooltip as ino_tooltip };
