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
  private selectedItem?: number = NO_ITEM_SELECTED;

  @Element() el: HTMLInoAutocompleteElement;

  @State() input: string = '';

  @Watch('input')
  onInputChange(newVal: string) {
    this.inputEl.value = newVal;
    this.filterListItems(newVal);
  }

  // replace with js observer?
  @State() filteredListItems: HTMLInoListItemElement[];

  @Watch('filteredListItems')
  onFilterListChange(
    newList: HTMLInoListItemElement[],
    oldList?: HTMLInoListItemElement[]
  ) {
    if (oldList?.length > 0) {
      // oldList[0].tabIndex = -1;
    }
    if (newList.length > 0) {
      // newList[0].tabIndex = 0;
    }
    this.selectedItem = NO_ITEM_SELECTED;
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
          this.input = this.filteredListItems[this.selectedItem].text;
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

    console.group('Input key down');
    console.log('Filter Item: ', this.filteredListItems);
    console.log('Selected Item index: ', this.selectedItem);

    if (this.selectedItem !== NO_ITEM_SELECTED) {
      this.filteredListItems[this.selectedItem].selected = false;
    }

    // TODO: overflow behandeln
    if (ev.code === 'ArrowDown') {
      this.selectedItem = Math.min(
        this.selectedItem + 1,
        this.filteredListItems.length - 1
      );
    }

    if (ev.code === 'ArrowUp') {
      this.selectedItem = Math.max(this.selectedItem - 1, NO_ITEM_SELECTED);
    }

    if (this.selectedItem === NO_ITEM_SELECTED) {
      return;
    }

    console.log('Selected Item index (after)', this.selectedItem);

    this.filteredListItems[this.selectedItem].selected = true;
    console.groupEnd();
  };

  onListKeydown = (ev: KeyboardEvent) => {
    if (ev.code !== 'ArrowDown' && ev.code !== 'ArrowUp') {
      return;
    }

    /*
    console.group('List Keydown');

    const currentIndex: number = Array.isArray(this.mdcList.selectedIndex)
      ? this.mdcList.selectedIndex[0]
      : this.mdcList.selectedIndex;

    console.log('Current index: ', currentIndex);
    console.log(this.mdcList.listElements);

    switch (ev.code) {
      case 'ArrowUp':
        this.mdcList.selectedIndex = currentIndex - 1;
        break;
      case 'ArrowDown':
        this.mdcList.selectedIndex = currentIndex + 1;
        break;
    }

    console.log('After index: ', this.mdcList.selectedIndex);
    console.log(this.mdcList.listElements);
    console.groupEnd();
     */
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
    this.listEl.addEventListener('keydown', this.onListKeydown);

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
      this.inputEl.error = true;
      return;
    }

    this.inputEl.error = false;
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

    matchingItems.forEach(
      (item) => this.listEl.firstElementChild?.appendChild(item) //(item.style.display = 'block')
    );
    nonMatchingItems.forEach(
      (item) => item.remove() // (item.style.display = 'none')
    );
  }

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
