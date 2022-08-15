module.exports = {
  async postRender(page, context) {

    /*
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
    await page.waitForTimeout(1);

    await page.$('#root');

    const elementHandler = await page.$('#root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};
