import {
  Component,
  ComponentInterface,
  h,
  Event,
  EventEmitter,
  Prop,
  Element,
  State,
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
  @State() contentId: string;

  /**
   * Whether the accordion is expanded or collapsed.
   */
  @Prop() expanded = false;

  /**
   * The title of the accordion.
   */
  @Prop() accordionTitle: string = '';

  /**
   * Emits when the user clicks on the icon toggle to change the expanded state. Contains the status in `event.detail`.
   */
  @Event() expandedChange: EventEmitter<boolean>;

  componentDidLoad() {
    if (!this.accordionTitle) {
      console.warn('Ino-Accordion: missing accordionTitle property.');
    }
    this.contentId = `ino-accordion-content-${this.el.id}`;
  }

  private toggleExpand() {
    this.expandedChange.emit(!this.expanded);
  }

  render() {
    const inoAccordionClasses = classNames({
      'ino-accordion': true,
      'ino-accordion--expanded': this.expanded,
    });
    const toggleWrapperClasses = classNames({
      'toggle-wrapper': true,
      'toggle-wrapper--expanded': this.expanded,
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
        <div class="ino-accordion__header">
          <h3 role="heading" aria-level="3" style={{margin: "0"}}>
            <button
              class="header-button"
              onClick={() => this.toggleExpand()}
              role="button"
              aria-expanded={this.expanded ? 'true' : 'false'}
              aria-controls={this.contentId}
            >
              <div class={toggleWrapperClasses}>
                <span class="toggle-icon toggle-icon--expanded"></span>
                <span class="toggle-icon toggle-icon--collapsed"></span>
              </div>
              <span class={titleClasses}>{this.accordionTitle}</span>
            </button>
          </h3>
        </div>
        <div
          class={contentWrapperClasses}
          id={this.contentId}
          role="region"
          aria-labelledby={this.accordionTitle}
        >
          <div class="ino-accordion__content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
