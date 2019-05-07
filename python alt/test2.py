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


from bs4 import BeautifulSoup



page = urlopen(test).read()

# print(page)

soup = BeautifulSoup(page, 'lxml')


# for tds in soup.find_all('td'):
  # print(tds.text.encode('utf-8', 'ignore').strip())
  # print(tds.text.encode('utf-8').strip())
  # print(str(tds.text.encode('utf-8').split()))
  # print(type(str(tds.text.encode('utf-8'))))


data=[]

# for tds in soup.find_all('td'):
  # data.append(str(tds.text.encode('utf-8').replace('\xa0', '')))
  # print(str(tds.encode('utf-8')).getText())

# for i in data:
  # print(i)

# print(data)


# reInc = re.compile('Cost of')

# SI = []

# tables = soup.findAll('table')

# # for table in tables:
#   for row in table.findAll('tr'):
#     for cel in row.findAll('td'):
#       if str(cel.getText().encode('utf-8').strip()) != "b'\\xc2\\xa0'":
#         print(str(cel.getText().encode('utf-8').strip())

# i=1
# for table in tables:
#   # if len(table.findAll('td')) > 50:
#   print(i, len(table.findAll('tr')))
#   i+=1

req = requests.get(test)
soup = BeautifulSoup(req.content, "html.parser")

# rows = []

# for table in soup.find_all('table'):
#   for row in table.findAll('tr'):
#     values = [cel.get_text(strip=True) for cel in row.findAll('td')]
#     rows.append(values)

# print(rows)


for table in soup.find_all('table'):
  for row in table.findAll('tr'):
    for cel in row.findAll('td'):
      text = cel.get_text(strip=True)

      if text:   # skip blank lines
        print(text)