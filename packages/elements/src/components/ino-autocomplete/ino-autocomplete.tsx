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
import {
  getSlotContent,
  hasSlotContent,
  moveCursorToEnd,
} from '../../util/component-utils';
import { Debouncer } from '../../util/debouncer';

enum Slots {
  INPUT = 'input',
  LIST = 'list',
}

const NO_ITEM_SELECTED = -1;

/**
 * @slot input - An `ino-input` element that will be controlled by this component
 * @slot list - An `ino-list` element with `ino-list-item` as options
 */
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
  private listItemObserver: MutationObserver;

  @Element() el: HTMLInoAutocompleteElement;

  @State() input: string = '';

  @Watch('input')
  onInputChange(newVal: string) {
    this.openMenu();
    this.inputEl.value = newVal;
    this.debouncer.debounce(() => this.filterListItems(newVal), this.timeout);
  }

  @State() menuIsVisible = false;

  /**
   * Timeout of the debouncing mechanism used when filtering the options.
   */
  @Prop() timeout = 300;

  /**
   * Emits in three ways:
   *
   * 1. Clicking on a list item
   * 2. Pressing `Enter` while a list item is selected
   * 3. Entering a valid value and blurring the input element
   *
   * Contains one of the texts provided by the <ino-list-item>s.
   */
  @Event() optionSelected: EventEmitter<string>;

  componentWillLoad() {
    this.setupInput();
    this.setupList();
  }

  componentDidLoad() {
    this.setupListItems();
    this.menuContainer.appendChild(this.listEl);
    this.setupObserver();
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('inoFocus', this.onInputElFocus);
    this.inputEl.removeEventListener('inoBlur', this.onInputElBlur);
    this.listItemObserver.disconnect();
  }

  @Listen('valueChange')
  onValueChange(ev: CustomEvent<string>) {
    this.input = ev.detail;
  }

  @Listen('click')
  onInputClick(ev: PointerEvent) {
    if (ev.target && this.inputEl.contains(ev.target as HTMLElement)) {
      this.openMenu();
    }
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

    switch (ev.code) {
      case 'Enter':
        this.onEnterPress();
        break;
      case 'ArrowDown':
        this.onArrowDownPress();
        ev.preventDefault();
        break;
      case 'ArrowUp':
        this.onArrowUpPress();
        ev.preventDefault();
        break;
    }
  }

  private onItemSelect() {
    if (!this.isAnyItemSelected()) {
      return;
    }

    this.input = this.getSelectedItem().text;
    this.optionSelected.emit(this.input);
    this.closeMenu();
  }

  private onEnterPress() {
    this.onItemSelect();
    this.inputEl.getInputElement().then(moveCursorToEnd);
  }

  private onArrowDownPress() {
    const nextIndex = this.selectedItemIndex + 1;
    const isIndexOutOfBound = nextIndex >= this.filteredListItems.length;
    this.selectedItemIndex = isIndexOutOfBound ? 0 : nextIndex;
  }

  private onArrowUpPress() {
    const nextIndex = this.selectedItemIndex - 1;
    const isIndexOutOfBound = nextIndex < 0;
    this.selectedItemIndex = isIndexOutOfBound
      ? this.filteredListItems.length - 1
      : nextIndex;
  }

  private onInputElFocus = () => {
    if (this.inputEl.disabled) {
      return;
    }

    this.openMenu();
  };

  private onInputElBlur = (event: CustomEvent<FocusEvent>) => {
    if (this.isListItemClicked(event.detail)) {
      return;
    }

    this.closeMenu();

    if (!this.listItemTexts.includes(this.input)) {
      this.input = '';
      return;
    }

    this.optionSelected.emit(this.input);
  };

  setupInput() {
    if (!hasSlotContent(this.el, Slots.INPUT)) {
      throw new Error(
        `The slot "${Slots.INPUT}" is empty. Please provide an ino-input element to that slot.`
      );
    }

    this.inputEl = getSlotContent(this.el, Slots.INPUT) as HTMLInoInputElement;

    if (this.inputEl.value) {
      console.warn(
        'The value property of the <ino-input> is managed by the <ino-autocomplete> and therefore should not be set manually.'
      );
    }

    // Workaround because input does not throw native focus/blur events
    this.inputEl.addEventListener('inoFocus', this.onInputElFocus);
    this.inputEl.addEventListener('inoBlur', this.onInputElBlur);
  }

  setupList() {
    if (!hasSlotContent(this.el, Slots.LIST)) {
      throw new Error(
        `The slot "${Slots.LIST}" is empty. Please provide an ino-list element to that slot.`
      );
    }

    this.listEl = getSlotContent(this.el, Slots.LIST) as HTMLInoListElement;
    this.listEl.remove();
  }

  setupListItems = () => {
    this.listItemsEl = Array.from(
      this.listEl.getElementsByTagName('ino-list-item')
    );
    this.listItemsEl.forEach((listItem) => {
      listItem.tabIndex = -1;
      // workaround as the above has no effect on the underlying <li> element
      listItem.querySelector('li').tabIndex = -1;
    });
    this.filteredListItems = this.listItemsEl;
    this.listItemTexts = this.listItemsEl.map((item) => item.text);
    this.selectedItemIndex = NO_ITEM_SELECTED;
  };

  setupObserver() {
    this.listItemObserver = new MutationObserver(this.setupListItems);
    this.listItemObserver.observe(this.listEl.querySelector('ul'), {
      childList: true,
    });
  }

  private filterListItems(newVal: string) {
    const matchingItems = this.listItemsEl.filter((item) =>
      item.text.toLowerCase().includes(newVal.toLowerCase())
    );
    const nonMatchingItems = this.listItemsEl.filter(
      (item) => !item.text.toLowerCase().includes(newVal.toLowerCase())
    );

    this.selectedItemIndex = NO_ITEM_SELECTED;
    this.filteredListItems = matchingItems;

    matchingItems.forEach((item) => (item.style.display = 'block'));
    nonMatchingItems.forEach((item) => (item.style.display = 'none'));
  }

  private isAnyItemSelected = (): boolean =>
    this.selectedItemIndex !== NO_ITEM_SELECTED;

  /**
   * Checks if the newly focused element is a list item.
   * This happen e.g. on a list item click.
   */
  private isListItemClicked = (ev: FocusEvent): boolean =>
    ev.relatedTarget &&
    ((ev.relatedTarget as HTMLElement).matches('.mdc-list-item') ||
      (ev.relatedTarget as HTMLElement).matches('ino-list-item'));

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
      'menu-shown': this.menuIsVisible,
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
