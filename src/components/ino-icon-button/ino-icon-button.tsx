import { MDCRipple } from '@material/ripple';
import { Component, Element, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-icon-button',
  styleUrl: 'ino-icon-button.scss',
  shadow: false
})
export class IconButton {
  // An internal instance of the icon button. Either the ripple effect
  // or a toggle button instance.
  private mdcInstance: MDCRipple;

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
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: string;

  componentDidLoad() {
    const nativeElement = this.el.querySelector('.mdc-icon-button');
    this.mdcInstance = new MDCRipple(nativeElement);
    this.mdcInstance.unbounded = true;
  }

  componentWillUnload() {
    this.destroyIconButton();
  }

  private destroyIconButton() {
    if (this.mdcInstance) {
      this.mdcInstance.destroy();
    }
  }

  render() {
    const iconButtonClasses = classNames({
      'mdc-icon-button': true
    });

    return (
      <button
        autoFocus={this.autofocus}
        class={iconButtonClasses}
        disabled={this.disabled}
      >

        <ino-icon ino-icon={this.inoIcon} class="mdc-icon-button__icon"></ino-icon>
      </button>
    );
  }
}
