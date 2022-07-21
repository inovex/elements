import { r as registerInstance, c as createEvent, h, H as Host, a as getAssetPath } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
class SvgParser {
  static setSvgTitle(svgContent, title) {
    const parsedSVG = this.parser.parseFromString(svgContent, "image/svg+xml");
    const titleTag = parsedSVG.querySelector("title");
    if (titleTag) {
      titleTag.innerHTML = title;
    }
    return this.serializer.serializeToString(parsedSVG);
  }
  static removeSvgTitle(svgContent) {
    const parsedSVG = this.parser.parseFromString(svgContent, "image/svg+xml");
    const titleTag = parsedSVG.querySelector("title");
    if (titleTag) {
      titleTag.remove();
    }
    return this.serializer.serializeToString(parsedSVG);
  }
}
SvgParser.parser = new DOMParser();
SvgParser.serializer = new XMLSerializer();
let CACHED_MAP;
const fallbackIconNames = {
  "status_abwesend": "status_away",
  "status_aktuelle": "status_current",
  "status_offboarding_laufend": "offboarding_running",
  "status_onboarding_laufend": "onboarding_running",
  "status_vergangene": "status_past",
  "status_zukuenftige": "status_future"
};
function getIconMap() {
  if (!CACHED_MAP) {
    const win = window;
    win.inoIcons = win.inoIcons || {};
    CACHED_MAP = win.inoIcons.map = win.inoIcons.map || /* @__PURE__ */ new Map();
  }
  return CACHED_MAP;
}
const getSrc = (src) => {
  if (isStr(src)) {
    src = src.trim();
    if (isSrc(src)) {
      return src;
    }
  }
  return null;
};
function getName(name) {
  const iconName = fallbackIconNames[name] || name;
  if (iconName && !isSrc(iconName)) {
    return iconName;
  }
  return void 0;
}
function getUrl(src, icon) {
  let url = getSrc(src);
  if (url) {
    return url;
  }
  url = getName(icon);
  if (url) {
    return getNamedUrl(url);
  }
  return getSrc(icon);
}
function getNamedUrl(name) {
  var _a;
  return (_a = getIconMap().get(name)) !== null && _a !== void 0 ? _a : getAssetPath(`./ino-icon/${name}.svg`);
}
const isSrc = (str) => str.length > 0 && /(\/|\.)/.test(str);
const isStr = (val) => typeof val === "string";
const validateContent = (svgContent) => {
  if (svgContent) {
    const div = document.createElement("div");
    div.innerHTML = svgContent;
    for (let i = div.childNodes.length - 1; i >= 0; i--) {
      if (div.childNodes[i].nodeName.toLowerCase() !== "svg") {
        div.removeChild(div.childNodes[i]);
      }
    }
    const svgElm = div.firstElementChild;
    if (svgElm && svgElm.nodeName.toLowerCase() === "svg") {
      const svgClass = svgElm.getAttribute("class") || "";
      svgElm.setAttribute("class", (svgClass + " s-ion-icon").trim());
      if (isValid(svgElm)) {
        return div.innerHTML;
      }
    }
  }
  return "";
};
const isValid = (elm) => {
  if (elm.nodeType === 1) {
    if (elm.nodeName.toLowerCase() === "script") {
      return false;
    }
    for (let i = 0; i < elm.attributes.length; i++) {
      const val = elm.attributes[i].value;
      if (isStr(val) && val.toLowerCase().indexOf("on") === 0) {
        return false;
      }
    }
    for (let i = 0; i < elm.childNodes.length; i++) {
      if (!isValid(elm.childNodes[i])) {
        return false;
      }
    }
  }
  return true;
};
const inoiconContent = /* @__PURE__ */ new Map();
const requests = /* @__PURE__ */ new Map();
const getSvgContent = (url) => {
  let req = requests.get(url);
  if (req === void 0) {
    req = fetch(url).then((rsp) => {
      if (rsp.ok) {
        return rsp.text().then((svgContent) => {
          inoiconContent.set(url, validateContent(svgContent));
        });
      }
      inoiconContent.set(url, "");
    });
    requests.set(url, req);
  }
  return req;
};
const inoIconCss = ":host{--icon-width:var(--ino-icon-width, 1em);--icon-height:var(--ino-icon-height, 1em)}:host(.ino-icon--color-scheme-primary){--icon-color:var(\n    --ino-icon-color-primary,\n    var(--ino-global-primary-color, #3d40f5)\n  )}:host(.ino-icon--color-scheme-secondary){--icon-color:var(\n    --ino-icon-color-secondary,\n    var(--ino-global-secondary-color, #9ccd00)\n  )}:host{display:inline-flex;flex-direction:column;justify-content:center}:host i{font-size:inherit;display:flex;flex-direction:row;justify-content:center;font-style:normal}:host i[role=button]{cursor:pointer}:host svg{color:var(--icon-color);fill:var(--icon-color);height:var(--icon-height);width:var(--icon-width)}";
let Icon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.clickEl = createEvent(this, "clickEl", 7);
  }
  iconChanged() {
    this.loadIcon();
  }
  watchHandler(content) {
    if (content) {
      this.svgContent = this.svgTitle ? SvgParser.setSvgTitle(this.svgContent, this.svgTitle) : SvgParser.removeSvgTitle(this.svgContent);
    }
  }
  componentWillLoad() {
    this.loadIcon();
  }
  loadIcon() {
    const url = getUrl(this.src, this.icon);
    if (url) {
      if (inoiconContent.has(url)) {
        this.svgContent = inoiconContent.get(url);
      } else {
        getSvgContent(url).then(() => this.svgContent = inoiconContent.get(url));
      }
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.clickEl.emit(true);
  }
  handleKeyPress(e) {
    if (e.code === "Enter") {
      e.preventDefault();
      this.clickEl.emit(true);
    }
  }
  render() {
    if (!this.svgContent) {
      return;
    }
    const hostClasses = classnames({
      "ino-icon--color-scheme-primary": !this.colorSecondary,
      "ino-icon--color-scheme-secondary": this.colorSecondary
    });
    let iconProps = {};
    if (this.clickable) {
      iconProps = {
        onClick: (e) => this.handleClick(e),
        onKeyPress: (e) => this.handleKeyPress(e),
        tabindex: 0,
        role: "button"
      };
    }
    return h(Host, { class: hostClasses }, h("i", Object.assign({ innerHTML: this.svgContent }, iconProps)));
  }
  static get watchers() {
    return {
      "icon": ["iconChanged"],
      "svgContent": ["watchHandler"]
    };
  }
};
Icon.style = inoIconCss;
export { Icon as ino_icon };
