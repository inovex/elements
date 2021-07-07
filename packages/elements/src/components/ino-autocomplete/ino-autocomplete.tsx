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
  //private selectedItem?: HTMLInoListItemElement;

  @Element() el: HTMLInoAutocompleteElement;

  @State() input: string = '';

  @Watch('input')
  onInputChange(newVal: string) {
    this.inputEl.value = newVal;
    this.filterListItems(newVal);
  }

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
    this.mdcList.selectedIndex = -1;
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
      case 'ArrowDown': {
        // this.listEl.focus();
        // this.filteredListItems[0].focus();
        break;
      }
      case 'Enter': {
        if (this.input.length === 0) {
          this.inputEl.blur();
        } else {
          const activeListItem: HTMLInoListItemElement = document.activeElement as HTMLInoListElement;
          this.input = activeListItem.text;
        }
        break;
      }
    }
  }

  onInputKeydown = (ev: KeyboardEvent) => {
    if (ev.code !== 'ArrowDown') {
      return;
    }

    // focus first item in list
    this.mdcList.selectedIndex = 0;
  };

  onListKeydown = (ev: KeyboardEvent) => {
    if (ev.code !== 'ArrowDown' && ev.code !== 'ArrowUp') {
      return;
    }

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
    this.inputEl.error = !this.listItemTexts.includes(this.input);
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

    console.log(this.mdcList);
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
