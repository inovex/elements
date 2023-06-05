import { MDCDialog } from '@material/dialog';
import { closest } from '@material/dom/ponyfill';
import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  Watch,
  h,
  Listen
} from '@stencil/core';
import { DialogCloseAction } from '../types';
import { DialogSubmitAction } from '../types';
import { hasSlotContent } from '../../util/component-utils';

const DIALOG_ACTION_ATTRIBUTE = 'data-ino-dialog-action';

/**
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
   * Close the dialog on pressing the ESC key or clicking outside of the dialog.
   */
  @Prop() dismissible?: boolean;

  /**
   * Opens the dialog if set to true
   */
  @Prop() open = false;

  /**
   * Adds a headline to the `ino-dialog`
   */
  @Prop() headerText?:string;

  /**
   * Adds a text to the body of the `ino-dialog`
   */
  @Prop() bodyText?:string;

  /**
   * Adds a button with the given text to close the `ino-dialog`
   */
  @Prop() cancelText?:string;

  /**
   * Adds a button with the given text to proceed with an action`
   */
  @Prop() actionText?:string;


  /**
   * Adds a `ino-icon` besides the headline
   */
  @Prop() icon?:string;

  // @Prop() hideCancelButton?:boolean;

  @Watch('open')
  openChanged(open: boolean) {
    open ? this.mdcDialog?.open() : this.mdcDialog?.close();
  }

  @Listen('keyup', { target: 'body' })
  handleKeyUp(event: KeyboardEvent) {
    if(event.key === 'Escape' && this.open && this.dismissible) {
      this.close.emit('close');
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

  componentWillRender(): Promise<void> {
    if(!this.mdcDialog || !this.open) {
      return;
    }

    // Wait to render the content until the MDC Dialog itself is opened
    return new Promise((resolve) => {
      this.mdcDialog.listen('MDCDialog:opened', () => resolve(), { once: true });
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
  }

  disconnectedCallback() {
    this.mdcDialog?.destroy();
  }

  private handleDialogClick(e: Event): void {
    if (!e.target) {
      return;
    }
    const element = closest(e.target as Element, `[${DIALOG_ACTION_ATTRIBUTE}]`);
    if (!element) {
      return;
    }
    console.log('element.getAttribute(DIALOG_ACTION_ATTRIBUTE)', element.getAttribute(DIALOG_ACTION_ATTRIBUTE))
    this.close.emit(element.getAttribute(DIALOG_ACTION_ATTRIBUTE));
  }

  private handleAction = (e) => {
    if(e === 'action') {
      this.action.emit(e);
    }
    this.close.emit(e);
  }; 

  render() {
    //const hasBodySlot = hasSlotContent(this.el, 'body');
    // const hasContentSlot = hasSlotContent(this.el, 'content');
    const hasDefaultSlot = hasSlotContent(this.el, 'default');

    const hasHeaderSlot = hasSlotContent(this.el, 'header');
    const hasBodySlot = hasSlotContent(this.el, 'body');
    const hasFooterSlot = hasSlotContent(this.el, 'footer');

    return (
      <Host class={{'ino-dialog--fullwidth': this.fullwidth}}>
        <div class="mdc-dialog">
          <div class="mdc-dialog__container">
            <div
              class="mdc-dialog__surface"
              role="alertdialog"
              aria-modal="true"
            >
              <div tabindex="0" />
               {hasDefaultSlot ? <slot></slot> : 
                  <div> 
                    {hasHeaderSlot ? <slot name="header"></slot> :
                      <header>
                         {this.icon && <ino-icon icon={this.icon} />}
                        <h1>{this.headerText}</h1>
                      </header>
                    }
                    {hasBodySlot ? <slot name="body"></slot> :
                      <section class="body">
                        {this.bodyText}
                      </section> 
                    }
                    {hasFooterSlot ? <slot name="footer"></slot> :
                      <footer>
                        {this.cancelText && <ino-button variant="outlined" onClick={() => this.handleAction('close')}>{this.cancelText}</ino-button>}
                        {this.actionText && <ino-button type="submit" onClick={() => this.handleAction('submit')}>{this.actionText}</ino-button>}
                    </footer>
                    }
                </div>
                }
            </div>
          </div>
          <div class="mdc-dialog__scrim" onClick={() => this.dismissible && this.close.emit('close')} />
        </div>
      </Host>
    );
  }
}
