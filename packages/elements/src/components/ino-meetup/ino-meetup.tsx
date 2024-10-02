import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ino-meetup-accordion',
  styleUrl: 'ino-meetup.scss',
  shadow: false,
})
export class MeetupAccordion {
  /**
   * Whether the accordion is expanded or collapsed.
   */
  @Prop() expanded = false;

  /**
   * The title of the accordion.
   */
  @Prop() accordionTitle = '';

  /**
   * Emits when the user clicks to toggle the accordion.
   */
  @Event() expandedChange: EventEmitter<boolean>;

  private toggleAccordion() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }

  render() {
    return (
      <div class={`ino-meetup-accordion ${this.expanded ? 'ino-meetup-accordion--expanded' : ''}`}>
        <div class="ino-meetup-accordion__header" onClick={() => this.toggleAccordion()}>
          <button aria-expanded={this.expanded}>
            <span>{this.accordionTitle || 'Accordion Title'}</span>
          </button>
        </div>
        <div
          class={`ino-meetup-accordion__content-wrapper ${
            this.expanded ? 'ino-meetup-accordion__content-wrapper--expanded' : ''
          }`}
        >
          <div class="ino-meetup-accordion__content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
