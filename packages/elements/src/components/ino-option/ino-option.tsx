import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * @slot default - The text of the option
 */
@Component({
  tag: 'ino-option',
  styleUrl: 'ino-option.scss',
  shadow: false,
})
export class InoOption {
   @Element() el!: HTMLElement;

  /**
   * Disables the option
   */
  @Prop() disabled?: boolean = false;

  /**
   * Selects the option
   */
  @Prop() selected?: boolean = false;

  /**
   * Value of the option
   */
  @Prop() value!: string;

  /**
   * Slots content has been changed
   */
  @Event() slotContentChange!: EventEmitter<MutationRecord[]>;

  @Listen('keydown')
  keydownHandler(e) {
    if (this.disabled && (e.key === 'Enter' || e.key === ' ')) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  componentDidLoad() {
    this.observeSlotContent();
  }

  private observeSlotContent() {
    let mdcListItemContent: HTMLCollectionOf<Element> = this.el.getElementsByClassName('mdc-list-item__text');
    if (mdcListItemContent && mdcListItemContent.item(0)) {
      let elementToWatch: Element = mdcListItemContent.item(0);
      let observer = new MutationObserver((mutations, _) => {
        this.slotContentChange.emit(mutations);
      });
      observer.observe(elementToWatch, { characterData: true, subtree: true });
    }
  }

  render() {
    const classSelect = classNames({
      'mdc-list-item': true,
      'mdc-list-item--disabled': this.disabled,
      'mdc-list-item--selected': this.selected,
    });

    return (
      <Host>
        <li
          class={classSelect}
          data-value={this.value}
          aria-selected={this.selected}
        >
          <span class='mdc-list-item__text'>
            <slot />
          </span>
        </li>
      </Host>
    );
  }
}
