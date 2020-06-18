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
import { MDCMenuSurface } from '@material/menu-surface/component';

@Component({
  tag: 'ino-select',
  styleUrl: 'ino-select.scss',
  shadow: false
})
export class Select implements ComponentInterface {
  // An internal instance of the material design form field.
  private mdcSelectInstance: MDCSelect;
  private mdcMenuSurfaceInstance: MDCMenuSurface;
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
    this.mdcSelectInstance = new MDCSelect(this.el.querySelector('.mdc-select'));

    if (this.value) {
      this.setSelectValue(this.value);
    } else if (this.mdcSelectInstance.value) {
      this.value = this.mdcSelectInstance.value;
    }

    this.mdcMenuSurfaceInstance = new MDCMenuSurface(this.el.querySelector('.mdc-menu-surface'));
    this.mdcMenuSurfaceInstance.listen('MDCMenuSurface:opened', this.positionOpenedMenu);
  }

  componentWillUnLoad() {
    this.mdcMenuSurfaceInstance.unlisten('MDCMenuSurface:opened', this.positionOpenedMenu);

    this.mdcSelectInstance.destroy();
    this.mdcMenuSurfaceInstance.destroy();
  }

  positionOpenedMenu = () => {
    const { bottom, top, left } = this.el.getBoundingClientRect();
    const menu = this.el.querySelector('.mdc-menu') as HTMLDivElement;
    const menuHeight = Number(getComputedStyle(menu).height.slice(0, -2)); // Height of open menu without 'px' suffix

    const shouldMenuOpenUpwards = (menuHeight + bottom) > window.innerHeight; // Check if the opened menu would overflow when aligned downwards
    const verticalPositionInPx = shouldMenuOpenUpwards ?
      top - menuHeight // position so that the lowest option intersects the top side of the select field
      :
      bottom; // position at the bottom side of the select field

    menu.style.setProperty('--ino-vertical-alignment', `${verticalPositionInPx}px`);
    menu.style.setProperty('--ino-horizontal-alignment', `${left}px`);
    menu.style.width = `${this.el.clientWidth}px`;
  };

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

  render() {
    const classSelect = classNames({
      'mdc-select': true,
      'mdc-select--disabled': this.disabled,
      'mdc-select--outlined': this.inoOutline,
      'mdc-select--box': !this.inoOutline,
      'mdc-select--required': this.required
    });
    const hiddenInput = this.required ? (
      <input ref={el => (this.nativeInputElement = el)} required={this.required}></input>
    ) : (
      ''
    );

    return (
      <Host name={this.name}>
        <div class={classSelect}>

          <div class="mdc-select__anchor">
            <i class="mdc-select__dropdown-icon"/>

            <div class="mdc-select__selected-text" aria-required={this.required} aria-disabled={this.disabled}>
              {this.value}
              {hiddenInput}
            </div>
            <ino-label
              ino-outline={this.inoOutline}
              ino-text={this.inoLabel}
              ino-required={this.required}
              ino-disabled={this.disabled}
              ino-show-hint={this.inoShowLabelHint}
            />

          </div>

          <div class="mdc-select__menu mdc-menu mdc-menu-surface">
            <ul class="mdc-list">
              <slot/>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
