// https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/

var input = 'xxxxxxxxyyyyyyyy';
var x_counter = 0;
var y_counter = 0;

for (var i = 0; i < input.length; i++) {
  if (input.charAt(i) === 'x') {
    x_counter = x_counter + 1;
  } else {
    y_counter = y_counter + 1;
  }
}

console.log(input);
console.log(x_counter === y_counter);


// Optional bonus
// Given a string containing only lowercase letters, find whether every letter that appears in the string appears the same number of times. Don't forget to handle the empty string ("") correctly!
// balanced_bonus("xxxyyyzzz") => true
// balanced_bonus("abcdefghijklmnopqrstuvwxyz") => true
