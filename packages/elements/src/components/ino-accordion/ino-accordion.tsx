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
 * @slot default - The content of the Accordion
 */
@Component({
  tag: 'ino-accordion',
  styleUrl: 'ino-accordion.scss',
  shadow: false,
})
export class Accordion implements ComponentInterface {
  @Element() el: HTMLInoAccordionElement;
  /**
   * Weather the accordion is expanded or collapsed.
   */
  @Prop() expanded = false;

  /**
   * The title of the accordion.
   */
  @Prop() accordionTitle: string = null;

  /**
   * Emits when the user clicks on the icon toggle to change the expanded state. Contains the status in `event.detail`.
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
    const toggleButtonClasses = classNames({
      'toggle-button': true,
      'toggle-button--expanded': this.expanded,

    });

    const titleClasses = classNames({
      'ino-accordion__title': true,
      'ino-accordion__title--expanded': this.expanded,
    });

    const contentWrapperClasses = classNames({
      'ino-accordion__content-wrapper': true,
      'ino-accordion__content-wrapper--expanded': this.expanded,
    });

    return (
      <div class={inoAccordionClasses}>
        <div class="ino-accordion__header" onClick={() => this.toggleExpand()}>
        <button class={toggleButtonClasses}>
            <span class="toggle-icon toggle-icon--expanded"></span>
            <span class="toggle-icon toggle-icon--collapsed"></span>
          </button>
          <span class={titleClasses}>{this.accordionTitle}</span>
        </div>
        <div class={contentWrapperClasses}>
          <div class="ino-accordion__content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
