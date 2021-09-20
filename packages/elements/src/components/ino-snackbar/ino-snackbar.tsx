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

@Component({
  tag: 'ino-snackbar',
  styleUrl: 'ino-snackbar.scss',
  shadow: false,
})
export class Snackbar implements ComponentInterface {
  private snackbarInstance: MDCSnackbar;
  private snackbarElement!: HTMLElement;
  private nodeTimeout: NodeJS.Timeout;

  @Element() el!: HTMLElement;

  /**
   * The text message to display.
   */
  @Prop() message?: string;

  /**
   * The text to display for the action button.
   * If no text is defined, the snack bar is displayed in an alternative feedback style.
   */
  @Prop() actionText?: string;

  /**
   * Changes the snackbar type
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
      this.handleSnackbarHide
    );
    this.setupTimeout();
    if (this.stayVisibleOnHover) {
      this.snackbarElement.addEventListener(
        'mouseenter',
        this.interruptTimeout
      );
      this.snackbarElement.addEventListener('mouseleave', this.setupTimeout);
    }
    this.snackbarInstance.open();
  }

  disconnectedCallback() {
    this.snackbarInstance?.destroy();
    this.snackbarElement.removeEventListener(
      'MDCSnackbar:closing',
      this.handleSnackbarHide
    );
    this.snackbarElement.removeEventListener(
      'mouseenter',
      this.interruptTimeout
    );
    this.snackbarElement.removeEventListener('mouseleave', this.setupTimeout);
  }

  private setupTimeout = () => {
    this.snackbarInstance.timeoutMs = -1;
    if (this.timeout >= 0) {
      this.nodeTimeout = setTimeout(
        () => this.snackbarInstance.close(),
        this.timeout
      );
    }
  };

  private interruptTimeout = () => {
    if (this.nodeTimeout) {
      clearTimeout(this.nodeTimeout);
    }
  };

  private handleSnackbarHide = (e) => {
    this.hideEl!.emit();
    e.stopPropagation();
  };

  render() {
    const hasActionText = Boolean(this.actionText);

    const hostClasses = classNames(`ino-snackbar--type-${this.type}`);

    const snackbarClasses = classNames(
      'mdc-snackbar',
      'ino-snackbar-layout-container'
    );

    return (
      <Host class={hostClasses}>
        <div
          ref={(el) => (this.snackbarElement = el as HTMLDivElement)}
          class={snackbarClasses}
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="mdc-snackbar__surface ino-snackbar-container">
            <div class="mdc-snackbar__actions ino-snackbar-icon-container">
              {this.type === 'info' && <ino-icon icon="info" />}
              {this.type === 'error' && <ino-icon icon="warning" />}
              {this.type === 'success' && <ino-icon icon="checkmark" />}
            </div>
            <div
              class="mdc-snackbar__label ino-snackbar-message-container"
              aria-atomic="false"
            >
              <div class="ino-snackbar-text-container">{this.message}</div>
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
            color-scheme="dark"
          />
        </div>
      </Host>
    );
  }
}
