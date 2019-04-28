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
  await page.type('input#type', '10-', {delay:delay})
  // await page.select('select#count', '100')
  await page.click('input[value=Search]')

  await page.waitFor(2000)

  let content = await page.evaluate(() => {
    let docs = [...document.querySelectorAll('a#documentsbutton')];
    return docs.map((doc) => doc.href)
  })

  let tenq = []


  for(var i of content){
    let obj = {}

    await page.goto(i)

    let tr = await page.evaluate(() => {
      return [...document.querySelectorAll('tr')]
      .find(e=>e.innerText.includes('10-'))
      .querySelector('a')
      .href
    })

    let date = await page.evaluate(() => {
      return [...document.querySelectorAll('div.formGrouping')]
      .find(e=>e.innerText.includes('Period of Report'))
      .querySelector('div.info')
      .innerText
    })

    

    
    obj.link = tr
    obj.date = date
    obj.q = ''
    tenq.push(obj)
  }


  for (var i in tenq){
    if (tenq[i].link.includes('10ka') || tenq[i].link.includes('10qa')){
      tenq.splice(i, 1)
    }
  }

  console.log(tenq)


  await browser.close();
})();