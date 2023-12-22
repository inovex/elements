import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-nav-menu.scss';

export default {
  title: `Structure/ino-nav-menu`,
  component: 'ino-nav-menu',
  decorators: [(story) => decorateStoryWithClass(story, 'story-ino-nav-menu')],
  args: {
    sections: ['Section 1', 'Section 2', 'Section 3'],
    activeSection: 'section-1',
    menuTitle: 'Sections',
  },
} as Meta<Components.InoNavMenu>;

const activeSectionChanged = (x: CustomEvent<string>) =>
  console.log('active section changed: ' + x.detail);

const template = new TemplateGenerator<Components.InoNavMenu>(
  'ino-nav-menu',
  (args) => html`
    <div class="sections">
      <ino-nav-menu-section section-name="Section 1">
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
      <ino-nav-menu-section section-name="Section 2">
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
      <ino-nav-menu-section section-name="Section 3">
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
