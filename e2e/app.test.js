import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Btn', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true
    });
    page = await browser.newPage();
  });

  test('show popover', async () => {
    await page.goto(baseUrl);
    await page.click('.btn');
    let popoverElement = await page.$('.popover');
    expect(popoverElement).not.toBeNull();
  });

  afterAll(async () => {
    await browser.close();
  });
});
