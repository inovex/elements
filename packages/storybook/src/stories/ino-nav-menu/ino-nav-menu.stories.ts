import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-nav-menu.scss';

const renderSections = (numberOfSecitons: number) => {
  return new Array(numberOfSecitons).fill(0).map(
    (_, i) =>
      html`
        <ino-nav-menu-section section-name="Section ${i}">
          <p class="section">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </ino-nav-menu-section>
      `,
  );
};

let storyCount = 0;

const inoNavMenuMeta = {
  title: 'Structure/ino-nav-menu',
  component: 'ino-nav-menu',
  render: (args) => {
    const id = `nav-${storyCount++}`;

    return html`
      <aside class="menu">
        <ino-nav-menu
          menu-title="${args.menuTitle}"
          sections-container-id="${id}"
          .intersection-observer-config="${args.intersectionObserverConfig}"
        ></ino-nav-menu>
      </aside>
      <main class="sections" id="${id}">${renderSections(3)}</main>
    `;
  },
  argTypes: {
    intersectionObserverConfig: {
      table: {
        defaultValue: {
          summary: "{ threshold: 0, rootMargin: '-30% 0px -70% 0px' }",
        },
      },
      control: {
        type: 'object',
      },
    },
    scrollOffset: {
      table: {
        defaultValue: {
          summary: '80',
        },
      },
    },
  },
  args: {
    menuTitle: 'Sections',
  },
} as Meta<Components.InoNavMenu>;

export default inoNavMenuMeta;

export const Default = Story({
  ...inoNavMenuMeta,
});

export const MenuTitle = Story({
  ...Default,
  docsFromProperty: 'menuTitle',
  args: {
    menuTitle: 'Contents',
  },
});
