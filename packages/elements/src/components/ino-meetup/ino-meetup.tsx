import { Component, h, Prop, Event, EventEmitter, State, ComponentInterface, Watch } from '@stencil/core';

@Component({
  tag: 'ino-meetup-accordion',
  styleUrl: 'ino-meetup.scss',
  shadow: false,
})
export class MeetupAccordion implements ComponentInterface {
  /**
   * The title of the accordion.
   */
  @Prop() accordionTitle = 'Accordion Title';

  /**
   * Whether the accordion is expanded or collapsed.
   */
  @State() expanded = false;

  @Watch('expanded')
  expandedChanged() {
    this.expandedChange.emit(this.expanded);
  }

  /**
   * Emits when the user clicks to toggle the accordion.
   */
  @Event() expandedChange: EventEmitter<boolean>;

  componentDidLoad() {
    if (!this.accordionTitle) {
      console.warn('Ino-Accordion: missing accordionTitle property.');
    }
  }

  private toggleAccordion() {
    this.expanded = !this.expanded;
  }

  render() {
    return (
      <div class={{ accordion: true, 'accordion--expanded': this.expanded }}>
        <button class="question" onClick={() => this.toggleAccordion()}>
          {this.accordionTitle}
        </button>
        <div class="answer">
          <div class="answer__content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
