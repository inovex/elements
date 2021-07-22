import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import classNames from 'classnames';
import { getSlotContent, hasSlotContent } from '../../util/component-utils';
import { Debouncer } from '../../util/debouncer';

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
  private listEl: HTMLInoListElement;
  private listItemsEl: HTMLInoListItemElement[];
  private listItemTexts: string[];
  private menuContainer: HTMLDivElement;
  private filteredListItems: HTMLInoListItemElement[];
  private _selectedItemIndex?: number = NO_ITEM_SELECTED;
  private debouncer: Debouncer = new Debouncer();

  @Element() el: HTMLInoAutocompleteElement;

  @State()
  input: string = '';

  @Watch('input')
  onInputChange(newVal: string) {
    this.inputEl.value = newVal;
    this.debouncer.debounce(() => this.filterListItems(newVal), this.timeout);
  }

  @State() menuIsVisible = false;

  /**
   * Timeout of the debouncing mechanism used when filtering the options.
   */
  @Prop() timeout = 300;

  @Event()
  itemSelected: EventEmitter<string>;

  componentWillLoad() {
    this.setupInput();
    this.setupList();
  }

  componentDidLoad() {
    this.menuContainer.appendChild(this.listEl);
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
    this.selectedItemIndex = this.filteredListItems.indexOf(ev.detail);
    this.onItemSelect();
  }

  @Listen('keydown')
  onArrowDownKey(ev: KeyboardEvent) {
    if (!this.menuIsVisible) {
      return;
    }

    let foundCase = true;

    switch (ev.code) {
      case 'Enter':
        this.onItemSelect();
        break;
      case 'ArrowDown':
        this.onArrowDownPress();
        break;
      case 'ArrowUp':
        this.onArrowUpPress();
        break;
      default:
        foundCase = false;
    }

    if (foundCase) {
      ev.preventDefault();
    }
  }

  private onItemSelect() {
    if (!this.isAnyItemSelected()) {
      return;
    }

    this.input = this.getSelectedItem().text;
    this.itemSelected.emit(this.input);
    this.closeMenu();
  }

  private onArrowDownPress() {
    const nextIndex = this.selectedItemIndex + 1;
    this.selectedItemIndex =
      nextIndex >= this.filteredListItems.length ? 0 : nextIndex;
  }

  private onArrowUpPress() {
    const nextIndex = this.selectedItemIndex - 1;
    this.selectedItemIndex =
      nextIndex < 0 ? this.filteredListItems.length - 1 : nextIndex;
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

  // TODO: observe slot and update
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
    this.listItemsEl.forEach((listItem) => (listItem.tabIndex = -1));
    this.filteredListItems = this.listItemsEl;
    this.listItemTexts = this.listItemsEl.map((item) => item.text);
    this.listEl.remove();
  }

  onInputElFocus = () => {
    if (this.inputEl.disabled) {
      return;
    }

    this.openMenu();
  };

  onInputElBlur = (event: CustomEvent<FocusEvent>) => {
    if (this.isListItemClicked(event.detail)) {
      return;
    }

    this.closeMenu();

    if (!this.listItemTexts.includes(this.input)) {
      this.input = '';
      return;
    }

    this.itemSelected.emit(this.input);
  };

  /**
   * Checks if the newly focused element is a list item.
   * This happen e.g. on a list item click.
   */
  private isListItemClicked = (ev: FocusEvent): boolean =>
    ev.relatedTarget &&
    (ev.relatedTarget as HTMLElement).matches('.mdc-list-item');

  private filterListItems(newVal: string) {
    const matchingItems = this.listItemsEl.filter((item) =>
      item.text.toLowerCase().includes(newVal.toLowerCase())
    );
    const nonMatchingItems = this.listItemsEl.filter(
      (item) => !item.text.toLowerCase().includes(newVal.toLowerCase())
    );

    this.selectedItemIndex = NO_ITEM_SELECTED;
    this.filteredListItems = matchingItems;

    matchingItems.forEach(
      (item) => this.listEl.firstElementChild?.appendChild(item) //(item.style.display = 'block')
    );
    nonMatchingItems.forEach(
      (item) => item.remove() // (item.style.display = 'none')
    );
  }

  private isAnyItemSelected = (): boolean =>
    this.selectedItemIndex !== NO_ITEM_SELECTED;

  set selectedItemIndex(index: number) {
    if (this.isAnyItemSelected()) {
      this.getSelectedItem().selected = false;
    }

    this._selectedItemIndex = index;

    if (this.isAnyItemSelected()) {
      this.getSelectedItem().selected = true;
    }
  }

  get selectedItemIndex(): number {
    return this._selectedItemIndex;
  }

  private getSelectedItem = (): HTMLInoListItemElement | undefined =>
    this.isAnyItemSelected()
      ? this.filteredListItems[this.selectedItemIndex]
      : undefined;

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
        <div class={menuClasses} ref={(el) => (this.menuContainer = el)}>
          <slot name={Slots.LIST} />
        </div>
      </Host>
    );
  }
}
