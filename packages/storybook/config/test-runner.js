module.exports = {
  async postRender(page, context) {
    // the #root element wraps the story
    const elementHandler = await page.$('#root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};
