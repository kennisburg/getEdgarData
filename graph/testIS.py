import json
import os
import sys
import numpy as np
import matplotlib.pyplot as plt





grouped = {}
alldata = {}
name = ''
comp = ''


with open(os.path.join(sys.path[0], 'GLWISl10q.json'), 'r') as f:

  num = 0
  g = json.load(f)

  name = g['result'][0]['Name']
  comp  = g['result'][0]['Company']

  alldata['Name'] = name
  alldata['Company'] = comp
  
  for i in g['result']:

    if i["Source"] == "10-Q":
      a = i["Quarter"] + ' ' + i["FilingDate"][:4]
    if i["Source"] == "10-K":
      a = i["Quarter"] + ' ' + str(int(i["FilingDate"][:4]) - 1)


    # print(a)

    # for j in i['Data']:
    #   print(j)
    #   print(i['Data'][j])
    #   print('')

    for j in i["Data"]:
      if grouped.get(j) == None:
        grouped[j] = {}

    for k in i["Data"]:
      grouped[k][a] = i["Data"][k]

alldata["Data"] = grouped

keys = []
for i in alldata['Data']:
  keys.append(i)
  # print(i)

print(keys)
keysi = len(keys)

for i in range(keysi):
  key2 = []
  # print(keys[i])
  # print(i)
  # print(alldata['Data'][keys[i]])

  for j in alldata['Data'][keys[i]]:
    key2.append(j)
    # print(keys[i])
  #   print(j)
  #   print(alldata['Data'][keys[i]][j])
  
  key2i = len(key2)
  # print(key2)

  print('#########')

  for k in range(key2i):
    print(key2[k][:2])
    if key2[k][:2] == 'Q4':
      if key2[k+1][:2] == 'Q3':
        



# print(alldata)

  # print(alldata['Data'][keys[i]][j])