import componentReadme from '_local-elements/src/components/ino-segment-button/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import './ino-segment-button.scss';

export default {
  title: 'Buttons/<ino-segment-button>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /* html */ `
    <div class="story-segment-button">
        <style>
          ino-segment-button.customizable-segment-btn {
              --segment-button-color: ${text('--segment-button-color', '#c1c1c1', 'Custom Properties')};
              --segment-button-active-color: ${text('--segment-button-active-color', '#0d10f3', 'Custom Properties')};
              --segment-button-hover-color: ${text('--segment-button-hover-color', '#5d60f7', 'Custom Properties')};
              --segment-button-disabled-color: ${text('--segment-button-disabled-color', '#777777', 'Custom Properties')};
          }
        </style>
        <h4>Customizable Segment Button</h4>
        <ino-segment-button
                value="1"
                class="customizable-segment-btn"
                checked="${boolean('checked', false, 'General')}"
                disabled="${boolean('disabled', false, 'General')}"
                ino-dense="${boolean('ino-dense', false, 'General')}"
            >
            Customizable Segment Button
        </ino-segment-button>
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
