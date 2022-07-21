import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import { m as moveCursorToEnd, g as getSlotContent } from "./component-utils-1c4ae7be.6d485fb9.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
class Debouncer {
  constructor() {
    this.timeout = null;
  }
  debounce(func, timeout = 300) {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.timeout = setTimeout(() => {
      func();
      this.timeout = null;
    }, timeout);
  }
}
const inoAutocompleteCss = ":host{position:relative}:host .menu{width:var(--input-width, max-content);max-height:var(--ino-autocomplete-list-max-height, 225px);position:absolute;top:76px;z-index:10;background-color:white;box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);border-bottom-left-radius:5px;border-bottom-right-radius:5px;overflow:auto}:host .menu-hidden{display:none}:host .menu-shown{display:block}:host .no-options-text{padding-left:16px;padding-right:16px;color:#9b9b9b}";
const NO_OPTION_SELECTED = -1;
let Autocomplete = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.debouncer = new Debouncer();
    this._selectedOptionIndex = NO_OPTION_SELECTED;
    this.menuIsVisible = false;
    this.noOptionsIsVisible = false;
    this.debounceTimeout = 300;
    this.noOptionsText = "No Option";
    this.onEnterPress = () => {
      this.onOptionSelect();
      this.inputEl.getInputElement().then(moveCursorToEnd);
    };
    this.onOptionSelect = () => {
      if (!this.selectedOption) {
        return;
      }
      this.inputChanged(this.selectedOption.innerText);
      this.emitValueOfSelectedOption();
      this.closeMenu();
    };
    this.onArrowDownPress = () => {
      const nextIndex = this.filteredOptionEls.findIndex((o) => {
        var _a;
        return o.value === ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value);
      }) + 1;
      const isIndexOutOfBound = nextIndex >= this.filteredOptionEls.length;
      const filteredOptionIndex = isIndexOutOfBound ? 0 : nextIndex;
      this.selectedOptionIndex = this.optionEls.indexOf(this.filteredOptionEls[filteredOptionIndex]);
    };
    this.onArrowUpPress = () => {
      const nextIndex = this.filteredOptionEls.findIndex((o) => {
        var _a;
        return o.value === ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value);
      }) - 1;
      const isIndexOutOfBound = nextIndex < 0;
      const filteredOptionIndex = isIndexOutOfBound ? this.filteredOptionEls.length - 1 : nextIndex;
      this.selectedOptionIndex = this.optionEls.indexOf(this.filteredOptionEls[filteredOptionIndex]);
    };
    this.scroll = (ev) => {
      ev.preventDefault();
      const { offsetTop, clientHeight: optionHeight } = this.selectedOption;
      const { scrollTop, clientHeight } = this.menuContainer;
      if (offsetTop + optionHeight / 2 > scrollTop + clientHeight || offsetTop < scrollTop) {
        this.menuContainer.scrollTo(0, offsetTop);
      }
    };
    this.setupInput = () => {
      this.inputEl = getSlotContent(this.el, "input");
      if (!this.inputEl) {
        throw new Error(`The slot "input" is empty. Please provide an <ino-input> element to that slot.`);
      }
      if (this.inputEl.value) {
        console.warn("The value property of the <ino-input> is managed by the <ino-autocomplete> and therefore should not be set manually.");
      }
      this.inputEl.addEventListener("inoFocus", this.onInoInputFocus);
      this.inputEl.addEventListener("inoBlur", this.onInoInputBlur);
      this.menuContainer.style.setProperty("--input-width", window.getComputedStyle(this.inputEl).width);
      this.setOptionByValue(this.value);
    };
    this.onInoInputFocus = () => {
      if (!this.inputEl.disabled) {
        this.openMenu();
      }
    };
    this.onInoInputBlur = (event) => {
      var _a;
      if (this.isOptionClick(event.detail)) {
        return;
      }
      this.closeMenu();
      const newIndex = this.optionEls.findIndex((option) => option.innerText.trim() === this.inputEl.value.trim());
      if (newIndex !== this.selectedOptionIndex) {
        this.selectedOptionIndex = newIndex;
        this.emitValueOfSelectedOption();
      }
      this.inputChanged(((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.innerText) || "");
    };
    this.isOptionClick = (ev) => ev.relatedTarget && (ev.relatedTarget.matches(".mdc-list-item") || ev.relatedTarget.matches("ino-option"));
    this.emitValueOfSelectedOption = () => {
      var _a;
      this.valueChange.emit((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value);
    };
    this.inputChanged = (searchTerm) => {
      if (!this.inputEl) {
        return;
      }
      this.inputEl.value = searchTerm || "";
      this.debouncer.debounce(() => this.filterOptions(this.inputEl.value), this.debounceTimeout);
    };
    this.filterOptions = (newVal) => {
      this.filteredOptionEls = this.optionEls.filter((option) => {
        const matched = option.innerText.trim().toLowerCase().includes(newVal.trim().toLowerCase());
        option.style.display = matched ? "block" : "none";
        return matched;
      });
      this.noOptionsIsVisible = this.filteredOptionEls.length === 0;
    };
    this.setupOptions = () => {
      this.optionEls = Array.from(this.el.getElementsByTagName("ino-option"));
      this.filteredOptionEls = this.optionEls;
      this.setOptionByValue(this.value);
    };
    this.setOptionByValue = (value) => {
      var _a;
      if (!this.optionEls) {
        return;
      }
      this.selectedOptionIndex = this.optionEls.findIndex((oEl) => oEl.value === value);
      this.inputChanged((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.innerText);
    };
    this.onListItemClick = (ev) => {
      const { parentElement } = ev.target;
      if (parentElement.nodeName.toLowerCase() !== "ino-option" && parentElement.parentElement.nodeName.toLowerCase() !== "ino-option") {
        return;
      }
      const inoOption = parentElement.nodeName.toLowerCase() === "ino-option" ? parentElement : parentElement.parentElement;
      this.selectedOptionIndex = this.optionEls.findIndex((oEl) => oEl.value === inoOption.value);
      this.onOptionSelect();
    };
    this.openMenu = () => this.menuIsVisible = true;
    this.closeMenu = () => this.menuIsVisible = false;
  }
  set selectedOptionIndex(index) {
    if (this.selectedOption) {
      this.selectedOption.selected = false;
    }
    this._selectedOptionIndex = index;
    this.selectedOption = index >= 0 ? this.optionEls[index] : void 0;
    if (this.selectedOption) {
      this.selectedOption.selected = true;
    }
  }
  get selectedOptionIndex() {
    return this._selectedOptionIndex;
  }
  onValueChange(newValue, oldValue) {
    if (newValue === oldValue) {
      return;
    }
    this.setOptionByValue(newValue);
  }
  componentDidLoad() {
    this.setupInput();
  }
  disconnectedCallback() {
    this.inputEl.removeEventListener("inoFocus", this.onInoInputFocus);
    this.inputEl.removeEventListener("inoBlur", this.onInoInputBlur);
  }
  onInoInputValueChange(ev) {
    if (ev.target.tagName.toLowerCase() === "ino-input") {
      ev.stopImmediatePropagation();
      this.inputChanged(ev.detail);
    }
  }
  onKeyDown(ev) {
    if (!this.filteredOptionEls || this.filteredOptionEls.length === 0) {
      return;
    }
    const blackList = ["Enter", "Escape", "Tab"];
    if (!this.menuIsVisible && !blackList.includes(ev.code)) {
      this.openMenu();
    }
    switch (ev.code) {
      case "Enter":
        this.onEnterPress();
        break;
      case "ArrowDown":
        this.openMenu();
        this.onArrowDownPress();
        this.scroll(ev);
        break;
      case "ArrowUp":
        this.openMenu();
        this.onArrowUpPress();
        this.scroll(ev);
        break;
      case "Escape":
        this.closeMenu();
        break;
      case "Tab":
        break;
      default:
        this.openMenu();
    }
  }
  render() {
    const hostClasses = classnames({
      "no-options-found": this.noOptionsIsVisible,
      "menu-open": this.menuIsVisible
    });
    const menuClasses = classnames({
      menu: true,
      "menu-hidden": !this.menuIsVisible,
      "menu-shown": this.menuIsVisible
    });
    return h(Host, { class: hostClasses }, h("slot", { name: "input" }), h("div", { class: menuClasses, ref: (el) => this.menuContainer = el, onMouseDown: (ev) => this.onListItemClick(ev) }, h("div", { class: "mdc-list" }, this.noOptionsIsVisible && h("p", { class: "no-options-text" }, this.noOptionsText), h("slot", { onSlotchange: this.setupOptions }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["onValueChange"]
    };
  }
};
Autocomplete.style = inoAutocompleteCss;
export { Autocomplete as ino_autocomplete };
