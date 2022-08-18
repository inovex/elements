const { toMatchImageSnapshot } = require('jest-image-snapshot');

const customSnapshotsDir = `${process.cwd()}/__snapshots__`;

module.exports = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postRender(page, context) {

    await Promise.all(
      [
        await page.waitForLoadState('load'),
        await page.waitForLoadState('domcontentloaded'),
        await page.waitForFunction(
          () => {
            const inoElements = Array.from(
              document.getElementsByTagName('*')
            ).filter((el) => el.tagName.startsWith('INO'));

            return inoElements.every((el) => el.classList.contains('hydrated'));
          },
          { polling: 50 }
        )
      ]
    )

    const image = await page.screenshot({
      omitBackground: true,
      animations: 'disabled',
    });
    expect(image).toMatchImageSnapshot({
      comparisonMethod: 'ssim',
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
      failureThreshold: 0.01,
      failureThresholdType: 'percent',
    });
  },
};
