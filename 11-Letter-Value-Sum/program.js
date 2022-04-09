// https://www.reddit.com/r/dailyprogrammer/comments/onfehl/20210719_challenge_399_easy_letter_value_sum/

// Assign every lowercase letter a value, from 1 for a to 26 for z. Given a string of lowercase letters, find the sum of the values of the letters in the string.
//
// lettersum("") => 0
// lettersum("a") => 1
// lettersum("z") => 26
// lettersum("cab") => 6
// lettersum("excellent") => 100
// lettersum("microspectrophotometries") => 317

var input = "microspectrophotometries";
var convert_input_to_array;
var add_it_up = 0;
var output;

var alphabet = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26
};

convert_input_to_array = input.split('');

output = convert_input_to_array.forEach(function(x) {
  add_it_up = add_it_up + alphabet[x]
});

output = add_it_up;

console.log(output);



































//
