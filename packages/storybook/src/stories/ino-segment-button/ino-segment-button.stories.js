import componentReadme from '_local-elements/src/components/ino-segment-button/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import './ino-segment-button.scss';

export default {
  title: 'Buttons/<ino-segment-button>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /* html */ `
    <div class="story-segment-button">
        <h4>Enabled, not checked</h4>
        <ino-segment-button>Content</ino-segment-button>

        <h4>Enabled, checked</h4>
        <ino-segment-button checked>Content</ino-segment-button>

        <h4>Disabled</h4>
        <ino-segment-button disabled>Content</ino-segment-button>

        <h4>Dense</h4>
        <ino-segment-button ino-dense>Content</ino-segment-button>
    </div>

  `;
