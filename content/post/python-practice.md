---
title: "Python practice"
date: 2023-03-02
publishdate: 2023-03-02
lastmod: 2023-03-02
draft: false
---

```python

## List comprehension?

#1
grades = [90, 88, 62, 76, 74, 89, 48, 57]
scaled_grades = [grade + 10 for grade in grades]

print(scaled_grades)

#2
numbers = [2, -1, 79, 33, -45]
negative_doubled = [num * 2 for num in numbers if num < 0]
print(negative_doubled)

#3
numbers = [2, -1, 79, 33, -45]
doubled = [num * 2 if num < 0 else num * 3 for num in numbers ]
print(doubled)

#4
numbers = [2, -1, 79, 33, -45]
 
no_if   = [num * 2 for num in numbers]
if_only = [num * 2 for num in numbers if num < 0]
if_else = [num * 2 if num < 0 else num * 3 for num in numbers]



# my work 1
heights = [161, 164, 156, 144, 158, 170, 163, 163, 157]
can_ride_coaster = [h for h in heights if h > 161]
print(can_ride_coaster)

# my work 2

single_digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
squares = []

## Print List + add squared value to 'squares'
for i in single_digits:
  print(i)
  squares.append(i ** 2)
print(squares)

## Create list 'cubes' and takes to 'single_digits' to third power
cubes = [num ** 3 for num in single_digits]
print(cubes)

```