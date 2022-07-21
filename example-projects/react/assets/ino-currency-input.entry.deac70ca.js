import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
class Config {
  get(key, fallback) {
    const value = this.storage && this.storage[key];
    return value !== null && value !== void 0 ? value : fallback;
  }
  patch(key, value) {
    if (this.storage && this.storage[key]) {
      this.storage[key] = value;
    }
  }
  get storage() {
    if (typeof window !== "undefined") {
      const configWrapper = window.inoElements;
      if (configWrapper && configWrapper.config) {
        return configWrapper.config;
      }
    }
    return null;
  }
}
const config = new Config();
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoCurrencyInputCss = "";
let CurrencyInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
    this.defaultLocale = "de-DE";
    this.handleValueChange = (e) => {
      let value = e.detail;
      value = !value ? null : this.fromCurrencyString(value);
      if (!Number.isNaN(value)) {
        this.hiddenValue = value;
        this.valueChange.emit(value);
      }
      e.stopPropagation();
    };
    this.handleFocus = () => {
      this.inoInputEl.value = this.trimCurrencyString(this.inoInputEl.value);
    };
    this.handleBlur = () => {
      const value = this.hiddenInputEl.value;
      if (value && value != "null") {
        this.inoInputEl.value = this.toCurrencyString(value);
      }
    };
  }
  valueChanged(value) {
    var _a;
    if (!value && value !== 0 || value === "null") {
      this.hiddenValue = null;
      this.inputValue = null;
    } else if (value != ((_a = this.hiddenInputEl) === null || _a === void 0 ? void 0 : _a.value)) {
      this.hiddenValue = value.toString();
      this.inputValue = this.toCurrencyString(value);
    }
  }
  componentDidLoad() {
    var _a;
    this.inoInputEl = this.el.querySelector("ino-input");
    (_a = this.inoInputEl) === null || _a === void 0 ? void 0 : _a.setUserInputInterceptor((value) => this.trimCurrencyString(value));
    if (!this.inoInputEl) {
      console.error("currency input requires ino-input as child");
    }
    if (this.inoInputEl.type !== "text") {
      console.error('currency input has to be of type "text"');
    }
    this.initialize();
  }
  connectedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.inoInputEl) === null || _a === void 0 ? void 0 : _a.removeEventListener("inoFocus", this.handleFocus);
    (_b = this.inoInputEl) === null || _b === void 0 ? void 0 : _b.removeEventListener("inoBlur", this.handleBlur);
    (_c = this.inoInputEl) === null || _c === void 0 ? void 0 : _c.removeEventListener("valueChange", this.handleValueChange);
  }
  initialize() {
    var _a, _b, _c;
    if (this.hiddenInputEl) {
      this.setupHiddenInput();
    }
    (_a = this.inoInputEl) === null || _a === void 0 ? void 0 : _a.addEventListener("inoFocus", this.handleFocus);
    (_b = this.inoInputEl) === null || _b === void 0 ? void 0 : _b.addEventListener("inoBlur", this.handleBlur);
    (_c = this.inoInputEl) === null || _c === void 0 ? void 0 : _c.addEventListener("valueChange", this.handleValueChange);
  }
  set hiddenValue(value) {
    if (this.hiddenInputEl) {
      this.hiddenInputEl.value = value;
    }
  }
  set inputValue(value) {
    if (this.inoInputEl) {
      this.inoInputEl.value = value;
    }
  }
  setupHiddenInput() {
    this.hiddenValue = String(this.value);
    this.hiddenInputEl.name = this.inoInputEl.name;
    this.inoInputEl.name = null;
    this.inoInputEl.resetOnChange = false;
    this.hiddenInputEl.min = this.inoInputEl.min;
    this.hiddenInputEl.max = this.inoInputEl.max;
    this.hiddenInputEl.disabled = this.inoInputEl.disabled;
    this.hiddenInputEl.required = this.inoInputEl.required;
    this.inoInputEl.value = this.toCurrencyString(this.value);
  }
  getSeperator() {
    return this.toCurrencyString(0).charAt(1);
  }
  toCurrencyString(value) {
    var _a;
    if (!value && value !== 0)
      return null;
    const locale = ((_a = this.currencyLocale) === null || _a === void 0 ? void 0 : _a.length) > 0 ? this.currencyLocale : config.get("currencyLocale", this.defaultLocale);
    const opts = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return Intl.NumberFormat(locale, opts).format(Number(value));
  }
  trimCurrencyString(value) {
    if (!value) {
      return value;
    }
    const leadingSymbol = this.extractLeadingSymbol(value);
    const separator = this.getSeperator();
    const numberParts = this.removeNonDecimalValues(value).split(separator);
    value = numberParts[0];
    if (numberParts.length > 1) {
      value += separator + numberParts[1].substring(0, 2);
    }
    return leadingSymbol + value;
  }
  fromCurrencyString(value) {
    const leadingSymbol = this.extractLeadingSymbol(value);
    const separator = this.getSeperator();
    const newValue = this.removeNonDecimalValues(value).replace(separator, ".");
    return Number(leadingSymbol + newValue);
  }
  extractLeadingSymbol(value) {
    var _a;
    const min = (_a = this.inoInputEl) === null || _a === void 0 ? void 0 : _a.min;
    const requirePositive = min && Number(min) >= 0;
    return requirePositive ? "" : value.startsWith("-") ? "-" : "";
  }
  removeNonDecimalValues(value) {
    const currencyRegex = new RegExp(`[^${this.getSeperator()}0-9]`, "g");
    return value.replace(currencyRegex, "");
  }
  render() {
    return h(Host, null, h("input", { type: "hidden", ref: (el) => this.hiddenInputEl = el, value: this.value }), h("slot", null));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"]
    };
  }
};
CurrencyInput.style = inoCurrencyInputCss;
export { CurrencyInput as ino_currency_input };
