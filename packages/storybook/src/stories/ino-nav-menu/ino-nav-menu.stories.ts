import { Components, buildSectionId } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-nav-menu.scss';

const sections = ['Section 1', 'Section 2', 'Section 3'];

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
    activeSection: 'section-1',
    menuTitle: 'Sections',
    scrollOffset: 80,
  },
} as Meta<Components.InoNavMenu>;

const activeSectionChanged = (x: CustomEvent<string>) =>
  console.log('active section changed: ' + x.detail);

const renderSection = (name: string, counter: number) => {
  return html
  `<ino-nav-menu-section section-name="${name}" section-id="${buildSectionId(name)}-${counter}">
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
    </ino-nav-menu-section>`
}

let templateCounter = 0;
const template = new TemplateGenerator<Components.InoNavMenu>(
  'ino-nav-menu',
  (args) => {
    templateCounter++;
    return html`
      <div class="sections" id="sections-playground-${templateCounter}">
        ${sections.map((sectionName) => renderSection(sectionName, templateCounter))}
      </div>
      <aside>
        <ino-nav-menu
          menu-title="${args.menuTitle}"
          active-section="${args.activeSection}"
          sections-container-id="sections-playground-${templateCounter}"
          .intersection-observer-config="${args.intersectionObserverConfig}"
          scroll-offset="${args.scrollOffset}"
          @activeSectionChanged="${activeSectionChanged}"
        />
      </aside>
  `}
);

export const Playground = template.generatePlaygroundStory();
export const Sections = template.generateStoryForProp('sectionIds', sections);
export const ActiveSection = template.generateStoryForProp('activeSection', 'section-2');
export const MenuTitle = template.generateStoryForProp('menuTitle', 'Sticky navigation');
export const IntersectionObserverConfig = template.generateStoryForProp('intersectionObserverConfig', {threshold: 2, rootMargin: '-50% 0px -50% 0px'});
export const ScrollOffset = template.generateStoryForProp('scrollOffset', 20);
