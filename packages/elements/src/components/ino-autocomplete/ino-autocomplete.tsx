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
  Watch,
} from '@stencil/core';
import autoComplete from '@tarekraafat/autocomplete.js';
import { KeyValue } from '../types';

/**
 * @slot input - An `<ino-input>` element that will be controlled by this component
 */
@Component({
  tag: 'ino-autocomplete',
  styleUrl: 'ino-autocomplete.scss',
  shadow: false,
})
export class Autocomplete implements ComponentInterface {
  @Element() el: HTMLInoAutocompleteElement;

  private listEl: HTMLDivElement;
  private inoInputEl: HTMLInoInputElement;
  private inputEl: HTMLInputElement;
  private autocomplete: any; // no typings for this library yet

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
  @Prop() options: string[] | KeyValue[] = [];

  @Watch('options')
  onOptionsChange() {
    this.initAutocomplete();
  }

  /**
   * The selected value.
   */
  @Prop() value: string | null;

  @Watch('value')
  onValueChange(value: string | null) {
    if (value === null) {
      this.resetInput();
      return;
    }

    this.inoInputEl.value = value;
    this.inputEl.selectionStart = this.inputEl.selectionEnd = value.length; // move cursor to end
  }

  /**
   * Emits the list item the user clicked on.
   * If Key-Value-Objects are provided as `options`, the `key` of the selected option will be emitted.
   *
   * Trigger on two occasions:
   * 1. The user clicked on a list-item.
   */
  @Event() valueChange: EventEmitter<string>;

  @Listen('selection')
  onItemSelect(ev: CustomEvent<{ selection: { value: string | KeyValue } }>) {
    const value = ev.detail.selection.value;
    this.valueChange.emit(Autocomplete.isKeyValue(value) ? value.key : value);
  }

  @Listen('close')
  onClose(ev: CustomEvent<any>) {
    if (ev.detail.event) return; // contains pointer event if closed by selection

    const { query, matches } = ev.detail;

    const exactMatch: {value: string | KeyValue} = matches.find(
      (match) =>
        (Autocomplete.isKeyValue(match.value)
          ? match.value.value
          : match.value) === query
    );

    if (exactMatch) {
      this.valueChange.emit(
        Autocomplete.isKeyValue(exactMatch.value) ? exactMatch.value.key : exactMatch.value
      );
    } else {
      this.valueChange.emit(null);
      this.resetInput();
    }
  }

  componentDidLoad() {
    this.inoInputEl = this.el.querySelector('ino-input');
    this.inputEl = this.el.querySelector('input');

    if (!this.inoInputEl) {
      throw new Error(
        `[ino-autocomplete] No <ino-input> element found in default slot.`
      );
    }

    this.initAutocomplete();
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

    if (this.options.length > 0 && Autocomplete.isKeyValue(this.options[0])) {
      options['data']['keys'] = ['value'];
    }

    this.autocomplete = new autoComplete(options);
  }

  private createNoMatchMessage(query: string): HTMLDivElement {
    const message = document.createElement('div');
    message.setAttribute('class', 'ino-autocomplete__list-item--no-match');
    // Add message text content
    message.innerHTML = `<span>${this.noOptionsText.replace(
      '$',
      query
    )}</span>`;

    return message;
  }

  private resetInput(): void {
    this.inoInputEl.value = '';
  }

  private static isKeyValue(value: string | KeyValue): value is KeyValue {
    return (value as KeyValue).value !== undefined;
  }

  render() {
    return (
      <Host>
        <slot></slot>
        <div ref={(el) => (this.listEl = el)}></div>
      </Host>
    );
  }
}
