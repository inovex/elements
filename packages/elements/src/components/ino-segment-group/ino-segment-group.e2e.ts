import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SEGMENT_GROUP_NO_VAL = `
<ino-segment-group>
  <ino-segment-button value="0" id="btn-1">Test</ino-segment-button>
  <ino-segment-button value="1" id="btn-2">Test</ino-segment-button>
  <ino-segment-button value="2" id="btn-3">Test</ino-segment-button>
  <ino-segment-button value="3" id="btn-4">Test</ino-segment-button>
</ino-segment-group>
`;

const INO_SEGMENT_GROUP = `
<ino-segment-group value="3">
    <ino-segment-button id="btn-1" value="1">Test</ino-segment-button>
    <ino-segment-button id="btn-2" value="2">Test</ino-segment-button>
    <ino-segment-button id="btn-3" value="3">Test</ino-segment-button>
    <ino-segment-button id="btn-4" value="4">Test</ino-segment-button>
</ino-segment-group>
`;

describe('ino-segment-group', () => {
  it('should render with no button checked', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_GROUP_NO_VAL);
    const buttons = await page.findAll('ino-segment-button');

    for (const btn of buttons) {
      var checked = await btn.getProperty('checked');
      expect(checked).toBeFalsy();
    }
  });

  it('should render with the third button being checked', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_GROUP);
    const buttons = await page.findAll('ino-segment-button');

    for(let i = 0; i < buttons.length; i++) {
      const checked = await buttons[i].getProperty('checked');
      const btnId = await buttons[i].getProperty('id');
      if (btnId === 'btn-3') {
        expect(checked).toBeTruthy();
      } else {
        expect(checked).toBeFalsy();
      }
    }
  });

  it('should set the value of the group to the new value and update the state of the buttons if the value changes', async () => {
    const page = await setupPageWithContent(INO_SEGMENT_GROUP);
    const group = await page.find('ino-segment-group');

    await group.setAttribute('value', 2);
    await page.waitForChanges();

    const groupVal = await group.getProperty('value');
    const buttons = await page.findAll('ino-segment-button');

    for (const btn of buttons) {
      const btnVal = await btn.getProperty('value');
      const btnChecked = await btn.getProperty('checked');

      if (groupVal === btnVal) {
        expect(btnChecked).toBeTruthy();
      } else {
        expect(btnChecked).toBeFalsy();
      }
    }
    expect(groupVal).toEqual("2");
  });

});
