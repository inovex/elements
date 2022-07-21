import { r as registerInstance, h, H as Host, g as getElement } from "./index.b6f2f263.js";
import { c as classnames } from "./index-7e3a00fd.39ad80ca.js";
import "./_commonjsHelpers-6ccee0aa.3580eb33.js";
/*!
 * Crafted with ❤ by inovex GmbH
 */
const inoCarouselCss = "ino-carousel{--carousel-icon-color:var(--ino-carousel-icon-color, #fff);--carousel-width:var(--ino-carousel-width, 700px);--carousel-height:var(--ino-carousel-height, 400px);--carousel-animation-duration:var(--ino-carousel-animation-duration, 700ms)}ino-carousel .ino-carousel{position:relative;height:var(--carousel-height);width:var(--carousel-width);overflow:hidden}ino-carousel .ino-carousel__left-arrow,ino-carousel .ino-carousel__right-arrow{display:flex;align-items:center;justify-content:center;position:absolute;bottom:0;flex-direction:column;height:100%}ino-carousel .ino-carousel__left-arrow ino-icon,ino-carousel .ino-carousel__right-arrow ino-icon{--icon-color:var(--carousel-icon-color)}ino-carousel .ino-carousel--no-buttons .ino-carousel__left-arrow,ino-carousel .ino-carousel--no-buttons .ino-carousel__right-arrow{display:none}ino-carousel .ino-carousel__right-arrow{right:16px}ino-carousel .ino-carousel__left-arrow{left:16px}ino-carousel .ino-carousel__container{height:100%}ino-carousel .ino-carousel--animated.ino-carousel-slide--selected{animation:fadeIn var(--carousel-animation-duration)}@keyframes fadeIn{from{opacity:0}to{opacity:1}}ino-carousel .ino-carousel--animated:not(.ino-carousel-slide--selected){animation:fadeOut var(--carousel-animation-duration)}@keyframes fadeOut{from{opacity:1}to{opacity:0}}";
let InoCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.currentSlide = 0;
    this.slideCounter = 1;
    this.autoplay = false;
    this.animated = false;
    this.hideButtons = false;
    this.infinite = false;
    this.intermission = 5e3;
    this.reverse = false;
    this.addAnimationToSlide = (slide) => {
      if (!this.animated)
        return;
      if (!slide.classList.contains("ino-carousel--animated")) {
        slide.classList.add("ino-carousel--animated");
      }
    };
    this.configureSlides = () => {
      if (this.slides.length < 1)
        return;
      if (!this.selectSlide(this.value))
        this.slides[this.currentSlide].classList.add("ino-carousel-slide--selected");
    };
    this.configureAutoplay = () => {
      if (this.slides.length < 1)
        return;
      if (this.autoplay) {
        this.timer = setInterval(this.nextSlide, this.intermission);
        return;
      }
      clearInterval(this.timer);
    };
    this.nextSlide = () => {
      if (this.slides.length < 1)
        throw new Error("There are no slides to display");
      this.slides[this.currentSlide].classList.remove("ino-carousel-slide--selected");
      this.addAnimationToSlide(this.slides[this.currentSlide]);
      this.currentSlide = this.getNextSlide();
      this.addAnimationToSlide(this.slides[this.currentSlide]);
      this.slides[this.currentSlide].classList.add("ino-carousel-slide--selected");
      this.slideCounter++;
      if (!this.infinite && this.slideCounter >= this.slides.length) {
        this.slideCounter = 1;
        clearInterval(this.timer);
      }
    };
    this.mod = (a, b) => (a % b + b) % b;
    this.getNextSlide = () => this.reverse ? this.mod(this.currentSlide - 1, this.slides.length) : this.mod(this.currentSlide + 1, this.slides.length);
  }
  valueChanged(newVal) {
    this.addAnimationToSlide(this.slides[this.currentSlide]);
    this.selectSlide(newVal);
    this.addAnimationToSlide(this.slides[this.currentSlide]);
  }
  autoplayChanged() {
    this.configureAutoplay();
  }
  componentDidLoad() {
    this.slides = this.getSlides();
    this.configureSlides();
    this.configureAutoplay();
  }
  selectSlide(value) {
    let slideSelected = false;
    this.slides.forEach((slide) => {
      if (value === slide.value) {
        slide.classList.add("ino-carousel-slide--selected");
        this.currentSlide = this.slides.indexOf(slide);
        slideSelected = true;
      } else {
        slide.classList.remove("ino-carousel-slide--selected");
      }
    });
    return slideSelected;
  }
  getSlides() {
    return Array.from(this.el.querySelectorAll("ino-carousel-slide"));
  }
  render() {
    const classes = classnames({
      "ino-carousel": true,
      "ino-carousel--no-buttons": this.hideButtons
    });
    return h(Host, { value: this.value }, h("div", { class: classes }, h("div", { class: "ino-carousel__container" }, h("slot", null)), h("div", { class: "ino-carousel__left-arrow" }, h("ino-icon-button", { icon: "arrow_left" })), h("div", { class: "ino-carousel__right-arrow" }, h("ino-icon-button", { icon: "arrow_right" }))));
  }
  get el() {
    return getElement(this);
  }
  static get watchers() {
    return {
      "value": ["valueChanged"],
      "autoplay": ["autoplayChanged"]
    };
  }
};
InoCarousel.style = inoCarouselCss;
export { InoCarousel as ino_carousel };
