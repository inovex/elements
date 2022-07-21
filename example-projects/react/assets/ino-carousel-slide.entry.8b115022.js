import { r as registerInstance, h, H as Host, g as getElement } from "./index.b6f2f263.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoCarouselSlideCss = "ino-carousel-slide{display:block;position:absolute;width:100%;height:100%;opacity:0}ino-carousel-slide>div{background-size:cover;background-position:50%;width:100%;height:100%}ino-carousel-slide.ino-carousel-slide--selected{opacity:1}";
let InoCarouselSlide = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h(Host, null, h("div", { style: { "background-image": `url(${this.src})` } }));
  }
  get el() {
    return getElement(this);
  }
};
InoCarouselSlide.style = inoCarouselSlideCss;
export { InoCarouselSlide as ino_carousel_slide };
