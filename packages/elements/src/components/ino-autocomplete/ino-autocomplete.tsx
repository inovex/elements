import {
  Component,
  ComponentInterface,
  Element,
  h,
  Host,
  Listen,
  State,
  Watch,
} from '@stencil/core';
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

  @State() input: string = '';

  @Watch('input')
  onInputChange(newVal: string) {
    this.inputEl.value = newVal;
    this.filterListItems(newVal);
  }

  private filterListItems(newVal: string) {
    const matchingItems = this.listItemsEl.filter((item) =>
      item.text.includes(newVal)
    );
    const nonMatchingItems = this.listItemsEl.filter(
      (item) => !item.text.includes(newVal)
    );
    console.log(matchingItems, nonMatchingItems);

    //matchingItems.forEach((item) => (item.style.backgroundColor = 'green'));
    //nonMatchingItems.forEach((item) => (item.style.backgroundColor = 'red'));
  }

  private static COMBOX_BOX_COUNTER = 1;

  private inputEl: HTMLInoInputElement;
  private popoverEl: HTMLInoPopoverElement;
  private listEl: HTMLInoListElement;
  private listItemsEl: HTMLInoListItemElement[];

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

    this.inputEl = getSlotContent(this.el, Slots.INPUT) as HTMLInoInputElement;
    this.inputEl.id = `combo-box-input-${Autocomplete.COMBOX_BOX_COUNTER++}`;

    // Workaround because input does not throw native focus/blur events
    this.inputEl.addEventListener('inoFocus', this.onInputElFocus);
    this.inputEl.addEventListener('inoBlur', this.onInputElBlur);
  }

  @Listen('valueChange')
  onValueChange(ev: CustomEvent<string>) {
    this.input = ev.detail;
  }

  onInputElFocus = () => (this.popoverEl.visible = true);

  onInputElBlur = () => (this.popoverEl.visible = false);

  setupList() {
    if (!hasSlotContent(this.el, Slots.LIST)) {
      throw new Error(
        `The slot "${Slots.LIST}" is empty. Please provide a list element to that slot.`
      );
    }

    this.listEl = getSlotContent(this.el, Slots.LIST) as HTMLInoListElement;
    this.listItemsEl = Array.from(
      this.listEl.getElementsByTagName('ino-list-item')
    );
    this.listEl.remove();
  }

  async componentDidLoad() {
    this.setupPopover();
  }

  private setupPopover() {
    this.popoverEl = document.createElement('ino-popover');
    const popoverProps: Partial<HTMLInoPopoverElement> = {
      colorScheme: 'transparent',
      controlled: true,
      interactive: true,
      placement: 'bottom',
      for: this.inputEl.id,
      trigger: 'manual',
      visible: false,
    };

    setAttributes(this.popoverEl, popoverProps);

    this.popoverEl.getTippyInstance().then((tippy) =>
      tippy.setProps({
        onHide: () => console.log('hiding'),
        onShow: this.onTippyShow,
      })
    );

    this.el.appendChild(this.popoverEl);
  }

  private onTippyShow = (instance) => {
    const innerTippy = instance.popper.querySelector('.ino-tooltip__inner');
    innerTippy.appendChild(this.listEl);
  };

  disconnectedCallback() {
    this.inputEl.removeEventListener('inoFocus', this.onInputElFocus);
    this.inputEl.removeEventListener('inoBlur', this.onInputElBlur);
  }

  render() {
    return (
      <Host>
        <slot name={Slots.INPUT} />
        <slot name={Slots.LIST} />
      </Host>
    );
  }
}
