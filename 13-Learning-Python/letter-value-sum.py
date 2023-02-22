# letter-value-sum.py

# Assign every lowercase letter a value, from 1 for a to 26 for z. Given a string of lowercase letters, find the sum of the values of the letters in the string.

# lettersum("") => 0
# lettersum("a") => 1
# lettersum("z") => 26
# lettersum("cab") => 6
# lettersum("excellent") => 100
# lettersum("microspectrophotometries") => 317

def get_num_from_letter(letter):
    return ord(letter) - 96

def lettersum(input):
    if input == "":
        return 0
    total = 0
    for letter in input:
        total = total + get_num_from_letter(letter)
    return total

print(lettersum(""))
print(lettersum("a"))
print(lettersum("z"))
print(lettersum("cab"))
print(lettersum("excellent"))
print(lettersum("microspectrophotometries"))
















































































































































#
