import componentReadme from '_local-elements/src/components/ino-segment-group/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import './ino-segment-group.scss';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-segment-button') {
      return;
    }
    const group = el.closest('ino-segment-group');
    group.setAttribute('value', el.getAttribute('value'));
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

export default {
  title: 'Buttons/<ino-segment-group>',

  decorators: [
    withStencilReadme(componentReadme),
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /* html */ `
    <div class="story-segment-group">
      <h4>Customizable group</h4>
      <div class="story-segment-group">
          <style>
              ino-segment-button.customizable-segment-btn {
                  --segment-button-color: ${text('--segment-button-color', '#c1c1c1', 'Custom Properties')};
                  --segment-button-active-color: ${text('--segment-button-active-color', '#0d10f3', 'Custom Properties')};
                  --segment-button-hover-color: ${text('--segment-button-hover-color', '#5d60f7', 'Custom Properties')};
                  --segment-button-disabled-color: ${text('--segment-button-disabled-color', '#777777', 'Custom Properties')};
              }
          </style>
          <ino-segment-group id="segment-grp">
              <ino-segment-button value="1" class="customizable-segment-btn">Option 1</ino-segment-button>
              <ino-segment-button value="2" class="customizable-segment-btn">Option 2</ino-segment-button>
              <ino-segment-button value="3" class="customizable-segment-btn">Option 3</ino-segment-button>
              <ino-segment-button value="4" class="customizable-segment-btn">Option 4</ino-segment-button>
          </ino-segment-group>
      </div>
        <h4>Dense group with third option checked</h4>
        <ino-segment-group value="3" id="dense-segment-grp">
            <ino-segment-button ino-dense value="1">Option 1</ino-segment-button>
            <ino-segment-button ino-dense value="2">Option 2</ino-segment-button>
            <ino-segment-button ino-dense value="3">Option 3</ino-segment-button>
            <ino-segment-button ino-dense value="4">Option 4</ino-segment-button>
        </ino-segment-group>

        <h4>Group with no option checked</h4>
        <ino-segment-group id="segment-grp">
            <ino-segment-button value="1">Option 1</ino-segment-button>
            <ino-segment-button value="2">Option 2</ino-segment-button>
            <ino-segment-button value="3">Option 3</ino-segment-button>
            <ino-segment-button value="4">Option 4</ino-segment-button>
        </ino-segment-group>

        <h4>Group with a single button</h4>
        <ino-segment-group id="single-segment-grp">
            <ino-segment-button value="1">Option 1</ino-segment-button>
        </ino-segment-group>
    </div>
    `;
