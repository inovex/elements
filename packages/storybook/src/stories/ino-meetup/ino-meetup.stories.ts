import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { Components } from '@inovex.de/elements';
import './ino-meetup.scss';

const eventHandler = (e: CustomEvent<boolean>) => {
  console.log(e);
};

const inoAccordionMeta = {
  title: 'Structure/ino-meetup-accordion',
  component: 'ino-meetup-accordion',
  render: args => html`
    <ino-meetup-accordion accordion-title="${args.accordionTitle}" @expandedChange="${eventHandler}">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi enim, venenatis non facilisis sed, finibus in
      enim. Sed auctor enim nisl, sit amet feugiat risus blandit vitae.
    </ino-meetup-accordion>
  `,
  args: {
    accordionTitle: 'Accordion Title',
  },
} as Meta<Components.InoMeetupAccordion>;

export default inoAccordionMeta;

export const Default = {
  ...inoAccordionMeta,
};

export const CustomTitle = {
  ...Default,
  args: {
    accordionTitle: 'Custom Title',
  },
};

export const ComplexContent = {
  ...Default,
  render: args => html`
    <ino-meetup-accordion accordion-title="Notification Settings" @expandedChange="${eventHandler}">
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <ino-radio-group alignment="vertical">
          <ino-radio>I want to receive all notification</ino-radio>
          <ino-radio>Only those where I'm mentioned</ino-radio>
          <ino-radio>None</ino-radio>
        </ino-radio-group>
        <ino-button>Save</ino-button>
      </div>
    </ino-meetup-accordion>
  `,
};
