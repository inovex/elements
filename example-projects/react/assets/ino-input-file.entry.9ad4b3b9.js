import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoInputFileCss = "ino-input-file{--input-file-box-height:var(--ino-input-file-box-height, 300px);--input-file-box-width:var(--ino-input-file-box-width, 100%)}ino-input-file .ino-input-file__native-element{visibility:hidden;height:0;width:0}ino-input-file .ino-input-file__dnd{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:white;border:2px dashed #3d40f5;border-radius:20px;height:var(--input-file-box-height);width:var(--input-file-box-width)}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text{display:flex;flex-direction:column;justify-content:space-evenly;align-items:center;margin-bottom:15px}ino-input-file .ino-input-file__dnd .ino-input-file__dnd-text label{color:#3d40f5;font-family:var(--ino-font-family, Lato, Verdana, sans-serif);font-size:1.25rem;font-weight:400}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-dragover:not(.ino-input-file__dnd-disabled){background-color:#f5f5ff}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled{background-color:#e7e7e7;border:2px solid #e7e7e7}ino-input-file .ino-input-file__dnd.ino-input-file__dnd-disabled label{color:#777777}";
let InputFile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.changeFile = createEvent(this, "changeFile", 7);
    this.eventListeners = [];
    this.label = "Select file";
    this.dragAndDrop = false;
    this.dragAndDropText = "Drag your files here";
    this.dragAndDropSecondaryText = "or";
  }
  componentDidLoad() {
    this.configureDragAndDrop();
  }
  disconnectedCallback() {
    this.eventListeners.forEach((tuple) => this.removeEventListeners(this.el, tuple[0], tuple[1]));
  }
  addEventListeners(el, events, fn) {
    this.eventListeners.push([events, fn]);
    events.split(" ").forEach((e) => {
      el.addEventListener(e, fn);
    });
  }
  browserSupportsDragAndDrop() {
    return "draggable" in this.el || "ondragstart" in this.el && "ondrop" in this.el && "FormData" in window && "FileReader" in window;
  }
  configureDragAndDrop() {
    if (this.dragAndDrop && this.browserSupportsDragAndDrop()) {
      const box = this.el.querySelector(".ino-input-file__dnd");
      this.addEventListeners(this.el, "drag dragstart dragend dragover dragenter dragleave drop", (e) => {
        e.preventDefault();
        e.stopPropagation();
      });
      this.addEventListeners(this.el, "dragover dragenter", () => {
        box.classList.add("ino-input-file__dnd-dragover");
      });
      this.addEventListeners(this.el, "dragend dragleave drop", () => box.classList.remove("ino-input-file__dnd-dragover"));
      this.el.addEventListener("drop", (e) => {
        if (this.disabled) {
          return;
        }
        const files = e.dataTransfer.files;
        if (!this.multiple) {
          this.changeFile.emit({ e, files: Array.from(files).slice(0, 1) });
          return;
        }
        this.changeFile.emit({ e, files: Array.from(files) });
      });
    }
  }
  onFileChange(e) {
    const target = e.target;
    const files = target.files;
    this.changeFile.emit({ e, files: Array.from(files) });
  }
  removeEventListeners(el, events, fn) {
    events.split(" ").forEach((e) => el.removeEventListener(e, fn));
  }
  selectFiles() {
    const input = this.el.querySelector(".ino-input-file__native-element");
    input.click();
  }
  render() {
    const classes = classnames({
      "ino-input-file__composer": !this.dragAndDrop,
      "ino-input-file__dnd": this.dragAndDrop,
      "ino-input-file__dnd-disabled": this.dragAndDrop && this.disabled
    });
    return h(Host, null, h("div", { class: classes }, this.dragAndDrop && h("div", { class: "ino-input-file__dnd-text" }, h("label", null, this.dragAndDropText), h("label", null, this.dragAndDropSecondaryText)), h("ino-button", { class: "ino-input-file__button", name: "file-paths", autoFocus: this.autoFocus, disabled: this.disabled, onClick: () => this.selectFiles(), "icon-leading": true }, h("ino-icon", { icon: "upload", slot: "icon-leading" }), this.label), h("input", { class: "ino-input-file__native-element", accept: this.accept, disabled: this.disabled, multiple: this.multiple, name: this.name, required: this.required, type: "file", "aria-hidden": "true", onChange: (e) => this.onFileChange(e) })));
  }
  get el() {
    return getElement(this);
  }
};
InputFile.style = inoInputFileCss;
export { InputFile as ino_input_file };
