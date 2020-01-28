import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_RADIO_GROUP = `<ino-radio-group value="Option 2">
    <ino-radio id="radio-1" value="Option 1"/>
    <ino-radio id="radio-2" value="Option 2"/>
    <ino-radio id="radio-3" value="Option 3"/>
</ino-radio-group>`;

describe('InoRadioGroup', () => {
  it('should render with only Option 2 being checked', async () => {
    const page = await setupPageWithContent(INO_RADIO_GROUP);

    const inoCheckboxOne = await page.find('#radio-1');
    const inoCheckboxTwo = await page.find('#radio-2');
    const inoCheckboxThree = await page.find('#radio-3');

    const checkedOne = await inoCheckboxOne.getProperty('checked');
    const checkedTwo = await inoCheckboxTwo.getProperty('checked');
    const checkedThree = await inoCheckboxThree.getProperty('checked');

    expect(checkedOne).toBeFalsy();
    expect(checkedTwo).toBeTruthy();
    expect(checkedThree).toBeFalsy();
  });
});
