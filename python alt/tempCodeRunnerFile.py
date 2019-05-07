rows = []

for table in soup.find_all('table'):
    for row in table.findAll('tr'):
        values = [cel.get_text(strip=True) for cel in row.findAll('td')]
        rows.append(values)

print(rows)