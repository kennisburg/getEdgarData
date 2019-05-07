from bs4 import BeautifulSoup
import requests
import re

test = 'https://www.sec.gov/Archives/edgar/data/789019/000156459019001392/msft-10q_20181231.htm'
req = requests.get(test)
soup = BeautifulSoup(req.content, "html.parser")


incs = soup.find(text=re.compile('Income Statements'))

print(incs)