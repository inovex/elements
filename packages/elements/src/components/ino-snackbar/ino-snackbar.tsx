import { MDCSnackbar } from '@material/snackbar';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import classNames from 'classnames';
import { SnackbarType } from '../types';
import { hasSlotContent } from '../../util/component-utils';

/**
 * Snackbars provide brief messages about app processes at the bottom of the screen. It functions as a wrapper around the material design's [Snackbar](https://github.com/material-components/material-components-web/tree/master/packages/mdc-snackbar) component.
 *
 * @slot icon-slot - Use this slot to add a custom icon (e.g., `<ino-icon>` or `<img>`) inside the `ino-snackbar`.
 */
@Component({
  tag: 'ino-snackbar',
  styleUrl: 'ino-snackbar.scss',
  shadow: false,
})
export class Snackbar implements ComponentInterface {
  private snackbarInstance: MDCSnackbar;
  private snackbarElement!: HTMLElement;
  private nodeTimeout: NodeJS.Timeout;

  @Element() el!: HTMLInoSnackbarElement;

  /**
   * [DEPRECATED] Please use the default slot instead
   * The text message to display.
   * @deprecated
   */
  @Prop() message?: string;

  /**
   * The text to display for the action button.
   * If no text is defined, the snack bar is displayed in an alternative feedback style.
   */
  @Prop() actionText?: string;

  /**
   * Changes the snackbar type. There are three four types of messages: info, success, warning and error.
   */
  @Prop() type: SnackbarType = 'info';

  /**
   * Sets the timeout in ms until the snackbar disappears. The timeout can
   * be disabled by setting it to a negative value.
   */
  @Prop() timeout?: number = 5000;

  /**
   * If set to true, the timeout that closes the snackbar is paused when the user hovers over the snackbar.
   */
  @Prop() stayVisibleOnHover?: boolean = false;

  /**
   * Event that emits as soon as the action button is clicked.
   */
  @Event() actionClick!: EventEmitter;

  /**
   * Event that emits as soon as the snackbar hides.
   * Listen to this event to hide or destroy this element.
   */
  @Event() hideEl!: EventEmitter;

  componentDidLoad() {
    this.snackbarInstance = new MDCSnackbar(this.snackbarElement);
    this.snackbarElement.addEventListener(
      'MDCSnackbar:closing',
      this.handleSnackbarHide,
    );
    this.setupTimeout();
    if (this.stayVisibleOnHover) {
      this.snackbarElement.addEventListener(
        'mouseenter',
        this.interruptTimeout,
      );
      this.snackbarElement.addEventListener('mouseleave', this.setupTimeout);
    }
    this.snackbarInstance.open();

    if (this.message) {
      console.warn(
        '[ino-snackbar] The attribute "message" is deprecated, please use the default slot instead.',
      );
    }
  }

  disconnectedCallback() {
    this.snackbarInstance?.destroy();
    this.snackbarElement.removeEventListener(
      'MDCSnackbar:closing',
      this.handleSnackbarHide,
    );
    this.snackbarElement.removeEventListener(
      'mouseenter',
      this.interruptTimeout,
    );
    this.snackbarElement.removeEventListener('mouseleave', this.setupTimeout);
  }

  private setupTimeout = () => {
    this.snackbarInstance.timeoutMs = -1;
    if (this.timeout >= 0) {
      this.nodeTimeout = setTimeout(
        () => this.snackbarInstance.close(),
        this.timeout,
      );
    }
  };

  private interruptTimeout = () => {
    if (this.nodeTimeout) {
      clearTimeout(this.nodeTimeout);
    }
  };

  private handleSnackbarHide = (e) => {
    this.hideEl.emit();
    e.stopPropagation();
  };

  private mapTypeToIconName = (type: SnackbarType) => {
    switch (type) {
      case 'success':
        return 'i';
      case 'error':
        return '!';
      case 'info':
        return 'i';
      case 'warning':
        return '!'
      default:
        return 'i';
    }
  };

  render() {
    const hasActionText = Boolean(this.actionText);
    const hasSlot = hasSlotContent(this.el, 'icon-slot');

    const hostClasses = classNames(`ino-snackbar--type-${this.type}`);
    const snackbarClasses = classNames(
      'mdc-snackbar',
      'ino-snackbar-layout-container',
    );
    return (
      <Host class={hostClasses}>
        <div
          ref={(el) => (this.snackbarElement = el as HTMLDivElement)}
          class={snackbarClasses}
          aria-live="assertive"
          aria-atomic="true"
          role="alert"
        >
          <div class="mdc-snackbar__surface ino-snackbar-container">
            <div class="mdc-snackbar__actions ino-snackbar-icon-container">
              {hasSlot ? (
                <slot name="icon-slot" />
              ) : (
                <span>{this.mapTypeToIconName(this.type)}</span>
              )}
            </div>
            <div
              class="mdc-snackbar__label ino-snackbar-message-container"
              aria-atomic="false"
            >
              <div class="ino-snackbar-text-container">
                {this.message ? this.message : <slot />}
              </div>
              {hasActionText && (
                <div>
                  <button
                    onClick={this.actionClick.emit}
                    class="ino-snackbar-action-btn"
                  >
                    {this.actionText}
                  </button>
                </div>
              )}
            </div>
          </div>
          <ino-icon-button
            onClick={this.handleSnackbarHide}
            icon="close"
            class="ino-snackbar-close-btn"
          />
        </div>
      </Host>
    );
  }
}
