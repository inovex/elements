import { MDCIconButtonToggle } from '@material/icon-button';
import { MDCRipple } from '@material/ripple';
import { Component, Element, Prop, Watch } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-icon-button',
  styleUrl: 'ino-icon-button.scss',
  shadow: false
})
export class IconButton {
  // An internal instance of the icon button. Either the ripple effect
  // or a toggle button instance.
  private mdcInstance: MDCRipple | MDCIconButtonToggle;

  @Element() el!: HTMLElement;

  /**
   * Sets the autofocus for this element.
   */
  @Prop() autofocus?: boolean;

  /**
   * Disables this element.
   */
  @Prop() disabled?: boolean;

  /**
   * The name of the icon of this element.
   */
  @Prop() inoIcon?: string;

  /**
   * The name of the icon shown if the icon button is checked.
   * If given, makes the button a toggle button.
   */
  @Prop() inoIconChecked?: string;
  @Watch('inoIconChecked')
  inoIconCheckedChanged() {
    this.createIconButton();
  }

  /**
   * If the button is a toggle button, sets the default state to checked
   * and displays the icon provided in `inoIconChecked`.
   */
  @Prop() inoStateChecked?: boolean;

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: string;

  componentDidLoad() {
    this.createIconButton();
  }

  componentWillUnload() {
    this.destroyIconButton();
  }

  private destroyIconButton() {
    if (this.mdcInstance) {
      this.mdcInstance.destroy();
    }
  }

  private createIconButton() {
    this.destroyIconButton();

    const nativeElement = this.el.querySelector('.mdc-icon-button');
    if (this.inoIconChecked) {
      this.mdcInstance = new MDCIconButtonToggle(nativeElement);
    } else {
      this.mdcInstance = new MDCRipple(nativeElement);
      this.mdcInstance.unbounded = true;
    }
  }

  render() {
    const iconButtonClasses = classNames({
      'mdc-icon-button': true,
      'mdc-icon-button--on': this.inoIconChecked && this.inoStateChecked
    });

    return (
      <button
        autoFocus={this.autofocus}
        class={iconButtonClasses}
        disabled={this.disabled}
      >

        { this.inoIconChecked &&
          <ino-icon
            ino-icon={this.inoIconChecked}
            class="mdc-icon-button__icon mdc-icon-button__icon--on"
          >
          </ino-icon>
        }

        <ino-icon ino-icon={this.inoIcon} class="mdc-icon-button__icon"></ino-icon>
      </button>
    );
  }
}
