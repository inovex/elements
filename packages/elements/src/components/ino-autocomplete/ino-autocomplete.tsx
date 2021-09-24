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

const NO_OPTION_SELECTED = -1;

/**
 * @slot input - An `<ino-input>` element that will be controlled by this component
 * @slot list - An `<ino-list>` element with `<ino-option>` elements as options
 */
@Component({
  tag: 'ino-autocomplete',
  styleUrl: 'ino-autocomplete.scss',
  shadow: false,
})
export class Autocomplete implements ComponentInterface {
  private inputEl: HTMLInoInputElement;
  private optionEls: HTMLInoOptionElement[];
  private optionTexts: string[];
  private menuContainer: HTMLDivElement;
  private _selectedOptionIndex?: number = NO_OPTION_SELECTED;
  private debouncer: Debouncer = new Debouncer();
  private optionsObserver: MutationObserver;

  @Element() el: HTMLInoAutocompleteElement;

  @State() input: string = '';

  @Watch('input')
  onInputChange(newVal: string) {
    this.openMenu();
    this.inputEl.value = newVal;
    this.debouncer.debounce(
      () => this.filterOptions(newVal),
      this.debounceTimeout
    );
  }

  private filterOptions(newVal: string) {
    const matchingOptions = [];
    this.selectedOptionIndex = NO_OPTION_SELECTED;

    this.optionEls.forEach((option) => {
      const matched = option.innerText
        .toLowerCase()
        .includes(newVal.toLowerCase());
      if (matched) {
        matchingOptions.push(option);
      }
      option.style.display = matched ? 'block' : 'none';
    });

    this.filteredOptionEls = matchingOptions;
  }

  @State() menuIsVisible = false;

  @State() filteredOptionEls: HTMLInoOptionElement[];

  /**
   * Timeout of the debouncing mechanism used when filtering the options.
   */
  @Prop() debounceTimeout = 300;

  /**
   * Text to display when there are no options found.
   */
  @Prop() noOptionsText = 'No Option';

  /**
   * Emits in three ways:
   *
   * 1. Clicking on an option
   * 2. Pressing `Enter` while an option is selected
   * 3. Entering a valid value and blurring the input element
   *
   * Contains one of the texts provided by the `<ino-options>`s.
   */
  @Event() optionSelected: EventEmitter<string>;

  emitValueOfSelectedOption = () =>
    this.optionSelected.emit(this.getSelectedOption()?.value);

  connectedCallback() {
    this.setupOptions();
    this.setupObserver();
  }

  componentDidLoad() {
    this.setupInput();
    this.setupList();
  }

