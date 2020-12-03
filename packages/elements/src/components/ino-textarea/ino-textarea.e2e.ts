import { setupPageWithContent } from '../../util/e2etests-setup';
import { pxToNumber } from '../../util/test-utils';

const createTextarea = (attr?: string) =>
  `<ino-textarea ${attr}>Some Text</ino-textarea>`;

const checkSettingOfProp = async (property: string, value: number | string) => {
  const page = await setupPageWithContent(
    createTextarea(`${property}=\'${value}\'`)
  );
  const innerTextArea = await page.find('textarea');

  expect(innerTextArea.getAttribute(property)).toEqual(value.toString());
};

describe('ino-textarea', () => {
  it('should render with an defined text inside', async () => {
    const page = await setupPageWithContent(createTextarea());
    const inoTextArea = await page.find('ino-textarea');
    const content = inoTextArea.textContent;
    expect(content).toEqual('Some Text');
  });

  it('should render with a label', async () => {
    const sampleText = 'Some Label';
    const page = await setupPageWithContent(
      createTextarea(`ino-label=\'${sampleText}\'`)
    );
    const label = await page.find('label');
    expect(label.textContent).toEqual(sampleText);
  });

  it('should render with an above floating label after focus', async () => {
    const sampleText = 'Some Label';
    const page = await setupPageWithContent(
      createTextarea(`ino-label=\'${sampleText}\'`)
    );
    const inoTextArea = await page.find('textarea');
    await inoTextArea.click();
    const label = await page.find('label');
    await page.waitForChanges();
    expect(
      label.classList.contains('mdc-floating-label--float-above')
    ).toBeTruthy();
  });

  it('should be focused after render', async () => {
    const page = await setupPageWithContent(
      '<ino-textarea autofocus></ino-textarea>'
    );
    const focusedElement = await page.$eval(':focus', el => el);

    expect(focusedElement).toBeDefined();
  });

  it('should not be focused after render', async () => {
    const page = await setupPageWithContent(createTextarea());
    try {
      await page.$eval(':focus', el => el);
    } catch (e) {
      expect(true);
    }
  });

  it('should have higher height after increasing the rows', async () => {
    const page = await setupPageWithContent(createTextarea('rows=1'));

    const inoTextArea = await page.find('ino-textarea');
    const textarea = await page.find('textarea');

    let textAreaStyle = await textarea.getComputedStyle();

    const heightWithOneRows = pxToNumber(textAreaStyle.height);
    inoTextArea.setAttribute('rows', 10);
    await page.waitForChanges();
    textAreaStyle = await textarea.getComputedStyle();
    const heightWithTenRows = pxToNumber(textAreaStyle.height);

    expect(heightWithOneRows).toBeLessThan(heightWithTenRows);
  });

  it('should have wider widths after increasing the columns', async () => {
    const page = await setupPageWithContent(createTextarea('cols=1'));

    const inoTextArea = await page.find('ino-textarea');
    const textarea = await page.find('textarea');

    let textAreaStyle = await textarea.getComputedStyle();

    const widthWithOneColumns = pxToNumber(textAreaStyle.width);
    inoTextArea.setAttribute('cols', 10);
    await page.waitForChanges();
    textAreaStyle = await textarea.getComputedStyle();
    const widthWithTenColumns = pxToNumber(textAreaStyle.width);

    expect(widthWithOneColumns).toBeLessThan(widthWithTenColumns);
  });

  it('should set max length property', async () => {
    await checkSettingOfProp('maxLength', '3');
  });

  it('should set min length property', async () => {
    await checkSettingOfProp('minLength', '3');
  });

  it('should set a placeholder', async () => {
    await checkSettingOfProp('placeholder', 'Sample Placeholder');
  });

  it('should NOT have the after pseudo-class within the label', async () => {
    const page = await setupPageWithContent(
      createTextarea(`ino-label=\'SomeLabel'`)
    );
    const label = await page.find('ino-label');
    const afterElement = await label.getComputedStyle(':after');

    expect(afterElement.content).toEqual('none');
  });

  it('should NOT increase width when input exceeds width and autogrow not set', async () => {
    const page = await setupPageWithContent(
      createTextarea(`rows="2" cols="2"`)
    );
    const inoTextarea = await page.find('ino-textarea');
    const stylesBeforeInput = await inoTextarea.getComputedStyle();

    inoTextarea.setAttribute('value', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    await page.waitForChanges();
    const stylesAfterInput = await inoTextarea.getComputedStyle();
    expect(stylesAfterInput.height).toEqual(stylesBeforeInput.height);
  });

  it('should increase width when input exceeds width and autogrow set', async () => {
    const page = await setupPageWithContent(
      createTextarea(`rows="2" cols="2" autogrow`)
    );
    const inoTextarea = await page.find('ino-textarea');
    const stylesBeforeInput = await inoTextarea.getComputedStyle();

    inoTextarea.setAttribute('value', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    await page.waitForChanges();
    const stylesAfterInput = await inoTextarea.getComputedStyle();
    expect(pxToNumber(stylesAfterInput.height)).toBeGreaterThan(
      pxToNumber(stylesBeforeInput.height)
    );
  });

  it('should emit valueChange event while typing in textarea', async () => {
    const page = await setupPageWithContent(createTextarea());
    const inoTextarea = await page.find('textarea');
    const spyOnChangeEvent = await page.spyOnEvent('valueChange');

    await inoTextarea.type('test');
    await page.waitForChanges();
    expect(spyOnChangeEvent).toHaveReceivedEvent();
  });

  it('should emit valueChange event while typing in textarea and have the typed string in event.detail', async () => {
    const page = await setupPageWithContent(createTextarea());
    const textarea = await page.find('textarea');
    const spyOnChangeEvent = await page.spyOnEvent('valueChange');

    await textarea.type('t');
    await page.waitForChanges();
    expect(spyOnChangeEvent).toHaveReceivedEventDetail('t');
  });

  it("should emit 4 valueChange events while typing 'test' in textarea", async () => {
    const page = await setupPageWithContent(createTextarea());
    const textarea = await page.find('textarea');
    const spyOnChangeEvent = await page.spyOnEvent('valueChange');

    await textarea.type('test');
    await page.waitForChanges();
    expect(spyOnChangeEvent.length).toBe(4);
  });

  it('should not emit any events while typing when disabled', async () => {
    const page = await setupPageWithContent(createTextarea('disabled'));
    const textarea = await page.find('textarea');
    const spyOnChangeEvent = await page.spyOnEvent('valueChange');

    await textarea.type('t');
    await page.waitForChanges();
    expect(spyOnChangeEvent).not.toHaveReceivedEvent();
  });
});
