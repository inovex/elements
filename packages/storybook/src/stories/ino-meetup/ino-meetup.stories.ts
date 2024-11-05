import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';

const inoAccordionMeta = {
  title: 'ino-meetup-accordion',
  component: 'ino-meetup-accordion',
} as Meta<Components.InoMeetupAccordion>;

export default inoAccordionMeta;

export const Default = {
  ...inoAccordionMeta,
};
