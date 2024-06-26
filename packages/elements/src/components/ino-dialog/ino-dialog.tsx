import { MDCDialog } from '@material/dialog';
import { closest } from '@material/dom/ponyfill';
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
  Watch,
} from '@stencil/core';
import { hasSlotContent } from '../../util/component-utils';
import { DialogCloseAction, DialogSubmitAction } from '../types';

const DIALOG_ACTION_ATTRIBUTE = 'data-ino-dialog-action';

/**
 * The ino-dialog component displays a modal window that can be used to display additional information or notify the user.
 * It is based on the mdc-dialog and is fully customizable. The styling of a dialog's content must be provided by users.
 *
 * #### Usage Notes
 *
 * - **Child Component Layout Issues**: If elements like ripples or labels in the `ino-dialog` are mispositioned or incorrectly sized, it may indicate that child components are being rendered before the dialog is fully open.
 * - **Rendering After Dialog Opens**: To prevent layout issues, render sensitive child components (e.g. `ino-icon-button`) only after the `dialogOpen` event has fired.
 *
 * @slot default - content of the dialog
 * @slot header - content to replace default header of dialog
 * @slot body - content to replace default body of dialog
 * @slot footer - content to replace default footer of dialog
 */
@Component({
  tag: 'ino-dialog',
  styleUrl: 'ino-dialog.scss',
  shadow: true,
})
export class Dialog implements ComponentInterface {
  private mdcDialog: MDCDialog;

  @Element() el!: HTMLInoDialogElement;

  /**
   * The target element the dialog should be attached to.
   * If not given, the dialog is a child of the documents body.
   * Note: This property is immutable after initialization.
   */
  @Prop() attachTo?: string;

  /**
   * Defines a full width dialog sliding up from the bottom of the page.
   */
  @Prop() fullwidth?: boolean;

  /**
   * Close the dialog by clicking outside of the dialog.
   */
  @Prop() dismissible?: boolean;

  /**
   * Opens the dialog if set to true
   */
  @Prop() open = false;

  /**
   * The role of the dialog. Can be either 'dialog' or 'alertdialog'.
   * The 'alertdialog' role should be used for important alerts and error messages.
   */
  @Prop() dialogRole?: 'dialog' | 'alertdialog' = 'dialog';

  /**
   * Adds a headline to the `ino-dialog`
   */
  @Prop() headerText?: string;

  /**
   * Adds a text to the body of the `ino-dialog`
   */
  @Prop() bodyText?: string;

  /**
   * Adds a button with the given text to close the `ino-dialog`
   */
  @Prop() cancelText?: string;

  /**
   * Adds a close icon in the top right corner to close the `ino-dialog`.
   */
  @Prop() closeIcon = false;

  /**
   * Adds a button with the given text to proceed with an action
   */
  @Prop() actionText?: string;

  /**
   * Adds a `ino-icon` besides the headline
   */
  @Prop() icon?: string;

  @Watch('open')
  openChanged(open: boolean) {
    open ? this.mdcDialog?.open() : this.mdcDialog?.close();
  }

  @Listen('keyup', { target: 'body' })
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.open) {
      this.handleClose();
    }
  }

  /**
   * Emits an event upon closing the dialog
   */
  @Event() close!: EventEmitter<DialogCloseAction>;

  /**
   * Emits an event upon clicking the action button of the dialog
   */
  @Event() action!: EventEmitter<DialogSubmitAction>;

  /**
   * Emits an event when the dialog is opened.
   */
  @Event() dialogOpen!: EventEmitter<void>;

  componentWillRender(): Promise<void> {
    if (!this.mdcDialog || !this.open) {
      return;
    }

    // Wait to render the content until the MDC Dialog itself is opened
    return new Promise(resolve => {
      this.mdcDialog.listen('MDCDialog:opened', () => resolve(), {
        once: true,
      });
    });
  }

  componentWillLoad() {
    // During first initaliazation, attach the dialog to the target.
    const target = this.attachTo ? document.querySelector(this.attachTo) : document.body;
    target?.appendChild(this.el);
  }

  componentDidLoad() {
    this.mdcDialog = new MDCDialog(this.el.shadowRoot.querySelector('.mdc-dialog'));

    // Prevent internal handling of escape and scrim click action (would close the dialog).
    // We want to manually close the dialog via our open property
    this.mdcDialog.scrimClickAction = '';
    this.mdcDialog.escapeKeyAction = '';

    this.mdcDialog.listen('click', this.handleDialogClick.bind(this));
    this.open && this.mdcDialog?.open();

    this.mdcDialog.listen('MDCDialog:opened', () => {
      this.dialogOpen.emit();
    });
  }

  disconnectedCallback() {
    this.mdcDialog?.destroy();
  }

  private handleClose() {
    this.close.emit('close');
  }

  private handleDialogClick(e: Event): void {
    if (!e.target) {
      return;
    }
    const element = closest(e.target as Element, `[${DIALOG_ACTION_ATTRIBUTE}]`);
    if (!element) {
      return;
    }
    this.close.emit(element.getAttribute(DIALOG_ACTION_ATTRIBUTE));
  }

  render() {
    // Conditional rendering based on 'dialogIsOpen' causes layout jumps and only can fixes rare misalignment issues. Use the 'dialogOpen' event to render content after dialog opens for these cases.
    const hasDefaultSlot = hasSlotContent(this.el, 'default');
    const hasHeaderSlot = hasSlotContent(this.el, 'header');
    const hasBodySlot = hasSlotContent(this.el, 'body');
    const hasFooterSlot = hasSlotContent(this.el, 'footer');
    return (
      <Host class={{ 'ino-dialog--fullwidth': this.fullwidth }}>
        <div class="mdc-dialog">
          <div class="mdc-dialog__container">
            <div
              class="mdc-dialog__surface"
              role={this.dialogRole}
              aria-modal={this.dismissible ? 'true' : 'false'}
              aria-labelledby="ino-dialog-title"
              aria-describedby={this.bodyText ? 'ino-dialog-description' : undefined}
            >
              <div tabindex="0" />
              {hasDefaultSlot ? (
                <slot></slot>
              ) : (
                <div>
                  {this.closeIcon && (
                    <ino-icon-button class="close-icon" icon="close" onClickEl={this.handleClose.bind(this)} />
                  )}
                  {hasHeaderSlot ? (
                    <slot name="header"></slot>
                  ) : (
                    <header>
                      {this.icon && <ino-icon class="header-icon" icon={this.icon} />}
                      <h1 id="ino-dialog-title">{this.headerText}</h1>
                    </header>
                  )}
                  {hasBodySlot ? (
                    <slot name="body"></slot>
                  ) : (
                    <section id="ino-dialog-description" class="body">
                      {this.bodyText}
                    </section>
                  )}
                  {hasFooterSlot ? (
                    <slot name="footer"></slot>
                  ) : (
                    <footer>
                      {this.cancelText && (
                        <ino-button variant="outlined" onClick={this.handleClose.bind(this)}>
                          {this.cancelText}
                        </ino-button>
                      )}
                      {this.actionText && (
                        <ino-button type="submit" onClick={() => this.action.emit('submit')}>
                          {this.actionText}
                        </ino-button>
                      )}
                    </footer>
                  )}
                </div>
              )}
            </div>
          </div>
          <div class="mdc-dialog__scrim" onClick={() => this.dismissible && this.handleClose()} />
        </div>
      </Host>
    );
  }
}
