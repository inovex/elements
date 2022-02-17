import {
  Component,
  Element,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
} from '@stencil/core';
import { config } from '../config';

/**
 * @slot default - `<ino-input>` of `type="text"`
 */
@Component({
  tag: 'ino-currency-input',
  styleUrl: 'ino-currency-input.scss',
  shadow: false,
})
export class CurrencyInput {
  private readonly defaultLocale = 'de-DE';
  private inoInputEl?: HTMLInoInputElement;
  private hiddenInputEl?: HTMLInputElement;

  @Element() el!: HTMLElement;

  /**
   * A supported locale for currency number formatting. If not given, it uses the global config.
   * See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
  @Prop() currencyLocale?: string;

  /**
   * Numeric currency value
   */
  @Prop({ reflect: true }) value: number | string;
  @Watch('value')
  valueChanged(value: number | string) {
    if (!value || value === 'null') {
      this.hiddenValue = null;
      this.inputValue = null;
    }
    // Only set value if not from user input (has been set before)
    else if (value != this.hiddenInputEl?.value) {
      this.hiddenValue = value.toString();
      this.inputValue = this.toCurrencyString(value);
    }
  }

  /**
   * Emits when the user types something in.
   * Contains typed input in `event.detail`
   */
  @Event() valueChange!: EventEmitter<number>;

  componentDidLoad() {
    this.inoInputEl = this.el.querySelector('ino-input');
    this.inoInputEl?.setUserInputInterceptor((value) =>
      this.trimCurrencyString(value)
    );

    if (!this.inoInputEl) {
      console.error('currency input requires ino-input as child');
    }
    if (this.inoInputEl.type !== 'text') {
      console.error('currency input has to be of type "text"');
    }
    this.initialize();
  }

  connectedCallback() {
    // This is needed if the currency input is reattached to the dom (for instance in a popover)
    this.initialize();
  }

  disconnectedCallback() {
    this.inoInputEl?.removeEventListener('inoFocus', this.handleFocus);
    this.inoInputEl?.removeEventListener('inoBlur', this.handleBlur);
    this.inoInputEl?.removeEventListener('valueChange', this.handleValueChange);
  }

  private initialize() {
    // This is needed if the currency input is reattached to the dom (for instance in a popover)
    if (this.hiddenInputEl) {
      this.setupHiddenInput();
    }

    // Setup listener manually to only handle child events and catch non-bubbeling focus / blur.
    // @Listen would also trigger on valueChange of currency-input.
    this.inoInputEl?.addEventListener('inoFocus', this.handleFocus);
    this.inoInputEl?.addEventListener('inoBlur', this.handleBlur);
    this.inoInputEl?.addEventListener('valueChange', this.handleValueChange);
  }

  // -------
  // Event Handler

  private handleValueChange = (e: CustomEvent) => {
    let value = e.detail;
    // value is string => !"0" == true
    value = !value ? null : this.fromCurrencyString(value);

    // Set the hidden input value here and emit the event. This is not fully unmanaged,
    // but ensures that the value is always up-to-date and the value watcher doesn't format
    // the input (see valueChanged function).
    if (!Number.isNaN(value)) {
      this.hiddenValue = value;
      this.valueChange.emit(value);
    }
    e.stopPropagation();
  };

  private handleFocus = () => {
    this.inoInputEl.value = this.trimCurrencyString(this.inoInputEl.value);
  };

  private handleBlur = () => {
    const value = this.hiddenInputEl.value;
    if (value && value != 'null') {
      this.inoInputEl.value = this.toCurrencyString(value);
    }
  };

  // -------
  // Utils

  private set hiddenValue(value: string) {
    if (this.hiddenInputEl) {
      this.hiddenInputEl.value = value;
    }
  }
  private set inputValue(value: string) {
    if (this.inoInputEl) {
      this.inoInputEl.value = value;
    }
  }

  private setupHiddenInput() {
    this.hiddenValue = String(this.value);

    this.hiddenInputEl.name = this.inoInputEl.name;
    this.inoInputEl.name = null;

    this.hiddenInputEl.min = this.inoInputEl.min;
    this.hiddenInputEl.max = this.inoInputEl.max;
    this.hiddenInputEl.disabled = this.inoInputEl.disabled;
    this.hiddenInputEl.required = this.inoInputEl.required;

    this.inoInputEl.value = this.toCurrencyString(this.value);
  }

  // -----
  // Currency logic

  private getSeperator() {
    return this.toCurrencyString(0).charAt(1);
  }

  private toCurrencyString(value: string | number): string {
    if (!value  && value !== 0) return null;

    const locale = this.currencyLocale?.length > 0
      ? this.currencyLocale
      : config.get('currencyLocale', this.defaultLocale);

    const opts = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
    return Intl.NumberFormat(locale, opts).format(Number(value));
  }

  private trimCurrencyString(value?: string): string {
    if (!value) {
      return value;
    }

    const leadingSymbol = this.extractLeadingSymbol(value);
    const separator = this.getSeperator();
    const numberParts = this.removeNonDecimalValues(value).split(separator);

    // Always keep the first part
    value = numberParts[0];
    // Decimals
    if (numberParts.length > 1) {
      // Only keep the first decimal occurence and only the given precision
      value += separator + numberParts[1].substring(0, 2);
    }
    return leadingSymbol + value;
  }

  private fromCurrencyString(value: string): number {
    const leadingSymbol = this.extractLeadingSymbol(value);
    const separator = this.getSeperator();
    const newValue = this.removeNonDecimalValues(value).replace(separator, '.');
    return Number(leadingSymbol + newValue);
  }

  private extractLeadingSymbol(value: string): string {
    const min = this.inoInputEl?.min;
    const requirePositive = min && Number(min) >= 0;
    return requirePositive ? '' : value.startsWith('-') ? '-' : '';
  }

  private removeNonDecimalValues(value: string) {
    const currencyRegex = new RegExp(`[^${this.getSeperator()}0-9]`, 'g');
    return value.replace(currencyRegex, '');
  }

  render() {
    return (
      <Host>
        <input
          type="hidden"
          ref={(el) => (this.hiddenInputEl = el)}
          value={this.value}
        />
        <slot></slot>
      </Host>
    );
  }
}
