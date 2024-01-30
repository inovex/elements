import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-nav-menu-section.scss';

const inoNavMenuSectionMeta = {
  title: 'Structure/ino-nav-menu-section',
  component: 'ino-nav-menu-section',
  render: (args) => html`
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
  args: {
    sectionName: 'Section',
    showTitle: true,
  },
} as Meta<Components.InoNavMenuSection>;

export default inoNavMenuSectionMeta;

export const Default = Story({
  ...inoNavMenuSectionMeta,
});

export const SectionName = Story({
  ...Default,
  docsFromProperty: 'sectionName',
  args: {
    sectionName: 'Paragraph 1',
  },
});

export const SectionIds = Story({
  ...Default,
  docsFromProperty: 'sectionId',
  render: (args) => html`
    <ino-nav-menu-section
      section-name="${args.sectionName}"
      section-id="${args.sectionId}"
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
  args: {
    sectionId: 'randomID',
    sectionName: 'Section',
    showTitle: true,
  },
});

export const ShowTitle = Story({
  ...Default,
  docsFromProperty: 'showTitle',
  args: {
    showTitle: false,
  },
});
