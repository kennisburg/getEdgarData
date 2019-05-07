from bs4 import BeautifulSoup
import requests

test = 'https://www.sec.gov/Archives/edgar/data/789019/000156459019001392/msft-10q_20181231.htm'
req = requests.get(test)
soup = BeautifulSoup(req.content, "html.parser")

rows = []

for table in soup.find_all('table'):
    for row in table.findAll('tr'):
        values = [cel.get_text(strip=True) for cel in row.findAll('td')]
        rows.append(values)

print(rows)