
//TEST ON GLW FISCAL YEAR END IN DEC
var list = [ { link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474119000016/glw-20181231x10k.htm',
  date: '2018-12-31',
  q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474118000053/glw-20180930x10q.htm',
  date: '2018-09-30',
  q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474118000045/glw-20180630x10q.htm',
  date: '2018-06-30',
  q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474118000018/glw-20180331x10q.htm',
 date: '2018-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474118000010/glw-20171231x10k.htm',
 date: '2017-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474117000060/glw-20170930x10q.htm',
 date: '2017-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474117000050/glw-20170630x10q.htm',
 date: '2017-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474117000026/glw-20170331x10q.htm',
 date: '2017-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474117000011/q4201610k.htm',
 date: '2016-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474116000118/q3201610q.htm',
 date: '2016-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474116000105/q2201610q.htm',
 date: '2016-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474116000086/q1201610q.htm',
 date: '2016-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474116000077/form10k2015.htm',
 date: '2015-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474115000058/q3201510q.htm',
 date: '2015-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474115000045/q2201510q.htm',
 date: '2015-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474115000026/q1201510q.htm',
 date: '2015-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474115000015/form10k2014.htm',
 date: '2014-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474114000054/q3201410q.htm',
 date: '2014-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474114000042/q22014form10q.htm',
 date: '2014-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474114000022/q12014form10q.htm',
 date: '2014-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000130817914000032/lglw2013_10k.htm',
 date: '2013-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474113000061/q32013form10q.htm',
 date: '2013-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474113000048/q22013form10q.htm',
 date: '2013-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474113000027/form10qq12013.htm',
 date: '2013-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000130817913000024/lcorningincorporated_10k.htm',
 date: '2012-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474112000059/form10qq32012.htm',
 date: '2012-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474112000047/q2form10q.htm',
 date: '2012-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474112000024/q12012form10q.htm',
 date: '2012-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000119312512056163/d262610d10k.htm',
 date: '2011-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474111000055/q310q2011.htm',
 date: '2011-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474111000044/q22011form10q.htm',
 date: '2011-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474111000020/q12011form10q.htm',
 date: '2011-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000119312511030621/d10k.htm',
 date: '2010-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474110000061/q3form10q.htm',
 date: '2010-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474110000047/q2form10q.htm',
 date: '2010-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474110000018/q110q2010.htm',
 date: '2010-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000119312510027165/d10k.htm',
 date: '2009-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474109000043/q30910q.htm',
 date: '2009-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/24741/000002474109000027/q20910q.htm',
 date: '2009-06-30',
 q: '' } ]

//TEST ON MSFT FISCAL YEAR END IN JUNE
var list2 = [ { link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459019012709/msft-10q_20190331.htm',
 date: '2019-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459019001392/msft-10q_20181231.htm',
 date: '2018-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459018024893/msft-10q_20180930.htm',
 date: '2018-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459018019062/msft-10k_20180630.htm',
 date: '2018-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459018009307/msft-10q_20180331.htm',
 date: '2018-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459018001129/msft-10q_20171231.htm',
 date: '2017-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459017020171/msft-10q_20170930.htm',
 date: '2017-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459017014900/msft-10k_20170630.htm',
 date: '2017-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459017007547/msft-10q_20170331.htm',
 date: '2017-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000156459017000654/msft-10q_20161231.htm',
 date: '2016-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312516742796/d245252d10q.htm',    date: '2016-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312516662209/d187868d10k.htm',    date: '2016-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312516550254/d256147d10q.htm',    date: '2016-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312516441821/d15167d10q.htm',
 date: '2015-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312515350718/d83804d10q.htm',
 date: '2015-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312515272806/d918813d10k.htm',    date: '2015-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312515144151/d860721d10q.htm',    date: '2015-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312515020351/d827041d10q.htm',    date: '2014-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312514380252/d770268d10q.htm',    date: '2014-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312514289961/d722626d10k.htm',    date: '2014-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312514157088/d695543d10q.htm',    date: '2014-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312514018634/d635047d10q.htm',    date: '2013-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312513409855/d594455d10q.htm',    date: '2013-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312513310206/d527745d10k.htm',    date: '2013-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312513160748/d497226d10q.htm',    date: '2013-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312513022207/d453668d10q.htm',    date: '2012-12-31',    q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312512427209/d406056d10q.htm',    date: '2012-09-30',
 q: '' },  { link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312512316848/d347676d10k.htm',    date: '2012-06-30',
 q: '' },
{ link:     'https://www.sec.gov/Archives/edgar/data/789019/000119312512170665/d313493d10q.htm',    date: '2012-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312512017029/d266753d10q.htm',    date: '2011-12-31',    q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312511276022/d230161d10q.htm',    date: '2011-09-30',
 q: '' },  { link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312511200680/d10k.htm',
 date: '2011-06-30',
 q: '' },  { link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312511115186/d10q.htm',
 date: '2011-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312511015947/d10q.htm',
 date: '2010-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312510239825/d10q.htm',
 date: '2010-09-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312510171791/d10k.htm',
 date: '2010-06-30',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312510090116/d10q.htm',
 date: '2010-03-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312510015598/d10q.htm',
 date: '2009-12-31',
 q: '' },
{ link:
  'https://www.sec.gov/Archives/edgar/data/789019/000119312509212454/d10q.htm',
 date: '2009-09-30',
 q: '' } ]

//SET Q4 ON 10K FILINGS
for (var i in list2){
  var qdate = list2[i].date
  var yr = ''

//DEPENDANT ON END OF FISCAL YEAR
  if(qdate.substring(5, 7) == '12'){
    yr = qdate.substring(0, 4)
  } else {
    yr = Number(qdate.substring(0, 4)) - 1
    yr = String(yr)
  }

   if(list2[i].link.includes('10k')){
     list2[i].q = yr + ' Q4'
   }
 }



//SET REST OF Q ADJACENT TO Q4
for (var i =0; i < list2.length; i++){

  if(list2[i].q.includes('Q4')){

    var qdate = list2[i].q
    var yr = qdate.substring(0, 4)

    var yr2 = Number(yr) + 1
    yr2 = String(yr2)

    if(list2[i+1]){
      list2[i+1].q = yr + ' Q3'
    }
    if(list2[i+2]){
      list2[i+2].q = yr + ' Q2'
    }
    if(list2[i+3]){
      list2[i+3].q = yr + ' Q1'
    }
    if(list2[i-1]){
      list2[i-1].q = yr2 + ' Q1'
    }
    if(list2[i-2]){
      list2[i-2].q = yr2 + ' Q2'
    }
    if(list2[i-3]){
      list2[i-3].q = yr2 + ' Q3'
    }
  }
}




 console.log(list2)