  disconnectedCallback() {
    this.inputEl.removeEventListener('inoFocus', this.onInputElFocus);
    this.inputEl.removeEventListener('inoBlur', this.onInputElBlur);

    if (this.optionsObserver) {
      this.optionsObserver.disconnect();
      this.optionsObserver = undefined;
    }
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
  onListItemClick(ev: CustomEvent<HTMLInoOptionElement>) {
    this.selectedOptionIndex = this.filteredOptionEls.indexOf(ev.detail);
    this.onOptionSelect();
  }

  @Listen('keydown')
  onArrowDownKey(ev: KeyboardEvent) {
    if (
      !this.menuIsVisible ||
      !this.filteredOptionEls ||
      this.filteredOptionEls.length === 0
    ) {
      return;
    }

    if (ev.code === 'Enter') {
      this.onEnterPress();
    }

    if (ev.code === 'ArrowDown' || ev.code === 'ArrowUp') {
      this.onArrowPress(ev.code);
      ev.preventDefault();
    }
  }

  private onOptionSelect() {
    if (!this.isAnyOptionSelected()) {
      return;
    }

    this.input = this.getSelectedOption().innerText;
    this.emitValueOfSelectedOption();
    this.closeMenu();
  }

  private onEnterPress() {
    this.onOptionSelect();
    this.inputEl.getInputElement().then(moveCursorToEnd);
  }

  private onArrowPress(arrowCode: 'ArrowDown' | 'ArrowUp') {
    if (this.filteredOptionEls.length === 0) {
      this.selectedOptionIndex = NO_OPTION_SELECTED;
      return;
    }

    if (arrowCode === 'ArrowDown') {
      this.onArrowDownPress();
    }
    if (arrowCode === 'ArrowUp') {
      this.onArrowUpPress();
    }
  }

  private onArrowDownPress() {
    const nextIndex = this.selectedOptionIndex + 1;
    const isIndexOutOfBound = nextIndex >= this.filteredOptionEls.length;
    this.selectedOptionIndex = isIndexOutOfBound ? 0 : nextIndex;
  }

  private onArrowUpPress() {
    const nextIndex = this.selectedOptionIndex - 1;
    const isIndexOutOfBound = nextIndex < 0;
    this.selectedOptionIndex = isIndexOutOfBound
      ? this.filteredOptionEls.length - 1
      : nextIndex;
  }

  private onInputElFocus = () => {
    if (this.inputEl.disabled) {
      return;
    }

    this.openMenu();
  };

  private onInputElBlur = (event: CustomEvent<FocusEvent>, force = false) => {
    if (!force && this.isOptionClick(event.detail)) {
      return;
    }

    this.closeMenu();

    if (!this.optionTexts.includes(this.input)) {
      this.input = '';
      this.selectedOptionIndex = NO_OPTION_SELECTED;
    } else {
      this.selectedOptionIndex = this.filteredOptionEls.findIndex(
        (option) => option.innerText === this.input
      );
    }

    this.emitValueOfSelectedOption();
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

    // ensure same width as the input
    this.menuContainer.style.setProperty(
      '--input-width',
      window.getComputedStyle(this.inputEl).width
    );
  }

  setupList() {
    if (!hasSlotContent(this.el, Slots.LIST)) {
      throw new Error(
        `The slot "${Slots.LIST}" is empty. Please provide an ino-list element to that slot.`
      );
    }
  }

  setupOptions = () => {
    this.optionEls = Array.from(this.el.getElementsByTagName('ino-option'));
    this.filteredOptionEls = this.optionEls;
    this.optionTexts = this.optionEls.map((item) => item.innerText);
    this.selectedOptionIndex = NO_OPTION_SELECTED;
  };

  setupObserver() {
    this.optionsObserver = new MutationObserver(this.setupOptions);
    this.optionsObserver.observe(this.el, {
      childList: true,
      subtree: true,
    });
  }

  private isAnyOptionSelected = (): boolean =>
    this.selectedOptionIndex !== NO_OPTION_SELECTED &&
    this.selectedOptionIndex < this.filteredOptionEls.length;

  /**
   * Checks if the newly focused element is a list item.
   * This happen e.g. on a list item click.
   */
  private isOptionClick = (ev: FocusEvent): boolean =>
    ev.relatedTarget &&
    ((ev.relatedTarget as HTMLElement).matches('.mdc-list-item') ||
      (ev.relatedTarget as HTMLElement).matches('ino-option'));

  set selectedOptionIndex(index: number) {
    if (this.isAnyOptionSelected()) {
      this.getSelectedOption().selected = false;
    }

    this._selectedOptionIndex = index;

    if (this.isAnyOptionSelected()) {
      this.getSelectedOption().selected = true;
    }
  }

  get selectedOptionIndex(): number {
    return this._selectedOptionIndex;
  }

  private getSelectedOption = (): HTMLInoOptionElement | undefined =>
    this.isAnyOptionSelected()
      ? this.filteredOptionEls[this.selectedOptionIndex]
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
          {this.filteredOptionEls?.length === 0 && (
            <p class="no-options-text">{this.noOptionsText}</p>
          )}
          <slot name={Slots.LIST} />
        </div>
      </Host>
    );
  }
}
