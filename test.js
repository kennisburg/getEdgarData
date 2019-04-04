const test = 'https://www.sec.gov/Archives/edgar/data/24741/000002474118000053/glw-20180930x10q.htm'

const request = require('request');

const cheerio = require('cheerio');

request(test, (error, res, html) => {
  if (!error && res.statusCode == 200) {
    // console.log(html)

    const $ = cheerio.load(html)

    const table = $('tbody')

    console.log(table)
  }
})