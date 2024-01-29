import { Components, buildSectionId } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-nav-menu.scss';

const sections = ['Section 1', 'Section 2', 'Section 3'];

const switchHandler = (e: CustomEvent<boolean>) => {
  (e.target as HTMLInoSwitchElement).checked = e.detail;
  (e.target as HTMLInoSwitchElement).closest('.sections')?.classList.toggle('show-full-height');
}

export default {
  title: `Structure/ino-nav-menu`,
  component: 'ino-nav-menu',
  decorators: [(story) => decorateStoryWithClass(story, 'story-ino-nav-menu')],
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

const activeSectionChanged = (e: CustomEvent<string>) => {
  (e.target as HTMLInoNavMenuElement).setAttribute('active-section', e.detail);
}

const renderSection = (name: string, counter: number) => {
  return html`
    <ino-nav-menu-section section-name="${name}" section-id="${buildSectionId(name)}-${counter}">
      <p>
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

let templateCounter = 0;

const template = new TemplateGenerator<Components.InoNavMenu>(
  'ino-nav-menu',
  (args) => {
  templateCounter++;
  return html`
  <aside>
    <ino-nav-menu
      menu-title="${args.menuTitle}"
      active-section="${args.activeSection}"
      sections-container-id="sections-playground-${templateCounter}"
      .intersection-observer-config="${args.intersectionObserverConfig}"
      scroll-offset="${args.scrollOffset}"
      @activeSectionChanged="${activeSectionChanged}"
    ></ino-nav-menu>
  </aside>
  <div class="sections" id="sections-playground-${templateCounter}">
    <ino-switch
      checked="true"
      name="sticky-switch"
      @checkedChange="${switchHandler}"
    >
      Show Stickyness of ino-nav-menu
    </ino-switch>
    ${sections.map((sectionName) => renderSection(sectionName, templateCounter))}
  </div>
`}
);

const templateSections = new TemplateGenerator<Components.InoNavMenu>(
  'ino-nav-menu',
  (args) => {
    templateCounter++;
    return html`
    <aside>
      <ino-nav-menu
        sections="['section-1-2', 'section-2-2', 'section-1-2']"
        menu-title="${args.menuTitle}"
        active-section="${args.activeSection}"
        sections-container-id="sections-playground-${templateCounter}"
        .intersection-observer-config="${args.intersectionObserverConfig}"
        scroll-offset="${args.scrollOffset}"
        @activeSectionChanged="${activeSectionChanged}"
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
  `}
);

export const Playground = template.generatePlaygroundStory();
export const Sections = templateSections.generateStoryForProp('sectionIds', sections);
export const ActiveSection = template.generateStoryForProp('activeSection', 'section-2');
export const MenuTitle = template.generateStoryForProp('menuTitle', 'Contents');
export const IntersectionObserverConfig = template.generateStoryForProp('intersectionObserverConfig', {threshold: 2, rootMargin: '-50% 0px -50% 0px'});
export const ScrollOffset = template.generateStoryForProp('scrollOffset', 20);
