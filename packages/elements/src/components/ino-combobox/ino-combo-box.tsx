import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  State,
  Watch,
} from '@stencil/core';
import { getSlotContent, hasSlotContent } from '../../util/component-utils';

enum Slots {
  INPUT = 'input',
  LIST = 'list',
}

@Component({
  tag: 'ino-combo-box',
  styleUrl: 'ino-combo-box.scss',
  shadow: false,
})
export class ComboBox implements ComponentInterface {
  private static COMBOX_BOX_COUNTER = 1;

  private list: HTMLInoListElement;
  private listItems: HTMLInoListItemElement[];
  private input: HTMLInoInputElement;

  choices: string[];

  @Element() el;

  @State() value: string;

  @Watch('value')
  valueWatcher(newValue: string) {
    this.input.value = newValue;
  }

  @Event() myEv: EventEmitter<string>;

  @Listen('valueChange')
  onValueChange(ev: CustomEvent<string>) {
    this.value = ev.detail;

    const matchingItems = this.listItems.filter((item) =>
      item.text.includes(this.value)
    );
    const nonMatchingItems = this.listItems.filter(
      (item) => !item.text.includes(this.value)
    );
    console.log(matchingItems, nonMatchingItems);
    matchingItems.forEach((item) => (item.style.display = 'block'));
    nonMatchingItems.forEach((item) => (item.style.display = 'none'));

    ev.stopPropagation();
  }

  @Listen('clickEl')
  onListItemClick(ev: CustomEvent<HTMLInoListItemElement>) {
    const { text } = ev.detail;
    this.value = text;
  }

  onInputBlur = (choices: string[]) => {
    if (!choices.includes(this.value)) {
      this.value = '';
    }
    this.myEv.emit(this.value);
  };

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
    this.input.id = `combo-box-input-${ComboBox.COMBOX_BOX_COUNTER++}`;
  }

  setupList() {
    if (!hasSlotContent(this.el, Slots.LIST)) {
      throw new Error(
        `The slot "${Slots.LIST}" is empty. Please provide a list element to that slot.`
      );
    }

    this.list = getSlotContent(this.el, Slots.LIST) as HTMLInoListElement;
  }

  componentDidLoad() {
    const listItems: NodeListOf<HTMLInoListItemElement> = this.list.querySelectorAll(
      'ino-list-item'
    );

    this.listItems = Array.from(listItems);
    this.choices = this.listItems.map((item) => item.text);

    this.input.addEventListener('inoBlur', (e) => {
      console.log(e);
      this.onInputBlur(this.choices);
    });
  }

  disconnectedCallback() {
    this.input.removeEventListener('inoBlur', () =>
      this.onInputBlur(this.choices)
    );
  }

  render() {
    return (
      <Host>
        <slot name={Slots.INPUT} />
        <ino-popover
          colorScheme="transparent"
          controlled
          visible
          interactive
          placement="bottom"
          for={this.input.id}
          trigger="click"
        >
          <slot name={Slots.LIST} />
        </ino-popover>
      </Host>
    );
  }
}
