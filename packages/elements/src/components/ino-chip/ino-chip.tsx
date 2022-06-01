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
} from '@stencil/core';
import classNames from 'classnames';
import { hasSlotContent } from '../../util/component-utils';

import { ChipSurface, ColorScheme } from '../types';

/**
 * @slot default - The label text of the chip
 * @slot icon-leading - For the icon to be prepended
 * @slot icon-trailing - For the icon to be appended - disables the `removable` property
 */
@Component({
  tag: 'ino-chip',
  styleUrl: 'ino-chip.scss',
  shadow: false,
})
export class Chip implements ComponentInterface {
  @Element() el!: HTMLInoChipElement;

  /**
   * The name of the color scheme which is used
   * to style the background and outline of this component.
   */
  @Prop() colorScheme: ColorScheme | 'default' = 'default';

  /**
   * Disables all interactions.
   */
  @Prop() disabled = false;

  /**
   * The fill type of this element.
   */
  @Prop() fill: ChipSurface = 'solid';

  /**
   * [DEPRECATED] Please use the default slot instead
   *
   * The content of the component.
   * @deprecated
   */
  @Prop() label: string;

  /**
   * Adds a close icon on the right side of this chip which emits the `removeChip` event on click.
   */
  @Prop() removable = false;

  /**
   * Makes the chip selectable.
   */
  @Prop() selectable = false;

  /**
   * Marks this element as selected (**works only in conjunction with `selectable`**)
   */
  @Prop() selected = false;

  /**
   * The value of this chip.
   * Is emitted by the `chipClicked` and `chipRemoved` events.
   */
  @Prop() value?: string;

  /**
   * Event that emits the `value` as soon as the user clicks on the chip.
   */
  @Event() chipClicked: EventEmitter<string>;

  @Listen('click')
  handleClick(e: MouseEvent) {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    this.chipClicked.emit(this.value);
  }

  /**
   * Event that emits the `value` as soon as the user clicks on the remove icon.
   *
   * Listen to this event to hide or destroy this chip.
   */
  @Event() chipRemoved: EventEmitter<string>;

  componentDidLoad() {
    if (this.label) {
      console.warn('[ino-chip] The attribute "label" is deprecated, please use the default slot instead.');
    }
  }

  private iconClicked = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    this.chipRemoved.emit(this.value);
  }

  private renderPrimaryAction(content: HTMLElement[]) {
    if (this.selectable) {
      return (
        <span
          class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
          role="option"
          aria-selected={this.selected}
          aria-disabled={this.disabled}
          tabIndex={0}
        >
          {content}
        </span>
      );
    }

    return (
      <button
        class="mdc-evolution-chip__action mdc-evolution-chip__action--primary"
        tabIndex={this.disabled ? -1 : 0}
        disabled={this.disabled}
        data-value={this.value}
        data-mdc-deletable={this.removable}
        type="button"
      >
        {content}
      </button>
    );
  }

  render() {
    const colorSchemeClass = `ino-chip--color-scheme-${this.colorScheme}`;

    const leadingSlotHasContent = hasSlotContent(this.el, 'icon-leading');
    const trailingSlotHasContent = hasSlotContent(this.el, 'icon-trailing');

    const hasPrimaryGraphic = leadingSlotHasContent || this.selectable;
    const hasTrailingGraphic = trailingSlotHasContent || this.removable;

    const hostClasses = classNames({
      [colorSchemeClass]: true,
      'ino-chip--solid': this.fill === 'solid',
      'ino-chip--outline': this.fill === 'outline',
      'ino-chip-disabled': this.disabled,
    });

    const chipClasses = classNames({
      'mdc-evolution-chip': true,
      'ino-chip-container': true,
      'mdc-evolution-chip--selectable': this.selectable,
      'mdc-evolution-chip--selected': this.selected,
      'mdc-evolution-chip--selecting':
        this.selectable && !leadingSlotHasContent && this.selected,
      'mdc-evolution-chip--deselecting':
        this.selectable && !leadingSlotHasContent && !this.selected,
      'mdc-evolution-chip--selecting-with-primary-icon':
        this.selectable && leadingSlotHasContent && this.selected,
      'mdc-evolution-chip--deselecting-with-primary-icon':
        this.selectable && leadingSlotHasContent && !this.selected,
      'mdc-evolution-chip--disabled': this.disabled,
      'mdc-evolution-chip--filter': this.selectable,
      'mdc-evolution-chip--with-primary-graphic': hasPrimaryGraphic,
      'mdc-evolution-chip--with-primary-icon': leadingSlotHasContent,
      'mdc-evolution-chip--with-trailing-action': hasTrailingGraphic,
    });

    return (
      <Host class={hostClasses}>
        <span
          class={chipClasses}
          role={this.selectable ? 'presentation' : 'row'}
        >
          <span
            class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary"
            role="gridcell"
          >
            {this.renderPrimaryAction([
              <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary" />,
              hasPrimaryGraphic && (
                <span class="mdc-evolution-chip__graphic">
                  {leadingSlotHasContent && (
                    <span class="mdc-evolution-chip__icon mdc-evolution-chip__icon--primary ino-chip-leading-icon">
                      <slot name="icon-leading" />
                    </span>
                  )}
                  {this.selectable && this.selected && (
                    <span class="mdc-evolution-chip__checkmark">
                      <svg
                        class="mdc-evolution-chip__checkmark-svg"
                        viewBox="-2 -3 30 30"
                      >
                        <path
                          class="mdc-evolution-chip__checkmark-path"
                          fill="none"
                          stroke="black"
                          d="M1.73,12.91 8.1,19.28 22.79,4.59"
                        />
                      </svg>
                    </span>
                  )}
                </span>
              ),
              <span class="mdc-evolution-chip__text-label ino-chip-label">
                {this.label ? this.label : <slot />}
              </span>,
            ])}
          </span>
          {hasTrailingGraphic && (
            <span
              class="mdc-evolution-chip__cell mdc-evolution-chip__cell--trailing"
              role="gridcell"
            >
              <button
                class="mdc-evolution-chip__action mdc-evolution-chip__action--trailing"
                type="button"
                tabIndex={-1}
                data-mdc-deletable="true"
                disabled={this.disabled}
                onClick={(e) => this.iconClicked(e)}
              >
                <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--trailing" />
                <span class="mdc-evolution-chip__icon mdc-evolution-chip__icon--trailing ino-chip-trailing-icon">
                  {this.removable ? (
                    <ino-icon
                      class="ino-chip-close-icon"
                      icon="close"
                      tabindex="0"
                      role="button"
                      clickable={true}
                    />
                  ) : (
                    <slot name="icon-trailing" />
                  )}
                </span>
              </button>
            </span>
          )}
        </span>
      </Host>
    );
  }
}
