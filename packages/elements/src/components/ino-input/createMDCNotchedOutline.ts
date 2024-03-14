import {
  MDCNotchedOutline,
  MDCNotchedOutlineFoundation,
  strings,
  numbers,
} from '@material/notched-outline';

const NOTCH_PADDING = numbers.NOTCH_ELEMENT_PADDING + 2;

const isMac = navigator.userAgent.toUpperCase().includes('MAC');

export function createMDCNotchedOutline(el: HTMLElement, isDense?: boolean) {
  const notchElement: HTMLElement = el.querySelector(
    strings.NOTCH_ELEMENT_SELECTOR,
  );
  const textLabel = notchElement.querySelector('.mdc-floating-label');
  const textLabelWidth = textLabel?.clientWidth ?? 0;
  const scaleFactor = isDense ? 0.66 : 0.76;

  // is required because Mac and Windows do render bold fonts differently
  const extraScaleFactor = isMac ? 0.1 : 0
  let lastNotchWidth = 0;

  return new MDCNotchedOutline(
    el,
    new MDCNotchedOutlineFoundation({
      addClass(className: string) {
        el.classList.add(className);
      },
      removeClass(className: string) {
        el.classList.remove(className);
      },
      setNotchWidthProperty(width: number) {
        let newWidth = width;
        if (textLabelWidth > 0) {
          newWidth = textLabelWidth * (scaleFactor + extraScaleFactor) + NOTCH_PADDING;
        }

        if (lastNotchWidth !== newWidth) {
          console.log({textLabelWidth,newWidth })
          notchElement.style.setProperty('width', newWidth + 'px');
          lastNotchWidth = newWidth;
        }
      },
      removeNotchWidthProperty() {
        notchElement.style.removeProperty('width');
        lastNotchWidth = 0;
      },
    }),
  );
}
