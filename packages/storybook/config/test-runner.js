module.exports = {
  async postRender(page, context) {

    /* see: https://github.com/storybookjs/test-runner/issues/68#issuecomment-1214989696
    await page.waitForFunction(
      () => {
        const inoElements = Array.from(
          document.getElementsByTagName('*')
        ).filter((el) => el.tagName.startsWith('INO'));

        return inoElements.every((el) => el.classList.contains('hydrated'));
      },
      { polling: 50 }
    );

     */

    await page.$('#root');

    const elementHandler = await page.$('#root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};
