import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'ino-accordion',
  styleUrl: 'ino-accordion.scss',
  shadow: true,
})
export class MyAccordion {
  @Prop() expanded: boolean = false;

  @Event() expandedChange: EventEmitter;

  @Prop() accordionTitle: string = null;

  componentDidLoad() {
    if (!this.accordionTitle) {
      console.warn('Accordion missing accordionTitle property.');
    }
  }

  toggleExpand() {
    this.expanded = !this.expanded;
    this.expandedChange.emit(this.expanded);
  }
  render() {
    const inoAccordionClasses = classNames({
      'ino-accordion': true,
      'ino-accordion--expanded': this.expanded,
    });
    return (
      <div class={inoAccordionClasses}>
        <div class="ino-accordion--header" onClick={() => this.toggleExpand()}>
          {!this.expanded ? <ino-icon icon="add" /> : null}
          {this.expanded ? <ino-icon icon="close" /> : null}

          <span class="ino-accordion--title">{this.accordionTitle}</span>
        </div>
        {this.expanded ? (
          <div class="ino-accordion--content">
            <slot />
          </div>
        ) : null}
      </div>
    );
  }
}
