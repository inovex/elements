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
    if (!['Enter', 'ArrowDown', 'ArrowUp'].includes(ev.code)) {
      return;
    }

    if (ev.code === 'Enter' && this.isAnyItemSelected()) {
      this.input = this.getSelectedItem().text;
      this.inputEl.querySelector('input').blur();
      return;
    }

    if (this.isAnyItemSelected()) {
      this.deselectItem();
    }

    if (ev.code === 'ArrowDown') {
      const nextIndex = this.selectedItem + 1;
      this.selectedItem =
        nextIndex >= this.filteredListItems.length ? 0 : nextIndex;
      this.selectItem();
    }

    if (ev.code === 'ArrowUp') {
      const nextIndex = this.selectedItem - 1;
      this.selectedItem =
        nextIndex < 0 ? this.filteredListItems.length - 1 : nextIndex;
      this.selectItem();
    }
  }

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

  private filterListItems(newVal: string) {
    this.deselectItem();

    const matchingItems = this.listItemsEl.filter((item) =>
      item.text.toLowerCase().includes(newVal.toLowerCase())
    );
    const nonMatchingItems = this.listItemsEl.filter(
      (item) => !item.text.toLowerCase().includes(newVal.toLowerCase())
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

  private isAnyItemSelected = (): boolean =>
    this.selectedItem !== NO_ITEM_SELECTED;

  private getSelectedItem = (): HTMLInoListItemElement | undefined =>
    this.isAnyItemSelected()
      ? this.filteredListItems[this.selectedItem]
      : undefined;

  private openMenu = () => (this.menuIsVisible = true);
  private closeMenu = () => (this.menuIsVisible = false);
  private selectItem = (): void => {
    if (!this.isAnyItemSelected()) {
      return;
    }

    this.getSelectedItem().selected = true;
  };

  private deselectItem = (): void => {
    if (!this.isAnyItemSelected()) {
      return;
    }

    this.getSelectedItem().selected = false;
  };

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
