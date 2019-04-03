require('dotenv').config()

const edgarSearch = 'https://www.sec.gov/edgar/searchedgar/companysearch.html';
const ticker = process.argv[2];

const puppeteer = require('puppeteer');

const delay = Math.ceil((Math.random() * 300) + 200);

(async() => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto(edgarSearch)

  await page.type('#cik', ticker, {delay:delay})
  await page.click('#cik_find')

  await page.waitForSelector('#type')
  await page.type('input#type', '10-Q', {delay:delay})
  // await page.select('select#count', '100')
  await page.click('input[value=Search]')

  await page.waitFor(2000)

  let content = await page.evaluate(() => {
    let docs = [...document.querySelectorAll('a#documentsbutton')];
    return docs.map((doc) => doc.href)
  })

  let tenq = []

  for(var i of content){
    await page.goto(i)

    let tr = await page.evaluate(() => {
      return [...document.querySelectorAll('tr')]
      .find(e=>e.innerText.includes('10-Q'))
      .querySelector('a')
      .href
    })

    tenq.push(tr)
  }

  console.log(tenq)

  await browser.close();
})();