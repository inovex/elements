import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-sidebar.scss';

const eventHandler = (e) => {
  const el: HTMLElement = e.target;
  const elTagName = el.tagName.toLowerCase();

  if (elTagName !== 'ino-icon' && elTagName !== 'button') {
    return;
  }

  const sidebar: HTMLInoSidebarElement = el
    .closest('.sidebar-demo')
    .querySelector('ino-sidebar');
  sidebar.open = !sidebar.open;
};

export default {
  title: 'Structure/ino-sidebar',
  component: 'ino-sidebar',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-sidebar'),
    (story) => {
      useEffect(() => {
        document.addEventListener('click', eventHandler);
        return () => {
          document.removeEventListener('click', eventHandler);
        };
      });
      return story();
    },
  ],
  args: {
    alignRight: false,
    name: '',
    open: false,
  }
} as Meta<Components.InoSidebar>;

const sidebarContent = html`
    <div class="sidebar-header" slot="header">
      <ino-icon clickable icon="close" />
    </div>
    <div class="sidebar-content" slot="content">
      <ino-list>
        <ino-list-item text="List item"></ino-list-item>
        <ino-list-item text="List item"></ino-list-item>
        <ino-list-item text="List item"></ino-list-item>
        <ino-list-item text="List item"></ino-list-item>
        <ino-list-item text="List item"></ino-list-item>
        <ino-list-item text="List item"></ino-list-item>
      </ino-list>
    </div>
`;

const mainContent = html`
    <div class="content">
      <p>
        Cras magna diam, dictum a pretium non, elementum at nibh. Etiam laoreet
        suscipit dui et feugiat. Vivamus id consectetur dolor. Morbi eget nunc vel
        felis gravida scelerisque. Proin libero erat, suscipit pretium venenatis
        vitae, fringilla sed enim. Maecenas elit est, finibus in tellus id,
        interdum hendrerit ligula. Nam vitae sagittis enim. Donec pulvinar vel
        quam a posuere. Maecenas egestas ex erat, quis convallis turpis blandit a.
      </p>
      <p>
        Maecenas sodales mauris vitae feugiat egestas. Morbi porta laoreet odio
        vel semper. Quisque rutrum varius nulla. Morbi sagittis metus quis nibh
        congue, eu vehicula dui congue. Pellentesque ullamcorper eros in nulla
        interdum auctor. Pellentesque congue, felis vitae tempor porta, ipsum
        felis viverra dui, vel porttitor elit nibh sed purus. Nam eu diam magna.
        Sed nec nunc lorem. Suspendisse vulputate odio lacus, eget dignissim augue
        pharetra eget. Ut quis augue eu elit venenatis faucibus. Nam ut commodo
        dui. .
      </p>
      <p>
        Praesent eget augue sed nibh aliquam lacinia ac in lectus. Vivamus sapien
        urna, pretium in turpis at, dapibus mattis orci.Maecenas sodales mauris
        vitae feugiat egestas. Morbi porta laoreet odio vel semper. Quisque rutrum
        varius nulla. Morbi sagittis metus quis nibh congue, eu vehicula dui
        congue. Pellentesque ullamcorper eros in nulla interdum auctor.
        Pellentesque congue, felis vitae tempor porta, ipsum felis viverra dui,
        vel porttitor elit nibh sed purus. Nam eu diam magna. Sed nec nunc lorem.
        Suspendisse vulputate odio lacus, eget dignissim augue pharetra eget. Ut
        quis augue eu elit venenatis faucibus. Nam ut commodo dui. Praesent eget
        augue sed nibh aliquam lacinia ac in lectus. Vivamus sapien urna, pretium
        in turpis at, dapibus mattis orci
      </p>
      <p>
        Proin sem nisi, tincidunt eget ipsum non, vestibulum feugiat tellus. Sed
        nunc enim, sodales condimentum hendrerit eleifend, aliquam ac eros.
        Maecenas ut molestie ligula. Aenean semper nunc felis, at cursus neque
        congue in. Sed cursus mauris nunc, et scelerisque leo ornare nec. In nec
        dui eu sem sodales sodales ac at enim. Integer sit amet libero vitae magna
        facilisis malesuada sagittis nec dolor. Aenean eleifend dapibus ante, id
        accumsan turpis luctus varius. Etiam accumsan tortor ex, sit amet suscipit
        turpis vehicula et. Ut ultrices ex nisi, eget tristique nulla tempor eget.
        Etiam sed vehicula velit. Nullam lacus libero, convallis in imperdiet sit
        amet, hendrerit sed nunc.
      </p>
    </div>
`;


const template = new TemplateGenerator<Components.InoSidebar>(
  'ino-sidebar',
  args => html`
  <div class="sidebar-demo">
    <ino-button>Toggle Sidebar</ino-button>
    <ino-sidebar
      id="customizable-sidebar"
      align-right="${args.alignRight}"
      name="${args.name}"
      open="${args.open}"
    >
      ${sidebarContent}
    </ino-sidebar>
  </div>
`);

export const Playground = template.generatePlaygroundStory();
