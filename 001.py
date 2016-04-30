# Completed on 4/29/2016 by Theresa Thoraldson
# source: https://projecteuler.net/problem=1
import math

dict = []

print("Euler 001")

for x in range(0, 1000):
  if (x % 5) == 0:
    dict.append(x)
  if (x % 3) == 0:
    dict.append(x)

print("list of factorials:"),
print list(set(dict))
print("")
print("Sum of factorials:"),
print sum(list(set(dict)))
