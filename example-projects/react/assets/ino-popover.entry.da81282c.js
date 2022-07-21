import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { t as tippy, f as followCursor } from "./tippy.esm-b9178e7b.345a8049.js";
import { g as getSlotContent } from "./component-utils-1c4ae7be.6d485fb9.js";
import { c as closest } from "./ponyfill-495ec32d.2f34f215.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const hideOnPopperBlur = {
  name: "hideOnPopperBlur",
  defaultValue: true,
  fn(instance) {
    return {
      onCreate() {
        instance.popper.addEventListener("focusout", (event) => {
          if (instance.props.hideOnPopperBlur && event.relatedTarget && !instance.popper.contains(event.relatedTarget)) {
            instance.hide();
          }
        });
      }
    };
  }
};
const hideOnEsc = {
  name: "hideOnEsc",
  defaultValue: true,
  fn({ hide }) {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        hide();
      }
    }
    return {
      onShow() {
        document.addEventListener("keydown", onKeyDown);
      },
      onHide() {
        document.removeEventListener("keydown", onKeyDown);
      }
    };
  }
};
const inoPopoverCss = ".tippy-box[data-animation=scale-subtle][data-placement^=top]{transform-origin:bottom}.tippy-box[data-animation=scale-subtle][data-placement^=bottom]{transform-origin:top}.tippy-box[data-animation=scale-subtle][data-placement^=left]{transform-origin:right}.tippy-box[data-animation=scale-subtle][data-placement^=right]{transform-origin:left}.tippy-box[data-animation=scale-subtle][data-state=hidden]{transform:scale(.8);opacity:0}.ino-popover>*{border-radius:6px}.ino-popover.ino-popover--color-scheme-primary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#5d60f7;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-secondary>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#bbd962;color:#fff;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-light>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#e7e7e7;color:#000;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}.ino-popover.ino-popover--color-scheme-transparent>*{font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1rem;font-weight:400;z-index:9999;background:#fff;color:#777777;box-shadow:0 0 8px 0 rgba(0, 0, 0, 0.3)}";
const POPOVER_CLOSE_ATTRIBUTE = "data-ino-close";
let Popover = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.visibleChanged = createEvent(this, "visibleChanged", 7);
    this.placement = "auto";
    this.attachToBody = false;
    this.hideOnBlur = false;
    this.hideOnEsc = false;
    this.distance = 10;
    this.colorScheme = "primary";
    this.interactive = false;
    this.followCursor = false;
    this.trigger = "mouseenter focus";
    this.controlled = false;
    this.visible = false;
  }
  placementChanged() {
    var _a;
    (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.setProps({
      placement: this.placement
    });
  }
  bodyChanged() {
    this.create();
  }
  forChanged() {
    this.create();
  }
  hideOnBlurChanged() {
    this.create();
  }
  hideOnEscChanged() {
    this.create();
  }
  distanceChanged() {
    var _a;
    (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.setProps({
      offset: [0, this.distance]
    });
  }
  interactiveChanged() {
    this.create();
  }
  followCursorChanged() {
    this.create();
  }
  triggerChanged() {
    var _a;
    (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.setProps({
      trigger: this.trigger
    });
  }
  async getTippyInstance() {
    return this.tippyInstance;
  }
  controlledChanged() {
    this.create();
  }
  visibleChangeHandler(show) {
    var _a, _b;
    if (!this.controlled) {
      return;
    }
    show ? (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.show() : (_b = this.tippyInstance) === null || _b === void 0 ? void 0 : _b.hide();
  }
  componentDidLoad() {
    this.create();
  }
  create() {
    var _a;
    (_a = this.tippyInstance) === null || _a === void 0 ? void 0 : _a.destroy();
    if (!this.target && this.for) {
      console.warn(`The element with the id '${this.for}' could not be found.`);
    }
    const plugins = [];
    if (this.hideOnBlur) {
      plugins.push(hideOnPopperBlur);
    }
    if (this.hideOnEsc) {
      plugins.push(hideOnEsc);
    }
    const shouldFollowCursor = this.followCursor && this.followCursor !== "false";
    if (shouldFollowCursor) {
      plugins.push(followCursor);
    }
    const options = {
      allowHTML: true,
      animation: "scale-subtle",
      appendTo: this.attachToBody ? document.body : this.popoverContainer,
      content: this.popoverContent,
      duration: 100,
      followCursor: shouldFollowCursor ? this.followCursor : false,
      placement: this.placement,
      trigger: this.trigger,
      offset: [0, this.distance],
      plugins: [
        ...plugins,
        {
          fn: () => ({
            onMount: () => {
              const datepickers = Array.from(this.el.querySelectorAll("ino-datepicker"));
              datepickers === null || datepickers === void 0 ? void 0 : datepickers.forEach((datepicker) => datepicker.redraw());
              const target = this.popoverContent.querySelector("ino-input[data-ino-focus],ino-datepicker[data-ino-focus],  ino-textarea[data-ino-focus]");
              target === null || target === void 0 ? void 0 : target.setFocus();
            },
            onShow: () => {
              if (this.controlled && !this.visible) {
                this.visibleChanged.emit(true);
                return false;
              }
            },
            onHide: () => {
              if (this.controlled && this.visible) {
                this.visibleChanged.emit(false);
                return false;
              }
            }
          })
        }
      ],
      onShow: () => {
        if (this.controlled && !this.visible) {
          this.visibleChanged.emit(true);
          return false;
        }
      },
      onHide: () => {
        if (this.controlled && this.visible) {
          this.visibleChanged.emit(false);
          return false;
        }
      }
    };
    if (this.interactive) {
      options["interactive"] = true;
    }
    this.tippyInstance = tippy(this.target, options);
  }
  get target() {
    const slotContent = getSlotContent(this.el, "popover-trigger");
    if (slotContent)
      return slotContent;
    if (this.for)
      return document.getElementById(this.for);
    return this.el.parentElement;
  }
  handlePopoverClick(e) {
    if (!e.target) {
      return;
    }
    const element = closest(e.target, `[${POPOVER_CLOSE_ATTRIBUTE}]`);
    if (!element) {
      return;
    }
    this.tippyInstance.hide();
  }
  render() {
    const popoverClasses = classnames("ino-popover", `ino-popover--color-scheme-${this.colorScheme}`, "ino-popover__content");
    return h(Host, null, h("slot", { name: "popover-trigger" }), h("div", { ref: (ref) => this.popoverContainer = ref }, h("div", { class: popoverClasses, role: "tooltip", ref: (ref) => this.popoverContent = ref, onClick: this.handlePopoverClick.bind(this) }, h("slot", null))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "placement": ["placementChanged"],
      "attachToBody": ["bodyChanged"],
      "for": ["forChanged"],
      "hideOnBlur": ["hideOnBlurChanged"],
      "hideOnEsc": ["hideOnEscChanged"],
      "distance": ["distanceChanged"],
      "interactive": ["interactiveChanged"],
      "followCursor": ["followCursorChanged"],
      "trigger": ["triggerChanged"],
      "controlled": ["controlledChanged"],
      "visible": ["visibleChangeHandler"]
    };
  }
};
Popover.style = inoPopoverCss;
export { Popover as ino_popover };
