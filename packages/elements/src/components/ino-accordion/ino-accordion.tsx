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
      visibility: this.expanded ? 'visible' : 'hidden',
      'ino-accordion--content': true,
    });

    return (
      <div class={inoAccordionClasses}>
        <div class="ino-accordion--header" onClick={() => this.toggleExpand()}>
          <button class={this.expanded ? 'clicked' : ''}>
            <span></span>
            <span></span>
          </button>
          <span
            class={`ino-accordion--title ${this.expanded ? 'expanded' : ''}`}
          >
            {this.accordionTitle}
          </span>
        </div>
        <div
          class={`ino-accordion--content-wrapper ${
            this.expanded ? 'expanded' : ''
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
