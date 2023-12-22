import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-nav-menu-section.scss';

export default {
  title: `Structure/ino-nav-menu-section`,
  component: 'ino-nav-menu-section',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-nav-menu-section'),
  ],
  args: {
    sectionName: 'Section',
    showTitle: true,
  },
} as Meta<Components.InoNavMenuSection>;

const template = new TemplateGenerator<Components.InoNavMenuSection>(
  'ino-nav-menu-section',
  (args) => html`
    <ino-nav-menu-section
      section-name="${args.sectionName}"
      show-title="${args.showTitle}"
    >
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </ino-nav-menu-section>
  `,
);

export const Playground = template.generatePlaygroundStory();
