import { Meta, StoryObj } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { decorateStoryWithClass } from '../utils';
import './ino-accordion.scss';
import { html } from 'lit';

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
// storybook v7
type Story = StoryObj;

export const Playground: Story = {
  args: {
    expanded: false,
    accordionTitle: 'Accordion Title',
  },
  render: (args) => html`
    <ino-accordion
      expanded="${args.expanded}"
      accordion-title="${args.accordionTitle}"
      @expandedChange="${eventHandler}"
    >
      Accordion Content
    </ino-accordion>
  `,
};

// the basic template for the accordion component
// const template = new TemplateGenerator<Components.InoAccordion>(
//   'ino-accordion',
//   args => html`
//     <ino-accordion
//       expanded="${args.expanded}"
//       accordion-title="${args.accordionTitle}"
//       @expandedChange="${eventHandler}"
//     >
//       Accordion Content
//     </ino-accordion>
//   `
// );

// export const Playground = template.generatePlaygroundStory();

// export const Expanded = template.generateStoryForProp('expanded', true);
// export const AccordionTitle = template.generateStoryForProp(
//   'accordionTitle',
//   'Custom Title'
// );
