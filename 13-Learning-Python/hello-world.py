# Hello World
# print("Hello world")

# Get a website and print text
# import requests
# resp = requests.get("https://davidedwardclark.com")
# html = resp.text
# print(html)

# Inline comment spacing = 2
# print("#blah")  # Like this.

# Variable types
# print(type("Hello, world"))
# print(type(5))

# Strings
# single_quote_string = 'blah, I said "blahahaha" to him'
# double_quote_string = "hah"
# print(single_quote_string)
# print(double_quote_string)
# print(len(single_quote_string))

# Line Lengths
# Each line of Python code should contain no more than 79 characters.

# Long Strings
# long_string = "This planet has - or rather had - a problem, which was this: most of the people living on it were unhappy for pretty much of the time. Many solutions were suggested for this problem, but most of these were largely concerned with the movements of small green pieces of paper, which is odd because on the whole it wasn't the small green pieces of paper that were unhappy."
# print(long_string)

# String Manipulation
# string1 = "blah1"
# string2 = "blah2"
# string3 = string1 + " " + string2
# print(string3)

# String Indexing
# string1 = "abcdefghijklmnop"
# print(string1[0])
# print(string1[1])
# print(string1[-1])

# String Slicing
# [starting character : how many characters to include]
# string2 = "apple pie"
# print(string2[0:3])
# If you omit the second index in the slice it defaults to the whole string..
# string3 = "apple pie"
# print(string3[3:])
# If you omit the first index in a slice, Python assumes you want to start at index 0.
# string4 = "apple pie"
# print(string4[:4])
# Negative values too.
# string4 = "apple pie"
# print(string4[-3:-1])

# String Methods
# string = "David Clark"
# print(string.lower())
# print(string.upper())
# print(len(string))

# Types
# print(type(""))
# print(type(4))
# print(type({}))
# print(type([]))

# Remove Whitespace
# .rstrip()
# .lstrip()
# .strip()
# string = "   hahahahaahahaha   "
# print(string.rstrip())
# print(string.lstrip())
# print(string.strip())

# Starts With Ends With
# Case sensitive!
# .startswith()
# .endswith()
# string = "BLAH"
# print(string.startswith("BL"))
# print(string.endswith("H"))

# Immutible
# String in Pyton are immutible. So if we want to keep the manipulate string we need to store in in a value.
# string = "chAnGe Me aNd StOrE me"
# string2 = string.upper()
# print("orignal: ", string)
# print("modified with upper(): ", string2)

# String Methods
# https://docs.python.org/3/library/stdtypes.html#string-methods
# string = "      "
# print(string.isspace())
# string1 = "asdfasdfasdf"
# print(string1.isspace())

# Strings and Arrays
# string = "1,2,3"
# array = string.split(",")
# print(array)

# User Input
# user_input = input("Enter some text: ")
# uppercase_it = user_input.upper()
# print(uppercase_it)

# Convert String to Integer
# user_input = input("Enter a wholeinteger and I will convert it to a type number: ")
# output = int(user_input)
# print(output)
# print(type(output))
# print("see, it is true number")

# Convert String to Floating Point
# user_input = input("Enter a floating point number and I will convert it to a type number: ")
# output = float(user_input)
# print(output)
# print(type(output))
# print("see, it is true number")

# Double a Number
# user_input = input("Enter a number to be doubled: ")
# output = float(user_input) * 2
# print(output)

# Convert a String to a Number
# take_input = input("Here gimme a number and i convert to string mmkay: ")
# output = str(take_input)
# print(output)
# print(type(output))
# print("See it is string!")
# print("haahhahaah see this number? -> " + str(34523423423423) + " ya, you do dont you hahahahaha")

# f-strings
# name = "David"
# heads = 1
# arms = 2
# print(f"{name} has {heads} heads and {arms} arms")
# print(f"if someone has {arms} arms and then you multiply that by 2 you get: {arms * 2}")

# Find a String in a String
# is case sensitive
# only finds the first instance of a string that shows up multipel times
# only accepts a string
# input = "Hi my name is Billy"
# print(input.find("name"))
# print(input.find("blah"))

# Replace
# print("Hi my name is billy jean".replace("billy jean", "bobby conners"))

