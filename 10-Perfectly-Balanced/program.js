// https://www.reddit.com/r/dailyprogrammer/comments/afxxca/20190114_challenge_372_easy_perfectly_balanced/

// var input = 'xxxxxxxxyyyyyyyy';
// var x_counter = 0;
// var y_counter = 0;
//
// for (var i = 0; i < input.length; i++) {
//   if (input.charAt(i) === 'x') {
//     x_counter = x_counter + 1;
//   } else {
//     y_counter = y_counter + 1;
//   }
// }
//
// console.log(input);
// console.log(x_counter === y_counter);


// Optional bonus
// Given a string containing only lowercase letters, find whether every letter that appears in the string appears the same number of times. Don't forget to handle the empty string ("") correctly!
// balanced_bonus("xxxyyyzzz") => true
// balanced_bonus("abcdefghijklmnopqrstuvwxyz") => true

var input = 'fffhhhlll';
var counter = {};

for (var i = 0; i < input.length; i++) {
  counter[input.charAt(i)] = (counter[input.charAt(i)] + 1) || 1;
}

const values = Object.values(counter);

let valid = true;

for (var i = 0; i < values.length; i++) {
  if (i !== 0) {
    if (values[i - 1] !== values[i]) {
      valid = false;
      break;
    }
  }
}

console.log("Valid: ", valid);
















//
