import { MDCSelect } from '@material/select';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  Watch,
  h
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-select',
  styleUrl: 'ino-select.scss',
  shadow: false
})
export class Select implements ComponentInterface {
  // An internal instance of the material design form field.
  private mdcInstance: MDCSelect;
  private nativeSelectElement?: HTMLSelectElement;

  @Element() el!: HTMLElement;
  /**
   * Marks this element as autofocused.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The form this element belongs to.
   */
  @Prop() form?: string;

  /**
   * The name of this element.
   */
  @Prop() name?: string;

  /**
   * Marks this element as required.
   */
  @Prop() required?: boolean;

  /**
   * If true, an *optional* message is displayed if not required,
   * otherwise a * marker is displayed if required
   */
  @Prop() inoShowLabelHint?: boolean;

  /**
   * Prepends a selected, empty and disabled option.
   * This property cannot be changed after initial render to avoid layout problems.
   */
  @Prop() inoPrependDefault?: boolean = false;

  /**
   * Disables the default empty element. Usable if `inoPrependDefault` is set.
   * Default value is `true`.
   */
  @Prop() inoDisableDefault?: boolean = true;

  @Watch('inoPrependDefault')
  changeHandler(newValue: boolean) {
    if (newValue !== this.inoPrependDefaultConst) {
      console.warn('ino-select/ino-prepend-default: This property cannot be changed after initial render to avoid layout problems.');
    }
  }

  private inoPrependDefaultConst: boolean;

  /**
   * The label of this element
   */
  @Prop() inoLabel?: string;

  /**
   * Styles this select box as outlined element.
   */
  @Prop() inoOutline?: boolean;

  /**
   * The value of this element. (**unmanaged**)
   */
  @Prop() value?: string = '';

  @Watch('value')
  handleValueChange(value: string) {
    this.setSelectValue(value);
  }

  /**
   * Emits when a selection changes. Contains new value in `event.detail`.
   */
  @Event() valueChange!: EventEmitter<string>;

  componentWillLoad() {
    this.inoPrependDefaultConst = this.inoPrependDefault;
  }

  componentDidLoad() {
    this.mdcInstance = new MDCSelect(this.el.querySelector('.mdc-select'));

    if (this.value) {
      this.setSelectValue(this.value);
    }
  }

  componentWillUnLoad() {
    this.mdcInstance.destroy();
  }

  private setSelectValue(value: string) {
    if (this.nativeSelectElement) {
      this.nativeSelectElement.value = this.mdcInstance.value = value;
    }
  }

  @Listen('change')
  handleChange(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  @Listen('input')
  handleInput(e) {
    e.preventDefault();
    const value = e.target.value;
    this.valueChange.emit(value);
  }

  render() {
    const classSelect = classNames({
      'mdc-select': true,
      'mdc-select--disabled': this.disabled,
      'mdc-select--outlined': this.inoOutline,
      'mdc-select--box': !this.inoOutline
    });

    return (
      <Host>
        <div class={classSelect}>
          <i class="mdc-select__dropdown-icon"/>
          <select
            ref={el => (this.nativeSelectElement = el)}
            class="mdc-select__native-control"
            autoFocus={this.autofocus}
            disabled={this.disabled}
            form={this.form}
            name={this.name}
            required={this.required}
          >
            {this.inoPrependDefaultConst && <option disabled={this.inoDisableDefault} selected value=""/>}
            <slot/>
          </select>
          <ino-label
            ino-outline={this.inoOutline}
            ino-text={this.inoLabel}
            ino-required={this.required}
            ino-disabled={this.disabled}
            ino-show-hint={this.inoShowLabelHint}
          />
        </div>
      </Host>
    );
  }
}
