import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { Components } from '@inovex.de/elements';
import './ino-meetup.scss';

const eventHandler = (e: CustomEvent<boolean>) => {
  (e.target as HTMLInoMeetupAccordionElement).expanded = e.detail;
};

const inoAccordionMeta = {
  title: 'Structure/ino-meetup-accordion',
  component: 'ino-meetup-accordion',
  render: args => html`
    <ino-meetup-accordion
      expanded="${args.expanded}"
      accordion-title="${args.accordionTitle}"
      @expandedChange="${eventHandler}"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim, venenatis non facilisis sed, finibus in
      enim. Sed auctor enim nisl, sit amet feugiat risus blandit vitae.
    </ino-meetup-accordion>
  `,
  args: {
    expanded: false,
    accordionTitle: 'Accordion Title',
  },
} as Meta<Components.InoMeetupAccordion>;

export default inoAccordionMeta;

export const Default = {
  ...inoAccordionMeta,
};

export const Expanded = {
  ...Default,
  args: {
    expanded: true,
  },
};

export const CustomTitle = {
  ...Default,
  args: {
    accordionTitle: 'Custom Title',
  },
};
