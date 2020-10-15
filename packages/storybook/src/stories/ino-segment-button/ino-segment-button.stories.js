import componentReadme from '_local-elements/src/components/ino-segment-button/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import './ino-segment-button.scss';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Buttons/<ino-segment-button>',
  decorators: [withStencilReadme(componentReadme)],
};

export const DefaultUsage = () => /* html */ `
    <div class="story-segment-button">
        <style>
          ino-segment-button.customizable-segment-btn {
              --ino-segment-button-color: ${text('--ino-segment-button-color', '#c1c1c1', 'Custom Properties')};
              --ino-segment-button-checked-color: ${text('--ino-segment-button-checked-color', '#0d10f3', 'Custom Properties')};
              --ino-segment-button-hover-color: ${text('--ino-segment-button-hover-color', '#5d60f7', 'Custom Properties')};
              --ino-segment-button-disabled-color: ${text('--ino-segment-button-disabled-color', '#777777', 'Custom Properties')};
              --ino-segment-button-hover-shadow: ${text('--ino-segment-button-hover-shadow', '0 4px 8px 0 rgba(61, 64, 245, 0.3), 0 12px 28px 0 rgba(61, 214, 245, 0.14)', 'Custom Properties')};
              --ino-segment-button-checked-shadow: ${text('--ino-segment-button-checked-shadow', '0 8px 16px 0 rgba(61, 64, 245, 0.3),0 16px 32px 0 rgba(61, 214, 245, 0.14)', 'Custom Properties')};
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
