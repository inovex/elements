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

const DIALOG_ACTION_ATTRIBUTE = 'data-ino-dialog-action';

/**
 * @slot default - content of the dialog
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

  @Prop() headline?:string;

  @Prop() body?:string;

  @Prop() hasBodySlot?:boolean;

  @Prop() hasContentSlot?:boolean

  @Prop() canceltext?:string;

  @Prop() submittext?:string;

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
    this.hasBodySlot = !!this.el.querySelector('[slot="body"]');
    this.hasContentSlot = !!this.el.querySelector('[slot="content"]');
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
    this.close.emit(element.getAttribute(DIALOG_ACTION_ATTRIBUTE));
  }

  render() {
  

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
              {!this.hasContentSlot?
                <div class={!this.body? 'no-body' : null}> 
                  {this.headline? 
                    <div class="headline">
                      {this.icon && <ino-icon icon={this.icon} />}
                      <h1>{this.headline}</h1>
                    </div>
                  : null}
                  {
                    this.body?
                      <div class="body">
                        {this.body}
                      </div> 
                  : null}
                  <slot name="body"/>
                  <div class="button-row">
                    {this.canceltext? <ino-button  variant="outlined">{this.canceltext}</ino-button> : null}
                    {this.submittext? <ino-button>{this.submittext}</ino-button> : null}
                  </div>
              </div>
              : <slot name="content"/>}
            </div>
          </div>
          <div class="mdc-dialog__scrim" onClick={() => this.dismissible && this.close.emit('close')} />
        </div>
      </Host>
    );
  }
}
