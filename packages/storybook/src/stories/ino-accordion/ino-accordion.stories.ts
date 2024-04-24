import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-accordion.scss';

const eventHandler = (e: CustomEvent<boolean>) => {
  (e.target as HTMLInoAccordionElement).expanded = e.detail;
};

const inoAccordionMeta = {
  title: 'Structure/ino-accordion',
  component: 'ino-accordion',
  render: args => html` <ino-accordion
    expanded="${args.expanded}"
    accordion-title="${args.accordionTitle}"
    @expandedChange="${eventHandler}"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim, venenatis non facilisis sed, finibus in
    enim. Sed auctor enim nisl, sit amet feugiat risus blandit vitae.
  </ino-accordion>`,
  args: {
    expanded: false,
    accordionTitle: 'Accordion Title',
  },
} as Meta<Components.InoAccordion>;

export default inoAccordionMeta;

export const Default = Story({
  ...inoAccordionMeta,
});

export const Expanded = Story({
  ...Default,
  docsFromProperty: 'expanded',
  args: {
    expanded: true,
  },
});

export const AccordionTitle = Story({
  ...Default,
  docsFromProperty: 'accordionTitle',
  args: {
    accordionTitle: 'Custom Title',
  },
});
