// GET LIST OF QUARTERLY FILING (10Q AND 10K) LINKS BY TYPING TICKER IN COMMAND LINE

require('dotenv').config()

const edgarSearch = 'https://www.sec.gov/edgar/searchedgar/companysearch.html';
const ticker = process.argv[2];

const puppeteer = require('puppeteer');

const delay = Math.ceil((Math.random() * 100) + 100);

(async() => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  // GO TO EDGAR, TYPE IN TICKER FROM INPUT, LOOK UP FILINGS STARTING WITH 10- (10-Q / 10-K)
  await page.goto(edgarSearch)

  await page.type('#cik', ticker, {delay:delay})
  await page.click('#cik_find')

  await page.waitForSelector('#type')
  await page.type('input#type', '10-', {delay:delay})
  // await page.select('select#count', '100')
  await page.click('input[value=Search]')

  await page.waitFor(2000)


  // GOES TO PAGE CONTAINING FILING AND VARIATIONS
  let content = await page.evaluate(() => {
    let docs = [...document.querySelectorAll('a#documentsbutton')];
    return docs.map((doc) => doc.href)
  })

  let qfile = []

  // VISIT EACH PAGE CONTAINING FILING AND GET LINK OF ACTUAL FILING
  for(var i of content){
    let obj = {}

    await page.goto(i)
    await page.waitFor(delay)

    // LINKS
    let tr = await page.evaluate(() => {
      return [...document.querySelectorAll('tr')]
      .find(e=>e.innerText.includes('10-'))
      .querySelector('a')
      .href
    })
    // DATE
    let date = await page.evaluate(() => {
      return [...document.querySelectorAll('div.formGrouping')]
      .find(e=>e.innerText.includes('Period of Report'))
      .querySelector('div.info')
      .innerText
    })
    // ADD LINK, DATE, EMPTY QUARTER
    obj.link = tr
    obj.date = date
    obj.q = ''
    qfile.push(obj)
  }

// REMOVE QUARTERLY FILING AMENDMENTS
  for (var i in qfile){
    if (qfile[i].link.includes('10ka') || qfile[i].link.includes('10qa')){
      qfile.splice(i, 1)
    }
  }

  console.log(qfile)


  await browser.close();
})();