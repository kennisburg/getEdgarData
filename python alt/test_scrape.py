# corning
test = 'https://www.sec.gov/Archives/edgar/data/24741/000002474118000053/glw-20180930x10q.htm'


# tesla
# test = 'https://www.sec.gov/Archives/edgar/data/1318605/000156459018026353/tsla-10q_20180930.htm'


# microsoft
# test = 'https://www.sec.gov/Archives/edgar/data/789019/000156459019001392/msft-10q_20181231.htm'


# amazon
# test = 'https://www.sec.gov/Archives/edgar/data/1018724/000101872418000159/amzn-20180930x10q.htm'


import re

import requests
from urllib.request import urlopen
import lxml.html as lh

from bs4 import BeautifulSoup


page = requests.get(test)
# page = urlopen(test)

doc = lh.fromstring(page.content)


tr_elmt = doc.xpath('//tr')

content = []

for T in tr_elmt:
  # print(T.text_content())
  content.append(T.text())

print(content)