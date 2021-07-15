import { MDCList } from '@material/list';
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
import classNames from 'classnames';
import { getSlotContent, hasSlotContent } from '../../util/component-utils';

enum Slots {
  INPUT = 'input',
  LIST = 'list',
}

const NO_ITEM_SELECTED = -1;

@Component({
  tag: 'ino-autocomplete',
  styleUrl: 'ino-autocomplete.scss',
  shadow: false,
})
export class Autocomplete implements ComponentInterface {
  private inputEl: HTMLInoInputElement;
  private mdcList: MDCList;
  private listEl: HTMLInoListElement;
  private listItemsEl: HTMLInoListItemElement[];
  private listItemTexts: string[];
  private container: HTMLDivElement;
  private filteredListItems: HTMLInoListItemElement[];
  private selectedItem?: number = NO_ITEM_SELECTED;

  @Element() el: HTMLInoAutocompleteElement;

  @State() input: string = '';

  @Watch('input')
  onInputChange(newVal: string) {
    this.inputEl.value = newVal;
    this.filterListItems(newVal);
  }

  @State() menuIsVisible = false;

  @Event() itemSelected: EventEmitter<string>;

  componentWillLoad() {
    this.setupInput();
    this.setupList();
  }

  componentDidLoad() {
    this.container.appendChild(this.listEl);
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('inoFocus', this.onInputElFocus);
    this.inputEl.removeEventListener('inoBlur', this.onInputElBlur);
  }

  @Listen('valueChange')
  onValueChange(ev: CustomEvent<string>) {
    this.input = ev.detail;
  }

  @Listen('clickEl')
  onListItemClick(ev: CustomEvent<HTMLInoListItemElement>) {
    this.input = ev.detail.text;
    this.closeMenu();
  }

  @Listen('keydown')
  onArrowDownKey(ev: KeyboardEvent) {
    switch (ev.code) {
      case 'Enter': {
        if (this.input.length === 0 || this.selectedItem === NO_ITEM_SELECTED) {
          this.inputEl.blur();
        } else {
          this.input = this.getSelectedItem().text;
          this.inputEl.querySelector('input').blur();
        }
        break;
      }
    }
  }

  onInputKeydown = (ev: KeyboardEvent) => {
    if (ev.code !== 'ArrowDown' && ev.code !== 'ArrowUp') {
      return;
    }

    if (this.selectedItem !== NO_ITEM_SELECTED) {
      this.getSelectedItem().selected = false;
    }

    if (ev.code === 'ArrowDown') {
      const nextIndex = this.selectedItem + 1;
      this.selectedItem =
        nextIndex >= this.filteredListItems.length ? 0 : nextIndex;
    }

    if (ev.code === 'ArrowUp') {
      const nextIndex = this.selectedItem - 1;
      this.selectedItem =
        nextIndex < 0 ? this.filteredListItems.length - 1 : nextIndex;
    }

    this.filteredListItems[this.selectedItem].selected = true;
  };

  setupInput() {
    if (!hasSlotContent(this.el, Slots.INPUT)) {
      throw new Error(
        `The slot "${Slots.INPUT}" is empty. Please provide an input element to that slot.`
      );
    }

    this.inputEl = getSlotContent(this.el, Slots.INPUT) as HTMLInoInputElement;

    // Workaround because input does not throw native focus/blur events
    this.inputEl.addEventListener('inoFocus', this.onInputElFocus);
    this.inputEl.addEventListener('inoBlur', this.onInputElBlur);
    this.inputEl.addEventListener('keydown', this.onInputKeydown);
  }

  setupList() {
    if (!hasSlotContent(this.el, Slots.LIST)) {
      throw new Error(
        `The slot "${Slots.LIST}" is empty. Please provide a list element to that slot.`
      );
    }

    this.listEl = getSlotContent(this.el, Slots.LIST) as HTMLInoListElement;
    this.mdcList = new MDCList(this.listEl);
    this.mdcList.singleSelection = true;

    this.listItemsEl = Array.from(
      this.listEl.getElementsByTagName('ino-list-item')
    );
    this.filteredListItems = this.listItemsEl;
    this.listItemTexts = this.listItemsEl.map((item) => item.text);
    this.listEl.remove();
  }

  onInputElFocus = () => {
    // TODO: check if value is in items
    this.openMenu();
  };

  onInputElBlur = () => {
    this.closeMenu();
    if (!this.listItemTexts.includes(this.input)) {
      this.input = '';
      return;
    }

    this.itemSelected.emit(this.input);
  };

  // this.menuIsVisible = false

  private filterListItems(newVal: string) {
    // reset selection
    this.listItemsEl.forEach((item) => (item.selected = false));

    const matchingItems = this.listItemsEl.filter((item) =>
      item.text.includes(newVal)
    );
    const nonMatchingItems = this.listItemsEl.filter(
      (item) => !item.text.includes(newVal)
    );

    this.filteredListItems = matchingItems;
    this.selectedItem = NO_ITEM_SELECTED;

    matchingItems.forEach(
      (item) => this.listEl.firstElementChild?.appendChild(item) //(item.style.display = 'block')
    );
    nonMatchingItems.forEach(
      (item) => item.remove() // (item.style.display = 'none')
    );
  }

  private getSelectedItem = (): HTMLInoListItemElement | undefined =>
    this.selectedItem === NO_ITEM_SELECTED
      ? undefined
      : this.filteredListItems[this.selectedItem];

  private openMenu = () => (this.menuIsVisible = true);
  private closeMenu = () => (this.menuIsVisible = false);

  render() {
    const menuClasses = classNames({
      menu: true,
      'menu-hidden': !this.menuIsVisible,
      'menu-show': this.menuIsVisible,
    });

    return (
      <Host>
        <slot name={Slots.INPUT} />
        <div class={menuClasses} ref={(el) => (this.container = el)}>
          <slot name={Slots.LIST} />
        </div>
      </Host>
    );
  }
}
