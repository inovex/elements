import { Meta } from '@storybook/web-components';
import { Components, buildSectionId } from '@inovex.de/elements';
import { html } from 'lit-html';
import Story from '../StoryWrapper';
import './ino-nav-menu.scss';

const sections = ['Section 1', 'Section 2', 'Section 3'];
let templateCounter = 0;

const switchHandler = (e: CustomEvent<boolean>) => {
  (e.target as HTMLInoSwitchElement).checked = e.detail;
  (e.target as HTMLInoSwitchElement).closest('.sections')?.classList.toggle('show-full-height');
}

const activeSectionChanged = (e: CustomEvent<string>) => {
  (e.target as HTMLInoNavMenuElement).setAttribute('active-section', e.detail);
}

const renderSection = (name: string, counter: number, key: number) => {
  return html`
    <ino-nav-menu-section
      section-name="${name}"
      section-id="${buildSectionId(name)}-${counter}"
      order-position="${key}">
      <p class="section">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </ino-nav-menu-section>
  `
}

const inoNavMenuMeta = {
  title: 'Structure/ino-nav-menu',
  component: 'ino-nav-menu',
  render: (args) => {
    templateCounter++;
    return html`
    <aside>
      <ino-nav-menu
        class="menu"
        menu-title="${args.menuTitle}"
        active-section="${args.activeSection}"
        sections-container-id="sections-playground-${templateCounter}"
        .intersection-observer-config="${args.intersectionObserverConfig}"
        scroll-offset="${args.scrollOffset}"
        @activeSectionChanged="${activeSectionChanged}"
      ></ino-nav-menu>
    </aside>
    <main class="sections" id="sections-playground-${templateCounter}">
      <ino-switch
        checked="true"
        name="sticky-switch"
        @checkedChange="${switchHandler}"
      >
        Show Stickyness of ino-nav-menu
      </ino-switch>
      ${sections.map((sectionName, index) => renderSection(sectionName, templateCounter, index))}
    </main>
  `},
  argTypes: {
    intersectionObserverConfig: {
      table: {
        defaultValue: {
          summary: "{ threshold: 0, rootMargin: '-30% 0px -70% 0px' }",
        }
      },
      control: {
        type: 'object'
      }
    },
    scrollOffset: {
      table: {
        defaultValue: {
          summary: '80',
        },
      }
    }
  },
  args: {
    menuTitle: 'Sections',
    scrollOffset: 80,
  },
} as Meta<Components.InoNavMenu>;

export default inoNavMenuMeta;

export const Default = Story({
  ...inoNavMenuMeta,
});

export const ActiveSection = Story({
  ...Default,
  docsFromProperty: 'activeSection',
  args: {
    activeSection: `section-2-${templateCounter}`
  }
});

export const MenuTitle = Story({
  ...Default,
  docsFromProperty: 'menuTitle',
  args: {
    menuTitle: 'Contents'
  }
});

export const IntersectionObserverConfig = Story({
  ...Default,
  docsFromProperty: 'intersectionObserverConfig',
  args: {
    intersectionObserverConfig: {threshold: 2, rootMargin: '-50% 0px -50% 0px'}
  }
});

export const ScrollOffset = Story({
  ...Default,
  docsFromProperty: 'scrollOffset',
  args: {
    scrollOffset: 20
  }
});

export const Loading = Story({
  ...Default,
  docsFromProperty: 'loading',
  render: (args) => {
    templateCounter++;
    return html`
    <aside>
      <ino-nav-menu
        menu-title="${args.menuTitle}"
        @activeSectionChanged="${activeSectionChanged}"
        loading="${args.loading}"
      ></ino-nav-menu>
    </aside>
    <div class="sections" id="sections-playground-${templateCounter}">
      <ino-switch
        checked="true"
        name="sticky-switch"
        @checkedChange="${switchHandler}"
      >
        Show stickyness of ino-nav-menu
      </ino-switch>
      ${sections.map((sectionName) => renderSection(sectionName, templateCounter))}
    </div>
  `},
  args: {
    menuTitle: 'Sections',
    loading: true
  }
});
