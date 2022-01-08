const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('http://localhost:5500');

  await page.evaluate(() => {
    for (let i = 0; i < 5; i++) {
      document.querySelector('my-counter-comp').shadowRoot.querySelector('button').click();
    }
  });

  const counterDivText = await page.evaluate(() => {
    return document.querySelector('my-counter-comp').shadowRoot.querySelector('div > div').textContent;
  });

  console.log(`counterDivText: ${counterDivText}`);

  const title = await page.evaluate(() => {
    return document
      .querySelector('my-counter-comp')
      .shadowRoot.querySelector('title-component')
      .shadowRoot.querySelector('#titleElement').textContent;
  });

  console.log(`title: ${title}`);

  await browser.close();
})();
