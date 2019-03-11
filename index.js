const edgarSearch = 'https://www.sec.gov/edgar/searchedgar/companysearch.html';

const ticker = process.argv[2];

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto(edgarSearch)

  await page.type('#cik', ticker)
  await page.click('#cik_find')



  await browser.close();
})();