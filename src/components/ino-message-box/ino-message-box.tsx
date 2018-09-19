import { Component, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'ino-message-box',
  styleUrl: 'ino-message-box.scss',
  shadow: false
})
export class MessageBox {
  /**
   * The heading of this chip.
   */
  @Prop() inoHeading?: string;

  /**
   * The icon before the heading in this chip.
   */
  @Prop() inoIcon?: string;

  /**
   * If true, add a close icon on the right side of this chip.
   * It enables an `inoRemove`-Event that can be listened to.
   */
  @Prop() inoRemovable?: boolean;

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   * Possible values: `primary` (default),  `secondary`, `tertiary`,
   * `success`, `warning`, `error`, `light`, `dark`.
   */
  @Prop() inoColorScheme?: string;

  /**
   * If true, display the message box as modal in fix position
   * on top of the page.
   */
  @Prop() inoModal?: boolean;

  /**
   * Event that emits as soon as the user removes this element.
   * Listen to this event to hide or destroy this element.
   * The event only emits if the property `inoRemovable` is true.
   */
  @Event() inoRemove!: EventEmitter;

  private handleClick(e: Event) {
    e.preventDefault();
    this.inoRemove.emit(true);
  }

  private handleKeyPress(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      e.preventDefault();
      this.inoRemove.emit(true);
    }
  }

  render() {
    return (
      <div class="ino-message__composer">
        <div class="ino-message__header">
          {this.inoIcon
            && <ino-icon class="ino-message__header-leading" ino-icon={this.inoIcon}></ino-icon>}

          <div class="ino-message__header-heading">{this.inoHeading}</div>

          { this.inoRemovable &&
            <ino-icon
              class="ino-message__header-remove"
              ino-icon="cancel"
              tabindex="0"
              role="button"
              onClick={e => this.handleClick(e)}
              onKeyPress={e => this.handleKeyPress(e)}
            >
            </ino-icon>
          }
        </div>
        <div class="ino-message__content"><slot /></div>
      </div>
    );
  }
}
