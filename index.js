const edgarSearch = 'https://www.sec.gov/edgar/searchedgar/companysearch.html';

const ticker = process.argv[2];

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto(edgarSearch)

  await page.type('#cik', ticker)
  await page.click('#cik_find')

  //10q format different before 2010
  await page.waitForSelector('#type')
  await page.type('input#type', '10-Q')
  await page.select('select#count', '100')
  await page.click('input[value=Search')

  await page.waitFor(2000)

  await browser.close();
})();