import json
import os
import sys
import numpy as np
import matplotlib.pyplot as plt





grouped = {}
alldata = {}
name = ''
comp = ''


with open(os.path.join(sys.path[0], 'MSGBS.json'), 'r') as f:

  num = 0
  g = json.load(f)

  name = g['result'][0]['Name']
  comp  = g['result'][0]['Company']

  alldata['Name'] = name
  alldata['Company'] = comp

  for i in g['result']:

    if i["Quarter"] == 'Q1':
      a = i["Quarter"] + ' ' + i["FilingDate"][:4]
    if i["Quarter"] != 'Q1':
      a = i["Quarter"] + ' ' + str(int(i["FilingDate"][:4]) - 1)


    for j in i["Data"]:
      if grouped.get(j) == None:
        grouped[j] = {}

    for k in i["Data"]:
      grouped[k][a] = i["Data"][k]

alldata["Data"] = grouped

# print(alldata)

print('#########################')
print('')
print(comp)
print('')
print(name)

print('')
print('#########################')
print('')


print('')
a=1
for i in alldata["Data"]:
  print(a, i)
  a+=1
a=1


print('')
print('')
print('# then ENTER')
pick = input('What item do you want graphed?:')
print('')
print('#########################')
print('')

b=1
for i in alldata["Data"]:
  if int(pick) == int(b):
    pick = i
    break
  b+=1
b=1


vertical = []
horizontal = []


print(pick)
print('')
for i in alldata["Data"][pick]:
  vertical.append(alldata["Data"][pick][i])
  horizontal.append(i)
  print(i , '-' , alldata["Data"][pick][i])
  # print(grouped[pick][i])
  print('')

print('')
print('')


# x=0
# for i in horizontal:
#   print(horizontal[x], '-' , vertical[x])
#   x+=1
# x=0

y_pos = np.arange(len(horizontal))

vertical.reverse()
horizontal.reverse()



plt.bar(y_pos, vertical)
plt.xticks(y_pos, horizontal)

plt.show()

