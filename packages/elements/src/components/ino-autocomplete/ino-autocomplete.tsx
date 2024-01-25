import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  Watch,
} from '@stencil/core';
import autoComplete from '@tarekraafat/autocomplete.js';
import { KeyValue } from '../types';
import { FormInputWithHelperText } from '../base/form-input/form-input-with-helper-text';

type Selection = { value: string | KeyValue };

/**
 * `ino-autocomplete` is a component that acts similarly to the native `datalist` feature of the `<input>` element.
 *
 * Unlike other components, `ino-autocomplete` is stateful, meaning it maintains its own state. This makes it less
 * flexible to some extent compared to stateless components.
 *
 * ## Responsibilities
 * The component handles the following tasks:
 * - Management of the `value` property of the `<ino-input>` element.
 * - Management of showing and hiding the different options based on the input.
 * - Keyboard navigation among the options.
 *
 * ## Filtering
 * The options are filtered using `.includes(...)`, which ignores case sensitivity.
 *
 * @slot input - An `<ino-input>` element that will be controlled by this component
 */
@Component({
  tag: 'ino-autocomplete',
  styleUrl: 'ino-autocomplete.scss',
  shadow: false,
})
export class Autocomplete
  implements FormInputWithHelperText, ComponentInterface
{
  @Element() el: HTMLInoAutocompleteElement;

  private listEl: HTMLDivElement;
  private inoInputEl: HTMLInoInputElement;
  private inputEl: HTMLInputElement;
  private autocomplete: any; // no typings for this library yet https://tarekraafat.github.io/autoComplete.js/#/

  /**
   * Number of ms the search function should be delayed after the user typed something.
   */
  @Prop() debounce = 100;

  /**
   * Text to display when there are no options found, where `$` is the placeholder for the input of the user.
   */
  @Prop() noOptionsText = 'Found No Results for "$"';

  /**
   * All options either as a string array or as an array of `{key: string; value: string}` objects.
   */
  @Prop() options!: string[] | KeyValue[];

  @Watch('options')
  onOptionsChange() {
    this.initAutocomplete();
  }

  /**
   * The selected value.
   */
  @Prop() value: string | KeyValue | null;

  @Watch('value')
  onValueChange(value: string | KeyValue | null) {
    if (value === null) {
      this.resetInput();
      this.styleInputUnselected();
      return;
    }

    const val = Autocomplete.isKeyValue(value) ? value.value : value;

    // checken ob val mit einer der optionen übereinstimmt
    // grayInputText true setzen wenn nicht gleich

    if (this.inoInputEl != null) {
      this.inoInputEl.value = val;
    }
    if (this.inputEl != null) {
      this.inputEl.selectionStart = this.inputEl.selectionEnd = val.length; // move cursor to end
    }

    this.styleInputSelected();
  }

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  @Watch('disabled')
  onDisabledChanged(): void {
    this.inoInputEl.disabled = this.disabled;
  }

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  @Watch('required')
  onRequiredChanged(): void {
    this.inoInputEl.required = this.required;
  }

  /**
   * The label of this input field.
   */
  @Prop() label?: string;

  @Watch('label')
  onLabelChanged(): void {
    this.inoInputEl.label = this.label;
  }

  /**
   * Displays the input field as invalid if set to true.
   * This functionality might be useful if the input validation is (additionally) handled by the backend.
   */
  @Prop() error?: boolean;

  @Watch('error')
  onErrorChanged(): void {
    this.inoInputEl.error = this.error;
  }

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() showLabelHint?: boolean;

  @Watch('showLabelHint')
  onShowLabelHintChanged(): void {
    this.inoInputEl.showLabelHint = this.showLabelHint;
  }

  /**
   * The optional helper text.
   */
  @Prop() helperText?: string;

  @Watch('helperText')
  onHelperTextChanged(): void {
    this.inoInputEl.helperText = this.helperText;
  }

  /**
   * Displays the helper permanently.
   */
  @Prop() helperTextPersistent?: boolean;

  @Watch('helperTextPersistent')
  onHelperTextPeristentChanged(): void {
    this.inoInputEl.helperTextPersistent = this.helperTextPersistent;
  }

  /**
   * Styles the helper text as a validation message.
   */
  @Prop() helperTextValidation?: boolean;

  @Watch('helperTextValidation')
  onHelperTextValidationChanged(): void {
    this.inoInputEl.helperTextValidation = this.helperTextValidation;
  }

  /**
   * Sets focus on the native `input`.
   * Use this method instead of the global `input.focus()`.
   */
  @Method()
  async setFocus(): Promise<void> {
    this.inoInputEl?.setFocus();
  }

  /**
   * Sets blur on the native `input`.
   * Use this method instead of the global `input.blur()`.
   */
  @Method()
  async setBlur() {
    this.inoInputEl?.setBlur();
  }

  /**
   * Emits the list item the user clicked on either as a string or
   * a `{key: string; value: string}` object depending on the provided options.
   *
   * Trigger on two occasions:
   * 1. The user clicked on a list-item.
   * 2. The user types in a string that matches an option and blurs the input
   */
  @Event() valueChange: EventEmitter<string | { key: string; value: string }>;

  @Listen('selection')
  onItemSelect(ev: CustomEvent<{ selection: Selection }>) {
    const value = ev.detail.selection.value;
    this.valueChange.emit(value);
  }

  @Listen('close')
  onClose(ev: CustomEvent<any>) {
    if (ev.detail.event) return; // contains pointer event if closed by selection

    const { query, matches } = ev.detail;

    const exactMatch: Selection = matches.find(
      (match) =>
        (Autocomplete.isKeyValue(match.value)
          ? match.value.value
          : match.value) === query,
    );

    if (exactMatch != null) {
      this.valueChange.emit(exactMatch.value);
    } else {
      this.valueChange.emit(null);
      this.resetInput();
    }
  }

  componentDidLoad() {
    this.initComponents();
    this.initAutocomplete();
    this.initHelperText();
    this.handleInputProps();
  }

  private initHelperText(): void {
    this.onHelperTextChanged();
    this.onHelperTextPeristentChanged();
    this.onHelperTextValidationChanged();
  }

  private handleInputProps(): void {
    this.onLabelChanged();
    this.onRequiredChanged();
    this.onDisabledChanged();
    this.onShowLabelHintChanged();
    this.onErrorChanged();
  }

  connectedCallback() {
    this.initComponents();
  }

  disconnectedCallback() {
    this.inoInputEl?.removeEventListener(
      'valueChange',
      this.onInputValueChange,
    );
  }

  private onInputValueChange = (e: CustomEvent<string>) => {
    this.inoInputEl.value = e.detail;
    e.stopPropagation();
  };

  private initComponents() {
    this.inoInputEl?.removeEventListener(
      'valueChange',
      this.onInputValueChange,
    );

    this.inoInputEl = this.el.querySelector('ino-input');
    if (!this.inoInputEl.hasAttribute('label')) {
      this.inoInputEl.label = '';
    }
    this.inputEl = this.inoInputEl.querySelector('input');

    if (this.inoInputEl == null) {
      throw new Error(
        `[ino-autocomplete] No <ino-input> element found in default slot.`,
      );
    }

    this.inoInputEl?.addEventListener('valueChange', this.onInputValueChange);
    this.styleInputUnselected();
  }

  private initAutocomplete() {
    this.autocomplete?.unInit();

    const options = {
      selector: () => this.el.querySelector('input'),
      threshold: 0,
      debounce: this.debounce,
      data: {
        src: this.options,
      },
      wrapper: false,
      resultsList: {
        noResults: true,
        class: 'mdc-deprecated-list ino-autocomplete__list',
        destination: () => this.listEl,
        element: (list, data) => {
          if (data.results.length > 0) return;

          list.appendChild(this.createNoMatchMessage(data.query));
        },
      },
      resultItem: {
        class: 'mdc-deprecated-list-item ino-autocomplete__list-item',
        highlight: 'ino-autocomplete__list-item--highlight',
        selected:
          'mdc-deprecated-list-item--selected ino-autocomplete__list-item--selected',
      },
      events: {
        input: {
          focus: () => this.autocomplete.start(), // open menu on focus
        },
      },
    };

    if (this.options?.length > 0 && Autocomplete.isKeyValue(this.options[0])) {
      options['data']['keys'] = ['value'];
    }

    this.autocomplete = new autoComplete(options);

    if (this.value != null) this.onValueChange(this.value);
  }

  private createNoMatchMessage(query: string): HTMLDivElement {
    const message = document.createElement('div');
    message.classList.add(
      'ino-autocomplete__list-item ino-autocomplete__list-item--no-match',
    );
    // Add message text content
    message.innerHTML = `
    <span>
      ${this.noOptionsText.replace('$', query)}
    </span>`;

    return message;
  }

  private resetInput(): void {
    if (this.inoInputEl != null) this.inoInputEl.value = '';
  }

  private static isKeyValue(value: string | KeyValue): value is KeyValue {
    return (value as KeyValue).value !== undefined;
  }

  private static UNSELECTED_INPUT_CLASS = 'ino-input--font-grey';

  private styleInputSelected = () =>
    this.inoInputEl?.classList.remove(Autocomplete.UNSELECTED_INPUT_CLASS);

  private styleInputUnselected = () =>
    this.inoInputEl?.classList.add(Autocomplete.UNSELECTED_INPUT_CLASS);

  render() {
    return (
      <Host>
        <slot />
        <div ref={(el) => (this.listEl = el)}></div>
      </Host>
    );
  }
}
