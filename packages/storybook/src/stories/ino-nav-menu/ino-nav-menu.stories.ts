import { Components } from '@inovex.de/elements';
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
  args: {
    sections: sections,
    activeSection: 'section-1',
    menuTitle: 'Sections',
  },
} as Meta<Components.InoNavMenu>;

const activeSectionChanged = (x: CustomEvent<string>) =>
  console.log('active section changed: ' + x.detail);

const renderSection = (name: string) => {
  return html`<ino-nav-menu-section section-name="${name}">
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

const template = new TemplateGenerator<Components.InoNavMenu>(
  'ino-nav-menu',
  (args) => html`
  <div class="sections">
    ${args.sections?.map((sectionName) => renderSection(sectionName))}
  </div>
  <aside>
    <ino-nav-menu
      menu-title="${args.menuTitle}"
      .sections="${args.sections}"
      active-section="${args.activeSection}"
      @activeSectionChanged="${activeSectionChanged}"
    />
  </aside>
`,
);

export const Playground = template.generatePlaygroundStory();
export const Sections = template.generateStoryForProp('sections', sections);
export const ActiveSection = template.generateStoryForProp('activeSection', 'section-2');
export const MenuTitle = template.generateStoryForProp('menuTitle', 'Sticky navigation');
