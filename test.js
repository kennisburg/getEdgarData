// const test = 'https://www.sec.gov/Archives/edgar/data/24741/000002474118000053/glw-20180930x10q.htm'
// const test = 'https://www.sec.gov/Archives/edgar/data/1318605/000156459018026353/tsla-10q_20180930.htm'
const test = 'https://www.sec.gov/Archives/edgar/data/789019/000156459019001392/msft-10q_20181231.htm'
// const test = 'https://www.sec.gov/Archives/edgar/data/1018724/000101872418000159/amzn-20180930x10q.htm'

const request = require('request');

const cheerio = require('cheerio');



request(test, (error, res, html) => {
  if (!error && res.statusCode == 200) {
    // console.log(html)

    const $ = cheerio.load(html)

    const table = $("tbody:contains('Cash and cash equivalents')")

    const items = table.html()

    // const items = table.text().split(/[\n|\t]/).filter(el => el.trim().length).map(el => el.trim());

    // for (var i in items) {
    //   if (items[i] == '$') {
    //     items.splice(i, 1)
    //   }
    // }
    
    
    console.log(items)
    



  }
})