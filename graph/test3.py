import json
import os
import sys

grouped = {}


with open(os.path.join(sys.path[0], 'GLWBSl10q.json'), 'r') as f:
  g = json.load(f)

  for i in g["result"]:

    a = i["Quarter"] + ' ' + i["FilingDate"][:4]

    for j in i["Data"]:
      if grouped.get(j) == None:
        grouped[j] = {}

    for k in i["Data"]:
      grouped[k][a] = i["Data"][k]

    # print(i["Quarter"] , i["FilingDate"][:4])
      # print(j)

      # print(i["Data"][j])


print(grouped)