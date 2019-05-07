d = {
}

# d['item']['field2'] = 456


print(d)


if d.get('item') == None:
  d['item'] = {}

d['item']['field'] = 123
d['item']['field2'] = 456

print(d['item'])

print(d['item']['field'])