import puppeteer from 'puppeteer';

(async () => {
  // Launch a new Chromium browser instance
  const browser = await puppeteer.launch({ headless: 'new' });

  // Open a new page in the browser
  const page = await browser.newPage();

  // Navigate to the web page you want to scrape
  await page.goto('https://github.com/inovex/elements/graphs/contributors');

  console.log('Waiting for page to load...');

  await page.waitForSelector('img.avatar.avatar-user');

  console.log('Page loaded!');

  // Extract all img.avatar.avatar-user src and alt attributes
  const imageAttributes = await page.$$eval('img.avatar.avatar-user', (imgs) =>
    imgs.map((img) => ({
      src: img.getAttribute('src').replace('?s=60', '?s=120'),
      alt: img.getAttribute('alt'),
    }))
  );

  // Log the image tags with the same classes wrapped in an anchor with an href to the user's GitHub profile
  imageAttributes.forEach(({ src, alt }) => {
    const consoleLog = `<a href="https://github.com/${alt}"><img src="${src}" alt="Profile picture of ${alt}'s github account" width="60px"></a>`;
    console.log(consoleLog);
  });

  // Close the browser instance
  await browser.close();
})();
