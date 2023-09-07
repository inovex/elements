import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-accordion.scss';

const eventHandler = (e: CustomEvent<boolean>) => {
  (e.target as HTMLInoAccordionElement).expanded = e.detail;
};

export default {
  title: 'Structure/<ino-accordion>',
  component: 'ino-accordion',
  decorators: [story => decorateStoryWithClass(story, 'story-accordion')],
  // will be used as default props for all stories
  args: {
    expanded: false,
    accordionTitle: 'Accordion Title',
  },
} as Meta<Components.InoAccordion>;

// the basic template for the accordion component
const template = new TemplateGenerator<Components.InoAccordion>(
  'ino-accordion',
  args => html`
    <ino-accordion
      expanded="${args.expanded}"
      accordion-title="${args.accordionTitle}"
      @expandedChange="${eventHandler}"
    >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim, venenatis non facilisis sed, finibus in enim. Sed auctor enim nisl, sit amet feugiat risus blandit vitae.
    </ino-accordion>
  `
);

export const Playground = template.generatePlaygroundStory();

export const Expanded = template.generateStoryForProp('expanded', true);
export const AccordionTitle = template.generateStoryForProp(
  'accordionTitle',
  'Custom Title'
);
