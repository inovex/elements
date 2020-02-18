import { MDCSnackbar } from '@material/snackbar';
import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-snackbar',
  styleUrl: 'ino-snackbar.scss',
  shadow: false
})
export class Snackbar implements ComponentInterface {
  private snackbarInstance: MDCSnackbar;
  private snackbarElement!: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * The text message to display.
   */
  @Prop() inoMessage?: string;

  /**
   * The text to display for the action button.
   */
  @Prop() inoActionText?: string = '';

  /**
   * Whether to show the action below the multiple lines of text
   * Optional, applies when multiline is true.
   */
  @Prop() inoActionOnBottom?: boolean = false;

  /**
   * Controls if Snackbar is centered or start-aligned.
   */
  @Prop() inoAlignStart?: boolean = false;

  /**
   * Event that emits as soon as the action button is clicked.
   */
  @Event() inoActionClick!: EventEmitter;

  /**
   * Event that emits as soon as the snackbar hides.
   * Listen to this event to hide or destroy this element.
   */
  @Event() hideEl!: EventEmitter;

  componentDidLoad() {
    this.snackbarInstance = new MDCSnackbar(this.snackbarElement);
    this.snackbarElement.addEventListener('MDCSnackbar:closing', e =>
      this.handleSnackbarHide(e)
    );
    this.snackbarInstance.open();
  }

  componentWillUnload() {
    this.snackbarInstance.destroy();
    this.snackbarElement.removeEventListener('MDCSnackbar:closing', e =>
      this.handleSnackbarHide(e)
    );
  }

  private handleSnackbarHide(e) {
    this.hideEl!.emit(true);
    e.stopPropagation();
  }

  render() {
    const snackbarClasses = classNames({
      'mdc-snackbar': true,
      'mdc-snackbar--leading': this.inoAlignStart,
      'mdc-snackbar--stacked': this.inoActionOnBottom
    });

    return (
      <Host>
        <div
          ref={el => (this.snackbarElement = el as HTMLDivElement)}
          class={snackbarClasses}
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="mdc-snackbar__surface">
            <div class="mdc-snackbar__actions">
              <ino-icon-button
                ino-icon="close-a"
                class="custom mdc-snackbar__action"
              >
              </ino-icon-button>
              <div class="mdc-snackbar__label" role="status" aria-live="polite">
                {this.inoMessage}
              </div>
              {this.inoActionText && (
                <ino-button
                  type="button"
                  ino-color-scheme="primary"
                  class="ino-action-button"
                  onClick={_ => this.inoActionClick.emit()}
                >
                  {this.inoActionText}
                </ino-button>
              )}
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
