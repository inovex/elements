import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
  Prop,
  Element,
} from '@stencil/core';
import classNames from 'classnames';

/**
 * @slot default - content of the Accordion
 */
@Component({
  tag: 'ino-accordion',
  styleUrl: 'ino-accordion.scss',
  shadow: false,
})
export class Accordion implements ComponentInterface {
  @Element() el: HTMLInoAccordionElement;
  /**
   * Sets the expanded state for this element.
   */
  @Prop() expanded = false;

  /**
   * Sets the title for this element.
   */
  @Prop() accordionTitle: string = null;

  /**
   * Emits when the user clicks on the icon toggle  to change the expanded state. Contains the status in `event.detail`.
   */
  @Event() expandedChange: EventEmitter<boolean>;

  componentDidLoad() {
    if (!this.accordionTitle) {
      console.warn('Ino-Accordion: missing accordionTitle property.');
    }
  }

  private toggleExpand() {
    this.expandedChange.emit(!this.expanded);
  }
  render() {
    const inoAccordionClasses = classNames({
      'ino-accordion': true,
      'ino-accordion--expanded': this.expanded,
    });

    const inoAccordionContent = classNames({
      'ino-accordion__content--visible': this.expanded,
      'ino-accordion__content': true,
    });

    return (
      <div class={inoAccordionClasses}>
        <div class="ino-accordion__header" onClick={() => this.toggleExpand()}>
          <button
            class={
              this.expanded
                ? 'ino-accordion__toggle-button--expanded'
                : 'ino-accordion__toggle-button--collapsed'
            }
          >
            <span class="toggle-icon"></span>
            <span class="toggle-icon"></span>
          </button>
          <span
            class={`ino-accordion__title ${
              this.expanded ? 'ino-accordion__title--expanded' : ''
            }`}
          >
            {this.accordionTitle}
          </span>
        </div>
        <div
          class={`ino-accordion__content-wrapper ${
            this.expanded ? 'ino-accordion__content-wrapper--expanded' : ''
          }`}
        >
          <div class={inoAccordionContent}>
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
