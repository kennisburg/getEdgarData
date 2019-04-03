const test = 'https://www.sec.gov/Archives/edgar/data/24741/000002474118000053/0000024741-18-000053-index.htm'


const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();

  await page.goto(test)

  let tr = await page.evaluate(()=> {
    // find all tr elements
       return [...document.querySelectorAll('tr')]
   
        // check which one of them includes the word
        .find(e=>e.innerText.includes('10-Q'))
   
        // get the link inside
        .querySelector('a')
   
        // do whatever you want to do with this
        .href
   })

   console.log(tr)

  await browser.close();
})();


