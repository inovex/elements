import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import Story from '../StoryWrapper';
import './ino-accordion.scss';

const eventHandler = (e: CustomEvent<boolean>) => {
  (e.target as HTMLInoAccordionElement).expanded = e.detail;
};

const Playground = {
  title: 'Structure/<ino-accordion>',
  component: 'ino-accordion',
  decorators: [(story) => decorateStoryWithClass(story, 'story-accordion')],
  parameters: {
    docs: {
      toc: false, // disabled because the ino-accordion also contains h3 headlines that are queried for the TOC
    },
  },
  render: (args) => html` <ino-accordion
    expanded="${args.expanded}"
    accordion-title="${args.accordionTitle}"
    @expandedChange="${eventHandler}"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim,
    venenatis non facilisis sed, finibus in enim. Sed auctor enim nisl, sit amet
    feugiat risus blandit vitae.
  </ino-accordion>`,
  args: {
    expanded: false,
    accordionTitle: 'Accordion Title',
  },
} as Meta<Components.InoAccordion>;

export const Expanded = Story({
  ...Playground,
  docsFromProperty: 'expanded',
  args: {
    expanded: true,
  },
});

export const AccordionTitle = Story({
  ...Playground,
  docsFromProperty: 'accordionTitle',
  args: {
    accordionTitle: 'Custom Title',
  },
});

export default Playground;
