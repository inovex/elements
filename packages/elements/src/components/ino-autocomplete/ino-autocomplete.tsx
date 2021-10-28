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

const NO_OPTION_SELECTED = -1;

/**
 * @slot input - An `<ino-input>` element that will be controlled by this component
 * @slot default - A list of `<ino-option>` elements as options
 */
@Component({
  tag: 'ino-autocomplete',
  styleUrl: 'ino-autocomplete.scss',
  shadow: true,
})
export class Autocomplete implements ComponentInterface {
  private inputEl: HTMLInoInputElement;
  private optionEls: HTMLInoOptionElement[];
  private menuContainer: HTMLDivElement;
  private lastKeyCode: string;
  private debouncer: Debouncer = new Debouncer();
  private filteredOptionEls: HTMLInoOptionElement[];
  private selectedOption?: HTMLInoOptionElement;
  private _selectedOptionIndex?: number = NO_OPTION_SELECTED;

  private set selectedOptionIndex(index: number) {
    if (this.selectedOption) {
      this.selectedOption.selected = false;
    }

    this._selectedOptionIndex = index;
    this.selectedOption = index >= 0 ? this.optionEls[index] : undefined;

    if (this.selectedOption) {
      this.selectedOption.selected = true;
    }
  }
  private get selectedOptionIndex(): number {
    return this._selectedOptionIndex;
  }

  @Element() el: HTMLInoAutocompleteElement;

  @State() private menuIsVisible = false;
  @State() private noOptionsIsVisible = false;

  /**
   * Timeout of the debouncing mechanism used when filtering the options.
   */
  @Prop() debounceTimeout = 300;

  /**
   * Text to display when there are no options found.
   */
  @Prop() noOptionsText = 'No Option';

  /**
   * Value of the autocomplete
   */
  @Prop() value;

  @Watch('value')
  onValueChange(newValue, oldValue): void {
    if (newValue === oldValue) {
      return;
    }
    this.setOptionByValue(newValue);
  }

  /**
   * Emits in three ways:
   *
   * 1. Clicking on an option
   * 2. Pressing `Enter` while an option is selected
   * 3. Entering a valid value and blurring the input element
   *
   * Contains one of the texts provided by the `<ino-options>`s.
   */
  @Event() valueChange: EventEmitter<string>;

  componentDidLoad(): void {
    this.setupInput();
  }

  disconnectedCallback(): void {
    this.inputEl.removeEventListener('inoFocus', this.onInoInputFocus);
    this.inputEl.removeEventListener('inoBlur', this.onInoInputBlur);
  }

  @Listen('valueChange')
  onInoInputValueChange(ev: CustomEvent<string>): void {
    if ((ev.target as HTMLElement).tagName.toLowerCase() === 'ino-input') {
      ev.stopImmediatePropagation();
      this.inputChanged(ev.detail);
    }
  }

  @Listen('keydown')
  onKeyDown(ev: KeyboardEvent): void {
    if (
      !this.filteredOptionEls ||
      this.filteredOptionEls.length === 0 ||
      (this.lastKeyCode !== 'Enter' && !this.menuIsVisible)
    ) {
      return;
    }

    if (this.lastKeyCode === 'Enter' && !this.menuIsVisible) {
      this.openMenu();
    }
    this.lastKeyCode = ev.code;

    switch (ev.code) {
      case 'Enter':
        this.onEnterPress();
        break;
      case 'ArrowDown':
        this.onArrowDownPress();
        this.scroll(ev);
        break;
      case 'ArrowUp':
        this.onArrowUpPress();
        this.scroll(ev);
        break;
    }
  }

  private onEnterPress = (): void => {
    this.onOptionSelect();
    this.inputEl.getInputElement().then(moveCursorToEnd);
  };

  private onOptionSelect = (): void => {
    if (!this.selectedOption) {
      return;
    }

    this.inputChanged(this.selectedOption.innerText);
    this.emitValueOfSelectedOption();
    this.closeMenu();
  };

  private onArrowDownPress = (): void => {
    const nextIndex =
      this.filteredOptionEls.findIndex(
        (o) => o.value === this.selectedOption?.value
      ) + 1;
    const isIndexOutOfBound = nextIndex >= this.filteredOptionEls.length;
    const filteredOptionIndex = isIndexOutOfBound ? 0 : nextIndex;
    this.selectedOptionIndex = this.optionEls.indexOf(
      this.filteredOptionEls[filteredOptionIndex]
    );
  };

  private onArrowUpPress = (): void => {
    const nextIndex =
      this.filteredOptionEls.findIndex(
        (o) => o.value === this.selectedOption?.value
      ) - 1;
    const isIndexOutOfBound = nextIndex < 0;
    const filteredOptionIndex = isIndexOutOfBound
      ? this.filteredOptionEls.length - 1
      : nextIndex;
    this.selectedOptionIndex = this.optionEls.indexOf(
      this.filteredOptionEls[filteredOptionIndex]
    );
  };

