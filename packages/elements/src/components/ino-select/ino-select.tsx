import { MDCSelect } from '@material/select';
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
  Watch
} from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-select',
  styleUrl: 'ino-select.scss',
  shadow: false
})
export class Select implements ComponentInterface {
  // An internal instance of the material design form field.
  private mdcSelectInstance: MDCSelect;
  private nativeInputElement?: HTMLInputElement;

  @Element() el!: HTMLElement;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

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

  componentDidLoad() {
    this.mdcSelectInstance = new MDCSelect(
      this.el.querySelector('.mdc-select')
    );

    if (this.value) {
      this.setSelectValue(this.value);
    } else if (this.mdcSelectInstance.value) {
      this.value = this.mdcSelectInstance.value;
    }
  }

  componentWillUnLoad() {
    this.mdcSelectInstance.destroy();
  }

  private setSelectValue(value: string) {
    if (this.nativeInputElement) {
      this.nativeInputElement.value = value;
    }
    this.mdcSelectInstance.value = value;
  }

  @Listen('MDCSelect:change')
  handleInput(e) {
    e.preventDefault();
    if (this.mdcSelectInstance && this.mdcSelectInstance.value !== undefined) {
      const value = this.mdcSelectInstance.value;
      this.valueChange.emit(value);
    }
  }

  renderDropdownIcon = () => (
    <span class="mdc-select__dropdown-icon">
      <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
        <polygon
          class="mdc-select__dropdown-icon-inactive"
          stroke="none"
          fill-rule="evenodd"
          points="7 10 12 15 17 10"
        >
        </polygon>
        <polygon
          class="mdc-select__dropdown-icon-active"
          stroke="none"
          fill-rule="evenodd"
          points="7 15 12 10 17 15"
        >
        </polygon>
      </svg>
    </span>
  );

  render() {
    const classSelect = classNames({
      'mdc-select': true,
      'mdc-select--disabled': this.disabled,
      'mdc-select--outlined': this.inoOutline,
      'mdc-select--filled': !this.inoOutline,
      'mdc-select--required': this.required
    });

    const hiddenInput = this.required ? (
      <input
        ref={el => (this.nativeInputElement = el)}
        required={this.required}
      >
      </input>
    ) : (
      ''
    );

    return (
      <Host name={this.name}>
        <div class={classSelect}>
          <div class="mdc-select__anchor">
            <div class="mdc-select__selected-text">
              {this.value}
              {hiddenInput}
            </div>
            {this.renderDropdownIcon()}
            <ino-label
              ino-outline={this.inoOutline}
              ino-text={this.inoLabel}
              ino-required={this.required}
              ino-disabled={this.disabled}
              ino-show-hint={this.inoShowLabelHint}
            />
          </div>

          <div class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
            <ul class="mdc-list">
              <slot />
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
