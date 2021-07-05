import { Component, ComponentInterface, Element, h, Host } from '@stencil/core';
import {
  getSlotContent,
  hasSlotContent,
  setAttributes,
} from '../../util/component-utils';

enum Slots {
  INPUT = 'input',
  LIST = 'list',
}

@Component({
  tag: 'ino-autocomplete',
  styleUrl: 'ino-autocomplete.scss',
  shadow: false,
})
export class Autocomplete implements ComponentInterface {
  @Element() el: HTMLInoAutocompleteElement;

  private static COMBOX_BOX_COUNTER = 1;

  private list: HTMLInoListElement;
  private input: HTMLInoInputElement;

  componentWillLoad() {
    this.setupInput();
    this.setupList();
  }

  setupInput() {
    if (!hasSlotContent(this.el, Slots.INPUT)) {
      throw new Error(
        `The slot "${Slots.INPUT}" is empty. Please provide an input element to that slot.`
      );
    }

    this.input = getSlotContent(this.el, Slots.INPUT) as HTMLInoInputElement;
    this.input.id = `combo-box-input-${Autocomplete.COMBOX_BOX_COUNTER++}`;
  }

  setupList() {
    if (!hasSlotContent(this.el, Slots.LIST)) {
      throw new Error(
        `The slot "${Slots.LIST}" is empty. Please provide a list element to that slot.`
      );
    }

    this.list = getSlotContent(this.el, Slots.LIST) as HTMLInoListElement;
    this.list.remove();
  }

  async componentDidLoad() {
    const inoPopover: HTMLInoPopoverElement = document.createElement(
      'ino-popover'
    );
    const popoverProps: Partial<HTMLInoPopoverElement> = {
      colorScheme: 'transparent',
      interactive: true,
      placement: 'bottom',
      for: this.input.id,
      trigger: 'focus click',
    };

    setAttributes(inoPopover, popoverProps);

    inoPopover.getTippyInstance().then((tippy) =>
      tippy.setProps({
        onShow: this.onTippyShow,
      })
    );

    this.el.appendChild(inoPopover);
  }

  private onTippyShow = (instance) => {
    const innerTippy = instance.popper.querySelector('.ino-tooltip__inner');
    innerTippy.appendChild(this.list);
  };

  render() {
    return (
      <Host>
        <slot name={Slots.INPUT} />
        <slot name={Slots.LIST} />
      </Host>
    );
  }
}
