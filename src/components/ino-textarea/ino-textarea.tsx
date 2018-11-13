import { MDCTextField } from '@material/textfield';
import { Component, Element, Event, EventEmitter, Listen, Prop, Watch } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-textarea',
  styleUrl: 'ino-textarea.scss',
  shadow: false
})
export class Textarea {
  @Element() el!: HTMLElement;

  /**
   * The autofocus of this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * The number of cols of this textarea.
   */
  @Prop() cols?: number;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The max length of this element.
   */
  @Prop() maxlength?: number;

  /**
   * The min length of this element.
   */
  @Prop() minlength?: number;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * The placeholder of this element.
   */
  @Prop() placeholder?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * The number of rows of this textarea.
   */
  @Prop() rows?: number;

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value = '';

  /**
   * The optional floating label of this input field.
   */
  @Prop() inoLabel?: string;

  /**
   * Emits when the value changes.
   */
  @Event() valueChanges!: EventEmitter<string>;

  @Listen('change')
  handleInput(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  @Listen('input')
  handleNativeElement(e) {
    e.preventDefault();
    this.valueChanges.emit(e.target.value);
  }

  @Watch('value')
  handleChange(value: string) {
    this.textfield.value = value;
  }

  /**
   * An internal instance of the material design textfield.
   */
  private textfield: MDCTextField;

  componentDidLoad() {
    this.textfield = new MDCTextField(this.el.querySelector('.mdc-text-field'));
  }

  componentWillUnLoad() {
    this.textfield.destroy();
  }

  private labelTemplate() {
    if (!this.inoLabel) {
      return '';
    }
    const classLabel = classNames({
      'mdc-floating-label': true,
      'mdc-floating-label--float-above': this.inoLabel && this.value
    });
    return <label class={classLabel}>{this.inoLabel}</label>;
  }

  render() {
    return (
      <div class="mdc-text-field mdc-text-field--textarea">
        <textarea
          class="mdc-text-field__input"
          autofocus={this.autofocus}
          cols={this.cols}
          disabled={this.disabled}
          maxLength={this.maxlength}
          minLength={this.minlength}
          name={this.name}
          placeholder={this.placeholder}
          required={this.required}
          rows={this.rows}
          value={this.value}
        >
        </textarea>

        {this.labelTemplate()}
      </div>
    );
  }
}
