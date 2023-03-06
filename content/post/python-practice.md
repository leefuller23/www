---
title: "Python practice"
date: 2023-03-02
publishdate: 2023-03-02
lastmod: 2023-03-02
draft: false
---

```python

Functions + Returns

# Uncomment this when you reach the "Use the Force" section
train_mass = 22680
train_acceleration = 10
train_distance = 100
bomb_mass = 1


# Write your code below: 
def f_to_c(f_temp):
  return (f_temp - 32) * 5/9 
f100_in_celsius = f_to_c(100)
print(f100_in_celsius)

def c_to_f(c_temp):
  return c_temp * 9/5 + 32 
c0_in_fahrenheit = c_to_f(0)
print(c0_in_fahrenheit)

def get_force(mass, acceleration):
  return mass * acceleration
train_force = get_force(train_mass, train_acceleration)
print(train_force) 

print("The GE train supplies " + str(train_force) + " Newtons of force.")

def get_energy(mass, c=3*10**8):
  return mass * c**2
bomb_energy = get_energy(bomb_mass)
print(bomb_energy)

print("A 1kg bomb supplies " + str(bomb_energy) + " Joules.")

def get_work(mass, acceleration, distance):
  force = get_force(mass, acceleration)
  return force * distance

train_work = get_work(train_mass, train_acceleration, train_distance)
print("The GE train does " + str(train_work) + " Joules of work over " + str(train_distance) + " meters.")

## List comprehension

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
