const test = 'https://www.sec.gov/Archives/edgar/data/24741/000002474118000053/0000024741-18-000053-index.htm'

const puppeteer = require('puppeteer');





(async() => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto(test)




  

  await browser.close();
})();

