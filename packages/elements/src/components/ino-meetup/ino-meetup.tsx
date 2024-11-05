import { Component, ComponentInterface, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';

/**
 * `ino-meetup-accordion` is a component that implements a simple accordion UI element.
 * It allows users to expand or collapse content sections by clicking on the title.
 * The component emits an event when its expanded state changes, and it provides a slot for
 * custom content to be displayed when expanded.
 */
@Component({
  tag: 'ino-meetup-accordion',
  styleUrl: 'ino-meetup.scss',
  shadow: true,
})
export class MeetupAccordion implements ComponentInterface {
  /**
   * The title of the accordion.
   */
  @Prop() accordionTitle!: string;

  /**
   * Whether the accordion is expanded or collapsed.
   */
  @State() expanded = false;

  @Watch('expanded')
  expandedChanged() {
    this.expandedChange.emit(this.expanded);
  }

  componentDidLoad() {
    if (!this.accordionTitle) {
      console.warn('Ino-Accordion: missing accordionTitle property.');
    }
  }

  private toggleAccordion() {
    this.expanded = !this.expanded;
  }

  /**
   * Emits when the user clicks to toggle the accordion.
   */
  @Event() expandedChange: EventEmitter<boolean>;

  render(): any {
    return (
      <div class={{ accordion: true, 'accordion--expanded': this.expanded }}>
        <button class="question" onClick={() => this.toggleAccordion()}>
          {this.accordionTitle}
        </button>
        <div class="answer">
          <div class="answer__content">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