  private scroll = (ev: KeyboardEvent): void => {
    ev.preventDefault();
    const { offsetTop, clientHeight: optionHeight } = this.selectedOption;
    const { scrollTop, clientHeight } = this.menuContainer;
    if (
      offsetTop + optionHeight / 2 > scrollTop + clientHeight ||
      offsetTop < scrollTop
    ) {
      this.menuContainer.scrollTo(0, offsetTop);
    }
  };

  private setupInput = (): void => {
    if (!hasSlotContent(this.el, 'input')) {
      throw new Error(
        'The slot "input" is empty. Please provide an ino-input element to that slot.'
      );
    }

    this.inputEl = getSlotContent(this.el, 'input') as HTMLInoInputElement;

    if (this.inputEl.value) {
      console.warn(
        'The value property of the <ino-input> is managed by the <ino-autocomplete> and therefore should not be set manually.'
      );
    }

    // Workaround because input does not throw native focus/blur events
    this.inputEl.addEventListener('inoFocus', this.onInoInputFocus);
    this.inputEl.addEventListener('inoBlur', this.onInoInputBlur);

    // ensure same width as the input
    this.menuContainer.style.setProperty(
      '--input-width',
      window.getComputedStyle(this.inputEl).width
    );
  };

  private onInoInputFocus = (): void => {
    if (!this.inputEl.disabled) {
      this.openMenu();
    }
  };

  private onInoInputBlur = (event: CustomEvent<FocusEvent>): void => {
    if (this.isOptionClick(event.detail)) {
      return;
    }
    this.closeMenu();

    const newIndex = this.optionEls.findIndex(
      (option) => option.innerText.trim() === this.inputEl.value.trim()
    );

    if (newIndex !== this.selectedOptionIndex) {
      this.selectedOptionIndex = newIndex;
      this.emitValueOfSelectedOption();
    }
    this.inputChanged(this.selectedOption?.innerText || '');
  };

  /**
   * Checks if the newly focused element is a list item.
   * This happen e.g. on a list item click.
   */
  private isOptionClick = (ev: FocusEvent): boolean =>
    ev.relatedTarget &&
    ((ev.relatedTarget as HTMLElement).matches('.mdc-list-item') ||
      (ev.relatedTarget as HTMLElement).matches('ino-option'));

  private emitValueOfSelectedOption = (): void => {
    this.valueChange.emit(this.selectedOption?.value);
  };

  private inputChanged = (searchTerm: string): void => {
    if (!this.inputEl) {
      return;
    }

    this.inputEl.value = searchTerm || '';
    this.debouncer.debounce(
      () => this.filterOptions(this.inputEl.value),
      this.debounceTimeout
    );
  };

  private filterOptions = (newVal: string): void => {
    this.filteredOptionEls = this.optionEls.filter((option) => {
      const matched = option.innerText
        .trim()
        .toLowerCase()
        .includes(newVal.trim().toLowerCase());
      option.style.display = matched ? 'block' : 'none';
      return matched;
    });
    this.noOptionsIsVisible = this.filteredOptionEls.length === 0;
  };
  private setupOptions = (): void => {
    this.optionEls = Array.from(this.el.getElementsByTagName('ino-option'));
    this.filteredOptionEls = this.optionEls;
    this.setOptionByValue(this.value);
  };

  private setOptionByValue = (value: string): void => {
    if (!this.optionEls) {
      return;
    }
    this.selectedOptionIndex = this.optionEls.findIndex(
      (oEl) => oEl.value === value
    );
    this.inputChanged(this.selectedOption?.innerText);
  };

  // necessary because the input's blur will trigger BEFORE click but AFTER mousedown
  private onListItemClick = (ev: MouseEvent): void => {
    const { parentElement } = ev.target as HTMLElement;
    if (
      parentElement.nodeName.toLowerCase() !== 'ino-option' &&
      parentElement.parentElement.nodeName.toLowerCase() !== 'ino-option'
    ) {
      return;
    }

    const inoOption = (parentElement.nodeName.toLowerCase() === 'ino-option'
      ? parentElement
      : parentElement.parentElement) as HTMLInoOptionElement;

    this.selectedOptionIndex = this.optionEls.findIndex(
      (oEl) => oEl.value === inoOption.value
    );
    this.onOptionSelect();
  };

  private openMenu = () => (this.menuIsVisible = true);
  private closeMenu = () => (this.menuIsVisible = false);

  render() {
    const menuClasses = classNames({
      menu: true,
      'menu-hidden': !this.menuIsVisible,
      'menu-shown': this.menuIsVisible,
      'mdc-list': true,
    });

    return (
      <Host>
        <slot name="input" />
        <div
          class={menuClasses}
          ref={(el) => (this.menuContainer = el)}
          onMouseDown={(ev) => this.onListItemClick(ev)}
        >
          {this.noOptionsIsVisible && (
            <p class="no-options-text">{this.noOptionsText}</p>
          )}
          <slot onSlotchange={this.setupOptions} />
        </div>
      </Host>
    );
  }
}
