const delay = Math.ceil((Math.random() * 300) + 200);

const edgarSearch = 'https://www.sec.gov/edgar/searchedgar/companysearch.html';

const ticker = process.argv[2];

const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto(edgarSearch)

  await page.type('#cik', ticker, {delay:delay})
  await page.click('#cik_find')

  await page.waitForSelector('#type')
  await page.type('input#type', '10-Q', {delay:delay})
  await page.select('select#count', '100')
  await page.click('input[value=Search]')


  await page.waitFor(2000)

  let content = await page.evaluate(() => {
    let docs = [...document.querySelectorAll('a#documentsbutton')];
    return docs.map((doc) => doc.href)
  })

  console.log(content)

  const title = await page.title()
  console.log(title)



  const qtrLinks = [];

  for (var i of content) {
    await page.goto(i)

    let filings = await page.evaluate(() => {
      let files = [...document.querySelectorAll('tr')]
    })

    console.log(filings)


    // const arrtitle = await page.title()
    // console.log(arrtitle)

  }


  await browser.close();
})();