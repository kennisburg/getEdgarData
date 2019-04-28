var list = [ { link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459019003165/tsla-10k_20181231.htm',
 date: '2018-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459018026353/tsla-10q_20180930.htm',
 date: '2018-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459018019254/tsla-10q_20180630.htm',
 date: '2018-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459018011086/tsla-10q_20180331.htm',
 date: '2018-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459018002956/tsla-10k_20171231.htm',
 date: '2017-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459017021343/tsla-10q_20170930.htm',
 date: '2017-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459017015705/tsla-10q_20170630.htm',
 date: '2017-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459017009968/tsla-10q_20170331.htm',
 date: '2017-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459017003118/tsla-10k_20161231.htm',
 date: '2016-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459016026820/tsla-10q_20160930.htm',
 date: '2016-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459016023024/tsla-10q_20160630.htm',
 date: '2016-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459016018886/tsla-10q_20160331.htm',
 date: '2016-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459016013195/tsla-10k_20151231.htm',
 date: '2015-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459015009741/tsla-10q_20150930.htm',
 date: '2015-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459015006666/tsla-10q_20150630.htm',
 date: '2015-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459015003789/tsla-10q_20150331.htm',
 date: '2015-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000156459015001031/tsla-10k_20141231.htm',
 date: '2014-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312514403635/d812482d10q.htm',
 date: '2014-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312514303175/d766922d10q.htm',
 date: '2014-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312514192606/d715897d10q.htm',
 date: '2014-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312514069681/d668062d10k.htm',
 date: '2013-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312513435480/d588506d10q.htm',
 date: '2013-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312513327916/d549636d10q.htm',
 date: '2013-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312513212354/d511008d10q.htm',
 date: '2013-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312513096241/d452995d10k.htm',
 date: '2012-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312512457610/d410318d10q.htm',
 date: '2012-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312512332138/d364775d10q.htm',
 date: '2012-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312512225825/d325967d10q.htm',
 date: '2012-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312512137560/d315279d10ka.htm',
 date: '2011-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312512081990/d279413d10k.htm',
 date: '2011-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312511308489/d226201d10q.htm',
 date: '2011-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312511221497/d10q.htm',
 date: '2011-06-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312511139677/d10q.htm',
 date: '2011-03-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312511054847/d10k.htm',
 date: '2010-12-31' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312510259068/d10q.htm',
 date: '2010-09-30' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/1318605/000119312510188792/d10q.htm',
 date: '2010-06-30' } ]




for (var i in list){
  if(list[i].link.includes('10ka') || list[i].link.includes('10qa')){
    list.splice(i, 1)
  }
}

for (var i of list) {
  console.log(i.link.includes('10ka') || i.link.includes('10qa'))
}