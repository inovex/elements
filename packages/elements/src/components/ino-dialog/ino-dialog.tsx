import { MDCDialog } from '@material/dialog';
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
} from '@stencil/core';

/**
 * @slot content - content of the dialog
 * @slot header - header of the dialog
 * @slot footer - footer of the dialog
 */

@Component({
  tag: 'ino-dialog',
  styleUrl: 'ino-dialog.scss',
  shadow: true,
})
export class Dialog implements ComponentInterface {
  private mdcDialog: MDCDialog;

  @Element() el!: HTMLElement;

  /**
   * Opens the dialog if set to true
   */
  @Prop() open: boolean = false;
  @Watch('open')
  openChanged(newVal: boolean) {
    if (newVal) {
      this.mdcDialog.open();
      this.openChange.emit(true);
    } else {
      this.mdcDialog.close();
      this.openChange.emit(false);
    }
  }

  /**
   * Emits an event upon opening or closing the dialog
   */
  @Event() openChange!: EventEmitter;

  componentDidLoad() {
    this.mdcDialog = new MDCDialog(
      this.el.shadowRoot.querySelector('.mdc-dialog')
    );
    this.mdcDialog.scrimClickAction = '';
    this.mdcDialog.escapeKeyAction = '';
    if (this.open) {
      this.mdcDialog.open();
    }
  }

  disconnectedCallback() {
    this.mdcDialog?.destroy();
  }

  render() {
    return (
      <Host>
        <div class="mdc-dialog">
          <div class="mdc-dialog__container">
            <div
              class="mdc-dialog__surface"
              role="alertdialog"
              aria-modal="true"
            >
              <div class="ino-dialog__header">
                <slot name="header" />
              </div>
              <div class="ino-dialog__content">
                <div tabindex="0" />
                <slot />
              </div>
              <div class="ino-dialog__footer">
                <slot name="footer" />
              </div>
            </div>
          </div>
          <div class="mdc-dialog__scrim"/>
        </div>
      </Host>
    );
  }
}
