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

  @Element() el!: HTMLElement;

  /**
   * The text message to display.
   */
  @Prop() message?: string;

  /**
   * The text to display for the action button.
   * If no text is defined, the snack bar is displayed in an alternative feedback style.
   */
  @Prop() actionText?: string = '';

  /**
   * Controls if Snackbar is centered or left-aligned or right-aligned.
   */
  @Prop() alignment: 'left' | 'right' | 'center' = 'center';

  /**
   * Changes the snackbar type
   */
  @Prop() type: SnackbarType = 'primary';

  /**
   * Sets the timeout in ms until the snackbar disappears. The timeout can
   * be disabled by setting it to a negative value.
   */
  @Prop() timeout?: number = 5000;

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
    this.snackbarElement.addEventListener('MDCSnackbar:closing', (e) =>
      this.handleSnackbarHide(e)
    );
    this.configureTimeout();
    this.snackbarInstance.open();
  }

  disconnectedCallback() {
    this.snackbarInstance?.destroy();
    this.snackbarElement.removeEventListener('MDCSnackbar:closing', (e) =>
      this.handleSnackbarHide(e)
    );
  }

  private configureTimeout() {
    this.snackbarInstance.timeoutMs = -1;
    if (this.timeout >= 0) {
      setTimeout(() => this.snackbarInstance.close(), this.timeout);
    }
  }

  private handleSnackbarHide(e) {
    this.hideEl!.emit(true);
    e.stopPropagation();
  }

  render() {
    const hostClasses = classNames(
      `ino-snackbar--align-${this.alignment}`,
      `ino-snackbar--type-${this.type}`,
      {
        'ino-snackbar--no-action': !this.actionText,
      }
    );

    const snackbarClasses = classNames({
      'mdc-snackbar': true,
      'mdc-snackbar--leading':
        this.alignment === 'left' || this.alignment === 'right',
    });

    return (
      <Host class={hostClasses}>
        <div
          ref={(el) => (this.snackbarElement = el as HTMLDivElement)}
          class={snackbarClasses}
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="mdc-snackbar__surface">
            <div class="mdc-snackbar__actions">
              <ino-icon-button
                icon={'close'}
                class="custom mdc-snackbar__action"
              />
              <div class="mdc-snackbar__label" role="status" aria-live="polite">
                {this.message}
              </div>
              {this.actionText && (
                <ino-button
                  type="button"
                  ino-color-scheme="primary"
                  class="ino-action-button"
                  onClick={(_) => this.actionClick.emit()}
                  fill="outline"
                >
                  {this.actionText}
                </ino-button>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
