import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoRadioGroupCss = "ino-radio-group .ino-radio-group-wrapper{width:fit-content}ino-radio-group ino-radio:last-child{margin-right:8px}";
let RadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.valueChange = createEvent(this, "valueChange", 7);
  }
  valueChanged(value) {
    this.updateRadios(value);
  }
  async componentDidLoad() {
    this.updateRadios(this.value);
    const radios = await this.getRadios();
    radios.forEach((radio) => {
      radio.addEventListener("mouseover", () => this.addHoverAnimation(radio));
      radio.addEventListener("mouseout", () => this.removeHoverAnimation());
    });
  }
  async disconnectedCallback() {
    const radios = await this.getRadios();
    radios.forEach((radio) => {
      radio.removeEventListener("mouseover", () => this.addHoverAnimation(radio));
      radio.removeEventListener("mouseout", () => this.removeHoverAnimation());
    });
  }
  async handleKeyDown(ev) {
    var _a, _b;
    if (!ev.key.startsWith("Arrow"))
      return;
    ev.preventDefault();
    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) => Boolean(radio.checked));
    if (!checkedRadio) {
      this.valueChange.emit(radios[0].value);
      return;
    }
    let nextRadioButton;
    switch (ev.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextRadioButton = (_a = checkedRadio.nextElementSibling) !== null && _a !== void 0 ? _a : radios[0];
        break;
      case "ArrowUp":
      case "ArrowLeft":
        nextRadioButton = (_b = checkedRadio.previousElementSibling) !== null && _b !== void 0 ? _b : radios[radios.length - 1];
        break;
    }
    this.valueChange.emit(nextRadioButton.value);
  }
  async addHoverAnimation(hoveredRadio) {
    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) => Boolean(radio.checked));
    if (!checkedRadio || hoveredRadio === checkedRadio) {
      return;
    }
    checkedRadio.classList.add("ino-checked-hover");
  }
  async removeHoverAnimation() {
    const radios = await this.getRadios();
    const checkedRadio = radios.find((radio) => radio.classList.contains("ino-checked-hover"));
    if (!checkedRadio) {
      return;
    }
    checkedRadio.classList.remove("ino-checked-hover");
  }
  async updateRadios(value) {
    const radios = await this.getRadios();
    let hasChecked = false;
    for (const radio of radios) {
      if (radio.checked) {
        radio.classList.remove("ino-checked-hover");
      }
      if (!hasChecked && radio.value === value) {
        hasChecked = true;
        radio.checked = true;
      } else {
        radio.checked = false;
      }
    }
    if (!hasChecked) {
      console.warn(`No ino-radio button with value=${value} was found.`);
    }
  }
  getRadios() {
    return Promise.all(Array.from(this.el.querySelectorAll("ino-radio")));
  }
  render() {
    return h(Host, null, h("div", { class: "ino-radio-group-wrapper", tabIndex: 0 }, h("slot", null)));
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
RadioGroup.style = inoRadioGroupCss;
export { RadioGroup as ino_radio_group };
