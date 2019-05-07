import json
import os
import sys




grouped = {}

with open(os.path.join(sys.path[0], 'GLWBSl10q.json'), 'r') as f:

  num = 0
  g = json.load(f)

  for i in g['result']:

    if i["Source"] == "10-Q":
      a = i["Quarter"] + ' ' + i["FilingDate"][:4]

      for j in i["Data"]:
        if grouped.get(j) == None:
          grouped[j] = {}

      for k in i["Data"]:
        grouped[k][a] = i["Data"][k]


    if i["Source"] == "10-K":
      a = i["Quarter"] + ' ' + str(int(i["FilingDate"][:4]) - 1)

      for j in i["Data"]:
        if grouped.get(j) == None:
          grouped[j] = {}

      for k in i["Data"]:
        grouped[k][a] = i["Data"][k]





print(grouped)
