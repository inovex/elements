import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-accordion.scss';

const eventHandler = (e: CustomEvent<boolean>) => {
  (e.target as HTMLInoAccordionElement).expanded = e.detail;
};

export default {
  title: 'Structure/<ino-accordion>',
  component: 'ino-accordion',
  decorators: [(story) => decorateStoryWithClass(story, 'story-accordion')]
} as Meta<Components.InoAccordion>;

export const Accordion = {
  render: (args) => html`
  <ino-accordion
    expanded="${args.expanded}"
    accordion-title="${args.accordionTitle}"
    @expandedChange="${eventHandler}"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim,
    venenatis non facilisis sed, finibus in enim. Sed auctor enim nisl, sit
    amet feugiat risus blandit vitae.
  </ino-accordion>`,
  args: {
    expanded: false,
    accordionTitle: 'Accordion Title',
  }
} as Meta<Components.InoAccordion>;

// TODO: Descriptions (TS-comments)
export const Expanded = {
  ...Accordion,
  args: {
    expanded: false
  },
} as Meta<Components.InoAccordion>;

export const AccordionTitle = {
  ...Accordion,
  args: {
    accordionTitle: 'Custom Title'
  },
} as Meta<Components.InoAccordion>;
