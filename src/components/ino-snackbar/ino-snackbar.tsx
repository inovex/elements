import { MDCSnackbar } from '@material/snackbar';
import { Component, Element, Event, EventEmitter, Prop, Watch } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-snackbar',
  styleUrl: 'ino-snackbar.scss',
  shadow: false
})
export class Snackbar {
  private snackbarInstance: MDCSnackbar;
  private snackbarElement!: HTMLElement;

  @Element() el!: HTMLElement;

  /**
   * Trigger the display of a message with optional action.
   */
  @Prop({ mutable: true }) inoShow = false;
  @Watch('inoShow')
  inoShowHandler() {
    this.showSnackbar();
  }

  /**
   * The text message to display.
   */
  @Prop() inoMessage?: string;

  /**
   * The text to display for the action button.
   */
  @Prop() inoActionText = '';

  /**
   * Whether to show the snackbar with space for multiple lines of text.
   */
  @Prop() inoMultiline = false;

  /**
   * Whether to show the action below the multiple lines of text
   * Optional, applies when multiline is true.
   */
  @Prop() inoActionOnBottom = false;

  /**
   * Controls if Snackbar is centered or start-aligned.
   */
  @Prop() inoAlignStart = false;

  /**
   * Event that emits as soon as the user removes this element.
   * Listen to this event to hide or destroy this element.
   */
  @Event() inoActionClicked!: EventEmitter;

  /**
   * Event that emits as soon as the snackbar hides.
   * Listen to this event to hide or destroy this element.
   */
  @Event() inoSnackbarHide!: EventEmitter;

  componentDidLoad() {
    this.snackbarInstance = new MDCSnackbar(this.snackbarElement);
    this.snackbarElement.addEventListener('MDCSnackbar:hide', e => this.handleSnackbarHide(e));
    this.showSnackbar();
  }

  componentWillUnload() {
    this.snackbarInstance.destroy();
    this.snackbarElement.removeEventListener('MDCSnackbar:hide', e => this.handleSnackbarHide(e));
  }

  private handleSnackbarHide(e) {
    this.inoShow = false;
    this.inoSnackbarHide!.emit(true);
    e.stopPropagation();
  }

  private showSnackbar() {

    const options = {
      message: this.inoMessage,
      multiline: this.inoMultiline
    };

    if (this.inoActionText) {
      options['actionHandler'] = () => this.inoActionClicked.emit(true);
      options['actionText'] = this.inoActionText;
      options['actionOnBottom'] = this.inoActionOnBottom;
    }

    if (this.inoShow) {
      this.snackbarInstance.show(options);
    }
  }

  render() {
    const snackbarClasses = classNames({
      'mdc-snackbar': true,
      'mdc-snackbar--align-start': this.inoAlignStart
    });

    return (
      <div
        ref={el => this.snackbarElement = el as HTMLDivElement}
        class={snackbarClasses}
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="mdc-snackbar__text">{this.inoMessage}</div>
        <div class="mdc-snackbar__action-wrapper">
          <button type="button" class="mdc-snackbar__action-button">{this.inoActionText}</button>
        </div>
      </div>
    );
  }

}