# Numbers and Math
# combine an int and float and the result is a float
# print(1 + 3.0)
# print(1 - 3)
# print(9 // 4)  # The // operator first divides the number on the left by the number on the right and then rounds down to an integer.
# print(2 ** 2)  # Exponent.
# print(20 % 7)  # Remainder after division.
# print(0.1 + 0.2)

# Math Functions
# print(round(3.2))
# print(round(3.223234,3))
# print(abs(-3))
# print(pow(2,3))
# num = 3.0
# print(num.is_integer())

# Formating Numbers
# num = 7.123
# print(f"This is a number: {num:.2f}")

# Functions
# print(type(len))
# len = "blahahahahahah"
# print(len)
# del(len)
# print(len)
# num_letters = len("four")
# print(num_letters)

# Write Own Function
# First line of code in a function is called a function siganture.
# Have to define function before you can use it!
# When spacing inside the function have to use the same amount of space per inside line.
# def multiply(x, y):
#     product = x * y
#     return product
#
# print(multiply(3, 2))

# More Function
# def greet(name):
#     return f"Hello, my name is {name}."
# print(greet("David"))
# def convert_cel_to_far():
#     celsius = input("Enter a temperature in celsius: ")
#     F = float(celsius) * 9/5 + 32
#     return F
# print(convert_cel_to_far())

# Loops
# n = 1
# while n < 5:
#     print(n)
#     n = n + 1

# num = float(input("Enter a positive number: "))
# while num <= 0:
#     print("thats not a positive number!")
#     num = float(input("Enter a positive number: "))

# for blah in "python":
#     print (blah)

# word = "Python"
# index = 0
# while index < len(word):
#     print(word[index])
#     index = index + 1

# print(range(3))
#

# for n in range(3,7):
#     print(n * n)

# amount = float(input("Enter an amount: "))
# for num_people in range(2, 6):
#     print(f"{num_people} people: ${amount / num_people:,.2f} each")

# for n in range(1, 4):
#     for j in range(4, 7):
#         print(f"n = {n}, j = {j}")

# Variable Scope
# Local, Enclosing, Global, Built-in
# x = "Hello World"
# def func():
#     x = 2
#     print(f"inside func has the value: {x}")
# func()
# print(f"outside func has the value: {x}")

# def outer_func():
#     x = 2.5
#     def inner_func():
#         y = 4
#         x = 55
#         print(y)
#         print(x)
#     inner_func()
# outer_func()

# total = 0
# def add_to_total(n):
#     global total  # Access the global total
#     total = total + n
# add_to_total(5)
# print(total)

# More For Loops
# fruits = ["bblah", "hah", "jah"]
# for x in fruits:
#     print(x)
#     if x == "hah":
#         break

# fruits = ["bblah", "hah", "jah"]
# for x in range(1, 11):
#     print(x)

# Conditionals F T W
# on = False
# if on:
#     print("blah")

# print("a" < "z")

# And keyword
# num = 3
# num2 = 8
# if num <= num2 and False:
#     print("Is true")

# Or keyword
# num = 3
# num2 = 8
# if num <= num2 or False:
#     print("Is true")

# counter = 0
# while counter < 10:
#     counter = counter + 1
#     if counter == 5:
#         print("fivvveeeeeeeee")
#     if not counter != 3:
#         print("yess")
#     print(counter);

# print(True and not (1 != 1))
# print(("A" != "A") or not (2 >= 3))

# a = 1
# b = 2
# if a > b:
#     print("a > b")
# elif a == b:
#     print("a == b")
# else:
#     print("a < b i guess sighhhhh")

# if True == False:
#     print("true")
# else:
#     print("i guess its false")

# Program!
# sport = input("Enter a sport: ")
# p1_score = int(input("Enter player 1 score: "))
# p2_score = int(input("Enter player 2 score: "))
#
# if sport.lower() == "basketball":
#     if p1_score == p2_score:
#         print("The game is a draw.")
#     elif p1_score > p2_score:
#         print("Player 1 wins.")
#     else:
#         print("Player 2 wins.")
# elif sport.lower() == "golf":
#     if p1_score == p2_score:
#         print("The game is a draw.")
#     elif p1_score < p2_score:
#         print("Player 1 wins.")
#     else:
#         print("Player 2 wins.")
# else:
#     print("Unknown sport")

# continue and break keywords

# for i in range(0, 4):
#     if i == 2:
#         continue
#     print(i)
# print(f"Finished with i = {i}")
#
# for i in range(0, 4):
#     if i == 2:
#         break
#     print(i)
# print(f"Finished with i = {i}")

# phrase = "it marks Xthe spot "
# for character in phrase:
#     if character == "X":
#         break
#     else:
#         print("There was no 'X' in the phrase")

# continue is kind of like skip
# for n in range(0,10):
#     if n == 5:
#         continue
#     print(n)

# number = int(input("Enter an integer: "))

# try:
#     number = int(input("Enter an integer: "))
# except ValueError:
#     print("That was not an integer")

# def divide(num1, num2):
#     try:
#         print(num1 / num2)
#     except NameError:
#         print("Both arguments must be numbers")
#     except TypeError:
#         print("Both arguments must be numbers")
#     except ZeroDivisionError:
#         print("num2 must not be 0")
#     except:
#         print("somedin else went wrong and i dont know what it was")
#
# divide(22, gg)

# random package
# import random
# print(random.randint(1, 10))

# my_first_tuple = (1, 2, 3)
# print(my_first_tuple)
# x = (1,)
# print(x)
# y = tuple("Python")
# print(y)
# print(len(y))

# vowels = ("a", "e", "i", "o", "u")
# for vowel in vowels:
#     print(vowel.upper())

# coordinates = 3.23, 3.234
# print(coordinates)

# groceries = "eggs, milk, meat"
# grocery_list = groceries.split(", ")
# print(grocery_list)

# numbers = [1, 2, 3, 4]
# numbers.insert(0, 0)
# print(numbers)

# colors = ["red", "yellow", "green", "blue", "orange"]
# print(colors)
# print(colors.pop())
# colors.append("grey")
# print(colors)
# colors.extend(["violet", "ultraviolet"])
# print(colors)
# colors.insert(len(colors), "pink")
# print(colors)

# nums = [1, 2, 3, 4, 5]
# total = 0
# for number in nums:
#     total = total + number
# print(total)
# print(sum(nums))
# print(min(nums))
# print(max(nums))

# Sorting
# list_of_nums = [1, 7, 2, 3, 5]
# list_of_nums.sort()
# print(list_of_nums)
#
# list_of_letters = ["z", "a", "w", "s"]
# list_of_letters.sort()
# print(list_of_letters)

# Dictionaries
# capitals = {
#     "California": "Sacramento",
#     "British Columbia": "Victoria",
#     "Texas": "Austin",
# }
# capitals["Colorado"] = "Denver"
# print(capitals)
# del capitals["Texas"]
# print(capitals)

# states = {
#     "California": {
#         "capital": "Sacramento",
#         "flower": "rose"
#     },
#     "British Columbia": {
#         "capital": "Victoria",
#         "flower": "grass"
#     },
#     "Ontario": {
#         "capital": "Ottawa",
#         "flower": "prickle bush"
#     },
#     "Texas": {
#         "capital": "Austin",
#         "flower": "lily"
#     }
# }
# print(states["Ontario"]["capital"])

# OOP

# class Dog:
#
#     species = "Canis familiaris"
#
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
#     def __str__(self):
#         return f"{self.name} is {self.age} years old"
#
#     def speak(self, sound):
#         return f"{self.name} goes {sound}"
#
#     def bark(self):
#         return "Bark!"
#
# class Dachshund(Dog):  # This is how we make a sub class.
#     def speak(self, sound="yabber yabber"):
#         return f"{self.name} says {sound}"
#
# buddy = Dog("Buddy", 9)
# carl = Dachshund("Carl", 12)
# print(buddy)
# print(carl)
# print(carl.bark())
# print(carl.speak())
# print(buddy.speak("Woof Woof"))

# Pass values in the function definition
# def example(x = 5, y = 2):
#     return x * y
#
# print(example())
# import example_module
# print(example_module.add(2, 2))

# Import as other name
# import example_module as math_module
#
# print(math_module.add(2, 2))

# import as
# from example_module import add
# print(add(2, 2))

# can subfolder modules but then must reference subfolder directory eg: mypackage

# import mypackage.module1
# import mypackage.module2
# print(mypackage.module1.hello())
# print(mypackage.module2.goodbye())

# All the different import methods
# import <package>
# import <package> as <other_name>
# from <package> import <module>
# from <package> import <module> as <other_name>












































































































#
